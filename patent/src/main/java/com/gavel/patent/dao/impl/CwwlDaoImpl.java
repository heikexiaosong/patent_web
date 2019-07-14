package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.CwwlDao;
import com.gavel.patent.vo.CwwlCondition;
import com.gavel.patent.vo.CwwlVO;


@Repository("cwwlDao")
public class CwwlDaoImpl extends BaseDaoImpl implements CwwlDao {
	
	public RecordSet<CwwlVO> query(CwwlCondition condition){
		 SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select CWWL_ID, CWWL_YWRQ, CWWL_KH, CWWL_YW, CWWL_JE, CWWL_SKZH, CWWL_SJSKJE ");
        sqlMap.append(", CWWL_FP, CWWL_QBCB, CWWL_GF, CWWL_YJ, CWWL_TC, CWWL_ZLMC, CWWL_WHRID, CWWL_WHR, CWWL_WHSJ, CWWL_SYSVERSION, CWWL_YWY ");
        sqlMap.append("from CWWL ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("CWWL_ID", condition.getId()));
            sqlMap.setParamValue("CWWL_ID", condition.getId());
            
        }
        sqlMap.query(CwwlVO.class);
        return sqlMap.getRecordSet();

	}
}
