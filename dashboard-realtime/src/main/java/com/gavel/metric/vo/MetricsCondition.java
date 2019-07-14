package com.gavel.metric.vo;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;



public class MetricsCondition extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(caption = "ID", length = 32)
    private String id;
	@FieldMeta(caption = "指标", length = 100)
    private String metrics;
	@FieldMeta(caption = "名称", length = 60)
    private String name;
	@FieldMeta(caption = "所属采集区", length = 32)
    private String aeraid;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };

    public String getMetrics(){
        return metrics;
    };

    public void setMetrics(String metrics){
        this.metrics = metrics;
    };

    public String getName(){
        return name;
    };

    public void setName(String name){
        this.name = name;
    };

    public String getAeraid(){
        return aeraid;
    };

    public void setAeraid(String aeraid){
        this.aeraid = aeraid;
    };


	/*---------AutoEnd-------------*/

}
