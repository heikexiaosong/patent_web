package com.gavel.configure.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.configure.dao.ItemDao;
import com.gavel.configure.db.entity.Item;
import com.gavel.configure.service.ItemService;
import com.gavel.configure.vo.ItemCondition;
import com.gavel.configure.vo.ItemVO;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.plugins.database.opentsdb.MetricsCache;
import com.gavel.plugins.database.opentsdb.Opentsdb;
import com.gavel.plugins.database.opentsdb.request.Query;
import com.gavel.plugins.database.opentsdb.request.SubQueries;
import com.gavel.plugins.database.opentsdb.response.QueryResultItem;
import com.google.common.base.Strings;
import com.google.common.collect.Lists;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service("itemService")
@Transactional
public class ItemServiceImpl extends BaseEditServiceImpl implements ItemService {

    private static Logger LOG = LoggerFactory.getLogger(ItemServiceImpl.class);

    @Autowired
    private ItemDao itemDao;

    @Autowired
    private CommonService commonService;


    // 指标 最新数据时间戳
    private static final Map<String, Long> METRICSTIMESTAMP_MAP = new ConcurrentHashMap<>();

    @Override
    public void initService() {
        addMaster(new Item());
    }

    @Override
	public RecordSet<ItemVO> query(ItemCondition condition) {
	    return itemDao.query(condition);
	}


	private long lastTimestamp(Set<String> metrics){
        long result = Long.MAX_VALUE;
        if ( CollectionUtils.isEmpty(metrics) || CollectionUtils.isEmpty(METRICSTIMESTAMP_MAP.keySet()) ){
            return result;
        }

        for (String metric : metrics) {
            if ( !METRICSTIMESTAMP_MAP.containsKey(metric) ){
                continue;
            }

            if ( METRICSTIMESTAMP_MAP.containsKey(metric) ){
                if ( METRICSTIMESTAMP_MAP.get(metric)!=null
                        && METRICSTIMESTAMP_MAP.get(metric) < result ){
                    result =  METRICSTIMESTAMP_MAP.get(metric).longValue();
                }
            }
        }


        return result;
    }

    @Override
    public List<ItemVO> loadItems(String code) {

        List<ItemVO> _itemVOS = itemDao.loadItems(code);
        if (CollectionUtils.isEmpty(_itemVOS)){
            return _itemVOS;
        }

        // 获取 Oentsdb 主机地址
        String host = commonService.getStringOptionValue("TSDB.HOST");
        LOG.info("TSDB.HOST: " + host);

        if ( Strings.isNullOrEmpty(host) ){
            throw new RuntimeException("Opentsdb 主机地址没有设置,  在系统参数中设置");
        }

        Map<String, Object> metricValueMap = new HashMap<>();

        List<String> exist_metrics = MetricsCache.getMetrics(host);
        if ( CollectionUtils.isNotEmpty(exist_metrics) ){
            List<ItemVO> matchItems =  _itemVOS.stream()
                                            .filter( e -> !Strings.isNullOrEmpty(e.getValue()))
                                            .filter( e -> exist_metrics.contains(e.getValue().trim()))
                                            .collect(Collectors.toList());
            if ( matchItems!=null && matchItems.size() > 0 ){

                Opentsdb opentsdb = new Opentsdb(host);

                Set<String> metrics = matchItems.stream()
                                                .map(ItemVO::getValue)
                                                .collect(Collectors.toSet());

                long defaultStart   = Calendar.getInstance().getTimeInMillis() - 1000*60*4; // 4分钟之前
                long start          = lastTimestamp(metrics);
                if ( start > System.currentTimeMillis() || start < defaultStart ){
                    start = defaultStart;
                }

                Query query = new Query(start);

                List<List<ItemVO>> itemsList = Lists.partition(matchItems, 50);
                for (List<ItemVO> items : itemsList) {
                    for (ItemVO item : items) {
                        query.getQueries().add(new SubQueries(item.getValue().trim(), "avg"));
                    }

                    List<QueryResultItem> itemList = opentsdb.query(query);
                    for (QueryResultItem item : itemList) {
                        metricValueMap.put(item.getMetric(), 0d);

                        if ( item.getDps()!=null && item.getDps().size()>0 ){
                            String key = item.getDps().keySet().stream()
                                                               .max(Comparator.comparing(String::toString))
                                                               .get();
                            METRICSTIMESTAMP_MAP.put(item.getMetric(), Long.parseLong(key)*1000);
                            metricValueMap.put(item.getMetric(), item.getDps().get(key));
                        }
                    }

                    query.getQueries().clear();
                }

            }
        }

        Random random = new Random();
        for (ItemVO item : _itemVOS) {
            if ( "RANDOM".equalsIgnoreCase(item.getType()) ) {
                item.setVal(random.nextFloat());
                continue;
            }
            if ( "TEXT".equalsIgnoreCase(item.getType()) ) {
                item.setVal(item.getValue());
                continue;
            }
            Object val = metricValueMap.get(item.getValue().trim());
            if ( Objects.nonNull(val) ){
                item.setVal(val);
            } else {
                item.setVal(0);
            }
        }

        return _itemVOS;
    }

    @Override
    public List<ItemVO> loadHistoryItems(String code, Date timestamp) {

        List<ItemVO> _itemVOS = itemDao.loadItems(code);
        if (CollectionUtils.isEmpty(_itemVOS)){
            return _itemVOS;
        }

        // 获取 Oentsdb 主机地址
        String host = commonService.getStringOptionValue("TSDB.HOST");
        LOG.info("TSDB.HOST: " + host);

        if ( Strings.isNullOrEmpty(host) ){
            throw new RuntimeException("Opentsdb 主机地址没有设置,  在系统参数中设置");
        }

        Map<String, Object> metricValueMap = new HashMap<>();

        List<String> exist_metrics = MetricsCache.getMetrics(host);
        if ( CollectionUtils.isNotEmpty(exist_metrics) ){
            List<ItemVO> matchItems =  _itemVOS.stream()
                    .filter( e -> !Strings.isNullOrEmpty(e.getValue()))
                    .filter( e -> exist_metrics.contains(e.getValue().trim()))
                    .collect(Collectors.toList());
            if ( matchItems!=null && matchItems.size() > 0 ){

                Opentsdb opentsdb = new Opentsdb(host);

                long end = timestamp.getTime() + 999;
                long start = end - 1000;

                Query query = new Query(start, end);

                List<List<ItemVO>> itemsList = Lists.partition(matchItems, 50);
                for (List<ItemVO> items : itemsList) {
                    for (ItemVO item : items) {
                        query.getQueries().add(new SubQueries(item.getValue().trim(), "avg"));
                    }

                    List<QueryResultItem> itemList = opentsdb.query(query);
                    for (QueryResultItem item : itemList) {
                        metricValueMap.put(item.getMetric(), 0d);

                        if ( item.getDps()!=null && item.getDps().size()>0 ){
                            String key = item.getDps().keySet().stream()
                                    .max(Comparator.comparing(String::toString))
                                    .get();
                            METRICSTIMESTAMP_MAP.put(item.getMetric(), Long.parseLong(key)*1000);
                            metricValueMap.put(item.getMetric(), item.getDps().get(key));
                        }
                    }

                    query.getQueries().clear();
                }

            }
        }

        Random random = new Random();
        for (ItemVO item : _itemVOS) {
            if ( "RANDOM".equalsIgnoreCase(item.getType()) ) {
                item.setVal(random.nextFloat());
                continue;
            }
            if ( "TEXT".equalsIgnoreCase(item.getType()) ) {
                item.setVal(item.getValue());
                continue;
            }
            Object val = metricValueMap.get(item.getValue().trim());
            if ( Objects.nonNull(val) ){
                item.setVal(val);
            } else {
                item.setVal(0);
            }
        }

        return _itemVOS;

    }

}
