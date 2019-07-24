package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.excel.ExcelTool;
import com.gavel.common.excel.ExcelUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.UserInfoUtil;
import com.gavel.persistence.sql.RecordSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.KhglDao;
import com.gavel.patent.persistent.Khgl;
import com.gavel.patent.service.KhglService;
import com.gavel.patent.vo.KhglCondition;
import com.gavel.patent.vo.KhglVO;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Objects;


@Service("khglService")
@Transactional
public class KhglServiceImpl extends BaseEditServiceImpl implements KhglService {

    @Autowired
    private KhglDao khglDao;

    @Override
    public void initService() {
        addMaster(new Khgl());
    }

    @Override
	public RecordSet<KhglVO> query(KhglCondition condition) {
	    return khglDao.query(condition);
	}

    @Override
    public void imp(InputStream ins) throws IOException {

        List<Khgl> khglList = ExcelUtils.readRecords(ins,

                row -> Objects.nonNull(row.getCell(0)),

                row -> {

                    System.out.println(row.getRowNum() + " ==> " + ExcelTool.getCellValue(row.getCell(1)));

                    if ( row.getRowNum() == 0 ){
                        return null;
                    }

                    Khgl khgl = new Khgl();
                    khgl.setKhmc(ExcelTool.getCellValue(row.getCell(0)));
                    khgl.setDwmc(ExcelTool.getCellValue(row.getCell(1)));
                    khgl.setLxdh(ExcelTool.getCellValue(row.getCell(2)));
                    khgl.setYx(ExcelTool.getCellValue(row.getCell(3)));
                    khgl.setDz(ExcelTool.getCellValue(row.getCell(4)));
                    khgl.setZyfw(ExcelTool.getCellValue(row.getCell(5)));
                    khgl.setBz(ExcelTool.getCellValue(row.getCell(6)));
                    khgl.setWlry(UserInfoUtil.getUserId());

                    return khgl;

                });

        if (khglList!=null && khglList.size() > 0 ){
            for (Khgl khgl : khglList) {

                Khgl param = new Khgl();

                param.setKhmc(khgl.getKhmc());
                Khgl exist = khglDao.queryByEntity(param);
                if ( exist==null ){
                    khglDao.insert(khgl);
                }
            }
        }

    }

}
