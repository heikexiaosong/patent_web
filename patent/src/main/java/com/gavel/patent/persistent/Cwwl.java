package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "CWWL", name = "CWWL")
public class Cwwl extends BaseEntity {

   	@FieldMeta(fieldName = "CWWL_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "CWWL_YWRQ", caption = "日期", index = 2)
	private Date ywrq;
	@FieldMeta(fieldName = "CWWL_KH", caption = "客户", index = 3)
	private String kh;
	@FieldMeta(fieldName = "CWWL_YW", caption = "业务", index = 4)
	private String yw;
	@FieldMeta(fieldName = "CWWL_JE", caption = "金额", index = 5)
	private Integer je;
	@FieldMeta(fieldName = "CWWL_SKZH", caption = "收款账户", index = 6)
	private String skzh;
	@FieldMeta(fieldName = "CWWL_SJSKJE", caption = "实际收款金额", index = 7)
	private Integer sjskje;
	@FieldMeta(fieldName = "CWWL_FP", caption = "发票（税费）", index = 8)
	private Integer fp;
	@FieldMeta(fieldName = "CWWL_QBCB", caption = "全部成本", index = 9)
	private Integer qbcb;
	@FieldMeta(fieldName = "CWWL_GF", caption = "官费", index = 10)
	private Integer gf;
	@FieldMeta(fieldName = "CWWL_YJ", caption = "业绩", index = 11)
	private Integer yj;
	@FieldMeta(fieldName = "CWWL_TC", caption = "提成", index = 12)
	private Integer tc;
	@FieldMeta(fieldName = "CWWL_ZLMC", caption = "专利名称", index = 13)
	private String zlmc;
	@FieldMeta(fieldName = "CWWL_WHRID", caption = "维护人编码", autoUserId = true, index = 14)
	private String whrid;
	@FieldMeta(fieldName = "CWWL_WHR", caption = "维护人", autoUserName = true, index = 15)
	private String whr;
	@FieldMeta(fieldName = "CWWL_WHSJ", caption = "维护时间", autoDateTime = true, index = 16)
	private Date whsj;
	@FieldMeta(fieldName = "CWWL_SYSVERSION", caption = "系统版本", index = 17)
	private Integer sysversion;
	@FieldMeta(fieldName = "CWWL_YWY", caption = "业务员", index = 18)
	private String ywy;
	@FieldMeta(fieldName = "CWWL_STAT", caption = "状态", index = 19)
	private String stat;
	@FieldMeta(fieldName = "CWWL_DKR", caption = "打款人", index = 20)
	private String dkr;

	@FieldMeta(fieldName = "CWWL_WQRY", caption = "外勤", index = 20)
	private String wqry;

	@FieldMeta(fieldName = "CWWL_NQRY", caption = "内勤", index = 20)
	private String nqry;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public Date getYwrq() {
		return ywrq;
	}	
	public void setYwrq(Date ywrq) {
		this.ywrq = ywrq;
	}
	public String getKh() {
		return kh;
	}	
	public void setKh(String kh) {
		this.kh = kh;
	}
	public String getYw() {
		return yw;
	}	
	public void setYw(String yw) {
		this.yw = yw;
	}
	public Integer getJe() {
		return je;
	}	
	public void setJe(Integer je) {
		this.je = je;
	}
	public String getSkzh() {
		return skzh;
	}	
	public void setSkzh(String skzh) {
		this.skzh = skzh;
	}
	public Integer getSjskje() {
		return sjskje;
	}	
	public void setSjskje(Integer sjskje) {
		this.sjskje = sjskje;
	}
	public Integer getFp() {
		return fp;
	}	
	public void setFp(Integer fp) {
		this.fp = fp;
	}
	public Integer getQbcb() {
		return qbcb;
	}	
	public void setQbcb(Integer qbcb) {
		this.qbcb = qbcb;
	}
	public Integer getGf() {
		return gf;
	}	
	public void setGf(Integer gf) {
		this.gf = gf;
	}
	public Integer getYj() {
		return yj;
	}	
	public void setYj(Integer yj) {
		this.yj = yj;
	}
	public Integer getTc() {
		return tc;
	}	
	public void setTc(Integer tc) {
		this.tc = tc;
	}
	public String getZlmc() {
		return zlmc;
	}	
	public void setZlmc(String zlmc) {
		this.zlmc = zlmc;
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
	public String getYwy() {
		return ywy;
	}	
	public void setYwy(String ywy) {
		this.ywy = ywy;
	}

	public String getStat() {
		return stat;
	}

	public void setStat(String stat) {
		this.stat = stat;
	}

	public String getDkr() {
		return dkr;
	}

	public void setDkr(String dkr) {
		this.dkr = dkr;
	}

	public String getWqry() {
		return wqry;
	}

	public void setWqry(String wqry) {
		this.wqry = wqry;
	}

	public String getNqry() {
		return nqry;
	}

	public void setNqry(String nqry) {
		this.nqry = nqry;
	}
}






