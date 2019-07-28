package com.gavel.patent.service.impl;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.utils.UserInfoUtil;
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
    public void beforeDelete(BaseEntity entity) {
        if ( entity!=null && entity instanceof Cwwl  ) {
            Cwwl cwwl = (Cwwl) entity;

            if (cwwl.getId() != null) {
                Cwwl exist = cwwlDao.queryById(Cwwl.class, cwwl.getId());
                if (exist != null && "claim".equalsIgnoreCase(exist.getStat())) {
                    throw new RuntimeException("不能删除已认领记录");
                }
            }
        }
    }

    @Override
    public void beforePost(BaseEntity entity) {
        if ( entity!=null && entity instanceof Cwwl  ) {
            Cwwl cwwl = (Cwwl)entity;

            if ( cwwl.getId()!=null ){
                Cwwl exist = cwwlDao.queryById(Cwwl.class, cwwl.getId());
                if ( exist!=null && "claim".equalsIgnoreCase(exist.getStat()) ){
                    throw new RuntimeException("不能修改或认领已认领的记录");
                }
            }

            if ( cwwl.getStat()==null || cwwl.getStat().trim().length()==0  ){
                cwwl.setStat("pending");
            }

            if ( "claim".equalsIgnoreCase(cwwl.getStat())
                    && ( cwwl.getQbcb()==null || cwwl.getGf()==null ) ){
                throw new RuntimeException("认领时必须输入[全部成本]和[官费]项");
            }

            int yj = cwwl.getSjskje()==null ? 0 : cwwl.getSjskje();
            if ( cwwl.getFp()!=null ){
                yj -= cwwl.getFp();
            }

            if ( cwwl.getGf()!=null ){
                yj -= cwwl.getGf();
            }

            if ( cwwl.getQbcb()!=null ){
                yj -= cwwl.getQbcb();
            }

            cwwl.setYj(yj);
            cwwl.setTc( yj/5 );
            cwwl.setYwy(UserInfoUtil.getUserId());
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
