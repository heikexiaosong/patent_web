package com.gavel.report.format;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.wltea.expression.datameta.Variable;

import com.gavel.common.utils.DateUtils;
import com.gavel.persistence.sql.SqlMap;

public class ReportFormat {

    private final Map<String, Object> variableMap = new HashMap<String, Object>();
    
    public static Date getBeginDate(Date date) {
    	if (date == null) return null;
    	GregorianCalendar calendar = new GregorianCalendar();
    	calendar.setTime(date);
    	if (DateUtils.getDay(date) < 26) {
    		calendar.add(Calendar.MONTH, -1);	
    	}
    	calendar.set(Calendar.DAY_OF_MONTH, 26);
    	return DateUtils.beginOfDay(calendar.getTime());
    }
    
    public static Date getEndDate(Date date) {
    	if (date == null) return null;
    	GregorianCalendar calendar = new GregorianCalendar();
    	calendar.setTime(date);
    	if (DateUtils.getDay(date) >= 26) {
    		calendar.add(Calendar.MONTH, 1);	
    	}
    	calendar.set(Calendar.DAY_OF_MONTH, 26);
    	return DateUtils.beginOfDay(calendar.getTime());
    }


    public ReportFormat(Date theDate) {
        Calendar calendar = Calendar.getInstance();

        if ( theDate!=null )
            calendar.setTime(theDate);
        variableMap.put("YEAR", String.valueOf(calendar.get(Calendar.YEAR)));
        variableMap.put("MONTH",String.format("%02d", calendar.get(Calendar.MONTH) + 1));
        variableMap.put("DAY",  String.format("%02d", calendar.get(Calendar.DAY_OF_MONTH)));
        variableMap.put("HOUR", String.format("%02d", calendar.get(Calendar.HOUR_OF_DAY)));
        variableMap.put("MINUTE", String.format("%02d", calendar.get(Calendar.MINUTE)));
        variableMap.put("SECOND", String.format("%02d", calendar.get(Calendar.SECOND)));
        variableMap.put("THDATE", theDate);
        variableMap.put("BEGINDATE", getBeginDate(theDate));
        variableMap.put("ENDDATE", getEndDate(theDate));
        variableMap.put("BYEAR", String.valueOf(DateUtils.getYear(getBeginDate(theDate))));
        variableMap.put("BMONTH",String.format("%02d",DateUtils.getMonth(getBeginDate(theDate))));
    }

    public String format(String pattern, Map<String, Object> funcMap) {

        if ( pattern==null || pattern.trim().length()==0 ){
            return pattern;
        }

        StringBuilder result = new StringBuilder();


        boolean inQuote = false;
        StringBuilder param = new StringBuilder();
        for (int i = 0; i < pattern.length(); i++) {
            char ch = pattern.charAt(i);
            switch ( ch ){
                case '{':
                    inQuote=true;
                    break;
                case '}':
                    inQuote=false;
                    if ( param.length() > 0 ){
                    	Object var = null;
                    	if (funcMap != null && funcMap.containsKey(param.toString()))
                    		var = funcMap.get(param.toString());
                    	else
                    		var = variableMap.get(param.toString());                       
                        result.append( var==null ? "" : var );
                        param.delete( 0, param.length());
                    }
                    break;
                default:
                    if ( inQuote ){
                        param.append(ch);
                    } else {
                        result.append(ch);
                    }
                    break;
            }
        }

        return result.toString();
    }
    
    public static Object[] formatSqlParamValue(List<String> paramList, Map<String, Object> funcMap, Map<String, Variable> varMap) {
    	List<Object> valueList = new ArrayList<>();
    	for (String s : paramList) {
    		if (funcMap.containsKey(s)) {
    			valueList.add(funcMap.get(s));
    		}else if (funcMap.containsKey(s.toLowerCase())) {
    			valueList.add(funcMap.get(s.toLowerCase()));
    		}else if (varMap.containsKey(s)) {
    			try {
					valueList.add(varMap.get(s).toJavaObject());
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    		}else if (varMap.containsKey(s.toUpperCase())) {
    			try {
					valueList.add(varMap.get(s.toUpperCase()).toJavaObject());
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    		}
    	}
    	return valueList.toArray();
    }
    
    public static String formatSql(String sql, List<String> paramList) {
    	SqlMap sqlMap = new SqlMap();
    	return sqlMap.parseMybatisParams(sql, paramList);
    }
    
    public Map<String, Object> getVariableMap() {
		return variableMap;
	}

	public static void main(String[] args) {
        String str = new ReportFormat(null).format("hello {YEAR}, you last login in {MONTH}", null);

        System.out.println(str);
    }
    
    

}
