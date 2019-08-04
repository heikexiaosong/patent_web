; (function ($, window, docment, undefined) {
    $.fn.Container = function (options) {
        var Name = {
            Init: function (ele, opt) {
                this.$ele = ele;
                this.defaults = {
                    id: ele.attr('id')
                };
                this.options = $.extend({}, this.defaults, opt);
                this.reload(this.$ele,this.options);
                var _toolBar = this.$ele.find(".datagrid-toolbar");
                var dataTable=this.$ele.find("table.table");
            },
            reload:function (ele, opt) {
                var queryURL=this.options['url']+'/query';
                var element=this.$ele;
                if(this.options['queryUrl']){
                    queryURL=this.options['queryUrl'];
                }
                var contianer=this;
                if(opt['treeOption']){
                    this.$ele.find('.toolbar-table').iTreegrid($.extend({},{url:''},opt['treeOption'],requester_treegrid(opt['treeOption'].columns[0])))
                }else{
                    var cols=[];
                    if(this.options["columns"]&&this.options["columns"][0])cols=this.options["columns"][0];
                    var columns=requester(cols,"kzzx/gridset/query",queryURL);
                    var datagrid_options={
                        checkOnSelect:this.options['checkOnSelect'],
                        selectOnCheck:this.options['selectOnCheck'],
                        columns:[columns],
                        singleSelect:this.options['singleSelect'],
                        queryParams:this.options['queryParams']||this.$ele.find('form'),
                        columnFormatter: this.options['columnFormatter'],
                        rowStyler:this.options['rowStyler'],
                        onDblClickRow:function () {
                            if( contianer.onDblClickRow(element,opt)){
                                contianer.onDblClickRow(element,opt)
                            }else{
                                $(this).closest('.gui-div').find('.toolbar-review').click();
                            }

                        },
                        onLoadSuccess:function (data) {
                            var that=$(this).closest('.datagrid-view').find('div.datagrid-header-rownumber');
                            that.css('position','relative');
                            that.css('cursor','pointer');
                            that.append($('<span class="tabs-icon fa fa-navicon"></span>'));
                            $(docment).click(function () {
                                element.find('.product-nav-list').addClass('fadeOutLeft');
                                setTimeout(function(){
                                    element.find('.product-nav-list').removeClass('fadeOutLeft');
                                    element.find('.product-nav-list').remove();
                                }, 500);
                            });
                            that.unbind().bind('click',function (event) {
                                event.stopPropagation();
                                if(element.find('.product-nav-list').length>0){
                                    element.find('.product-nav-list').addClass('fadeOutLeft');
                                    setTimeout(function(){
                                        element.find('.product-nav-list').removeClass('fadeOutLeft');
                                        element.find('.product-nav-list').remove();
                                    }, 500);
                                    return false
                                }
                                var columns=element.find('.toolbar-table').iDatagrid('options')["columns"][0];
                                treeLine(queryURL,element,columns,contianer);

                            });

                        },
                        onClickRow:function (rowIndex, rowData) {
                            contianer.onClickRow(element,opt);
                        },
                        onResizeColumn: function (field, width) {
                            var columns=element.find('.toolbar-table').datagrid('options')["columns"][0];
                            var data=[];
                            $.each(columns, function (i, column) {
                                if(column['field']!=''){
                                    data.push({
                                        "id": column["field"],
                                        "caption": column["title"],
                                        "width":column['width'],
                                        "position":i,
                                        "show": (column["hidden"]!=true)
                                    })
                                }
                            });
                            HTTP.post("kzzx/gridset/save",{"listid":queryURL,data:data},function (result) {
                                if(result['success']) {
                                }else{
                                    layer.message(result['message']||'设置失败');
                                }
                            });
                        }};
                    if(!this.options['url']){
                        this.$ele.find('.toolbar-table').iDatagrid(datagrid_options);
                    }else{
                        this.$ele.find('.toolbar-table').iDatagrid($.extend({},datagrid_options,{url:queryURL}));
                    }


                }


            },
            add:function (ele, opt) {},
            evaluate:function (ele,opt) {
                this.$ele = ele;
                var _that=this;
                $.ajax({
                    url: 'mock/mock.json',
                    dataType: 'json'
                }).done(function(data, status, jqXHR){
                    var toolbar_name=name_text(data['toolbar']);
                    if ( !!opt["toolbarname"] ) $.extend(toolbar_name, opt["toolbarname"]);

                    var btn_name=name_text(data['btn']);
                    if ( !!opt["toolbarname"] ) $.extend(btn_name, opt["toolbarname"]);

                    var module=opt['url']+'/query';
                    if(opt['queryUrl']){
                        module=opt['queryUrl']
                    }
                    var _toolBar =  _that.$ele.find(".datagrid-toolbar a");
                    /*export*/
                    _that.$ele.find('.toolbar-export').iMenubutton({
                        text:toolbar_name['export'],
                        iconCls: 'fa fa-file-excel-o',
                        onClick:function () {
                            HTTP.download(opt['url']+'/export',DataBind.collectData(_that.$ele.find('.query-criteria')));
                        }
                    });
                    if(opt['dialog']&&opt['dialog']['addGroup']){

                        _that.$ele.find('.toolbar-add').iMenubutton({
                            event: 'openDialog',
                            text:toolbar_name['add'],
                            iconCls: 'fa fa-plus',
                            dialog:$.extend({},{
                                title:toolbar_name['add'],
                                tag:'add',
                                module:opt['url']+'/query',
                                buttonsGroup:opt['dialog']['addGroup']
                            }, opt['dialog'])
                        });
                    }else{
                        _that.$ele.find('.toolbar-add').iMenubutton({
                            event: 'openDialog',
                            text:toolbar_name['add'],
                            iconCls: 'fa fa-plus',
                            dialog:$.extend({},{
                                title:toolbar_name['add'],
                                tag:'add',
                                module:opt['url']+'/query',
                                buttonsGroup:[{text:btn_name['gui-btn-continue'],url:_that['options']['url']+'/add',iconCls:'fa fa-check',handler:'ajaxForm',continue:true,btnCls:'gui-btn-continue'},
                                    {text:btn_name['gui-btn-save'],url:_that['options']['url']+'/add',iconCls:'fa fa-save',handler:'ajaxForm',btnCls:'gui-btn-save'}]
                            }, opt['dialog'])
                        });
                    }
                    if(opt['dialog']&&opt['dialog']['editGroup']){
                        _that.$ele.find('.toolbar-edit').iMenubutton({
                            event:'openDialog',
                            iconCls: 'fa fa-pencil',
                            text:toolbar_name['edit'],
                            opts: opt,
                            dialog:$.extend({},{
                                title:toolbar_name['edit'],
                                url:true,
                                tag:'edit',
                                module:opt['url']+'/query',
                                grid:{
                                    editEnable: function (row) {
                                        if ( row!=null && row["zt"]!=null && row["zt"] != "I" ) {
                                            return false;
                                        }
                                    },
                                },
                                buttonsGroup:[opt['dialog']['editGroup']]
                            }, opt['dialog'])
                        });
                    }else{
                        _that.$ele.find('.toolbar-edit').iMenubutton({
                            event:'openDialog',
                            iconCls: 'fa fa-pencil',
                            text:toolbar_name['edit'],
                            opts: opt,
                            dialog:$.extend({},{
                                title:toolbar_name['edit'],
                                url:true,
                                tag:'edit',
                                module:opt['url']+'/query',
                                grid:{
                                    editEnable: function (row) {
                                        if ( row!=null && row["zt"]!=null && row["zt"] != "I" ) {
                                            return false;
                                        }
                                    },
                                },
                                buttonsGroup:[
                                    {text:btn_name['gui-btn-update'],url:_that['options']['url']+'/update',iconCls:'fa fa-plus',handler:'ajaxForm',btnCls:'gui-btn-save'},
                                ]
                            }, opt['dialog'])
                        });
                    }
                    /*review*/
                    _that.$ele.find('.toolbar-review').iMenubutton({
                        event:'openDialog', iconCls: 'fa fa-eye', text:toolbar_name['review'],
                        opts: opt,
                        dialog:$.extend({},{
                            title:toolbar_name['review'],
                            tag:'review',
                            url:true
                        }, opt['dialog'])
                    });
                    /*copy*/
                    if(opt['dialog']&&opt['dialog']['copyGroup']){
                        /*copy*/
                        _that.$ele.find('.toolbar-copy').iMenubutton({
                            event:'openDialog', iconCls: 'fa fa-copy', text:toolbar_name['copy'],
                            dialog:$.extend({},{
                                title:toolbar_name['copy'],
                                tag:'copy',
                                url:true,
                                module:module,
                                buttonsGroup:[opt['dialog']['copyGroup']]
                            }, opt['dialog'])
                        });
                    }else{
                        _that.$ele.find('.toolbar-copy').iMenubutton({
                            event:'openDialog', iconCls: 'fa fa-copy', text:toolbar_name['copy'],
                            dialog:$.extend({},{
                                title:toolbar_name['copy'],
                                tag:'copy',
                                url:true,
                                module:module,
                                buttonsGroup:[
                                    {text:btn_name['gui-btn-continue'],url:_that['options']['url']+'/add',iconCls:'fa fa-save',continue:true,btnCls:'gui-btn-continue'
                                        ,handler:"parameterForm",callback:function(){ return copy_submit(opt['dialog']['id'])}},
                                    {text:btn_name['gui-btn-save'],url:_that['options']['url']+'/add',iconCls:'fa fa-plus',handler:"parameterForm",btnCls:'gui-btn-save',
                                        callback:function(){ return copy_submit(opt['dialog']['id'])}}

                                ]
                            }, opt['dialog'])
                        });
                    }
                    /*del*/
                    _that.$ele.find('.toolbar-delete').iMenubutton({
                        event:'doAjax', text:toolbar_name['delete'],
                        url:_that['options']['url']+'/delete',
                        iconCls:'fa fa-trash',
                        grid: {
                            singleSelect:true,
                            tag:'del',
                            editEnable: function (row) {
                                if ( row!=null && row["zt"]!=null && row["zt"] !=="I" ) {
                                    return false;
                                }
                            },
                        }
                    });
                    /*print*/
                    _that.$ele.find('.toolbar-print').iMenubutton({
                        iconCls: 'fa fa-print',
                        text:toolbar_name['print'],
                        onClick:function () {
                            _that.print(ele,opt);
                        }
                    });
                    var span_print='<span class="m-btn-downarrow downcss"></span>';
                    _that.$ele.find('.toolbar-print').append(span_print);
                    _that.printStyle(_that.$ele,opt);
                    /*refresh*/
                    _that.$ele.find('.toolbar-reload').iMenubutton({
                        text:toolbar_name['refresh'],
                        event: 'query',
                        iconCls: 'fa fa-refresh',
                        form: {'class': 'query-criteria'},
                        grid: {type: 'datagrid'}
                    });
                    /*search*/
                    _that.$ele.find('.toolbar-search').text(toolbar_name['search']);
                    searh_initialize( _that);
                    /*workflow*/
                    _that.$ele.find('.toolbar-submit').iMenubutton({
                        iconCls:'fa fa-hand-o-up',
                        text:toolbar_name['submit'],
                        onClick:subit
                    });
                    _that.$ele.find('.toolbar-revoke').iMenubutton({
                        onClick:revoke,
                        text:toolbar_name['revoke'],
                        iconCls: 'fa fa-hand-o-left'
                    });
                    _that.$ele.find('.toolbar-return').iMenubutton({
                        onClick: viewreturn,
                        text:toolbar_name['return'],
                        iconCls: 'fa fa-hand-o-down'
                    });
                    _that.$ele.find('.toolbar-transfer').iMenubutton({
                        onClick: transfer,
                        text:toolbar_name['transfer'],
                        iconCls: 'fa fa-hand-o-down'
                    });
                    _that.$ele.find('.toolbar-viewprocess').iMenubutton({
                        onClick: viewprocess,
                        text:toolbar_name['viewprocess'],
                        iconCls: 'fa fa-align-justify'
                    });
                    _that.$ele.find('.toolbar-run').iMenubutton({
                        event:'doAjax',
                        text:toolbar_name['run'],
                        module:_that['options']['url'],
                        url:_that['options']['url']+'/record/qt',
                        grid: {
                            singleSelect:true,
                            tag:'run'
                        }
                    });
                    function subit(ele) {
                        var selectedRow=_that.$ele.find('.toolbar-table').iDatagrid('getSelected');
                        if (  selectedRow==null ){
                            $.messager.alert("提示信息", "请先选择需要处理的项目.");
                            return ;
                        }
                        var data=selectedRow;
                        data['wfoperate']="1";
                        WORKFLOW.submit( _that['options']['url']+"/wfnextinfo", data, _that['options']['url']+"/wfgo", function () {
                            _that.$ele.find('.toolbar-reload').click();
                        } );
                    }
                    function revoke(ele) {
                        var selectedRow=_that.$ele.find('.toolbar-table').iDatagrid('getSelected');
                        if (  selectedRow==null ){
                            $.messager.alert("提示信息", "请先选择需要处理的项目.");
                            return ;
                        }
                        var data=selectedRow;
                        data['wfoperate']="3";
                        WORKFLOW.submit(_that['options']['url']+"/wfnextinfo", data, _that['options']['url']+"/wfpullback", function () {
                            _that.$ele.find('.toolbar-reload').click();
                        } );
                    }
                    function viewreturn(ele) {
                        var selectedRow=_that.$ele.find('.toolbar-table').iDatagrid('getSelected');
                        if (  selectedRow==null ){
                            $.messager.alert("提示信息", "请先选择需要处理的项目.");
                            return ;
                        }
                        var data=selectedRow;
                        data['wfoperate']="2";
                        WORKFLOW.submit(_that['options']['url']+"/wfnextinfo", data, _that['options']['url']+"/wfgoback", function () {
                            _that.$ele.find('.toolbar-reload').click();
                        } );
                    }
                    function transfer(ele) {
                        var selectedRow=_that.$ele.find('.toolbar-table').iDatagrid('getSelected');
                        if (  selectedRow==null ){
                            $.messager.alert("提示信息", "请先选择需要处理的项目.");
                            return ;
                        }
                        var data=selectedRow;
                        data['wfoperate']="4";
                        WORKFLOW.submit(_that['options']['url']+"/wfnextinfo", data, _that['options']['url']+"/wftransfer", function () {
                            _that.$ele.find('.toolbar-reload').click();
                        } );
                    }
                    function viewprocess(ele) {
                        var selectedRow=_that.$ele.find('.toolbar-table').iDatagrid('getSelected');
                        if (  selectedRow==null ){
                            $.messager.alert("提示信息", "请先选择需要处理的项目.");
                            return ;
                        }
                        var wfinstid = selectedRow['wfinstid'];
                        HTTP.post("wf/common/wflog/" + wfinstid, {}, function(resp){
                            if ( resp.success ) {
                                var $container= $('<div style="position: relative"/>');
                                $container.iDialog({
                                    title:'工作流查看',
                                    width: 1120, height: 630,
                                    buttons: [{
                                        text:'取消',
                                        iconCls: "fa fa-close",
                                        btnCls: "gui-btn-danger",
                                        handler:function () {
                                            $container.iDialog('close');
                                        }
                                    }],
                                    onOpen:function () {
                                        WORKFLOW.trace($container, resp.data.records);
                                    },
                                    onClose: function () {
                                        $(this).form("clear");
                                        $(this).iDialog('destroy');
                                    }
                                });
                                var $div=$('<div class="stepTraces" style="height: 100%" />');
                                $container.append($div);
                                $container.iDialog('open');
                            } else {
                                $.messager.alert('', resp['message'] || '获取工作流信息失败');
                            }
                        });

                    }

                })
            },
            print:function (ele,opt) {
                var data=$('#tabs').iTabs('getSelected').panel('options')['data']['data'];
                var mkid=data['mkid']||'';
                HTTP.post('print/printstyle/query/common/default',{mkid:mkid},function (result) {
                    if(result['success']){
                        var id=result['data']['records']['id'];
                        var selectedRow=ele.find('.toolbar-table').iDatagrid('getSelected');
                        if(!selectedRow){
                            $.messager.alert('警告','请选择一条记录进行打印');
                            return false;
                        }
                        var cookie=document.cookie;
                        var href=window.location.href;
                        var index = href.lastIndexOf("\/");
                        href=href.substring(0,href.length-7);
                        var queryParams={
                            "data":{
                                id: id,
                                url:href+'/'+opt['url'],
                                mkid:mkid,
                                condition:{id:selectedRow['id'],instId:selectedRow['wfinstid']}
                            },
                            "url":href,
                            "cookie":cookie
                        };
                        HTTP.post('http://localhost:19529/print/designer',queryParams,function (result) {},false,true,function(res){
                            $.messager.confirm('提示', '是否要下载最近的报表插件', function (r) {
                                if (r) {
                                    HTTP.download('win32/update/download/plugin/reprot',{},'get');
                                }
                            });
                        })
                    }
                });
            },
            printStyle:function (ele,opt) {
                this.$ele.find('.downcss').unbind().bind('click',function (event) {
                    event.stopPropagation();
                    if(ele.find('.print-style').length>0){
                        ele.find('div.print-style').remove();
                    }else{
                        var span=$('<div class="print-style"><ul></ul></div>');
                        ele.append(span);
                        var data=$('#tabs').iTabs('getSelected').panel('options')['data']['data'];
                        var mkid=data['mkid']||'';
                        HTTP.post('print/printstyle/query/common/valid',{mkid:mkid},function (result) {
                            if(result['success']){
                                if(result['data']['records'].length>0){
                                    var content=result['data']['records'];
                                    $.each(content,function (i,item) {
                                        var li='<li class="print-style-li" data-options="id:'+item["id"]+'"><span>'+i+'.'+item["mc"]+'</span></li>';
                                        ele.find('.print-style ul').append($(li));
                                    });
                                    ele.find('.print-style li').each(function (i,term) {
                                        $(this).click(function () {
                                            var id=$(this).attr('data-options').split(':')[1];
                                            var selectedRow=ele.find('.toolbar-table').iDatagrid('getSelected');
                                            if(!selectedRow){
                                                $.messager.alert('警告','请选择一条记录进行打印');
                                                return false;
                                            }
                                            var cookie=document.cookie;
                                            var href=window.location.href;
                                            var index = href.lastIndexOf("\/");
                                            href=href.substring(0,href.length-7);
                                            var data=$('#tabs').iTabs('getSelected').panel('options')['data']['data'];
                                            var mkid=data['mkid']||'';
                                            var queryParams={
                                                "data":{
                                                    id: id,
                                                    url:href+'/'+opt['url'],
                                                    mkid:mkid,
                                                    condition:{id:selectedRow['id'],instId:selectedRow['wfinstid']}
                                                },
                                                "url":href,
                                                "cookie":cookie
                                            };
                                            HTTP.post('http://localhost:19529/print/designer',queryParams,function (result) {},false,true,function(res){
                                                $.messager.confirm('提示', '是否要下载最近的报表插件', function (r) {
                                                    if (r) {
                                                        HTTP.download('win32/update/download/plugin/reprot',{},'get');
                                                    }
                                                });
                                            })
                                        })
                                    })
                                }else{
                                    ele.find('.print-style ul').append('<li><span style="font-style: italic;color: #999999">暂无数据</span></li>');
                                }
                            }else{
                                ele.find('.print-style ul').append('<li><span style="font-style: italic;color: #999999">暂无数据</span></li>');
                            }

                        })

                        ele.find('div.print-style').click(function (event) {
                            event.stopPropagation();
                        })
                    }
                })
            },
            onClickRow:function (ele,opt,row) {
                if(opt.onClickRow){
                    opt.onClickRow.call(ele.context,opt);
                }
            },
            onDblClickRow:function (ele,opt,row) {
                if(opt.onDblClickRow){
                    opt.onDblClickRow.call(ele.context,opt);
                }
            }
        };
        Name.evaluate(this, options);
        Name.Init(this, options);
        return Name;
    };
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
    function lineSET(dialog,queryURL,data,ele) {
        ele.find('.product-nav-list').addClass('fadeOutLeft');
        setTimeout(function(){
            ele.find('.product-nav-list').removeClass('fadeOutLeft');
            ele.find('.product-nav-list').remove();
        }, 500);
        $('<div id="'+dialog+'" style="position:relative">').iDialog({
            width:800,
            height:480,
            title:'常规设置',
            buttons: [{
                text: '确认',
                iconCls: 'fa fa-save',
                btnCls: 'gui-btn-save',
                handler: function (div) {
                    var profiles=[];
                    $('#'+dialog).find('.setLine_datagrid').datagrid('acceptChanges');
                    var data= $('#'+dialog).find('.setLine_datagrid').datagrid('getRows');
                    HTTP.post("kzzx/gridset/save",{"listid":queryURL,data:data},function (result) {
                        if(result['success']) {
                            $(div).remove();
                            var columns=requester(ele.find('.toolbar-table').datagrid("options")["columns"][0],"kzzx/gridset/query",queryURL);
                            ele.find('.toolbar-table').datagrid({columns:[columns],refresh:false});
                            ele.find('.toolbar-reload').click();
                        }else{
                            layer.msg(result['message']||'设置失败');
                        }
                    });
                    $('#'+dialog).iDialog('destroy');
                }
            },{
                text:'取消',
                iconCls: "fa fa-close",
                btnCls: "gui-btn-danger",
                handler:function () {
                    $('#'+dialog).iDialog('destroy');
                }
            }],
            onOpen:function () {
                var div=$('<div class="setLine_datagrid" ></div>');
                $('#'+dialog).append(div);
                var columns=[
                    { title: "显示",  index: 1, field: "show", width: 80,align:'center', fieldType:{type:'checkbox',options:{Y:true,N:false}}},
                    {   title: "列名", index: 2, field: "caption", width: 160, align: 'center',editor: {type: 'textbox'}},
                    { title: "列宽",  index: 3, field: "width", width: 160,align:'center',editor: {type: 'textbox'}}
                ];
                customDatagrid.init($(div),'', {columns: columns});
                $(div).edatagrid({  data:data||[], toolbar: [{
                        text:'上移',
                        iconCls: 'fa fa-long-arrow-up',
                        handler: function(){
                            var $table=$(div);
                            var rows=$table.edatagrid('getRows');
                            var rowlength=rows.length;
                            var selectrow=$table.edatagrid('getSelected');
                            if(selectrow == null){
                                return false;
                            }
                            var rowIndex=$table.edatagrid('getRowIndex',selectrow);
                            if(rowIndex==0){
                                $.messager.alert('提示', '顶行无法上移!', 'warning');
                            }else{
                                $table.edatagrid('deleteRow', rowIndex);//删除一行
                                rowIndex--;
                                $table.edatagrid('insertRow', {
                                    index:rowIndex,
                                    row:selectrow
                                });
                                $table.edatagrid('selectRow', rowIndex);
                                $.each(rows,function (index, col) {
                                    $table.edatagrid('updateRow',{
                                        index:index,
                                        row: {
                                            position: index+1
                                        }
                                    });
                                })
                            }
                        }
                    },'-',{
                        text:'下移',
                        iconCls:'fa fa-long-arrow-down',
                        handler: function(){
                            var $table=$(div);
                            var rows=$table.edatagrid('getRows');
                            var rowlength=rows.length;
                            var selectrow=$table.edatagrid('getSelected');
                            if(selectrow == null){
                                return false;
                            }
                            var rowIndex=$table.edatagrid('getRowIndex',selectrow);
                            if(rowIndex==rowlength-1){
                                $.messager.alert('提示', '底行无法下移!', 'warning');
                            }else{
                                $table.datagrid('deleteRow', rowIndex);//删除一行
                                rowIndex++;
                                $table.datagrid('insertRow', {
                                    index:rowIndex,
                                    row:selectrow
                                });
                                $table.datagrid('selectRow', rowIndex);
                            }
                            $.each(rows,function (index, col) {
                                $table.datagrid('updateRow',{
                                    index:index,
                                    row: {
                                        position: index+1
                                    }
                                });
                            })


                        }}]})
            },
            onClose: function () {
                $(this).form("clear");
                $(this).iDialog('destroy');
            }

        });
        $('#'+dialog).iDialog('open');
    }
    function treeLine(queryURL,ele,columns,container) {
        ele.find('.product-nav-list').remove();
        var div=$('<div class="product-nav-list"><header>' +
            '<a class="nav-header-to">高级设置</a>' +
            '<a class="nav-header-reset">重置默认</a></header>' +
            '<div class="product-content-list" style="overflow: auto;"></div>' +
            '<button class="btn btn-primary btn-bottom-right">确定</button></div>');
        ele.append($(div));
        $(div).height($(ele).height()-160);
        $(div).find('.product-content-list').height($(div).height()-80);
        $(div).addClass('animated fadeInLeft');
        setTimeout(function(){
            $(div).removeClass('fadeInLeft');
        }, 2000);
        var treeDatas = [];
        $.each(columns, function (i, column) {
            if(column['field']!=''){
                treeDatas.push({
                    "id": column["field"],
                    "param": column["field"],
                    "text": column["title"],
                    "width":column['width'],
                    checked: (column["hidden"]!=true)
                })
            }
        });
        $(div).find(".product-content-list").tree({
            data: treeDatas,
            checkbox: true,
            onLoadSuccess:function () {
                $(div).find("span[class^='tree-icon tree-file']").remove();
            }
        });
        $(div).find('.nav-header-to').unbind().bind('click',function (event) {
            var TreeObj = $(div).find(".product-content-list");
            var profiles = [];
            var data=[];
            var roots = TreeObj.tree("getRoots");
            $.each(roots, function (i, root) {
                var nodes = TreeObj.tree("getData",root.target);
                if(root==undefined){
                    return false
                }
                if ( root.checked ){
                    data.push({
                        id: root.param,
                        show:true,
                        caption: root.text,
                        position: i,
                        width:root.width
                    });

                }  else {
                    data.push({
                        id: root.param,
                        show:false,
                        caption: root.text,
                        position: i,
                        width:root.width
                    });
                }
            });
            if ( data.length==0 ){
                return
            }
            lineSET('lineSet',queryURL,data,ele);
        });
        $(div).find('.nav-header-reset').unbind().bind('click',function (event) {
            event=event||window.event;
            event.stopPropagatio?event.stopPropagation:event.cancelBubble=true;
            event.stopPropagation();
            HTTP.post("kzzx/gridset/delete",{master:{"listid":queryURL}},function (result) {
                if(result['success']) {
                    layer.msg('设置成功');
                    $(div).remove();
                    ele.find('.toolbar-reload').click();
                }else{
                    layer.msg(result['message']||'设置失败');
                }
            });

        });
        $(div).find('.btn-bottom-right').unbind().bind('click',function () {
            var TreeObj = $(div).find(".product-content-list");
            var profiles = [];
            var data=[];
            var roots = TreeObj.tree("getRoots");
            $.each(roots, function (i, root) {
                var nodes = TreeObj.tree("getData",root.target);
                if ( root.checked ){
                    data.push({
                        id: root.param,
                        show:true,
                        caption: root.text,
                        position: i
                    });

                }  else {
                    data.push({
                        id: root.param,
                        show:false,
                        caption: root.text,
                        position: i
                    });
                }
            });
            if ( data.length==0 ){
                return
            }
            HTTP.post("kzzx/gridset/save",{"listid":queryURL,data:data},function (result) {
                if(result['success']){
                    $(div).remove();
                    var columns=requester(ele.find('.toolbar-table').datagrid("options")["columns"][0],"kzzx/gridset/query",queryURL);
                    ele.find('.toolbar-table').datagrid({columns:[columns],refresh:false});
                    ele.find('.toolbar-reload').click();
                }
            })

        });
    }
    function name_text(record) {
        var data={};
        if(record.length>=0){
            $.each(record,function (i,item) {
                if(!item['name']){
                    data[item['class']]=item['text']
                }else {
                    data[item['name']]=item['text']
                }

            })
        }
        return data;
    }
    function copy_submit(ele) {
        var master= DataBind.collectData($('#'+ele));
        delete master['id'];
        master['flag']='I';
        var returnData={
            parmas:{master:master,details:[]}
        };
        return  returnData;
    }
    function searh_initialize(obj) {
        var ele=obj.$ele;
        ele.find('.bdsug').css('width',$(document).width()-180);
        ele.find('.query').click(function (event) {
            event.stopPropagation();
            ele.find('.toolbar-reload').click();
        });
        ele.find('.bdsug').click(function (event) {
            event=event||window.event;
            event.stopPropagatio?event.stopPropagation:event.cancelBubble=true;
            event.stopPropagation();
        });
    }
})($, window, document);

/*datagrid 初始化*/
var init_type={
    ftDateTime:{align:"center",width:180,formatter:function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("yyyy-MM-dd hh:mm:ss");
        },
    },
    dateTime:{align:"center",width:180,formatter:function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("yyyy-MM-dd hh:mm:ss");
        }
    },
    ftDate:{align:"center",width:100,formatter:function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("yyyy-MM-dd");
        }
    },
    date:{align:"center",width:100,formatter:function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("yyyy-MM-dd");
        }
    },
    time:{align:"center",width:100,formatter:function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("hh:mm:ss");
        }
    },
    float:{align:"right", width:80, formatter:function(value,row,index) {
            var text =parseFloat(value).toFixed(3);
            return text;
        }
    },
    price:{align:"right",width:80,formatter:function(value,row,index){
            return  parseFloat(value).toFixed(6);
        }
    },
    money:{align:"right",width:80,formatter:function (value,row,index) {
            var text =parseFloat(value).toFixed(2);
            return text;
        }
    },
    int:{align:"right",width:80,formatter:function (value,row,index) {
            if (value != null){
                var text =parseFloat(value).toFixed(0);
                return text;
            }else{
                return 0;
            }

        }
    },
    tybz:{align:"center",width:80,formatter:function (value,row,index) {
            var map = {Y: '停用', N: "正常"};
            var text  = map[value];
            return text||"启用";
        }
    },
    checkbox:{align:"center",width:80,formatter:function (value,row,index) {
            var map = {Y: '停用', N: "正常"};
            var text  = map[value];
            return text||"启用";
        }
    },
    username:{align:"left", width:80}
}

function requester_column(e) {
    e['halign']='center';
    if (e.field == 'tybz'){
        e.fieldType = 'tybz';
    }else if(e.field == 'whr' || e.field == 'cjr'){
        e.fieldType = 'username';
    }
    if (e.fieldType){
        var e1 = init_type[e.fieldType];
        if (!e1){
            return false;
        }
        if (e.width){
            e1.width = e.width;
        }
        if (e.align){
            e1.align = e.align;
        }
        $.extend(e, e1);
    }
    if(!e.width){
        e.width=160;
    }
}
function requester(a,d,c) {
    var vector = new Vector();
    var _data={
        "listid":c||''
    };
    var fields = [];
    if ( _data!=null&&d!=null ){
        if ( typeof _data == 'object' ){
            _data = JSON.stringify(_data);
        }
        $.ajax({
            type:'POST',
            url:d ,
            data:_data,
            contentType: "application/json",
            dataType: "json",
            async:false,
            success: function (res) {
                if(res['success']&&res['data']['records']){
                    fields=res['data']['records'];

                }else{
                }
            },
            error: function () {
            }
        });
    }else{
        fields = [];
    }
    if (fields !=null && fields.length>0 ){
        $.each(fields, function (i, field) {
            var hidden=false;
            if(field['caption']==undefined){
                vector.add({
                    field: field["id"],
                    width: field["width"],
                    halign: 'center',
                    hidden:!(field['show']),
                    index: field["position"],
                    editor: editor(field["fieldType"])
                });
            }else{
                vector.add({
                    field: field["id"],
                    title: field["caption"],
                    width: field["width"],
                    halign: 'center',
                    hidden:!(field['show']),
                    index: field["position"],
                    editor: editor(field["fieldType"])
                });
            }

        });
    }
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

    var arr=vector.sort("index");
    var arr2= a;
    var arr3=[];
    var map={}, map1={}, map2={};
    if(arr){$.each(arr, function(i, e){ map1[e.field] = e;});
    }
    if(arr2){
        $.each(arr2, function(i, e){
            requester_column(e);
            map2[e.field] = e;
            map[e.field] = {};
        });
    }

    $.each(map, function(i, e){
        if(map2[i]){
            $.extend(e, map2[i],map1[i]);
        }
    });

    $.each(map,function (i,e) {
        arr3.push(e);
    });
    arr3.sort(createComparisonFunction("index"));
    return arr3;
}
function requester_treegrid(column) {
    $.each(column,function (i,e) {
        requester_column(e);
    });
    return column;
}
function createComparisonFunction(propertyName) {//接收属性名
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
}
