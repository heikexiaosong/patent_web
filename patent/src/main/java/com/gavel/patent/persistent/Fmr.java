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


}






