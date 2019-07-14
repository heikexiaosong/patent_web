package com.gavel.plugins.database.opentsdb.request;

import com.gavel.plugins.database.opentsdb.Metric;

import java.util.ArrayList;
import java.util.List;

public class LastQuery {

    private List<Metric> queries = new ArrayList<Metric>(); // Required

    private boolean resolveNames;  // Optional

    private int backScan;

    public List<Metric> getQueries() {
        return queries;
    }

    public void setQueries(List<Metric> queries) {
        this.queries = queries;
    }

    public boolean isResolveNames() {
        return resolveNames;
    }

    public void setResolveNames(boolean resolveNames) {
        this.resolveNames = resolveNames;
    }

    public int getBackScan() {
        return backScan;
    }

    public void setBackScan(int backScan) {
        this.backScan = backScan;
    }
}
