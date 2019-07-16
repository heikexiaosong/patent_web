package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.DailytaskCondition;
import com.gavel.patent.vo.DailytaskVO;


public interface DailytaskDao extends BaseDao {

    RecordSet<DailytaskVO> query(DailytaskCondition condition);

}
