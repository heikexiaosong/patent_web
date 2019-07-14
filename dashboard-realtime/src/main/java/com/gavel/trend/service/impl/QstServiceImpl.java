package com.gavel.trend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.dao.QstDao;
import com.gavel.trend.db.entity.Qst;
import com.gavel.trend.service.QstService;
import com.gavel.trend.vo.QstCondition;
import com.gavel.trend.vo.QstVO;


@Service("qstService")
@Transactional
public class QstServiceImpl extends BaseEditServiceImpl implements QstService {

    @Autowired
    private QstDao qstDao;

    @Override
    public void initService() {
        addMaster(new Qst());
    }

    @Override
	public RecordSet<QstVO> query(QstCondition condition) {
	    return qstDao.query(condition);
	}

}
