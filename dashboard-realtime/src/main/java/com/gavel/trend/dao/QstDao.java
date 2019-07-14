package com.gavel.trend.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.vo.QstCondition;
import com.gavel.trend.vo.QstVO;


public interface QstDao extends BaseDao {

    RecordSet<QstVO> query(QstCondition condition);

}
