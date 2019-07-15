package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.JfxxDao;
import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;


@Repository("jfxxDao")
public class JfxxDaoImpl extends BaseDaoImpl implements JfxxDao {
	
	public RecordSet<JfxxVO> query(JfxxCondition condition){
		 SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select JFXX_ID, JFXX_CODE, JFXX_SQMC, JFXX_SQH, JFXX_FYMC, JFXX_JFJE, JFXX_JFRQ ");
        sqlMap.append(", JFXX_JFR, JFXX_SJ, JFXX_BZ, JFXX_WHRID, JFXX_WHR, JFXX_WHSJ, JFXX_SYSVERSION ");
        sqlMap.append("from JFXX ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("JFXX_ID", condition.getId()));
            sqlMap.setParamValue("JFXX_ID", condition.getId());
            
        }
        sqlMap.query(JfxxVO.class);
        return sqlMap.getRecordSet();

	}
}