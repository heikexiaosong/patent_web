package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;


public interface JfxxDao extends BaseDao {

    RecordSet<JfxxVO> query(JfxxCondition condition);

}
