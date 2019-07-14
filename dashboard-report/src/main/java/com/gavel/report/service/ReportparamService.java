package com.gavel.report.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.format.ReportFormat;
import com.gavel.report.vo.ReportparamCondition;
import com.gavel.report.vo.ReportparamVO;


public interface ReportparamService extends BaseEditService {
	
    public RecordSet<ReportparamVO> query(ReportparamCondition condition);

    public Object clac(ReportFormat reportFormat, String value);
}
