package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;
import org.aspectj.apache.bcel.classfile.Code;


@TableMeta(id = "KHGL", name = "KHGL")
public class Khgl extends BaseEntity {

   	@FieldMeta(fieldName = "KHGL_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "KHGL_KHMC", caption = "客户名称", index = 2)
	private String khmc;
	@FieldMeta(fieldName = "KHGL_DWMC", caption = "单位名称", index = 3)
	private String dwmc;
	@FieldMeta(fieldName = "KHGL_LXDH", caption = "联系电话", index = 4)
	private String lxdh;
	@FieldMeta(fieldName = "KHGL_YX", caption = "邮箱", index = 5)
	private String yx;
	@FieldMeta(fieldName = "KHGL_DZ", caption = "地址", index = 6)
	private String dz;
	@FieldMeta(fieldName = "KHGL_ZYFW", caption = "主营范围", index = 7)
	private String zyfw;
	@FieldMeta(fieldName = "KHGL_BZ", caption = "备注", index = 8)
	private String bz;
	@FieldMeta(fieldName = "KHGL_WHRID", caption = "维护人编码", autoUserId = true, index = 9)
	private String whrid;
	@FieldMeta(fieldName = "KHGL_WHR", caption = "维护人", autoUserName = true, index = 10)
	private String whr;
	@FieldMeta(fieldName = "KHGL_WHSJ", caption = "维护时间", autoDateTime = true, index = 11)
	private Date whsj;
	@FieldMeta(fieldName = "KHGL_SYSVERSION", caption = "系统版本", index = 12)
	private Integer sysversion;
	@FieldMeta(fieldName = "KHGL_NLRY", caption = "内联人员", index = 13)
	private String nlry;
	@FieldMeta(fieldName = "KHGL_WLRY", caption = "外联人员", index = 14)
	private String wlry;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getKhmc() {
		return khmc;
	}	
	public void setKhmc(String khmc) {
		this.khmc = khmc;
	}
	public String getDwmc() {
		return dwmc;
	}	
	public void setDwmc(String dwmc) {
		this.dwmc = dwmc;
	}
	public String getLxdh() {
		return lxdh;
	}	
	public void setLxdh(String lxdh) {
		this.lxdh = lxdh;
	}
	public String getYx() {
		return yx;
	}	
	public void setYx(String yx) {
		this.yx = yx;
	}
	public String getDz() {
		return dz;
	}	
	public void setDz(String dz) {
		this.dz = dz;
	}
	public String getZyfw() {
		return zyfw;
	}	
	public void setZyfw(String zyfw) {
		this.zyfw = zyfw;
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
	public String getNlry() {
		return nlry;
	}	
	public void setNlry(String nlry) {
		this.nlry = nlry;
	}
	public String getWlry() {
		return wlry;
	}	
	public void setWlry(String wlry) {
		this.wlry = wlry;
	}

}






