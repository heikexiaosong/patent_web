package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.ProcessDao;
import com.gavel.patent.vo.ProcessCondition;
import com.gavel.patent.vo.ProcessVO;


@Repository("processDao")
public class ProcessDaoImpl extends BaseDaoImpl implements ProcessDao {
	
	public RecordSet<ProcessVO> query(ProcessCondition condition){
		 SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select PROCESS_ID, PROCESS_TYPE, PROCESS_BID, PROCESS_NAME, PROCESS_ZT, PROCESS_DCLR, PROCESS_CLR ");
        sqlMap.append(", PROCESS_CLSJ, PROCESS_OPERA, PROCESS_STEP ");
        sqlMap.append("from PROCESS ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("PROCESS_ID", condition.getId()));
            sqlMap.setParamValue("PROCESS_ID", condition.getId());
            
        }
        sqlMap.query(ProcessVO.class);
        return sqlMap.getRecordSet();

	}
}
