package com.gavel.report.model;

public class SpreadsheetDataContentTable implements java.io.Serializable {
    private static final long serialVersionUID = -1231432166926752881L;
    private int headers;
    private int frozenColumns;
    private int frozenRows;
    private int gridlines;

    private TableHidden hidden;

    public int getHeaders() {
        return this.headers;
    }

    public void setHeaders(int headers) {
        this.headers = headers;
    }

    public int getFrozenColumns() {
        return this.frozenColumns;
    }

    public void setFrozenColumns(int frozenColumns) {
        this.frozenColumns = frozenColumns;
    }

    public int getFrozenRows() {
        return this.frozenRows;
    }

    public void setFrozenRows(int frozenRows) {
        this.frozenRows = frozenRows;
    }

    public int getGridlines() {
        return this.gridlines;
    }

    public void setGridlines(int gridlines) {
        this.gridlines = gridlines;
    }

    public TableHidden getHidden() {
        return hidden;
    }

    public void setHidden(TableHidden hidden) {
        this.hidden = hidden;
    }
}
