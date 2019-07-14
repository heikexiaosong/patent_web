package com.gavel.report.model;

import java.io.Serializable;

public class Column implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6492491576897796687L;
	//列号
	private int col;
	//隐藏，值为true时显示，否则隐藏
	private Boolean visible;
	//输出条件
	private String condition;
	//行宽
	private Integer width;
	
	public Column() {
	}
	
	public Column(int index) {
		this.col = index;
	}

	public int getCol() {
		return col;
	}

	public void setCol(int col) {
		this.col = col;
	}

	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public Integer getWidth() {
		return width;
	}

	public void setWidth(Integer width) {
		this.width = width;
	}

}
