package com.gavel.report.service;

import java.util.Date;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.db.entity.Reportinst;
import com.gavel.report.db.entity.Reporttemp;
import com.gavel.report.model.Document;
import com.gavel.report.model.SheetData;
import com.gavel.report.vo.ReportinstCondition;
import com.gavel.report.vo.ReportinstVO;


public interface ReportinstService extends BaseEditService {
	
    RecordSet<ReportinstVO> query(ReportinstCondition condition);

    public void recalculate(String id);

    public void generate(String bbbm, Date theDate, int year, int month);

    public Reporttemp loadReporttemp(String bbbm);
    
    public HSSFWorkbook exportExcel(String jsonString);
    
    public ReportinstVO queryById(String id);
    
    public Document converToDocument(String oldJsonString);

    public SheetData querySheetData(String id);

    public boolean isOldJson(String jsonString);
    
    public Reportinst queryReportContent(String reporttempId, Date theDate, Integer year, Integer month);
}
