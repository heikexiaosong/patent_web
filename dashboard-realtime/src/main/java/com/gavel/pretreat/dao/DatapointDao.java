package com.gavel.pretreat.dao;

import java.util.List;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.DatapointVO;

public interface DatapointDao extends BaseDao {

    public RecordSet<DatapointVO> query(DatapointCondition condition);

    public List<DatapointVO> query(DatapointCondition condition, List<String> metricList);
    
    public List<DatapointVO> query(DatapointCondition condition, String[] metricArray);
    
    public RecordSet<DatapointVO> getPageInfo(DatapointCondition condition, String[] metricArray);
}
