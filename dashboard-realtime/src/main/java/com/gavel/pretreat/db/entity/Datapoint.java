package com.gavel.pretreat.db.entity;

import java.util.Date;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "DATAPOINT", name = "DATAPOINT")
public class Datapoint extends BaseEntity {

   	/**
	 * 
	 */
	private static final long serialVersionUID = 2268656243093215013L;
	@FieldMeta(fieldName = "DATAPOINT_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "DATAPOINT_METRIC", caption = "指标ID", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 2)
	private String metric;
	@FieldMeta(fieldName = "DATAPOINT_NAME", caption = "指标名称", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String name;
	@FieldMeta(fieldName = "DATAPOINT_THDATE", caption = "日期", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String thdate;
	@FieldMeta(fieldName = "DATAPOINT_TIME", caption = "时间点", notEmpty = true, controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 5)
	private String time;
	@FieldMeta(fieldName = "DATAPOINT_VALUE", caption = "值", controlType = ControlType.FLOAT,  width = 10, showEdit = true, showList = true, index = 6)
	private Double value;
	@FieldMeta(fieldName = "DATAPOINT_WHRID", caption = "维护人编码", length = 20, autoUserId = true)
    private String whrid;
	@FieldMeta(fieldName = "DATAPOINT_WHR", caption = "维护人", length = 30, autoUserName = true)
    private String whr;
	@FieldMeta(fieldName = "DATAPOINT_WHSJ", caption = "维护时间", autoDateTime = true)
    private Date whsj;
	@FieldMeta(fieldName = "DATAPOINT_CJRID", caption = "创建人编码", length = 20, autoUserId = true)
    private String cjrid;
	@FieldMeta(fieldName = "DATAPOINT_CJR", caption = "创建人", length = 30, autoUserName = true)
    private String cjr;
	@FieldMeta(fieldName = "DATAPOINT_CJSJ", caption = "创建时间", autoDateTime = true)
    private Date cjsj;
	@FieldMeta(fieldName = "DATAPOINT_SYSVERSION", caption = "版本")
	private Integer sysversion;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getMetric() {
		return metric;
	}	
	public void setMetric(String metric) {
		this.metric = metric;
	}
	public String getName() {
		return name;
	}	
	public void setName(String name) {
		this.name = name;
	}
	public String getThdate() {
		return thdate;
	}	
	public void setThdate(String thdate) {
		this.thdate = thdate;
	}
	public String getTime() {
		return time;
	}	
	public void setTime(String time) {
		this.time = time;
	}
	public Double getValue() {
		return value;
	}	
	public void setValue(Double value) {
		this.value = value;
	}
	public String getWhrid() {
		return whrid;
	}
	public void setWhrid(String whrid) {
		this.whrid = whrid;
	}
	public String getWhr() {
		return whr;
	}
	public void setWhr(String whr) {
		this.whr = whr;
	}
	public Date getWhsj() {
		return whsj;
	}
	public void setWhsj(Date whsj) {
		this.whsj = whsj;
	}
	public String getCjrid() {
		return cjrid;
	}
	public void setCjrid(String cjrid) {
		this.cjrid = cjrid;
	}
	public String getCjr() {
		return cjr;
	}
	public void setCjr(String cjr) {
		this.cjr = cjr;
	}
	public Date getCjsj() {
		return cjsj;
	}
	public void setCjsj(Date cjsj) {
		this.cjsj = cjsj;
	}
	public Integer getSysversion() {
		return sysversion;
	}
	public void setSysversion(Integer sysversion) {
		this.sysversion = sysversion;
	}

}






