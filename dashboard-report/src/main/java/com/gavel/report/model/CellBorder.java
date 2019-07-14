package com.gavel.report.model;

import java.io.Serializable;

import com.gavel.report.model.CellBorderLine.CellBorderStyle;


public class CellBorder implements Serializable {

	/**
	 * 
	 */
	
	
	private static final long serialVersionUID = 6074880352756613832L;
	private CellBorderLine left;
	private CellBorderLine right;
	private CellBorderLine top;
	private CellBorderLine bottom;

	public CellBorderLine getLeft() {
		return left;
	}

	public void setLeft(CellBorderLine left) {
		this.left = left;
	}

	public CellBorderLine getRight() {
		return right;
	}

	public void setRight(CellBorderLine right) {
		this.right = right;
	}

	public CellBorderLine getTop() {
		return top;
	}

	public void setTop(CellBorderLine top) {
		this.top = top;
	}

	public CellBorderLine getBottom() {
		return bottom;
	}

	public void setBottom(CellBorderLine bottom) {
		this.bottom = bottom;
	}
	
	public void setLeftBorderStyle(CellBorderStyle style) {
		if (this.left == null)
			this.left = new CellBorderLine();
		this.left.setStyle(style);
	}
	
	public void setRightBorderStyle(CellBorderStyle style) {
		if (this.right == null)
			this.right = new CellBorderLine();
		this.right.setStyle(style);
	}
	
	public void setTopBorderStyle(CellBorderStyle style) {
		if (this.top == null)
			this.top = new CellBorderLine();
		this.top.setStyle(style);
	}
	
	public void setBottomBorderStyle(CellBorderStyle style) {
		if (this.bottom == null)
			this.bottom = new CellBorderLine();
		this.bottom.setStyle(style);
	}
	
	public void setLeftBorderColor(String color) {
		if (this.left == null)
			this.left = new CellBorderLine();
		this.left.setColor(color);
	}
	
	public void setRightBorderColor(String color) {
		if (this.right == null)
			this.right = new CellBorderLine();
		this.right.setColor(color);
	}
	
	public void setTopBorderColor(String color) {
		if (this.top == null)
			this.top = new CellBorderLine();
		this.top.setColor(color);
	}
	
	public void setBottomBorderColor(String color) {
		if (this.bottom == null)
			this.bottom = new CellBorderLine();
		this.bottom.setColor(color);
	}

	public void assign(CellBorder cellBorder) {
		if (cellBorder.getLeft() != null) {
			if (this.left == null) {
				this.left = new CellBorderLine();
			}
			this.left.assign(cellBorder.getLeft());
		}else {
			this.left = null;
		}
		
		if (cellBorder.getBottom() != null) {
			if (this.bottom == null) {
				this.bottom = new CellBorderLine();
			}
			this.bottom.assign(cellBorder.getBottom());
		}else {
			this.bottom = null;
		}
		
		if (cellBorder.getRight() != null) {
			if (this.right == null) {
				this.right = new CellBorderLine();
			}
			this.right.assign(cellBorder.getRight());
		}else {
			this.right = null;
		}
		
		if (cellBorder.getTop() != null) {
			if (this.top == null) {
				this.top = new CellBorderLine();
			}
			this.top.assign(cellBorder.getTop());
		}else {
			this.top = null;
		}
	}
	
	public boolean equals(CellBorder cellBorder) {
		boolean result = false;
		if (cellBorder == null)
			return result;
		if (cellBorder.getLeft() != null) {
			result = cellBorder.getLeft().equals(this.left);
		}else {
			result = this.left == null;
		}
		
		if (cellBorder.getBottom() != null) {
			result = result && cellBorder.getBottom().equals(this.bottom);
		}else {
			result = result && this.bottom == null;
		}
		
		if (cellBorder.getRight() != null) {
			result = result && cellBorder.getRight().equals(this.right);
		}else {
			result = result && this.right == null;
		}
		
		if (cellBorder.getTop() != null) {
			result = result && cellBorder.getTop().equals(this.top);
		}else {
			result = result && this.top == null;
		}
		
		return result;
	}
}
