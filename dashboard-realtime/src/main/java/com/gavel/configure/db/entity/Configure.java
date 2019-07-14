package com.gavel.configure.db.entity;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;

import java.util.Date;


@TableMeta(id = "CONFIGURE", name = "CONFIGURE")
public class Configure extends BaseEntity {

   	@FieldMeta(fieldName = "CONFIGURE_ID", caption = "ID", primaryKey = true, notEmpty = true, codeStrategy = CodeStrategy.UUID, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "CONFIGURE_CODE", caption = "定义编码", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 2)
	private String code;
	@FieldMeta(fieldName = "CONFIGURE_NAME", caption = "名称", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String name;
	@FieldMeta(fieldName = "CONFIGURE_BACKGROUP", caption = "背景图", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 4)
	private String backgroup;
	@FieldMeta(fieldName = "CONFIGURE_WIDTH", caption = "宽度", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 5)
	private int width;
	@FieldMeta(fieldName = "CONFIGURE_HEIGHT", caption = "高度", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 6)
	private int height;
	@FieldMeta(fieldName = "CONFIGURE_STATE", caption = "状态", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 7)
	private String state;
	@FieldMeta(fieldName = "CONFIGURE_BZ", caption = "备注", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 8)
	private String bz;
	@FieldMeta(fieldName = "CONFIGURE_WHRID", caption = "维护人编码", autoUserId = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 9)
	private String whrid;
	@FieldMeta(fieldName = "CONFIGURE_WHR", caption = "维护人", autoUserName = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 10)
	private String whr;
	@FieldMeta(fieldName = "CONFIGURE_WHSJ", caption = "维护时间", autoDateTime = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 11)
	private Date whsj;
	@FieldMeta(fieldName = "CONFIGURE_CJRID", caption = "创建人编码", autoUserId = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 12)
	private String cjrid;
	@FieldMeta(fieldName = "CONFIGURE_CJR", caption = "创建人", autoUserName = true, initial = true, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = true, index = 13)
	private String cjr;
	@FieldMeta(fieldName = "CONFIGURE_CJSJ", caption = "创建时间", autoDateTime = true, initial = true, controlType = ControlType.DATETIME,  width = 20, showEdit = false, showList = true, index = 14)
	private Date cjsj;

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
	public String getName() {
		return name;
	}	
	public void setName(String name) {
		this.name = name;
	}
	public String getBackgroup() {
		return backgroup;
	}	
	public void setBackgroup(String backgroup) {
		this.backgroup = backgroup;
	}
	public int getWidth() {
		return width;
	}	
	public void setWidth(int width) {
		this.width = width;
	}
	public int getHeight() {
		return height;
	}	
	public void setHeight(int height) {
		this.height = height;
	}
	public String getState() {
		return state;
	}	
	public void setState(String state) {
		this.state = state;
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






