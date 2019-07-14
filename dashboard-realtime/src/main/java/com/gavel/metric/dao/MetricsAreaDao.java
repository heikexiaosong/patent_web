package com.gavel.metric.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.metric.vo.MetricsAreaCondition;
import com.gavel.metric.vo.MetricsAreaVO;



public interface MetricsAreaDao extends BaseDao {

	public RecordSet<MetricsAreaVO> query(MetricsAreaCondition condition);

}