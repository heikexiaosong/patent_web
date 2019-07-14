package com.gavel.trend.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;



public interface QsztmxDao extends BaseDao {

	public RecordSet<QsztmxVO> query(QsztmxCondition condition);
	
	public RecordSet<QsztmxVO> queryHistory(QsztmxCondition condition);

}