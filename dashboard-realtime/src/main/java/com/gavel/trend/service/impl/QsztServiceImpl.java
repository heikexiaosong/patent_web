package com.gavel.trend.service.impl;

import com.gavel.trend.db.entity.Qsztmx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.druid.util.StringUtils;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.kzzx.service.YymkService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.dao.QsztDao;
import com.gavel.trend.db.entity.Qszt;
import com.gavel.trend.service.QsztService;
import com.gavel.trend.vo.QsztCondition;
import com.gavel.trend.vo.QsztVO;



@Service("qsztService")
@Transactional
public class QsztServiceImpl extends BaseEditServiceImpl implements QsztService {

    @Autowired
    private QsztDao qsztDao;
    
    @Autowired
    private YymkService yymkService;
    
    @Autowired
    private CommonService commonService;

    @Override
    public void initService() {
        addMaster(Qszt.class);
		addDetail(Qsztmx.class);
    }
    
    @Override
    public void beforeInsert(BaseEntity entity) {
    	if (entity instanceof Qszt) {
    		Qszt qszt = (Qszt)entity;
    		if (StringUtils.isEmpty(qszt.getZtid())) {
    			qszt.setZtid(commonService.getOrderID("QSZT", "QSZT", "QSZT".length() + 4));
    		}
    	}
    }

    @Override
	public RecordSet<QsztVO> query(QsztCondition condition) {
		return qsztDao.query(condition);
	}

	@Override
	public void publish(String id) {
		Qszt qszt = qsztDao.queryById(Qszt.class, id);
		if (qszt != null && StringUtils.isEmpty(qszt.getMkid())) {
			String mkid = yymkService.addUserDefine("840500000", qszt.getZtmc(), "/trend/qsztfx/"+id);
			qszt.setMkid(mkid);
			qsztDao.update(qszt);
		}
		
		
	}

}
