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
        sqlMap.append(", KHGL_BZ, KHGL_WHRID, KHGL_WHR, KHGL_WHSJ, KHGL_SYSVERSION, KHGL_NLRY, KHGL_WLRY ");
        sqlMap.append(", n.USERS_USERNAME as KHGL_NLRY_NAME, w.USERS_USERNAME as KHGL_WLRY_NAME ");
        sqlMap.append("from KHGL ");
        sqlMap.append("     left join USERS n on n.USERS_USERID = KHGL_NLRY ");
        sqlMap.append("     left join USERS w on w.USERS_USERID = KHGL_WLRY ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())){
            sqlMap.append("  and " + SqlUtil.getWhereSql("KHGL_ID", condition.getId()));
            sqlMap.setParamValue("KHGL_ID", condition.getId());
            
        }
        if (StringUtils.isNotEmpty(condition.getKhmc())){
            sqlMap.append("  and KHGL_KHMC like :KHGL_KHMC");
            sqlMap.setParamValue("KHGL_KHMC", "%" + condition.getKhmc() + "%");

        }
        if (StringUtils.isNotEmpty(condition.getYwy())){
            sqlMap.append("  and ( KHGL_NLRY like :KHGL_NLRY or KHGL_WLRY like :KHGL_WLRY )");
            sqlMap.setParamValue("KHGL_NLRY", "%" + condition.getYwy() + "%");
            sqlMap.setParamValue("KHGL_WLRY", "%" + condition.getYwy() + "%");

        }
        sqlMap.query(KhglVO.class);
        return sqlMap.getRecordSet();

	}
}
