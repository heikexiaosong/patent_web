package com.gavel.patent.controller;

import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.ReturnData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.gavel.persistence.sql.RecordSet;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.utils.ThreadContext;

import com.gavel.patent.service.JfxxService;
import com.gavel.patent.vo.JfxxCondition;
import com.gavel.patent.vo.JfxxVO;

import com.gavel.common.excel.DefaultDataConverter;
import com.gavel.common.excel.ExcelColumnSelector;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.excel.ExcelUtilsBuilder;
import java.io.OutputStream; 
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/patent")
public class JfxxController extends BaseController {

    @Autowired
    private JfxxService jfxxService;

    @RequestMapping("/djf/index")
    public String djf() {
        return "patent/djf/index";
    }

    @RequestMapping("/yjf/index")
    public String yjf() {
        return "patent/yjf/index";
    }

    @RequestMapping("/jfxx/add")
    public String add() {
        return "patent/jfxx/edit";
    }

    @RequestMapping("/jfxx/edit")
    public String edit() {
        return "patent/jfxx/edit";
    }

    @RequestMapping(value = "/jfxx" + BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        JfxxCondition condition = DataConvert.getCondition(param, JfxxCondition.class);
        RecordSet<JfxxVO> records = jfxxService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(JfxxVO.class, records.getRecords().get(0));
        }
        return buildReturnData(JfxxVO.class, null);
    }

    @RequestMapping(value = "/jfxx" + BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        JfxxCondition condition = DataConvert.getCondition(param, JfxxCondition.class);
        RecordSet<JfxxVO> records = jfxxService.query(condition);
        return buildReturnData(records, JfxxVO.class);
    }

    @RequestMapping(value = "/jfxx" + BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        jfxxService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/jfxx" + BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        jfxxService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/jfxx" + BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        jfxxService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/jfxx" + BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
        JfxxCondition condition = DataConvert.getCondition(param, JfxxCondition.class);
        RecordSet<JfxxVO> records = jfxxService.query(condition);

        final String fileName= "xxxx表" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), JfxxVO.class);
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

}
