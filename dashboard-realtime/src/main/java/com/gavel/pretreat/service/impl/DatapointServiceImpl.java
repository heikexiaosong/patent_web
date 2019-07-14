package com.gavel.pretreat.service.impl;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.gavel.common.excel.ExcelTool;
import com.gavel.common.excel.ExcelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.sql.GavelSql;
import com.gavel.common.utils.StringUtils;
import com.gavel.configure.dao.ItemDao;
import com.gavel.configure.db.entity.Item;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.dao.DatapointDao;
import com.gavel.pretreat.db.entity.Datapoint;
import com.gavel.pretreat.db.entity.Pretreat;
import com.gavel.pretreat.service.DatapointService;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.DatapointVO;



@Service("datapointService")
@Transactional
public class DatapointServiceImpl extends BaseEditServiceImpl implements DatapointService {

    @Autowired
    private DatapointDao datapointDao;
    
    @Autowired
    private ItemDao itemDao;

    @Override
    public void initService() {
        addMaster(new Datapoint());
    }

    @Override
	public RecordSet<DatapointVO> query(DatapointCondition condition) {
	    return datapointDao.query(condition);
	}

	@Override
	public void batchInsert(List<Datapoint> list) {
		for (Datapoint datapoint : list) {
			insert(datapoint);
		}
	}

	@Override
	public void batchUpdate(List<Datapoint> list) {
		for (Datapoint datapoint : list) {
			if (StringUtils.isEmpty(datapoint.getId())) {
				if (datapoint.getValue() == null) continue;
				else
					insert(datapoint);
			}else
				update(datapoint);
		}		
	}

	@Override
	public void batchDelete(String thdate, String time) {
		Datapoint datapoint = new Datapoint();
		datapoint.setThdate(thdate);
		datapoint.setTime(time);
		GavelSql.deleteByEntity(datapoint);
	}
	
	@Override
	public List<DatapointVO> query(String code, DatapointCondition condition){
		//查询数据预处理定义表
		Pretreat param = new Pretreat();
        param.setCode(code);
        Pretreat pretreat = datapointDao.queryByEntity(param);
        String metrics = "";
        if (pretreat != null) {
        	metrics = pretreat.getMetrics();
        }
        String[] metricsArray = StringUtils.split(metrics, ",");
        List<DatapointVO> valuelist = datapointDao.query(condition, metricsArray);
        List<Item> itemList = itemDao.loadItemsByValueArray(metricsArray);
        List<DatapointVO> list = new ArrayList<>();
        for (Item item : itemList) {
        	DatapointVO datapoint = new DatapointVO();
        	datapoint.setMetric(item.getValue());
        	datapoint.setItemname(item.getName());
        	datapoint.setValue(null);
        	for (DatapointVO datapointVO : valuelist) {
        		if (StringUtils.equalsIgnoreCase(item.getValue(), datapointVO.getMetric())) {
					datapoint.setId(datapointVO.getId());
        			datapoint.setValue(datapointVO.getValue());
        			break;
        		}
        	}
        	list.add(datapoint);
        }
        return list;
	}

    @Override
    public void imp(String type, InputStream ins, String theDate, String time) throws IOException {

		List<Datapoint> datapointList = ExcelUtils.readRecords(ins,

				row -> Objects.nonNull(row.getCell(0)),

				row -> {

					System.out.println(row.getRowNum() + " ==> " + ExcelTool.getCellValue(row.getCell(1)));

					if ( row.getRowNum() == 0 ){
						return null;
					}

					if ( StringUtils.isEmpty(ExcelTool.getCellValue(row.getCell(8))) ){
						return null;
					}

					Datapoint datapoint = new Datapoint();

					datapoint.setMetric(ExcelTool.getCellValue(row.getCell(8)));
					datapoint.setName(ExcelTool.getCellValue(row.getCell(3)));

					datapoint.setThdate(theDate);
					datapoint.setTime(time);

					datapoint.setValue(ExcelTool.getFloatValue(row.getCell(7)));

					return datapoint;

				});

		if (datapointList!=null && datapointList.size() > 0 ){
			for (Datapoint datapoint : datapointList) {


                Datapoint param = new Datapoint();

                param.setMetric(datapoint.getMetric());
                param.setThdate(datapoint.getThdate());
                param.setTime(datapoint.getTime());
                Datapoint exist = datapointDao.queryByEntity(param);
                if ( exist!=null ){
                    datapointDao.delete(exist);
                }


				datapointDao.insert(datapoint);
			}
			//datapointDao.insertEntities(datapointList);
		}
    }

	public static void main(String[] args) throws IOException {


		List<Datapoint> datapointList = ExcelUtils.readRecords(new FileInputStream(new File("/home/zeus/data/11.xlsx")),

				row -> Objects.nonNull(row.getCell(0)),

				row -> {

			if ( row.getRowNum() <= 2 ){
				return null;
			}

					Datapoint datapoint = new Datapoint();

					datapoint.setMetric(ExcelTool.getCellValue(row.getCell(8)));
					datapoint.setName(ExcelTool.getCellValue(row.getCell(3)));

					datapoint.setThdate("20190528");
					datapoint.setTime("00:00:00");

					datapoint.setValue(ExcelTool.getFloatValue(row.getCell(7)));

			return datapoint;

		});

		System.out.println(datapointList.size());

	}
}
