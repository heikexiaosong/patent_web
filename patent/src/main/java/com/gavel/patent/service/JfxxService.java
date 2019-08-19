package com.gavel.patent.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.patent.persistent.Jfxx;
import com.gavel.persistence.sql.RecordSet;

import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;

import java.util.List;


public interface JfxxService extends BaseEditService {
	
    RecordSet<JfxxVO> query(JfxxCondition condition);

    List<Jfxx> loadJfxx(int year);

    void paying(Jfxx jfxx);
}
