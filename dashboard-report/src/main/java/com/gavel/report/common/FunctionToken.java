package com.gavel.report.common;

import java.util.ArrayList;
import java.util.List;

public class FunctionToken  extends Token {

    public static final FunctionToken EMPTY = new FunctionToken("");

    private String name;

    private List<Token> params = new ArrayList<Token>();

    public FunctionToken(String name) {
        this.name = name;
    }

    public FunctionToken(String name, List<Token> params) {
        this.name = name;
        this.params = params;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Token> getParams() {
        return params;
    }

    public void setParams(List<Token> params) {
        this.params = params;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder(name);
        sb.append("(");
        for (int i = 0; i < params.size(); i++) {
            Token param = params.get(i);
            if ( i > 0 ){
                sb.append(", ");
            }
            sb.append(param);
        }
        sb.append(')');

        return sb.toString();
    }
}
