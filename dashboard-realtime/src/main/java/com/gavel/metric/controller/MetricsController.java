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
import com.gavel.metric.service.MetricsService;
import com.gavel.metric.vo.MetricsCondition;
import com.gavel.metric.vo.MetricsVO;



@Controller
@RequestMapping("metric/metrics")
public class MetricsController extends BaseController {

    @Autowired
    private MetricsService metricsService;

    @RequestMapping("/index")
    public String index() {
        return "metric/metrics/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "metric/metricsArea/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "metric/metrics/edit";
    }
    
    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        MetricsCondition condition = DataConvert.getCondition(param, MetricsCondition.class);
        RecordSet<MetricsVO> records = metricsService.query(condition);
        return buildReturnData(records, MetricsVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        metricsService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        metricsService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        metricsService.delete(editJson);
        return ThreadContext.getReturnData();
    }

}