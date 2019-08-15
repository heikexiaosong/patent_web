package com.gavel.patent.service.impl;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.patent.persistent.Jfxx;
import com.gavel.patent.service.AjxxService;
import com.gavel.patent.service.JfxxService;
import com.gavel.patent.vo.AjxxCondition;
import com.gavel.patent.vo.AjxxVO;
import com.gavel.persistence.sql.RecordSet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.patent.dao.DailytaskDao;
import com.gavel.patent.persistent.Dailytask;
import com.gavel.patent.service.DailytaskService;
import com.gavel.patent.vo.DailytaskCondition;
import com.gavel.patent.vo.DailytaskVO;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@Service("dailytaskService")
@Transactional
public class DailytaskServiceImpl extends BaseEditServiceImpl implements DailytaskService {

    private static Logger LOG = LoggerFactory.getLogger(DailytaskService.class);

    @Autowired
    private DailytaskDao dailytaskDao;

    @Autowired
    private CommonService commonService;

    @Autowired
    private AjxxService ajxxService;

    @Autowired
    private JfxxService jfxxService;


    @Override
    public void initService() {
        addMaster(new Dailytask());
    }

    @Override
	public RecordSet<DailytaskVO> query(DailytaskCondition condition) {
	    return dailytaskDao.query(condition);
	}

    @Override
    public void exec() {


        Date today = Calendar.getInstance().getTime();

        DailytaskCondition condition = new DailytaskCondition();
        condition.setStart(today);
        condition.setEnd(today);

        RecordSet<DailytaskVO>  dailytaskVORecordSet =  dailytaskDao.query(condition);
        if ( dailytaskVORecordSet!=null && dailytaskVORecordSet.getRecords().size() > 0 ){
            LOG.info("[日期: " + today + "]任务已经执行...");
            return;
        }

        Dailytask dailytask = new Dailytask();
        dailytask.setThedate(today);
        dailytask.setTime(today);
        dailytask.setStat("COMPLETE");
        //dailytask.setType("COSTSCAN");
        dailytaskDao.insert(dailytask);


        // 生成待缴费信息
        AjxxCondition ajxxCondition = new AjxxCondition();
        ajxxCondition.setNfjk("Y");
        RecordSet<AjxxVO> ajxxRecord = ajxxService.query(ajxxCondition);
        if ( ajxxRecord!=null && ajxxRecord.getRecords().size()>0 ){

            List<Jfxx> jfxxList = jfxxService.loadJfxx(Calendar.getInstance().get(Calendar.YEAR));

            Set<String> codeSet = jfxxList.stream()
                                          .map( Jfxx::getCode )
                                          .collect(Collectors.toSet());

            for (AjxxVO ajxxVO : ajxxRecord.getRecords()) {
                if ( codeSet.contains(ajxxVO.getCode()) ){
                    continue;
                }

                if ( ajxxVO.getSqrq()==null ){
                    continue;
                }


                Jfxx jfxx = new Jfxx();
                jfxx.setCode(ajxxVO.getCode());
                jfxx.setSqmc(ajxxVO.getSqmc());
                jfxx.setFymc(Calendar.getInstance().get(Calendar.YEAR) +" 年度费用");
                jfxx.setSqh(ajxxVO.getSqh());
                jfxx.setJfje(ajxxVO.getSqf());


                Calendar calendar = Calendar.getInstance();
                calendar.setTime(ajxxVO.getSqrq());
                calendar.set(Calendar.YEAR, Calendar.getInstance().get(Calendar.YEAR));
                jfxx.setJfqx(calendar.getTime());
                jfxx.setYear(Calendar.getInstance().get(Calendar.YEAR));
                jfxx.setZt("pending");

                jfxxService.insert(jfxx);
            }
        }



       int interval = 7;
       String intervalStr = commonService.getStringOptionValue("ALERT_INTERVAL");
       if ( intervalStr!=null && intervalStr.length()>0 ){
           try {
               interval = Integer.parseInt(intervalStr);
           } catch (Exception e){
               LOG.error("告警天数解析失败[Value: " + intervalStr + "]");
           }
       }

       if ( interval<=3 || interval >= 30 ){
           interval = 7;
       }

       LOG.error("告警天数: " + interval);





    }

}
