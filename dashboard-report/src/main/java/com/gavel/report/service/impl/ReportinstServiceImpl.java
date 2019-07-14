package com.gavel.report.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gavel.common.Formula;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.NumberUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.UserInfoUtil;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.common.Range;
import com.gavel.report.dao.ReportinstDao;
import com.gavel.report.dao.ReporttempDao;
import com.gavel.report.db.entity.Reportinst;
import com.gavel.report.db.entity.Reporttemp;
import com.gavel.report.format.ReportFormat;
import com.gavel.report.model.Cell;
import com.gavel.report.model.Cell.Align;
import com.gavel.report.model.Cell.Valign;
import com.gavel.report.model.CellBorder;
import com.gavel.report.model.CellBorderLine.CellBorderStyle;
import com.gavel.report.model.CellFont;
import com.gavel.report.model.CellStyle;
import com.gavel.report.model.Column;
import com.gavel.report.model.Document;
import com.gavel.report.model.MergeCell;
import com.gavel.report.model.Page;
import com.gavel.report.model.Row;
import com.gavel.report.model.SheetData;
import com.gavel.report.model.SpreadsheetDataContentTable;
import com.gavel.report.model.TableHidden;
import com.gavel.report.service.ReportinstService;
import com.gavel.report.service.ReportparamService;
import com.gavel.report.spreadsheet.SpreadsheetUtils;
import com.gavel.report.vo.ReportinstCondition;
import com.gavel.report.vo.ReportinstVO;
import com.google.common.base.Strings;


@Service("reportinstService")
@Transactional
public class ReportinstServiceImpl extends BaseEditServiceImpl implements ReportinstService {
	
	public enum CellDataType {
		dtString, dtNumber, dtDate;

		public static CellDataType getDataType(String dataType){
			if ( StringUtils.equalsIgnoreCase("date", dataType) ){
				return CellDataType.dtDate;
			}else if ( StringUtils.equalsIgnoreCase("", dataType) || 
					StringUtils.equalsIgnoreCase("string", dataType)){
				return CellDataType.dtString;
			}else if ( StringUtils.equalsIgnoreCase("number", dataType) ){
				return CellDataType.dtNumber;
			}
			return CellDataType.dtString;
		}
	}

    @Autowired
    private ReportinstDao reportinstDao;

    @Autowired
    private ReporttempDao reporttempDao;

    @Autowired
    private ReportparamService reportparamService;

    @Override
    public void initService() {
        addMaster(new Reportinst());
    }

    @Override
	public RecordSet<ReportinstVO> query(ReportinstCondition condition) {
	    return reportinstDao.query(condition);
	}
    
    @Override
    public ReportinstVO queryById(String id) {
    	return reportinstDao.queryById(id);
    }

    @Override
    public boolean isOldJson(String jsonString) {
    	JSONObject json = JSONObject.parseObject(jsonString);
    	return json.containsKey("data");
    }
     
    private String calcTitle(String name, Date theDate) {
    	//根据报表参数解析报表头
        if ( name!=null && name.trim().length()>0 ){
        	Map<String , Object> params = new HashMap<>();
        	//获取公共变量
        	ReportFormat reportFormat = new ReportFormat(theDate);
            for (Map.Entry<String, Object> entry : reportFormat.getVariableMap().entrySet()) {
            	if (!params.containsKey(entry.getKey())) {
            		params.put(entry.getKey(), entry.getValue());
            	}
            }
            String nameStr = name.trim();
        	Object obj = Formula.calc(nameStr, params);
        	if (obj != null)
        		return obj.toString();
        }
        return null;
    }
    
    private String calcReportCondition(Document document, Date theDate) {
    	ReportFormat reportFormat = new ReportFormat(theDate);
    	Map<String , Object> params = new HashMap<>();
        if ( document.getRows().size()>0) {
        	for (Row row : document.getRows()) {
            	for (Cell cell : row.getCells()) {
            		String value = cell.getStringValue().trim();
                    String name = cell.getId();
                    if (cell.getValue() instanceof Date) {
                    	params.put(name, cell.getValue());
                    }else if ( isNumerical(value) ){
                        params.put(name, Double.parseDouble(value));
                    }else if (value != null){
                    	params.put(name, value.toString());
                    }else {
                    	params.put(name, "");
                    }
                }
            }
        }
        
        //获取公共变量
        for (Map.Entry<String, Object> entry : reportFormat.getVariableMap().entrySet()) {
        	if (!params.containsKey(entry.getKey())) {
        		params.put(entry.getKey(), entry.getValue());
        	}
        }

        //计算行输出条件
        for (Row row : document.getRows()) {
        	if (row.getVisible() != null && !row.getVisible()) continue;
        		String expression = row.getCondition();
        		if (StringUtils.isNotEmpty(expression)) {
        			boolean visible = Formula.calcBoolean(expression, params);
        			//visible 缺省为true 如果不存在且属性计算结果为false则存入
        			if (row.getVisible() != null || !visible)
        				row.setVisible(visible);
        		}
        }
        
        //计算列输出条件
        for (Column column : document.getColumns()) {
        	if (column.getVisible() != null && !column.getVisible()) continue;
        		String expression = column.getCondition();
        		if (StringUtils.isNotEmpty(expression)) {
        			boolean visible = Formula.calcBoolean(expression, params);
        			//visible 缺省为true 如果不存在且属性计算结果为false则存入
        			if (column.getVisible() != null || !visible)
        				column.setVisible(visible);
        		}
        }
        return document.toString(); 
    }
    
    private String calcReportNew(String bbnr, Date theDate) {
    	ReportFormat reportFormat = new ReportFormat(theDate);
    	Document document;
    	if (isOldJson(bbnr)) {
    		document = converToDocument(bbnr);
    	}else
    		document = Document.parse(bbnr);
        if ( document.getRows().size() > 0 ) {
            Map<String , Object> params = new HashMap<>();
            Map<String, String> variableExpressions = new HashMap<>();
            
            //准备变量
            for (Row row : document.getRows()) {
            	for (Cell cell : row.getCells()) {
            		String value = cell.getStringValue();
                    String name = cell.getId();
                    if (StringUtils.isEmpty(name))
                    	name = Range.toColumnName(cell.getCol())+(cell.getRow()+1);
                    if ( value.trim().startsWith("=") ){
                    	variableExpressions.put(name, value.substring(1).trim());
                    }else if ( isNumerical(value) ){
                        params.put(name, Double.parseDouble(value));
                    }
                }
            }
            
         	//获取公共变量
            for (Map.Entry<String, Object> entry : reportFormat.getVariableMap().entrySet()) {
            	if (!params.containsKey(entry.getKey())) {
            		params.put(entry.getKey(), entry.getValue());
            	}
            }

            //兼容 历史模式 使用 {}做为公式开始
            for (Row row : document.getRows()) {
            	for (Cell cell : row.getCells()) { 
            		String value = cell.getStringValue();
                    if ( value.trim().startsWith("=") ){

                    } else {
                        Object val = reportparamService.clac(reportFormat, value);
                        cell.setValue(val);
                        params.put(cell.getId(), val);
                    }
                    
                }
            }

            //计算所有表达式
            Map<String, Object> calcMap = Formula.calc(variableExpressions, params);

            //更新json中的值
            for (Row row : document.getRows()) {
            	for (Cell cell : row.getCells()) {
            		String name = cell.getId();
                	if (calcMap.containsKey(name)) {
                		cell.setValue(calcMap.get(name));
                	}
                }
            }
        }
        return calcReportCondition(document, theDate);  
    }
    
    @Override
    public void recalculate(String id) {

        Reportinst inst = reporttempDao.queryById(Reportinst.class, id);
        if ( inst==null ){
            throw new RuntimeException("找不到对应的报表[报表ID: " + id + "].");
        }

        inst.setCalctime(DateUtils.getDateTime());
        inst.setJsr(UserInfoUtil.getUserName());
        
        Reporttemp param = new Reporttemp();
        param.setBbbm(inst.getBbbm());
        Reporttemp template = reporttempDao.queryByEntity(param);
        if ( template==null ){
            throw new RuntimeException("找不到对应的报表定义[报表编码: " + inst.getBbbm() + "].");
        }
        
        String bbmc = calcTitle(template.getScgz(), inst.getBbrq());
        inst.setBbsj(calcReportNew(template.getBbnr(), inst.getBbrq()));
        
        if (StringUtils.isEmpty(bbmc)) {
        	bbmc = template.getBbmc();
        }
        inst.setBbmc(bbmc);
        reporttempDao.update(inst);
    }

    @Override
    public void generate(String bbbm, Date theDate, int year, int month) {

        if ( bbbm==null || bbbm.trim().length()==0 ){
            throw new RuntimeException("报表编码不能为空.");
        }

        Reporttemp param = new Reporttemp();
        param.setBbbm(bbbm);
        Reporttemp template = reporttempDao.queryByEntity(param);
        if ( template==null ){
            throw new RuntimeException("找不到对应的报表定义[报表编码: " + bbbm + "].");
        }

        Reportinst instParam = new Reportinst();
        instParam.setBbbm(template.getBbbm());
        if (theDate == null) {
        	instParam.setYear(year);
        	instParam.setMonth(month);
        }else {
        	instParam.setBbrq(theDate);
        }
        
        Reportinst instExist =  reportinstDao.queryByEntity(instParam);
        if ( instExist!=null ) {
            throw new RuntimeException(template.getBbmc() + "[日期: " + DateUtils.formatDate(instParam.getBbrq(), "yyyymmdd") +"]已生成.");
        }

        Reportinst reportinst = new Reportinst();
        if (theDate == null) {
			Date date = null;
			if (year != 0) {
				//赋值先设置为当月26日
				if (month != 0) {
					date = DateUtils.getDate(year, month-1, 1);
				}else {
					date = DateUtils.getDate(year, 0, 1);
				}
			}
			theDate = date;
			reportinst.setBbrq(date);
			reportinst.setYear(year);
			reportinst.setMonth(month);
		}else {
			reportinst.setBbrq(DateUtils.getDate(theDate));
			reportinst.setYear(DateUtils.getYear(ReportFormat.getEndDate(reportinst.getBbrq())));
			reportinst.setMonth(DateUtils.getMonth(ReportFormat.getEndDate(reportinst.getBbrq())));
		}
        reportinst.setBbbm(template.getBbbm());
        reportinst.setOrgid(template.getOrgid()); 
        //设置序号
        if (StringUtils.equalsIgnoreCase("D", template.getBblx())) {
        	reportinst.setXh(DateUtils.getDayOfYear(reportinst.getBbrq()));
        }else if (StringUtils.equalsIgnoreCase("M", template.getBblx())) {
        	reportinst.setXh(reportinst.getMonth());
        }else if (StringUtils.equalsIgnoreCase("Y", template.getBblx())) {
        	reportinst.setXh(reportinst.getYear());
        }
        String bbmc = calcTitle(template.getScgz(), theDate);
        reportinst.setBbsj(calcReportNew(template.getBbnr(), theDate));
        
        if (StringUtils.isEmpty(bbmc)) {
        	bbmc = template.getBbmc();
        }
        reportinst.setBbmc(bbmc);
        reportinst.setCalctime(DateUtils.getDateTime());
        reportinst.setJsr(UserInfoUtil.getUserName());
        reportinstDao.insert(reportinst);

    }

    public static boolean isNumerical(String content) {
        String pattern = "^[\\+\\-]?[\\d]+(\\.[\\d]+)?$";
        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(content);
        return m.matches();
    }

    @Override
    public Reporttemp loadReporttemp(String bbbm) {
        Reporttemp param = new Reporttemp();
        param.setBbbm(bbbm);
        return reporttempDao.queryByEntity(param);
    }
    
    private JSONObject getJSONCell(JSONArray jsonArray, int row, int col) {
    	if (jsonArray == null)
    		return null;
    	for(int i = 0; i < jsonArray.size(); i++) {
    		JSONObject json = jsonArray.getJSONObject(i);
    		if (NumberUtils.equals(row, json.getIntValue("row"))
    				&& NumberUtils.equals(col, json.getIntValue("col"))){
    			return json;
    		}
    	}
    	return null;
    }
    
    private JSONObject getCustomBoderCell(JSONArray jsonArray, int row, int col) {
    	if (jsonArray == null) 
    		return null;
    	for(int i = 0; i < jsonArray.size(); i++) {
    		JSONObject json = jsonArray.getJSONObject(i);
    		if (NumberUtils.equals(row, json.getIntValue("row"))
    				&& NumberUtils.equals(col, json.getIntValue("col"))){
    			return json;
    		}
    	}
    	return null;
    }
    
    @Override
    public HSSFWorkbook exportExcel(String jsonString) {
    	Document document;
    	if (isOldJson(jsonString))
    		document = converToDocument(jsonString);
    	else
    		document = Document.parse(jsonString);
    	return document.exportExcel();
    }
    
    @Override
    public Document converToDocument(String oldJsonString) {
    	Document document = new Document();
    	if (StringUtils.isNotEmpty(oldJsonString) && isOldJson(oldJsonString)) {
        	JSONObject json = JSONObject.parseObject(oldJsonString);
        	JSONArray rowHeightArray = json.getJSONArray("rowHeights");  //行高
        	JSONArray colWidthArray = json.getJSONArray("colWidths");    //列宽
        	JSONArray dataArray = json.getJSONArray("data");             //数据
        	JSONArray cellArray = json.getJSONArray("cell");             //单元格属性
        	JSONArray rowHidden = json.getJSONArray("rows");
        	JSONArray colHidden = json.getJSONArray("cols");
        	//边框样式
        	JSONArray customBorderArray = null;
        	if (StringUtils.isNotEmpty(json.getString("customBorders"))) {
        		customBorderArray = JSONObject.parseArray(json.getString("customBorders"));
        	}
        	//合并单元格
        	JSONArray mergeCellArray = json.getJSONArray("mergeCells");
        	//填入数据
        	int columnNum = 0;
        	if (colWidthArray != null)
        		columnNum = colWidthArray.size();
        	else if (dataArray != null && dataArray.size() > 0) {
        		columnNum = dataArray.getJSONArray(0).size();
        	}
            int rowNum = 0;
            if (rowHeightArray != null) {
            	rowNum = rowHeightArray.size();
            }else if (dataArray != null) {
            	rowNum = dataArray.size();
            }
            if (NumberUtils.equals(columnNum, 0) || NumberUtils.equals(rowNum, 0)) 
            	return document;
            for (int i=0; i<rowNum; i++){
            	Row dataRow = document.createRow(i);
            	if (rowHeightArray != null) {
            		Integer rowHeight = rowHeightArray.getInteger(i);
                	if (rowHeight != null) {
                		dataRow.setHeight(rowHeight.intValue());
                	}	
            	}
            	if (rowHidden != null) {
            		for (int x = 0; x <rowHidden.size(); x++) {
            			JSONObject rowsJson = rowHidden.getJSONObject(x);
            			Row row = rowsJson.toJavaObject(Row.class);
            			if (NumberUtils.equals(row.getRow(), i)) {
            				dataRow.setVisible(row.getVisible());
            				dataRow.setCondition(row.getCondition());
            			}
            				
            		}
            	}
            	for (int j=0; j<columnNum; j++) {
            		String dataType = null;
            		JSONObject jsonCell = getJSONCell(cellArray, i, j);
            		if (jsonCell != null)
            			dataType = jsonCell.getString("dataType");
            		else
            			dataType = "";
            		Cell dataCell = dataRow.createCell(j);
            		if (CellDataType.getDataType(dataType) == CellDataType.dtDate) {
            			dataCell.setValue(dataArray.getJSONArray(i).getDate(j));
            		}else if (CellDataType.getDataType(dataType) == CellDataType.dtNumber) {
            			dataCell.setValue(dataArray.getJSONArray(i).getDouble(j));
            		}else {
            			dataCell.setValue(dataArray.getJSONArray(i).getString(j));
            		}
            		
            		//设置单元格对齐方式
            		CellStyle cellStyle = dataCell.createCellStyle();
            		if (jsonCell != null) {
            			String className = jsonCell.getString("className");
            			HashSet<String> classSet = new HashSet<>();
            			List<String> classList = StringUtils.str2List(className, " ");            			
            			JSONObject format = jsonCell.getJSONObject("format");
            			if (format != null) {
//            				cellStyle.setCellType(cellType);
//            				cellStyle.setFormat(format);
            			}
            			
            			//设置单元格对齐、字体、下划线、小数位数等样式
            			CellFont cellFont = null;
            			for (String name : classList) {
            				String newName = name;
            				if (name.contains("fontSize12") ||
            						name.contains("fontSize14")||
            						name.contains("fontSize18")||
            						name.contains("fontSize24")||
            						name.contains("fontSize32")||
            						name.contains("fontSize48")) {
            					if (cellFont == null)
            						cellFont = cellStyle.createCellFont();
            					cellFont.setSize(Double.valueOf(name.substring("fontSize".length(), "fontSize".length() + 2)));
            					newName = StringUtils.replace(newName, "fontSize12", "");
            					newName = StringUtils.replace(newName, "fontSize14", "");
            					newName = StringUtils.replace(newName, "fontSize18", "");
            					newName = StringUtils.replace(newName, "fontSize24", "");
            					newName = StringUtils.replace(newName, "fontSize32", "");
            					newName = StringUtils.replace(newName, "fontSize48", "");
            				}
            				classSet.add(newName);
            			}
            			//单元格上下对齐方式
            			if (classSet.contains("htCenter")) {
            				cellStyle.setAlign(Align.CENTER);
            			}else if (classSet.contains("htRight")) {
            				cellStyle.setAlign(Align.RIGHT);
            			}else {
            				cellStyle.setAlign(Align.LEFT);
            			} 
            			//单元格左右对齐方式
            			if (classSet.contains("htMiddle")) {
            				cellStyle.setValign(Valign.CENTER);
            			}else if (classSet.contains("htTop")) {
            				cellStyle.setValign(Valign.TOP);
            			}else{
            				cellStyle.setValign(Valign.BOTTOM);
            			}
                		
            			if (classSet.contains("htBold")) {
            				if (cellFont == null)
        						cellFont = cellStyle.createCellFont();
            				cellFont.setBold(true);
            			}
            			if (classSet.contains("htItalic")) {
            				if (cellFont == null)
        						cellFont = cellStyle.createCellFont();
            				cellFont.setItalic(true);
            			}
            			if (classSet.contains("htUnderline")) {
            				if (cellFont == null)
        						cellFont = cellStyle.createCellFont();
            				cellFont.setUnderline(true);
            			}
            			
            		}       

            		JSONObject customBorderCell = getCustomBoderCell(customBorderArray, i, j);
            		if (customBorderCell != null) {
            			JSONObject topJson = customBorderCell.getJSONObject("top");
            			JSONObject bottomJson = customBorderCell.getJSONObject("bottom");
            			JSONObject leftJson = customBorderCell.getJSONObject("left");
            			JSONObject rightJson = customBorderCell.getJSONObject("right");
            			CellBorder cellBorder = cellStyle.createCellBorder();
            			//存在边框，一律设为黑色 直线 ，不兼容其它颜色和线条，太烦了
            			//上边框
            			if (topJson != null) {
            				if (((topJson.containsKey("hide") && !topJson.getBooleanValue("hide")))||
            						(!topJson.containsKey("hide"))) {
            					cellBorder.setTopBorderStyle(CellBorderStyle.THICK);
                				cellBorder.setTopBorderColor("black");
            				}
            				
            			}
            			//下边框
            			if (bottomJson != null) {
            				if (((bottomJson.containsKey("hide") && !bottomJson.getBooleanValue("hide")))||
            						(!bottomJson.containsKey("hide"))) {
	            				cellBorder.setBottomBorderStyle(CellBorderStyle.THICK);
	            				cellBorder.setBottomBorderColor("black");
            				}
            			}
            			//左边框
            			if (leftJson != null) {
            				if (((leftJson.containsKey("hide") && !leftJson.getBooleanValue("hide")))||
            						(!leftJson.containsKey("hide"))) {
	            				cellBorder.setLeftBorderStyle(CellBorderStyle.THICK);
	            				cellBorder.setLeftBorderColor("black");
            				}
            			}
            			//右边框
            			if (rightJson != null) {
            				if (((rightJson.containsKey("hide") && !rightJson.getBooleanValue("hide")))||
            						(!rightJson.containsKey("hide"))) {
	            				cellBorder.setRightBorderStyle(CellBorderStyle.THICK);
	            				cellBorder.setRightBorderColor("black");
            				}
            			}                		
            		}
            	}
            }
            
            //处理合并单元格
            if (mergeCellArray != null) {
            	 for (int i = 0; i < mergeCellArray.size(); i++) {
                 	JSONObject mergeJson = mergeCellArray.getJSONObject(i);
                 	int firstRow = mergeJson.getInteger("row");
                 	int lastRow = firstRow + mergeJson.getInteger("rowspan") - 1;
                 	int firstCol = mergeJson.getInteger("col");
                 	int lastCol = firstCol + mergeJson.getInteger("colspan") - 1;
                 	if (firstRow > rowNum - 1 || firstCol > columnNum - 1) continue;
                 	if (lastRow > rowNum - 1) lastRow = rowNum - 1;
                 	if (lastCol > columnNum - 1) lastCol = columnNum - 1;
                 	if (NumberUtils.less(lastRow, firstRow) || NumberUtils.less(lastCol, firstCol)) continue;
                 	if (NumberUtils.equals(firstRow, lastRow) && NumberUtils.equals(firstCol, lastCol)) continue;
                 	MergeCell mergeCell = new MergeCell(firstRow, lastRow, firstCol, lastCol);
                 	document.addMergeRegion(mergeCell);
                 }
            }
           
            //设置列宽
            if (colWidthArray != null ) {
            	for (int i = 0; i < colWidthArray.size(); i++) {
            		int handsonWidth = colWidthArray.getIntValue(i); //像素
            		/*Double excelWidth = 0.0d;
            		if (handsonWidth > 0) {
                		excelWidth = Double.valueOf(String.valueOf(handsonWidth))/ 7 * 256;		
            		}		*/	
            		document.getColumnByIndex(i, true).setWidth(handsonWidth);
            	}
            }
            
            //设置列隐藏
            if (colHidden != null) {
        		for (int x = 0; x <colHidden.size(); x++) {
        			JSONObject colJSON = colHidden.getJSONObject(x);
        			Column column = colJSON.toJavaObject(Column.class);
        			document.getColumnByIndex(colJSON.getIntValue("col"), true).setCondition(column.getCondition());
    				document.getColumnByIndex(colJSON.getIntValue("col"), true).setVisible(column.getVisible());
        		}
        	}
        } else {
            document = JSONObject.parseObject(oldJsonString, Document.class);
        }
    	return document;
    }

    @Override
    public SheetData querySheetData(String id) {

        SheetData sheetData = new SheetData();

        ReportinstVO reportinstVO = reportinstDao.queryById(id);

        String content = reportinstVO.getBbsj();
        if (Strings.isNullOrEmpty(content) ){
            return sheetData;
        }

        // 样式
        int index = 0;
        Map<String, String> styleIdMap =new HashMap<>();


        Document document;
        if ( isOldJson(content) ) {
            document = converToDocument(content);
        } else {
            document = JSONObject.parseObject(content, Document.class);
        }

        List<Object[]> datas = new ArrayList<>();
        // 样式
        List<String[]> styles = new ArrayList<>();


        TableHidden hidden = new TableHidden();


        List<Integer[]> sizes = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(document.getRows())){
            for (Row row : document.getRows()) {

                if ( row.getHeight()!=null ){
                    sizes.add(new Integer[]{row.getRow()+1, 0, row.getHeight()});
                } else {
                    sizes.add(new Integer[]{row.getRow()+1, 0, 25});
                }

                if ( row.getVisible()!=null && !row.getVisible() ){
                    hidden.getRow().add(String.valueOf(row.getRow()+1));
                }

                if (CollectionUtils.isNotEmpty(row.getCells())){
                    for (Cell cell : row.getCells()) {
                        Object[] data = new Object[4];
                        data[0]=cell.getRow()+1;
                        data[1]=cell.getCol()+1;
                        data[2]= ( cell.getValue()==null ? "" : cell.getValue());


                        String styleStr = SpreadsheetUtils.buildStyle(cell.getStyle(), sheetData.getFormats());

                        String cellId = styleIdMap.get(styleStr);
                        if ( cellId==null || cellId.length()==0 ){
                            cellId = "wss_s_" + index++;
                            styleIdMap.put(styleStr, cellId);
                            styles.add(new String[]{cellId, styleStr});
                        }

                        data[3]= cellId;
                        datas.add(data);
                        // color;background;text-align;font-family;font-size;;;font-weight;top;;;;right;bottom;left;top
                    }
                }
            }
        }
        sheetData.setData(datas);

        sheetData.setStyles(styles);

        // 合并单元格
        if ( CollectionUtils.isNotEmpty(document.getMergeCells()) ){
            List<Integer[]> spans = new ArrayList<>();
            for (MergeCell mergeCell : document.getMergeCells()) {
                spans.add(new Integer[]{mergeCell.getFirstRow()+1, mergeCell.getFirstCol()+1, mergeCell.getLastCol()-mergeCell.getFirstCol()+1, mergeCell.getLastRow()-mergeCell.getFirstRow()+1});
            }
            sheetData.setSpans(spans);
        }

        // 列宽
        if ( CollectionUtils.isNotEmpty(document.getColumns()) ){
            for (Column column : document.getColumns()) {
                sizes.add(new Integer[]{0, column.getCol()+1, column.getWidth()});

                if ( column.getVisible()!=null && !column.getVisible() ){
                    hidden.getColumn().add(String.valueOf(column.getCol()+1));
                }
            }
        }
        sheetData.setSizes(sizes);

        SpreadsheetDataContentTable table = new SpreadsheetDataContentTable();
        Page page = document.getPage();
        if ( page!=null ){

//            if ( page.getShowGrid() ) {
//                table.setGridlines(1);
//            }
//            if ( page.getShowHeader() ) {
//                table.setHeaders(1);
//            }
        }

        if ( hidden.getColumn().size()>0 || hidden.getRow().size() > 0 ){
            table.setHidden(hidden);
        }

        sheetData.setTable(table);

        return sheetData;
    }

	@Override
	public Reportinst queryReportContent(String reporttempId, Date theDate, Integer year, Integer month) {
		Reporttemp reporttemp = reportinstDao.queryById(Reporttemp.class, reporttempId);
		if (reporttemp == null) {
			setReturnMessage("报表定义不存在！");
			return null;
		}
		Reportinst reportinst = null;
		if (StringUtils.equalsIgnoreCase("D", reporttemp.getBblx())){
			reportinst = reportinstDao.queryByBbbmAndBbrq(reporttemp.getBbbm(), theDate);
		}else if (StringUtils.equalsIgnoreCase("M", reporttemp.getBblx())) {
			reportinst = reportinstDao.queryByBbbmAndMonth(reporttemp.getBbbm(), year, month);
		}else if (StringUtils.equalsIgnoreCase("Y", reporttemp.getBblx())) {
			reportinst = reportinstDao.queryByBbbmAndMonth(reporttemp.getBbbm(), year, 1);
		}
		if (reportinst == null) {
			setReturnMessage("报表还未生成！");
			return null;
		}
		return reportinst;
	}

}
