package com.gavel.plugins.database.opentsdb;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gavel.network.Http;
import com.gavel.plugins.database.opentsdb.request.LastQuery;
import com.gavel.plugins.database.opentsdb.request.Query;
import com.gavel.plugins.database.opentsdb.response.LastQueryResultItem;
import com.gavel.plugins.database.opentsdb.response.QueryResultItem;
import com.gavel.plugins.database.opentsdb.response.Response;
import com.google.common.base.Strings;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class Opentsdb {

    private static Logger logger = Logger.getLogger(Opentsdb.class);

    private static final String PUT_POST_API = "/api/put";

    private static final String QUERY_POST_API = "/api/query";

    private static final String SUGGEST_POST_API = "/api/suggest";

    private static final String QUERY_LAST_POST_API = "/api/query/last";

    private final String host;

    public Opentsdb(String host) {
        this.host = host;
    }

    public Opentsdb() {
        this("127.0.0.1:4242");
    }

    /**
     *
     * Example Single Data Point
     *
     * {
     *     "metric": "sys.cpu.nice",
     *     "timestamp": 1346846400,
     *     "value": 18,
     *     "tags": {
     *        "host": "web01",
     *        "dc": "lga"
     *     }
     * }
     *
     *
     *
     * Example Multiple Data Point Put
     * [
     *     {
     *         "metric": "sys.cpu.nice",
     *         "timestamp": 1346846400,
     *         "value": 18,
     *         "tags": {
     *            "host": "web01",
     *            "dc": "lga"
     *         }
     *     },
     *     {
     *         "metric": "sys.cpu.nice",
     *         "timestamp": 1346846400,
     *         "value": 9,
     *         "tags": {
     *            "host": "web02",
     *            "dc": "lga"
     *         }
     *     }
     * ]
     *
     *
     * @param metrics
     * @throws IOException
     */
    public Response push(List<Metric> metrics) throws IOException {
        JSON json =  (JSON)JSON.toJSON(metrics);
        try {
           String responseString = Http.post("http://" + host + PUT_POST_API, json);
           return JSONObject.parseObject(responseString, Response.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    public List<QueryResultItem>  query(Query query)  {

        try {
            JSON params =  (JSON)JSON.toJSON(query);
            logger.warn("URL: http://" + host + QUERY_POST_API);
            logger.warn("Params:  " + params);
            String response = Http.post("http://" + host + QUERY_POST_API, params);

            List<QueryResultItem> resultItems = JSONArray.parseArray(response, QueryResultItem.class);

            logger.warn("Response Size:  " + resultItems.size());

            return resultItems;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return Collections.EMPTY_LIST;

    }


    public List<String>  metrics() {

        try {
            JSON params =  JSONObject.parseObject("{\"type\":\"metrics\", \"max\": 10000}");
            logger.warn("URL: http://" + host + SUGGEST_POST_API);
            logger.warn("Params:  /" + params);
            String response = Http.post("http://" + host + SUGGEST_POST_API, params);
            List<String> resultItems = JSONArray.parseArray(response, String.class);
            logger.warn("Response Size:  " + resultItems.size());
            return resultItems;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return Collections.EMPTY_LIST;

    }

    public List<String>  metricsQuery(String query) {

        try {
            JSON params =  JSONObject.parseObject("{\"type\":\"metrics\", \"max\": 1000}");
            if ( !Strings.isNullOrEmpty(query) ){
                ((JSONObject) params).put("q", query);
            }
            logger.warn("URL: http://" + host + SUGGEST_POST_API);
            logger.warn("Params:  /" + params);
            String response = Http.post("http://" + host + SUGGEST_POST_API, params);
            List<String> resultItems = JSONArray.parseArray(response, String.class);
            logger.warn("Response Size:  " + resultItems.size());
            return resultItems;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return Collections.EMPTY_LIST;

    }


    public List<LastQueryResultItem>  queryLast(LastQuery query) {

        try {
            JSON params =  (JSON)JSON.toJSON(query);
            String response = Http.post("http://" + host + QUERY_LAST_POST_API, params);

            System.out.println(response);
            List<LastQueryResultItem> resultItems = JSONArray.parseArray(response, LastQueryResultItem.class);

            return resultItems;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return Collections.EMPTY_LIST;

    }


}
