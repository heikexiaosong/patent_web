package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.CwwlCondition;
import com.gavel.patent.vo.CwwlVO;


public interface CwwlDao extends BaseDao {

    RecordSet<CwwlVO> query(CwwlCondition condition);

    RecordSet<CwwlVO> queryOwner(CwwlCondition condition);
}
