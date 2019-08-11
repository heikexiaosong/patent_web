package com.gavel.patent.vo;

import com.gavel.common.base.entity.BaseEntity;


public class FmrCondition extends BaseEntity {
    
	private String id;
	private String code;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

    public void setCode(String code) {

        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
