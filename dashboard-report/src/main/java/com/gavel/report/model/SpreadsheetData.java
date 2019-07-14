package com.gavel.report.model;

public class SpreadsheetData implements java.io.Serializable {
    private static final long serialVersionUID = -3857291298041469216L;
    private String name;
    private SpreadsheetDataContent content;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public SpreadsheetDataContent getContent() {
        return this.content;
    }

    public void setContent(SpreadsheetDataContent content) {
        this.content = content;
    }
}
