package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.DailytaskDao;
import com.gavel.patent.persistent.Dailytask;
import com.gavel.patent.service.DailytaskService;
import com.gavel.patent.vo.DailytaskCondition;
import com.gavel.patent.vo.DailytaskVO;


@Service("dailytaskService")
@Transactional
public class DailytaskServiceImpl extends BaseEditServiceImpl implements DailytaskService {

    @Autowired
    private DailytaskDao dailytaskDao;

    @Override
    public void initService() {
        addMaster(new Dailytask());
    }

    @Override
	public RecordSet<DailytaskVO> query(DailytaskCondition condition) {
	    return dailytaskDao.query(condition);
	}

}
