package com.gavel.trend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.dao.QsztmxDao;
import com.gavel.trend.db.entity.Qsztmx;
import com.gavel.trend.service.QsztmxService;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;



@Service("qsztmxService")
@Transactional
public class QsztmxServiceImpl extends BaseEditServiceImpl implements QsztmxService {

    @Autowired
    private QsztmxDao qsztmxDao;

    @Override
    public void initService() {
        addMaster(Qsztmx.class);
    }

    @Override
	public RecordSet<QsztmxVO> query(QsztmxCondition condition) {
		return qsztmxDao.query(condition);
	}
    
    @Override
	public RecordSet<QsztmxVO> queryHistory(QsztmxCondition condition) {
		return qsztmxDao.queryHistory(condition);
	}
    
    @Override
    public void beforePost(BaseEntity entity) {
    	if (entity instanceof Qsztmx) {
    		Qsztmx qsztmx = (Qsztmx)entity;
    		if (qsztmx.getXh() == null) {
    			qsztmx.setXh(1);
    		}
    	}
    }

}
