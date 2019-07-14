package com.gavel.report.service;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.report.db.entity.Reporttemp;
import com.gavel.report.model.SheetData;
import com.gavel.report.model.Spreadsheet;
import com.gavel.report.model.SpreadsheetDataContent;
import com.gavel.report.vo.ReporttempCondition;
import com.gavel.report.vo.ReporttempVO;


public interface ReporttempService extends BaseEditService {
	
    RecordSet<ReporttempVO> query(ReporttempCondition condition);

    void publish(String mkid);

    void unpublish(String bbbm);

    Reporttemp loadReporttemp(String bbbm);

    void updateBbnr(String bbbm, JSONObject param);
    
    public ReporttempVO queryById(String id);

    void saveSpreadsheet(String id, SpreadsheetDataContent spreadsheet);

    SheetData querySheetData(String id);
}
