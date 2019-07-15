package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.AjxxDao;
import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;


@Repository("ajxxDao")
public class AjxxDaoImpl extends BaseDaoImpl implements AjxxDao {
	
	public RecordSet<AjxxVO> query(AjxxCondition condition){
		 SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select AJXX_ID, AJXX_CODE, AJXX_TYPE, AJXX_BM, AJXX_KH, AJXX_SQR, AJXX_SQH ");
        sqlMap.append(", AJXX_SQMC, AJXX_JXR, AJXX_SQRQ, AJXX_SQF, AJXX_ZT, AJXX_NFJK, AJXX_ZS, AJXX_LB, AJXX_DJR, AJXX_WHRID, AJXX_WHR, AJXX_WHSJ, AJXX_SYSVERSION ");
        sqlMap.append("from AJXX ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("AJXX_ID", condition.getId()));
            sqlMap.setParamValue("AJXX_ID", condition.getId());
            
        }
        sqlMap.query(AjxxVO.class);
        return sqlMap.getRecordSet();

	}
}