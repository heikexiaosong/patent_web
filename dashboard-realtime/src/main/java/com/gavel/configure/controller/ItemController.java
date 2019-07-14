package com.gavel.configure.controller;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.ReturnData;
import com.gavel.common.utils.ThreadContext;
import com.gavel.configure.service.ItemService;
import com.gavel.configure.vo.ItemCondition;
import com.gavel.configure.vo.ItemVO;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("configure/item")
public class ItemController extends BaseController {

    @Autowired
    private ItemService itemService;

    @RequestMapping("/index")
    public String index() {
        return "configure/item/index";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        ItemCondition condition = DataConvert.getCondition(param, ItemCondition.class);
        RecordSet<ItemVO> records = itemService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(ItemVO.class, records.getRecords().get(0));
        }
        return buildReturnData(ItemVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        ItemCondition condition = DataConvert.getCondition(param, ItemCondition.class);
        RecordSet<ItemVO> records = itemService.query(condition);
        return buildReturnData(records, ItemVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        itemService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        itemService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        itemService.delete(editJson);
        return ThreadContext.getReturnData();
    }

}
