package com.gavel.pretreat.vo;


import com.gavel.persistence.annotation.FieldMeta;
import com.gavel.pretreat.db.entity.Datapoint;

public class DatapointVO extends Datapoint {

	/**
	 * 
	 */
	private static final long serialVersionUID = -128965535261156844L;
	/*---------AutoBegin-----------*/
	@FieldMeta(fieldName = "ITEM_NAME", caption = "点名称")
	private String itemname;

	public String getItemname() {
		return itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}
	
	
	/*---------AutoEnd-------------*/

}
