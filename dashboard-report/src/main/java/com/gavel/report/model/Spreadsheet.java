package com.gavel.report.model;

public class Spreadsheet implements java.io.Serializable {
    private static final long serialVersionUID = 2152465156631563079L;
    private SpreadsheetData[] data;

    public SpreadsheetData[] getData() {
        return this.data;
    }

    public void setData(SpreadsheetData[] data) {
        this.data = data;
    }
}
