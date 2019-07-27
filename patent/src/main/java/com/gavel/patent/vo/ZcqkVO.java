package com.gavel.patent.vo;

import com.gavel.patent.persistent.Zcqk;
import com.gavel.persistence.annotation.FieldMeta;


public class ZcqkVO extends Zcqk {



    @FieldMeta(
            fieldName = "USERS_USERNAME",
            caption = "请款人姓名",
            notEmpty = true,
            controlType = "text",
            width = 10,
            index = 2
    )
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    /*---------AutoBegin-----------*/
	/*---------AutoEnd-------------*/

}
