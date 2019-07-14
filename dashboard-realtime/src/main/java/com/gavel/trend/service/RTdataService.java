package com.gavel.trend.service;


import com.gavel.rtdatacfg.config.Config;
import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.vo.RtDataCfgCondition;
import com.gavel.common.base.service.BaseEditService;

public interface RTdataService extends BaseEditService {

	/**
	 * 获取折线图数据
	 * @param condition
	 * @return
	 */
    public ChartData genLineRtdata(RtDataCfgCondition condition);
    
    public Config loadConfig(String code);
    
    /**
     * 获取柱状图数据
     * @param condition
     * @return
     */
    public ChartData genBarRtdata(RtDataCfgCondition condition);

}
