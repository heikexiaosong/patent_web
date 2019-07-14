package com.gavel.trend.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.vo.QstitemCondition;
import com.gavel.trend.vo.QstitemVO;


public interface QstitemDao extends BaseDao {

    RecordSet<QstitemVO> query(QstitemCondition condition);

}
