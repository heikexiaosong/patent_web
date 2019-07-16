package com.gavel.patent.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "DAILYTASK", name = "DAILYTASK")
public class Dailytask extends BaseEntity {

   	@FieldMeta(fieldName = "DAILYTASK_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "DAILYTASK_THEDATE", caption = "日期", index = 2)
	private Date thedate;
	@FieldMeta(fieldName = "DAILYTASK_STAT", caption = "状态", index = 3)
	private String stat;
	@FieldMeta(fieldName = "DAILYTASK_TIME", caption = "处理时间", index = 4)
	private Date time;
	@FieldMeta(fieldName = "DAILYTASK_BZ", caption = "备注", index = 5)
	private String bz;
	@FieldMeta(fieldName = "DAILYTASK_NAME", caption = "名称", index = 5)
	private String name;
	@FieldMeta(fieldName = "DAILYTASK_TYPE", caption = "类型", index = 5)
	private String type;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public Date getThedate() {
		return thedate;
	}	
	public void setThedate(Date thedate) {
		this.thedate = thedate;
	}
	public String getStat() {
		return stat;
	}	
	public void setStat(String stat) {
		this.stat = stat;
	}
	public Date getTime() {
		return time;
	}	
	public void setTime(Date time) {
		this.time = time;
	}
	public String getBz() {
		return bz;
	}	
	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}






