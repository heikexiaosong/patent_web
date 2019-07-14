package com.gavel.configure.vo;

import com.gavel.common.base.entity.BaseEntity;


public class ItemCondition extends BaseEntity {
    
	private String id;

	private String cfgcode;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getCfgcode() {
		return cfgcode;
	}

	public void setCfgcode(String cfgcode) {
		this.cfgcode = cfgcode;
	}
}
