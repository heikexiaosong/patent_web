package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.DateUtils;
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
        sqlMap.append("select CWWL_ID, CWWL_YWRQ, CWWL_KH, CWWL_YW, CWWL_JE, CWWL_SKZH, CWWL_SJSKJE, CWWL_FP, CWWL_QBCB, CWWL_GF ");
        sqlMap.append(", CWWL_YJ, CWWL_TC, CWWL_ZLMC, CWWL_WHRID, CWWL_WHR, CWWL_WHSJ, CWWL_SYSVERSION, CWWL_YWY, CWWL_ZT ");
        sqlMap.append("from CWWL ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("CWWL_ID", condition.getId()));
            sqlMap.setParamValue("CWWL_ID", condition.getId());
        }
        if (StringUtils.isNotEmpty(condition.getKh())){
            sqlMap.append("  and CWWL_KH like :CWWL_KH ");
            sqlMap.setParamValue("CWWL_KH", "%" + condition.getKh() + "%");
        }
        if (StringUtils.isNotEmpty(condition.getYw())){
            sqlMap.append("  and CWWL_YW like :CWWL_YW ");
            sqlMap.setParamValue("CWWL_YW", "%" + condition.getYw() + "%");
        }
        if ( condition.getStart()!=null ){
            sqlMap.append("  and CWWL_YWRQ >= :CWWL_YWRQ_START");
            sqlMap.setParamValue("CWWL_YWRQ_START", DateUtils.beginOfDay(condition.getStart()));
        }

        if ( condition.getEnd()!=null ){
            sqlMap.append("  and CWWL_YWRQ <= :CWWL_YWRQ_END");
            sqlMap.setParamValue("CWWL_YWRQ_END", DateUtils.endOfDay(condition.getEnd()));
        }


        sqlMap.query(CwwlVO.class);
        return sqlMap.getRecordSet();

	}
}
