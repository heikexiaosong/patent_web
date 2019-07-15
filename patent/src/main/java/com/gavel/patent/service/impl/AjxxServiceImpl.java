package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.AjxxDao;
import com.gavel.patent.persistent.Ajxx;
import com.gavel.patent.service.AjxxService;
import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;


@Service("ajxxService")
@Transactional
public class AjxxServiceImpl extends BaseEditServiceImpl implements AjxxService {

    @Autowired
    private AjxxDao ajxxDao;

    @Override
    public void initService() {
        addMaster(new Ajxx());
    }

    @Override
	public RecordSet<AjxxVO> query(AjxxCondition condition) {
	    return ajxxDao.query(condition);
	}

}
