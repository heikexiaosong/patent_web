package com.gavel.pretreat.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.vo.PretreatCondition;
import com.gavel.pretreat.vo.PretreatVO;


public interface PretreatDao extends BaseDao {

    RecordSet<PretreatVO> query(PretreatCondition condition);

}
