package com.gavel.metric.vo;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;

public class QsztfxCondition extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6787594564140837694L;

	@FieldMeta(caption = "趋势主题id")
	private String id;
	@FieldMeta(caption = "开始时间")
	private Date starTtime;
	@FieldMeta(caption = "结束时间")
	private Date endTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getStarTtime() {
		return starTtime;
	}

	public void setStarTtime(Date starTtime) {
		this.starTtime = starTtime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}


}
