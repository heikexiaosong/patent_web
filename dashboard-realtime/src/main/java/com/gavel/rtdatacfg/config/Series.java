package com.gavel.rtdatacfg.config;

import java.util.ArrayList;
import java.util.List;

/**
     *          {
             *              metric: "指标",
             *              name: "指标名称"
             *              color:"颜色"
             *              group: "分组名称"
             *              tag: "标签"
             *              points:[
             *                  {192212122: 12},
             *                  {192212123: 34},
             *      *           {192212124: 24}
             *              ]
             *          }
 *          **/

public class Series {

    private String metric;

    private String name;

    private String color;

    private String group;

    private String tag;

    private List<Object[]> points = new ArrayList<>();

    public String getMetric() {
        return metric;
    }

    public void setMetric(String metric) {
        this.metric = metric;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public List<Object[]> getPoints() {
        return points;
    }

    public void setPoints(List<Object[]> points) {
        this.points = points;
    }
}
