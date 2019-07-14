package com.gavel.report.common;


import java.util.HashMap;
import java.util.Map;

import com.gavel.common.Formula;

public class FunctionInvoker {


   /* private Object invoke(Formula formula, FunctionToken functionToken){
        if ( functionToken==null ){
            return null;
        }

        StringBuilder funcBuider = new StringBuilder("$");
        funcBuider.append(functionToken.getName()).append("(");

        List<Token> params = functionToken.getParams();
        if ( params!=null && params.size() > 0 ){
            for (Token param : params) {
                if (param instanceof FunctionToken) {
                    Object obj = invoke(formula, (FunctionToken)param);
                    funcBuider.append(obj).append(", ");
                } else {
                    String paramName = param.getName();
                    if ( paramName.contains(":") ){
                        System.out.println(paramName);
                        Set<String>  ranges = Range.of(paramName).values();
                        List<Double> list = new ArrayList<>();
                        for (String name : ranges) {
                            double v = formula.expDouble(name);
                            list.add(v);
                            System.out.println("\t" + name + ": " + v);
                        }
                        String name = StringUtils.replaceText(paramName, ':', "_");
                        formula.addVar(name, list);
                        funcBuider.append(name).append(", ");
                    } else {
                        funcBuider.append(param.getName()).append(", ");
                    }
                }
            }
            funcBuider.delete(funcBuider.length()-2, funcBuider.length());
        }

        funcBuider.append(")");

        return formula.calc(funcBuider.toString());

    }*/


    public static void main(String[] args) {
    	
//    	System.out.println(args.getClass().getName());

        System.out.println(('A' -  'A' + 1)*25 + ('B' -  'A'));

        Map<String , Object> params = new HashMap<>();
        params.put("I28", "2");
        params.put("E23", "1");
        params.put("F23", "1");
        /*for (int i = 1; i < 20; i++) {
            params.put("B" + i, (double)i);
        }*/
        /*params.put("MONTH", "03");
        System.out.println("add(1, 2) = " + new FunctionInvoker().invoke("add(1+7, 2) + 1", params));
        System.out.println("TIME = " + new FunctionInvoker().invoke("TIME(SYSDATE(), 7, 0, 0)", params));
        System.out.println("DATEFORMAT = " + new FunctionInvoker().invoke("DATEFORMAT(SYSDATE(),\"yyyyMMdd\")", params));
        System.out.println("YEAROFDATE = " + new FunctionInvoker().invoke("\"a\"+MONTH", params));
        System.out.println("MONTHOFDATE = " + new FunctionInvoker().invoke("MONTHOFDATE(SYSDATE())", params));
        System.out.println("DAYOFDATE = " + new FunctionInvoker().invoke("DAYOFDATE(SYSDATE())", params));*/
//        System.out.println("平均(B1:B11) = " + new FunctionInvoker().invoke("B1*B10", params));
//        System.out.println("平均(B1:B11) = " + new FunctionInvoker().invoke("平均(B1:B5)", params));
        /*System.out.println("iif = " + Formula.calc("B1+\"1\"", params));
        System.out.println("a".indexOf("b"));*/
//        System.out.println("合计(B1:B11) = " + new FunctionInvoker().invoke("合计(B1:B5)+1", params));
//        System.out.println("ABC = " + new FunctionInvoker().invoke("\"ABC\"", params));
//        System.out.println("ABC = " + Double.valueOf("29.0").intValue());
        System.out.println("ABC = " + Formula.calc("ROUND(I28/(E23+F23)*100,2)", params));
        
        
        /*JSONArray ja = new JSONArray();
        for (int i = 0; i < 65; i++) {
        	for (int j = 0; j< 15; j++) {
        		JSONObject json = new JSONObject();
        		JSONObject top = new JSONObject();
        		top.put("width", 2);
        		top.put("color", "black");
        		json.put("row", i);
        		json.put("col", j);
        		json.put("top", top.toJSONString());
        		json.put("left", top.toJSONString());
        		json.put("right", top.toJSONString());
        		json.put("bottom", top.toJSONString());
        		ja.add(json);
        	}
        }
        System.out.println(ja.toJSONString());*/
 
    }

}
