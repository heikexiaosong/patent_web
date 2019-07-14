package com.gavel.trend.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.config.Config;
import com.gavel.rtdatacfg.config.ConfigItem;
import com.gavel.rtdatacfg.config.ConfigItemGroup;
import com.gavel.rtdatacfg.util.RTDataLoader;
import com.gavel.rtdatacfg.vo.RtDataCfgCondition;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.NumberUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.dao.QsztDao;
import com.gavel.trend.dao.QsztmxDao;
import com.gavel.trend.db.entity.Qszt;
import com.gavel.trend.service.RTdataService;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;

@Service("rtdataService")
@Transactional
public class RTdataServiceImpl extends BaseEditServiceImpl  implements RTdataService {

    @Autowired
    private CommonService commonService;

    @Autowired
    private QsztDao qsztDao;

    @Autowired
    private QsztmxDao qsztmxDao;


    @Override
    public void initService() {
    }

    @Override
    public ChartData genLineRtdata(RtDataCfgCondition condition) {
        Config config = loadConfig(condition.getLtype());
        if ( config == null ){
            throw new RuntimeException("高炉[" + condition.getLtype() + "]没有配置实时趋势图!");
        }
        String host = commonService.getStringOptionValue("TSDB.HOST");
        Date end = DateUtils.getDateTime();
        Date start = new Date(end.getTime() - config.getDuration());
        return RTDataLoader.loadRTData1(config, start, end, host);
    }
    
    public ChartData genBarRtdata(RtDataCfgCondition condition) {
    	 Config config = loadConfig(condition.getLtype());
         if ( config == null ){
             throw new RuntimeException("高炉[" + condition.getLtype() + "]没有配置实时趋势图!");
         }
         String host = commonService.getStringOptionValue("TSDB.HOST");
         Date end = DateUtils.getDateTime();
         Date start = new Date(end.getTime() - config.getDuration());
         return RTDataLoader.loadRTData1(config, start, end, host);
    }

    @Override
    public Config loadConfig(String id){
    	if ( id==null || id.length()==0 ){
            return null;
        }
        Qszt qszt =  qsztDao.queryById(Qszt.class, id);
        if ( qszt==null ){
            return null;
        }
        Config config = new Config();
        config.setName(qszt.getZtmc());
        if (qszt.getInterval() != null ) {
        	if (qszt.getInterval() < 60)
        		config.setDownsample(qszt.getInterval().toString() + "s-avg");
        	else if (NumberUtils.GreaterEqual(qszt.getInterval(), 60) && 
        			NumberUtils.less(qszt.getInterval(), 3600)) {
        		config.setDownsample(qszt.getInterval()/60 + "m-avg");
        	}else {
        		config.setDownsample(qszt.getInterval()/3600 + "h-avg");
        	}
        }else {
        	config.setDownsample("5m-avg");
        }
        config.setDuration(qszt.getTimespan()*24*60*60*1000L);
        config.setInterval(qszt.getInterval()*1000);
        config.setPunctually(true);
        //获取明细点数据
        QsztmxCondition qsztmxCondition = new QsztmxCondition();
        qsztmxCondition.setMid(qszt.getId());
        RecordSet<QsztmxVO> recordSet = qsztmxDao.query(qsztmxCondition);
        if ( recordSet==null || recordSet.getRecords()==null ){
            return config;
        }
        List<QsztmxVO> qsztmxList = recordSet.getRecords();
        List<ConfigItem> items = new ArrayList<>();
        List<ConfigItemGroup> groups = new ArrayList<>();
        for (QsztmxVO qsztmxVO : qsztmxList) {
            ConfigItem configItem = new ConfigItem(qsztmxVO.getMetric(), qsztmxVO.getName(), qsztmxVO.getMetricunit());
            items.add(configItem);
        }
        config.setItems(items);
        config.setGroups(groups);
        return config;
    }

}
