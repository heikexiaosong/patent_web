package com.gavel.trend.db.entity;

import java.util.Date;

import com.gavel.common.base.entity.BaseEntity;
import com.gavel.common.utils.CodeStrategy;
import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.persistence.annotation.TableMeta;



@TableMeta(id = "QSZT", name = "QSZT")
public class Qszt extends BaseEntity {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*---------AutoBegin-----------*/
	@FieldMeta(fieldName = "QSZT_ID", caption = "ID", primaryKey = true, length = 32, codeStrategy = CodeStrategy.UUID)
    private String id;
	@FieldMeta(fieldName = "QSZT_ZTID", caption = "主题编码", length = 20, notEmpty = true)
    private String ztid;
	@FieldMeta(fieldName = "QSZT_ZTMC", caption = "主题名称", length = 60, notEmpty = true)
    private String ztmc;
	@FieldMeta(fieldName = "QSZT_INTERVAL", caption = "采样间隔", notEmpty = true)
	private Integer interval;
	@FieldMeta(fieldName = "QSZT_TIMESPAN", caption = "数据时间范围")
	private Integer timespan;
	@FieldMeta(fieldName = "QSZT_TYPE", caption = "功能类型")  //分为 历史数据分析  和 实时数据展示  history now
	private String type;
	@FieldMeta(fieldName = "QSZT_RATE", caption = "功能类型")  
	private String rate;
	@FieldMeta(fieldName = "QSZT_MKID", caption = "模块号")  
	private String mkid;
	@FieldMeta(fieldName = "QSZT_CHARTTYPE", caption = "图标类型")  
	private String charttype;
	@FieldMeta(fieldName = "QSZT_BZ", caption = "备注")
    private String bz;
	@FieldMeta(fieldName = "QSZT_CJRID", caption = "创建人编码", length = 20)
    private String cjrid;
	@FieldMeta(fieldName = "QSZT_CJR", caption = "创建人", length = 30)
    private String cjr;
	@FieldMeta(fieldName = "QSZT_CJSJ", caption = "创建时间")
    private Date cjsj;
	@FieldMeta(fieldName = "QSZT_WHRID", caption = "维护人编码", length = 20, autoUserId = true)
    private String whrid;
	@FieldMeta(fieldName = "QSZT_WHR", caption = "维护人", length = 30, autoUserName = true)
    private String whr;
	@FieldMeta(fieldName = "QSZT_WHSJ", caption = "维护时间", autoDateTime = true)
    private Date whsj;
	@FieldMeta(fieldName = "QSZT_SYSVERSION", caption = "系统版本")
    private Integer sysversion;

    public String getId(){
        return id;
    };

    public void setId(String id){
        this.id = id;
    };

    public String getZtid(){
        return ztid;
    };

    public void setZtid(String ztid){
        this.ztid = ztid;
    };

    public String getZtmc(){
        return ztmc;
    };

    public void setZtmc(String ztmc){
        this.ztmc = ztmc;
    };

    public Integer getInterval() {
		return interval;
	}

	public void setInterval(Integer interval) {
		this.interval = interval;
	}

	public Integer getTimespan() {
		return timespan;
	}

	public void setTimespan(Integer timespan) {
		this.timespan = timespan;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	public String getMkid() {
		return mkid;
	}

	public void setMkid(String mkid) {
		this.mkid = mkid;
	}

	public String getCharttype() {
		return charttype;
	}

	public void setCharttype(String charttype) {
		this.charttype = charttype;
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






