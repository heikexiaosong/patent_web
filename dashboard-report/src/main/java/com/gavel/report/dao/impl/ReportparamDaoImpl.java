package com.gavel.report.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.report.dao.ReportparamDao;
import com.gavel.report.vo.ReportparamCondition;
import com.gavel.report.vo.ReportparamVO;


@Repository("reportparamDao")
public class ReportparamDaoImpl extends BaseDaoImpl implements ReportparamDao {
	
	public RecordSet<ReportparamVO> query(ReportparamCondition condition){
		SqlMap sqlMap = new SqlMap();
		sqlMap.setPageNo(condition.getPageNo());
		sqlMap.setRowCount(condition.getPageSize());
		sqlMap.append("select REPORTPARAM_ID, REPORTPARAM_CSBM, REPORTPARAM_CSMC, REPORTPARAM_CSLX, REPORTPARAM_CSFZ, REPORTPARAM_CSXX,");
		sqlMap.append("  REPORTPARAM_TYBZ, REPORTPARAM_TYRQ, REPORTPARAM_BZ, REPORTPARAM_SYSVERSION, REPORTPARAM_WHRID, REPORTPARAM_WHR,");
		sqlMap.append("  REPORTPARAM_WHSJ, REPORTPARAM_CJRID, REPORTPARAM_CJR, REPORTPARAM_CJSJ, REPORTPARAM_CSSM, REPORTPARAM_TYPE,");
		sqlMap.append("  REPORTPARAM_FORMAT, REPORTPARAM_FHZLX");
		sqlMap.append("from REPORTPARAM ");
		sqlMap.append("where 1=1  ");
		if (StringUtils.isNotEmpty(condition.getId())){
			sqlMap.append("  and " + SqlUtil.getWhereSql("REPORTPARAM_ID", condition.getId()));
			sqlMap.setParamValue("REPORTPARAM_ID", condition.getId());
		}
		if (StringUtils.isNotEmpty(condition.getCsbm())){
			sqlMap.append("  and " + SqlUtil.getWhereSql("REPORTPARAM_CSBM", condition.getCsbm()));
			sqlMap.setParamValue("REPORTPARAM_CSBM", condition.getCsbm());
		}
		if (StringUtils.isNotEmpty(condition.getCsmc())){
			sqlMap.append("  and " + SqlUtil.getWhereLikeSql("REPORTPARAM_CSMC"));
			sqlMap.setParamValue("REPORTPARAM_CSMC", "%"+condition.getCsmc()+"%");
		}
		sqlMap.append("order by REPORTPARAM_CSBM");
		sqlMap.query(ReportparamVO.class);
		return sqlMap.getRecordSet();

	}
}
