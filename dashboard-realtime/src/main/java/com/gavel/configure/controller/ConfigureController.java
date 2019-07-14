package com.gavel.configure.controller;

import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.converter.DataConvert;
import com.gavel.configure.db.entity.Configure;
import com.gavel.persistence.sql.RecordSet;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.utils.ThreadContext;
import com.gavel.configure.service.ConfigureService;
import com.gavel.configure.vo.ConfigureCondition;
import com.gavel.configure.vo.ConfigureVO;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.Random;

@Controller
@RequestMapping("configure/configure")
public class ConfigureController extends BaseController {

    @Autowired
    private ConfigureService configureService;

    @RequestMapping("/index")
    public String index() {
        return "configure/configure/index";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        ConfigureCondition condition = DataConvert.getCondition(param, ConfigureCondition.class);
        RecordSet<ConfigureVO> records = configureService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(ConfigureVO.class, records.getRecords().get(0));
        }
        return buildReturnData(ConfigureVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        ConfigureCondition condition = DataConvert.getCondition(param, ConfigureCondition.class);
        RecordSet<ConfigureVO> records = configureService.query(condition);
        return buildReturnData(records, ConfigureVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        configureService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        configureService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        configureService.delete(editJson);
        return ThreadContext.getReturnData();
    }


    @RequestMapping(value = "buildmenu", method = RequestMethod.POST)
    @ResponseBody
    public Object buildmenu(@RequestBody JSONObject param) {

        try {
            Configure configure = DataConvert.getData(param, Configure.class);
            configureService.buildmenu(configure);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }

        return ThreadContext.getReturnData();
    }

    @RequestMapping("/rtview/{id}")
    public Object rtview(@PathVariable String id, Model model) {


        Configure record =  configureService.load(id);

        int random = new Random().nextInt(62235);
        model.addAttribute("code", record.getCode());
        model.addAttribute("id", Integer.toString(random));
        model.addAttribute("canvas_id", "canvas_" + Integer.toString(random));
        model.addAttribute("bgImage", record.getBackgroup());

        return "configure/rtview";
    }


}
