package com.gavel.report.model;

import java.io.Serializable;

import org.apache.commons.codec.binary.StringUtils;

import com.gavel.common.utils.NumberUtils;

public class CellFont implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8916318481323411415L;

	//字号大小
	private Double size;
	//字体
	private String name;
	//文本颜色
	private String color;
	//加粗
	private Boolean bold;
	//斜体
	private Boolean italic;
	//下划线
	private Boolean underline;

	public Double getSize() {
		return size;
	}

	public void setSize(Double size) {
		this.size = size;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Boolean isBold() {
		return bold;
	}

	public void setBold(Boolean bold) {
		this.bold = bold;
	}

	public Boolean isItalic() {
		return italic;
	}

	public void setItalic(Boolean italic) {
		this.italic = italic;
	}

	public Boolean isUnderline() {
		return underline;
	}

	public void setUnderline(Boolean underline) {
		this.underline = underline;
	}
	
	public void assign(CellFont cellFont){
		this.bold = cellFont.bold;
		this.color = cellFont.color;
		this.italic = cellFont.italic;
		this.name = cellFont.name;
		this.size = cellFont.size;
		this.underline = cellFont.underline;
	}
	
	public boolean equals(CellFont cellFont) {
		if (cellFont == null)
			return false;
		return (this.bold == cellFont.bold) 
				&& (this.italic == cellFont.italic) 
				&& (this.underline == cellFont.underline)
				&& StringUtils.equals(this.color, cellFont.color) 
				&& StringUtils.equals(this.name, cellFont.name)
				&& NumberUtils.equals(this.size, cellFont.size);
	}

}
