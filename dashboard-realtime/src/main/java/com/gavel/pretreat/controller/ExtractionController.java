package com.gavel.pretreat.controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.pretreat.service.ExtractionService;
import com.gavel.pretreat.service.PretreatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/api/rtdata")
public class ExtractionController {

    @Autowired
    private ExtractionService extractionService;

    @Autowired
    private PretreatService pretreatService;

    /**
     *
     * Example:
     *  Request URI:        /api/rtdata/extraction?bustCache=0.1544898826072596
     *  Content-Type:       application/json
     *  Request Method:     POST     *
     *  Header:
     *                      version: api.json.v1
     *  Payload:
     *                      {
     *                          "theDate": "2019-03-19 14:00:00",
     *                         "metrics": ["shaojie1.peiliao.XLL1", "shaojie1.peiliao.XLL2"]
     *                      }
     *
     *
     * @param param
     * @return
     */
    @RequestMapping(value="/extraction")
    @ResponseBody
    public Object extraction(@RequestBody JSONObject param) {

        try {

            Date theDate =  param.getDate("theDate");

            JSONArray array =  param.getJSONArray("metrics");

            List<String> metrics = new ArrayList<>();
            for (Object o : array) {
                metrics.add(o.toString());
            }

            Object recordSet = extractionService.extraction(theDate, metrics);
            ThreadContext.getReturnData().add(recordSet);
        } catch (Exception e) {
            e.printStackTrace();
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }

        return ThreadContext.getReturnData();

    }

    @RequestMapping(value="/process")
    @ResponseBody
    public Object process(@RequestBody JSONObject param) {
        try {
            Date theDate =  param.getDate("theDate");
            String code =  param.getString("code");
            pretreatService.process(code, theDate);
        } catch (Exception e) {
            e.printStackTrace();
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    static class API {

        public static final String API_JSON_V1 = "version=api.json.v1";

    }

}
