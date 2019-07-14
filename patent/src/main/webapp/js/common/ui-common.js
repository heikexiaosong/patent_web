if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($, window, document, undefined) {
    'use strict';

    var Utils = {
        buildSingleTable: function(containerId, options){
            var _formOptions = {
                onAdd: function (params) {
                    var that = this;
                    function resultHandler(response) {
                        if ( response["success"]!=null && response["success"]==true ){
                            that.$el.window('close');
                            $.messager.alert("提示信息", "操作成功");
                            params.options.singleTable.singleTable("reload", {});
                        } else {
                            $.messager.alert("提示信息", response['message']);
                        }
                    }
                    var url = params.ref.options["module"] + "/add";
                    var href = window.location.pathname;
                    if( href.indexOf(this.options["module"])!=-1){
                        url = "add";
                    }
                    HTTP.post(url, this.collectData(), resultHandler);
                },
                onUpdate: function (params) {
                    var that = this;
                    function resultHandler(response) {
                        if ( response["success"]!=null && response["success"]==true ){
                            that.$el.window('close');
                            $.messager.alert("提示信息", "操作成功");
                            params.options.singleTable.singleTable("reload", {});
                        } else {
                            $.messager.alert("提示信息", response['message']);
                        }
                    }
                    var data = this.collectData();
                    var href = window.location.pathname;
                    if( href.indexOf(this.options["module"])!=-1){
                        HTTP.put("update", data, resultHandler);
                    }else{
                        HTTP.put(params.ref.options["module"] + "/update", data, resultHandler);
                    }

                }
            };

            function buildFormAndShow(_url, _condition, _flag, _userForm, _title, _clean, params) {
                HTTP.post(_url,
                    JSON.stringify(_condition),
                    function (result) {
                        _userForm.build(result, _flag, _title, _clean, params, _condition);
                    });
            }
            var onAdd = function (params) {
                var url = params["module"] + "/get";
                var href = window.location.pathname;
                if( href.indexOf(this.options["module"])!=-1){
                    url = "get";
                }
                buildFormAndShow(url, {id: "-1"}, "I", params["form"], "新增", true, params, {id: "-1"});
            };
            var onCopy = function (params) {
                var row = this.dataTable.datagrid('getSelected');
                if (  row==null ){
                    $.messager.alert("提示信息", "选择需要复制的记录");
                    return ;
                }
                var href = window.location.pathname;
                var url = params["module"] + "/get";
                if( href.indexOf(this.options["module"])!=-1){
                    url = "get";
                }
                buildFormAndShow(url, row, "I", params["form"], "复制");
            };
            var onEdit = function (params) {
                var row = this.dataTable.datagrid('getSelected');
                if (  row==null ){
                    $.messager.alert("提示信息", "选择需要编辑的记录");
                    return ;
                }
                var  editEnable = params["editEnable"](row);
                if( editEnable!=null && editEnable==false ){
                    $.messager.alert("提示信息", "非初始状态不允许编辑！");
                    return;
                }

                var url = params["module"] + "/get";
                var href = window.location.pathname;
                if( href.indexOf(this.options["module"])!=-1){
                    url = "get";
                }
                buildFormAndShow(url, row, "U", params["form"], "编辑");
            };
            var onDel = function (params) {
                var singleTable = this.$container;
                var row = this.dataTable.datagrid('getSelected');
                var  editEnable = params["editEnable"](row);
                if( editEnable!=null && editEnable==false ){
                    $.messager.alert("提示信息", "非初始状态不允许删除！");
                    return;
                }
                if (row) {
                    $.messager.confirm('确认', '删除选择的数据?', function (r) {
                        if (r) {
                            HTTP.del(params["module"] + "/delete",
                                row,
                                function (response) {
                                    console.log(response);
                                    if ( response["success"]!=null && response["success"]==true ){
                                        $.messager.alert("提示信息", "数据删除成功");
                                        singleTable.singleTable("reload", {});
                                    } else {
                                        $.messager.alert("提示信息", response['message']||"数据删除失败");
                                    }
                                });
                        }
                    });
                }
            };
            var changeTybz = function (params) {
                var _that = this.dataTable;
                var selectedRow = _that.datagrid("getSelected");
                if (  selectedRow==null ){
                    $.messager.alert("提示信息", "请先选择一条待停用的数据.");
                    return ;
                }

                var singleTable = this.$container;
                var url = params["module"] + "/record/qt";
                var href = window.location.pathname;
                if( href.indexOf(this.options["module"])!=-1){
                    url = "record/qt";
                }
                HTTP.post(url, selectedRow,  function (result) {
                    if ( result["success"]==true ) {
                        singleTable.singleTable("reload", {});
                    } else {
                        $.messager.alert("提示信息", result["message"] || "数据停用失败");
                    }
                });
            };
            
            if ( options["detailsModule"] ) {
                var form = new MasterSlaveForm($.extend({singleTable: $("#"+ containerId)}, _formOptions, options));
            } else {
                var form = new SingleTableForm($.extend({singleTable: $("#"+ containerId)}, _formOptions, options));
            }


            var _options = {
                form: form,
                add: onAdd,
                copy: onCopy,
                edit: onEdit,
                del: onDel,
                changeTybz: changeTybz,
                editEnable: function (row) {
                    if ( row!=null && row["zt"]!=null && row["zt"] != "I" ) {
                        return false;
                    }
                }
            };

            return $("#"+ containerId).singleTable($.extend({}, _options, options));
        }
    };

    window.Utils = window.Utils || Utils;

}(jQuery, window));
