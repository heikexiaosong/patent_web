package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "JFXX", name = "JFXX")
public class Jfxx extends BaseEntity {

   	@FieldMeta(fieldName = "JFXX_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "JFXX_CODE", caption = "案件编码", index = 2)
	private String code;
	@FieldMeta(fieldName = "JFXX_SQMC", caption = "申请名称", index = 3)
	private String sqmc;
	@FieldMeta(fieldName = "JFXX_SQH", caption = "申请号", index = 4)
	private String sqh;
	@FieldMeta(fieldName = "JFXX_FYMC", caption = "费用名称", index = 5)
	private String fymc;
	@FieldMeta(fieldName = "JFXX_JFJE", caption = "缴费金额", index = 6)
	private Integer jfje;
	@FieldMeta(fieldName = "JFXX_JFQX", caption = "缴费期限", index = 7)
	private Date jfqx;
	@FieldMeta(fieldName = "JFXX_ZT", caption = "状态", index = 8)
	private String zt;
	@FieldMeta(fieldName = "JFXX_JFRQ", caption = "缴费日期", index = 9)
	private Date jfrq;
	@FieldMeta(fieldName = "JFXX_JFR", caption = "缴费人", index = 10)
	private String jfr;
	@FieldMeta(fieldName = "JFXX_SJ", caption = "收据", index = 11)
	private String sj;
	@FieldMeta(fieldName = "JFXX_BZ", caption = "备注", index = 12)
	private String bz;
	@FieldMeta(fieldName = "JFXX_WHRID", caption = "维护人编码", autoUserId = true, index = 13)
	private String whrid;
	@FieldMeta(fieldName = "JFXX_WHR", caption = "维护人", autoUserName = true, index = 14)
	private String whr;
	@FieldMeta(fieldName = "JFXX_WHSJ", caption = "维护时间", autoDateTime = true, index = 15)
	private Date whsj;
	@FieldMeta(fieldName = "JFXX_SYSVERSION", caption = "系统版本", index = 16)
	private Integer sysversion;
	@FieldMeta(fieldName = "JFXX_YEAR", caption = "年份", index = 6)
	private Integer year;

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
	public String getSqmc() {
		return sqmc;
	}	
	public void setSqmc(String sqmc) {
		this.sqmc = sqmc;
	}
	public String getSqh() {
		return sqh;
	}	
	public void setSqh(String sqh) {
		this.sqh = sqh;
	}
	public String getFymc() {
		return fymc;
	}	
	public void setFymc(String fymc) {
		this.fymc = fymc;
	}
	public Integer getJfje() {
		return jfje;
	}	
	public void setJfje(Integer jfje) {
		this.jfje = jfje;
	}
	public Date getJfqx() {
		return jfqx;
	}	
	public void setJfqx(Date jfqx) {
		this.jfqx = jfqx;
	}
	public String getZt() {
		return zt;
	}	
	public void setZt(String zt) {
		this.zt = zt;
	}
	public Date getJfrq() {
		return jfrq;
	}	
	public void setJfrq(Date jfrq) {
		this.jfrq = jfrq;
	}
	public String getJfr() {
		return jfr;
	}	
	public void setJfr(String jfr) {
		this.jfr = jfr;
	}
	public String getSj() {
		return sj;
	}	
	public void setSj(String sj) {
		this.sj = sj;
	}
	public String getBz() {
		return bz;
	}	
	public void setBz(String bz) {
		this.bz = bz;
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

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}
}






