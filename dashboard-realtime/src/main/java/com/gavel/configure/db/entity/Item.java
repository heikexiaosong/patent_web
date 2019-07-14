package com.gavel.configure.db.entity;

import com.gavel.common.ControlType;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;


@TableMeta(id = "ITEM", name = "ITEM")
public class Item extends BaseEntity {

   	/**
	 * 
	 */
	private static final long serialVersionUID = 7548032716166959897L;
	@FieldMeta(fieldName = "ITEM_ID", caption = "ID", primaryKey = true, codeStrategy = CodeStrategy.UUID, controlType = ControlType.TEXT,  width = 20, showEdit = false, showList = false, index = 1)
	private String id;
	@FieldMeta(fieldName = "ITEM_CFGCODE", caption = "组态图CODE", controlType = ControlType.TEXT,  masterFieldName = "CONFIGURE_CODE", width = 20, showEdit = true, showList = true, index = 2)
	private String cfgcode;
	@FieldMeta(fieldName = "ITEM_NAME", caption = "名称", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 3)
	private String name;
	@FieldMeta(fieldName = "ITEM_POSX", caption = "X坐标", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 4)
	private int posx;
	@FieldMeta(fieldName = "ITEM_POSY", caption = "Y坐标", controlType = ControlType.INT,  width = 5, showEdit = true, showList = true, index = 5)
	private int posy;
	@FieldMeta(fieldName = "ITEM_TYPE", caption = "数据点类型", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 6)
	private String type;
	@FieldMeta(fieldName = "ITEM_VALUE", caption = "数据点", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 7)
	private String value;
	@FieldMeta(fieldName = "ITEM_UNIT", caption = "单位", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 8)
	private String unit;
	@FieldMeta(fieldName = "ITEM_BZ", caption = "备注", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 9)
	private String bz;

	@FieldMeta(fieldName = "ITEM_FONT", caption = "字体大小", controlType = ControlType.INT,  width = 20, showEdit = true, showList = true, index = 9)
	private Integer font;

	@FieldMeta(fieldName = "ITEM_TEXTCOLOR", caption = "字体颜色", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 9)
	private String textcolor;

	@FieldMeta(fieldName = "ITEM_LOWER", caption = "下限阀值", controlType = ControlType.FLOAT,  width = 20, showEdit = true, showList = true, index = 9)
	private Float lower;
	@FieldMeta(fieldName = "ITEM_LOWERCOLOR", caption = "低值颜色", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 9)
	private String lowercolor;
	@FieldMeta(fieldName = "ITEM_UPPER", caption = "上限阀值", controlType = ControlType.FLOAT,  width = 20, showEdit = true, showList = true, index = 9)
	private Float upper;
	@FieldMeta(fieldName = "ITEM_UPPERCOLOR", caption = "高值颜色", controlType = ControlType.TEXT,  width = 20, showEdit = true, showList = true, index = 9)
	private String uppercolor;
	@FieldMeta(fieldName = "ITEM_PROP", caption = "高扩展属性")
	private String prop;

	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	public String getCfgcode() {
		return cfgcode;
	}	
	public void setCfgcode(String cfgcode) {
		this.cfgcode = cfgcode;
	}
	public String getName() {
		return name;
	}	
	public void setName(String name) {
		this.name = name;
	}
	public int getPosx() {
		return posx;
	}	
	public void setPosx(int posx) {
		this.posx = posx;
	}
	public int getPosy() {
		return posy;
	}	
	public void setPosy(int posy) {
		this.posy = posy;
	}
	public String getType() {
		return type;
	}	
	public void setType(String type) {
		this.type = type;
	}
	public String getValue() {
		return value;
	}	
	public void setValue(String value) {
		this.value = value;
	}
	public String getUnit() {
		return unit;
	}	
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getBz() {
		return bz;
	}	
	public void setBz(String bz) {
		this.bz = bz;
	}

	public Integer getFont() {
		return font;
	}

	public void setFont(Integer font) {
		this.font = font;
	}

	public String getTextcolor() {
		return textcolor;
	}

	public void setTextcolor(String textcolor) {
		this.textcolor = textcolor;
	}

	public Float getLower() {
		return lower;
	}

	public void setLower(Float lower) {
		this.lower = lower;
	}

	public String getLowercolor() {
		return lowercolor;
	}

	public void setLowercolor(String lowercolor) {
		this.lowercolor = lowercolor;
	}

	public Float getUpper() {
		return upper;
	}

	public void setUpper(Float upper) {
		this.upper = upper;
	}

	public String getUppercolor() {
		return uppercolor;
	}

	public void setUppercolor(String uppercolor) {
		this.uppercolor = uppercolor;
	}
	public String getProp() {
		return prop;
	}
	public void setProp(String prop) {
		this.prop = prop;
	}

}






