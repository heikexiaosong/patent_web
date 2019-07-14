package com.gavel.configure.service;

import com.gavel.common.base.service.BaseEditService;
import com.gavel.configure.db.entity.Configure;
import com.gavel.configure.vo.ConfigureCondition;
import com.gavel.configure.vo.ConfigureVO;
import com.gavel.persistence.sql.RecordSet;

import java.io.BufferedInputStream;
import java.io.OutputStream;


public interface ConfigureService extends BaseEditService {
	
    RecordSet<ConfigureVO> query(ConfigureCondition condition);

    void buildmenu(Configure configure);

    void buildRTView(OutputStream outputStream, String id);

    Configure load(String id);
}
