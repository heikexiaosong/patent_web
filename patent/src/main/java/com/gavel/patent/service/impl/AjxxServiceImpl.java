package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.excel.ExcelTool;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.utils.UserInfoUtil;
import com.gavel.patent.persistent.Khgl;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.AjxxDao;
import com.gavel.patent.persistent.Ajxx;
import com.gavel.patent.service.AjxxService;
import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;

import java.io.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Objects;


@Service("ajxxService")
@Transactional
public class AjxxServiceImpl extends BaseEditServiceImpl implements AjxxService {


    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyyMMdd");

    @Autowired
    private AjxxDao ajxxDao;

    @Override
    public void initService() {
        addMaster(new Ajxx());
    }

    @Override
	public RecordSet<AjxxVO> query(AjxxCondition condition) {
	    return ajxxDao.query(condition);
	}

    @Override
    public void imp(InputStream ins) throws Exception {
        List<Ajxx> ajxxList = ExcelUtils.readRecords(ins,

                row -> Objects.nonNull(row.getCell(0)),

                row -> {

                    System.out.println(row.getRowNum() + " ==> " + ExcelTool.getCellValue(row.getCell(1)));

                    if ( row.getRowNum() == 0 ){
                        return null;
                    }

                    Ajxx ajxx = new Ajxx();

                    ajxx.setCode(ExcelTool.getCellValue(row.getCell(0)));
                    ajxx.setBm(UserInfoUtil.getUserId());
                    ajxx.setKh(ExcelTool.getCellValue(row.getCell(2)));
                    ajxx.setSqr(ExcelTool.getCellValue(row.getCell(3)));
                    ajxx.setSqh(ExcelTool.getCellValue(row.getCell(4)));
                    ajxx.setSqmc(ExcelTool.getCellValue(row.getCell(5)));
                    ajxx.setJxr(ExcelTool.getCellValue(row.getCell(6)));
                    try {
                        ajxx.setSqrq(DATE_FORMAT.parse(ExcelTool.getCellValue(row.getCell(7))));
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                    ajxx.setSqf(Integer.parseInt(ExcelTool.getCellValue(row.getCell(8), "0.0")));
                    ajxx.setStat(ExcelTool.getCellValue(row.getCell(9)));
                    ajxx.setNfjk(ExcelTool.getCellValue(row.getCell(10)));
                    ajxx.setZs(ExcelTool.getCellValue(row.getCell(11)));
                    ajxx.setLb(ExcelTool.getCellValue(row.getCell(12)));
                    ajxx.setDjr(ExcelTool.getCellValue(row.getCell(13)));
                    return ajxx;

                });

        if (ajxxList!=null && ajxxList.size() > 0 ){
            for (Ajxx ajxx : ajxxList) {

                Ajxx param = new Ajxx();

                param.setCode(ajxx.getCode());
                Ajxx exist = ajxxDao.queryByEntity(param);
                if ( exist==null ){
                    ajxxDao.insert(ajxx);
                }
            }
        }
    }

    public static void main(String[] args) throws Exception {
        ExcelUtils.readRecords(new FileInputStream(new File("/home/zeus/data/ajxx.xlsx")),

                row -> Objects.nonNull(row.getCell(0)),

                row -> {

                    System.out.println(row.getRowNum() + " ==> " + ExcelTool.getCellValue(row.getCell(1)));

                    if ( row.getRowNum() == 0 ){
                        return null;
                    }

                    Ajxx ajxx = new Ajxx();



                    ajxx.setBm(UserInfoUtil.getUserId());
                    System.out.println(ExcelTool.getCellValue(row.getCell(2)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(3)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(4)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(5)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(6)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(7)));
                    try {
                        System.out.println(DATE_FORMAT.parse(ExcelTool.getCellValue(row.getCell(7))));
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                    System.out.println(ExcelTool.getCellValue(row.getCell(9)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(10)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(11)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(12)));
                    System.out.println(ExcelTool.getCellValue(row.getCell(13)));
                    return ajxx;

                });
    }

}
