package com.gavel.report.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.vo.ReportparamCondition;
import com.gavel.report.vo.ReportparamVO;


public interface ReportparamDao extends BaseDao {

    RecordSet<ReportparamVO> query(ReportparamCondition condition);

}
