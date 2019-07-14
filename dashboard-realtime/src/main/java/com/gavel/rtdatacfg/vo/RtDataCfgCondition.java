package com.gavel.rtdatacfg.vo;

import com.gavel.common.base.entity.BaseEntity;

public class RtDataCfgCondition extends BaseEntity {

    /**
	 * 
	 */
	private static final long serialVersionUID = 6563698368794532741L;

	private String ltype;       //高炉名称

    private Long timespan = 60L;//时间间隔

    private Integer rate = 1;     //频率

    public String getLtype() {
        return ltype;
    }

    public void setLtype(String ltype) {
        this.ltype = ltype;
    }

    public Long getTimespan() {
        return timespan;
    }

    public void setTimespan(Long timespan) {
        this.timespan = timespan;
    }

    public Integer getRate() {
        return rate;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }


}
