package com.gavel.rtdatacfg.config;

import java.util.List;
import java.util.Map;

public class ChartData {

    private List<ConfigItem> items;

    private List<ConfigItemGroup> groups;

    private List<String> xaxis;

    private Map<String, List<Double>> datas;

    public ChartData() {
    }

    public ChartData(List<ConfigItem> items, List<ConfigItemGroup> groups) {
        this.items = items;
        this.groups = groups;
    }

    public List<ConfigItem> getItems() {
        return items;
    }

    public void setItems(List<ConfigItem> items) {
        this.items = items;
    }

    public List<ConfigItemGroup> getGroups() {
        return groups;
    }

    public void setGroups(List<ConfigItemGroup> groups) {
        this.groups = groups;
    }

    public Map<String, List<Double>> getDatas() {
        return datas;
    }

    public void setDatas(Map<String, List<Double>> datas) {
        this.datas = datas;
    }

    public List<String> getXaxis() {
        return xaxis;
    }

    public void setXaxis(List<String> xaxis) {
        this.xaxis = xaxis;
    }
}
