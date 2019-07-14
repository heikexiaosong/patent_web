package com.gavel.report.vo;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;


public class ReportinstCondition extends BaseEntity {
    
	private String id;

	private String bbbm;
	
	private Date bbrq;
	
	private Integer year;
	
	private Integer month;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getBbbm() {
		return bbbm;
	}

	public void setBbbm(String bbbm) {
		this.bbbm = bbbm;
	}
	public Date getBbrq() {
		return bbrq;
	}
	public void setBbrq(Date bbrq) {
		this.bbrq = bbrq;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Integer getMonth() {
		return month;
	}
	public void setMonth(Integer month) {
		this.month = month;
	}
	
	
}
