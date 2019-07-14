package com.gavel.trend.db.entity;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "QSTITEM", name = "QSTITEM")
public class Qstitem extends BaseEntity {

   	/**
	 * 
	 */
	private static final long serialVersionUID = 9189930516926098844L;
	@FieldMeta(fieldName = "QSTITEM_ID", caption = "ID", primaryKey = true, notEmpty = true, index = 1)
	private String id;
	@FieldMeta(fieldName = "QSTITEM_MID", caption = "趋势图ID", index = 2)
	private String mid;
	@FieldMeta(fieldName = "QSTITEM_XH", caption = "序号", index = 3)
	private Integer xh;
	@FieldMeta(fieldName = "QSTITEM_METRICS", caption = "指标", index = 4)
	private String metrics;
	@FieldMeta(fieldName = "QSTITEM_NAME", caption = "指标名称", index = 5)
	private String name;
	@FieldMeta(fieldName = "QSTITEM_UNIT", caption = "指标数据单位", index = 6)
	private String unit;
	@FieldMeta(fieldName = "QSTITEM_TYPE", caption = "类型", index = 7)
	private String type;
	@FieldMeta(fieldName = "QSTITEM_GROUP", caption = "分组名称", index = 8)
	private String group;
	@FieldMeta(fieldName = "QSTITEM_GROUPTYPE", caption = "分组名称", index = 8)
	private String grouptype;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getMid() {
		return mid;
	}	
	public void setMid(String mid) {
		this.mid = mid;
	}
	public Integer getXh() {
		return xh;
	}	
	public void setXh(Integer xh) {
		this.xh = xh;
	}
	public String getMetrics() {
		return metrics;
	}	
	public void setMetrics(String metrics) {
		this.metrics = metrics;
	}
	public String getName() {
		return name;
	}	
	public void setName(String name) {
		this.name = name;
	}
	public String getUnit() {
		return unit;
	}	
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getType() {
		return type;
	}	
	public void setType(String type) {
		this.type = type;
	}
	public String getGroup() {
		return group;
	}	
	public void setGroup(String group) {
		this.group = group;
	}
	public String getGrouptype() {
		return grouptype;
	}
	public void setGrouptype(String grouptype) {
		this.grouptype = grouptype;
	}

}






