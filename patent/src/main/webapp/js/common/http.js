(function (window, $) {

    var _http = {};

    jQuery.support.cors=true;
    _http.get = function (_url, _data, _handler) {
        $.ajax({
            type: 'get',
            url: _url,
            data: _data,
            async: true,
            beforeSend:function (xmlHttps) {
                xmlHttp.setRequestHeader("If-Modified-Since","0");
                xmlHttp.setRequestHeader("Cache-Control","no-cache");
            },
            success: function (result) {
                _handler(result);
            },
            complete: function (XHR, TS) {
                if ( XHR["status"] == 403 ){
                    window.location.reload(true);
                }
            }
        });
    };
    _http.post = function (_url, _data, _handler, _showProcess,async,error) {
        request_send("POST", _url, _data, _handler, _showProcess,async,error);
    };
    _http.put = function (_url, _data, _handler) {
        request_send("POST", _url, _data, _handler);
    };

    _http.del = function (_url, _data, _handler) {
        var _data = {master: _data};
        request_send("POST", _url, _data, _handler);
    };

    _http.download = function (_url, _params ,type) {
        var from = $("<form target='downloadframe' method='post' action='" + _url  +"' />");
        if(type=='get'){
            from = $("<form target='downloadframe' method='get' action='" + _url  +"' />");
        }
        from.append("<input name='convert' value='Y'>");
        $.each(_params, function(name, value){
            from.append("<input name='" + name + "' value='" + value + "'>");
        });
        from.appendTo("body").submit().remove();
    };

    function request_send(_type, _url, _data, _handler, _showProcess,async,error) {
        if ( _data!=null ){
            if ( typeof _data == 'object' ){
                _data = JSON.stringify(_data);
            }
        }
        $.ajax({
            type: _type,
            url: _url,
            contentType: "application/json", //必须有
            dataType: "json", //表示返回值类型，不必须
            data: _data,
            async:async||false,
            beforeSend: function () {
                if ( _showProcess!=null && _showProcess==false ){

                } else {
                 /*   $.messager.progress({
                        title: '提示',
                        msg: '数据请求中，请稍候……',
                        text: ''
                    });*/
                }
            },
            complete: function (XHR, TS) {

                if ( _showProcess!=null && _showProcess==false ){

                } else {
                    // $.messager.progress('close');
                }

                if ( XHR["status"] == 403 ){
                    window.location.reload(true);
                }

            },
            success: function (result) {
                (_handler || function () {})(result);
            },
            error:function (result) {
                (error || function () {})(result);
            }
        });
    }

    window.HTTP = window.HTTP || _http;

    function findJQObj(_obj) {
        if ( _obj == null ){
            return null;
        }

        if ( typeof _obj == "string" ){
            return $("#" + _obj);
        }
        if ( _obj instanceof jQuery ){
            return _obj;
        }
    }
})(window, jQuery);

