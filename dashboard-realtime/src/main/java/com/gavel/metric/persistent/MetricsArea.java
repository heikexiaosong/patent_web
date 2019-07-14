package com.gavel.metric.persistent;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;



@TableMeta(id = "METRICS_AREA", name = "METRICS_AREA")
public class MetricsArea extends BaseEntity {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(fieldName = "METRICS_AREA_ID", caption = "ID", primaryKey = true, length = 32, notEmpty = true, codeStrategy = CodeStrategy.UUID)
    private String id;
	@FieldMeta(fieldName = "METRICS_AREA_CODE", caption = "编码", length = 20, notEmpty = true)
    private String code;
	@FieldMeta(fieldName = "METRICS_AREA_NAME", caption = "采集区名称", length = 100, notEmpty = true)
    private String name;
    @FieldMeta(fieldName = "METRICS_AREA_HOST", caption = "机器采集", length = 100, notEmpty = true)
    private String host;
	@FieldMeta(fieldName = "METRICS_AREA_BZ", caption = "备注", length = 255)
    private String bz;
	@FieldMeta(fieldName = "METRICS_AREA_CJRID", caption = "创建人编码", length = 20)
    private String cjrid;
	@FieldMeta(fieldName = "METRICS_AREA_CJR", caption = "创建人", length = 30)
    private String cjr;
	@FieldMeta(fieldName = "METRICS_AREA_CJSJ", caption = "创建时间")
    private Date cjsj;
	@FieldMeta(fieldName = "METRICS_AREA_WHRID", caption = "维护人编码", length = 20, autoUserId = true)
    private String whrid;
	@FieldMeta(fieldName = "METRICS_AREA_WHR", caption = "维护人", length = 30, autoUserName = true)
    private String whr;
	@FieldMeta(fieldName = "METRICS_AREA_WHSJ", caption = "维护时间", autoDateTime = true)
    private Date whsj;
	@FieldMeta(fieldName = "METRICS_AREA_SYSVERSION", caption = "系统版本")
    private Integer sysversion;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };

    public String getCode(){
        return code;
    };

    public void setCode(String code){
        this.code = code;
    };

    public String getName(){
        return name;
    };

    public void setName(String name){
        this.name = name;
    };

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

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






