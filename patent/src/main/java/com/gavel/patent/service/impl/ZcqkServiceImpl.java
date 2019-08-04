package com.gavel.patent.service.impl;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.utils.UserInfoUtil;
import com.gavel.kzzx.dao.UserRoleDao;
import com.gavel.kzzx.persistent.UserRole;
import com.gavel.patent.dao.ProcessDao;
import com.gavel.patent.dao.ZcqkDao;
import com.gavel.patent.persistent.Zcqk;
import com.gavel.patent.service.ZcqkService;
import com.gavel.patent.vo.ZcqkCondition;
import com.gavel.patent.vo.ZcqkVO;
import com.gavel.persistence.sql.RecordSet;
import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;


@Service("zcqkService")
@Transactional
public class ZcqkServiceImpl extends BaseEditServiceImpl implements ZcqkService {


    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    @Autowired
    private ZcqkDao zcqkDao;

    @Autowired
    private ProcessDao processDao;

    @Autowired
    private UserRoleDao userRoleDao;

    @Override
    public void initService() {
        addMaster(new Zcqk());
    }

    @Override
    public void beforeInsert(BaseEntity entity) {
        if ( entity!=null && entity instanceof Zcqk) {
            Zcqk zcqk = (Zcqk) entity;
            zcqk.setZt("I");
        }
    }

    @Override
    public void beforeDelete(BaseEntity entity) {
        if ( entity!=null && entity instanceof Zcqk) {
            Zcqk zcqk = (Zcqk) entity;
            Zcqk record = zcqkDao.queryById(Zcqk.class, zcqk.getId());
            if ( record!=null && !"I".equalsIgnoreCase(record.getZt()) ){
                throw new RuntimeException("流程已提交, 不能删除.");
            }
        }
    }

    @Override
	public RecordSet<ZcqkVO> query(ZcqkCondition condition) {
        RecordSet<ZcqkVO> zcqkVORecordSet = zcqkDao.query(condition);
        if ( zcqkVORecordSet==null || zcqkVORecordSet.getRecords()==null ){
            return zcqkVORecordSet;
        }

        Set<String> idSet = new CopyOnWriteArraySet<>();
        Iterator<ZcqkVO> it = zcqkVORecordSet.getRecords().iterator();
        while ( it.hasNext() ) {
            ZcqkVO obj = it.next();
            if ( !idSet.add(obj.getId()) ){
                it.remove();
            }
        }
        return zcqkVORecordSet;
	}

    @Override
    public void workflow(Zcqk zcqk, String operate, String userId) {

        // I: 初始化; P: 提交待总经理审批; W: 待财务打款; C: 打款完成， 流程总结

        Zcqk record = zcqkDao.queryById(Zcqk.class, zcqk.getId());

        if ( record==null ) {
            throw new RuntimeException("找不到对应的单据信息，请联系管理员");
        }

        if ( record!=null && "C".equalsIgnoreCase(record.getZt()) ){
            throw new RuntimeException("流程已完成, 不能进行操作.");
        }

        boolean isManager = false;

        if (Strings.isNullOrEmpty(record.getZt()) || "I".equalsIgnoreCase(record.getZt()) ){

            if ( !UserInfoUtil.getUserId().equalsIgnoreCase(record.getQkr()) ){
                throw new RuntimeException("只能由本人发起请款申请.");
            }

            UserRole manager = new UserRole();
            manager.setRoleid("manager");
            List<UserRole> userRoleList = userRoleDao.queryListByEntity(manager);

            StringBuilder builder = new StringBuilder();
            if ( userRoleList!=null && userRoleList.size()>0 ){
                for (UserRole userRole : userRoleList) {
                    builder.append(userRole.getUserid()).append(";");
                    if ( userRole.getUserid().equalsIgnoreCase(UserInfoUtil.getUserId()) ){
                        isManager = true;
                    }
                }
            }

            if ( !isManager ) {
                com.gavel.patent.persistent.Process process = new com.gavel.patent.persistent.Process();
                process.setBid(record.getId());
                process.setType("支出请款");
                process.setName("["  + DATE_FORMAT.format(Calendar.getInstance().getTime()) + "]" + UserInfoUtil.getUserName() + "的支出请款申请");
                process.setStep(1);
                process.setZt("P"); // P: 待处理; C: 处理完成
                process.setDclr(builder.toString());
                processDao.insert(process);

                record.setZt("P");
                zcqkDao.update(record);
            } else {
                UserRole financial = new UserRole();
                financial.setRoleid("financial");
                userRoleList = userRoleDao.queryListByEntity(financial);

                builder.delete(0, builder.length()-1);
                if ( userRoleList!=null && userRoleList.size()>0 ){
                    for (UserRole userRole : userRoleList) {
                        builder.append(userRole.getUserid()).append(";");
                    }
                }

                com.gavel.patent.persistent.Process process = new com.gavel.patent.persistent.Process();
                process.setBid(record.getId());
                process.setType("支出请款");
                process.setName("["  + DATE_FORMAT.format(Calendar.getInstance().getTime()) + "]" + UserInfoUtil.getUserName() + "的支出请款申请");
                process.setStep(1);
                process.setZt("P"); // P: 待处理; C: 处理完成
                process.setDclr(builder.toString());
                processDao.insert(process);

                record.setZt("W");
                zcqkDao.update(record);
            }
            return;
        }

        // P W

        com.gavel.patent.persistent.Process params = new com.gavel.patent.persistent.Process();
        params.setBid(record.getId());
        params.setZt("P");
        com.gavel.patent.persistent.Process step = processDao.queryByEntity(params);
        if ( step==null || Strings.isNullOrEmpty(step.getDclr()) ){
            throw new RuntimeException("流程信息丢失, 无法处理流程， 请联系管理员.");
        }

        String dclr = step.getDclr();
        if ( !dclr.contains(UserInfoUtil.getUserId()) ) {
            throw new RuntimeException("您无权处理此申请.");
        }

        if ( "P".equalsIgnoreCase(record.getZt()) ){

            if ( operate!=null && "2".equalsIgnoreCase(operate.trim()) ){

                step.setZt("C");
                step.setOpera("打回");
                step.setClr(UserInfoUtil.getUserId());
                step.setClsj(Calendar.getInstance().getTime());
                processDao.update(step);

                record.setZt("I"); // P: 待处理; C: 处理完成
                zcqkDao.update(record);


            } else {
                UserRole financial = new UserRole();
                financial.setRoleid("financial");
                List<UserRole> userRoleList = userRoleDao.queryListByEntity(financial);

                StringBuilder builder = new StringBuilder();
                if ( userRoleList!=null && userRoleList.size()>0 ){
                    for (UserRole userRole : userRoleList) {
                        builder.append(userRole.getUserid()).append(";");
                    }
                }


                com.gavel.patent.persistent.Process nextStep = new com.gavel.patent.persistent.Process();
                nextStep.setBid(record.getId());
                nextStep.setType(step.getType());
                nextStep.setName(step.getName());
                nextStep.setStep(step.getStep() + 1);
                nextStep.setZt("P");
                nextStep.setDclr(builder.toString());
                processDao.insert(nextStep);

                step.setZt("C");
                step.setOpera("同意");
                step.setClr(UserInfoUtil.getUserId());
                step.setClsj(Calendar.getInstance().getTime());
                processDao.update(step);

                record.setZt("W"); // P: 待处理; C: 处理完成
                zcqkDao.update(record);
            }
            return;
        }


        if ( "W".equalsIgnoreCase(record.getZt()) ){

            com.gavel.patent.persistent.Process nextStep = new com.gavel.patent.persistent.Process();
            nextStep.setBid(record.getId());
            nextStep.setType(step.getType());
            nextStep.setName(step.getName());
            nextStep.setStep(step.getStep() + 1);
            nextStep.setZt("C");
            nextStep.setClr(record.getQkr());
            step.setOpera("完成");
            processDao.insert(nextStep);

            step.setZt("C");
            step.setClr(UserInfoUtil.getUserId());
            step.setClsj(Calendar.getInstance().getTime());
            processDao.update(step);

            record.setZt("C"); // P: 待处理; C: 处理完成
            zcqkDao.update(record);
            return;
        }
    }

}
