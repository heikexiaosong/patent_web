package com.gavel.pretreat.vo;

import com.gavel.common.base.entity.BaseEntity;

import java.util.Date;


public class DatapointCondition extends BaseEntity {
    
	/**
	 * 
	 */
	private static final long serialVersionUID = 5457695283069930636L;


	private String id;


	private Date start;

	private Date end;

	private String metric;
	
	private String thdate;
	
	private String time;
	
	//查询用
	private String beginDate;
	
	private String endDate;
	
	private String beginTime;
	
	private String endTime;

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}

	public String getMetric() {
		return metric;
	}

	public void setMetric(String metric) {
		this.metric = metric;
	}

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getThdate() {
		return thdate;
	}

	public void setThdate(String thdate) {
		this.thdate = thdate;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

}
