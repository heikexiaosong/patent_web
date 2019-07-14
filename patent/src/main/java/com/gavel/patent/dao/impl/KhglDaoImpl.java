package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.KhglDao;
import com.gavel.patent.vo.KhglCondition;
import com.gavel.patent.vo.KhglVO;


@Repository("khglDao")
public class KhglDaoImpl extends BaseDaoImpl implements KhglDao {
	
	public RecordSet<KhglVO> query(KhglCondition condition){
		 SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select KHGL_ID, KHGL_KHMC, KHGL_DWMC, KHGL_LXDH, KHGL_YX, KHGL_DZ, KHGL_ZYFW ");
        sqlMap.append(", KHGL_BZ, KHGL_WHRID, KHGL_WHR, KHGL_WHSJ, KHGL_SYSVERSION ");
        sqlMap.append("from KHGL ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("KHGL_ID", condition.getId()));
            sqlMap.setParamValue("KHGL_ID", condition.getId());
            
        }
        sqlMap.query(KhglVO.class);
        return sqlMap.getRecordSet();

	}
}
