package com.gavel.trend.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.vo.QsztCondition;
import com.gavel.trend.vo.QsztVO;


public interface QsztService extends BaseEditService {
	
	public RecordSet<QsztVO> query(QsztCondition condition);
	
	public void publish(String id);
    
}