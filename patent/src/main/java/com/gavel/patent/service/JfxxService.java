package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;


public interface JfxxService extends BaseEditService {
	
    RecordSet<JfxxVO> query(JfxxCondition condition);
    
}
