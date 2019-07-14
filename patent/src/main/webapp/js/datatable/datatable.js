if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($, window, undefined) {
    'use strict';

    var _dataTable = {

        /**
         * opts:
         *      url: 数据请求URL
         *      params: 数据请求参数
         *      columns: 数据列属性构造函数, 参数为 1. url 返回结果, 2 默认生成的列属性结果
         * @param element
         * @param opts
         */
        datagrid: function (element, opts) {
            function editor(fieldType) {
                var map = {
                    ftInteger: 'numberbox',
                    ftFloat: {
                        type:'numberspinner',
                        options: {
                            precision:3
                        } },
                    ftBoolean: 'checkbox',
                    ftDate: 'datebox'
                };
                return  map[fieldType] || "textbox";
            }

            var defaultOpt = {
                checkbox: false,
                editId:false,
                isPagination: true,
                formatter: function(fieldname,fieldobj){
                        return function (value, row, index) {
                            if ( fieldobj!=null && fieldobj["fieldType"]=='ftDate' ){
                                if ( fieldobj["controlType"]=='date' ){
                                    if(typeof (value)==='number'){
                                     value =  (new Date(parseInt(value))).format('yyyy-MM-dd');
                                    }
                                }
                            }
                            else if(fieldobj!=null&&fieldobj["fieldName"] =='JLDW_MC'){
                                if(typeof (parseInt(value))==='number'&& !isNaN(parseInt(value))){
                                    if(row['jldw']&&row['jldwmc']){
                                        value =row['jldwmc'];
                                    }
                                }
                            }
                            else if(fieldobj!=null &&fieldobj['controlType'] == 'checkbox'){
                                if(row[fieldobj['name']]&&row[fieldobj['name']]=="Y"){
                                    value ='<input type="checkbox" checked  style="width: 16px;height: 16px;margin: 3px 26px">';
                                }else{
                                    value = '<input type="checkbox"  style="width: 16px;height: 16px;margin: 3px 26px">';
                                }
                            }
                            else if(fieldobj!=null&&fieldobj["fieldType"] == 'ftFloat'){
                              if(value){
                                  value = parseFloat(value).toFixed(fieldobj["decimal"]);
                              }
                            }
                            return value;
                        }
                }
            };

            var $table = findJQObj(element);

            var options = $.extend(true,{}, defaultOpt, opts);
            var deleteFields =options["deleteFields"];
            if ( options["url"] && options["url"]!='' ){
                var _url = options["url"];
                var _params = options['params'] || {};
                var defaultBuildColumns = function(result){
                    var vector = new Vector();
                    if( options["checkbox"] == true ){
                        vector.add({checkbox: true, field: ""});
                    }
                    if(options["addColumns"]&&options["addColumns"].length>0){
                        $.each(options["addColumns"],function (i,column) {
                            vector.add(column);
                        })
                    }
                    var fields = result.data.fields || [];

                    $.each(fields, function (i, field) {
                      //  console.log(JSON.stringify(field) + ": " + editor(field["fieldType"]));
                        var hidden = true;
                        if(options['addNewColumns']&&options['addNewColumns'].length>0){
                            $.each(options['addNewColumns'],function (i, value) {
                                if(field['name']==value){
                                    field["showlist"] = true;
                                }
                            })
                        }
                        if ( field["showlist"]!=null && field["showlist"]==true ) {
                            hidden = false;
                        }
                        var formatter = options["formatter"](field["name"],field);
                        if ( field["showEdit"]=null || field["showEdit"]==false ) {
                                vector.add({
                                    field: field["name"],
                                    title: field["caption"],
                                    width: (field["width"]||20)*8,
                                    halign: "center",
                                    index: field["index"],
                                    formatter: formatter,
                                    hidden: hidden,
                                });
                        } else{
                            vector.add({
                                field: field["name"],
                                title: field["caption"],
                                width: (field["width"]||20)*8,
                                halign: "center",
                                index: field["index"],
                                formatter: formatter,
                                hidden: hidden,
                                editor: editor(field["fieldType"])
                            });
                        }


                    });

                    return [vector.sort("index")];
                };
                var isPagination = options["isPagination"];

                var _resultHandler = function(result){
                    var columns = defaultBuildColumns(result);
                    if ( options["columns"] && typeof options["columns"] == 'function' ){
                        options["columns"](result, columns);
                    }
                    opts["url"] = null;
                    var _opts = $.extend({}, {singleSelect: true, pagination:isPagination,}, {columns: columns}, opts);
                    $table.datagrid(_opts);
                    if ( isPagination ){
                        $table.datagrid('clientPaging', {data: result.data.records||[]});
                    } else {
                        $table.datagrid('loadData', result.data.records||[]);
                    }


                };
                HTTP.post(_url, _params, _resultHandler);
            }


            return $table;
        }

    };


     window.DataTable = window.DataTable || _dataTable;

}(jQuery, window));