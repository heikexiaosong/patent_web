package com.gavel.rtdatacfg.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.rtdatacfg.config.Config;
import com.gavel.rtdatacfg.config.DataPointCfg;
import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.service.RtdatacfgService;
import com.gavel.rtdatacfg.util.RTDataLoader;
import com.gavel.rtdatacfg.vo.RtDataCfgCondition;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;

@Service("rtdatacfgService")
@Transactional
public class RtdataCfgServiceImpl extends BaseEditServiceImpl  implements RtdatacfgService {

    @Autowired
    private CommonService commonService;

    @Override
    public void initService() {
    }

    @Override
    public ChartData genRtdata(RtDataCfgCondition condition) {


        Config config = DataPointCfg.loadConfig(condition.getLtype());
        if ( config == null ){
            throw new RuntimeException("高炉[" + condition.getLtype() + "]没有配置实时图!");
        }

        String host = commonService.getStringOptionValue("TSDB.HOST");

        System.out.println("TSDB.HOST: " + host);


        return RTDataLoader.loadRTData(config, condition.getTimespan(), condition.getRate(), host);
    }

    @Override
    public ChartData last(RtDataCfgCondition condition) {

        Config config = DataPointCfg.loadConfig(condition.getLtype());
        if ( config == null ){
            throw new RuntimeException("高炉[" + condition.getLtype() + "]没有配置实时图!");
        }

        String host = commonService.getStringOptionValue("TSDB.HOST");
        System.out.println("TSDB.HOST: " + host);

        return RTDataLoader.last(config, condition.getTimespan(), condition.getRate(), host);
    }

}
