package com.gavel.trend.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.trend.vo.QstitemCondition;
import com.gavel.trend.vo.QstitemVO;


public interface QstitemService extends BaseEditService {
	
    RecordSet<QstitemVO> query(QstitemCondition condition);
    
}
