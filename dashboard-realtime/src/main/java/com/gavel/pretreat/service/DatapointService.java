package com.gavel.pretreat.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.db.entity.Datapoint;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.DatapointVO;


public interface DatapointService extends BaseEditService {
	
    public RecordSet<DatapointVO> query(DatapointCondition condition);
    
    public void batchInsert(List<Datapoint> list);
    
    public void batchUpdate(List<Datapoint> list);
    
    public void batchDelete(String thdate, String time);
    
    public List<DatapointVO> query(String code, DatapointCondition condition);

    void imp(String type, InputStream ins, String theDate, String time) throws IOException;
}
