package com.gavel.report.db.entity;

import java.util.Date;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "REPORTTEMP", name = "REPORTTEMP")
public class Reporttemp extends BaseEntity {

   	/**
	 * 
	 */
	private static final long serialVersionUID = 1268333237723668551L;
	@FieldMeta(fieldName = "REPORTTEMP_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "REPORTTEMP_BBBM", caption = "报表编码", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 2)
	private String bbbm;
	@FieldMeta(fieldName = "REPORTTEMP_ORGID", caption = "组织ID", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String orgid;
	@FieldMeta(fieldName = "REPORTTEMP_BBMC", caption = "报表名称", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String bbmc;
	@FieldMeta(fieldName = "REPORTTEMP_SCGZ", caption = "报表名规则", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String scgz;
	@FieldMeta(fieldName = "REPORTTEMP_BBLX", caption = "报表类型", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 5)
	private String bblx;
	@FieldMeta(fieldName = "REPORTTEMP_BBZL", caption = "报表种类", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 6)
	private String bbzl;
	@FieldMeta(fieldName = "REPORTTEMP_BBFL", caption = "报表分类", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 7)
	private String bbfl;
	@FieldMeta(fieldName = "REPORTTEMP_BBNR", caption = "报表内容", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 8)
	private String bbnr;
	@FieldMeta(fieldName = "REPORTTEMP_KSD", caption = "报表统计开始点", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 9)
	private String ksd;
	@FieldMeta(fieldName = "REPORTTEMP_TYBZ", caption = "停用标志", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 10)
	private String tybz;
	@FieldMeta(fieldName = "REPORTTEMP_TYRQ", caption = "停用日期", controlType = ControlType.DATETIME,  width = 20, showEdit = true, showList = true, index = 11)
	private Date tyrq;
	@FieldMeta(fieldName = "REPORTTEMP_BZ", caption = "备注", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 12)
	private String bz;
	@FieldMeta(fieldName = "REPORTTEMP_SYSVERSION", caption = "系统版本", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 13)
	private Integer sysversion;
	@FieldMeta(fieldName = "REPORTTEMP_WHRID", caption = "维护人编码", autoUserId = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 14)
	private String whrid;
	@FieldMeta(fieldName = "REPORTTEMP_WHR", caption = "维护人", autoUserName = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 15)
	private String whr;
	@FieldMeta(fieldName = "REPORTTEMP_WHSJ", caption = "维护时间", autoDateTime = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 16)
	private Date whsj;
	@FieldMeta(fieldName = "REPORTTEMP_CJRID", caption = "创建人编码", autoUserId = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 17)
	private String cjrid;
	@FieldMeta(fieldName = "REPORTTEMP_CJR", caption = "创建人", autoUserName = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 18)
	private String cjr;
	@FieldMeta(fieldName = "REPORTTEMP_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 19)
	private Date cjsj;
	@FieldMeta(fieldName = "REPORTTEMP_MKID", caption = "模块ID", controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 20)
	private String mkid;

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
	public String getOrgid() {
		return orgid;
	}	
	public void setOrgid(String orgid) {
		this.orgid = orgid;
	}
	public String getBbmc() {
		return bbmc;
	}	
	public void setBbmc(String bbmc) {
		this.bbmc = bbmc;
	}

	public String getScgz() {
		return scgz;
	}

	public void setScgz(String scgz) {
		this.scgz = scgz;
	}

	public String getBblx() {
		return bblx;
	}	
	public void setBblx(String bblx) {
		this.bblx = bblx;
	}
	public String getBbzl() {
		return bbzl;
	}	
	public void setBbzl(String bbzl) {
		this.bbzl = bbzl;
	}
	public String getBbfl() {
		return bbfl;
	}	
	public void setBbfl(String bbfl) {
		this.bbfl = bbfl;
	}
	public String getBbnr() {
		return bbnr;
	}	
	public void setBbnr(String bbnr) {
		this.bbnr = bbnr;
	}
	public String getKsd() {
		return ksd;
	}	
	public void setKsd(String ksd) {
		this.ksd = ksd;
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

	public String getMkid() {
		return mkid;
	}

	public void setMkid(String mkid) {
		this.mkid = mkid;
	}
}






