package com.gavel.report.model;

import java.util.ArrayList;
import java.util.List;

public class SheetData {

    private List data;

    private List sizes;

    private List spans;

    private List styles;

    private List<String[]> formats = new ArrayList<>();

    private SpreadsheetDataContentTable table;

    private List<String[]> hideConditionals = new ArrayList<>();

    public List getData() {
        return data;
    }

    public void setData(List data) {
        this.data = data;
    }

    public List getSizes() {
        return sizes;
    }

    public void setSizes(List sizes) {
        this.sizes = sizes;
    }

    public List getSpans() {
        return spans;
    }

    public void setSpans(List spans) {
        this.spans = spans;
    }

    public List getStyles() {
        return styles;
    }

    public void setStyles(List styles) {
        this.styles = styles;
    }

    public SpreadsheetDataContentTable getTable() {
        return table;
    }

    public void setTable(SpreadsheetDataContentTable table) {
        this.table = table;
    }

    public List<String[]> getFormats() {
        return formats;
    }

    public void setFormats(List<String[]> formats) {
        this.formats = formats;
    }

    public List<String[]> getHideConditionals() {
        return hideConditionals;
    }

    public void setHideConditionals(List<String[]> hideConditionals) {
        this.hideConditionals = hideConditionals;
    }
}
