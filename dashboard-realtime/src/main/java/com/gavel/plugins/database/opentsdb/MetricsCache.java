package com.gavel.plugins.database.opentsdb;

import com.google.common.base.Strings;
import com.google.common.collect.Lists;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

public class MetricsCache {

    private static final Map<String, List<String>> METRICS = new ConcurrentHashMap<>();

    private static final Map<String, AtomicLong> TIMESTAMP = new ConcurrentHashMap<>();


    static {
        ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();
        executorService.scheduleWithFixedDelay(new Runnable() {
            @Override
            public void run() {
                System.out.println("MetricsCache 刷新 -- " + new Date());

                for (String host : METRICS.keySet()) {
                    METRICS.put(host, loadMetrics(host));

                    AtomicLong timestamp = null;
                    if ( TIMESTAMP.containsKey(host) ){
                        timestamp = TIMESTAMP.get(host);
                    }
                    if ( timestamp == null ){
                        timestamp = new AtomicLong();
                        TIMESTAMP.put(host, timestamp);
                    }

                    timestamp.set(System.currentTimeMillis());
                }

            }
        }, 10*1000, 10*60*1000, TimeUnit.MILLISECONDS);

    }

    public static synchronized List<String> getMetrics(String host){
        if (Strings.isNullOrEmpty(host) ){
            return Collections.EMPTY_LIST;
        }

        String key = host.trim().toLowerCase();

        if ( !METRICS.containsKey(key) ){
            METRICS.put(key, loadMetrics(key));
            TIMESTAMP.put(key, new AtomicLong(System.currentTimeMillis()));
        }

        if ( !METRICS.containsKey(key) ){
            return Collections.EMPTY_LIST;
        }

        return METRICS.get(key);
    }

    private static List<String> loadMetrics(String host) {
        List<String> result = Lists.newArrayList();

        Opentsdb opentsdb = new Opentsdb(host);
        try {
            result.addAll(opentsdb.metrics());
        } catch (Exception e){
            e.printStackTrace();
        }

        return result;
    }

}
