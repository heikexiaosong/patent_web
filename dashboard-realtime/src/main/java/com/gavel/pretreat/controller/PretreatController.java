package com.gavel.pretreat.controller;

import java.io.OutputStream;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
import com.gavel.persistence.sql.RecordSet;
import com.gavel.pretreat.service.PretreatService;
import com.gavel.pretreat.vo.DatapointCondition;
import com.gavel.pretreat.vo.PretreatCondition;
import com.gavel.pretreat.vo.PretreatVO;

@Controller
@RequestMapping("rtdata/pretreat")
public class PretreatController extends BaseController {

    @Autowired
    private PretreatService pretreatService;

    @RequestMapping("/index")
    public String index() {
        return "rtdata/pretreat/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "rtdata/pretreat/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "rtdata/pretreat/edit";
    }

    @RequestMapping("page/{code}")
    public String page(@PathVariable String code, Model model) {
        model.addAttribute("code", code);
        return "rtdata/pretreat/page";
    }

    @RequestMapping(value = "/visualdata/{code}")
    public Object visualdata(@PathVariable String code, Model model) {
        model.addAttribute("code", code);
        return "rtdata/pretreat/visualdata";
    }


    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        PretreatCondition condition = DataConvert.getCondition(param, PretreatCondition.class);
        RecordSet<PretreatVO> records = pretreatService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(PretreatVO.class, records.getRecords().get(0));
        }
        return buildReturnData(PretreatVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        PretreatCondition condition = DataConvert.getCondition(param, PretreatCondition.class);
        RecordSet<PretreatVO> records = pretreatService.query(condition);
        return buildReturnData(records, PretreatVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        pretreatService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        pretreatService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        pretreatService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "datas", method = RequestMethod.POST)
    @ResponseBody
    public Object datas(@RequestBody JSONObject param) {

        try {
          String code = param.getString("code");
          DatapointCondition condition = DataConvert.getCondition(param, DatapointCondition.class);
          ThreadContext.getReturnData().setData(pretreatService.datas(code, condition));
        }catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }


    @RequestMapping(value = "{code}/columns", method = RequestMethod.POST)
    @ResponseBody
    public Object columns(@PathVariable String code) {
        try {
            return pretreatService.columns(code);
        }catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }




    @RequestMapping(value = BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
    	
    	class DataConverter extends DefaultDataConverter {
            @Override
            public String convert(String fieldName, String value) {

            	return value;
            }
        }
    	
    	class ColumnFilter implements ExcelColumnSelector {            
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
    	
        PretreatCondition condition = DataConvert.getCondition(param, PretreatCondition.class);
        RecordSet<PretreatVO> records = pretreatService.query(condition);

        final String fileName= "xxxx表" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), PretreatVO.class);
        ouputStream.flush();
        ouputStream.close();
    }


    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    @ResponseBody
    public Object publish(@RequestBody JSONObject param){
        String code = param.getString("code");
        try {
            pretreatService.publish(code);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }


    @RequestMapping(value = "/unpublish", method = RequestMethod.POST)
    @ResponseBody
    public Object unpublish(@RequestBody JSONObject param){
        String code = param.getString("code");
        try {
            pretreatService.unpublish(code);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

}
