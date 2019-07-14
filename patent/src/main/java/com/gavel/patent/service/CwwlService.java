package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.CwwlCondition;
import com.gavel.patent.vo.CwwlVO;


public interface CwwlService extends BaseEditService {
	
    RecordSet<CwwlVO> query(CwwlCondition condition);
    
}
