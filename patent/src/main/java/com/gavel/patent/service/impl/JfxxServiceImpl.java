package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.JfxxDao;
import com.gavel.patent.persistent.Jfxx;
import com.gavel.patent.service.JfxxService;
import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;


@Service("jfxxService")
@Transactional
public class JfxxServiceImpl extends BaseEditServiceImpl implements JfxxService {

    @Autowired
    private JfxxDao jfxxDao;

    @Override
    public void initService() {
        addMaster(new Jfxx());
    }

    @Override
	public RecordSet<JfxxVO> query(JfxxCondition condition) {
	    return jfxxDao.query(condition);
	}

}
