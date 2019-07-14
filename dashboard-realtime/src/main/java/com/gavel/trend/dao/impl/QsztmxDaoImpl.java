package com.gavel.trend.dao.impl;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.trend.dao.QsztmxDao;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;


@Repository("qsztmxDao")
public class QsztmxDaoImpl extends BaseDaoImpl implements QsztmxDao {
	
	public RecordSet<QsztmxVO> query(QsztmxCondition condition){
		/*---------AutoBegin-----------*/
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select QSZTMX_ID, QSZTMX_MID, QSZTMX_XH, QSZTMX_METRIC, QSZTMX_NAME, ");
        sqlMap.append("  QSZTMX_COLOR, QSZTMX_GROUP, QSZTMX_TAG, ");
        sqlMap.append("  QSZTMX_WHRID, QSZTMX_WHR, QSZTMX_WHSJ, QSZTMX_SYSVERSION, QSZT_ZTMC, ");
        sqlMap.append("  METRICS_UNIT");
        sqlMap.append("from QSZTMX");
        sqlMap.append("   left join METRICS on METRICS_METRIC = QSZTMX_METRIC");
        sqlMap.append("   left join QSZT on QSZT_ID = QSZTMX_MID");
        sqlMap.append("where QSZTMX_MID = :QSZTMX_MID");
        sqlMap.setParamValue("QSZTMX_MID", condition.getMid());
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSZTMX_ID", condition.getId()));
            sqlMap.setParamValue("QSZTMX_ID", condition.getId());
        }
        sqlMap.append("order by QSZTMX_XH");
        sqlMap.query(QsztmxVO.class);
        return sqlMap.getRecordSet();
		/*---------AutoEnd-------------*/
	}
	
	public RecordSet<QsztmxVO> queryHistory(QsztmxCondition condition){
		/*---------AutoBegin-----------*/
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select QSZTMX_ID, QSZTMX_MID, QSZTMX_XH, QSZTMX_METRIC, QSZTMX_NAME, ");
        sqlMap.append("  QSZTMX_COLOR, QSZTMX_GROUP, QSZTMX_TAG, ");
        sqlMap.append("  QSZTMX_WHRID, QSZTMX_WHR, QSZTMX_WHSJ, QSZTMX_SYSVERSION, QSZT_ZTMC, ");
        sqlMap.append("  METRICS_UNIT");
        sqlMap.append("from QSZTMX");
        sqlMap.append("   left join METRICS on METRICS_METRIC = QSZTMX_METRIC");
        sqlMap.append("   left join QSZT on QSZT_ID = QSZTMX_MID");
        sqlMap.append("where QSZT_TYPE = 'history'");
        sqlMap.setParamValue("QSZTMX_MID", condition.getMid());
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("QSZTMX_ID", condition.getId()));
            sqlMap.setParamValue("QSZTMX_ID", condition.getId());
        }
        sqlMap.append("order by QSZTMX_MID, QSZTMX_XH");
        sqlMap.query(QsztmxVO.class);
        return sqlMap.getRecordSet();
		/*---------AutoEnd-------------*/
	}
}
