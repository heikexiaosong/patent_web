package com.gavel.configure.dao.impl;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;
import org.springframework.stereotype.Repository;

import com.gavel.common.utils.StringUtils;
import com.gavel.configure.dao.ConfigureDao;
import com.gavel.configure.vo.ConfigureCondition;
import com.gavel.configure.vo.ConfigureVO;


@Repository("configureDao")
public class ConfigureDaoImpl extends BaseDaoImpl implements ConfigureDao {

    public RecordSet<ConfigureVO> query(ConfigureCondition condition) {
        SqlMap sqlMap = new SqlMap();
        sqlMap.setPageNo(condition.getPageNo());
        sqlMap.setRowCount(condition.getPageSize());
        sqlMap.append("select CONFIGURE_ID, CONFIGURE_CODE, CONFIGURE_NAME, CONFIGURE_BACKGROUP, CONFIGURE_WIDTH, CONFIGURE_HEIGHT, CONFIGURE_STATE, CONFIGURE_BZ, CONFIGURE_WHRID, CONFIGURE_WHR, CONFIGURE_WHSJ, CONFIGURE_CJRID, CONFIGURE_CJR, CONFIGURE_CJSJ ");
        sqlMap.append("from CONFIGURE ");
        sqlMap.append("where 1=1  ");
        if (StringUtils.isNotEmpty(condition.getId())) {
            sqlMap.append("  and " + SqlUtil.getWhereSql("CONFIGURE_ID", condition.getId()));
            sqlMap.setParamValue("CONFIGURE_ID", condition.getId());
        }
        sqlMap.query(ConfigureVO.class);
        return sqlMap.getRecordSet();
    }
}
