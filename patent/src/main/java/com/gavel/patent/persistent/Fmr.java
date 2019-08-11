package com.gavel.patent.persistent;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;

import java.util.Date;


@TableMeta(id = "FMR", name = "FMR")
public class Fmr extends BaseEntity {

   	@FieldMeta(fieldName = "FMR_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, notEmpty = true, index = 10)
	private String id;
	@FieldMeta(fieldName = "FMR_CODE", caption = "专利编码",  masterFieldName = "AJXX_CODE", index = 15)
	private String code;
   	@FieldMeta(fieldName = "FMR_XH", caption = "序号", index = 20)
	private Integer xh;
	@FieldMeta(fieldName = "FMR_NAME", caption = "姓名", index = 30)
	private String name;
	@FieldMeta(fieldName = "FMR_ENAME", caption = "英文名", index = 40)
	private String ename;
	@FieldMeta(fieldName = "FMR_IDCARD", caption = "身份证号码", index = 50)
	private String idcard;
	@FieldMeta(fieldName = "FMR_GJ", caption = "国籍", index = 60)
	private String gj;
	@FieldMeta(fieldName = "FMR_BZ", caption = "备注", index = 70)
	private String bz;


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

	public Integer getXh() {
		return xh;
	}

	public void setXh(Integer xh) {
		this.xh = xh;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getIdcard() {
		return idcard;
	}

	public void setIdcard(String idcard) {
		this.idcard = idcard;
	}

	public String getGj() {
		return gj;
	}

	public void setGj(String gj) {
		this.gj = gj;
	}

	public String getBz() {
		return bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}
}






