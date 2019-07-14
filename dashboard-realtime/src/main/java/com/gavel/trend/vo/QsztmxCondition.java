package com.gavel.trend.vo;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;



public class QsztmxCondition extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(caption = "ID", length = 32)
    private String id;
	@FieldMeta(caption = "MID", length = 32)
    private String mid;
	@FieldMeta(caption = "type", length = 32)
    private String type;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };

    public String getMid(){
        return mid;
    };

    public void setMid(String mid){
        this.mid = mid;
    };


	/*---------AutoEnd-------------*/

}
