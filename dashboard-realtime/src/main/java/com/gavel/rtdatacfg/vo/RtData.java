package com.gavel.rtdatacfg.vo;

import com.gavel.common.base.entity.BaseEntity;

import java.util.ArrayList;
import java.util.List;

public class RtData extends BaseEntity{


    private List<String> times  = new ArrayList<String>();//时间列
    private List<List<Double>> mrdatas = new ArrayList<List<Double>>();//数据列
    private List<String>  groupnames = new ArrayList<String>();//分组名称


    public List<String> getTimes() {
        return times;
    }

    public void setTimes(List<String> times) {
        this.times = times;
    }

    public List<List<Double>> getMrdatas() {
        return mrdatas;
    }

    public void setMrdatas(List<List<Double>> mrdatas) {
        this.mrdatas = mrdatas;
    }

    public List<String> getGroupnames() {
        return groupnames;
    }

    public void setGroupnames(List<String> groupnames) {
        this.groupnames = groupnames;
    }
}
