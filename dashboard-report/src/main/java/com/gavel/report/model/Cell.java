package com.gavel.report.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.annotation.JSONField;
import com.gavel.report.common.Range;

public class Cell implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6510617150876332154L;

	public enum Align {
		CENTER(), LEFT(), RIGHT();

		public static Map<String, Align> nameAlignMap = new HashMap<>();


		static {

			for (Align align : Align.values()) {
				nameAlignMap.put(align.name().toLowerCase(), align);
			}

		}

		public static Align getAlign(String name){
			if ( name==null || name.length()==0 ){
				return null;
			}
			return nameAlignMap.get(name.trim().toLowerCase());
		}
	};

	public enum Valign {

		CENTER("middle"), TOP("top"), BOTTOM("botton");

		private String value;

		Valign(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}

		public static Map<String, Valign> nameValignMap = new HashMap<>();


		static {

			for (Valign valign : Valign.values()) {
				nameValignMap.put(valign.getValue().toLowerCase(), valign);
			}

		}

		public static Valign getValign(String value){
			if ( value==null || value.length()==0 ){
				return null;
			}
			return nameValignMap.get(value.trim().toLowerCase());
		}

	};

	private String id;
	//行号
	private int row;
	//列号
	private int col;
	//值
	private Object value;
	//样式
	private CellStyle style;
	
	public Cell() {
		
	}
	
	public Cell(int row, int col) {
		this.row = row;
		this.col = col;
		this.id = Range.toColumnName(col)+(row+1);
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public int getCol() {
		return col;
	}

	public void setCol(int col) {
		this.col = col;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}
	
	public CellStyle getStyle() {
		return style;
	}

	public void setStyle(CellStyle style) {
		this.style = style;
	}
	
	public CellStyle createCellStyle() {
		CellStyle cellStyle = new CellStyle();
		this.style = cellStyle;
		return cellStyle;
	}
	
	@JSONField(serialize=false)  
	public Date getDateValue() {
		if (value == null) {
			return null;
		}else if (value instanceof Date) {
			return (Date)value;
		}else {
			return null;
		}
	}
	
	@JSONField(serialize=false)  
	public double getDoubleValue() {
		if (value == null) {
			return 0;
		}else if (value instanceof Double) {
			return ((Double)value).doubleValue();
		}else {
			return 0;
		}
	}
	
	@JSONField(serialize=false)  
	public String getStringValue() {
		if (value == null) {
			return "";
		}else {
			return value.toString();
		}
	}

}
