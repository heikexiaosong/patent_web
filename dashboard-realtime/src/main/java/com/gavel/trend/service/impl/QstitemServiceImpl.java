package com.gavel.trend.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.dao.QstitemDao;
import com.gavel.trend.db.entity.Qstitem;
import com.gavel.trend.service.QstitemService;
import com.gavel.trend.vo.QstitemCondition;
import com.gavel.trend.vo.QstitemVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("qstitemService")
@Transactional
public class QstitemServiceImpl extends BaseEditServiceImpl implements QstitemService {

    @Autowired
    private QstitemDao qstitemDao;

    @Override
    public void initService() {
        addMaster(new Qstitem());
    }

    @Override
	public RecordSet<QstitemVO> query(QstitemCondition condition) {
	    return qstitemDao.query(condition);
	}

}
