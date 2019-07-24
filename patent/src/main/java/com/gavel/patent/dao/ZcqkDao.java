package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.ZcqkCondition;
import com.gavel.patent.vo.ZcqkVO;


public interface ZcqkDao extends BaseDao {

    RecordSet<ZcqkVO> query(ZcqkCondition condition);

}
