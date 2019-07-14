package com.gavel.pretreat.service;

import java.util.Date;
import java.util.List;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.common.structurer.MapList;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.PretreatCondition;
import com.gavel.pretreat.vo.PretreatVO;


public interface PretreatService extends BaseEditService {
	
    public RecordSet<PretreatVO> query(PretreatCondition condition);

    public void process(String code,  Date theDate);

    public MapList datas(String code, DatapointCondition condition);

    public void publish(String code);

    public void unpublish(String code);

    public List<String>  columns(String code);
}
