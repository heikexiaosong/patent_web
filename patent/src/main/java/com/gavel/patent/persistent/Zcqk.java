package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "ZCQK", name = "ZCQK")
public class Zcqk extends BaseEntity {

   	@FieldMeta(fieldName = "ZCQK_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "ZCQK_QKRQ", caption = "请款日期", index = 2)
	private Date qkrq;
	@FieldMeta(fieldName = "ZCQK_QKR", caption = "请款人", index = 3)
	private String qkr;
	@FieldMeta(fieldName = "ZCQK_QKYT", caption = "请款用途", index = 4)
	private String qkyt;
	@FieldMeta(fieldName = "ZCQK_JE", caption = "金额", index = 5)
	private Integer je;
	@FieldMeta(fieldName = "ZCQK_LXDW", caption = "联系单位", index = 6)
	private String lxdw;
	@FieldMeta(fieldName = "ZCQK_FKFS", caption = "付款方式", index = 7)
	private String fkfs;
	@FieldMeta(fieldName = "ZCQK_HM", caption = "户名", index = 8)
	private String hm;
	@FieldMeta(fieldName = "ZCQK_KHH", caption = "开户行", index = 9)
	private String khh;
	@FieldMeta(fieldName = "ZCQK_YHZH", caption = "银行帐号", index = 10)
	private String yhzh;
	@FieldMeta(fieldName = "ZCQK_BZ", caption = "备注", index = 11)
	private String bz;
	@FieldMeta(fieldName = "ZCQK_ZT", caption = "状态", index = 12)
	private String zt;
	@FieldMeta(fieldName = "ZCQK_WFID", caption = "工作流ID", index = 13)
	private String wfid;
	@FieldMeta(fieldName = "ZCQK_WFINSTID", caption = "工作流实例号", index = 14)
	private String wfinstid;
	@FieldMeta(fieldName = "ZCQK_WFPID", caption = "工作流状态", index = 15)
	private String wfpid;
	@FieldMeta(fieldName = "ZCQK_WFWUSERID", caption = "待处理人id", index = 16)
	private String wfwuserid;
	@FieldMeta(fieldName = "ZCQK_WFWUSERNAME", caption = "待处理人", index = 17)
	private String wfwusername;
	@FieldMeta(fieldName = "ZCQK_WFHUSERID", caption = "已处理人id", index = 18)
	private String wfhuserid;
	@FieldMeta(fieldName = "ZCQK_WFHUSERNAME", caption = "已处理人", index = 19)
	private String wfhusername;
	@FieldMeta(fieldName = "ZCQK_WHRID", caption = "维护人编码", autoUserId = true, index = 20)
	private String whrid;
	@FieldMeta(fieldName = "ZCQK_WHR", caption = "维护人", autoUserName = true, index = 21)
	private String whr;
	@FieldMeta(fieldName = "ZCQK_WHSJ", caption = "维护时间", autoDateTime = true, index = 22)
	private Date whsj;
	@FieldMeta(fieldName = "ZCQK_SYSVERSION", caption = "系统版本", index = 23)
	private Integer sysversion;
	@FieldMeta(fieldName = "ZCQK_CJRID", caption = "创建人编码", autoUserId = true, initial = true, index = 24)
	private String cjrid;
	@FieldMeta(fieldName = "ZCQK_CJR", caption = "创建人", autoUserName = true, initial = true, index = 25)
	private String cjr;
	@FieldMeta(fieldName = "ZCQK_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, index = 26)
	private Date cjsj;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public Date getQkrq() {
		return qkrq;
	}	
	public void setQkrq(Date qkrq) {
		this.qkrq = qkrq;
	}
	public String getQkr() {
		return qkr;
	}	
	public void setQkr(String qkr) {
		this.qkr = qkr;
	}
	public String getQkyt() {
		return qkyt;
	}	
	public void setQkyt(String qkyt) {
		this.qkyt = qkyt;
	}
	public Integer getJe() {
		return je;
	}	
	public void setJe(Integer je) {
		this.je = je;
	}
	public String getLxdw() {
		return lxdw;
	}	
	public void setLxdw(String lxdw) {
		this.lxdw = lxdw;
	}
	public String getFkfs() {
		return fkfs;
	}	
	public void setFkfs(String fkfs) {
		this.fkfs = fkfs;
	}
	public String getHm() {
		return hm;
	}	
	public void setHm(String hm) {
		this.hm = hm;
	}
	public String getKhh() {
		return khh;
	}	
	public void setKhh(String khh) {
		this.khh = khh;
	}
	public String getYhzh() {
		return yhzh;
	}	
	public void setYhzh(String yhzh) {
		this.yhzh = yhzh;
	}
	public String getBz() {
		return bz;
	}	
	public void setBz(String bz) {
		this.bz = bz;
	}
	public String getZt() {
		return zt;
	}	
	public void setZt(String zt) {
		this.zt = zt;
	}
	public String getWfid() {
		return wfid;
	}	
	public void setWfid(String wfid) {
		this.wfid = wfid;
	}
	public String getWfinstid() {
		return wfinstid;
	}	
	public void setWfinstid(String wfinstid) {
		this.wfinstid = wfinstid;
	}
	public String getWfpid() {
		return wfpid;
	}	
	public void setWfpid(String wfpid) {
		this.wfpid = wfpid;
	}
	public String getWfwuserid() {
		return wfwuserid;
	}	
	public void setWfwuserid(String wfwuserid) {
		this.wfwuserid = wfwuserid;
	}
	public String getWfwusername() {
		return wfwusername;
	}	
	public void setWfwusername(String wfwusername) {
		this.wfwusername = wfwusername;
	}
	public String getWfhuserid() {
		return wfhuserid;
	}	
	public void setWfhuserid(String wfhuserid) {
		this.wfhuserid = wfhuserid;
	}
	public String getWfhusername() {
		return wfhusername;
	}	
	public void setWfhusername(String wfhusername) {
		this.wfhusername = wfhusername;
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






