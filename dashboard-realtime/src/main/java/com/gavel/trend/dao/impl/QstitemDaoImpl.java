package com.gavel.trend.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.trend.dao.QstitemDao;
import com.gavel.trend.vo.QstitemCondition;
import com.gavel.trend.vo.QstitemVO;


@Repository("qstitemDao")
public class QstitemDaoImpl extends BaseDaoImpl implements QstitemDao {
	
	public RecordSet<QstitemVO> query(QstitemCondition condition){
		SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select QSTITEM_ID, QSTITEM_MID, QSTITEM_XH, QSTITEM_METRICS, QSTITEM_NAME, QSTITEM_UNIT, ");
        sqlMap.append("  QSTITEM_TYPE, QSTITEM_GROUP, QSTITEM_GROUPTYPE ");
        sqlMap.append("from QSTITEM ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSTITEM_ID", condition.getId()));
            sqlMap.setParamValue("QSTITEM_ID", condition.getId());   
        }
        if (StringUtils.isNotEmpty(condition.getMid())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSTITEM_MID", condition.getMid()));
            sqlMap.setParamValue("QSTITEM_MID", condition.getMid());
        }
        if (StringUtils.isNotEmpty(condition.getGrouptype())) {
        	sqlMap.append("  and " + SqlUtil.getWhereSql("QSTITEM_GROUPTYPE", condition.getGrouptype()));
            sqlMap.setParamValue("QSTITEM_GROUPTYPE", condition.getGrouptype());
        }
        sqlMap.query(QstitemVO.class);
        return sqlMap.getRecordSet();
	}
	
}
