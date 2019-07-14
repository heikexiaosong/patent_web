package com.gavel.plugins.database.opentsdb.request;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SubQueries {
    private String aggregator;  // Required
    private String metric;      // Required

    private String downsample;

    private Boolean rate = false;
    private Map<String, String> tags = new HashMap<String, String>();
    private List<Filter> filters = new ArrayList<Filter>();

    public SubQueries() {
    }

    public SubQueries(String metric, String aggregator) {
        this.metric = metric;
        this.aggregator = aggregator;
    }

    public SubQueries(String metric, String aggregator, String downsample) {
        this.metric = metric;
        this.aggregator = aggregator;
        this.downsample = downsample;
    }

    public String getAggregator() {
        return aggregator;
    }

    public void setAggregator(String aggregator) {
        this.aggregator = aggregator;
    }

    public String getMetric() {
        return metric;
    }

    public void setMetric(String metric) {
        this.metric = metric;
    }

    public String getDownsample() {
        return downsample;
    }

    public void setDownsample(String downsample) {
        this.downsample = downsample;
    }

    public Boolean getRate() {
        return rate;
    }

    public void setRate(Boolean rate) {
        this.rate = rate;
    }

    public Map<String, String> getTags() {
        return tags;
    }

    public void setTags(Map<String, String> tags) {
        this.tags = tags;
    }

    public List<Filter> getFilters() {
        return filters;
    }

    public void setFilters(List<Filter> filters) {
        this.filters = filters;
    }
}
