package com.gavel.trend.service.impl;

import com.gavel.common.base.service.impl.BaseServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.NumberUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.plugins.database.opentsdb.MetricsCache;
import com.gavel.plugins.database.opentsdb.Opentsdb;
import com.gavel.plugins.database.opentsdb.request.Query;
import com.gavel.plugins.database.opentsdb.request.SubQueries;
import com.gavel.plugins.database.opentsdb.response.QueryResultItem;
import com.gavel.rtdatacfg.config.*;
import com.gavel.rtdatacfg.util.RTDataLoader;
import com.gavel.trend.dao.QsztmxDao;
import com.gavel.trend.db.entity.Qszt;
import com.gavel.trend.service.QsztfxService;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;
import com.google.common.base.Strings;
import com.google.common.collect.Lists;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;

@Service("qsztfsService")
public class QsztfxServiceImpl extends BaseServiceImpl implements QsztfxService{


	private static final Logger LOGGER = Logger.getLogger(QsztfxServiceImpl.class);


	@Autowired
	private QsztmxDao qsztmxDao;
	
	@Autowired
	private CommonService commonService;
	
	public List<QsztmxVO> loadQsztmxByQsztid(String id){
		if (StringUtils.isEmpty(id)) {
			setReturnMessage("需要一个指定的趋势主题进行分析！");
			return new ArrayList<>();
		}
		QsztmxCondition qsztmxCondition = new QsztmxCondition();
		qsztmxCondition.setMid(id);
		return qsztmxDao.query(qsztmxCondition).getRecords();
	}

	@Override
	public ChartData loadCharData(String id, Date startTime, Date endTime) {
		String host = commonService.getStringOptionValue("TSDB.HOST");
        Config config = loadConfig(id);
        if (NumberUtils.equals(config.getDuration().intValue(), 0)) {
        	config.setDuration(config.getInterval() * 10L);
        }
        if (startTime == null) {
        	startTime = new Date(endTime.getTime() - config.getDuration());
        }
		return RTDataLoader.loadRTData1(config, startTime, endTime, host);
	}
	
	public ChartData loadCharData(String id) {
		Date endTime = DateUtils.getDateTime();
		return loadCharData(id, null, endTime);
	}
	
	@Override
    public Config loadConfig(String id){
    	if ( id==null || id.length()==0 ){
            return null;
        }
        Qszt qszt = qsztmxDao.queryById(Qszt.class, id);
        if ( qszt==null ){
            return null;
        }
		List<QsztmxVO> qsztmxs = loadQsztmxByQsztid(id);
		Config config = new Config();
		config.setName(qszt.getZtmc());
		if (qszt.getInterval() != null ) {
        	if (qszt.getInterval() < 60)
        		config.setDownsample(qszt.getInterval().toString() + "s-avg");
        	else if (NumberUtils.GreaterEqual(qszt.getInterval(), 60) && 
        			NumberUtils.less(qszt.getInterval(), 3600)) {
        		config.setDownsample(qszt.getInterval()/60 + "m-avg");
        	}else {
        		config.setDownsample(qszt.getInterval()/3600 + "h-avg");
        	}
        }else {
        	config.setDownsample("5m-avg");
        }
		config.setDuration(qszt.getTimespan()*24*60*60*1000L);
        config.setInterval(qszt.getInterval()*1000);
		config.setPunctually(true);
		List<ConfigItemGroup> groupList = new ArrayList<>();
		List<ConfigItem> items = new ArrayList<>();
		for (QsztmxVO qsztmx : qsztmxs) {
			ConfigItem configItem = new ConfigItem();
			configItem.setId(qsztmx.getMetric());
			configItem.setName(qsztmx.getName());
			configItem.setUnit(qsztmx.getMetricunit());
			configItem.setColor(qsztmx.getColor());
			configItem.setType(qsztmx.getGroup());
			configItem.setXh(qsztmx.getXh());
			items.add(configItem);
			boolean bExist = false;
			for (ConfigItemGroup groupItem : groupList) {
				if (StringUtils.equalsIgnoreCase(groupItem.getName(), qsztmx.getGroup())) {
					bExist = true;
					break;
				}
			}
			if (!bExist) {
				ConfigItemGroup groupItem = new ConfigItemGroup();
				groupItem.setName(configItem.getType());
				groupList.add(groupItem);
			}
		}
		config.setItems(items);		
		config.setGroups(groupList);
		return config;
    }

    @Override
    public TrendResult loadTrendData(String id) {

		TrendResult result = new TrendResult();
		if ( id==null || id.length()==0 ){
			return result;
		}

		Qszt qszt = qsztmxDao.queryById(Qszt.class, id);
		if ( qszt==null ){
			return result;
		}

		List<QsztmxVO> qsztmxs = loadQsztmxByQsztid(qszt.getId());
		if ( qsztmxs!=null && qsztmxs.size() > 0 ){

			for (QsztmxVO qsztmx : qsztmxs) {
				Series series = new Series();
				series.setMetric(qsztmx.getMetric());
				series.setName(qsztmx.getName());
				series.setGroup(qsztmx.getGroup());
				series.setTag(qsztmx.getTag());
				series.setColor(qsztmx.getColor());

				result.getDatas().add(series);
			}
		}





		String host = commonService.getStringOptionValue("TSDB.HOST");
		if ( host==null || host.trim().length()==0 ){
			LOGGER.warn("Opentsdb Host 没有配置， 使用Mock数据");
			return result;
		}

		Config config = loadConfig(id);
		if (NumberUtils.equals(config.getDuration().intValue(), 0)) {
			config.setDuration(config.getInterval() * 10L);
		}

		Date endTime = DateUtils.getDateTime();
		Date startTime = new Date(endTime.getTime() - config.getDuration());




		Opentsdb opentsdb = new Opentsdb(host);
		Query query = new Query();
		query.setStart(startTime.getTime());
		query.setEnd(endTime.getTime());

		List<SubQueries> queries = new ArrayList<>();
		List<String> exist_metrics = MetricsCache.getMetrics(host);
		for (ConfigItem configItem : config.getItems()) {
			if ( exist_metrics.contains(configItem.getId()) ){
				if (Strings.isNullOrEmpty(config.getDownsample())){
					queries.add(new SubQueries(configItem.getId(), "avg"));
				} else {
					queries.add(new SubQueries(configItem.getId(), "avg", config.getDownsample())); //
				}
			} else {
				LOGGER.info("[Metric: " + configItem.getId() + "] not matched!");
			}
		}

		if ( queries.size() == 0 ){
			return result;
		}

		List<List<SubQueries>> subQueries = Lists.partition(queries, 50);
		for (List<SubQueries> subQuery : subQueries) {
			query.setQueries(subQuery);

			try {
				List<QueryResultItem> resultItems = opentsdb.query(query);
				for (QueryResultItem item : resultItems) {

					List<Object[]> points = new ArrayList<>();
					if ( item.getDps()!=null && item.getDps().size()>0 ){

						List<String> keys = new ArrayList<>(item.getDps().keySet());

						Collections.sort(keys);

						for (String key : keys) {
							points.add(new Object[]{Long.parseLong(key)*1000, item.getDps().get(key)});
						}
					}
					result.setPoints(item.getMetric(), points);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}

		}


		return result;

    }

	public static void main(String[] args) {
		List<Object[]> datas = new ArrayList<>();
		datas.add(new Object[]{111111L, 0.4D});
		datas.add(new Object[]{111112L, 0.5D});
		System.out.println(datas);
	}
}
