package com.gavel.configure.dao;

import com.gavel.common.base.dao.BaseDao;
import com.gavel.configure.db.entity.Item;
import com.gavel.configure.vo.ItemCondition;
import com.gavel.configure.vo.ItemVO;
import com.gavel.persistence.sql.RecordSet;

import java.util.List;


public interface ItemDao extends BaseDao {

    public RecordSet<ItemVO> query(ItemCondition condition);

    public List<ItemVO> loadItems(String code);
    
    public List<Item> loadItemsByValueArray(String[] valueArray);
}
