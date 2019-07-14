package com.gavel.metric.service.impl;

import com.gavel.metric.vo.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.persistence.sql.RecordSet;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.metric.dao.MetricsDao;
import com.gavel.metric.persistent.Metrics;
import com.gavel.metric.service.MetricsService;
import com.gavel.metric.vo.MetricsCondition;
import com.gavel.metric.vo.MetricsVO;

import java.util.Calendar;
import java.util.List;


@Service("metricsService")
@Transactional
public class MetricsServiceImpl extends BaseEditServiceImpl implements MetricsService {

    @Autowired
    private MetricsDao metricsDao;

    @Override
    public void initService() {
        addMaster(Metrics.class);
    }

    @Override
	public RecordSet<MetricsVO> query(MetricsCondition condition) {
		return metricsDao.query(condition);
	}

    @Override
    public void upload(String aeraid, List<Tag> tags) {

        if ( aeraid==null || aeraid.trim().length() ==0 ){
           throw new RuntimeException("必须指定指标区域");
        }

        System.out.println("[采集区域： " + aeraid + "]同步数据： ");
        System.out.println(tags);

        Metrics params = new Metrics();
        params.setAeraid(aeraid);

       List<Metrics> metricsList = metricsDao.queryListByEntity(params);
       if ( metricsList!=null ){
           for (Metrics metrics1 : metricsList) {
               metricsDao.delete(metrics1);
           }
       }

       if ( tags!=null && tags.size()>0 ){
           for (Tag tag : tags) {
               Metrics newMetrics = new Metrics();
               newMetrics.setAeraid(aeraid);
               newMetrics.setName(tag.getName());
               newMetrics.setMetric(tag.getTagid());
               newMetrics.setUnit(tag.getUnit());

               metricsDao.insert(newMetrics);
           }
       }
    }

}
