package com.gavel.report.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.vo.ReporttempCondition;
import com.gavel.report.vo.ReporttempVO;


public interface ReporttempDao extends BaseDao {

    public RecordSet<ReporttempVO> query(ReporttempCondition condition);
    
    public ReporttempVO queryById(String id);

}
