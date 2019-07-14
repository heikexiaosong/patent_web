package com.gavel.trend.vo;

import com.gavel.common.base.entity.BaseEntity;


public class QstitemCondition extends BaseEntity {
    
	/**
	 * 
	 */
	private static final long serialVersionUID = -3814231446738829352L;

	private String id;

	private String mid;
	
	private String grouptype;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getMid() {
		return mid;
	}

	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getGrouptype() {
		return grouptype;
	}
	public void setGrouptype(String grouptype) {
		this.grouptype = grouptype;
	}

}
