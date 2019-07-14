package com.gavel.metric.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.metric.vo.MetricsAreaCondition;
import com.gavel.metric.vo.MetricsAreaVO;


public interface MetricsAreaService extends BaseEditService {
	
	public RecordSet<MetricsAreaVO> query(MetricsAreaCondition condition);

	void areaReg(String code, String name, String host);
}