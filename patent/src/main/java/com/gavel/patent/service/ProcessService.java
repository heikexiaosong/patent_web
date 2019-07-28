package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.ProcessCondition;
import com.gavel.patent.vo.ProcessVO;


public interface ProcessService extends BaseEditService {
	
    RecordSet<ProcessVO> query(ProcessCondition condition);
    
}
