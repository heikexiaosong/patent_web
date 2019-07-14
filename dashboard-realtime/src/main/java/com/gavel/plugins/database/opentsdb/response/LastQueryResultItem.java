package com.gavel.plugins.database.opentsdb.response;

import java.util.HashMap;
import java.util.Map;

public class LastQueryResultItem {

    private String metric;

    private Map<String, String> tags = new HashMap<>();

    private long timestamp;

    private String value;

    private String tsuid;

    public String getMetric() {
        return metric;
    }

    public void setMetric(String metric) {
        this.metric = metric;
    }

    public Map<String, String> getTags() {
        return tags;
    }

    public void setTags(Map<String, String> tags) {
        this.tags = tags;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getTsuid() {
        return tsuid;
    }

    public void setTsuid(String tsuid) {
        this.tsuid = tsuid;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("LastQueryResultItem{");
        sb.append("metric='").append(metric).append('\'');
        sb.append(", tags=").append(tags);
        sb.append(", timestamp=").append(timestamp);
        sb.append(", value='").append(value).append('\'');
        sb.append(", tsuid='").append(tsuid).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
