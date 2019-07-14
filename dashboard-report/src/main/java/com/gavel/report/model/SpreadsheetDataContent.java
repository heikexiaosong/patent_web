package com.gavel.report.model;

public class SpreadsheetDataContent implements java.io.Serializable {
    private static final long serialVersionUID = 8789965145734849612L;
    private int[][] spans;
    private int[][] sizes;
    private Object[][] data;
    private String[][] styles;
    private SpreadsheetDataContentTable table;
    private String [][] formats;
    private String [][] hideConditionals;

    public int[][] getSpans() {
        return this.spans;
    }

    public void setSpans(int[][] spans) {
        this.spans = spans;
    }

    public int[][] getSizes() {
        return this.sizes;
    }

    public void setSizes(int[][] sizes) {
        this.sizes = sizes;
    }

    public Object[][] getData() {
        return data;
    }

    public void setData(Object[][] data) {
        this.data = data;
    }

    public String[][] getStyles() {
        return this.styles;
    }

    public void setStyles(String[][] styles) {
        this.styles = styles;
    }

    public SpreadsheetDataContentTable getTable() {
        return this.table;
    }

    public void setTable(SpreadsheetDataContentTable table) {
        this.table = table;
    }

    public String[][] getFormats() {
        return formats;
    }

    public void setFormats(String[][] formats) {
        this.formats = formats;
    }

    public String[][] getHideConditionals() {
        return hideConditionals;
    }

    public void setHideConditionals(String[][] hideConditionals) {
        this.hideConditionals = hideConditionals;
    }
}
