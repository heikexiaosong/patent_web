package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.ProcessDao;
import com.gavel.patent.persistent.Process;
import com.gavel.patent.service.ProcessService;
import com.gavel.patent.vo.ProcessCondition;
import com.gavel.patent.vo.ProcessVO;


@Service("processService")
@Transactional
public class ProcessServiceImpl extends BaseEditServiceImpl implements ProcessService {

    @Autowired
    private ProcessDao processDao;

    @Override
    public void initService() {
        addMaster(new Process());
    }

    @Override
	public RecordSet<ProcessVO> query(ProcessCondition condition) {
	    return processDao.query(condition);
	}

}
