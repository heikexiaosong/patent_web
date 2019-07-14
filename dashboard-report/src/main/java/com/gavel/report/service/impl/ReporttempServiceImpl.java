package com.gavel.report.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.kzzx.persistent.Menus;
import com.gavel.kzzx.persistent.Yymk;
import com.gavel.kzzx.service.YymkService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.dao.ReporttempDao;
import com.gavel.report.db.entity.Reporttemp;
import com.gavel.report.model.*;
import com.gavel.report.service.ReportinstService;
import com.gavel.report.service.ReporttempService;
import com.gavel.report.spreadsheet.SpreadsheetUtils;
import com.gavel.report.vo.ReporttempCondition;
import com.gavel.report.vo.ReporttempVO;
import com.google.common.base.Strings;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;


@Service("reporttempService")
@Transactional
public class ReporttempServiceImpl extends BaseEditServiceImpl implements ReporttempService {

    @Autowired
    private ReporttempDao reporttempDao;

    @Autowired
    private ReportinstService reportinstService;


    @Autowired
    private CommonService commonService;
    
    @Autowired
    private YymkService yymkService;

    @Override
    public void initService() {
        addMaster(new Reporttemp());
    }

    @Override
	public RecordSet<ReporttempVO> query(ReporttempCondition condition) {
	    return reporttempDao.query(condition);
	}
    
    @Override
    public ReporttempVO queryById(String id) {
    	return reporttempDao.queryById(id);
    }

    @Override
    public void saveSpreadsheet(String id, SpreadsheetDataContent content) {

        if ( content==null ){
            return;
        }

        Document document = convert(content);
        if ( document == null ){
            return;
        }

        Reporttemp reporttemp = reporttempDao.queryById(Reporttemp.class, id);
        if ( reporttemp == null ){
            return;
        }

        reporttemp.setBbnr(document.toString());
        reporttempDao.update(reporttemp);
    }

    @Override
    public SheetData querySheetData(String id) {
        SheetData sheetData = new SheetData();

        ReporttempVO reporttempVO = reporttempDao.queryById(id);

        String content = reporttempVO.getBbnr();
        if (Strings.isNullOrEmpty(content) ){
            return sheetData;
        }

        // 样式
        int index = 0;
        Map<String, String> styleIdMap =new HashMap<>();


        Document document;
        if ( reportinstService.isOldJson(content) ) {
            document = reportinstService.converToDocument(content);
        } else {
            document = JSONObject.parseObject(content, Document.class);
        }

        List<Object[]> datas = new ArrayList<>();
        // 样式
        List<String[]> styles = new ArrayList<>();


        // 隐藏条件
        List<String[]> hideConditionals = sheetData.getHideConditionals();


        List<Integer[]> sizes = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(document.getRows())){
            for (Row row : document.getRows()) {

                if ( row.getHeight()!=null ){
                    sizes.add(new Integer[]{row.getRow()+1, 0, row.getHeight()});
                } else {
                    sizes.add(new Integer[]{row.getRow()+1, 0, 26});
                }

                if ( row.getCondition()!=null && row.getCondition().length() > 0 ){
                    hideConditionals.add(new String[]{"row", String.valueOf(row.getRow()+1), row.getCondition()});
                } else if ( Boolean.FALSE.equals(row.getVisible()) ){
                    hideConditionals.add(new String[]{"row", String.valueOf(row.getRow()+1), "1==2"});
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
                if ( column.getCondition()!=null && column.getCondition().length() > 0 ){
                    hideConditionals.add(new String[]{"column", String.valueOf(column.getCol()+1), column.getCondition()});
                } else if ( Boolean.FALSE.equals(column.getVisible()) ){
                    hideConditionals.add(new String[]{"column", String.valueOf(column.getCol()+1), "1==2"});
                }
            }
        }
        sheetData.setSizes(sizes);

        return sheetData;
    }

    private Document convert(SpreadsheetDataContent content) {
        if ( content == null ){
            return null;
        }


        Document document = new Document();


        Page page = document.getPage();
        SpreadsheetDataContentTable table = content.getTable();
        if (Objects.nonNull(table) ){
            if ( table.getGridlines() == 0 ){
                page.setShowGrid(Boolean.FALSE);
            }
            if ( table.getHeaders() == 0 ){
                page.setShowHeader(Boolean.FALSE);
                page.setShowRowNo(Boolean.FALSE);
            }

        }


        String[][] hideConditionals = content.getHideConditionals();


        // TODO rows 设置
       Object[][] datas = content.getData();
        if ( datas!=null ){

            Map<Integer, Row> numberRowMap = new HashMap<>();

            for (Object[] data : datas) {
                if ( data==null || data.length==0 ){
                    continue;
                }

                Integer rowNum = (Integer)data[0];
                Integer colNum = (Integer)data[1];
                if ( rowNum==null ){
                    continue;
                }

                Row row = numberRowMap.get(rowNum);
                if ( row == null ){
                    row = new Row(rowNum.intValue()-1);
                    row.setHeight(26);
                    numberRowMap.put(rowNum, row);
                }


                // 行隐藏条件
                if (hideConditionals!=null ){
                    for (String[] hideConditional : hideConditionals) {
                        if ( "row".equalsIgnoreCase(hideConditional[0])
                                && String.valueOf(rowNum).equalsIgnoreCase(hideConditional[1]) ){
                            row.setCondition(hideConditional[2]);
                            if ( hideConditional.length>=4 ){
                                row.setVisible(Boolean.getBoolean(hideConditional[3]));
                            }
                            break;
                        }
                    }
                }



                Cell cell = new Cell(rowNum-1, colNum-1);
                cell.setValue(data[2]);

                if ( data.length == 4 && data[3]!=null ){
                    String cssName = (String)data[3];
                    if ( cssName!=null && cssName.length()>0 ){
                        for (String[] styles : content.getStyles()) {
                            if ( cssName.equalsIgnoreCase(styles[0]) ){
                                cell.setStyle(valueOf(styles[1], content.getFormats()));
                                break;
                            }
                        }
                    }
                }
                row.getCells().add(cell);
            }

            document.getRows().addAll(numberRowMap.values());
        }


        // TODO Column 设置
        List<Column> columns = document.getColumns();
        if ( content.getSizes()!=null ){
            for (int[] size : content.getSizes()) {
                if ( size==null || size.length!=3 ){
                    continue;
                }

                if ( size[0] == 0 ){ //列宽
                    Column column = new Column(size[1]-1);
                    column.setWidth(size[2]);
                    columns.add(column);
                }

                if ( size[1] == 0 ){ // 行高
                    Row exist_row = null;
                    for (Row row : document.getRows()) {
                        if ( row.getRow() == size[0]-1 ){
                            exist_row = row;
                            break;
                        }
                    }
                    if ( exist_row==null ){
                        exist_row = new Row( size[0]-1);
                        document.getRows().add(exist_row);
                    }
                    exist_row.setHeight(size[2]);
                }
            }
        }

        if (hideConditionals!=null ){
            for (String[] hideConditional : hideConditionals) {
                if ( "column".equalsIgnoreCase(hideConditional[0])){
                   String columnNumberStr = hideConditional[1];
                   int colnumNum = Integer.parseInt(columnNumberStr);

                    Column exist_column = null;
                    for (Column column : columns) {
                        if ( column.getCol() == colnumNum-1 ){
                            exist_column = column;
                        }
                    }

                    if ( exist_column == null ){
                        exist_column = new Column(colnumNum-1);
                        columns.add(exist_column);
                    }

                    exist_column.setCondition(hideConditional[2]);
                    if ( hideConditional.length>=4 ){
                        exist_column.setVisible(Boolean.getBoolean(hideConditional[3]));
                    }
                }
            }
        }

        List<MergeCell> mergeCells = document.getMergeCells();
        if ( content.getSpans()!=null && content.getSpans().length > 0 ){
            for (int[] ints : content.getSpans()) {
                if ( ints.length==4 ){
                    MergeCell mergeCell = new MergeCell();
                    mergeCell.setFirstRow(ints[0]-1);
                    mergeCell.setFirstCol(ints[1]-1);
                    mergeCell.setLastCol(ints[2] + ints[1] -2);
                    mergeCell.setLastRow(ints[0] + ints[3] -2);

                    mergeCells.add(mergeCell);
                }
            }
        }
        // TODO mergeCells 设置

        return document;
    }

    private CellStyle valueOf(String styleStr, String[][] formats){
        if ( styleStr==null || ";;;;;;;;;;;;;;;".equalsIgnoreCase(styleStr) ){
            return null;
        }

        // color;background;text-align;font-family;font-size;;;font-weight;middle;;;format;right;bottom;left;top
        String[] values = styleStr.split(";");

        CellStyle cellStyle = new CellStyle();

        CellFont font = new CellFont();
        if ( values.length >=1 ){
            font.setColor(values[0]);
        }
        if ( values.length >=4 ){
            font.setName(values[3]);
        }

        font.setSize(11d);
        if ( values.length >= 5 && values[4]!=null && values[4].length()>0 ){
            try {
                font.setSize(Double.parseDouble(values[4].replace("px", "")));
            } catch (Exception e){
                System.out.println(values[4] + " 解析失败: " + e.getMessage());
            }
        }

        if ( values.length >=8 ){
            font.setBold(values[7]!=null && "bold".equalsIgnoreCase(values[7]));
        }

        cellStyle.setFont(font);

        if ( values.length >=2 && values[1]!=null && !"null".equalsIgnoreCase(values[1]) ){
            cellStyle.setBgcolor(values[1]);
        }

        if ( values.length >=3 ){
            cellStyle.setAlign(Cell.Align.getAlign(values[2]));
        }

        if ( values.length >=9 ){
            cellStyle.setValign(Cell.Valign.getValign(values[8]));
        }

        cellStyle.setValign(Cell.Valign.CENTER);

        cellStyle.setShowZero(Boolean.TRUE);

        // 单元格样式
        if ( values.length >= 12 ){
            String format = values[11]; // 格式名称
            if ( !Strings.isNullOrEmpty(format) ){
                if ( format.equalsIgnoreCase("price") ){
                    cellStyle.setFormat("[>=0]¥#,0.00;[<0]-¥#,0.00");
                } else if ( format.equalsIgnoreCase("int") ){
                    cellStyle.setFormat("[>=0]#,0.00;[<0]-#,0.00");
                } else if ( format.equalsIgnoreCase("percent") ){
                    cellStyle.setFormat("[>=0]0.00%;[<0]-0.00%");
                } else {
                    if ( formats!=null && formats.length > 0 ){
                        for (String[] strings : formats) {
                            if ( strings!=null && strings.length==2 ){
                                if ( format.equalsIgnoreCase(strings[0]) ){
                                    cellStyle.setFormat(strings[1]);
                                }
                            }
                        }
                    }
                }
            }
        }


        if ( values.length >= 13 ){

            CellBorder cellBorder = new CellBorder();
            cellStyle.setBorder(cellBorder);

            if ( values.length >= 13 && !Strings.isNullOrEmpty(values[12]) ){
                CellBorderLine borderLine = new CellBorderLine();
                borderLine.setColor(values[12]);
                borderLine.setStyle(CellBorderLine.CellBorderStyle.THICK);
                cellBorder.setRight(borderLine);
            }

            if ( values.length >= 14 &&!Strings.isNullOrEmpty(values[13]) ){
                CellBorderLine borderLine = new CellBorderLine();
                borderLine.setColor(values[13]);
                borderLine.setStyle(CellBorderLine.CellBorderStyle.THICK);
                cellBorder.setBottom(borderLine);
            }

            if ( values.length >= 15 &&!Strings.isNullOrEmpty(values[14]) ){
                CellBorderLine borderLine = new CellBorderLine();
                borderLine.setColor(values[14]);
                borderLine.setStyle(CellBorderLine.CellBorderStyle.THICK);
                cellBorder.setLeft(borderLine);
            }

            if ( values.length >= 16 && !Strings.isNullOrEmpty(values[15]) ){
                CellBorderLine borderLine = new CellBorderLine();
                borderLine.setColor(values[15]);
                borderLine.setStyle(CellBorderLine.CellBorderStyle.THICK);
                cellBorder.setTop(borderLine);
            }
        }
        return cellStyle;
    }

    @Override
    public void publish(String bm) {
        if ( bm==null || bm.trim().length()==0 ){
            throw new RuntimeException("报表编码[bm]不能为空.");
        }

        //查询自定义模块表
        Reporttemp param = new Reporttemp();
        param.setBbbm(bm);
        Reporttemp reportTemplate = reporttempDao.queryByEntity(param);

        if ( reportTemplate==null ){
            throw new RuntimeException("找不到对应的报表定义.");
        }


        if ( reportTemplate.getMkid()==null || reportTemplate.getMkid().trim().length()==0 ){
            int code =  850300000 + commonService.getSequence("REPORTNUM", "8503");
            reportTemplate.setMkid(String.valueOf(code));
            reporttempDao.update(reportTemplate);
            yymkService.addUserDefine("850300000", code, reportTemplate.getBbmc(), "report/reportinst/page/" + bm);
        }

    }

    @Override
    public void afterDelete(BaseEntity entity) {
        if ( entity!=null && entity instanceof Reporttemp ){
            Reporttemp reporttemp = (Reporttemp)entity;
            unpublish(reporttemp);
        }
    }

    @Override
    public void unpublish(String bbbm) {
        if ( bbbm==null || bbbm.trim().length()==0 ){
            throw new RuntimeException("报表编码[bm]不能为空.");
        }


        Reporttemp param = new Reporttemp();
        param.setBbbm(bbbm);
        Reporttemp exist = reporttempDao.queryByEntity(param);
        if ( exist==null ){
            throw new RuntimeException("报表[bm: " + bbbm + "]未找到.");
        }

        unpublish(exist);
    }

    private void unpublish(Reporttemp exist) {
        if ( exist==null ){
            return;
        }

        if ( exist.getMkid()==null || exist.getMkid().trim().length()==0 ){
            return ;
        }

        String mkid = exist.getMkid();

        Menus menusParam = new Menus();
        menusParam.setMkid(mkid);
        Menus menus = reporttempDao.queryByEntity(menusParam);
        if (menus != null) {
            reporttempDao.delete(menus);
        }

        //查询应用模块
        Yymk yymkParam = new Yymk();
        yymkParam.setMkid(mkid);
        Yymk yymk = reporttempDao.queryByEntity(yymkParam);
        if (yymk != null) {
            reporttempDao.delete(yymk);
        }
    }

    @Override
    public Reporttemp loadReporttemp(String bbbm) {
        Reporttemp param = new Reporttemp();
        param.setBbbm(bbbm);
        return reporttempDao.queryByEntity(param);
    }

    @Override
    public void updateBbnr(String bbbm, JSONObject content) {
        Reporttemp param = new Reporttemp();
        param.setBbbm(bbbm);
        Reporttemp record = reporttempDao.queryByEntity(param);
        if ( record!=null ) {
            record.setBbnr(content.toJSONString());
            reporttempDao.update(record);
        }
    }

}
