package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.DailytaskDao;
import com.gavel.patent.vo.DailytaskCondition;
import com.gavel.patent.vo.DailytaskVO;


@Repository("dailytaskDao")
public class DailytaskDaoImpl extends BaseDaoImpl implements DailytaskDao {

    public RecordSet<DailytaskVO> query(DailytaskCondition condition) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select DAILYTASK_ID, DAILYTASK_THEDATE, DAILYTASK_STAT, DAILYTASK_TIME, DAILYTASK_BZ, DAILYTASK_NAME, DAILYTASK_TYPE ");
        sqlMap.append("from DAILYTASK ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("DAILYTASK_ID", condition.getId()));
            sqlMap.setParamValue("DAILYTASK_ID", condition.getId());

        }

        if (condition.getStart() != null) {
            sqlMap.append("  and DAILYTASK_THEDATE >= :THEDATE_START");
            sqlMap.setParamValue("THEDATE_START", DateUtils.beginOfDay(condition.getStart()));
        }

        if (condition.getEnd() != null) {
            sqlMap.append("  and DAILYTASK_THEDATE <= :THEDATE_END");
            sqlMap.setParamValue("THEDATE_END", DateUtils.endOfDay(condition.getEnd()));
        }

        sqlMap.query(DailytaskVO.class);
        return sqlMap.getRecordSet();

    }
}
