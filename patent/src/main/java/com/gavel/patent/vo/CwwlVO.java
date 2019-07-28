package com.gavel.patent.vo;

import com.gavel.patent.persistent.Cwwl;
import com.gavel.persistence.annotation.FieldMeta;


public class CwwlVO extends Cwwl {

    @FieldMeta(fieldName = "CWWL_YWYMC", caption = "业务员", index = 18)
    private String ywymc;
    @FieldMeta(fieldName = "CWWL_WQRYMC", caption = "外勤", index = 20)
    private String wqrymc;
    @FieldMeta(fieldName = "CWWL_NQRYMC", caption = "内勤", index = 20)
    private String nqrymc;

    public String getYwymc() {
        return ywymc;
    }

    public void setYwymc(String ywymc) {
        this.ywymc = ywymc;
    }

    public String getWqrymc() {
        return wqrymc;
    }

    public void setWqrymc(String wqrymc) {
        this.wqrymc = wqrymc;
    }

    public String getNqrymc() {
        return nqrymc;
    }

    public void setNqrymc(String nqrymc) {
        this.nqrymc = nqrymc;
    }


    /*---------AutoBegin-----------*/
	/*---------AutoEnd-------------*/

}
