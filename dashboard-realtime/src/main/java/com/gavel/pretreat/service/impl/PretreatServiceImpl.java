package com.gavel.pretreat.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.stream.Collectors;

import com.gavel.common.utils.DateUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.Constants;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.common.structurer.MapList;
import com.gavel.common.utils.CollectionUtils;
import com.gavel.configure.dao.ItemDao;
import com.gavel.configure.db.entity.Item;
import com.gavel.kzzx.persistent.Menus;
import com.gavel.kzzx.persistent.Yymk;
import com.gavel.kzzx.service.YymkService;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.dao.DatapointDao;
import com.gavel.pretreat.dao.PretreatDao;
import com.gavel.pretreat.db.entity.Datapoint;
import com.gavel.pretreat.db.entity.Pretreat;
import com.gavel.pretreat.service.ExtractionService;
import com.gavel.pretreat.service.PretreatService;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.DatapointVO;
import com.gavel.pretreat.vo.PretreatCondition;
import com.gavel.pretreat.vo.PretreatVO;


@Service("pretreatService")
@Transactional
public class PretreatServiceImpl extends BaseEditServiceImpl implements PretreatService {

    private static Logger LOGGER = Logger.getLogger(PretreatServiceImpl.class);

    @Autowired
    private PretreatDao pretreatDao;

    @Autowired
    private ExtractionService extractionService;

    @Autowired
    private DatapointDao datapointDao;

    @Autowired
    private CommonService commonService;
    
    @Autowired
    private YymkService yymkService;
    
    @Autowired
    private ItemDao itemDao;

    @Override
    public void initService() {
        addMaster(new Pretreat());
    }

    @Override
	public RecordSet<PretreatVO> query(PretreatCondition condition) {
	    return pretreatDao.query(condition);
	}

    @Override
    public void process(String code,  Date theDate) {

        Pretreat param = new Pretreat();
        param.setCode(code);

        Pretreat exist = pretreatDao.queryByEntity(param);
        if ( exist==null ){
            LOGGER.warn("没有找到[Code: " + code +"]对应的记录");
            throw new RuntimeException("没有找到[Code: " + code +"]对应的记录");
        }

        String metrics = exist.getMetrics();
        if ( metrics==null || metrics.trim().length()==0 ){
            LOGGER.warn("[Code: " + code +"]没有metrics, 不需要处理");
            return;
        }

        String[] metricArr =  metrics.split(",");

        List<String> metricList = new ArrayList<>();
        if ( metricArr!=null && metricArr.length > 0 ){
            for (String metric: metricArr) {
                metricList.add(metric.trim());
            }
        }

        if ( exist.getWindow()!=null && exist.getWindow() > 0 ) {

            Date start = org.apache.commons.lang3.time.DateUtils.addSeconds(theDate, -exist.getWindow());
            extractionService.extraction(start, theDate, exist.getAlgorithm(), metricList);

        } else {
            extractionService.extraction(theDate, metricList);
        }

    }

    @Override
    public MapList datas(String code, DatapointCondition condition) {

        MapList mapList = new MapList();


        List<JSONObject> fields = new ArrayList<>();

        mapList.put("fields", fields);

        Pretreat param = new Pretreat();
        param.setCode(code);

        Pretreat exist = pretreatDao.queryByEntity(param);
        if ( exist==null ){
            LOGGER.warn("没有找到[Code: " + code +"]对应的记录");
            throw new RuntimeException("没有找到[Code: " + code +"]对应的记录");
        }


        String metrics = exist.getMetrics();
        if ( metrics==null || metrics.trim().length()==0 ){
            LOGGER.warn("[Code: " + code +"]没有metrics");
            return mapList;
        }

        String[] metricArr =  metrics.split(",");

        List<String> metricList = new ArrayList<>();
        if ( metricArr!=null && metricArr.length > 0 ){
            for (String metric: metricArr) {
                metricList.add(metric.trim());
            }
        }
        
        List<Item> items = itemDao.loadItemsByValueArray(metricArr);
        
        Collections.sort(items, new Comparator<Item>() {
        	@Override
        	public int compare(Item item1, Item item2) {
        		return item1.getValue().compareTo(item2.getValue());
        	}
        });
        
        System.out.println(items.toString());
        for (Item item : items) {
        	JSONObject json = new JSONObject();
        	json.put("id", item.getValue());
        	json.put("caption", item.getName());
        	fields.add(json);
        }
        
        MapList recordMap = new MapList();
        DatapointCondition datapointCondition = new DatapointCondition();
        if (condition.getPageNo() > 0 && condition.getPageSize() > 0) {
        	DatapointCondition pageCondition = new DatapointCondition();
        	pageCondition.setPageNo(condition.getPageNo());
            pageCondition.setPageSize(condition.getPageSize());
            RecordSet<DatapointVO> recordSet = datapointDao.getPageInfo(pageCondition, metricArr);
            recordMap.put(Constants.RECORDCOUT, recordSet.getRecordCount());
            List<DatapointVO> datapointPageInfo = recordSet.getRecords();
            if (datapointPageInfo != null && datapointPageInfo.size() > 0) {
            	DatapointVO beginDatapoint = datapointPageInfo.get(datapointPageInfo.size() - 1);
            	datapointCondition.setBeginDate(beginDatapoint.getThdate());
            	datapointCondition.setBeginTime(beginDatapoint.getTime());
            	DatapointVO endDatapoint = datapointPageInfo.get(0);
            	datapointCondition.setEndDate(endDatapoint.getThdate());
            	datapointCondition.setEndTime(endDatapoint.getTime());
            }
            
        }
        

        List<DatapointVO> datapoints =  datapointDao.query(datapointCondition, metricList);

        /*if ( datapoints==null || datapoints.size()==0 ){
            return mapList;
        }*/


        Map<String, List<DatapointVO>> datetimeMap = datapoints.stream()
                                                             .collect(Collectors.groupingBy( e -> e.getThdate() + " " + e.getTime() ));

        List<Map.Entry<String,List<DatapointVO>>> datetimeMapList = new ArrayList<Map.Entry<String,List<DatapointVO>>>(datetimeMap.entrySet());
        Collections.sort(datetimeMapList,new Comparator<Map.Entry<String,List<DatapointVO>>>() {

			@Override
			public int compare(Entry<String, List<DatapointVO>> o1, Entry<String, List<DatapointVO>> o2) {
				// TODO Auto-generated method stub
				return o2.getKey().compareTo(o1.getKey());
			}
            
        });
        List<Map<String, Object>> result = new ArrayList<>();

//        Set<String> keySet = new TreeSet<>(datetimeMap.keySet());

        for (Map.Entry<String,List<DatapointVO>> entry: datetimeMapList) {
            List<DatapointVO> datapointList = entry.getValue();
            if ( datapointList==null || datapointList.size()==0 ){
                continue;
            }

            Datapoint first = datapointList.get(0);
            Map<String, Object> record = new HashMap<>();
            record.put("thdate", first.getThdate());
            record.put("time", first.getTime());

            for (DatapointVO datapoint : datapointList) {
                record.put(datapoint.getMetric(), datapoint.getValue());
            }

            result.add(record);
        }
        mapList.put("fields", fields);
        recordMap.put(Constants.RECORDS, result);
        mapList.put(Constants.DATA, recordMap);
        return mapList;

    }

    @Override
    public void unpublish(String code) {
        if ( code==null || code.trim().length()==0 ){
            throw new RuntimeException("报表编码[bm]不能为空.");
        }


        Pretreat param = new Pretreat();
        param.setCode(code);
        Pretreat pretreat = pretreatDao.queryByEntity(param);

        if ( pretreat==null ){
            throw new RuntimeException("找不到对应的数据预处理定义.");
        }

        unpublish(pretreat);
    }

    @Override
    public List<String> columns(String code) {

        if ( code==null || code.trim().length()==0 ){
            return CollectionUtils.emptyList();
        }

        Pretreat param = new Pretreat();
        param.setCode(code);

        Pretreat exist = pretreatDao.queryByEntity(param);
        if ( exist==null ){
            LOGGER.warn("没有找到[Code: " + code +"]对应的记录");
            return CollectionUtils.emptyList();
        }


        String metrics = exist.getMetrics();
        if ( metrics==null || metrics.trim().length()==0 ){
            LOGGER.warn("[Code: " + code +"]没有metrics");
            return CollectionUtils.emptyList();
        }

        String[] metricArr =  metrics.split(",");


        Set<String> metricList = new HashSet<>();
        if ( metricArr!=null && metricArr.length > 0 ){
            for (String metric: metricArr) {
                metricList.add(metric.trim());
            }
        }

        List<Map<String, Object>>   tags = pretreatDao.queryListByEntity(new Item());

        if ( tags==null || tags.size()==0 ){
            return CollectionUtils.emptyList();
        }

        return new ArrayList<>(metricList);

    }

    private void unpublish(Pretreat exist) {
        if ( exist==null ){
            return;
        }

        if ( exist.getMkid()==null || exist.getMkid().trim().length()==0 ){
            return ;
        }

        String mkid = exist.getMkid();

        Menus menusParam = new Menus();
        menusParam.setMkid(mkid);
        Menus menus = pretreatDao.queryByEntity(menusParam);
        if (menus != null) {
            pretreatDao.delete(menus);
        }

        //查询应用模块
        Yymk yymkParam = new Yymk();
        yymkParam.setMkid(mkid);
        Yymk yymk = pretreatDao.queryByEntity(yymkParam);
        if (yymk != null) {
            pretreatDao.delete(yymk);
        }
    }

    @Override
    public void publish(String code) {
        if ( code==null || code.trim().length()==0 ){
            throw new RuntimeException("数据预处理定义编码[code]不能为空.");
        }

        //查询自定义模块表
        Pretreat param = new Pretreat();
        param.setCode(code);
        Pretreat pretreat = pretreatDao.queryByEntity(param);

        if ( pretreat==null ){
            throw new RuntimeException("找不到对应的数据预处理定义.");
        }

        if ( pretreat.getMkid()==null || pretreat.getMkid().trim().length()==0 ){
            int seq =  840700000 + commonService.getSequence("PRE_NUM", "84002");
            pretreat.setMkid(String.valueOf(seq));
            pretreatDao.update(pretreat);
            yymkService.addUserDefine("840700000", seq, pretreat.getName(), "rtdata/pretreat/page/" + pretreat.getCode());
        }
        

    }
}
