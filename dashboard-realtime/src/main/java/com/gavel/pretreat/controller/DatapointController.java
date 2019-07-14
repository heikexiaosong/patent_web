package com.gavel.pretreat.controller;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.Constants;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.excel.DefaultDataConverter;
import com.gavel.common.excel.ExcelColumnSelector;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.excel.ExcelUtilsBuilder;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.db.entity.Datapoint;
import com.gavel.pretreat.service.DatapointService;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.DatapointVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

@Controller
@RequestMapping("rtdata/datapoint")
public class DatapointController extends BaseController {

    @Autowired
    private DatapointService datapointService;

    @RequestMapping("/index")
    public String index() {
        return "rtdata/datapoint/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "rtdata/datapoint/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "rtdata/datapoint/edit";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        DatapointCondition condition = DataConvert.getCondition(param, DatapointCondition.class);
        RecordSet<DatapointVO> records = datapointService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(DatapointVO.class, records.getRecords().get(0));
        }
        return buildReturnData(DatapointVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        DatapointCondition condition = DataConvert.getCondition(param, DatapointCondition.class);
        condition.setThdate(StringUtils.replace(condition.getThdate(), "-", ""));
        RecordSet<DatapointVO> records = datapointService.query(condition);
        return buildReturnData(records, DatapointVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        datapointService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        datapointService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        datapointService.delete(editJson);
        return ThreadContext.getReturnData();
    }
    
    @RequestMapping(value = "/query/inst", method = RequestMethod.POST)
    @ResponseBody
    public Object queryInst(@RequestBody JSONObject param) {
        DatapointCondition condition = DataConvert.getCondition(param, DatapointCondition.class);
        condition.setThdate(StringUtils.replace(condition.getThdate(), "-", ""));
        List<DatapointVO> list = datapointService.query(param.getString("code"), condition);
        return buildReturnData(list, DatapointVO.class);
    }
    
    @RequestMapping(value = "/batch/insert", method = RequestMethod.POST)
    @ResponseBody
    public Object batchInsert(@RequestBody JSONObject param) {
    	List<Datapoint> list = DataConvert.getData2List(param.getJSONArray(Constants.DETAILS), Datapoint.class);
    	String thdate = param.getString("thdate");
    	if (StringUtils.isEmpty(thdate)) {
    		setReturnMessage("日期不能为空！");
    		return ThreadContext.getReturnData();
    	}
    	thdate = StringUtils.replace(thdate, "-", "");
    	for (Datapoint datapoint : list) {
    		datapoint.setThdate(thdate);
    		datapoint.setTime(param.getString("time"));
    	}
    	datapointService.batchInsert(list);
    	return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/batch/update", method = RequestMethod.POST)
    @ResponseBody
    public Object batchUpdate(@RequestBody JSONObject param) {
    	List<Datapoint> list = DataConvert.getData2List(param.getJSONArray(Constants.DETAILS), Datapoint.class);
    	String thdate = param.getString("thdate");
    	if (StringUtils.isEmpty(thdate)) {
    		setReturnMessage("日期不能为空！");
    		return ThreadContext.getReturnData();
    	}
    	thdate = StringUtils.replace(thdate, "-", "");
    	for (Datapoint datapoint : list) {
    		datapoint.setThdate(thdate);
    		datapoint.setTime(param.getString("time"));
    	}
    	datapointService.batchUpdate(list);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/batch/delete", method = RequestMethod.POST)
    @ResponseBody
    public Object batchDelete(@RequestBody JSONObject param) {
        Datapoint datapoint = DataConvert.getData(param, Datapoint.class);
        if (StringUtils.isEmpty(datapoint.getThdate())) {
        	setReturnMessage("参数【日期】为空，请传入【日期】！");
        	return ThreadContext.getReturnData();
        }else if (StringUtils.isEmpty(datapoint.getTime())){
        	setReturnMessage("参数【时间】为空，请传入【时间】！");
        	return ThreadContext.getReturnData();
        }
        datapointService.batchDelete(datapoint.getThdate(), datapoint.getTime());
        return ThreadContext.getReturnData();
    }    

    @RequestMapping(value = BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
        DatapointCondition condition = DataConvert.getCondition(param, DatapointCondition.class);
        RecordSet<DatapointVO> records = datapointService.query(condition);

        final String fileName= "xxxx表" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), DatapointVO.class);
        ouputStream.flush();
        ouputStream.close();
    }

    class DataConverter extends DefaultDataConverter {
        @Override
        public String convert(String fieldName, String value) {

		return value;
        }
    }

    class ColumnFilter implements ExcelColumnSelector {
        String[] attributeNames = {};
        
        @Override
        public boolean accept(String fieldName) {
            //for (String attributeName : attributeNames) {
                //if ( attributeName.equalsIgnoreCase(fieldName) ) {
                    //return true;
                //}
            //}
            //return  false;
            return true;
        }
    }


    @RequestMapping("/importpage")
    public String importpage() {
        return "rtdata/datapoint/importpage";
    }


    @RequestMapping(value="/excel/import")
    @ResponseBody
    public Object excelImport(HttpServletRequest request) throws Exception{

        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        MultiValueMap<String, MultipartFile> multiValueMap = multipartRequest.getMultiFileMap();

        String timestamp =  request.getParameter("timestamp");

        if ( StringUtils.isEmpty(timestamp) ){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage("请选择点数据值的时间");
            return ThreadContext.getReturnData();
        }

        for (MultipartFile multipartFile : multiValueMap.toSingleValueMap().values()) {
            System.out.println("=================" + multipartFile.getOriginalFilename() + "; size ==>: " + multipartFile.getSize());

            InputStream ins = multipartFile.getInputStream();

            String theDate = timestamp.split(" ")[0].replace("-", "");
            String time =  timestamp.split(" ").length <= 1 ? "00:00:00" : timestamp.split(" ")[1];
            datapointService.imp("PLC", ins, theDate, time);

            ins.close();
        }


        ThreadContext.getReturnData().setSuccess(true);
        ThreadContext.getReturnData().setMessage("点数据导入成功！");
        return ThreadContext.getReturnData();

    }

}
