package com.gavel.metric.controller;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.ThreadContext;
import com.gavel.metric.persistent.Metrics;
import com.gavel.metric.service.MetricsAreaService;
import com.gavel.metric.service.MetricsService;
import com.gavel.metric.vo.MetricsCondition;
import com.gavel.metric.vo.MetricsVO;
import com.gavel.metric.vo.Tag;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping("api/metrics")
public class MetricsSyncController extends BaseController {

    @Autowired
    private MetricsService metricsService;

    @Autowired
    private MetricsAreaService metricsAreaService;

    @RequestMapping(value = "upload", method = RequestMethod.POST)
    @ResponseBody
    public Object upload(@RequestBody JSONObject param) {

        try {
            String aeraid =  param.getString("aeraid");
            List<Tag> tags = DataConvert.getData2List(param.getJSONArray("metrics"), Tag.class);
            metricsService.upload(aeraid, tags);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "areareg", method = RequestMethod.POST)
    @ResponseBody
    public Object areareg(@RequestBody JSONObject param) {

        try {
            String code =  param.getString("code");
            String name =  param.getString("name");
            String host =  param.getString("host");
            metricsAreaService.areaReg(code, name, host);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

}