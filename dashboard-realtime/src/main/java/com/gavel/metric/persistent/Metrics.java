package com.gavel.metric.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;



@TableMeta(id = "METRICS", name = "METRICS")
public class Metrics extends BaseEntity {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(fieldName = "METRICS_ID", caption = "ID", primaryKey = true, length = 32, notEmpty = true, codeStrategy = CodeStrategy.UUID)
    private String id;
	@FieldMeta(fieldName = "METRICS_METRIC", caption = "指标", length = 100, notEmpty = true)
    private String metric;
	@FieldMeta(fieldName = "METRICS_NAME", caption = "名称", length = 60, notEmpty = true)
    private String name;
	@FieldMeta(fieldName = "METRICS_UNIT", caption = "单位", length = 10)
    private String unit;
	@FieldMeta(fieldName = "METRICS_AERAID", caption = "所属采集区", length = 32)
    private String aeraid;
	@FieldMeta(fieldName = "METRICS_BZ", caption = "备注", length = 255)
    private String bz;
	@FieldMeta(fieldName = "METRICS_CJRID", caption = "创建人编码", length = 20)
    private String cjrid;
	@FieldMeta(fieldName = "METRICS_CJR", caption = "创建人", length = 30)
    private String cjr;
	@FieldMeta(fieldName = "METRICS_CJSJ", caption = "创建时间")
    private Date cjsj;
	@FieldMeta(fieldName = "METRICS_WHRID", caption = "维护人编码", length = 20, autoUserId = true)
    private String whrid;
	@FieldMeta(fieldName = "METRICS_WHR", caption = "维护人", length = 30, autoUserName = true)
    private String whr;
	@FieldMeta(fieldName = "METRICS_WHSJ", caption = "维护时间", autoDateTime = true)
    private Date whsj;
	@FieldMeta(fieldName = "METRICS_SYSVERSION", caption = "系统版本")
    private Integer sysversion;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };

    public String getMetric() {
        return metric;
    }

    public void setMetric(String metric) {
        this.metric = metric;
    }

    public String getName(){
        return name;
    };

    public void setName(String name){
        this.name = name;
    };

    public String getUnit(){
        return unit;
    };

    public void setUnit(String unit){
        this.unit = unit;
    };

    public String getAeraid(){
        return aeraid;
    };

    public void setAeraid(String aeraid){
        this.aeraid = aeraid;
    };

    public String getBz(){
        return bz;
    };

    public void setBz(String bz){
        this.bz = bz;
    };

    public String getCjrid(){
        return cjrid;
    };

    public void setCjrid(String cjrid){
        this.cjrid = cjrid;
    };

    public String getCjr(){
        return cjr;
    };

    public void setCjr(String cjr){
        this.cjr = cjr;
    };

    public Date getCjsj(){
        return cjsj;
    };

    public void setCjsj(Date cjsj){
        this.cjsj = cjsj;
    };

    public String getWhrid(){
        return whrid;
    };

    public void setWhrid(String whrid){
        this.whrid = whrid;
    };

    public String getWhr(){
        return whr;
    };

    public void setWhr(String whr){
        this.whr = whr;
    };

    public Date getWhsj(){
        return whsj;
    };

    public void setWhsj(Date whsj){
        this.whsj = whsj;
    };

    public Integer getSysversion(){
        return sysversion;
    };

    public void setSysversion(Integer sysversion){
        this.sysversion = sysversion;
    };

	/*---------AutoEnd-------------*/

}






