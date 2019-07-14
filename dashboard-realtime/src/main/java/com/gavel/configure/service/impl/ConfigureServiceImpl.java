package com.gavel.configure.service.impl;

import com.gavel.common.base.BaseEditDataSet;
import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.business.service.CommonService;
import com.gavel.common.sql.GavelSql;
import com.gavel.common.utils.StringUtils;
import com.gavel.configure.dao.ConfigureDao;
import com.gavel.configure.dao.ItemDao;
import com.gavel.configure.db.entity.Configure;
import com.gavel.configure.db.entity.Item;
import com.gavel.configure.service.ConfigureService;
import com.gavel.configure.vo.ConfigureCondition;
import com.gavel.configure.vo.ConfigureVO;
import com.gavel.configure.vo.ItemVO;
import com.gavel.kzzx.persistent.Menus;
import com.gavel.kzzx.persistent.Yymk;
import com.gavel.persistence.sql.RecordSet;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.CharSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.Charset;
import java.util.*;


@Service("configureService")
@Transactional
public class ConfigureServiceImpl extends BaseEditServiceImpl implements ConfigureService {

    @Autowired
    private ConfigureDao configureDao;

    @Autowired
    private ItemDao itemDao;

    @Autowired
    private CommonService commonService;

    @Override
    public void initService() {
        addMaster(Configure.class);
        addDetail(Item.class);
    }

    @Override
    public void dataSetBeforePost(BaseEditDataSet dataSet) {
        if ( dataSet==null || dataSet.getMaster() == null ){
            return;
        }

        BaseEntity master =  dataSet.getMaster().dataRecord().entity();
        if ( master != null && master instanceof Configure ){

            List<List<? extends BaseEntity>> details =  dataSet.getDetailList();
            if ( details==null || details.size()==0 ){
                return;
            }

            for (List<? extends BaseEntity> detail : details) {
                if ( detail!=null && detail.size()>0
                        && detail.get(0).dataRecord()!=null
                        && detail.get(0).dataRecord().entity() instanceof Item ){

                    Set<String> itemIds = new HashSet<>();
                    for (BaseEntity entity : detail) {
                        itemIds.add(((Item)entity).getId());
                    }

                    Configure configure = (Configure)master;
                    Item params = new Item();
                    params.setCfgcode(configure.getCode());
                    List<Item> exist_items =  itemDao.queryListByEntity(params);

                    for (Item exist_item : exist_items) {
                        if ( !itemIds.contains(exist_item.getId()) ){
                            itemDao.delete(exist_item);
                        }
                    }
                }

            }
        }

    }

    @Override
	public RecordSet<ConfigureVO> query(ConfigureCondition condition) {
	    return configureDao.query(condition);
	}

    @Override
    public void buildmenu(Configure configure) {

        Configure record =  configureDao.queryById(Configure.class, configure.getId());
        if ( record==null  ){
            throw new RuntimeException("组态图保存之后才能发布.");
        }


        String mkid = record.getBz();
        Yymk exist = configureDao.queryById(Yymk.class, mkid);
        if ( exist!=null ){
            throw new RuntimeException("组态图[" + record.getName() + "]已添加到菜单.");
        }

        long mkId = 840300000 + commonService.getSequence("configure", "seq");

        Menus menus = new Menus();
        menus.setFmkid("840300000");
        menus.setMkid(Long.toString(mkId));
        menus.setName(record.getName());
        menus.setType("C");
        menus.setPosition(2000);
        configureDao.insert(menus);

        Yymk yymk = new Yymk();
        yymk.setZjid("840000000");
        yymk.setMkid(menus.getMkid());
        yymk.setFmkid(menus.getFmkid());
        yymk.setMkmc(record.getName());
        yymk.setFlid("F");
        yymk.setTybz("N");
        yymk.setUrl("configure/configure/rtview/" + record.getId());
        yymk.setPage("E");
        yymk.setGnlx("B,C");
        yymk.setZdy("Y");
        configureDao.insert(yymk);

        record.setBz(menus.getMkid());
        configureDao.update(record);
    }

    @Override
    public void buildRTView(OutputStream outputStream, String id) {

        Configure record =  configureDao.queryById(Configure.class, id);

        int random = new Random().nextInt(62235);

        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("rtview");
        try {
            String org_content = IOUtils.toString(inputStream, Charset.forName("UTF-8"));
            String content = org_content
                    .replace("${code}", record.getCode())
                    .replace("${id}", Integer.toString(random))
                    .replace("${canvas_id}", "canvas_" + Integer.toString(random))
                    .replace("${bgImage}", record.getBackgroup());
            outputStream.write(content.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @Override
    public Configure load(String id) {
        return  configureDao.queryById(Configure.class, id);
    }

}
