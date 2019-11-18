package com.gavel.patent.vo;

import com.gavel.common.base.entity.BaseEntity;

import java.util.Date;


public class CwwlCondition extends BaseEntity {
    
	private String id;

	private String kh;

	private String yw;

	private Date start;

	private Date end;

	private String stat;

	private String type;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getKh() {
		return kh;
	}

	public void setKh(String kh) {
		this.kh = kh;
	}

	public String getYw() {
		return yw;
	}

	public void setYw(String yw) {
		this.yw = yw;
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

	public String getStat() {
		return stat;
	}

	public void setStat(String stat) {
		this.stat = stat;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
