package com.gavel.trend.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.trend.vo.QstCondition;
import com.gavel.trend.vo.QstVO;


public interface QstService extends BaseEditService {
	
    RecordSet<QstVO> query(QstCondition condition);
    
}
