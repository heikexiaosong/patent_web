package com.gavel.trend.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.vo.QsztCondition;
import com.gavel.trend.vo.QsztVO;



public interface QsztDao extends BaseDao {

	public RecordSet<QsztVO> query(QsztCondition condition);

}