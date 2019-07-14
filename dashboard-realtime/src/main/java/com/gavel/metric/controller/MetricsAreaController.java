package com.gavel.metric.controller;

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
import com.gavel.metric.service.MetricsAreaService;
import com.gavel.metric.vo.MetricsAreaCondition;
import com.gavel.metric.vo.MetricsAreaVO;



@Controller
@RequestMapping("metric/metricsArea")
public class MetricsAreaController extends BaseController {

    @Autowired
    private MetricsAreaService metricsAreaService;

    @RequestMapping("/index")
    public String index() {
        return "metric/metricsArea/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "metric/metricsArea/edit";
    }
    
    @RequestMapping("/edit")
    public String edit() {
        return "metric/metricsArea/edit";
    }


    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        MetricsAreaCondition condition = DataConvert.getCondition(param, MetricsAreaCondition.class);
        RecordSet<MetricsAreaVO> records = metricsAreaService.query(condition);
        return buildReturnData(records, MetricsAreaVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        metricsAreaService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        metricsAreaService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        metricsAreaService.delete(editJson);
        return ThreadContext.getReturnData();
    }

}