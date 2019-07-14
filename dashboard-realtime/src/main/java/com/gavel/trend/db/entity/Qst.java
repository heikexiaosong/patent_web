package com.gavel.trend.db.entity;

import java.util.Date;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "QST", name = "QST")
public class Qst extends BaseEntity {

   	@FieldMeta(fieldName = "QST_ID", caption = "ID", primaryKey = true, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "QST_CODE", caption = "编码", index = 2)
	private String code;
	@FieldMeta(fieldName = "QST_TITLE", caption = "名称", index = 3)
	private String title;
	@FieldMeta(fieldName = "QST_TYPE", caption = "类型", index = 4)
	private String type;
	@FieldMeta(fieldName = "QST_TIMESPAN", caption = "数据展示时间范围", index = 5)
	private Integer timespan;
	@FieldMeta(fieldName = "QST_INTERVAL", caption = "采样间隔", index = 6)
	private Integer interval;
	@FieldMeta(fieldName = "QST_WHRID", caption = "维护人编码", autoUserId = true, index = 7)
	private String whrid;
	@FieldMeta(fieldName = "QST_WHR", caption = "维护人", autoUserName = true, index = 8)
	private String whr;
	@FieldMeta(fieldName = "QST_WHSJ", caption = "维护时间", autoDateTime = true, index = 9)
	private Date whsj;
	@FieldMeta(fieldName = "QST_SYSVERSION", caption = "系统版本", index = 10)
	private Integer sysversion;
	@FieldMeta(fieldName = "QST_CJRID", caption = "创建人编码", autoUserId = true, initial = true, index = 11)
	private String cjrid;
	@FieldMeta(fieldName = "QST_CJR", caption = "创建人", autoUserName = true, initial = true, index = 12)
	private String cjr;
	@FieldMeta(fieldName = "QST_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, index = 13)
	private Date cjsj;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}	
	public void setCode(String code) {
		this.code = code;
	}
	public String getTitle() {
		return title;
	}	
	public void setTitle(String title) {
		this.title = title;
	}
	public String getType() {
		return type;
	}	
	public void setType(String type) {
		this.type = type;
	}
	public Integer getTimespan() {
		return timespan;
	}	
	public void setTimespan(Integer timespan) {
		this.timespan = timespan;
	}
	public Integer getInterval() {
		return interval;
	}	
	public void setInterval(Integer interval) {
		this.interval = interval;
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
	public Integer getSysversion() {
		return sysversion;
	}	
	public void setSysversion(Integer sysversion) {
		this.sysversion = sysversion;
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

}






