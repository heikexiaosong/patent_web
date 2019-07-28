package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.patent.persistent.Zcqk;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.ZcqkCondition;
import com.gavel.patent.vo.ZcqkVO;


public interface ZcqkService extends BaseEditService {
	
    RecordSet<ZcqkVO> query(ZcqkCondition condition);

    void workflow(Zcqk zcqk, String operate, String userId);
}
