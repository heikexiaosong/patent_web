package com.gavel.report.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import com.gavel.report.model.SheetData;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
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
import com.gavel.common.Constants;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.db.entity.Reportinst;
import com.gavel.report.db.entity.Reporttemp;
import com.gavel.report.service.ReportinstService;
import com.gavel.report.vo.ReportinstCondition;
import com.gavel.report.vo.ReportinstVO;

@Controller
@RequestMapping("report/reportinst")
public class ReportinstController extends BaseController {

    @Autowired
    private ReportinstService reportinstService;

    @RequestMapping("/page/{bbbm}")
    public String index(@PathVariable String bbbm, Model model) {
        model.addAttribute("bbbm", bbbm);
        Reporttemp reporttemp = reportinstService.loadReporttemp(bbbm);
        model.addAttribute("reporttemp", reporttemp);
        return "reportinst/index";
    }
    
    @RequestMapping("/index")
    public String index() {
        return "report/reportinst/index";
    }


    @RequestMapping(value = "/display/v2/{id}")
    public String display_2(@PathVariable String id, Model model) {
        ReportinstVO reportinst = reportinstService.queryById(id);
        model.addAttribute("id", id);
        model.addAttribute("reportinst", reportinst);
        return "reportinst/index_v2";
    }

    @RequestMapping(value = "/query/v2/{id}")
    @ResponseBody
    public Object query_2(@PathVariable String id) {
        SheetData sheetData = reportinstService.querySheetData(id);
        return sheetData;
    }


    @RequestMapping("/add")
    public String add() {
        return "report/reportinst/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "report/reportinst/edit";
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object get(@PathVariable String id, @RequestBody JSONObject param) {
    	ReportinstVO reportinst = reportinstService.queryById(id);
        return buildReturnData(ReportinstVO.class, reportinst);
    }

    @RequestMapping(value = "/{bbbm}/query", method = RequestMethod.POST)
    @ResponseBody
    public Object query(@PathVariable String bbbm, @RequestBody JSONObject param) {
        ReportinstCondition condition = DataConvert.getCondition(param, ReportinstCondition.class);
        condition.setBbbm(bbbm);
        RecordSet<ReportinstVO> records = reportinstService.query(condition);
        return buildReturnData(records, ReportinstVO.class);
    }
    
    @RequestMapping(value = "/query/old/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object queryById(@PathVariable String id, @RequestBody JSONObject param) {
        Reportinst reportinst = reportinstService.queryById(id);
        return buildReturnData(Reportinst.class, reportinst);
    }
    
    @RequestMapping(value = "/query/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object queryNewById(@PathVariable String id, @RequestBody JSONObject param) {
        Reportinst reportinst = reportinstService.queryById(id);
        if (reportinst != null)
        	reportinst.setBbsj(reportinstService.converToDocument(reportinst.getBbsj()).toString());
        return buildReturnData(Reportinst.class, reportinst);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        reportinstService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        reportinstService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/{bbbm}/delete", method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@PathVariable String bbbm, @RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        reportinstService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/recalculate", method = RequestMethod.POST)
    @ResponseBody
    public Object recalculate(@RequestBody JSONObject param){
        String id = param.getString("id");
        try {
            reportinstService.recalculate(id);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/generate", method = RequestMethod.POST)
    @ResponseBody
    public Object generate(@RequestBody JSONObject param){
        String bbbm = param.getString("bbbm");
        Date theDate = param.getDate("theDate");
        int year = param.getIntValue("year");
        int month = param.getIntValue("month");
        try {
            reportinstService.generate(bbbm, theDate, year, month);
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
        }
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = "/export", method = RequestMethod.POST)
    @ResponseBody
    public void exportExcel(HttpServletResponse response, @RequestBody JSONObject param) throws UnsupportedEncodingException{
    	ReportinstVO reportinstVO = reportinstService.queryById(param.getString(Constants.ID));
    	HSSFWorkbook wb;
    	if (reportinstVO != null)
    		wb = reportinstService.exportExcel(reportinstVO.getBbsj());
    	else
    		wb = reportinstService.exportExcel("");
    	String fileName = (StringUtils.isEmpty(reportinstVO.getBbmc())?reportinstVO.getBbbm():reportinstVO.getBbmc()) +".xls";
    	response.setContentType("application/octet-stream;charset=UTF-8");
        response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(fileName, "UTF-8"));
        response.addHeader("Pargam", "no-cache");
        response.addHeader("Cache-Control", "no-cache");
    	OutputStream os = null;
		try {
			os = response.getOutputStream();
			wb.write(os);
			os.flush();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if(os != null) {
				try {
					os.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
    }
    
    @RequestMapping(value = "/query/bbnr", method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        ReportinstCondition condition = DataConvert.getCondition(param, ReportinstCondition.class);
        if (condition.getBbrq() != null) {
        	condition.setBbrq(DateUtils.getDate(condition.getBbrq()));
        }
        Reportinst reportinst = reportinstService.queryReportContent(condition.getId(), condition.getBbrq(), condition.getYear(), condition.getMonth());
        return buildReturnData(reportinst); 
    }

}
