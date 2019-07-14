package com.gavel.report.service.impl;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gavel.common.base.service.impl.BaseEditServiceImpl;
import com.gavel.common.utils.StringUtils;
import com.gavel.persistence.SQLExecutorFactory;
import com.gavel.persistence.sql.RecordSet;
import com.gavel.report.common.FunctionParser;
import com.gavel.report.common.FunctionToken;
import com.gavel.report.common.IDToken;
import com.gavel.report.dao.ReportparamDao;
import com.gavel.report.db.entity.Reportparam;
import com.gavel.report.format.ReportFormat;
import com.gavel.report.service.ReportparamService;
import com.gavel.report.vo.ReportparamCondition;
import com.gavel.report.vo.ReportparamVO;


@Service("reportparamService")
@Transactional
public class ReportparamServiceImpl extends BaseEditServiceImpl implements ReportparamService {

    @Autowired
    private ReportparamDao reportparamDao;

    @Override
    public void initService() {
        addMaster(new Reportparam());
    }

    @Override
	public RecordSet<ReportparamVO> query(ReportparamCondition condition) {
	    return reportparamDao.query(condition);
	}

    @Override
    public Object clac(ReportFormat reportFormat, String value) {

        if ( value==null || value.trim().length()==0 ){
            return value;
        }

        String str = value.trim();

        if ( str.startsWith("{") && str.endsWith("}") ){
            String func = str.substring(1, str.length()-1);
            //获取方法名称
			FunctionParser valueParser = new FunctionParser(func);
			FunctionToken valueToken = (FunctionToken)valueParser.parse();
			String paramname = valueToken.getName();
            //此处带参数查询，利用数据库字段索引，增快查询速度
            Reportparam param = new Reportparam();
            param.setCsbm(paramname);
            Reportparam reportParam = reportparamDao.queryByEntity(param);

           /* Optional<Reportparam>  matchParam = Optional.ofNullable(null);

            if ( reportparamList!=null ){
                matchParam = reportparamList.stream()
                                            .filter(param -> param.getCsbm().equalsIgnoreCase(paramname))
                                            .findFirst();
            }
*/
            if (reportParam != null ){
//                Reportparam reportparam =  matchParam.get();
            	
//                System.out.println(paramname + ": " +  reportFormat.format(reportParam.getCsxx()));
            	Map<String, Object> funcMap = new HashMap<>();
            	if (StringUtils.isNotEmpty(reportParam.getFormat())) {
            		FunctionParser defineParser = new FunctionParser(reportParam.getFormat());
        			FunctionToken defineToken = (FunctionToken)defineParser.parse();
        			
        			for(int i = 0; i<defineToken.getParams().size(); i++) {
        				if (valueToken.getParams().size() > i) {
        					funcMap.put(((IDToken)defineToken.getParams().get(i)).getName(), ((IDToken)valueToken.getParams().get(i)).getValue());
        				}
        			}
            	}else {
            		for (int i = 0; i < valueToken.getParams().size(); i++) {
            			StringBuilder sb = new StringBuilder();
            			sb.append("p");
            			sb.append(i+1);
            			funcMap.put(sb.toString(), ((IDToken)valueToken.getParams().get(i)).getValue());
            		}
            	}
                try {
                	//重新处理执行方法
                    float f_value = SQLExecutorFactory.getSQLExecutor().executeFloatQuery(reportFormat.format(reportParam.getCsxx(), funcMap));
                    System.out.println("\tvalue: " + f_value);
                    return  f_value;
                } catch (SQLException e) {
                    e.printStackTrace();
                }


            } else {
                reportFormat.format(value, null);
            }
        }

        return value;





    }

}
