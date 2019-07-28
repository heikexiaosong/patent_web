package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "PROCESS", name = "PROCESS")
public class Process extends BaseEntity {

   	@FieldMeta(fieldName = "PROCESS_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "PROCESS_TYPE", caption = "类型", index = 2)
	private String type;
	@FieldMeta(fieldName = "PROCESS_BID", caption = "业务ID", index = 3)
	private String bid;
	@FieldMeta(fieldName = "PROCESS_NAME", caption = "名称", index = 4)
	private String name;
	@FieldMeta(fieldName = "PROCESS_ZT", caption = "状态", index = 5)
	private String zt;
	@FieldMeta(fieldName = "PROCESS_DCLR", caption = "待处理人", index = 6)
	private String dclr;
	@FieldMeta(fieldName = "PROCESS_CLR", caption = "处理人", index = 6)
	private String clr;
	@FieldMeta(fieldName = "PROCESS_CLSJ", caption = "处理时间", index = 7)
	private Date clsj;
	@FieldMeta(fieldName = "PROCESS_OPERA", caption = "操作", index = 8)
	private String opera;
	@FieldMeta(fieldName = "PROCESS_STEP", caption = "步骤", index = 9)
	private Integer step;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}	
	public void setType(String type) {
		this.type = type;
	}
	public String getBid() {
		return bid;
	}	
	public void setBid(String bid) {
		this.bid = bid;
	}
	public String getName() {
		return name;
	}	
	public void setName(String name) {
		this.name = name;
	}
	public String getZt() {
		return zt;
	}	
	public void setZt(String zt) {
		this.zt = zt;
	}
	public String getClr() {
		return clr;
	}	
	public void setClr(String clr) {
		this.clr = clr;
	}
	public Date getClsj() {
		return clsj;
	}	
	public void setClsj(Date clsj) {
		this.clsj = clsj;
	}
	public String getOpera() {
		return opera;
	}	
	public void setOpera(String opera) {
		this.opera = opera;
	}
	public Integer getStep() {
		return step;
	}	
	public void setStep(Integer step) {
		this.step = step;
	}

	public String getDclr() {
		return dclr;
	}

	public void setDclr(String dclr) {
		this.dclr = dclr;
	}
}






