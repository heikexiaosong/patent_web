package com.gavel.trend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.ThreadContext;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.trend.db.entity.Qszt;
import com.gavel.trend.service.QsztService;
import com.gavel.trend.service.QsztmxService;
import com.gavel.trend.vo.QsztCondition;
import com.gavel.trend.vo.QsztVO;
import com.gavel.trend.vo.QsztmxCondition;
import com.gavel.trend.vo.QsztmxVO;

@Controller
@RequestMapping("trend/qsztrealtime")
public class QsztRealTimeController extends BaseController {
	@Autowired
    private QsztService qsztService;
	
	@Autowired
	private QsztmxService qsztmxService;

    @RequestMapping("/index")
    public String index() {
        return "trend/qst/index";
    }

    @RequestMapping("/add")
    public String addindex() {
        return "trend/qst/edit";
    }

    @RequestMapping("/edit")
    public String editindex() {
        return "trend/qst/edit";
    }

    public static final String TYPE="now";
    
    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        QsztCondition condition = DataConvert.getCondition(param, QsztCondition.class);
        condition.setType(TYPE);
        RecordSet<QsztVO> records = qsztService.query(condition);
        return buildReturnData(records, QsztVO.class);
    }
    
    @RequestMapping(value = BaseURL.QUERY_DETAIL, method = RequestMethod.POST)
    @ResponseBody
    public Object queryDetail(@RequestBody JSONObject param) {
    	QsztmxCondition condition = DataConvert.getCondition(param, QsztmxCondition.class);
        RecordSet<QsztmxVO> records = qsztmxService.query(condition);
        return buildReturnData(records, QsztmxVO.class);
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
    
    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    @ResponseBody
    public Object publish(@RequestBody JSONObject param) {
    	QsztCondition qsztCondition = DataConvert.getCondition(param, QsztCondition.class);
    	if (StringUtils.isEmpty(qsztCondition.getId())) {
    		setReturnMessage("请指定要发布的数据！");
    		return ThreadContext.getReturnData();
    	}
    	qsztService.publish(qsztCondition.getId());
    	return ThreadContext.getReturnData();    
    }
}
