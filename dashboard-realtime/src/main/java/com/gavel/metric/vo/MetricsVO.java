package com.gavel.metric.vo;

import com.gavel.metric.persistent.Metrics;
import com.gavel.persistence.annotation.FieldMeta;


public class MetricsVO extends Metrics {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/

	@FieldMeta(fieldName = "METRICS_AREA_NAME", caption = "采集区名称", length = 100, notEmpty = true)
	private String areaname;

	public String getAreaname() {
		return areaname;
	}

	public void setAreaname(String areaname) {
		this.areaname = areaname;
	}

/*---------AutoEnd-------------*/

}
