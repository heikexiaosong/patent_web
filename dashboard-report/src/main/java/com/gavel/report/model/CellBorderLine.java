package com.gavel.report.model;

import java.io.Serializable;

import org.apache.commons.codec.binary.StringUtils;


public class CellBorderLine implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9210256691005731074L;
	
	public enum CellBorderStyle {

	    /**
	     * No border (default)
	     */
	    NONE(0x0),

	    /**
	     * Thin border
	     */
	    THIN(0x1),

	    /**
	     * Medium border
	     */
	    MEDIUM(0x2),

	    /**
	     * dash border
	     */
	    DASHED(0x3),

	    /**
	     * dot border
	     */
	    DOTTED(0x4),

	    /**
	     * Thick border
	     */
	    THICK(0x5),

	    /**
	     * double-line border
	     */
	    DOUBLE(0x6),

	    /**
	     * hair-line border
	     */
	    HAIR(0x7),

	    /**
	     * Medium dashed border
	     */
	    MEDIUM_DASHED(0x8),

	    /**
	     * dash-dot border
	     */
	    DASH_DOT(0x9),

	    /**
	     * medium dash-dot border
	     */
	    MEDIUM_DASH_DOT(0xA),

	    /**
	     * dash-dot-dot border
	     */
	    DASH_DOT_DOT(0xB),

	    /**
	     * medium dash-dot-dot border
	     */
	    MEDIUM_DASH_DOT_DOT(0xC),

	    /**
	     * slanted dash-dot border
	     */
	    SLANTED_DASH_DOT(0xD);
	    
	    private final short code;

	    private CellBorderStyle(int code) {
	        this.code = (short)code;
	    }

	    public short getCode() {
	        return code;
	    }
	    
	    private static final CellBorderStyle[] _table = new CellBorderStyle[0xD + 1];
	    static {
	        for (CellBorderStyle c : values()) {
	            _table[c.getCode()] = c;
	        }
	    }
	    
	    public static CellBorderStyle valueOf(short code) {
	        return _table[code];
	    }
	}
	
	//线条样式
	private CellBorderStyle style;
	//线条颜色
	private String color;
	
	public CellBorderStyle getStyle() {
		return style;
	}
	public void setStyle(CellBorderStyle style) {
		this.style = style;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	
	public void assign(CellBorderLine cellBorderLine) {
		this.style = cellBorderLine.style;
		this.color = cellBorderLine.color;
	}
	
	public boolean equals(CellBorderLine cellBorderLine) {
		if (cellBorderLine == null)
			return false;
		return StringUtils.equals(this.color, cellBorderLine.color) && 
				(this.style == cellBorderLine.style);
	}

}
