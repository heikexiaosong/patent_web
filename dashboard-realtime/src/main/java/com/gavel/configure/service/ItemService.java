package com.gavel.configure.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.configure.db.entity.Item;
import com.gavel.configure.vo.ItemCondition;
import com.gavel.configure.vo.ItemVO;
import com.gavel.persistence.sql.RecordSet;

import java.util.Date;
import java.util.List;


public interface ItemService extends BaseEditService {
	
    RecordSet<ItemVO> query(ItemCondition condition);

    List<ItemVO> loadItems(String code);

    List<ItemVO> loadHistoryItems(String id, Date timestamp);
}
