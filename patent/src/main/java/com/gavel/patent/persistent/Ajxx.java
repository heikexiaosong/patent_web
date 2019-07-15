package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "AJXX", name = "AJXX")
public class Ajxx extends BaseEntity {

   	@FieldMeta(fieldName = "AJXX_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "AJXX_CODE", caption = "编号", index = 2)
	private String code;
	@FieldMeta(fieldName = "AJXX_TYPE", caption = "类型", index = 3)
	private String type;
	@FieldMeta(fieldName = "AJXX_BM", caption = "编码", index = 4)
	private String bm;
	@FieldMeta(fieldName = "AJXX_KH", caption = "客户", index = 5)
	private String kh;
	@FieldMeta(fieldName = "AJXX_SQR", caption = "申请人", index = 6)
	private String sqr;
	@FieldMeta(fieldName = "AJXX_SQH", caption = "申请号", index = 7)
	private String sqh;
	@FieldMeta(fieldName = "AJXX_SQMC", caption = "申请名称", index = 8)
	private String sqmc;
	@FieldMeta(fieldName = "AJXX_JXR", caption = "撰写人", index = 9)
	private String jxr;
	@FieldMeta(fieldName = "AJXX_SQRQ", caption = "申请日", index = 10)
	private Date sqrq;
	@FieldMeta(fieldName = "AJXX_SQF", caption = "申请费", index = 11)
	private Integer sqf;
	@FieldMeta(fieldName = "AJXX_ZT", caption = "状态", index = 12)
	private String zt;
	@FieldMeta(fieldName = "AJXX_NFJK", caption = "是否监控年费", index = 13)
	private String nfjk;
	@FieldMeta(fieldName = "AJXX_ZS", caption = "证书", index = 14)
	private String zs;
	@FieldMeta(fieldName = "AJXX_LB", caption = "类别", index = 15)
	private String lb;
	@FieldMeta(fieldName = "AJXX_DJR", caption = "递交人", index = 16)
	private String djr;
	@FieldMeta(fieldName = "AJXX_WHRID", caption = "维护人编码", autoUserId = true, index = 17)
	private String whrid;
	@FieldMeta(fieldName = "AJXX_WHR", caption = "维护人", autoUserName = true, index = 18)
	private String whr;
	@FieldMeta(fieldName = "AJXX_WHSJ", caption = "维护时间", autoDateTime = true, index = 19)
	private Date whsj;
	@FieldMeta(fieldName = "AJXX_SYSVERSION", caption = "系统版本", index = 20)
	private Integer sysversion;

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
	public String getType() {
		return type;
	}	
	public void setType(String type) {
		this.type = type;
	}
	public String getBm() {
		return bm;
	}	
	public void setBm(String bm) {
		this.bm = bm;
	}
	public String getKh() {
		return kh;
	}	
	public void setKh(String kh) {
		this.kh = kh;
	}
	public String getSqr() {
		return sqr;
	}	
	public void setSqr(String sqr) {
		this.sqr = sqr;
	}
	public String getSqh() {
		return sqh;
	}	
	public void setSqh(String sqh) {
		this.sqh = sqh;
	}
	public String getSqmc() {
		return sqmc;
	}	
	public void setSqmc(String sqmc) {
		this.sqmc = sqmc;
	}
	public String getJxr() {
		return jxr;
	}	
	public void setJxr(String jxr) {
		this.jxr = jxr;
	}
	public Date getSqrq() {
		return sqrq;
	}	
	public void setSqrq(Date sqrq) {
		this.sqrq = sqrq;
	}
	public Integer getSqf() {
		return sqf;
	}	
	public void setSqf(Integer sqf) {
		this.sqf = sqf;
	}
	public String getZt() {
		return zt;
	}	
	public void setZt(String zt) {
		this.zt = zt;
	}
	public String getNfjk() {
		return nfjk;
	}	
	public void setNfjk(String nfjk) {
		this.nfjk = nfjk;
	}
	public String getZs() {
		return zs;
	}	
	public void setZs(String zs) {
		this.zs = zs;
	}
	public String getLb() {
		return lb;
	}	
	public void setLb(String lb) {
		this.lb = lb;
	}
	public String getDjr() {
		return djr;
	}	
	public void setDjr(String djr) {
		this.djr = djr;
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

}






