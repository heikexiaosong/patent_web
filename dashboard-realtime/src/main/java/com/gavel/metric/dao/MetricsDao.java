package com.gavel.metric.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.metric.vo.MetricsCondition;
import com.gavel.metric.vo.MetricsVO;



public interface MetricsDao extends BaseDao {

	public RecordSet<MetricsVO> query(MetricsCondition condition);

}