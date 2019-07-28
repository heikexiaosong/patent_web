package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.UserInfoUtil;
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
        sqlMap.append(", ZCQK_HM, ZCQK_KHH, ZCQK_YHZH, ZCQK_BZ, ZCQK_ZT, ZCQK_WFID, ZCQK_WFINSTID, ZCQK_WFPID, ZCQK_WFWUSERID ");
        sqlMap.append(", ZCQK_WFWUSERNAME, ZCQK_WFHUSERID, ZCQK_WFHUSERNAME, ZCQK_WHRID, ZCQK_WHR, ZCQK_WHSJ, ZCQK_SYSVERSION, ZCQK_CJRID, ZCQK_CJR, ZCQK_CJSJ, USERS_USERNAME");
        sqlMap.append("from ZCQK ");
        sqlMap.append("     left join USERS on USERS_USERID = ZCQK_QKR ");
        sqlMap.append("     left join PROCESS on PROCESS_BID = ZCQK_ID ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("ZCQK_ID", condition.getId()));
            sqlMap.setParamValue("ZCQK_ID", condition.getId());
            
        }

        // 待我处理
        if ( "C".equalsIgnoreCase(condition.getZt()) ) {
                sqlMap.append("  and  PROCESS_CLR = :PROCESS_CLR and PROCESS_ZT = :PROCESS_ZT  ");
                sqlMap.setParamValue("PROCESS_CLR", UserInfoUtil.getUserId());
                sqlMap.setParamValue("PROCESS_ZT", condition.getZt());
        } else  {
                sqlMap.append("  and ( ZCQK_QKR = :ZCQK_QKR or ( PROCESS_DCLR like :PROCESS_DCLR and PROCESS_ZT = :PROCESS_ZT )) ");
                sqlMap.setParamValue("ZCQK_QKR", UserInfoUtil.getUserId());
                sqlMap.setParamValue("PROCESS_DCLR", "%" + UserInfoUtil.getUserId() + ";%");
                sqlMap.setParamValue("PROCESS_ZT", "P");
        }

        sqlMap.query(ZcqkVO.class);
        return sqlMap.getRecordSet();

	}
}
