package com.gavel.report.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.db.entity.Reporttemp;
import com.gavel.report.model.SheetData;
import com.gavel.report.model.SpreadsheetDataContent;
import com.gavel.report.service.ReportinstService;
import com.gavel.report.service.ReporttempService;
import com.gavel.report.vo.ReporttempCondition;
import com.gavel.report.vo.ReporttempVO;

@Controller
@RequestMapping("report/reporttemp")
public class ReporttempController extends BaseController {

    @Autowired
    private ReporttempService reporttempService;
    
    @Autowired
    private ReportinstService reportinstService;

    @RequestMapping("/index")
    public String index() {
        return "report/reporttemp/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "report/reporttemp/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "report/reporttemp/edit";
    }

    @RequestMapping(value = "/get", method = RequestMethod.POST)
    @ResponseBody
    public Object getOld(@RequestBody JSONObject param) {
        ReporttempCondition condition = DataConvert.getCondition(param, ReporttempCondition.class);
        if (StringUtils.isEmpty(condition.getId())) {
        	setReturnMessage("id不允许为空！");
        	return ThreadContext.getReturnData();
        }
        return buildReturnData(ReporttempVO.class, reporttempService.queryById(condition.getId()));
    }
    
    @RequestMapping(value = "/get/new", method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        ReporttempCondition condition = DataConvert.getCondition(param, ReporttempCondition.class);
        if (StringUtils.isEmpty(condition.getId())) {
        	setReturnMessage("id不允许为空！");
        	return ThreadContext.getReturnData();
        }
        ReporttempVO reporttempVO = reporttempService.queryById(condition.getId());
        if (reporttempVO != null) {
        	reporttempVO.setBbnr(reportinstService.converToDocument(reporttempVO.getBbnr()).toString());
        }
        return buildReturnData(ReporttempVO.class, reporttempVO);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        ReporttempCondition condition = DataConvert.getCondition(param, ReporttempCondition.class);
        RecordSet<ReporttempVO> records = reporttempService.query(condition);
        return buildReturnData(records, ReporttempVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        reporttempService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        reporttempService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        reporttempService.delete(editJson);
        return ThreadContext.getReturnData();
    }
   
    @RequestMapping(value = "/creategnmk", method = RequestMethod.POST)
    @ResponseBody
    public Object publish(@RequestBody JSONObject param){
        String bbbm = param.getString("bbbm");
        try {
            reporttempService.publish(bbbm);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }


    @RequestMapping(value = "/unpublish", method = RequestMethod.POST)
    @ResponseBody
    public Object unpublish(@RequestBody JSONObject param){
        String bbbm = param.getString("bbbm");
        try {
            reporttempService.unpublish(bbbm);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping("module/{bbbm}")
    public String modulepage(@PathVariable String bbbm, Model model) {
        model.addAttribute("bbbm", bbbm);

        return "modulepage/index";
    }

    @RequestMapping("content/{bbbm}")
    public String content(@PathVariable String bbbm, Model model) {
        model.addAttribute("bbbm", bbbm);

        Reporttemp reporttemp = reporttempService.loadReporttemp(bbbm);

        model.addAttribute("content", reporttemp.getBbnr());

        return "reporttemp/content";
    }

    @RequestMapping("update/{bbbm}")
    @ResponseBody
    public Object update(@PathVariable String bbbm, @RequestBody JSONObject param) {

        try {
            reporttempService.updateBbnr(bbbm, param);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/design/v2/{id}")
    public String display_2(@PathVariable String id, Model model) {

        Reporttemp reporttemp = reporttempService.queryById(id);


        model.addAttribute("id", id);

        model.addAttribute("reporttemp", reporttemp);

        return "reporttemp/index_v2";
    }

    @RequestMapping("sheet/save/{id}")
    @ResponseBody
    public Object sheetsave(@PathVariable String id, @RequestBody JSONObject param) {

        System.out.println(param.toJSONString());
        SpreadsheetDataContent spreadsheet = JSONObject.toJavaObject(param, SpreadsheetDataContent.class);
        try {
            reporttempService.saveSpreadsheet(id, spreadsheet);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/query/v2/{id}")
    @ResponseBody
    public Object query_2(@PathVariable String id) {
        SheetData sheetData = reporttempService.querySheetData(id);
        return sheetData;
    }
}
