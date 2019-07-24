package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.ZcqkDao;
import com.gavel.patent.persistent.Zcqk;
import com.gavel.patent.service.ZcqkService;
import com.gavel.patent.vo.ZcqkCondition;
import com.gavel.patent.vo.ZcqkVO;


@Service("zcqkService")
@Transactional
public class ZcqkServiceImpl extends BaseEditServiceImpl implements ZcqkService {

    @Autowired
    private ZcqkDao zcqkDao;

    @Override
    public void initService() {
        addMaster(new Zcqk());
    }

    @Override
	public RecordSet<ZcqkVO> query(ZcqkCondition condition) {
	    return zcqkDao.query(condition);
	}

}
