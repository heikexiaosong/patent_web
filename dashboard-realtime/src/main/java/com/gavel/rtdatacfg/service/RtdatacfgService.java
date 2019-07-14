package com.gavel.rtdatacfg.service;


import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.vo.RtDataCfgCondition;
import com.gavel.common.base.service.BaseEditService;

public interface RtdatacfgService extends BaseEditService {

    ChartData genRtdata(RtDataCfgCondition condition);

    ChartData last(RtDataCfgCondition condition);
}
