package com.gavel.trend.vo;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;



public class QsztCondition extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(caption = "ID", length = 32)
    private String id;
	@FieldMeta(caption = "主题编码", length = 20)
    private String ztid;
	@FieldMeta(caption = "主题名称", length = 60)
    private String ztmc;
	@FieldMeta(caption = "功能类型")
	private String type;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };

    public String getZtid(){
        return ztid;
    };

    public void setZtid(String ztid){
        this.ztid = ztid;
    };

    public String getZtmc(){
        return ztmc;
    };

    public void setZtmc(String ztmc){
        this.ztmc = ztmc;
    }

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	};


	/*---------AutoEnd-------------*/

}
