package com.gavel.report.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.util.CellRangeAddress;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.utils.NumberUtils;
import com.gavel.report.service.impl.ReportinstServiceImpl.CellDataType;

public class Document implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5566771877818949828L;

	private Page page;
	
	private List<Row> rows;
	
	private List<Column> columns;
	
	private List<MergeCell> mergeCells;
	
	public Document() {
		page = new Page();
		rows = new ArrayList<>();
		columns = new ArrayList<>();
		mergeCells = new ArrayList<>();
	}

	public Page getPage() {
		return page;
	}

	public void setPage(Page page) {
		this.page = page;
	}

	public List<Row> getRows() {
		return rows;
	}

	public void setRows(List<Row> rows) {
		this.rows = rows;
	}

	public List<Column> getColumns() {
		return columns;
	}

	public void setColumns(List<Column> columns) {
		this.columns = columns;
	}

	public List<MergeCell> getMergeCells() {
		return mergeCells;
	}

	public void setMergeCells(List<MergeCell> mergeCells) {
		this.mergeCells = mergeCells;
	}

	public Row createRow(int i) {
		Row row = new Row(i);
		rows.add(row);
		return row;
	}
	
	public void addMergeRegion(MergeCell mergeCell) {
		mergeCells.add(mergeCell);
	}
	
	public Column getColumnByIndex(int index, boolean notExistCreate) {
		Column column = getColumnByIndex(index);
		if (column == null && notExistCreate)
			column = new Column(index);
		columns.add(column);
		return column;
	}
	
	public Column getColumnByIndex(int index) {
		for (Column column : columns) {
			if (NumberUtils.equals(index, column.getCol())) {
				return column;
			}
		}
		return null;
	}
	
    public HSSFWorkbook exportExcel() {
    	HSSFWorkbook wb = new HSSFWorkbook();
        HSSFSheet sheet = wb.createSheet();
        
        int rowNum = rows.size();
        int maxColNum = 0;
        Map<CellStyle, HSSFCellStyle> cellStyleMap = new HashMap<>();
        for (int i=0; i< rowNum; i++){
        	Row row = getRows().get(i);
        	if (row.getVisible() != null && !row.getVisible())
        		continue;
        	HSSFRow dataRow = sheet.createRow(i);
        	if (row.getHeight() != null && row.getHeight() > 0) {
        		dataRow.setHeightInPoints(NumberUtils.round(row.getHeight()*96.0/72.0));
        	}
        	int columnNum = 0;
        	if (row.getCells() != null)
        		columnNum = row.getCells().size();
        	maxColNum = maxColNum>columnNum?maxColNum:columnNum;
        	int offset = 0;
        	for (int k=0; k < columnNum; k++) {
        		Column column = getColumnByIndex(k);
        		if (column != null && column.getVisible() != null && !column.getVisible()) {
    				offset++;
    				continue;
    			}
           		HSSFCell dataCell = dataRow.createCell(k-offset);
        		Cell cell = row.getCells().get(k);
        		CellStyle style = cell.getStyle();
        		String dataType = "";
        		if (style != null && style.getCellType() != null)
        			dataType = style.getCellType().toString();
        		if (CellDataType.getDataType(dataType) == CellDataType.dtDate) {
        			dataCell.setCellValue(cell.getDateValue());
        		}else if (CellDataType.getDataType(dataType) == CellDataType.dtNumber) {
        			dataCell.setCellValue(cell.getDoubleValue());
        		}else {
        			dataCell.setCellValue(cell.getStringValue());
        		}
        		
        		HSSFCellStyle cellStyle = null;
        		if (style == null) {
        			cellStyle = cellStyleMap.get(style);
        		}else {
        			for (Map.Entry<CellStyle, HSSFCellStyle> entry : cellStyleMap.entrySet()) {
            			if (style.equals(entry.getKey())) {
            				cellStyle = entry.getValue();
            				break;
            			}
            		}
        		}
        		
        		if (cellStyle != null) {
        			dataCell.setCellStyle(cellStyle);
        		}else {
        			HSSFCellStyle cellsStyle = wb.createCellStyle();
        			HSSFFont hssfFont = wb.createFont();
        	        hssfFont.setFontHeightInPoints((short)11);
        			cellsStyle.setFont(hssfFont);
        			if (style != null) {
        				//设置对齐方式
        				if (style.getAlign() != null)
        					cellsStyle.setAlignment(HorizontalAlignment.valueOf(style.getAlign().toString()));
        				if (style.getValign() != null)
        					cellsStyle.setVerticalAlignment(VerticalAlignment.valueOf(style.getValign().toString()));
        				//设置边框
        				if (style.getBorder() != null) {
        					CellBorder cellBorder = style.getBorder();
        					if (cellBorder.getLeft() != null && cellBorder.getLeft().getStyle() != null) {
        						cellsStyle.setBorderLeft(BorderStyle.valueOf(cellBorder.getLeft().getStyle().toString()));
        					}
        					if (cellBorder.getRight() != null && cellBorder.getRight().getStyle() != null) {
        						cellsStyle.setBorderRight(BorderStyle.valueOf(cellBorder.getRight().getStyle().toString()));
        					}
        					if (cellBorder.getTop() != null && cellBorder.getTop().getStyle() != null) {
        						cellsStyle.setBorderTop(BorderStyle.valueOf(cellBorder.getTop().getStyle().toString()));
        					}
        					if (cellBorder.getBottom() != null && cellBorder.getBottom().getStyle() != null) {
        						cellsStyle.setBorderBottom(BorderStyle.valueOf(cellBorder.getBottom().getStyle().toString()));
        					}
        				}
        				//设置单元格样式
        				if (style.getFont() != null) {
        					CellFont font = style.getFont();
        					if (font.getSize() != null && font.getSize() > 0) {
        						hssfFont.setFontHeightInPoints(font.getSize().shortValue());
        					}
        					if (font.getName() != null) {
        						hssfFont.setFontName(font.getName());
        					}
        					if (font.getColor() != null) {
        						//此处颜色需要转换
        					}
        					if (font.isBold() != null && font.isBold()) {
        						hssfFont.setBold(font.isBold());
        					}
        					if (font.isItalic() != null && font.isItalic()) {
        						hssfFont.setItalic(font.isItalic());
        					}
        					if (font.isUnderline() != null && font.isUnderline()) {
        						hssfFont.setUnderline(Font.U_SINGLE);
        					}
        				}
        			}
        			
        			dataCell.setCellStyle(cellsStyle);
        			cellStyleMap.put(style, cellsStyle);
        		}
        	}
        }
        
        //处理合并单元格
        if (mergeCells != null) {
        	 for (MergeCell mergeCell : mergeCells) {
             	int firstRow = mergeCell.getFirstRow();
             	int lastRow = mergeCell.getLastRow();
             	int firstCol = mergeCell.getFirstCol();
             	int lastCol = mergeCell.getLastCol();
             	if (firstRow > rowNum - 1 || firstCol > maxColNum - 1) continue;
             	if (lastRow > rowNum - 1) lastRow = rowNum - 1;
             	if (lastCol > maxColNum - 1) lastCol = maxColNum - 1;
             	if (NumberUtils.less(lastRow, firstRow) || NumberUtils.less(lastCol, firstCol)) continue;
             	if (NumberUtils.equals(firstRow, lastRow) && NumberUtils.equals(firstCol, lastCol)) continue;
             	CellRangeAddress region=new CellRangeAddress(firstRow, lastRow, firstCol, lastCol);
             	sheet.addMergedRegion(region);
             }
        }
       
        //设置列宽
        if (columns != null ) {
        	for (Column column : columns) {
        		int wdith = column.getWidth(); //像素
        		Double excelWidth = 0.0d;
        		if (wdith > 0) {
            		excelWidth = Double.valueOf(String.valueOf(wdith))/ 7 * 256;		
        		}			
        		sheet.setColumnWidth(column.getCol(), NumberUtils.round(excelWidth));
        		/*if (column.getVisible() != null && !column.getVisible()) {
        			sheet.setColumnHidden(column.getCol(), true);
        		}*/
        		
        	}
        }
        return wb;
    }	
    
    public String toString() {
    	return JSONObject.toJSONString(this);
    }
    
    public static Document parse(String text) {
    	return JSONObject.parseObject(text).toJavaObject(Document.class);
    }
}
