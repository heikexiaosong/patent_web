package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.patent.vo.FmrCondition;
import com.gavel.patent.vo.FmrVO;
import com.gavel.persistence.sql.RecordSet;


public interface FmrDao extends BaseDao {

    RecordSet<FmrVO> query(FmrCondition condition);

}
