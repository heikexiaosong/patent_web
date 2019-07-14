package com.gavel.trend.db.entity;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;



@TableMeta(id = "QSZTMX", name = "QSZTMX")
public class Qsztmx extends BaseEntity {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(fieldName = "QSZTMX_ID", caption = "ID", primaryKey = true, length = 32, codeStrategy = CodeStrategy.UUID)
    private String id;
	@FieldMeta(fieldName = "QSZTMX_MID", caption = "MID", masterFieldName = "QSZT_ID", length = 32)
    private String mid;
	@FieldMeta(fieldName = "QSZTMX_XH", caption = "序号")
    private Integer xh;
	@FieldMeta(fieldName = "QSZTMX_METRIC", caption = "指标", length = 100, notEmpty = true)
    private String metric;
	@FieldMeta(fieldName = "QSZTMX_NAME", caption = "指标名称", length = 60, notEmpty = true)
	private String name;
	@FieldMeta(fieldName = "QSZTMX_COLOR", caption = "颜色", length = 20)
    private String color;
	@FieldMeta(fieldName = "QSZTMX_GROUP", caption = "分组名称", length = 60)
	private String group;
	@FieldMeta(fieldName = "QSZTMX_TAG", caption = "标签", length = 20)
    private String tag;
	@FieldMeta(fieldName = "QSZTMX_WHRID", caption = "维护人编码", length = 20, autoUserId = true)
    private String whrid;
	@FieldMeta(fieldName = "QSZTMX_WHR", caption = "维护人", length = 30, autoUserName = true)
    private String whr;
	@FieldMeta(fieldName = "QSZTMX_WHSJ", caption = "维护时间", autoDateTime = true)
    private Date whsj;
	@FieldMeta(fieldName = "QSZTMX_SYSVERSION", caption = "系统版本")
    private Integer sysversion;

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

    public Integer getXh(){
        return xh;
    };

    public void setXh(Integer xh){
        this.xh = xh;
    };

    public String getMetric(){
        return metric;
    };

    public void setMetric(String metric){
        this.metric = metric;
    };

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor(){
        return color;
    };

    public void setColor(String color){
        this.color = color;
    };

    public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

    public String getWhrid(){
        return whrid;
    };

    public void setWhrid(String whrid){
        this.whrid = whrid;
    };

    public String getWhr(){
        return whr;
    };

    public void setWhr(String whr){
        this.whr = whr;
    };

    public Date getWhsj(){
        return whsj;
    };

    public void setWhsj(Date whsj){
        this.whsj = whsj;
    };

    public Integer getSysversion(){
        return sysversion;
    };

    public void setSysversion(Integer sysversion){
        this.sysversion = sysversion;
    };

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    /*---------AutoEnd-------------*/

}






