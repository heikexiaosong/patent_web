package com.gavel.expression.function;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.Set;

import org.springframework.dao.EmptyResultDataAccessException;
import org.wltea.expression.ExpressionEvaluator;
import org.wltea.expression.VariableContainer;
import org.wltea.expression.datameta.Variable;
import org.wltea.expression.datameta.VariableExpression;

import com.gavel.common.sql.GavelSql;
import com.gavel.common.utils.DateUtils;
import com.gavel.common.utils.NumberUtils;
import com.gavel.common.utils.StringUtils;
import com.gavel.common.utils.UserInfoUtil;
import com.gavel.persistence.SQLExecutorFactory;
import com.gavel.report.common.FunctionParser;
import com.gavel.report.common.FunctionToken;
import com.gavel.report.common.IDToken;
import com.gavel.report.common.Range;
import com.gavel.report.db.entity.Reportparam;
import com.gavel.report.format.ReportFormat;

public class GavelFunc {
	

    /**
     * 获取系统当前时间
     * @return
     */
    public Long add(long addend, long augend){
        return addend + augend;
    }

    private Object clacFunction(String functionName, Object[] params, Map<String, Variable> varMap) {
        //此处带参数查询，利用数据库字段索引，增快查询速度
    	if (StringUtils.equalsIgnoreCase("SJJYX_KJSJ", functionName))
    		System.out.println("");
        Reportparam param = new Reportparam();
        param.setCsbm(functionName);
        Reportparam reportParam = GavelSql.selectEntity(param);
        if (reportParam != null ){
        	Map<String, Object> funcMap = new HashMap<>();
			try {
				for (Map.Entry<String, Variable> entry : varMap.entrySet()) {
					funcMap.put(entry.getKey(), entry.getValue().toJavaObject());
				}
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        	if (StringUtils.isNotEmpty(reportParam.getFormat())) {
        		FunctionParser defineParser = new FunctionParser(reportParam.getFormat());
    			FunctionToken defineToken = (FunctionToken)defineParser.parse();
    			
    			for(int i = 0; i<defineToken.getParams().size(); i++) {
    				if (params.length > i) {
    					funcMap.put(((IDToken)defineToken.getParams().get(i)).getName(), params[i]);
    				}
    			}
        	}else {
        		for (int i = 0; i < params.length; i++) {
        			StringBuilder sb = new StringBuilder();
        			sb.append("p");
        			sb.append(i+1);
        			String paramString = params[i].toString();
        			List<String> paramList = new ArrayList<>();
        			if (paramString.length() > 2) {
        				if (paramString.substring(0, 1).equals("'") && 
        						paramString.substring(paramString.length() - 1, paramString.length()).equals("'")) {
        					paramList = StringUtils.str2List(paramString, ',');
        					int j = 0;
        					String pName = "";
        					for(String s : paramList) {
        						if (j == 0)
        							pName += "{"+sb.toString() +'-'+String.valueOf(j)+"}";
        						else
        							pName += "," + "{"+sb.toString() +'-'+String.valueOf(j)+"}";
        						funcMap.put(sb.toString() +'-'+String.valueOf(j), s.replace("'", ""));
        						j++;
        					}
        					reportParam.setCsxx(StringUtils.replace(reportParam.getCsxx(), "{"+sb.toString()+"}", pName));
        				}
        			}
        			if (paramList.size() <= 0) {
        				funcMap.put(sb.toString(), params[i]);
        			}
        		}
        	}
        	try {
            	//重新处理执行方法
//                ReportFormat reportFormat = new ReportFormat(null);
            	List<String> paramList = new ArrayList<>(); 
                String sql = ReportFormat.formatSql(reportParam.getCsxx(), paramList);
            	Object[] sqlParams = ReportFormat.formatSqlParamValue(paramList, funcMap, varMap);
            	//根据返回类型查询
            	Map<String, Object> resultMap = null;
            	try {
            		String sqlTemp = sql.trim().toLowerCase();
            		if (sqlTemp.startsWith("insert") || sqlTemp.startsWith("update") || sqlTemp.startsWith("delete")) {
            			SQLExecutorFactory.getSQLExecutor().execute(sql, sqlParams);
            		}else {
            			resultMap = SQLExecutorFactory.getSQLExecutor().executeQueryMap(sql, sqlParams);
            		}
            	}catch (EmptyResultDataAccessException e){
            	} 
            	if (resultMap != null && resultMap.size() > 0) {
            		Object value = new ArrayList<Object>(resultMap.values()).get(0);
            		if (StringUtils.equalsIgnoreCase("float", reportParam.getFhzlx())) {
            			if (value == null) {
            				return 0.0d;
            			}else {
            				if (value instanceof Integer)
        						return Integer.valueOf(value.toString());
            				else
            					return Double.valueOf(value.toString());
            			}	
            		}
                	else if (StringUtils.equalsIgnoreCase("datetime",reportParam.getFhzlx())) {
                		return value;
                	}
                	else if (StringUtils.equalsIgnoreCase("string", reportParam.getFhzlx())) {
                		if (value == null) {
            				return "";
            			}else
            				return value.toString();
                	}
           		
            	}
            	return null;
            	
            	
        	}catch (SQLException e) {
    			e.printStackTrace();
    		}
        } 
        return null;
    }
    
    public Object userDefine(String name, Object params, Map<String, Variable> varMap) {
    	Object[] paramArray = (Object[])params;
    	switch (name.toLowerCase()) {
    		case "round":
    			if (paramArray.length < 1 || paramArray.length > 2) {
        			throw new RuntimeException("函数\"round\"参数类型传入错误");
        		}
        		if (paramArray.length == 1 && paramArray[0] != null) {
        			return NumberUtils.round(Double.valueOf((paramArray[0].toString())));
        		}
        		else if (paramArray.length == 2 && paramArray[0] != null) {
        			double d = Double.valueOf((paramArray[0].toString()));
        			int decimal = Integer.valueOf((paramArray[1].toString()));
        			if (decimal > 0)
        				return NumberUtils.round(d, decimal);
        			else
        				return NumberUtils.round(d);
        		}else {
        			return 0;
        		}
    		case "begindate":
    			if (paramArray.length < 1 || paramArray.length > 2) {
        			throw new RuntimeException("函数\"begindate\"参数类型传入错误");
        		}
    			if (paramArray.length == 1 &&  paramArray[0] != null) {
    				if (paramArray[0] instanceof Date)
    					return ReportFormat.getBeginDate((Date)paramArray[0]);
    				else if (paramArray[0] instanceof String) {
    					return ReportFormat.getBeginDate(DateUtils.parseDate(paramArray[0].toString()));
    				}
        		}
    		case "enddate":
    			if (paramArray.length < 1 || paramArray.length > 2) {
        			throw new RuntimeException("函数\"enddate\"参数类型传入错误");
        		}
    			if (paramArray.length == 1 &&  paramArray[0] != null) {
    				if (paramArray[0] instanceof Date)
    					return ReportFormat.getEndDate((Date)paramArray[0]);
    				else if (paramArray[0] instanceof String) {
    					return ReportFormat.getEndDate(DateUtils.parseDate(paramArray[0].toString()));
    				}
        		}
    		default:
    			return clacFunction(name, (Object[])params, varMap);
    	}    	
    }
    
    private Object getVariableValue(String name, Map<String, Variable> varMap, Map<String, VariableExpression> expressionMap){
    	if (varMap.containsKey(name)) {
    		try {
				return varMap.get(name).toJavaObject();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    	}else {
    		if (expressionMap.containsKey(name)) {
    			VariableExpression expression = expressionMap.get(name);
        		if (expression == null) return null;
        		if (!expression.isCalculated()) {
        			//由于每次计算完成之后，varMap将为清空，所以此处记录原始varMap
        			Map<String, Variable> variableMap = new HashMap<String, Variable>();
        			for (Map.Entry<String, Variable> entry : varMap.entrySet()) {
        				variableMap.put(entry.getKey(), entry.getValue());
        			}
        			//借用已有的threadlocal中的varmap,此处不重新赋值
        			if (expression.isCalculating()) {
        				expression.setValue("计算存在循环引用！");
        				throw new RuntimeException("计算存在循环引用！");
        			}
        			expression.setCalculating(true);
        			Object value = 0.0d;
        			try {
        				value = ExpressionEvaluator.evaluate(expression.getExpression());
        			}catch(Exception e) {
        				e.printStackTrace();
        			}
        			
        			//更新表达式列表的值
        			if (value == null)
        				expression.setValue(0.0d);
        			else {
        				String sValue = String.valueOf(value);
        				if (StringUtils.isEmpty(sValue)){
        					expression.setValue(0.0d);
        				}else {
        					if (value instanceof Integer)
        						expression.setValue(value);
        					else if (value instanceof Date) {
        						expression.setValue(value);
        					}
        					else
        						expression.setValue(Double.parseDouble(sValue));
        				}
        			}
        				
        			//计算完成之后重置varMap
        			for (Map.Entry<String, Variable> entry : variableMap.entrySet()) {
        				varMap.put(entry.getKey(), entry.getValue());
        			}
        			varMap.put(name, Variable.createVariable(expression.getVariableName(), expression.getValue()));
        			VariableContainer.setVariableMap(varMap);
        		}
        		return expression.getValue();
    		}    		
    	}
    	return null;	
    }
    
    public List<?> parseRanges(String paramName, Map<String, Variable> varMap, Map<String, VariableExpression> expressionMap) {
    	Set<String>  ranges = Range.of(paramName).values();
        List<Object> list = new ArrayList<>();
        for (String name : ranges) {
        	Object obj = getVariableValue(name, varMap, expressionMap);
        	if (obj == null)
        		list.add(0.0);
        	else {
        		String sValue = String.valueOf(obj);
				if (StringUtils.isEmpty(sValue)){
					list.add(0.0d);
				}else {
					list.add(Double.parseDouble(sValue));
				}
        	}
        		
        }
        return list;
    }
    
    public Object userVariable(String name, Map<String, Variable> varMap, Map<String, VariableExpression> expressionMap) {
    	if (StringUtils.contains(name, ":")) {
    		return parseRanges(name, varMap, expressionMap);
    	}else if(StringUtils.equals("USERID", name.toUpperCase()))
    		return UserInfoUtil.getUserId();
    	else if(StringUtils.equals("USERNAME", name.toUpperCase()))
    		return UserInfoUtil.getUserName();
    	else if(StringUtils.equals("SERVERDATE", name.toUpperCase())) 
    		return DateUtils.getDate();
    	else if(StringUtils.equals("SERVERDATETIME", name.toUpperCase())) 
    		return DateUtils.getDateTime();
    	else{
    		return getVariableValue(name, varMap, expressionMap);
    	}
    }


    public Double avg(List<Object> numbers){
        if ( numbers==null ){
            return 0d;
        }
        OptionalDouble result =  numbers.stream().mapToDouble(e -> ((Number) e).doubleValue()).average();
        return result.orElse(0);
    }

    public Double sum(List<Object> numbers){

        if ( numbers==null ){
            return 0d;
        }
        return numbers.stream().mapToDouble(e -> ((Number) e).doubleValue()).sum();
    }
    
    public int count(List<Number> numbers){
        if ( numbers==null ){
            return 0;
        }
        int count = 0;
        for (Number number : numbers) {
        	if (number != null && number.doubleValue() != 0.0) {
        		count++;
        	}
        }
        return count;
    }


    public static void main(String[] args) {
    	System.out.println("s's's's".replace("'", ""));
        System.out.println(new GavelFunc().avg(Arrays.asList(1, 2, 3, 4, 10)));
    }

}
