package com.gavel.report.common;


public class IDToken extends Token {

    private String name;
    
    private Object Value;

    public IDToken(String name) {
        this.name = name;
    }
    
    public IDToken(Object value) {
    	this.name = value.toString();
    	this.Value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Object getValue() {
		return Value;
	}

	public void setValue(Object value) {
		Value = value;
	}

	@Override
    public String toString() {
        return name;
    }
}
