package com.gavel.patent.vo;

import com.gavel.patent.persistent.Khgl;
import com.gavel.persistence.annotation.FieldMeta;


public class KhglVO extends Khgl {

	/*---------AutoBegin-----------*/
	/*---------AutoEnd-------------*/

    @FieldMeta(fieldName = "KHGL_NLRY_NAME", caption = "内联人员", index = 13)
    private String khglnlryname;

    @FieldMeta(fieldName = "KHGL_WLRY_NAME", caption = "外联人员", index = 14)
    private String khglwlryname;

    public String getKhglnlryname() {
        return khglnlryname;
    }

    public void setKhglnlryname(String khglnlryname) {
        this.khglnlryname = khglnlryname;
    }

    public String getKhglwlryname() {
        return khglwlryname;
    }

    public void setKhglwlryname(String khglwlryname) {
        this.khglwlryname = khglwlryname;
    }
}
