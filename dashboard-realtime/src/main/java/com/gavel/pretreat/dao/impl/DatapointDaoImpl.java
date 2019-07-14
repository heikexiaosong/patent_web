package com.gavel.pretreat.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.CollectionUtils;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.pretreat.dao.DatapointDao;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.DatapointVO;


@Repository("datapointDao")
public class DatapointDaoImpl extends BaseDaoImpl implements DatapointDao {

    public RecordSet<DatapointVO> query(DatapointCondition condition) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select DATAPOINT_ID, DATAPOINT_METRIC, DATAPOINT_NAME, DATAPOINT_THDATE, DATAPOINT_TIME, DATAPOINT_VALUE, ");
        sqlMap.append("  ITEM_NAME");
        sqlMap.append("from DATAPOINT ");
        sqlMap.append("  left join ITEM on ITEM_VALUE = DATAPOINT_METRIC");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("DATAPOINT_ID", condition.getId()));
            sqlMap.setParamValue("DATAPOINT_ID", condition.getId());
        }
        if ( condition.getStart() !=null ) {
            sqlMap.append("  and DATAPOINT_THDATE >= :STARTDATE");
            sqlMap.setParamValue("STARTDATE", DateUtils.dateToStr(condition.getStart(), "yyyyMMdd"));
        }

        if ( condition.getEnd() !=null ) {
            sqlMap.append("  and DATAPOINT_THDATE <= :ENDDATE");
            sqlMap.setParamValue("ENDDATE", DateUtils.dateToStr(condition.getEnd(), "yyyyMMdd"));
        }

        if (StringUtils.isNotEmpty(condition.getMetric())) {
            sqlMap.append("  and  DATAPOINT_METRIC like :DATAPOINT_METRIC ");
            sqlMap.setParamValue("DATAPOINT_METRIC", "%" + condition.getMetric() + "%");
        }

        if (StringUtils.isNotEmpty(condition.getThdate())) {
        	sqlMap.append("  and DATAPOINT_THDATE = :DATAPOINT_THDATE");
        	sqlMap.setParamValue("DATAPOINT_THDATE", condition.getThdate());
        }
        
        if (StringUtils.isNotEmpty(condition.getTime())) {
        	sqlMap.append("  and DATAPOINT_TIME = :DATAPOINT_TIME");
        	sqlMap.setParamValue("DATAPOINT_TIME", condition.getTime());
        }
        sqlMap.append("order by DATAPOINT_METRIC, DATAPOINT_THDATE, DATAPOINT_TIME ");
        sqlMap.query(DatapointVO.class);
        return sqlMap.getRecordSet();

    }

    @Override
    public List<DatapointVO> query(DatapointCondition condition, List<String> metricList) {

        if ( metricList==null || metricList.size()==0 ){
            return CollectionUtils.emptyList();
        }

        SqlMap sqlMap = new SqlMap();
        sqlMap.append("select DATAPOINT_ID, DATAPOINT_METRIC, DATAPOINT_NAME, DATAPOINT_THDATE, DATAPOINT_TIME, DATAPOINT_VALUE, ");
        sqlMap.append("  ITEM_NAME");
        sqlMap.append("from DATAPOINT ");
        sqlMap.append("  left join ITEM on ITEM_VALUE = DATAPOINT_METRIC");
        sqlMap.append("where ");
        if ( metricList.size()==1 ) {
            sqlMap.append(" DATAPOINT_METRIC = :DATAPOINT_METRIC ");
            sqlMap.setParamValue("DATAPOINT_METRIC", metricList.get(0));
        } else {
            sqlMap.append(" DATAPOINT_METRIC IN (");

            for (int i = 0; i < metricList.size(); i++) {
                if ( i>0 ){
                    sqlMap.append(", ");
                }

                String name = "DATAPOINT_METRIC_" + i;
                sqlMap.append(":" + name);
                sqlMap.setParamValue(name, metricList.get(i));

            }
            sqlMap.append(" ) ");
        }
        if (StringUtils.isNotEmpty(condition.getBeginDate()) && StringUtils.isNotEmpty(condition.getEndDate())) {
        	if (condition.getBeginDate().compareToIgnoreCase(condition.getEndDate()) < 0 ){
        		sqlMap.append("  and ((DATAPOINT_THDATE > :BEGINDATE and DATAPOINT_THDATE < :ENDDATE)");
            	sqlMap.append("       or (DATAPOINT_THDATE = :BEGINDATE and DATAPOINT_TIME >= :BEGINTIME)");
            	sqlMap.append("       or (DATAPOINT_THDATE = :ENDDATE and DATAPOINT_TIME <= :ENDTIME)) ");
            	sqlMap.setParamValue("BEGINDATE", condition.getBeginDate());
            	sqlMap.setParamValue("ENDDATE", condition.getEndDate());
            	sqlMap.setParamValue("BEGINTIME", condition.getBeginTime());
            	sqlMap.setParamValue("ENDTIME", condition.getEndTime());
        	}else if (condition.getBeginDate().compareToIgnoreCase(condition.getEndDate()) == 0) {
        		sqlMap.append("  and DATAPOINT_THDATE = :BEGINDATE and DATAPOINT_TIME >= :BEGINTIME");
            	sqlMap.append("  and DATAPOINT_TIME <= :ENDTIME");
            	sqlMap.setParamValue("BEGINDATE", condition.getBeginDate());
            	sqlMap.setParamValue("BEGINTIME", condition.getBeginTime());
            	sqlMap.setParamValue("ENDTIME", condition.getEndTime());
        	}
        }
        sqlMap.append("order by DATAPOINT_METRIC, DATAPOINT_THDATE, DATAPOINT_TIME");
        return sqlMap.query(DatapointVO.class);   
        
    }

	@Override
	public List<DatapointVO> query(DatapointCondition condition, String[] metricArray) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.append("select DATAPOINT_ID, DATAPOINT_METRIC, DATAPOINT_NAME, DATAPOINT_THDATE, DATAPOINT_TIME, DATAPOINT_VALUE, ");
        sqlMap.append("  ITEM_NAME");
        sqlMap.append("from DATAPOINT ");
        sqlMap.append("  left join ITEM on ITEM_VALUE = DATAPOINT_METRIC");
        sqlMap.append("where 1=1 ");
        sqlMap.append("  and " + SqlUtil.getWhereEqualSql("DATAPOINT_METRIC", metricArray));
        if (StringUtils.isNotEmpty(condition.getThdate())) {
        	sqlMap.append(" and DATAPOINT_THDATE = :DATAPOINT_THDATE");
        	sqlMap.setParamValue("DATAPOINT_THDATE", condition.getThdate());
        }
        
        if (StringUtils.isNotEmpty(condition.getTime())) {
        	sqlMap.append(" and DATAPOINT_TIME = :DATAPOINT_TIME");
        	sqlMap.setParamValue("DATAPOINT_TIME", condition.getTime());
        }
        sqlMap.append("order by DATAPOINT_METRIC, DATAPOINT_THDATE, DATAPOINT_TIME ");
        return sqlMap.query(DatapointVO.class);
	}
	
	@Override
	public RecordSet<DatapointVO> getPageInfo(DatapointCondition condition, String[] metricArray) {
		SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select distinct DATAPOINT_THDATE, DATAPOINT_TIME ");
        sqlMap.append("from DATAPOINT ");
        sqlMap.append("where 1=1  ");
        sqlMap.append("  and " + SqlUtil.getWhereEqualSql("DATAPOINT_METRIC", metricArray));
        if (StringUtils.isNotEmpty(condition.getId())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("DATAPOINT_ID", condition.getId()));
            sqlMap.setParamValue("DATAPOINT_ID", condition.getId());
        }
        if ( condition.getStart() !=null ) {
            sqlMap.append("  and DATAPOINT_THDATE >= :STARTDATE");
            sqlMap.setParamValue("STARTDATE", DateUtils.dateToStr(condition.getStart(), "yyyyMMdd"));
        }

        if ( condition.getEnd() !=null ) {
            sqlMap.append("  and DATAPOINT_THDATE <= :ENDDATE");
            sqlMap.setParamValue("ENDDATE", DateUtils.dateToStr(condition.getEnd(), "yyyyMMdd"));
        }

        if (StringUtils.isNotEmpty(condition.getMetric())) {
            sqlMap.append("  and  DATAPOINT_METRIC like :DATAPOINT_METRIC ");
            sqlMap.setParamValue("DATAPOINT_METRIC", "%" + condition.getMetric() + "%");
        }

        if (StringUtils.isNotEmpty(condition.getThdate())) {
        	sqlMap.append("  and DATAPOINT_THDATE = :DATAPOINT_THDATE");
        	sqlMap.setParamValue("DATAPOINT_THDATE", condition.getThdate());
        }
        
        if (StringUtils.isNotEmpty(condition.getTime())) {
        	sqlMap.append("  and DATAPOINT_TIME = :DATAPOINT_TIME");
        	sqlMap.setParamValue("DATAPOINT_TIME", condition.getTime());
        }
        sqlMap.append("order by DATAPOINT_THDATE desc , DATAPOINT_TIME desc ");
        sqlMap.query(DatapointVO.class);
        return sqlMap.getRecordSet();
	}
}
