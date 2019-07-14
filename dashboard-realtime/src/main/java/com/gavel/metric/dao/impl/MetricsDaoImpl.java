package com.gavel.metric.dao.impl;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.metric.dao.MetricsDao;
import com.gavel.metric.vo.MetricsCondition;
import com.gavel.metric.vo.MetricsVO;


@Repository("metricsDao")
public class MetricsDaoImpl extends BaseDaoImpl implements MetricsDao {
	
	public RecordSet<MetricsVO> query(MetricsCondition condition){
		/*---------AutoBegin-----------*/
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select METRICS_ID,METRICS_METRIC,METRICS_UNIT,METRICS_AERAID, METRICS_NAME, METRICS_BZ, METRICS_CJRID,");
        sqlMap.append("  METRICS_CJR, METRICS_CJSJ, METRICS_WHRID, METRICS_WHR, METRICS_WHSJ,");
        sqlMap.append("  METRICS_SYSVERSION,METRICS_AREA_NAME ");
        sqlMap.append("from METRICS");
        sqlMap.append("    left join METRICS_AREA on METRICS_AREA_CODE =METRICS_AERAID  ");
        sqlMap.append("where 1=1");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("METRICS_ID", condition.getId()));
            sqlMap.setParamValue("METRICS_ID", condition.getId());
        }
        if (StringUtils.isNotEmpty(condition.getMetrics())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("METRICS_METRICS", condition.getMetrics()));
            sqlMap.setParamValue("METRICS_METRICS", condition.getMetrics());
        }
        if (StringUtils.isNotEmpty(condition.getName())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("METRICS_NAME", condition.getName()));
            sqlMap.setParamValue("METRICS_NAME", condition.getName());
        }
        if (StringUtils.isNotEmpty(condition.getAeraid())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("METRICS_AERAID", condition.getAeraid()));
            sqlMap.setParamValue("METRICS_AERAID", condition.getAeraid());
        }
        sqlMap.query(MetricsVO.class);
        return sqlMap.getRecordSet();
		/*---------AutoEnd-------------*/
	}
}
