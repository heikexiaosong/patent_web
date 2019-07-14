package com.gavel.rtdatacfg.config;


import java.util.List;

public class Config {

    private String name;//名称

    private List<ConfigItem> items;

    private List<ConfigItemGroup> groups;

    private String downsample;

    private Long duration = 30L*1000L;

    private int interval = 1000;

    private boolean punctually = false;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getDownsample() {
        return downsample;
    }

    public void setDownsample(String downsample) {
        this.downsample = downsample;
    }
    
    public Long getDuration() {
		return duration;
	}

	public void setDuration(Long duration) {
		this.duration = duration;
	}

	public int getInterval() {
        return interval;
    }

    public void setInterval(int interval) {
        this.interval = interval;
    }

    public boolean isPunctually() {
        return punctually;
    }

    public void setPunctually(boolean punctually) {
        this.punctually = punctually;
    }
}
