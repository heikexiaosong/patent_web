package com.gavel.metric.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.persistence.sql.RecordSet;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.metric.dao.MetricsAreaDao;
import com.gavel.metric.persistent.MetricsArea;
import com.gavel.metric.service.MetricsAreaService;
import com.gavel.metric.vo.MetricsAreaCondition;
import com.gavel.metric.vo.MetricsAreaVO;



@Service("metricsAreaService")
@Transactional
public class MetricsAreaServiceImpl extends BaseEditServiceImpl implements MetricsAreaService {

    @Autowired
    private MetricsAreaDao metricsAreaDao;

    @Override
    public void initService() {
        addMaster(MetricsArea.class);
    }

    @Override
	public RecordSet<MetricsAreaVO> query(MetricsAreaCondition condition) {
		return metricsAreaDao.query(condition);
	}

    @Override
    public void areaReg(String code, String name, String host) {

        if ( code==null || code.trim().length()==0 ){
            throw new RuntimeException("注册失败, 区域编码不能为空");
        }

        MetricsArea params = new MetricsArea();
        params.setCode(code);

        MetricsArea area =  metricsAreaDao.queryByEntity(params);
        if ( area ==null ) {
            area = new MetricsArea();
            area.setCode(code);
            area.setName(name==null ? code : name);
            area.setHost(host);
            metricsAreaDao.insert(area);
        } else {

        }

    }

}
