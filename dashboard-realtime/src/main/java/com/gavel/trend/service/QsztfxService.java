package com.gavel.trend.service;

import java.util.Date;
import java.util.List;

import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.config.Config;
import com.gavel.common.base.service.BaseService;
import com.gavel.rtdatacfg.config.TrendResult;
import com.gavel.trend.vo.QsztmxVO;

public interface QsztfxService extends BaseService {
	
	public List<QsztmxVO> loadQsztmxByQsztid(String id);
	
	public ChartData loadCharData(String id, Date startTime, Date endTime);
	
	public ChartData loadCharData(String id);
	
	public Config loadConfig(String id);

    TrendResult loadTrendData(String id);
}
