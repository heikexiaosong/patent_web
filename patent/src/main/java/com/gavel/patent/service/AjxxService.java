package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;

import java.io.IOException;
import java.io.InputStream;


public interface AjxxService extends BaseEditService {
	
    RecordSet<AjxxVO> query(AjxxCondition condition);

    void imp(InputStream ins) throws Exception;
}
