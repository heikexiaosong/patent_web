package com.gavel.trend.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;


public interface QsztmxService extends BaseEditService {
	
	public RecordSet<QsztmxVO> query(QsztmxCondition condition);
	
	public RecordSet<QsztmxVO> queryHistory(QsztmxCondition condition);
    
}