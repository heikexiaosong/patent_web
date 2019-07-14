package com.gavel.report.dao;

import java.util.Date;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.db.entity.Reportinst;
import com.gavel.report.vo.ReportinstCondition;
import com.gavel.report.vo.ReportinstVO;


public interface ReportinstDao extends BaseDao {

    public RecordSet<ReportinstVO> query(ReportinstCondition condition);
    
    public ReportinstVO queryById(String id);
    
    public Reportinst queryByBbbmAndBbrq(String bbbm, Date bbrq);
    
    public Reportinst queryByBbbmAndMonth(String bbbm, Integer year, Integer month);

}
