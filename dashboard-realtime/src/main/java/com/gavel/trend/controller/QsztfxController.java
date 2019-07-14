package com.gavel.trend.controller;

import com.gavel.rtdatacfg.config.TrendResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.gavel.rtdatacfg.config.ChartData;
import com.gavel.rtdatacfg.config.Config;
import com.gavel.common.BaseURL;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.metric.vo.QsztfxCondition;
import com.gavel.trend.dao.QsztDao;
import com.gavel.trend.db.entity.Qszt;
import com.gavel.trend.service.QsztfxService;


@Controller
@RequestMapping("trend/qsztfx")
public class QsztfxController extends BaseController {

    @Autowired
    private QsztfxService qsztfxService;
    
    @Autowired
    private QsztDao qsztDao;

    @RequestMapping("/index")
    public String index() {
        return "trend/qsztfx/index";
    }
    
    @RequestMapping("/{id}")
    public String realtimeIndex(@PathVariable String id, Model model) {
    	Qszt qszt = qsztDao.queryById(Qszt.class, id);
    	model.addAttribute("id", id);
    	if (StringUtils.equalsIgnoreCase(qszt.getCharttype(), "bar"))
    		return "rtdata/trend/bar";
    	else
    		return "rtdata/trend/line";
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
    	QsztfxCondition condition = DataConvert.getData(param, QsztfxCondition.class);
        if (StringUtils.isEmpty(condition.getId())) {
        	setReturnMessage("请指定需要分析的主题！");
        	return returnData();
        }
        if (condition.getStarTtime() == null) {
        	setReturnMessage("必须指定开始时间！");
        	return returnData();
        }
        if (condition.getEndTime() == null) {
        	setReturnMessage("必须指定结束时间！");
        	return returnData();
        }
        if (condition.getStarTtime().getTime() >= condition.getEndTime().getTime()) {
        	setReturnMessage("开始时间必须小于结束时间！");
        	return returnData();
        }
        ChartData chartData = qsztfxService.loadCharData(condition.getId(), condition.getStarTtime(), condition.getEndTime());
        ThreadContext.getReturnData().add("trenddata", chartData);
        return returnData();
    }
    
    @RequestMapping(value = "loaddata/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object loaddata(@PathVariable String id) {
        try{
            ChartData chartData = qsztfxService.loadCharData(id);
            ThreadContext.getReturnData().add("trenddata", chartData);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }
    
    @RequestMapping(value = "config/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object loadConfig(@PathVariable String id) {
        try{
        	Config result = qsztfxService.loadConfig(id);
            ThreadContext.getReturnData().add("config", result);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }


    @RequestMapping(value = "searchdata/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object searchdata(@PathVariable String id) {
        try{
            TrendResult trendResult = qsztfxService.loadTrendData(id);
            ThreadContext.getReturnData().add("trenddata", trendResult);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

}