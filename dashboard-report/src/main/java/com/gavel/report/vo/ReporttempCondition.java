package com.gavel.report.vo;

import com.gavel.common.base.entity.BaseEntity;


public class ReporttempCondition extends BaseEntity {
    
	/**
	 * 
	 */
	private static final long serialVersionUID = -3521181372422736826L;
	private String id;
	
	private String bbbm;
	
	private String bbmc;

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
	public String getBbmc() {
		return bbmc;
	}
	public void setBbmc(String bbmc) {
		this.bbmc = bbmc;
	}

}
