package com.gavel.report.model;

import java.io.Serializable;

public class MergeCell implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2808210255780099739L;

	public MergeCell() {
		
	}
	
	public MergeCell(int firstRow, int lastRow, int firstCol, int lastCol) {
		this.firstCol = firstCol;
		this.firstRow = firstRow;
		this.lastCol = lastCol;
		this.lastRow = lastRow;
	}

	private int firstRow;
	private int firstCol;
	private int lastRow;
	private int lastCol;

	public int getFirstRow() {
		return firstRow;
	}

	public void setFirstRow(int firstRow) {
		this.firstRow = firstRow;
	}

	public int getFirstCol() {
		return firstCol;
	}

	public void setFirstCol(int firstCol) {
		this.firstCol = firstCol;
	}

	public int getLastRow() {
		return lastRow;
	}

	public void setLastRow(int lastRow) {
		this.lastRow = lastRow;
	}

	public int getLastCol() {
		return lastCol;
	}

	public void setLastCol(int lastCol) {
		this.lastCol = lastCol;
	}

}
