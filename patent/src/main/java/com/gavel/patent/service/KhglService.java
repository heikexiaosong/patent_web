package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.KhglCondition;
import com.gavel.patent.vo.KhglVO;

import java.io.IOException;
import java.io.InputStream;


public interface KhglService extends BaseEditService {
	
    RecordSet<KhglVO> query(KhglCondition condition);

    void imp(InputStream ins) throws IOException;
}
