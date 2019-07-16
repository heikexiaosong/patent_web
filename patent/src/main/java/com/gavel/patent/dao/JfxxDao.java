package com.gavel.patent.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.patent.persistent.Jfxx;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;

import java.util.List;


public interface JfxxDao extends BaseDao {

    RecordSet<JfxxVO> query(JfxxCondition condition);

    List<Jfxx> query(int year);
}
