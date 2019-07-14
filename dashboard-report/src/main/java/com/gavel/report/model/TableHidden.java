package com.gavel.report.model;

import java.util.ArrayList;
import java.util.List;

public class TableHidden implements java.io.Serializable {
    private static final long serialVersionUID = -798651868158281663L;
    private List<String> column = new ArrayList<>();
    private List<String> row = new ArrayList<>();


    public List<String> getColumn() {
        return column;
    }

    public void setColumn(List<String> column) {
        this.column = column;
    }

    public List<String> getRow() {
        return row;
    }

    public void setRow(List<String> row) {
        this.row = row;
    }
}
