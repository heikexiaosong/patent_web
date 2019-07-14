package com.gavel.report.dao.impl;

import java.util.Date;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.report.dao.ReportinstDao;
import com.gavel.report.db.entity.Reportinst;
import com.gavel.report.vo.ReportinstCondition;
import com.gavel.report.vo.ReportinstVO;


@Repository("reportinstDao")
public class ReportinstDaoImpl extends BaseDaoImpl implements ReportinstDao {

    public RecordSet<ReportinstVO> query(ReportinstCondition condition) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select REPORTINST_ID, REPORTINST_BBBM, REPORTINST_BBRQ, REPORTINST_BBMC, REPORTINST_ORGID, REPORTINST_YEAR, REPORTINST_MONTH, REPORTINST_XH, ");
        sqlMap.append("  REPORTINST_KSSJ, REPORTINST_JSSJ, REPORTINST_CALCTIME, REPORTINST_JSR, REPORTINST_BZ, REPORTINST_SYSVERSION,");
        sqlMap.append("  REPORTINST_WHRID, REPORTINST_WHR, REPORTINST_WHSJ, REPORTINST_CJRID, REPORTINST_CJR, REPORTINST_CJSJ ");
        sqlMap.append("from REPORTINST ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("REPORTINST_ID", condition.getId()));
            sqlMap.setParamValue("REPORTINST_ID", condition.getId());
        }

        if (StringUtils.isNotEmpty(condition.getBbbm())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("REPORTINST_BBBM", condition.getBbbm()));
            sqlMap.setParamValue("REPORTINST_BBBM", condition.getBbbm());
        }
        sqlMap.append(" order by REPORTINST_BBRQ desc, REPORTINST_XH desc ");
        sqlMap.query(ReportinstVO.class);
        return sqlMap.getRecordSet();

    }

	@Override
	public ReportinstVO queryById(String id) {
		SqlMap sqlMap = new SqlMap();
        sqlMap.append("select REPORTINST_ID, REPORTINST_BBBM, REPORTINST_BBRQ, REPORTINST_BBMC, REPORTINST_ORGID, REPORTINST_YEAR, REPORTINST_XH, ");
        sqlMap.append("  REPORTINST_KSSJ, REPORTINST_JSSJ, REPORTINST_CALCTIME, REPORTINST_JSR, REPORTINST_BBSJ, REPORTINST_BZ, REPORTINST_SYSVERSION,");
        sqlMap.append("  REPORTINST_WHRID, REPORTINST_WHR, REPORTINST_WHSJ, REPORTINST_CJRID, REPORTINST_CJR, REPORTINST_CJSJ ");
        sqlMap.append("from REPORTINST ");
        sqlMap.append("where REPORTINST_ID = :REPORTINST_ID  ");
        sqlMap.setParamValue("REPORTINST_ID", id);
        return sqlMap.queryEntity(ReportinstVO.class);
	}
	
	@Override
	public Reportinst queryByBbbmAndBbrq(String bbbm, Date bbrq) {
		SqlMap sqlMap = new SqlMap();
        sqlMap.append("select REPORTINST_ID, REPORTINST_BBBM, REPORTINST_BBRQ, REPORTINST_BBMC, REPORTINST_ORGID, REPORTINST_YEAR, REPORTINST_XH, ");
        sqlMap.append("  REPORTINST_KSSJ, REPORTINST_JSSJ, REPORTINST_CALCTIME, REPORTINST_JSR, REPORTINST_BBSJ, REPORTINST_BZ, REPORTINST_SYSVERSION,");
        sqlMap.append("  REPORTINST_WHRID, REPORTINST_WHR, REPORTINST_WHSJ, REPORTINST_CJRID, REPORTINST_CJR, REPORTINST_CJSJ ");
        sqlMap.append("from REPORTINST ");
        sqlMap.append("where REPORTINST_BBBM = :REPORTINST_BBBM and REPORTINST_BBRQ = :REPORTINST_BBRQ");
        sqlMap.setParamValue("REPORTINST_BBBM", bbbm);
        sqlMap.setParamValue("REPORTINST_BBRQ", bbrq);
        return sqlMap.queryEntity(Reportinst.class);
	}
	
	@Override
	public Reportinst queryByBbbmAndMonth(String bbbm, Integer year, Integer month) {
		SqlMap sqlMap = new SqlMap();
        sqlMap.append("select REPORTINST_ID, REPORTINST_BBBM, REPORTINST_BBRQ, REPORTINST_BBMC, REPORTINST_ORGID, REPORTINST_YEAR, REPORTINST_XH, ");
        sqlMap.append("  REPORTINST_KSSJ, REPORTINST_JSSJ, REPORTINST_CALCTIME, REPORTINST_JSR, REPORTINST_BBSJ, REPORTINST_BZ, REPORTINST_SYSVERSION,");
        sqlMap.append("  REPORTINST_WHRID, REPORTINST_WHR, REPORTINST_WHSJ, REPORTINST_CJRID, REPORTINST_CJR, REPORTINST_CJSJ ");
        sqlMap.append("from REPORTINST ");
        sqlMap.append("where REPORTINST_BBBM = :REPORTINST_BBBM and REPORTINST_YEAR = :REPORTINST_YEAR ");
        sqlMap.append("  and REPORTINST_MONTH = :REPORTINST_MONTH");
        sqlMap.setParamValue("REPORTINST_BBBM", bbbm);
        sqlMap.setParamValue("REPORTINST_YEAR", year);
        sqlMap.setParamValue("REPORTINST_MONTH", month);
        return sqlMap.queryEntity(Reportinst.class);
	}
}
