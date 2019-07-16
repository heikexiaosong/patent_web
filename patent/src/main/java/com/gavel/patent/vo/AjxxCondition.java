package com.gavel.patent.vo;

import com.gavel.patent.persistent.Ajxx;

import java.util.Date;


public class AjxxCondition extends Ajxx {

    private Date start;

    private Date end;

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }
}
