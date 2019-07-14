package com.gavel.trend.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.trend.dao.QstDao;
import com.gavel.trend.vo.QstCondition;
import com.gavel.trend.vo.QstVO;


@Repository("qstDao")
public class QstDaoImpl extends BaseDaoImpl implements QstDao {
	
	public RecordSet<QstVO> query(QstCondition condition){
		SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select QST_ID, QST_CODE, QST_TITLE, QST_TYPE, QST_TIMESPAN, QST_INTERVAL, QST_WHRID ");
        sqlMap.append(", QST_WHR, QST_WHSJ, QST_SYSVERSION, QST_CJRID, QST_CJR, QST_CJSJ ");
        sqlMap.append("from QST ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QST_ID", condition.getId()));
            sqlMap.setParamValue("QST_ID", condition.getId());
            
        }
        sqlMap.query(QstVO.class);
        return sqlMap.getRecordSet();

	}
}
