package com.gavel.plugins.database.opentsdb.response;

import com.alibaba.fastjson.JSONObject;

import java.util.List;

/**
 *     success	Integer	The number of data points that were queued successfully for storage
 *     failed	Integer	The number of data points that could not be queued for storage
 *     errors	Array	A list of data points that failed be queued and why. Present in the details response only.
 */
public class Response {

    private Integer success;

    private Integer failed;

    private List<JSONObject> errors;


    public Integer getSuccess() {
        return success;
    }

    public void setSuccess(Integer success) {
        this.success = success;
    }

    public Integer getFailed() {
        return failed;
    }

    public void setFailed(Integer failed) {
        this.failed = failed;
    }

    public List<JSONObject> getErrors() {
        return errors;
    }

    public void setErrors(List<JSONObject> errors) {
        this.errors = errors;
    }
}
