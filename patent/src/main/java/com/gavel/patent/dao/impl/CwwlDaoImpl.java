package com.gavel.patent.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.UserInfoUtil;
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
        sqlMap.append("select CWWL_ID, CWWL_YWRQ, CWWL_KH, CWWL_YW, CWWL_JE, CWWL_SKZH, CWWL_SJSKJE, CWWL_FP, CWWL_QBCB");
        sqlMap.append("       , CWWL_GF , CWWL_YJ, CWWL_TC, CWWL_ZLMC, CWWL_WHRID, CWWL_WHR, CWWL_WHSJ, CWWL_SYSVERSION ");
        sqlMap.append("       , CWWL_YWY, CWWL_STAT, CWWL_DKR, CWWL_WQRY, CWWL_NQRY, u1.USERS_USERNAME as CWWL_YWYMC, u2.USERS_USERNAME as CWWL_WQRYMC, u3.USERS_USERNAME as CWWL_NQRYMC");
        sqlMap.append("from CWWL ");
        sqlMap.append("     left join USERS u1 on u1.USERS_USERID = CWWL_YWY ");
        sqlMap.append("     left join USERS u2 on u2.USERS_USERID = CWWL_WQRY ");
        sqlMap.append("     left join USERS u3 on u3.USERS_USERID = CWWL_NQRY ");
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

        if (StringUtils.isNotEmpty(condition.getStat())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("CWWL_STAT", condition.getStat()));
            sqlMap.setParamValue("CWWL_STAT", condition.getStat());
        }


        sqlMap.query(CwwlVO.class);
        return sqlMap.getRecordSet();

	}

    @Override
    public RecordSet<CwwlVO> queryOwner(CwwlCondition condition) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select CWWL_ID, CWWL_YWRQ, CWWL_KH, CWWL_YW, CWWL_JE, CWWL_SKZH, CWWL_SJSKJE, CWWL_FP, CWWL_QBCB");
        sqlMap.append("       , CWWL_GF , CWWL_YJ, CWWL_TC, CWWL_ZLMC, CWWL_WHRID, CWWL_WHR, CWWL_WHSJ, CWWL_SYSVERSION ");
        sqlMap.append("       , CWWL_YWY, CWWL_STAT, CWWL_DKR, CWWL_WQRY, CWWL_NQRY, u1.USERS_USERNAME as CWWL_YWYMC, u2.USERS_USERNAME as CWWL_WQRYMC, u3.USERS_USERNAME as CWWL_NQRYMC");
        sqlMap.append("from CWWL ");
        sqlMap.append("     left join USERS u1 on u1.USERS_USERID = CWWL_YWY ");
        sqlMap.append("     left join USERS u2 on u2.USERS_USERID = CWWL_WQRY ");
        sqlMap.append("     left join USERS u3 on u3.USERS_USERID = CWWL_NQRY ");
        sqlMap.append("where ( CWWL_STAT = 'pending' or ( CWWL_STAT = 'claim' and CWWL_YWY = :CWWL_YWY  )  )  ");
        sqlMap.setParamValue("CWWL_YWY", UserInfoUtil.getUserId());

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

        if (StringUtils.isNotEmpty(condition.getStat())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("CWWL_STAT", condition.getStat()));
            sqlMap.setParamValue("CWWL_STAT", condition.getStat());
        }

        sqlMap.query(CwwlVO.class);
        return sqlMap.getRecordSet();
    }
}
