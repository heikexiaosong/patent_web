package com.gavel.report.db.entity;

import java.util.Date;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "REPORTPARAM", name = "REPORTPARAM")
public class Reportparam extends BaseEntity {

   	/**
	 * 
	 */
	private static final long serialVersionUID = 6901461786483710076L;
	@FieldMeta(fieldName = "REPORTPARAM_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "REPORTPARAM_CSBM", caption = "参数编码", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 2)
	private String csbm;
	@FieldMeta(fieldName = "REPORTPARAM_CSMC", caption = "参数名称", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String csmc;
	@FieldMeta(fieldName = "REPORTPARAM_CSLX", caption = "参数类型", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String cslx;
	@FieldMeta(fieldName = "REPORTPARAM_TYPE", caption = "参数类别", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String type;
	@FieldMeta(fieldName = "REPORTPARAM_CSFZ", caption = "参数分组", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 5)
	private String csfz;
	@FieldMeta(fieldName = "REPORTPARAM_FHZLX", caption = "返回值类型", length = 10)
	private String fhzlx;
	@FieldMeta(fieldName = "REPORTPARAM_CSXX", caption = "参数选项", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 6)
	private String csxx;
	@FieldMeta(fieldName = "REPORTPARAM_TYBZ", caption = "停用标识", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 7)
	private String tybz;
	@FieldMeta(fieldName = "REPORTPARAM_TYRQ", caption = "停用日期", controlType = ControlType.DATETIME,  width = 20, showEdit = true, showList = true, index = 8)
	private Date tyrq;
	@FieldMeta(fieldName = "REPORTPARAM_BZ", caption = "备注", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 9)
	private String bz;
	@FieldMeta(fieldName = "REPORTPARAM_SYSVERSION", caption = "系统版本", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 10)
	private Integer sysversion;
	@FieldMeta(fieldName = "REPORTPARAM_WHRID", caption = "维护人编码", autoUserId = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 11)
	private String whrid;
	@FieldMeta(fieldName = "REPORTPARAM_WHR", caption = "维护人", autoUserName = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 12)
	private String whr;
	@FieldMeta(fieldName = "REPORTPARAM_WHSJ", caption = "维护时间", autoDateTime = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 13)
	private Date whsj;
	@FieldMeta(fieldName = "REPORTPARAM_CJRID", caption = "创建人编码", autoUserId = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 14)
	private String cjrid;
	@FieldMeta(fieldName = "REPORTPARAM_CJR", caption = "创建人", autoUserName = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 15)
	private String cjr;
	@FieldMeta(fieldName = "REPORTPARAM_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 16)
	private Date cjsj;
	@FieldMeta(fieldName = "REPORTPARAM_CSSM", caption = "参数说明")
	private String cssm;
	@FieldMeta(fieldName = "REPORTPARAM_FORMAT", caption = "标准格式")
	private String format;


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCsbm() {
		return csbm;
	}
	public void setCsbm(String csbm) {
		this.csbm = csbm;
	}
	public String getCsmc() {
		return csmc;
	}
	public void setCsmc(String csmc) {
		this.csmc = csmc;
	}
	public String getCslx() {
		return cslx;
	}
	public void setCslx(String cslx) {
		this.cslx = cslx;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	public String getCsfz() {
		return csfz;
	}
	public void setCsfz(String csfz) {
		this.csfz = csfz;
	}
	public String getFhzlx() {
		return fhzlx;
	}
	public void setFhzlx(String fhzlx) {
		this.fhzlx = fhzlx;
	}
	public String getCsxx() {
		return csxx;
	}
	public void setCsxx(String csxx) {
		this.csxx = csxx;
	}
	public String getTybz() {
		return tybz;
	}
	public void setTybz(String tybz) {
		this.tybz = tybz;
	}
	public Date getTyrq() {
		return tyrq;
	}
	public void setTyrq(Date tyrq) {
		this.tyrq = tyrq;
	}
	public String getBz() {
		return bz;
	}
	public void setBz(String bz) {
		this.bz = bz;
	}
	public Integer getSysversion() {
		return sysversion;
	}
	public void setSysversion(Integer sysversion) {
		this.sysversion = sysversion;
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

	public String getCssm() {
		return cssm;
	}

	public void setCssm(String cssm) {
		this.cssm = cssm;
	}
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
	
}






