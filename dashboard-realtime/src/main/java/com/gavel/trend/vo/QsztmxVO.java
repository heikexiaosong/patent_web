package com.gavel.trend.vo;

import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.trend.db.entity.Qsztmx;



public class QsztmxVO extends Qsztmx {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(fieldName = "METRICS_UNIT", caption = "单位")
	private String metricunit;

    @FieldMeta(fieldName = "QSZT_ZTMC", caption = "主题名称", length = 60, notEmpty = true)
    private String ztmc;

    public String getMetricunit() {
		return metricunit;
	}

	public void setMetricunit(String metricunit) {
		this.metricunit = metricunit;
	}

	public String getZtmc() {
        return ztmc;
    }

    public void setZtmc(String ztmc) {
        this.ztmc = ztmc;
    }

    /*---------AutoEnd-------------*/

}
