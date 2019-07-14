package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.KhglDao;
import com.gavel.patent.persistent.Khgl;
import com.gavel.patent.service.KhglService;
import com.gavel.patent.vo.KhglCondition;
import com.gavel.patent.vo.KhglVO;


@Service("khglService")
@Transactional
public class KhglServiceImpl extends BaseEditServiceImpl implements KhglService {

    @Autowired
    private KhglDao khglDao;

    @Override
    public void initService() {
        addMaster(new Khgl());
    }

    @Override
	public RecordSet<KhglVO> query(KhglCondition condition) {
	    return khglDao.query(condition);
	}

}
