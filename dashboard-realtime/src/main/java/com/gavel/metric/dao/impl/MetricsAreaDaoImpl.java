package com.gavel.metric.dao.impl;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.metric.dao.MetricsAreaDao;
import com.gavel.metric.vo.MetricsAreaCondition;
import com.gavel.metric.vo.MetricsAreaVO;


@Repository("metricsAreaDao")
public class MetricsAreaDaoImpl extends BaseDaoImpl implements MetricsAreaDao {
	
	public RecordSet<MetricsAreaVO> query(MetricsAreaCondition condition){
		/*---------AutoBegin-----------*/
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select METRICS_AREA_ID, METRICS_AREA_CODE, METRICS_AREA_NAME, METRICS_AREA_HOST, METRICS_AREA_BZ, METRICS_AREA_CJRID,");
        sqlMap.append("  METRICS_AREA_CJR, METRICS_AREA_CJSJ, METRICS_AREA_WHRID, METRICS_AREA_WHR, METRICS_AREA_WHSJ,");
        sqlMap.append("  METRICS_AREA_SYSVERSION ");
        sqlMap.append("from METRICS_AREA");
        sqlMap.append("where 1=1");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("METRICS_AREA_ID", condition.getId()));
            sqlMap.setParamValue("METRICS_AREA_ID", condition.getId());
        }
        sqlMap.query(MetricsAreaVO.class);
        return sqlMap.getRecordSet();
		/*---------AutoEnd-------------*/
	}
}
