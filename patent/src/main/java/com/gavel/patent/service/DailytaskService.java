package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.DailytaskCondition;
import com.gavel.patent.vo.DailytaskVO;


public interface DailytaskService extends BaseEditService {
	
    RecordSet<DailytaskVO> query(DailytaskCondition condition);

    void exec();
}
