package com.gavel.report.dao.impl;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import com.gavel.report.dao.ReporttempDao;
import com.gavel.report.vo.ReporttempCondition;
import com.gavel.report.vo.ReporttempVO;


@Repository("reporttempDao")
public class ReporttempDaoImpl extends BaseDaoImpl implements ReporttempDao {
	
	public RecordSet<ReporttempVO> query(ReporttempCondition condition){
		SqlMap sqlMap = new SqlMap();
		sqlMap.setPageNo(condition.getPageNo());
		sqlMap.setRowCount(condition.getPageSize());
		sqlMap.append("select REPORTTEMP_ID, REPORTTEMP_BBBM, REPORTTEMP_ORGID, REPORTTEMP_BBMC, REPORTTEMP_SCGZ, ");
		sqlMap.append("  REPORTTEMP_BBLX, REPORTTEMP_BBZL, REPORTTEMP_BBFL, REPORTTEMP_KSD, REPORTTEMP_TYBZ,");
		sqlMap.append("  REPORTTEMP_TYRQ, REPORTTEMP_BZ, REPORTTEMP_SYSVERSION, REPORTTEMP_WHRID, REPORTTEMP_WHR,");
		sqlMap.append("  REPORTTEMP_WHSJ, REPORTTEMP_CJRID, REPORTTEMP_CJR, REPORTTEMP_CJSJ, REPORTTEMP_MKID");
		sqlMap.append("from REPORTTEMP ");
		sqlMap.append("where 1=1  ");
		if (StringUtils.isNotEmpty(condition.getId())){
			sqlMap.append("  and " + SqlUtil.getWhereSql("REPORTTEMP_ID", condition.getId()));
			sqlMap.setParamValue("REPORTTEMP_ID", condition.getId());
		}
		if (StringUtils.isNotEmpty(condition.getBbbm())) {
			sqlMap.append("  and " + SqlUtil.getWhereSql("REPORTTEMP_BBBM", condition.getBbbm()));
			sqlMap.setParamValue("REPORTTEMP_BBBM", condition.getBbbm());
		}
		if (StringUtils.isNotEmpty(condition.getBbmc())) {
			sqlMap.append("  and " + SqlUtil.getWhereLikeSql("REPORTTEMP_BBMC"));
			sqlMap.setParamValue("REPORTTEMP_BBMC", "%"+condition.getBbmc()+"%");
		}
		sqlMap.append("order by REPORTTEMP_BBBM");
		sqlMap.query(ReporttempVO.class);
		return sqlMap.getRecordSet();
	}
	
	@Override
	public ReporttempVO queryById(String id){
		SqlMap sqlMap = new SqlMap();
		sqlMap.append("select REPORTTEMP_ID, REPORTTEMP_BBBM, REPORTTEMP_ORGID, REPORTTEMP_BBMC, REPORTTEMP_SCGZ, ");
		sqlMap.append("  REPORTTEMP_BBLX, REPORTTEMP_BBZL, REPORTTEMP_BBFL, REPORTTEMP_BBNR, REPORTTEMP_KSD, REPORTTEMP_TYBZ,");
		sqlMap.append("  REPORTTEMP_TYRQ, REPORTTEMP_BZ, REPORTTEMP_SYSVERSION, REPORTTEMP_WHRID, REPORTTEMP_WHR, REPORTTEMP_WHSJ,");
		sqlMap.append("  REPORTTEMP_CJRID, REPORTTEMP_CJR, REPORTTEMP_CJSJ, REPORTTEMP_MKID");
		sqlMap.append("from REPORTTEMP ");
		sqlMap.append("where REPORTTEMP_ID = :REPORTTEMP_ID  ");
		sqlMap.setParamValue("REPORTTEMP_ID", id);
		return sqlMap.queryEntity(ReporttempVO.class);
	}
}
