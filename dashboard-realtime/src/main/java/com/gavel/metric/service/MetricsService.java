package com.gavel.metric.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.metric.vo.MetricsCondition;
import com.gavel.metric.vo.MetricsVO;
import com.gavel.metric.vo.Tag;
import com.gavel.persistence.sql.RecordSet;

import java.util.List;


public interface MetricsService extends BaseEditService {
	
	public RecordSet<MetricsVO> query(MetricsCondition condition);

	void upload(String aeraid, List<Tag> metrics);
}