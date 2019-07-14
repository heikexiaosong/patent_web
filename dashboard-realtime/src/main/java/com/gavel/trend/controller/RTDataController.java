package com.gavel.trend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.gavel.rtdatacfg.config.Config;
import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.vo.RtDataCfgCondition;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.ThreadContext;
import com.gavel.trend.service.RTdataService;

@Controller
@RequestMapping("rtdata/")
public class RTDataController extends BaseController {

    @Autowired
    private RTdataService rtdataService;

    @RequestMapping(value = "loaddata/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object loaddata(@RequestBody JSONObject param) {
        try{
            RtDataCfgCondition condition = DataConvert.getCondition(param, RtDataCfgCondition.class);
            ChartData result = rtdataService.genLineRtdata(condition);
            ThreadContext.getReturnData().add("trenddata", result);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }
    
    @RequestMapping(value = "loadconfig/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object loadConfig(@PathVariable String ltype) {
        try{
        	Config result = rtdataService.loadConfig(ltype);
            ThreadContext.getReturnData().add("config", result);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }
    
    @RequestMapping(value = "loaddata/bar", method = RequestMethod.POST)
    @ResponseBody
    public Object loadDataBar(JSONObject param) {
    	try{
            RtDataCfgCondition condition = DataConvert.getCondition(param, RtDataCfgCondition.class);
            ChartData result = rtdataService.genBarRtdata(condition);
            ThreadContext.getReturnData().add("trenddata", result);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

}
