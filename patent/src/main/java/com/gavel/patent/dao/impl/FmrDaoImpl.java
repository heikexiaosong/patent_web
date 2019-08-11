package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.patent.dao.FmrDao;
import com.gavel.patent.vo.FmrCondition;
import com.gavel.patent.vo.FmrVO;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;


@Repository("fmrDao")
public class FmrDaoImpl extends BaseDaoImpl implements FmrDao {

    public RecordSet<FmrVO> query(FmrCondition condition) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());

        sqlMap.append("select FMR_ID, FMR_XH, FMR_NAME, FMR_ENAME, FMR_IDCARD, FMR_BZ, FMR_GJ ");
        sqlMap.append("from FMR ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("FMR_ID", condition.getId()));
            sqlMap.setParamValue("FMR_ID", condition.getId());

        }


        sqlMap.query(FmrVO.class);
        return sqlMap.getRecordSet();

    }
}
