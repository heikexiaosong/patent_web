package com.gavel.pretreat.db.entity;

import java.util.Date;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "PRETREAT", name = "PRETREAT")
public class Pretreat extends BaseEntity {

   	@FieldMeta(fieldName = "PRETREAT_ID", caption = "ID", primaryKey = true, notEmpty = true, codeStrategy = CodeStrategy.UUID, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "PRETREAT_CODE", caption = "编码", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 2)
	private String code;
	@FieldMeta(fieldName = "PRETREAT_NAME", caption = "描述", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String name;
	@FieldMeta(fieldName = "PRETREAT_METRICS", caption = "数据点列表", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String metrics;
	@FieldMeta(fieldName = "PRETREAT_WHRID", caption = "维护人编码", autoUserId = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 5)
	private String whrid;
	@FieldMeta(fieldName = "PRETREAT_WHR", caption = "维护人", autoUserName = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 6)
	private String whr;
	@FieldMeta(fieldName = "PRETREAT_WHSJ", caption = "维护时间", autoDateTime = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 7)
	private Date whsj;
	@FieldMeta(fieldName = "PRETREAT_CJRID", caption = "创建人编码", autoUserId = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 8)
	private String cjrid;
	@FieldMeta(fieldName = "PRETREAT_CJR", caption = "创建人", autoUserName = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 9)
	private String cjr;
	@FieldMeta(fieldName = "PRETREAT_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 10)
	private Date cjsj;
	@FieldMeta(fieldName = "PRETREAT_SYSVERSION", caption = "系统版本", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 11)
	private Integer sysversion;
	@FieldMeta(fieldName = "PRETREAT_MKID", caption = "模块ID", controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 20)
	private String mkid;

	@FieldMeta(fieldName = "PRETREAT_ALGORITHM", caption = "取值算法", controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 5)
	private String algorithm;

	@FieldMeta(fieldName = "PRETREAT_WINDOW", caption = "数据查询窗口(秒)", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 6)
	private Integer window;

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
	public String getName() {
		return name;
	}	
	public void setName(String name) {
		this.name = name;
	}
	public String getMetrics() {
		return metrics;
	}	
	public void setMetrics(String metrics) {
		this.metrics = metrics;
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

	public String getMkid() {
		return mkid;
	}

	public void setMkid(String mkid) {
		this.mkid = mkid;
	}

	public String getAlgorithm() {
		return algorithm;
	}

	public void setAlgorithm(String algorithm) {
		this.algorithm = algorithm;
	}

	public Integer getWindow() {
		return window;
	}

	public void setWindow(Integer window) {
		this.window = window;
	}
}






