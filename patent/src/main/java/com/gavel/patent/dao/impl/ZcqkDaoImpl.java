package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.patent.dao.ZcqkDao;
import com.gavel.patent.vo.ZcqkCondition;
import com.gavel.patent.vo.ZcqkVO;


@Repository("zcqkDao")
public class ZcqkDaoImpl extends BaseDaoImpl implements ZcqkDao {
	
	public RecordSet<ZcqkVO> query(ZcqkCondition condition){
		 SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select ZCQK_ID, ZCQK_QKRQ, ZCQK_QKR, ZCQK_QKYT, ZCQK_JE, ZCQK_LXDW, ZCQK_FKFS ");
        sqlMap.append(", ZCQK_HM, ZCQK_KHH, ZCQK_YHZH, ZCQK_BZ, ZCQK_ZT, ZCQK_WFID, ZCQK_WFINSTID, ZCQK_WFPID, ZCQK_WFWUSERID, ZCQK_WFWUSERNAME, ZCQK_WFHUSERID, ZCQK_WFHUSERNAME, ZCQK_WHRID, ZCQK_WHR, ZCQK_WHSJ, ZCQK_SYSVERSION, ZCQK_CJRID, ZCQK_CJR, ZCQK_CJSJ ");
        sqlMap.append("from ZCQK ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("ZCQK_ID", condition.getId()));
            sqlMap.setParamValue("ZCQK_ID", condition.getId());
            
        }
        sqlMap.query(ZcqkVO.class);
        return sqlMap.getRecordSet();

	}
}
