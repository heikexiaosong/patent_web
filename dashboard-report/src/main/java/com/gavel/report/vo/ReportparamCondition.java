package com.gavel.report.vo;

import com.gavel.common.base.entity.BaseEntity;


public class ReportparamCondition extends BaseEntity {
    
	/**
	 * 
	 */
	private static final long serialVersionUID = -1577760444276564996L;

	private String id;
	
	private String csbm;
	
	private String csmc;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getCsbm() {
		return csbm;
	}
	public void setCsbm(String csbm) {
		this.csbm = csbm;
	}
	public String getCsmc() {
		return csmc;
	}
	public void setCsmc(String csmc) {
		this.csmc = csmc;
	}

}
