
'use strict';

(function($, window, document,undefined) {
    function isArray(o){
        return Object.prototype.toString.call(o)=='[object Array]';
    }
    function defaultColumnFormatter(fieldname, fieldObj) {
        if ( fieldname==null || fieldname=='' ){
            return
        }
        if ( fieldname=='tybz' ) {
            return function(value,row,index) {
                var map = {Y: '停用', N: "启用"};
                var text  = map[value];
                return text||"启用";
            };
        }
        if ( fieldObj!=null && fieldObj["fieldType"]=='ftDate' ){
            if ( fieldObj["controlType"]=='date' ){
                return DataGridCommon.dateFormatter;
            }
            return DataGridCommon.datetimeFormatter;
        }
    }
    var SingleTable = function (container, options) {
        this.options = options;
        this.$container = $(container);
        this.init();
        options["onReady"](this.$container);
    };
    SingleTable.DEFAULTS = {
        queryURL: "",
        rownumbers: true,
        singleSelect: true,
        data: [],
        pageList: [10, 15, 20, 30, 50, 100, 200],
        pageSize:20,
        pagination:true,
        columns: [[
            {field: 'id', checkbox: 'true'}
            // {field: 'userid', title: '数据列'}
        ]],
        onResizeColumn: function (field, width) {
            var module = $(this).data("datagrid")["options"]["module"];
            if (  module==null || module=='' ){
                return
            }
            HTTP.post("kzxx/profile/setting", {type: "ColumnWidth", param: field, value: width, url: module + "/query"});

        },
        expand: false,
        customize: false,
        left:false
    };

    SingleTable.EVENTS = {
        onSelect: function(index,row){
            $(this).data("index", index);
        },
        columnFormatter: function(name) {
        },

        onReady: function () {
        },

        print: function (params) {
            console.log("Invoke print func.");
        },

        preview: function (params) {
            console.log("Invoke preview func.");
        },
        dataConvert: function (data) {
            return data;
        },

        reload: function (params) {
            var _that = this;
            var dataTable = this.dataTable;
            var form = this.searchForm;
            var opts = this.options;
            var handler = function (result) {
                var fields = result.data.fields;
                if ( fields !=null && fields.length>0 ){
                    var vector = new Vector();
                    $.each(fields, function (i, field) {
                        if ( field["showlist"]!=null && field["showlist"]==true ) {
                            var columnFormatter = opts['columnFormatter'](field["name"]);
                            if  ( columnFormatter==undefined || defaultColumnFormatter==null ){
                                columnFormatter = defaultColumnFormatter(field["name"], field);
                            }
                            if(field["primaryKey"]!=null&&field["primaryKey"] == true){
                                var primaryKey ={
                                  primaryKey:field['name']
                                };
                                $.extend( opts, primaryKey);
                            }
                            vector.add({
                                field: field["name"],
                                title: field["caption"],
                                width: (field["width"]||20)*8,
                                halign: "center",
                                index: field["index"],
                                formatter: columnFormatter
                            });
                        }
                    });
                }
                var onSelect = (opts["onSelect"] ||  function (index,row) {});
                var index = dataTable.data("index");
                if  ( opts["type"] == 'tree' ){
                    dataTable.treegrid({columns: [vector.sort("index")]});
                    var rootNodes = opts["dataConvert"](result.data.records||[]);
                    dataTable.treegrid('loadData', rootNodes);
                } else {
                    dataTable.datagrid({rownumbers: true, columns: [vector.sort("index")], onSelect: onSelect.bind(_that)});
                    dataTable.datagrid('clientPaging', {data: result.data.records});
                    dataTable.datagrid('doCellTip',{cls:{},delay:500});
                    dataTable.datagrid('selectRow', index);
                    var enableFilter = dataTable.data("enableFilter");
                    if ( enableFilter ){
                        dataTable.datagrid('enableFilter');
                    }
                    _that.$container.find("div.datagrid-header-rownumber").on("click", {context: _that, dataTable: dataTable}, function (event) {
                        var _options = event.data.context.options;
                        _options.columnSetting.call(event.data.context, _options);
                    });
                }

                if (  Object.prototype.toString.call(opts["leftView"])=== '[object Function]' ){
                    opts["leftView"](opts["left-view"], dataTable, opts, result);
                }

                if (  Object.prototype.toString.call(opts["rightView"])=== '[object Function]' ){
                    opts["rightView"](opts["right-view"], dataTable, opts, result);
                }

            };

            var _params = $.extend(params||{}, DataBind.collectData(form));
            var href = window.location.pathname;
            if( href.indexOf(this.options["module"])!=-1){
                HTTP.post("query", JSON.stringify(_params), handler);
            }else{
                var storageInfo = null;
                if(navigator.webkitTemporaryStorage) {
                    storageInfo = navigator.webkitTemporaryStorage;
                } else if(navigator.webkitPersistentStorage) {
                    storageInfo = navigator.webkitPersistentStorage;
                } else if (window.webkitStorageInfo) {
                    storageInfo = window.webkitStorageInfo;
                }
                var cache = [];
                var data= JSON.stringify(_params, function(key, value) {
                    if (typeof value === 'object' && value !== null) {
                        if (cache.indexOf(value) !== -1) {
                            return;
                        }
                        cache.push(value);
                    }
                    return value;
                });
                cache = null;
                HTTP.post(this.options["module"] + "/query", data, handler);
            }
        },

        add: function (params) {
            console.log("Invoke add func.");
        },

        copy: function (params) {
            console.log("Invoke copy func.");
        },

        edit: function (params) {
            console.log("Invoke edit func.");
        },

        del: function (params) {
            console.log("Invoke del func.");
        },

        changeTybz: function (params) {
            console.log("Invoke changeTybz func.");
        },
        jugement:function () {
            console.log("Invoke changeTybz func.")
        },
        //按**生成 ==查询新增功能
        generate:function (params) {
            var singleTable = this;
            var _that = this.dataTable;
            var opts = this.options;
            var selectedRow = _that.datagrid("getSelected");
            var tboptions =params['form']['options'];
            var tblname = params['form']['options']['detailsModule'][0]['tblname'];
            var judements=params['form']['options']['detailsModule'][0]['judgment'];
            var parameters =params['form']['options']['detailsModule'][0]['parameters'];
            var url= params['form']['options']['detailsModule'][0]['url'];
            var title = params['form']['options']['formModule'][0]['title'];
            var isCheckbox = params['form']['options']['formModule'][0]['checkbox'];
            if(isCheckbox == undefined){
                isCheckbox =true;
            }
            var orderTitle ='确认';
            if(params['form']['options']['order']){
                orderTitle =  params['form']['options']['order'][0]['title'];
            }
            var _content= '<form class="masterSelect" method="post" />' +
                            '<div class="detail-view" style="height: 320px;"></div>';
            var options = {
                title: title,
                content: _content,
                width: 800,
                height:500,
                singleTable: singleTable,
                onInit: function ($container) {
                    var _that = params['form']['options'];
                    var cs=tboptions['formModule'][0];
                    var masterSelect = $container.find(".masterSelect");
                    var cgjhUrl = _that['module']+url;
                    var _flag ='I';
                    masterSelect.html("");
                    var  formBuild=_that["onBuildForm"](masterSelect, cs||{}, true, _flag, params);
                    /*查询按钮*/
                    var serach=$('<a href="#" style="position: relative;top: -27px;left: 636px;" class="uisearchbar"><span class="l-btn-icon icon-reload" style="margin-left: -20px"></span>查询</a>');
                    serach.appendTo(masterSelect);
                    $container.find(".uisearchbar").unbind().bind('click',function () {
                        var  matches = DataBind.collectData(masterSelect);
                        HTTP.post(cgjhUrl,matches, function (result) {
                            if (result["success"] == true) {
                                $master.datagrid('clientPaging', {data:[]});
                                var datas= result["data"]["records"];
                                if(parameters){
                                    for(var i in parameters){
                                        //数组 三元
                                        if(isArray(parameters[i])){
                                            if(parameters[i].length ==3){
                                                var a =parameters[i];
                                                $.each(datas,function (y,data) {
                                                    if(a[0]&&data[a[0]]&&data[a[0]]=="Y"){
                                                        data[i] = data[a[1]];
                                                    }else if(a[0]&&data[a[0]]&&data[a[0]]=="N"){
                                                        /*第3个参数为function*/
                                                        if(a[2]&&typeof(a[2]) =='function'){
                                                            data[i] = a[2](data);
                                                        }else{
                                                            data[i] = data[a[2]];
                                                        }

                                                    }
                                                });
                                            }
                                        }else{
                                            $.each(datas,function (y, data) {
                                                if(typeof parameters[i]!= 'string'){
                                                    data[i] = parameters[i];
                                                }else{
                                                    data[i] = data[parameters[i]];
                                                }

                                            });
                                        }


                                    }
                                    $master.datagrid('clientPaging', {data: datas});
                                }else{
                                    $master.datagrid('clientPaging', {data: datas});
                                }
                            } else {
                            }
                        });
                    });
                    $container.find(".detail-view").html("");
                    var detailView = $("<div />").appendTo($container.find(".detail-view"));
                    detailView.html("");
                    detailView.tabs({});
                    var obj=this;
                    detailView.tabs('add',{
                        title: _that['detailsModule'][0].title
                    });
                    detailView.data("master",[]);
                    var $master =$("<div class='main-table' style='width: 100%; height: 320px'/>").appendTo(detailView.tabs('getTab', 0));
                    DataTable.datagrid($master,
                        {   url:  _that['detailsModule'][0]['module']+'/query',
                            params:'',
                            pageList: [10, 15, 20, 30, 50, 100, 200],
                            pageSize:20,
                            pagination:true,
                            checkbox:isCheckbox,
                            singleSelect:false,
                            clickToEdit: false,
                            dblclickToEdit: true,
                            addNewColumns:_that['detailsModule'][0]['addNewColumns'],
                            onAfterEdit: function (index,row,changes) {
                                /**
                                 * Fires after the user finishes editing, the parameters contains:
                                 index: the editing row index, start with 0
                                 row: the record corresponding to the editing row
                                 changes: the changed field/value pairs
                                 */
                                if (_that['detailsModule'][0]["onChanged"]!=null ){
                                    _that['detailsModule'][0]["onChanged"].bind(obj)($master, "edit", row, changes,index);
                                }
                            }
                        });
                    $master.datagrid('enableCellEditing').datagrid('gotoCell', {
                        index: 0,
                        field: 'lxmc'
                    });
                    HTTP.post(cgjhUrl, DataBind.collectData(masterSelect)||{}, function (result) {
                        if (result["success"] == true) {
                            var datas= result["data"]["records"];
                            if(parameters){
                                for(var i in parameters){
                                    //数组 三元
                                   if(isArray(parameters[i])){
                                       if(parameters[i].length ==3){
                                           var a =parameters[i];
                                           $.each(datas,function (y,data) {
                                               if(a[0]&&data[a[0]]&&data[a[0]]=="Y"){
                                                   data[i] = data[a[1]];
                                               }else if(a[0]&&data[a[0]]&&data[a[0]]=="N"){
                                                   /*第3个参数为function*/
                                                   if(a[2]&&typeof(a[2]) =='function'){
                                                       data[i] = a[2](data);
                                                   }else{
                                                       data[i] = data[a[2]];
                                                   }

                                               }
                                           });
                                       }
                                   }else{
                                       $.each(datas,function (y, data) {
                                           if(typeof parameters[i]!= 'string'){
                                               data[i] = parameters[i];
                                           }else{
                                               data[i] = data[parameters[i]];
                                           }

                                       });
                                   }


                                }
                                $master.datagrid('clientPaging', {data: datas});
                            }else{
                                $master.datagrid('clientPaging', {data: datas});
                            }
                        } else {
                        }
                    });
                       // detailView.data("master").push($master);
                }
            };

            var dialog = Dialog.buildDialog(options);
            // 注册 对话框 确定按钮 事件
            dialog.regResultHandler(
                function (dlgContainer) {
                  var mxDlgContaier= this;
                  var $dg= dlgContainer.find('.main-table');
                  var rows=$dg.datagrid('getChecked');
                  if(!isCheckbox){
                      rows=$dg.datagrid('getRows');
                  }
                  if(rows.length<1){
                      $.messager.alert("提示信息", "请至少选择一条订单明细.");
                      return false;
                  }else{
                     if(judements) {
                         if (rows.length > 1) {
                             for (var index = 0; index < rows.length-1; index++) {
                                 for (var i in judements) {
                                     if (rows[index][i] != rows[index + 1][i]) {
                                         $.messager.alert("提示信息", "所选择的数据" + judements[i] + "不同，无法完成提交操作");
                                         return false;
                                     }
                                 }
                             }

                         }
                     }
                      var msg =[];
                      $.each(rows,function (i,row) {
                        if(parseInt(row['xqsl'])>parseInt(row['jhsl'])){
                           msg.push(row['cgjhid']);
                        }
                    });
                      if(msg.length !=0){
                            $.messager.confirm('提醒',msg+'需求数量大于计划数量',function (r) {
                                if(r){
                                    var _content ='<form class="masterMxSelect" method="post" />';
                                    var ddoptions={
                                        title: orderTitle,
                                        content: _content,
                                        width: 900,
                                        height:300,
                                        onInit: function ($container) {
                                            var _that = params['form']['options'];
                                            var url=_that['module']+'/query';
                                            var masterSelect = $container.find(".masterMxSelect");
                                            var _flag ='I';
                                            masterSelect.html("");
                                            HTTP.post(url,{},function (result) {
                                                if(result['success'] == true){
                                                    var records = result['data'];
                                                    var formBuild=_that["onBuildForm"](masterSelect, records||{}, true, _flag, params);
                                                    masterSelect.append('<input type="hidden" name="flag" value="' + _flag + '">');
                                                }
                                            });

                                        }
                                    };
                                    var dddialog = Dialog.buildDialog(ddoptions);
                                    dddialog.regResultHandler(
                                        function (dd) {
                                            var master = DataBind.collectData(dd.find(".masterMxSelect"));
                                            master["djly"] = "1";
                                            var _details=[];
                                            if ( tblname) {
                                                _details.push({
                                                    id: tblname,
                                                    records: rows||[]
                                                });
                                            }
                                            var Data=JSON.stringify({
                                                master: master,
                                                details: _details
                                            });
                                            var that = this;
                                            function resultHandler(response) {
                                                if ( response["success"]!=null && response["success"]==true ){
                                                    that.close();
                                                    $.messager.alert("提示信息", "操作成功");
                                                    mxDlgContaier.close();
                                                    singleTable.$container.singleTable("reload", {});
                                                } else {
                                                    $.messager.alert("提示信息", response['message']);
                                                }
                                            }
                                            HTTP.post(tboptions['module']+'/add', Data, resultHandler);

                                        }
                                    );
                                    dddialog.show();
                                    return false;
                                }
                            })
                          return false;
                      }else{
                          var _content ='<form class="masterMxSelect" method="post" />';
                          var ddoptions={
                              title: orderTitle,
                              content: _content,
                              width: 900,
                              height:300,
                              onInit: function ($container) {
                                  var _that = params['form']['options'];
                                  var url=_that['module']+'/query';
                                  var masterSelect = $container.find(".masterMxSelect");
                                  var _flag ='I';
                                  masterSelect.html("");
                                  HTTP.post(url,{},function (result) {
                                      if(result['success'] == true){
                                          var records = result['data'];
                                          var formBuild=_that["onBuildForm"](masterSelect, records||{}, true, _flag, params);
                                          masterSelect.append('<input type="hidden" name="flag" value="' + _flag + '">');
                                      }
                                  });

                              }
                          };
                          var dddialog = Dialog.buildDialog(ddoptions);
                          dddialog.regResultHandler(
                              function (dd) {
                                  var master = DataBind.collectData(dd.find(".masterMxSelect"));
                                  master["djly"] = "1";
                                  var _details=[];
                                  if ( tblname) {
                                      _details.push({
                                          id: tblname,
                                          records: rows||[]
                                      });
                                  }
                                  var Data=JSON.stringify({
                                      master: master,
                                      details: _details
                                  });
                                  var that = this;
                                  function resultHandler(response) {
                                      if ( response["success"]!=null && response["success"]==true ){
                                          that.close();
                                          $.messager.alert("提示信息", "操作成功");
                                          mxDlgContaier.close();
                                          singleTable.$container.singleTable("reload", {});
                                      } else {
                                          $.messager.alert("提示信息", response['message']);
                                      }
                                  }
                                  HTTP.post(tboptions['module']+'/add', Data, resultHandler);

                              }
                          );
                          dddialog.show();
                          return false;
                      }
                  }
                  }
            );
            dialog.show();

        },
        //提交
        submitGzl:function (params) {
            var _that = this.dataTable;
            var singleTable = this.$container;
            var selectedRow = _that.datagrid("getSelected");
            var selected =_that.datagrid("getSelected");
            if (  selectedRow==null ){
                $.messager.alert("提示信息", "请先选择需要处理的项目.");
                return ;
            }
            var data=selectedRow;
            data['wfoperate']="1";
            WORKFLOW.submit( this['options']['module']+"/wfnextinfo", data, this['options']['module']+"/wfgo", function () {
                singleTable.singleTable("reload", {});
            } );
        },
        //撤回
        pullbacktGzl:function (params) {
            var _that = this.dataTable;
            var singleTable = this.$container;
            var selectedRow = _that.datagrid("getSelected");
            if (  selectedRow==null ){
                $.messager.alert("提示信息", "请先选择需要处理的项目.");
                return ;
            }

            var data=selectedRow;
            data['wfoperate']="3";
            WORKFLOW.submit(this['options']['module']+"/wfnextinfo",data, this['options']['module']+"/wfpullback", function () {
                singleTable.singleTable("reload", {});
            });
        },
        //退回
        untreadGzl:function (params) {
            var _that = this.dataTable;
            var singleTable = this.$container;
            var selectedRow = this.dataTable.datagrid("getSelected");
            if (  selectedRow==null ){
                $.messager.alert("提示信息", "请先选择需要处理的项目.");
                return ;
            }

            var data=selectedRow;
            data['wfoperate']="2";
            WORKFLOW.submit(this['options']['module']+"/wfnextinfo", data,this['options']['module']+"/wfgoback", function () {
                singleTable.singleTable("reload", {});
            });
        },
        filter: function(params){
          var dataTable = this.dataTable;
          var enableFilter = dataTable.data("enableFilter");
          if ( enableFilter ){
            dataTable.datagrid('disableFilter');
            dataTable.removeData("enableFilter");
          } else {
            dataTable.datagrid('enableFilter');
            dataTable.data("enableFilter", true);
          }


        },
        viewprocess:function (params) {
            var _that = this.dataTable;
            var selectedRow = _that.datagrid("getSelected");
            if (  selectedRow==null ){
                $.messager.alert("提示信息", "请先选择需要处理的项目.");
                return ;
            }

            var wfinstid = selectedRow['wfinstid'];
            HTTP.post("wf/common/wflog/" + wfinstid, {}, function(resp){
                if ( resp.success ) {
                    var submitDlgOptions = {
                        title: "工作流查看",
                        content: '',
                        width: 800,
                        height: 480,
                        onInit: function ($container) {
                            WORKFLOW.trace($container, resp.data.records);
                        }
                    };

                    var submitDlg = Dialog.buildDialog(submitDlgOptions);
                    submitDlg.show();
                } else {
                    $.messager.alert('', resp['message'] || '获取工作流信息失败');
                }
            });
        },
        detailView: function (index) {
            this.dataTable.datagrid('selectRow', index);
            var row = this.dataTable.datagrid('getSelected');
            if (  row==null ){
                $.messager.alert("提示信息", "选择需要编辑的记录");
                return ;
            }
            var _form = this.options["form"];
            HTTP.post(this.options["getURL"],
                JSON.stringify(row),
                function (result) {
                    _form.build(result, "View", "查看详情 - " + row["bxid"]);
                });
        },
        columnSetting: function (params) {
            var singleTable = this;
            var dataTable = this.dataTable;
            var columns = dataTable.data("datagrid")["options"]["columns"][0];
            var queryURL = this.options["module"] + "/query";
            HTTP.post("kzxx/profile/values", {type: "ColumnShow", url: queryURL}, function (result) {
                var treeDatas = [];
                if (  result!=null && result.length >0 ){
                    $.each(result, function (i, column) {
                        treeDatas.push({
                            "id": column["param"],
                            "param": column["param"],
                            "text": column["text"],
                            checked: (column["value"]=='Y')
                        })
                    });
                } else {
                    $.each(columns, function (i, column) {
                        treeDatas.push({
                            "id": column["field"],
                            "param": column["field"],
                            "text": column["title"],
                            checked: true
                        })
                    });
                }
                var options = {
                    title: "显示列设置",
                    content: '<ul name="columns"></ul>',
                    width: 500,
                    height: 280,
                    singleTable: singleTable,
                    onInit: function ($container) {
                        $container.find("[name='columns']").tree({
                            data: treeDatas,
                            checkbox: true
                        });
                    }

                };

                var dialog = Dialog.buildDialog(options);
                // 注册 对话框 确定按钮 事件
                dialog.regResultHandler(
                    function (dlgContainer) {
                        var TreeObj = dlgContainer.find("[name='columns']");
                        var profiles = [];
                        var queryURL = this.opts.singleTable.options.module + "/query";
                        var nodes = TreeObj.tree("getChecked");
                        if ( nodes!=null ){
                            $.each(nodes, function (i, node) {
                                profiles.push({
                                    type: "ColumnShow",
                                    param: node.param,
                                    value: "Y",
                                    url: queryURL,
                                    text: node.text
                                });
                            });
                        }

                        var nodes = TreeObj.tree("getChecked", "unchecked");
                        if ( nodes!=null ){
                            $.each(nodes, function (i, node) {
                                profiles.push({
                                    type: "ColumnShow",
                                    param: node.param,
                                    value: "N",
                                    url: queryURL,
                                    text: node.text
                                });
                            });
                        }

                        if ( profiles.length==0 ){
                            return
                        }

                        var singleTable = this.opts.singleTable.$container;
                        HTTP.post("kzxx/profile/setting/batch", {datas: profiles},  function (result) {
                            if ( result["success"]==true ) {
                                singleTable.singleTable("reload", {});
                            }
                        });
                    }
                );
                dialog.show();
            });

        },
    };

    SingleTable.prototype.init = function () {

        var h = this.$container.parent().height();
        if ( h < 100 ){
            h = window.screen.availHeight
        }
        var containerCopy =  this.$container.clone();
        this.$container.empty();
        var layout = $('<div class="easyui-layout" style="width: 100%; height: ' + h + 'px" />');
        var north = $('<div data-options="region:\'north\'" style="border: 0; border-bottom: 3px solid #9dd2f1;" />');
        layout.append(north);
        var center = $('<div data-options="region:\'center\', border: false" />');
        this.centerview = center;
        layout.append(center);
        if ( this.options["expand"] ) {
            var html =  '<div data-options="region:\'south\', border: false" style="width: 100%; height: ' + (h-79)/2 + 'px"   >' +
                '   <div class="easyui-layout" style="width: 100%; height: 100%">' +
                '     <div data-options="region:\'west\', border: false" style="width: 50%; height: 100%" ><table class="right" style="height: 100%"/></div>' +
                '     <div data-options="region:\'east\', border: false" style="width: 50%; height: 100%"><table class="left" style="height: 100%"/></div>' +
                '   </div>' +
                '</div>';
            var south = $(html);
            layout.append(south);
            this.options["onSelect"] = this.options["onSelect"].bind(south);
        }
        if ( this.options["leftView"] ) {
            var left = $('<div data-options="region:\'west\', border: false" style="width: 18%;" />');
            layout.append(left);
            this.options["left-view"] = left;
        }

        if ( this.options["rightView"] ) {
            var right = $('<div data-options="region:\'east\', border: false" style="width: 24%;" />');
            layout.append(right);
            this.options["right-view"] = right;
        }

        this.$container.append(layout);
        var _toolBar = containerCopy.find(".datagrid-toolbar");
        if ( _toolBar==null || _toolBar.length==0 ){
            //  构建 Toolbar 工具栏
            _toolBar = $('<div class="datagrid-toolbar" /> ');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-reload" plain="true" iconCls="icon-reload">查询</a>');
            _toolBar.append('<span class="datagrid-btn-separator" style="vertical-align: middle; height: 15px;display:inline-block;float:none"></span>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-filter" plain="true" iconCls="icon-filter">筛选</a>');
            _toolBar.append('<span class="datagrid-btn-separator" style="vertical-align: middle; height: 15px;display:inline-block;float:none"></span>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-add" plain="true" iconCls="icon-add"">新增</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-copy" plain="true" iconCls="icon-copy">复制</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-edit" plain="true" iconCls="icon-edit">编辑</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-remove" plain="true" iconCls="icon-remove">删除</a>');
            _toolBar.append('<span class="datagrid-btn-separator" style="vertical-align: middle; height: 15px;display:inline-block;float:none"></span>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-flag" plain="true" iconCls="icon-flag">启用/停用</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-submit" plain="true" iconCls="toolbar-submit">提交</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-pullback" plain="true" iconCls="toolbar-submit">撤回</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-untread" plain="true" iconCls="toolbar-submit">退回</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-viewprocess" plain="true" iconCls="toolbar-submit">查看流程</a>');
            _toolBar.append('<a href="#" class="easyui-linkbutton toolbar-purchase" plain="true" iconCls="icon-sum">按**生成</a>');
        }
        north.append(_toolBar);
        var toolBar = north.find(".datagrid-toolbar");
        toolBar.css("padding", "0px 2px");
        this.toolBar = toolBar;

        var _searchForm = containerCopy.find("form.search-form");
        north.height(38);

        if ( _searchForm!=null && _searchForm.length>0 ) {
            north.append(_searchForm);
            north.height(78);
        }
        this.searchForm = north.find("form.search-form");

        //  dataTable 数据表格, 展示数据

        if  ( this.options["customize"] == false ){
            var dataTable = containerCopy.find("table.table");
            if ( dataTable==null || dataTable.length==0 ){
                dataTable = $('<table class="table" style="height: 100%"/> ');
            }
            center.append(dataTable);
            if ( this.options["type"]=='tree' ){
                dataTable.treegrid(this.options);
                dataTable.treegrid({
                    lines: true,
                    rownumbers: true,
                    idField: 'id',
                    treeField: 'flid',
                    pagination: true,
                    pageSize: 2,
                    pageList: [2,5,10],
                    onResizeColumn: function (field, width) {
                        var module = $(this).data("datagrid")["options"]["module"];
                        if (  module==null || module=='' ){
                            return
                        }
                        HTTP.post("kzxx/profile/setting", {type: "ColumnWidth", param: field, value: width, url: module+"/query"});

                    }
                });
            } else {
                dataTable.datagrid(this.options);
            }
            //dataTable.find(".panel").find(".datagrid-wrap").css("height", "688px");
            this.dataTable = dataTable;
        }


        // 构建表单, 用来增加 复制 编辑 数据
        var form = $('<div class="easyui-window" title="Modal Window" data-options="modal:true,closed:true,iconCls:\'icon-save\'" style="width:500px;height:200px;padding:10px;">' +
            '    <form class="singleTableForm" method="post" />' +
            '    <div style="text-align:center;" class="dialog-button messager-button"> ' +
            '        <a href="#" class="easyui-linkbutton form-ok" icon="icon-ok"></a>' +
            '        <a href="#" class="easyui-linkbutton form-cancel" icon="icon-cancel">取消</a> ' +
            '   </div>' +
            '</div>');
        this.$container.append(form);

        toolBar.find(".toolbar-reload").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.reload.call(event.data.context, _options);
        });

        toolBar.find(".toolbar-add").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.add.call(event.data.context, _options);
        });

        toolBar.find(".toolbar-copy").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.copy.call(event.data.context, _options);
        });

        toolBar.find(".toolbar-edit").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.edit.call(event.data.context, _options);
        });

        toolBar.find(".toolbar-remove").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.del.call(event.data.context, _options);
        });

        toolBar.find(".toolbar-flag").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.changeTybz.call(event.data.context, _options);
        });
        toolBar.find(".toolbar-purchase").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.generate.call(event.data.context, _options);
        });

        toolBar.find(".toolbar-submit").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.submitGzl.call(event.data.context, _options);
        });
        toolBar.find(".toolbar-pullback").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.pullbacktGzl.call(event.data.context, _options);
        });
        toolBar.find(".toolbar-untread").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.untreadGzl.call(event.data.context, _options);
        });
        toolBar.find(".toolbar-viewprocess").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.viewprocess.call(event.data.context, _options);
        });
        toolBar.find(".toolbar-filter").on("click", {context: this, dataTable: dataTable}, function (event) {
            var _options = event.data.context.options;
            _options.filter.call(event.data.context, _options);
        });

        $.parser.parse(this.$container);
    };

    $.fn.singleTable = function (option, params) {
        this.each(function () {
            var $this = $(this);
            var data = $this.data('gavelinfo.singleTable');
            if (!data) {
                var options = $.extend({}, SingleTable.DEFAULTS, SingleTable.EVENTS, $this.data(), typeof option === 'object' && option);
                $this.data('gavelinfo.singleTable', (data = new SingleTable(this, options)));
            }
            if (typeof option === "string" && typeof data.options[option] == "function") {
                // 执行插件的方法
                data.options[option].call(data, params);
            }
        });
        return this;
    };
})(jQuery, window, document);