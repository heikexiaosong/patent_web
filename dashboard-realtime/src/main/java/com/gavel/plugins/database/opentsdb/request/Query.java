package com.gavel.plugins.database.opentsdb.request;

import java.util.ArrayList;
import java.util.List;

public class Query {

    private Long start;         // Required

    private Long end;           // Optional. Default: current time

    private List<SubQueries> queries = new ArrayList<SubQueries>(); // Required

    private String timezone;  // Optional

    public Query() {
    }

    public Query(long timestamp) {
        this.start = timestamp -1000;
        this.end = timestamp;
    }

    public Query(long start, long end) {
        this.start = start;
        this.end = end;
    }


    public Long getStart() {
        return start;
    }

    public void setStart(Long start) {
        this.start = start;
    }

    public Long getEnd() {
        return end;
    }

    public void setEnd(Long end) {
        this.end = end;
    }

    public List<SubQueries> getQueries() {
        return queries;
    }

    public void setQueries(List<SubQueries> queries) {
        this.queries = queries;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }
}
