package com.gavel.patent.controller;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.BaseURL;
import com.gavel.common.base.BaseEditJSON;
import com.gavel.common.base.controller.BaseController;
import com.gavel.common.converter.DataConvert;
import com.gavel.common.excel.DefaultDataConverter;
import com.gavel.common.excel.ExcelColumnSelector;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.excel.ExcelUtilsBuilder;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.ThreadContext;
import com.gavel.common.utils.UserInfoUtil;
import com.gavel.patent.service.AjxxService;
import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;
import com.gavel.persistence.sql.RecordSet;
import com.google.common.collect.Sets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Set;

@Controller
@RequestMapping("patent/copyright")
public class CopyrightController extends BaseController {

    @Autowired
    private AjxxService ajxxService;

    @RequestMapping("/index")
    public String index() {
        if (UserInfoUtil.isRole("admin")){
            return "patent/copyright/admin";
        }

        return "patent/copyright/index";
    }

    @RequestMapping("/add")
    public String add() {
        return "patent/copyright/edit";
    }

    @RequestMapping("/edit")
    public String edit() {
        return "patent/copyright/edit";
    }

    @RequestMapping(value = BaseURL.GET, method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody JSONObject param) {
        AjxxCondition condition = DataConvert.getCondition(param, AjxxCondition.class);
        RecordSet<AjxxVO> records = ajxxService.query(condition);
        if ( records.getRecords()!=null && records.getRecords().size()>=1 ){
            return buildReturnData(AjxxVO.class, records.getRecords().get(0));
        }
        return buildReturnData(AjxxVO.class, null);
    }

    @RequestMapping(value = BaseURL.QUERY, method = RequestMethod.POST)
    @ResponseBody
    public Object query(@RequestBody JSONObject param) {
        AjxxCondition condition = DataConvert.getCondition(param, AjxxCondition.class);
        condition.setFilter(!UserInfoUtil.isRole("admin"));
        RecordSet<AjxxVO> records = ajxxService.query(condition);
        return buildReturnData(records, AjxxVO.class);
    }

    @RequestMapping(value = BaseURL.ADD, method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        ajxxService.insert(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.UPDATE, method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        ajxxService.update(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.DELETE, method = RequestMethod.POST)
    @ResponseBody
    public Object delete(@RequestBody JSONObject param) {
        BaseEditJSON editJson = BaseEditJSON.parseJSON(param);
        ajxxService.delete(editJson);
        return ThreadContext.getReturnData();
    }

    @RequestMapping(value = BaseURL.EXPORT, method = RequestMethod.POST)
    @ResponseBody
    public void export(HttpServletResponse response, @RequestBody JSONObject param) throws Exception {
        AjxxCondition condition = DataConvert.getCondition(param, AjxxCondition.class);
        RecordSet<AjxxVO> records = ajxxService.query(condition);

        final String fileName= "案件管理-" + DateUtils.getDatetimeStr("yyyyMMdd") + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes(), "ISO-8859-1"));

        OutputStream ouputStream = response.getOutputStream();

        ExcelUtils excelUtils = new ExcelUtilsBuilder()
                .setDataConverter(new DataConverter())
                .setColumnSelector(new ColumnFilter())
                .build();
        excelUtils.write(ouputStream, records.getRecords(), AjxxVO.class);
        ouputStream.flush();
        ouputStream.close();
    }

    class DataConverter extends DefaultDataConverter {
        @Override
        public String convert(String fieldName, String value) {
		    return value;
        }
    }

    class ColumnFilter implements ExcelColumnSelector {
        Set<String> attributeNames = Sets.newHashSet("id", "type", "whrid", "whr", "whsj", "sysversion");
        
        @Override
        public boolean accept(String fieldName) {
            if ( attributeNames.contains(fieldName) ){
                return false;
            }
            return true;
        }
    }

    @RequestMapping("/importpage")
    public String importpage() {
        return "patent/copyright/importpage";
    }


    @RequestMapping(value="/excel/import")
    @ResponseBody
    public Object excelImport(HttpServletRequest request) {

        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        MultiValueMap<String, MultipartFile> multiValueMap = multipartRequest.getMultiFileMap();

        for (MultipartFile multipartFile : multiValueMap.toSingleValueMap().values()) {
            System.out.println("=================" + multipartFile.getOriginalFilename() + "; size ==>: " + multipartFile.getSize());

            try {
                InputStream ins = multipartFile.getInputStream();
                ajxxService.imp(ins);
                ins.close();

                ThreadContext.getReturnData().setSuccess(true);
                ThreadContext.getReturnData().setMessage("数据导入成功！");
            } catch (Exception e) {
                e.printStackTrace();
                ThreadContext.getReturnData().setSuccess(false);
                ThreadContext.getReturnData().setMessage("数据导入失败！");
            }

        }

        return ThreadContext.getReturnData();

    }

}
