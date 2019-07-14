package com.gavel.trend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.ThreadContext;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.service.QsztmxService;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;



@Controller
@RequestMapping("trend/qsztmx")
public class QsztmxController extends BaseController {

    @Autowired
    private QsztmxService qsztmxService;

    @RequestMapping("/index")
    public String index() {
        return "trend/qsztmx/index";
    }

    @RequestMapping("/add")
    public String addindex() {
        return "trend/qsztmx/edit";
    }

    @RequestMapping("/edit")
    public String editindex() {
        return "trend/qsztmx/edit";
    }


    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        QsztmxCondition condition = DataConvert.getCondition(param, QsztmxCondition.class);
        RecordSet<QsztmxVO> records = qsztmxService.query(condition);
        return buildReturnData(records, QsztmxVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        qsztmxService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        qsztmxService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        qsztmxService.delete(editJson);
        return ThreadContext.getReturnData();
    }

}