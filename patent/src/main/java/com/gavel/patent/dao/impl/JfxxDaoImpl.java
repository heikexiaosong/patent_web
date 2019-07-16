package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.patent.persistent.Jfxx;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.JfxxDao;
import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;

import java.util.List;


@Repository("jfxxDao")
public class JfxxDaoImpl extends BaseDaoImpl implements JfxxDao {
	
	public RecordSet<JfxxVO> query(JfxxCondition condition){
	    SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select JFXX_ID, JFXX_CODE, JFXX_SQMC, JFXX_SQH, JFXX_FYMC, JFXX_JFJE, JFXX_JFQX, JFXX_ZT, JFXX_JFRQ ");
        sqlMap.append("       , JFXX_JFR, JFXX_SJ, JFXX_BZ, JFXX_WHRID, JFXX_WHR, JFXX_WHSJ, JFXX_SYSVERSION, JFXX_YEAR");
        sqlMap.append("from JFXX ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("JFXX_ID", condition.getId()));
            sqlMap.setParamValue("JFXX_ID", condition.getId());
            
        }

        if (StringUtils.isNotEmpty(condition.getZt())){
            sqlMap.append("  and JFXX_ZT = :JFXX_ZT ");
            sqlMap.setParamValue("JFXX_ZT", condition.getZt());
        }

        if (StringUtils.isNotEmpty(condition.getCode())){
            sqlMap.append("  and JFXX_CODE like :JFXX_CODE ");
            sqlMap.setParamValue("JFXX_CODE", "%" + condition.getCode() + "%");
        }
        if (StringUtils.isNotEmpty(condition.getSqmc())){
            sqlMap.append("  and JFXX_SQMC like :JFXX_SQMC ");
            sqlMap.setParamValue("JFXX_SQMC", "%" + condition.getSqmc() + "%");
        }
        if ( condition.getStart()!=null ){
            sqlMap.append("  and JFXX_JFRQ >= :JFXX_JFRQ_START");
            sqlMap.setParamValue("JFXX_JFRQ_START", DateUtils.beginOfDay(condition.getStart()));
        }

        if ( condition.getEnd()!=null ){
            sqlMap.append("  and JFXX_JFRQ <= :JFXX_JFRQ_END");
            sqlMap.setParamValue("JFXX_JFRQ_END", DateUtils.endOfDay(condition.getEnd()));
        }


        sqlMap.query(JfxxVO.class);
        return sqlMap.getRecordSet();

	}

    @Override
    public List<Jfxx> query(int year) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.append("select JFXX_ID, JFXX_CODE, JFXX_SQMC, JFXX_SQH, JFXX_FYMC, JFXX_JFJE, JFXX_JFQX, JFXX_ZT, JFXX_JFRQ ");
        sqlMap.append("       , JFXX_JFR, JFXX_SJ, JFXX_BZ, JFXX_WHRID, JFXX_WHR, JFXX_WHSJ, JFXX_SYSVERSION, JFXX_YEAR");
        sqlMap.append("from JFXX ");
        sqlMap.append("where JFXX_YEAR = :JFXX_YEAR  ");
        sqlMap.setParamValue("JFXX_YEAR", year);
        return sqlMap.query(Jfxx.class);
    }
}
