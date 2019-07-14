package com.gavel.configure.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.configure.vo.ConfigureCondition;
import com.gavel.configure.vo.ConfigureVO;
import com.gavel.persistence.sql.RecordSet;


public interface ConfigureDao extends BaseDao {

    RecordSet<ConfigureVO> query(ConfigureCondition condition);

}
