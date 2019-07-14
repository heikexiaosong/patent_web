package com.gavel.rtdatacfg.controller;

import com.alibaba.fastjson.JSONObject;
import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.service.RtdatacfgService;
import com.gavel.rtdatacfg.vo.RtDataCfgCondition;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.ThreadContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("rtdatacfg/")
public class RtDataCfgController extends BaseController {


    @Autowired
    private RtdatacfgService rtdatacfgService;


    @RequestMapping(value = "searchDatas", method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        try{
            RtDataCfgCondition condition = DataConvert.getCondition(param, RtDataCfgCondition.class);
            ChartData result = rtdatacfgService.genRtdata(condition);
            ThreadContext.getReturnData().add("trenddata", result);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "last", method = RequestMethod.POST)
    @ResponseBody
    public Object last(@RequestBody JSONObject param) {
        try{
            RtDataCfgCondition condition = DataConvert.getCondition(param, RtDataCfgCondition.class);
            ThreadContext.getReturnData().add("trenddata", rtdatacfgService.last(condition));
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }


}
