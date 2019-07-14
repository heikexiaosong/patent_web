package com.gavel.report.model;

import java.io.Serializable;

public class Page implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9172533071891496187L;

	//显示列头 运行期参数
	private Boolean showHeader = Boolean.TRUE;
	//显示行号 运行期参数
	private Boolean showRowNo= Boolean.TRUE;
	//显示背景线条
	private Boolean showGrid= Boolean.TRUE;
	//显示工具栏
	private Boolean showToolBar= Boolean.TRUE;
	//运行期参数是否在设计期有效
	private Boolean designDisable= Boolean.TRUE;

	public Boolean getShowHeader() {
		return showHeader;
	}

	public void setShowHeader(Boolean showHeader) {
		this.showHeader = showHeader;
	}

	public Boolean getShowRowNo() {
		return showRowNo;
	}

	public void setShowRowNo(Boolean showRowNo) {
		this.showRowNo = showRowNo;
	}

	public Boolean getShowGrid() {
		return showGrid;
	}

	public void setShowGrid(Boolean showGrid) {
		this.showGrid = showGrid;
	}

	public Boolean getShowToolBar() {
		return showToolBar;
	}

	public void setShowToolBar(Boolean showToolBar) {
		this.showToolBar = showToolBar;
	}

	public Boolean getDesignDisable() {
		return designDisable;
	}

	public void setDesignDisable(Boolean designDisable) {
		this.designDisable = designDisable;
	}
	
	
}
