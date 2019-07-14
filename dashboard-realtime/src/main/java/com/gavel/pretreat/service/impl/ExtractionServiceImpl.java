package com.gavel.pretreat.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.common.business.service.CommonService;
import com.gavel.plugins.database.opentsdb.MetricsCache;
import com.gavel.plugins.database.opentsdb.Opentsdb;
import com.gavel.plugins.database.opentsdb.request.Query;
import com.gavel.plugins.database.opentsdb.request.SubQueries;
import com.gavel.plugins.database.opentsdb.response.QueryResultItem;
import com.gavel.pretreat.dao.DatapointDao;
import com.gavel.pretreat.db.entity.Datapoint;
import com.gavel.pretreat.service.ExtractionService;

@Service("extractionService")
@Transactional
public class ExtractionServiceImpl implements ExtractionService {

    private static Logger LOG = LoggerFactory.getLogger(ExtractionServiceImpl.class);

    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyyMMdd");
    private static final DateFormat TIME_FORMAT = new SimpleDateFormat("HH:mm:ss");


    @Autowired
    private CommonService commonService;

    @Autowired
    private DatapointDao datapointDao;


    @Override
    public Object extraction(Date time, List<String> metrics) {


        String host = commonService.getStringOptionValue("TSDB.HOST");

        System.out.println("TSDB.HOST: " + host);

        Opentsdb opentsdb = new Opentsdb(host);

        List<String> exist_metrics = MetricsCache.getMetrics(host);

        Query query = new Query(time.getTime() - 1000*5, time.getTime());

        System.out.println( "target: " + metrics);
        for (String metric : metrics) {
            if ( exist_metrics.contains(metric.trim()) ){
                query.getQueries().add(new SubQueries(metric, "last"));
            } else {
                System.out.println(metric + " 不存在!");
            }
        }


        if ( query.getQueries().size() > 0 ) {
            List<QueryResultItem> itemList = opentsdb.query(query);
            for (QueryResultItem item : itemList) {
                System.out.println(item.getMetric() + ": " + (item.getDps()==null ? 0 : item.getDps().size()));
                if ( item.getDps()!=null && item.getDps().size() > 0 ){

                    TreeMap<String, Object> map = new TreeMap<String, Object>(item.getDps());

                    Map.Entry<String,Object> record = map.lastEntry();
                    if ( record==null ){
                        continue;
                    }
                    System.out.println("\t" + record.getKey() + ": " + record.getValue());


                    Double value = 0D;
                    if ( record.getValue() instanceof Number ){
                        value = ((Number) record.getValue()).doubleValue();
                    } else if ( record.getValue() instanceof String ){
                        value = Double.parseDouble(record.getValue().toString());
                    }

                    String id = DigestUtils.md5Hex(item.getMetric() + "_" + DATE_FORMAT.format(time) + "_" + TIME_FORMAT.format(time));

                    Datapoint datapoint = datapointDao.queryById(Datapoint.class, id);
                    if ( datapoint == null ){
                        datapoint = new Datapoint();
                        datapoint.setId(id);
                        datapoint.setMetric(item.getMetric());
                        datapoint.setName(item.getMetric());
                        datapoint.setThdate(DATE_FORMAT.format(time));
                        datapoint.setTime(TIME_FORMAT.format(time));
                        datapoint.setValue(value);
                        datapointDao.insert(datapoint);
                    } else {
                        datapoint.setValue(value);
                        datapointDao.update(datapoint);
                    }

                    for (String key : map.keySet()) {
                        System.out.println("\t" + key + ": " + map.get(key) );
                    }
                    metrics.remove(item.getMetric());
                }

            }
        }

        for (String _metric : metrics) {
            String metric = _metric.trim();
            String id = DigestUtils.md5Hex(metric + "_" + DATE_FORMAT.format(time) + "_" + TIME_FORMAT.format(time));

            Datapoint datapoint = datapointDao.queryById(Datapoint.class, id);
            if ( datapoint == null ){
                datapoint = new Datapoint();
                datapoint.setId(id);
                datapoint.setMetric(metric);
                datapoint.setName(metric);
                datapoint.setThdate(DATE_FORMAT.format(time));
                datapoint.setTime(TIME_FORMAT.format(time));
                datapoint.setValue(0D);
                datapointDao.insert(datapoint);
            }
        }

        return null;
    }

    /**
     * 点数据提取处理
     *
     * @param startTime 数据开始查询时间
     * @param endTime   数据查询结束时间
     * @param algorithm 数据提取算法
     * @param metrics   数据指标列表
     * @return
     */
    @Override
    public Object extraction(Date startTime, Date endTime, String algorithm, List<String> metrics) {

        if ( Objects.isNull(algorithm) ){
            algorithm = "last";
        }

        String host = commonService.getStringOptionValue("TSDB.HOST");

        LOG.info("TSDB.HOST: " + host);

        Opentsdb opentsdb = new Opentsdb(host);

        List<String> exist_metrics = MetricsCache.getMetrics(host);

        Query query = new Query(startTime.getTime(), endTime.getTime());

        LOG.info( "target: " + metrics);
        for (String metric : metrics) {
            if ( exist_metrics.contains(metric.trim()) ){
                query.getQueries().add(new SubQueries(metric, "avg"));
            } else {
                LOG.warn(metric + " 不存在!");
            }
        }


        if ( query.getQueries().size() > 0 ) {
            List<QueryResultItem> itemList = opentsdb.query(query);
            for (QueryResultItem item : itemList) {
                LOG.info(item.getMetric() + ": " + (item.getDps()==null ? 0 : item.getDps().size()));
                double value = getValue(algorithm, item.getDps());

                String id = DigestUtils.md5Hex(item.getMetric() + "_" + DATE_FORMAT.format(endTime) + "_" + TIME_FORMAT.format(endTime));

                Datapoint datapoint = datapointDao.queryById(Datapoint.class, id);
                if ( datapoint == null ){
                    datapoint = new Datapoint();
                    datapoint.setId(id);
                    datapoint.setMetric(item.getMetric());
                    datapoint.setName(item.getMetric());
                    datapoint.setThdate(DATE_FORMAT.format(endTime));
                    datapoint.setTime(TIME_FORMAT.format(endTime));
                    datapoint.setValue(value);
                    datapointDao.insert(datapoint);
                } else {
                    datapoint.setValue(value);
                    datapointDao.update(datapoint);
                }

                metrics.remove(item.getMetric());
            }
        }

        for (String _metric : metrics) {
            String metric = _metric.trim();
            String id = DigestUtils.md5Hex(metric + "_" + DATE_FORMAT.format(endTime) + "_" + TIME_FORMAT.format(endTime));

            Datapoint datapoint = datapointDao.queryById(Datapoint.class, id);
            if ( datapoint == null ){
                datapoint = new Datapoint();
                datapoint.setId(id);
                datapoint.setMetric(metric);
                datapoint.setName(metric);
                datapoint.setThdate(DATE_FORMAT.format(endTime));
                datapoint.setTime(TIME_FORMAT.format(endTime));
                datapoint.setValue(0D);
                datapointDao.insert(datapoint);
            }
        }

        return null;

    }

    private static Double toDouble(Object object) {
        if ( object==null ){
            return 0.0;
        }

        if ( object instanceof Number ) {
            return ((Number)object).doubleValue();
        }

        if ( object instanceof String ) {
            try {
                return Double.parseDouble(object.toString());
            } catch (Exception e){
                LOG.error(e.getMessage(), e.getCause());
                return 0.0;
            }
        }

        return 0.0;
    }

    private static double getValue(String algorithm, Map<String, Object> dps) {
        if ( dps==null || dps.size() == 0 ){
            return 0.0;
        }

        Set<String> times = dps.keySet();
        Set<Double> datas =  dps.values().stream()
                                       .map(ExtractionServiceImpl::toDouble)
                                       .collect(Collectors.toSet());

        String key = null;
        switch ( algorithm ) {
            case "max": // 最大
                return datas.stream()
                            .max((d1, d2) ->  d1.compareTo(d2) )
                            .get();
            case "min": // 最小
                return datas.stream()
                        .max((d1, d2) ->  d2.compareTo(d1) )
                        .get();
            case "avg": // 平均

                double total = 0;
                for (Double data : datas) {
                    total += data.doubleValue();
                }

                return total/datas.size();

            case "first": // 最旧值
                key = times.stream()
                        .max((d1, d2) ->  d2.compareTo(d1) )
                        .get();

                return  toDouble(dps.get(key));
            default:
                // 默认你 last 最新值
                key = times.stream()
                        .max((d1, d2) ->  d1.compareTo(d2) )
                        .get();
                return  toDouble(dps.get(key));
        }

    }

    public static void main(String[] args) {
        Set<Double> datas = new HashSet<>();


        Map<String, Object> dps = new HashMap<>();


                dps.put("1560026700", 337.45176833333335);
                dps.put("1560026730", 337.3263916666666);
                dps.put("1560026760", 337.37461066666657);
                dps.put("1560026790", 337.4083666666667);
                dps.put("1560026820", 337.4228349999999);
                dps.put("1560026850", 337.34567333333325);
                dps.put("1560026880", 337.37942966666657);
                dps.put("1560026910", 337.2636959999999);
                dps.put("1560026940", 337.29262599999987);
                dps.put("1560026970", 337.2588703333333);
                dps.put("1560027000", 337.4276549999999);
                dps.put("1560027030", 337.5048143333333);
                dps.put("1560027060", 337.36978399999987);
                dps.put("1560027090", 337.55304033333323);
                dps.put("1560027120", 337.905094);
                dps.put("1560027150", 337.7363076666668);
                dps.put("1560027180", 337.85204400000003);
                dps.put("1560027210", 338.04494466666677);
                dps.put("1560027240", 338.179976);
                dps.put("1560027270", 338.2619616666668);
                dps.put("1560027300", 338.39699433333345);
                dps.put("1560027330", 338.62847066666666);
                dps.put("1560027360", 338.5706010000001);
                dps.put("1560027390", 338.6959886666666);
                dps.put("1560027420", 338.92264400000005);
                dps.put("1560027450", 339.32291966666656);
                dps.put("1560027480", 339.37597);
                dps.put("1560027510", 339.26505066666664);
                dps.put("1560027540", 339.4772439999999);
                dps.put("1560027570", 339.55922599999997);
                dps.put("1560027600", 339.14448400000003);
                dps.put("1560027630", 339.0914330000001);
                dps.put("1560027660", 339.0576733333332);
                dps.put("1560027690", 338.6188253333333);
                dps.put("1560027720", 338.695986);
                dps.put("1560027750", 338.623646);
                dps.put("1560027780", 338.5368406666667);
                dps.put("1560027810", 338.5127283333334);
                dps.put("1560027840", 338.51272900000004);
                dps.put("1560027870", 338.70080700000005);
                dps.put("1560027900", 338.55613333333343);
                dps.put("1560027930", 338.2667863333334);
                dps.put("1560027960", 338.4741533333334);
                dps.put("1560027990", 338.44521866666673);
                dps.put("1560028020", 338.07387933333337);


        System.out.println("last: " + getValue("last", dps));
        System.out.println("max: " + getValue("max", dps));
        System.out.println("min: " + getValue("min", dps));
        System.out.println("first: " + getValue("first", dps));
        System.out.println("avg: " + getValue("avg", dps));

    }
}
