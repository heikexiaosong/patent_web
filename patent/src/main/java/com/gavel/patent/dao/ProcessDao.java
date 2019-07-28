package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.ProcessCondition;
import com.gavel.patent.vo.ProcessVO;


public interface ProcessDao extends BaseDao {

    RecordSet<ProcessVO> query(ProcessCondition condition);

}
