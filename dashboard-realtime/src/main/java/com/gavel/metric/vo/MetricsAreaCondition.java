package com.gavel.metric.vo;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;



public class MetricsAreaCondition extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(caption = "ID", length = 32)
    private String id;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };


	/*---------AutoEnd-------------*/

}
