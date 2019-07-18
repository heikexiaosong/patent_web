package com.gavel.patent.controller;

import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.ReturnData;
import com.gavel.common.utils.UserInfoUtil;
import com.google.common.collect.Sets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.gavel.persistence.sql.RecordSet;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.utils.ThreadContext;

import com.gavel.patent.service.KhglService;
import com.gavel.patent.vo.KhglCondition;
import com.gavel.patent.vo.KhglVO;

import com.gavel.common.excel.DefaultDataConverter;
import com.gavel.common.excel.ExcelColumnSelector;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.excel.ExcelUtilsBuilder;
import java.io.OutputStream;
import java.util.Set;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("patent/khgl")
public class KhglController extends BaseController {

    @Autowired
    private KhglService khglService;

    @RequestMapping("/index")
    public String index() {

        if (UserInfoUtil.isRole("admin")){
            return "patent/khgl/admin";
        }
        return "patent/khgl/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "patent/khgl/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "patent/khgl/edit";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        KhglCondition condition = DataConvert.getCondition(param, KhglCondition.class);
        RecordSet<KhglVO> records = khglService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(KhglVO.class, records.getRecords().get(0));
        }
        return buildReturnData(KhglVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        KhglCondition condition = DataConvert.getCondition(param, KhglCondition.class);
        RecordSet<KhglVO> records = khglService.query(condition);
        return buildReturnData(records, KhglVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        khglService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        khglService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        khglService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
        KhglCondition condition = DataConvert.getCondition(param, KhglCondition.class);
        RecordSet<KhglVO> records = khglService.query(condition);

        final String fileName= "客户信息表-" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), KhglVO.class);
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
        Set<String> attributeNames = Sets.newHashSet("id", "type", "whrid", "whr", "whsj", "sysversion", "khglnlryname", "khglwlryname", "nlry", "wlry");

        @Override
        public boolean accept(String fieldName) {
            if ( attributeNames.contains(fieldName) ){
                return false;
            }
            return true;
        }
    }

}
