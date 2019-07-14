package com.gavel.rtdatacfg.config;

import com.gavel.common.utils.StringUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class TrendResult {

    private List<Series> datas = new ArrayList<>();

    private Property property = new Property();


    public List<Series> getDatas() {
        return datas;
    }

    public Property getProperty() {
        return property;
    }

    public List<Object[]> setPoints(String metric, List<Object[]> points) {

        if ( metric==null || metric.length()==0 ){
            return Collections.EMPTY_LIST;
        }

        if ( datas==null ){
            datas = new ArrayList<>();
        }

        Series exist = null;
        for (Series data : datas) {
            if (StringUtils.equalsIgnoreCase(metric, data.getMetric())) {
                exist = data;
                break;
            }
        }

        if (  exist == null ){
            Series series = new Series();
            series.setMetric(metric);
            series.setName(metric);
            series.setPoints(points);
            datas.add(series);
            return Collections.EMPTY_LIST;
        }

        List<Object[]> old = exist.getPoints();
        exist.setPoints(points);

        return old;
    }

}
