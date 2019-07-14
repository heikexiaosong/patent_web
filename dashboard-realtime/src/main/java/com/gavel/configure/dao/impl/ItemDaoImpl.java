package com.gavel.configure.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gavel.common.base.dao.impl.BaseDaoImpl;
import com.gavel.common.utils.CollectionUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.configure.dao.ItemDao;
import com.gavel.configure.db.entity.Item;
import com.gavel.configure.vo.ItemCondition;
import com.gavel.configure.vo.ItemVO;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.persistence.sql.SqlMap;
import com.gavel.persistence.sql.SqlUtil;


@Repository("itemDao")
public class ItemDaoImpl extends BaseDaoImpl implements ItemDao {

	public RecordSet<ItemVO> query(ItemCondition condition) {
		SqlMap sqlMap = new SqlMap();
		sqlMap.setPageNo(condition.getPageNo());
		sqlMap.setRowCount(condition.getPageSize());
		sqlMap.append("select ITEM_ID, ITEM_CFGCODE, ITEM_NAME, ITEM_POSX, ITEM_POSY, ITEM_TYPE, ITEM_VALUE, ITEM_UNIT, ITEM_BZ, ");
		sqlMap.append("       ITEM_FONT, ITEM_TEXTCOLOR, ITEM_LOWER, ITEM_LOWERCOLOR, ITEM_UPPER, ITEM_UPPERCOLOR, ITEM_PROP ");
		sqlMap.append("  from ITEM ");
		sqlMap.append(" where 1=1  ");
		if (StringUtils.isNotEmpty(condition.getId())) {
			sqlMap.append("  and " + SqlUtil.getWhereSql("ITEM_ID", condition.getId()));
			sqlMap.setParamValue("ITEM_ID", condition.getId());
		}
		if (StringUtils.isNotEmpty(condition.getCfgcode())) {
			sqlMap.append("  and " + SqlUtil.getWhereSql("ITEM_CFGCODE", condition.getCfgcode()));
			sqlMap.setParamValue("ITEM_CFGCODE", condition.getCfgcode());
		}
		sqlMap.query(ItemVO.class);
		return sqlMap.getRecordSet();

	}

	@Override
	public List<ItemVO> loadItems(String code) {

		SqlMap sqlMap = new SqlMap();
		sqlMap.append("select ITEM_ID, ITEM_CFGCODE, ITEM_NAME, ITEM_POSX, ITEM_POSY, ITEM_TYPE, ITEM_VALUE, ITEM_UNIT, ITEM_BZ,  ");
		sqlMap.append("       ITEM_FONT, ITEM_TEXTCOLOR, ITEM_LOWER, ITEM_LOWERCOLOR, ITEM_UPPER, ITEM_UPPERCOLOR, ITEM_PROP ");
		sqlMap.append("  from ITEM ");
		sqlMap.append(" where ITEM_CFGCODE = :CODE  ");
		sqlMap.setParamValue("CODE", code);
		List<ItemVO> result = sqlMap.query(ItemVO.class);
		if ( result!=null ){
			return result;
		}
		return CollectionUtils.emptyList();
	}
	
	
	@Override
	public List<Item> loadItemsByValueArray(String[] valueArray) {
		SqlMap sqlMap = new SqlMap();
		sqlMap.append("select ITEM_ID, ITEM_CFGCODE, ITEM_NAME, ITEM_POSX, ITEM_POSY, ITEM_TYPE, ITEM_VALUE, ITEM_UNIT, ITEM_BZ,");
		sqlMap.append("  ITEM_FONT, ITEM_TEXTCOLOR, ITEM_LOWER, ITEM_LOWERCOLOR, ITEM_UPPER, ITEM_UPPERCOLOR, ITEM_PROP ");
		sqlMap.append("from ITEM ");
		sqlMap.append("where 1=1  ");
		sqlMap.append("  and " + SqlUtil.getWhereNotEqualSql("ITEM_VALUE", valueArray));
		sqlMap.append("order by ITEM_VALUE");
		return sqlMap.query(Item.class);
	}
}
