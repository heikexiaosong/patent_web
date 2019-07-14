package com.gavel.pretreat.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.pretreat.dao.PretreatDao;
import com.gavel.pretreat.vo.PretreatCondition;
import com.gavel.pretreat.vo.PretreatVO;


@Repository("pretreatDao")
public class PretreatDaoImpl extends BaseDaoImpl implements PretreatDao {
	
	public RecordSet<PretreatVO> query(PretreatCondition condition){
		SqlMap sqlMap = new SqlMap();
	sqlMap.setPageNo(condition.getPageNo());
	sqlMap.setRowCount(condition.getPageSize());
	sqlMap.append("select PRETREAT_ID, PRETREAT_CODE, PRETREAT_NAME, PRETREAT_METRICS, PRETREAT_WHRID, PRETREAT_WHR, " +
			"PRETREAT_WHSJ, PRETREAT_CJRID, PRETREAT_CJR, PRETREAT_CJSJ, PRETREAT_SYSVERSION, PRETREAT_MKID, PRETREAT_ALGORITHM, PRETREAT_WINDOW");
	sqlMap.append("from PRETREAT ");
	sqlMap.append("where 1=1  ");
	if (StringUtils.isNotEmpty(condition.getId())){
	sqlMap.append("  and " + SqlUtil.getWhereSql("PRETREAT_ID", condition.getId()));
	sqlMap.setParamValue("PRETREAT_ID", condition.getId());
	}
	sqlMap.query(PretreatVO.class);
	return sqlMap.getRecordSet();

	}
}
