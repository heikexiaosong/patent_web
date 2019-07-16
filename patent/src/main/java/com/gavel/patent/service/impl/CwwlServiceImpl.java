package com.gavel.patent.service.impl;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.CwwlDao;
import com.gavel.patent.persistent.Cwwl;
import com.gavel.patent.service.CwwlService;
import com.gavel.patent.vo.CwwlCondition;
import com.gavel.patent.vo.CwwlVO;


@Service("cwwlService")
@Transactional
public class CwwlServiceImpl extends BaseEditServiceImpl implements CwwlService {

    @Autowired
    private CwwlDao cwwlDao;

    @Override
    public void beforePost(BaseEntity entity) {
        if ( entity!=null && entity instanceof Cwwl  ) {
            Cwwl cwwl = (Cwwl)entity;
            if ( cwwl.getStat()==null || cwwl.getStat().trim().length()==0  ){
                cwwl.setStat("pending");
            }
        }
    }

    @Override
    public void initService() {
        addMaster(new Cwwl());
    }

    @Override
	public RecordSet<CwwlVO> query(CwwlCondition condition) {
	    return cwwlDao.query(condition);
	}

    @Override
    public RecordSet<CwwlVO> queryOwner(CwwlCondition condition) {
        return cwwlDao.queryOwner(condition);
    }

}
