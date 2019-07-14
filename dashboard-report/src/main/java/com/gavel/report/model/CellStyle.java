package com.gavel.report.model;

import java.io.Serializable;

import com.gavel.common.utils.StringUtils;
import com.gavel.report.model.Cell.Align;
import com.gavel.report.model.Cell.Valign;

public class CellStyle implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6333787991537979863L;

	public enum CellType {
		NUMBER, TEXT, DATE, TIME, RMB
	}
	
	//左右对齐方式
	private Align align;
	//上下对齐方式
	private Valign valign;
	//单元格类型
	private CellType cellType;
	//小数位数
	private Integer decimalDigit;
	//单元格格式
	private String format;
	//背景颜色
	private String bgcolor;
	//0是否显示
	private Boolean showZero;
	//字体
	private CellFont font;
	//边框
	private CellBorder border;
	
	public Align getAlign() {
		return align;
	}

	public void setAlign(Align align) {
		this.align = align;
	}

	public Valign getValign() {
		return valign;
	}

	public void setValign(Valign valign) {
		this.valign = valign;
	}

	public CellType getCellType() {
		return cellType;
	}

	public void setCellType(CellType cellType) {
		this.cellType = cellType;
	}

	public Integer getDecimalDigit() {
		return decimalDigit;
	}

	public void setDecimalDigit(Integer decimalDigit) {
		this.decimalDigit = decimalDigit;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}

	public Boolean getShowZero() {
		return showZero;
	}

	public void setShowZero(Boolean showZero) {
		this.showZero = showZero;
	}

	public String getBgcolor() {
		return bgcolor;
	}

	public void setBgcolor(String bgcolor) {
		this.bgcolor = bgcolor;
	}

	public CellFont getFont() {
		return font;
	}

	public void setFont(CellFont font) {
		this.font = font;
	}

	public CellBorder getBorder() {
		return border;
	}

	public void setBorder(CellBorder border) {
		this.border = border;
	}
	
	public CellBorder createCellBorder() {
		this.border = new CellBorder();
		return getBorder();
	}
	
	public CellFont createCellFont() {
		this.font = new CellFont();
		return getFont();
	}
	
	public void assign(CellStyle cellStyle) {
		this.align = cellStyle.align;
		this.valign = cellStyle.valign;
		this.cellType = cellStyle.cellType;
		this.decimalDigit = cellStyle.decimalDigit;
		this.format = cellStyle.format;
		this.showZero = cellStyle.showZero;
		//字体
		if (cellStyle.font != null) {
			if (this.font == null) {
				createCellFont();
			}
			this.font.assign(cellStyle.getFont());
		}else {
			this.font = null;
		}
		//边框
		if (cellStyle.border != null) {
			if (this.border == null) {
				createCellBorder();
			}
			this.border.assign(cellStyle.getBorder());
		}else {
			this.border = null;
		}
	}
	
	public boolean equals(CellStyle cellStyle) {
		boolean result = (this.align == cellStyle.align)
				&&(this.valign == cellStyle.valign)
				&&(this.cellType == cellStyle.cellType)
				&& StringUtils.equals(this.format, cellStyle.format)
				&& (this.showZero == cellStyle.showZero);
		if (cellStyle.font != null) {
			result = result && cellStyle.font.equals(this.font);
		}else
			result = result && this.font == null;
		if (cellStyle.border != null) {
			result = result && cellStyle.border.equals(this.border);
		}else
			result = result && this.border == null;
		return result;
	}
}
