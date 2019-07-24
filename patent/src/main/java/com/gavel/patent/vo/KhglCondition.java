package com.gavel.patent.vo;

import com.gavel.common.base.entity.BaseEntity;


public class KhglCondition extends BaseEntity {
    
	private String id;

	private String khmc;

	private String ywy;

	private boolean filter;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}

	public String getKhmc() {
		return khmc;
	}

	public void setKhmc(String khmc) {
		this.khmc = khmc;
	}

	public String getYwy() {
		return ywy;
	}

	public void setYwy(String ywy) {
		this.ywy = ywy;
	}

	public boolean isFilter() {
		return filter;
	}

	public void setFilter(boolean filter) {
		this.filter = filter;
	}
}
