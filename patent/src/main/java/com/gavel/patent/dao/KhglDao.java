package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.KhglCondition;
import com.gavel.patent.vo.KhglVO;


public interface KhglDao extends BaseDao {

    RecordSet<KhglVO> query(KhglCondition condition);

}
