package com.gavel.rtdatacfg.config;

import java.util.ArrayList;
import java.util.List;

public class ConfigItemGroup {

    private String name;

    private String type;
    
    private List<String> metrics;

    public ConfigItemGroup() {
    }

    public ConfigItemGroup(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<String> getMetrics() {
        return metrics;
    }

    public ConfigItemGroup addMetric(String metric){

        if ( metrics == null ) {
            metrics = new ArrayList<>();
        }

        metrics.add(metric);

        return this;
    }
}
