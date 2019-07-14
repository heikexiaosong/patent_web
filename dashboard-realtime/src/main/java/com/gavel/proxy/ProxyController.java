package com.gavel.proxy;

import com.alibaba.fastjson.JSONObject;
import com.gavel.common.utils.ThreadContext;
import com.gavel.configure.service.ItemService;
import com.gavel.configure.vo.ItemVO;
import com.gavel.network.Http;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;


@RestController
public class ProxyController {

    private static final Logger logger = LoggerFactory.getLogger(ProxyController.class);

    @Autowired
    private ItemService itemService;

    @RequestMapping(value = "/api/proxy/{method}", method = RequestMethod.GET)
    public String getMethodProxy(@PathVariable String method, HttpServletRequest request) throws Exception {
        logger.debug("Welcome {}", "testing");
        String url =  String.format("http://%s:%d/api/%s", TSDBServerConfig.getHost(), TSDBServerConfig.getPort(), method);
        System.out.println("URL: " + url);

        String  query = request.getQueryString();

        url += "?" + query;
        System.out.println("url: " + url);
        return Http.get(url);
    }

    @RequestMapping(value = "/api/proxy/{method}", method = RequestMethod.POST)
    public String postMethodProxy(@PathVariable String method, @RequestBody JSONObject params, HttpServletRequest request) throws Exception {
        logger.debug("Welcome {}", "testing");
        String url =  String.format("http://%s:%d/api/%s", TSDBServerConfig.getHost(), TSDBServerConfig.getPort(), method);
        System.out.println("URL: " + url);

        String  query = request.getQueryString();
        if ( query!=null && query.length() >0 ){
            url += "?" + query;
        }
        System.out.println("url: " + url);
        return Http.post(url, params);
    }


    @RequestMapping("/data/rt/{id}")
    @ResponseBody
    public Object rtdata(@PathVariable String id) {
        try {
            List<ItemVO> items = itemService.loadItems(id);
            return items;
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
            return ThreadContext.getReturnData();
        }
    }

    @RequestMapping(value = "/data/history/{id}", method = RequestMethod.POST)
    @ResponseBody
    public Object history(@PathVariable String id, @RequestBody JSONObject params) {

        Date timestamp =  params.getDate("timestamp");
        Boolean history =  params.getBoolean("history");

        try {
            if ( history==null || Boolean.FALSE.equals(history) ){
                return itemService.loadItems(id);
            } else {
                return itemService.loadHistoryItems(id, timestamp);
            }
        } catch (Exception e){
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
            return ThreadContext.getReturnData();
        }
    }

}
