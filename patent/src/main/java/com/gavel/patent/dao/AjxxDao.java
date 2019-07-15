package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;


public interface AjxxDao extends BaseDao {

    RecordSet<AjxxVO> query(AjxxCondition condition);

}
