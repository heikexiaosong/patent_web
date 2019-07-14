package com.gavel.report.db.entity;

import java.util.Date;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "REPORTINST", name = "REPORTINST")
public class Reportinst extends BaseEntity {

   	/**
	 * 
	 */
	private static final long serialVersionUID = 480795401793923541L;
	@FieldMeta(fieldName = "REPORTINST_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "REPORTINST_BBBM", caption = "报表编码", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 2)
	private String bbbm;
	@FieldMeta(fieldName = "REPORTINST_BBRQ", caption = "报表日期", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private Date bbrq;
	@FieldMeta(fieldName = "REPORTINST_BBMC", caption = "报表名称", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String bbmc;
	@FieldMeta(fieldName = "REPORTINST_ORGID", caption = "组织ID", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String orgid;
	@FieldMeta(fieldName = "REPORTINST_YEAR", caption = "年度", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 5)
	private Integer year;
	@FieldMeta(fieldName = "REPORTINST_MONTH", caption = "月份")
	private Integer month;
	@FieldMeta(fieldName = "REPORTINST_XH", caption = "序号", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 6)
	private Integer xh;
	@FieldMeta(fieldName = "REPORTINST_KSSJ", caption = "开始时间", controlType = ControlType.DATETIME,  width = 20, showEdit = true, showList = true, index = 7)
	private Date kssj;
	@FieldMeta(fieldName = "REPORTINST_JSSJ", caption = "结束时间", controlType = ControlType.DATETIME,  width = 20, showEdit = true, showList = true, index = 8)
	private Date jssj;
	@FieldMeta(fieldName = "REPORTINST_CALCTIME", caption = "计算时间", controlType = ControlType.DATETIME,  width = 20, showEdit = true, showList = true, index = 9)
	private Date calctime;
	@FieldMeta(fieldName = "REPORTINST_JSR", caption = "计算人", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 10)
	private String jsr;
	@FieldMeta(fieldName = "REPORTINST_BBSJ", caption = "报表数据", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 11)
	private String bbsj;
	@FieldMeta(fieldName = "REPORTINST_BZ", caption = "备注", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 12)
	private String bz;
	@FieldMeta(fieldName = "REPORTINST_SYSVERSION", caption = "系统版本", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 13)
	private Integer sysversion;
	@FieldMeta(fieldName = "REPORTINST_WHRID", caption = "维护人编码", autoUserId = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 14)
	private String whrid;
	@FieldMeta(fieldName = "REPORTINST_WHR", caption = "维护人", autoUserName = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 15)
	private String whr;
	@FieldMeta(fieldName = "REPORTINST_WHSJ", caption = "维护时间", autoDateTime = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 16)
	private Date whsj;
	@FieldMeta(fieldName = "REPORTINST_CJRID", caption = "创建人编码", autoUserId = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 17)
	private String cjrid;
	@FieldMeta(fieldName = "REPORTINST_CJR", caption = "创建人", autoUserName = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 18)
	private String cjr;
	@FieldMeta(fieldName = "REPORTINST_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 19)
	private Date cjsj;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getBbbm() {
		return bbbm;
	}	
	public void setBbbm(String bbbm) {
		this.bbbm = bbbm;
	}

	public Date getBbrq() {
		return bbrq;
	}
	public void setBbrq(Date bbrq) {
		this.bbrq = bbrq;
	}
	public String getBbmc() {
		return bbmc;
	}	
	public void setBbmc(String bbmc) {
		this.bbmc = bbmc;
	}
	public String getOrgid() {
		return orgid;
	}	
	public void setOrgid(String orgid) {
		this.orgid = orgid;
	}
	public Integer getYear() {
		return year;
	}	
	public Integer getMonth() {
		return month;
	}
	public void setMonth(Integer month) {
		this.month = month;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Integer getXh() {
		return xh;
	}	
	public void setXh(Integer xh) {
		this.xh = xh;
	}
	public Date getKssj() {
		return kssj;
	}	
	public void setKssj(Date kssj) {
		this.kssj = kssj;
	}
	public Date getJssj() {
		return jssj;
	}	
	public void setJssj(Date jssj) {
		this.jssj = jssj;
	}
	public Date getCalctime() {
		return calctime;
	}	
	public void setCalctime(Date calctime) {
		this.calctime = calctime;
	}
	public String getJsr() {
		return jsr;
	}	
	public void setJsr(String jsr) {
		this.jsr = jsr;
	}
	public String getBbsj() {
		return bbsj;
	}	
	public void setBbsj(String bbsj) {
		this.bbsj = bbsj;
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

}






