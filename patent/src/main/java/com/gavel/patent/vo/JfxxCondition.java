package com.gavel.patent.vo;

import com.gavel.common.base.entity.BaseEntity;

import java.util.Date;


public class JfxxCondition extends BaseEntity {
    
	private String id;


	private String zt;

	private String code;

	private String sqmc;

	private Date start;

	private Date end;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getZt() {
		return zt;
	}

	public void setZt(String zt) {
		this.zt = zt;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getSqmc() {
		return sqmc;
	}

	public void setSqmc(String sqmc) {
		this.sqmc = sqmc;
	}

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
}
