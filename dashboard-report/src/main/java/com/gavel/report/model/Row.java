package com.gavel.report.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Row implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1701498208038859313L;
	//行号
	private int row;
	//是否可见
	private Boolean visible;
	//输出条件
	private String condition;
	//行高
	private Integer height;
	
	private List<Cell> cells;
	
	public Row() {
	}
	
	public Row(int i) {
		this.row = i;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
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
	
	public Integer getHeight() {
		return height;
	}

	public void setHeight(Integer height) {
		this.height = height;
	}

	public List<Cell> getCells() {
		if (cells == null){
			this.cells = new ArrayList<>();
		}
		return cells;
	}

	public void setCells(List<Cell> cells) {
		this.cells = cells;
	}

	public Cell createCell(int i) {
		if (cells == null)
			this.cells = new ArrayList<>();
		Cell cell = new Cell(row, i);
		cells.add(cell);
		return cell;
	}

}
