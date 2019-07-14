package com.gavel.trend.dao.impl;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.trend.dao.QsztDao;
import com.gavel.trend.vo.QsztCondition;
import com.gavel.trend.vo.QsztVO;


@Repository("qsztDao")
public class QsztDaoImpl extends BaseDaoImpl implements QsztDao {
	
	public RecordSet<QsztVO> query(QsztCondition condition){
		/*---------AutoBegin-----------*/
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select QSZT_ID, QSZT_ZTID, QSZT_ZTMC, QSZT_RATE, QSZT_INTERVAL, ");
        sqlMap.append("  QSZT_TIMESPAN, QSZT_TYPE, QSZT_MKID, QSZT_CHARTTYPE, ");
        sqlMap.append("  QSZT_BZ, QSZT_CJRID, QSZT_CJR, QSZT_CJSJ, QSZT_WHRID, ");
        sqlMap.append("  QSZT_WHR, QSZT_WHSJ,QSZT_SYSVERSION");
        sqlMap.append("from QSZT");
        sqlMap.append("where 1=1");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSZT_ID", condition.getId()));
            sqlMap.setParamValue("QSZT_ID", condition.getId());
        }
        if (StringUtils.isNotEmpty(condition.getZtid())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSZT_ZTID", condition.getZtid()));
            sqlMap.setParamValue("QSZT_ZTID", condition.getZtid());
        }
        if (StringUtils.isNotEmpty(condition.getZtmc())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSZT_ZTMC", condition.getZtmc()));
            sqlMap.setParamValue("QSZT_ZTMC", condition.getZtmc());
        }
        if (StringUtils.isNotEmpty(condition.getType())) {
        	sqlMap.append("  and QSZT_TYPE = :QSZT_TYPE");
        	sqlMap.setParamValue("QSZT_TYPE", condition.getType());
        }
        sqlMap.query(QsztVO.class);
        return sqlMap.getRecordSet();
		/*---------AutoEnd-------------*/
	}
}
