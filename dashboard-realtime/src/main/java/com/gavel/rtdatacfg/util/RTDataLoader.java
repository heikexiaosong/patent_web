package com.gavel.rtdatacfg.util;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.log4j.Logger;
import org.joda.time.DateTime;

import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.config.Config;
import com.gavel.rtdatacfg.config.ConfigItem;
import com.gavel.rtdatacfg.config.DataPointCfg;
import com.gavel.common.utils.NumberUtils;
import com.gavel.plugins.database.opentsdb.MetricsCache;
import com.gavel.plugins.database.opentsdb.Opentsdb;
import com.gavel.plugins.database.opentsdb.request.Query;
import com.gavel.plugins.database.opentsdb.request.SubQueries;
import com.gavel.plugins.database.opentsdb.response.QueryResultItem;
import com.google.common.base.Strings;

public class RTDataLoader {

    private static final Logger LOGGER = Logger.getLogger(RTDataLoader.class);

    private static final Map<String, List<Double>> MOCK_DATA = new HashMap<>();


    public static ChartData last(Config config, Long duration, Integer interval, String host) {

        ChartData result = new ChartData(config.getItems(), config.getGroups());

        return result;
    }


    public static ChartData loadRTData(Config config, Long duration, Integer interval, String host) {

        if ( config == null ){
            throw new RuntimeException("没有找到对应的实时图配置!");
        }

        if ( duration == null ){
            duration = 60L;
        }

        if ( interval == null ){
            interval = 1;
        }
        ChartData result = new ChartData();
        result.setItems(config.getItems());
        result.setGroups(config.getGroups());
        duration += interval - 1;
        DateTime now = new DateTime();
        if ( config.isPunctually() ){
            now = now.withMillisOfSecond(0).withSecondOfMinute(0).withMinuteOfHour(0);
        }
        DateTime time = now.minusMillis(config.getDuration().intValue());
        List<String> xaxis = new ArrayList<>();
        while ( !time.isAfter(now.getMillis()) ) {
            xaxis.add(time.toString("dd HH:mm:ss"));
            time = time.plusMillis(config.getInterval());
        }
        result.setXaxis(xaxis);
        Map<String, List<Double>> dataMap = queryDatas(config, host, now.minusMillis(config.getDuration().intValue()).getMillis(), now.getMillis(), xaxis);
        result.setDatas(dataMap);
        return result;
    }


    public static Map<String, List<Double>> queryDatas(Config config, String host, long start, long end, List<String> xaxis){

        LOGGER.info("Cur:   " + System.currentTimeMillis());
        LOGGER.info("Start: " + start);
        LOGGER.info("End:   " + end);

        if ( host==null || host.trim().length()==0 ){
            LOGGER.warn("Opentsdb Host 没有配置， 使用Mock数据");
            return mockdata(start, end, xaxis);
        }

        Opentsdb opentsdb = new Opentsdb(host);

        Query query = new Query();
        query.setStart(start);
        query.setEnd(end);


        List<Double>  DEFAULT_DATA = new ArrayList<Double>();
        for (int i = 0; i < xaxis.size(); i++) {
            DEFAULT_DATA.add(0d);
        }

        Map<String, List<Double>> dataMap = new HashMap<>();

        List<SubQueries> queries = new ArrayList<>();

        List<String> exist_metrics = MetricsCache.getMetrics(host);
        for (ConfigItem configItem : config.getItems()) {
            if ( exist_metrics.contains(configItem.getId()) ){
                if (Strings.isNullOrEmpty(config.getDownsample())){
                    queries.add(new SubQueries(configItem.getId(), "avg"));
                } else {
                    queries.add(new SubQueries(configItem.getId(), "avg", config.getDownsample()));
                }
                LOGGER.info("[Metric: " + configItem.getId() + "] matched!");
            } else {
                LOGGER.info("[Metric: " + configItem.getId() + "] not matched!");
            }
            dataMap.put(configItem.getId(), DEFAULT_DATA);
        }

        query.setQueries(queries);
        try {
        	
            List<QueryResultItem> resultItems = opentsdb.query(query);
            for (QueryResultItem item : resultItems) {
                List<Double>  dataList = new ArrayList<>();
                DateTime startTime = new DateTime(start);
                DateTime endTime = new DateTime(end);
                while ( !startTime.isAfter(endTime.getMillis()) ) {
                    long i = startTime.getMillis()/1000;
                    double lastValue = 0d;
                    Object value = item.getDps().get(String.valueOf(i));
//                    LOGGER.info("i: " + i + " ==> " + value);
                    if ( value!=null && value instanceof BigDecimal){
                        lastValue = ((BigDecimal)value).doubleValue();
                    }
                    dataList.add(NumberUtils.round(lastValue, 2));
                    startTime = startTime.plusMillis(config.getInterval());
                }
                dataMap.put(item.getMetric(), dataList);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return dataMap;
    }
    
    
    public static ChartData loadRTData1(Config config, Date startTime, Date endTime, String host) {

        if ( config == null ){
            throw new RuntimeException("没有找到对应的实时图配置!");
        }
        ChartData result = new ChartData();

        result.setItems(config.getItems());
        result.setGroups(config.getGroups());


        DateTime end = new DateTime(endTime);
        DateTime start = new DateTime(startTime);
        DateTime time = new DateTime(startTime);
        if ( config.isPunctually() ){
        	if (config.getInterval() <= 60 * 1000) {
        		end = end.withMillisOfSecond(0).withSecondOfMinute(0);
                time = time.withMillisOfSecond(0).withSecondOfMinute(0);
                start = start.withMillisOfSecond(0).withSecondOfMinute(0);
        	}else {
        		end = end.withMillisOfSecond(0).withSecondOfMinute(0).withMinuteOfHour(0);
                time = time.withMillisOfSecond(0).withSecondOfMinute(0).withMinuteOfHour(0);
                start = start.withMillisOfSecond(0).withSecondOfMinute(0).withMinuteOfHour(0);
        	}
        }

        List<String> xaxis = new ArrayList<>();
        while (time.isBefore(end.getMillis()) ) {
            xaxis.add(String.valueOf(time.getMillis()));
            time = time.plusMillis(config.getInterval());
        }
        result.setXaxis(xaxis);
        Map<String, List<Double>> dataMap = queryDatas1(config, host, start.getMillis(), end.getMillis(), xaxis);
        result.setDatas(dataMap);

        return result;
    }

    private static Map<String, List<Double>> mockdata(long start, long end, List<String> xaxis) {

        List<Double>  DEFAULT_DATA = new ArrayList<Double>();
        for (int i = 0; i < xaxis.size(); i++) {
            DEFAULT_DATA.add(0d);
        }

        Map<String, List<Double>> dataMap = new HashMap<>();

        long step = (end - start) / xaxis.size() ;

        Config config = DataPointCfg.loadConfig("hs2");
        for (ConfigItem configItem : config.getItems()) {
            dataMap.put(configItem.getId(), DEFAULT_DATA);

            List<Double> _datas =  MOCK_DATA.get(configItem.getId());
            if ( _datas==null ){
                _datas = new ArrayList<>();
                _datas.add(0D);
                MOCK_DATA.put(configItem.getId(), _datas);
            }
            _datas.remove(0);

            Random random = new Random(configItem.hashCode());

            for (long i = 0; i < xaxis.size(); i++ ) {
                if ( _datas.size() < i ){
                    double lastValue = random.nextDouble();
                    BigDecimal bg = new BigDecimal(lastValue).setScale(2, RoundingMode.UP);
                    _datas.add(bg.doubleValue());
                }
            }

            dataMap.put(configItem.getId(), _datas);
        }
        return dataMap;
    }
    
    
    public static Map<String, List<Double>> queryDatas1(Config config, String host, long start, long end, List<String> xaxis){
    	
    	if ( host==null || host.trim().length()==0 ){
            LOGGER.warn("Opentsdb Host 没有配置， 使用Mock数据");
            return mockdata(start, end, xaxis);
        }
        Opentsdb opentsdb = new Opentsdb(host);
        Query query = new Query();
        query.setStart(start);
        query.setEnd(end);
        List<Double>  DEFAULT_DATA = new ArrayList<Double>();
        for (int i = 0; i < xaxis.size(); i++) {
            DEFAULT_DATA.add(0d);
        }
        Map<String, List<Double>> dataMap = new HashMap<>();
        List<SubQueries> queries = new ArrayList<>();
        List<String> exist_metrics = MetricsCache.getMetrics(host);
        for (ConfigItem configItem : config.getItems()) {
            if ( exist_metrics.contains(configItem.getId()) ){
                if (Strings.isNullOrEmpty(config.getDownsample())){
                    queries.add(new SubQueries(configItem.getId(), "avg"));
                } else {
                    queries.add(new SubQueries(configItem.getId(), "avg", config.getDownsample()));
                }
            } else {
                LOGGER.info("[Metric: " + configItem.getId() + "] not matched!");
            }
            dataMap.put(configItem.getId(), DEFAULT_DATA);
        }

        query.setQueries(queries);
        try {
            List<QueryResultItem> resultItems = opentsdb.query(query);
            for (QueryResultItem item : resultItems) {
                List<Double>  dataList = new ArrayList<>();
                for (String s : xaxis) {
                	double lastValue = 0d;
                	Object value = item.getDps().get(String.valueOf(Long.parseLong(s)/1000));
                	if ( value!=null && value instanceof BigDecimal){
                        lastValue = ((BigDecimal)value).doubleValue();
                    }
                    dataList.add(NumberUtils.round(lastValue, 2));
                }
                dataMap.put(item.getMetric(), dataList);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return dataMap;
    }
    

}
