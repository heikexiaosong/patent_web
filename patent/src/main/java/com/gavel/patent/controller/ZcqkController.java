package com.gavel.patent.controller;

import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.ReturnData;
import com.gavel.common.utils.UserInfoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.gavel.persistence.sql.RecordSet;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.utils.ThreadContext;

import com.gavel.patent.service.ZcqkService;
import com.gavel.patent.vo.ZcqkCondition;
import com.gavel.patent.vo.ZcqkVO;

import com.gavel.common.excel.DefaultDataConverter;
import com.gavel.common.excel.ExcelColumnSelector;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.excel.ExcelUtilsBuilder;
import java.io.OutputStream; 
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("patent/zcqk")
public class ZcqkController extends BaseController {

    @Autowired
    private ZcqkService zcqkService;

    @RequestMapping("/index")
    public String index() {
        return "patent/zcqk/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "patent/zcqk/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "patent/zcqk/edit";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        ZcqkCondition condition = DataConvert.getCondition(param, ZcqkCondition.class);
        RecordSet<ZcqkVO> records = zcqkService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(ZcqkVO.class, records.getRecords().get(0));
        }
        return buildReturnData(ZcqkVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        ZcqkCondition condition = DataConvert.getCondition(param, ZcqkCondition.class);
        RecordSet<ZcqkVO> records = zcqkService.query(condition);
        return buildReturnData(records, ZcqkVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        editJson.getMaster().put("qkr", UserInfoUtil.getUserId());
        zcqkService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        zcqkService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        zcqkService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
        ZcqkCondition condition = DataConvert.getCondition(param, ZcqkCondition.class);
        RecordSet<ZcqkVO> records = zcqkService.query(condition);

        final String fileName= "xxxx表" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), ZcqkVO.class);
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
