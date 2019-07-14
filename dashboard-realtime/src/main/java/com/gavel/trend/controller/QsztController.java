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
import com.gavel.trend.db.entity.Qszt;
import com.gavel.trend.service.QsztService;
import com.gavel.trend.vo.QsztCondition;
import com.gavel.trend.vo.QsztVO;



@Controller
@RequestMapping("trend/qszt")
public class QsztController extends BaseController {

    @Autowired
    private QsztService qsztService;

    @RequestMapping("/index")
    public String index() {
        return "trend/qszt/index";
    }

    @RequestMapping("/add")
    public String addindex() {
        return "trend/qszt/edit";
    }

    @RequestMapping("/edit")
    public String editindex() {
        return "trend/qszt/edit";
    }
    
    public static final String TYPE="history";

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        QsztCondition condition = DataConvert.getCondition(param, QsztCondition.class);
        condition.setType(TYPE);
        RecordSet<QsztVO> records = qsztService.query(condition);
        return buildReturnData(records, QsztVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        Qszt qszt = DataConvert.getData(editJson.getMaster(), Qszt.class);
        qszt.setType(TYPE);
        qsztService.insert(qszt);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        qsztService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        qsztService.delete(editJson);
        return ThreadContext.getReturnData();
    }

}