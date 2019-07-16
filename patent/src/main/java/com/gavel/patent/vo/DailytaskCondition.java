package com.gavel.patent.vo;

import com.gavel.common.base.entity.BaseEntity;
import java.util.Date;

public class DailytaskCondition extends BaseEntity {
    
	private String id;

	private Date start;

	private Date end;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
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
