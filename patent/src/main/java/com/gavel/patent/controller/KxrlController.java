package com.gavel.patent.controller;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.excel.DefaultDataConverter;
import com.gavel.common.excel.ExcelColumnSelector;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.excel.ExcelUtilsBuilder;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.patent.service.CwwlService;
import com.gavel.patent.vo.CwwlCondition;
import com.gavel.patent.vo.CwwlVO;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;

@Controller
@RequestMapping("patent/kxrl")
public class KxrlController extends BaseController {

    @Autowired
    private CwwlService cwwlService;

    @RequestMapping("/index")
    public String index() {
        return "patent/kxrl/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "patent/kxrl/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "patent/kxrl/edit";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        CwwlCondition condition = DataConvert.getCondition(param, CwwlCondition.class);
        RecordSet<CwwlVO> records = cwwlService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(CwwlVO.class, records.getRecords().get(0));
        }
        return buildReturnData(CwwlVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        CwwlCondition condition = DataConvert.getCondition(param, CwwlCondition.class);
        RecordSet<CwwlVO> records = cwwlService.query(condition);
        return buildReturnData(records, CwwlVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        cwwlService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        cwwlService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        cwwlService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
        CwwlCondition condition = DataConvert.getCondition(param, CwwlCondition.class);
        RecordSet<CwwlVO> records = cwwlService.query(condition);

        final String fileName= "xxxx表" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), CwwlVO.class);
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
