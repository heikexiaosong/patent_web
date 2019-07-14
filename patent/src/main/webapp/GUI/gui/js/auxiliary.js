if (typeof layer === 'undefined') {
    throw new Error('Chooser requires layer library.');
}

if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

function xFormatter(fieldName,fieldObj) {
    if ( fieldName==null || fieldName=='' ){
        return
    }
    if ( fieldObj!=null && fieldObj["fieldType"]=='ftDate' ){
        if ( fieldObj["controlType"]=='date' ){
            return DataGridCommon.dateFormatter;
        }
        return DataGridCommon.datetimeFormatter;
    }
    if ( fieldName=='tybz' ) {
        return function(value,row,index) {
            var map = {Y: '停用', N:'启用'};
            var text  = map[value];
            return text||"";
        };
    }
}

(function($, layer, window, undefined) {
    'use strict';

    var _auxiliary = {
        choose: function (opt) {
            var options={
                code:'',
                value:'',
                callback:function () {

                }
            };
            $.extend(options,opt);
            var content_html =
                '<div style="overflow: hidden;position: relative">' +
                '<div class="" style="width: 100%;margin: 10px">' +
                '<label style="display: inline-block;margin-right: 6px" >搜索条件</label><input type="text" class="keyword" data-toggle="gui-textbox" placeholder="" style="height: 30px;line-height: 30px;margin-left: 10px;padding-left: 10px">' +
                '<span class="auxiliary-icon fa fa-search"></span></div>' +
                '</div>'+
                '<div style="width:100%;overflow: auto"><table class="dat_table" style="height:398px"></table></div>';
            HTTP.post('kzzx/fzsr/getColumn',{code:options.code},function (result) {
                if(result["success"]&&result["data"]["records"]){
                    var columns=[];
                    var length=result["data"]["records"].length;
                    var fh=result["data"]["records"][0]["field"];
                    $.each(result["data"]["records"],function (i,data) {
                        if(data["fh"]==="Y"){
                            fh=data["field"]
                        }
                        columns.push({
                            field:data["field"],
                            title:data["caption"],
                            width:(100/length)+"%",
                            index:data['xh'],
                            align:'center'
                        })
                    });
                    $('<div id="fzsr" style="position:relative">').iDialog({
                        width:800,
                        height:600,
                        title:"辅助输入",
                        buttons: [
                            {text: '确定', iconCls: 'fa fa-save', btnCls: 'gui-btn',
                                handler: function () {
                                    var selectedRow = $("#fzsr").find(".dat_table").datagrid("getSelected");
                                    options.callback(selectedRow,fh);
                                    $("#fzsr").form("clear");
                                    $("#fzsr").iDialog("destroy");
                                }
                            }],
                        onOpen: function () {
                            var layero=$("#fzsr").append(content_html);
                            layero.find('.keyword').iTextbox({
                                width:'90%',
                                value:options.value,
                                inputEvents: $.extend({}, $.fn.textbox.defaults.inputEvents, {
                                    keyup: function (event) {
                                        event.stopPropagation();
                                        if (event.keyCode === 13) {
                                            var keyword=layero.find('.keyword').iTextbox('getValue');
                                            HTTP.post("kzzx/fzsr/select",{id:result["data"]["id"],condition:keyword},function (result) {
                                                if(result['success']){
                                                    layero.find('.dat_table').datagrid('loadData',result['data']['records']);
                                                }
                                            })
                                        }}})
                            });

                            layero.find(".dat_table").datagrid({
                                singleSelect:true,
                                columns:[columns],
                                rownumbers:true,
                                height:459,
                                columnFormatter: xFormatter,
                                onDblClickRow:function () {
                                    var selectedRow = layero.find(".dat_table").datagrid("getSelected");
                                    options.callback(selectedRow,fh);
                                    $("#fzsr").form("clear");
                                    $("#fzsr").iDialog("destroy");
                                }
                            });
                            var keyword=layero.find('.keyword').iTextbox('getValue');
                            HTTP.post("kzzx/fzsr/select",{id:result["data"]["id"],condition:keyword},function (result) {
                                if(result['success']){
                                    layero.find('.dat_table').datagrid('loadData',result['data']['records']);
                                }
                            });
                            layero.find('.auxiliary-icon').unbind().bind('click',function() {
                                var keyword=layero.find('.keyword').iTextbox('getValue');
                                HTTP.post("kzzx/fzsr/select",{id:result["data"]["id"],condition:keyword},function (result) {
                                    if(result['success']){
                                        layero.find('.dat_table').datagrid('loadData',result['data']['records']);
                                    }
                                })

                            });


                        },
                        onClose: function () {
                            $(this).form("clear");
                            $(this).iDialog('destroy');
                        }
                    });
                    $("#fzsr").iDialog("open");
                }});
        },
        box:function(obj,opt){
            var that=this;
            var icon=$('<span class="l-btn-icon fa fa-search search"></span>');
            $(obj).parent().append(icon);
            $(obj).parent().find('.search').unbind().bind('click',function () {
                opt.value=$(obj).val();
                that.choose(opt);
            });
            $(obj).textbox({
                inputEvents: $.extend({}, $.fn.textbox.defaults.inputEvents, {
                    keyup: function (event) {
                        if (event.keyCode == 13) {
                            opt.value=$(this).val()
                            that.choose(opt);
                        }}})})

        },
        init:function (obj,opt,data) {
            $(obj).data('data',opt);
            var icon=$('<span class="l-btn-icon fa fa-search search"></span>');
            $(obj).parent().append(icon);
            $(obj).parent().find('.search').unbind().bind('click',function () {
                if(!(opt['valueField']!=isNull&&opt['textField']!=isNull)){
                    layer.alert('请配置对象的valueField和textField');
                    return false;
                }
                _auxiliary.choose(opt.url,opt.dataUrl,opt.code, function (row) {
                    var value = opt['valueField'];
                    var text = opt['textField'];
                    if(row){
                        $(obj).textbox('setValue',row[value]);
                        $(obj).textbox('setText',row[text]);
                    }
                });
            })

        },
        axuiliary:function (obj, opt, callback) {
            $(obj).data('data',opt);
            var icon=$('<span class="l-btn-icon fa fa-list-ul search" style="float: right; padding-left: 4px; border-left: 1px solid #D3D3D3;"></span>');
            $(obj).parent().append(icon);
            $(obj).parent().find('.search').unbind().bind('click',function () {
                var dialog=opt.id||'';
                var d = $.extend({},opt);
                var aa= $('<div id="'+dialog+'" style="position:relative">').iDialog({
                    width:400,height:400,
                    buttons: [{
                        text: '确认', iconCls: 'fa fa-save', btnCls: 'gui-btn-save',
                        handler: function (div) {
                            callback(obj, $('#'+dialog));
                            $('#'+dialog).form("clear");
                            $('#'+dialog).iDialog('destroy');
                        }
                    },{
                        text:'取消', iconCls: "fa fa-close", btnCls: "gui-btn-danger",
                        handler:function () {
                            $('#'+dialog).form("clear");
                            $('#'+dialog).iDialog('destroy');
                        }
                    }],
                    onClose: function () {
                        $(this).iDialog('destroy');
                    }
                });
                $('#'+dialog).iDialog(d);
                $('#'+dialog).iDialog('open');
            })
        }

    };
    window.Auxiliary= window.Auxiliary || _auxiliary;
    var _appent= {
        choose: function (opt, callback, opts) {
            var title=opt['title'],columns=opt['columns'],dataUrl=opt['url'],parmas=opt['parmas'],area=opt['area']||['800px', '480px'];
            var content_html =
                '<div style="overflow: hidden;position: relative">' +
                '<div class="" style="width: 100%;margin: 10px">' +
                '<label style="display: inline-block;margin-right: 6px" >搜索条件</label><input type="text" class="keyword" data-toggle="gui-textbox" placeholder="" style="height: 30px;line-height: 30px;margin-left: 10px;padding-left: 10px">' +
                '<span class="auxiliary-icon fa fa-search"></span></div>' +
                '</div>'+
                '<div style="width:100%;overflow: auto"><table class="dat_table" style="height:338px"></table></div>';
            var id='';
            var layerIndex = layer.open({
                type: 1,
                title: title,
                skin: 'layui-layer-lan',
                area: area,
                content: content_html,
                scrollbar: false,
                btn: ['确定', '清除', '关闭'],
                success: function(layero, index){
                    layero.find('.keyword').iTextbox({
                        width:'90%'
                    });
                    layero.find(".dat_table").datagrid({
                        singleSelect:true,
                        columns:[columns],
                        rownumbers:true,
                        columnFormatter: xFormatter,
                        onDblClickRow:function () {
                            var selectedRow = layero.find(".dat_table").datagrid("getSelected");
                            layer.close(index);
                            callback(selectedRow)
                        }
                    });
                    HTTP.post(dataUrl,parmas,function (result) {
                        if(result['success']&&result['data']['records'].length>0){
                            layero.find(".dat_table").datagrid('loadData',result['data']['records'])
                        }
                    });
                    layero.find('.auxiliary-icon').unbind().bind('click',function() {
                        var keyword=  layero.find('.keyword').iTextbox('getValue');
                        HTTP.post(dataUrl,{id:id,keyword:keyword},function (result) {
                            if(result['success']){
                                layero.find('.dat_table').datagrid('loadData',result['data']['records']);
                            }
                        })

                    })
                },
                yes: function(index, layero){
                    var selectedRow = layero.find(".dat_table").datagrid("getSelected");
                    if (  selectedRow==null ){
                        layer.alert('请先选择一条数据');
                        return ;
                    }
                    layer.close(index);
                    callback(selectedRow);

                },
                btn2: function (index) {
                    layer.close(index);
                    callback({});
                },
                btn3: function(){
                }
            });

        }
    };
    window.Appent= window.Appent ||  _appent;

    //编辑数据表：新增一条记录的数据表,默认新增、删除按钮,可自定义按钮。
    var _edatagrid= {
        init: function ( $fieldView,url,params,config,btn) {
            var id=$fieldView.attr('id');
            var toolbar=[{
                iconCls: 'fa fa-plus',
                text:'添加',
                handler: function(){
                    var row= $fieldView.edatagrid('getRows');
                    var xh =1;
                    if(row['length']){
                        xh=row['length']+1;
                    }
                    $fieldView.edatagrid('insertRow',{
                        row: {
                            xh: xh,
                            flag:'I'
                        }
                    });
                }
            },
                '-',{
                    iconCls: 'fa fa-file',
                    text:'保存',
                    handler: function(){
                        $fieldView.edatagrid('acceptChanges');
                    }
                },'-',{
                    iconCls:'fa fa-trash',
                    text:'删除',
                    handler: function(){
                        var cols = $fieldView.edatagrid('getRows');
                        var aa=[];
                        var selectrow=$fieldView.edatagrid('getSelected');
                        if(selectrow == null){
                            return false;
                        }
                        var delIndex=$fieldView.edatagrid('getRowIndex',selectrow);
                        $.each(cols,function (i,col) {
                            if( i==delIndex){
                                if(  cols[i]["flag"]!=null &&  cols[i]["flag"]=='I'){
                                } else {
                                    cols[i]['flag'] = 'D';
                                    aa.push(col);
                                }
                            }
                        });
                        if($fieldView.data("mxData")){
                            var bb=$fieldView.data("mxData");
                            $.each(aa,function (i,item) {
                                bb.push(item);
                            });
                            $fieldView.data("mxData",bb);
                        }else{
                            $fieldView.data("mxData", aa);
                        }

                        $fieldView.datagrid('deleteRow', delIndex);

                        $.each(cols,function (index, col) {
                            $fieldView.datagrid('updateRow',{
                                index:index,
                                row: {
                                    xh: index+1
                                }
                            });
                        })
                    }
                },'-',];
            if(btn&&btn.length>0){
                $.each(btn,function (i,item) {
                    toolbar.push(item)
                })
            }
            var columns=config['columns'][0];
            $.each(columns,function (i,col) {
                if(col['fieldType']&&col['fieldType']['type']=='checkbox'){
                    var options=col['fieldType']['options'];
                    col['formatter']=function (value,row,index) {
                        if(!value){
                            value=options.N;
                        }
                        var c='-32px 0';
                        if(value==options.Y){
                            c='0 0';
                        }
                        var opt= JSON.stringify(options).replace(/\"/g,"'");
                        var checkbox='<div style="position: relative;height: 100%" >' +
                            '<span style="float: left; display: block;position: absolute;left: 25%;top: 6px">' +
                            '<a href="javascript:void(0)" class="custom-check" style="background-position: '+c+'" onclick="customClick(event,this);" ondblclick="customClick(event,this)"> </a>' +
                            '<input type="checkbox" data-options="'+opt+'" data-index="'+index+'" name="'+col['field']+'" style="display: none;" value="'+value+'"></span>' +
                            '<label style="margin-top: 9px; margin-right: 8px; margin-bottom: 9px; display: block; float: left; font-size: 12px; cursor: pointer;"></label>' +
                            '</div>';
                        row[col['field']]=value;
                        return checkbox;

                    }
                }
                else if(col['fieldType']&&col['fieldType']['type']=='radio'){
                    var options=col['fieldType']['options'];
                    col['formatter']=function (value,row,index) {
                        if(!value){
                            value=options.N;
                        }
                        var c='-32px 0';
                        if(value==options.Y){
                            c='0 0';
                        }
                        var opt= JSON.stringify(options).replace(/\"/g,"'");
                        var checkbox='<div style="position: relative;height: 100%" >' +
                            '<span style="float: left; display: block;position: absolute;left: 25%;top: 6px">' +
                            '<a href="javascript:void(0)" class="custom-check" style="background-position: '+c+'" onclick="customRadioClick(event,this,'+id+');" ondblclick="customRadioClick(event,this,'+id+')"> </a>' +
                            '<input type="checkbox" data-options="'+opt+'" data-name="'+col['fieldType']['name']+'" data-index="'+index+'" name="'+col['field']+'" style="display: none;" value="'+value+'"></span>' +
                            '<label style="margin-top: 9px; margin-right: 8px; margin-bottom: 9px; display: block; float: left; font-size: 12px; cursor: pointer;"></label>' +
                            '</div>';
                        row[col['field']]=value;
                        return checkbox;
                    }
                }
                else if(col['editor']&&col['editor']['type']=='datebox'){
                    col['formatter']=function (value,row,index) {
                        if ( value==undefined || value =='' ||typeof(value)=='string'){
                            return "";
                        }
                        var date = new Date(parseInt(value));
                        if ( isNaN(date) ){
                            return ""
                        }
                        return date.Format("yyyy-MM-dd");
                    }
                }
            });
            $fieldView.edatagrid($.extend({
                    pagination:false,
                    rownumbers:true,
                    autoSave:true,
                    toolbar:toolbar
                },config,{columns:[columns]})
            );

            if( !($fieldView.parents('form').attr('tag')&&$fieldView.parents('form').attr('tag')=='add')){
                HTTP.post(url,{mid:params.mid,id:''},function (result) {
                    if(result['success']&&result['data']['records']){
                        $fieldView.edatagrid('loadData',result['data']['records']);
                    }
                })
            }
        }
    };
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
    window.Edatagrid= window.Edatagrid || _edatagrid;

    //编辑数据表,自定义新增按钮,可自定义其他按钮
    var datagrid={
        init: function ($fieldView,url,params,addBtn,btn) {
            var id=$fieldView.attr('id');
            var _that=this;
            var toolbar=[];
            if(!addBtn){
                toolbar=[{
                    iconCls: 'fa fa-file',
                    text:'保存',
                    handler: function(){
                        $fieldView.edatagrid('acceptChanges');
                    }
                },'-',{
                    iconCls:'fa fa-trash',
                    text:'删除',
                    handler: function(){
                        var cols = $fieldView.edatagrid('getRows');
                        var aa=[];
                        var selectrow=$fieldView.edatagrid('getSelected');
                        if(selectrow == null){
                            return false;
                        }
                        var delIndex=$fieldView.edatagrid('getRowIndex',selectrow);
                        $.each(cols,function (i,col) {
                            if( i==delIndex){
                                if(  cols[i]["flag"]!=null &&  cols[i]["flag"]=='I'){
                                } else {
                                    cols[i]['flag'] = 'D';
                                    aa.push(col);
                                }
                            }
                        });
                        if($fieldView.data("mxData")){
                            var bb=$fieldView.data("mxData");
                            $.each(aa,function (i,item) {
                                bb.push(item);
                            });
                            $fieldView.data("mxData",bb);
                        }else{
                            $fieldView.data("mxData", aa);
                        }
                        $fieldView.datagrid('deleteRow', delIndex);
                        if (  params["onChanged"]!=null ){
                            params["onChanged"].bind(_that)($fieldView, "delete");
                        }
                        $.each(cols,function (index, col) {
                            $fieldView.datagrid('updateRow',{
                                index:index,
                                row: {
                                    xh: index+1
                                }
                            });
                        })
                    }
                }];
            }else{
                toolbar=[{
                    iconCls: 'fa fa-plus',
                    text:addBtn.text||'',
                    handler: function(){
                        addBtn.callback(params,_that)
                    }
                },
                    '-',{
                        iconCls: 'fa fa-file',
                        text:'保存',
                        handler: function(){
                            $fieldView.edatagrid('acceptChanges');
                        }
                    },'-',{
                        iconCls:'fa fa-trash',
                        text:'删除',
                        handler: function(){
                            var cols = $fieldView.edatagrid('getRows');
                            var aa=[];
                            var selectrow=$fieldView.edatagrid('getSelected');
                            if(selectrow == null){
                                return false;
                            }
                            var delIndex=$fieldView.edatagrid('getRowIndex',selectrow);
                            $.each(cols,function (i,col) {
                                if( i==delIndex){
                                    if(  cols[i]["flag"]!=null &&  cols[i]["flag"]=='I'){
                                    } else {
                                        cols[i]['flag'] = 'D';
                                        aa.push(col);
                                    }
                                }
                            });
                            if($fieldView.data("mxData")){
                                var bb=$fieldView.data("mxData");
                                $.each(aa,function (i,item) {
                                    bb.push(item);
                                });
                                $fieldView.data("mxData",bb);
                            }else{
                                $fieldView.data("mxData", aa);
                            }
                            $fieldView.datagrid('deleteRow', delIndex);
                            if (  params["onChanged"]!=null ){
                                params["onChanged"].bind(_that)($fieldView, "delete");
                            }
                            $.each(cols,function (index, col) {
                                $fieldView.datagrid('updateRow',{
                                    index:index,
                                    row: {
                                        xh: index+1
                                    }
                                });
                            })
                        }
                    }];
            }

            if(btn&&btn.length>0){
                $.each(btn,function (i,item) {
                    toolbar.push(item)
                })
            };
            var columns=params.columns;

            $.each(columns,function (i,col) {
                if(col['fieldType']&&col['fieldType']['type']=='checkbox'){
                    var options=col['fieldType']['options'];
                    col['formatter']=function (value,row,index) {
                        if(!value){
                            value=options.N;
                        }
                        var c='-32px 0';
                        if(value==options.Y){
                            c='0 0';
                        }
                        var opt= JSON.stringify(options).replace(/\"/g,"'");
                        var checkbox='<div style="position: relative;height: 100%" >' +
                            '<span style="float: left; display: block;position: absolute;left: 25%;top: 6px">' +
                            '<a href="javascript:void(0)" class="custom-check" style="background-position: '+c+'" onclick="customClick(event,this);" ondblclick="customClick(event,this)"> </a>' +
                            '<input type="checkbox" data-options="'+opt+'" data-index="'+index+'" name="'+col['field']+'" style="display: none;" value="'+value+'"></span>' +
                            '<label style="margin-top: 9px; margin-right: 8px; margin-bottom: 9px; display: block; float: left; font-size: 12px; cursor: pointer;"></label>' +
                            '</div>';
                        row[col['field']]=value;
                        return checkbox;

                    }
                }
                else if(col['fieldType']&&col['fieldType']['type']=='radio'){
                    var options=col['fieldType']['options'];
                    col['formatter']=function (value,row,index) {
                        if(!value){
                            value=options.N;
                        }
                        var c='-32px 0';
                        if(value==options.Y){
                            c='0 0';
                        }
                        var opt= JSON.stringify(options).replace(/\"/g,"'");
                        var checkbox='<div style="position: relative;height: 100%" >' +
                            '<span style="float: left; display: block;position: absolute;left: 25%;top: 6px">' +
                            '<a href="javascript:void(0)" class="custom-check" style="background-position: '+c+'" onclick="customRadioClick(event,this,'+id+');" ondblclick="customRadioClick(event,this,'+id+')"> </a>' +
                            '<input type="checkbox" data-options="'+opt+'" data-name="'+col['fieldType']['name']+'" data-index="'+index+'" name="'+col['field']+'" style="display: none;" value="'+value+'"></span>' +
                            '<label style="margin-top: 9px; margin-right: 8px; margin-bottom: 9px; display: block; float: left; font-size: 12px; cursor: pointer;"></label>' +
                            '</div>';
                        row[col['field']]=value;
                        return checkbox;
                    }
                }
                else if(col['editor']&&col['editor']['type']=='datebox'){
                    col['formatter']=function (value,row,index) {
                        if ( value==undefined || value =='' ||typeof(value)=='string'){
                            return "";
                        }
                        var date = new Date(parseInt(value));
                        if ( isNaN(date) ){
                            return ""
                        }
                        return date.Format("yyyy-MM-dd");
                    }
                }
            });
            $fieldView.edatagrid(
                {   pagination:false,
                    rownumbers:true,
                    columns:[columns],
                    toolbar:toolbar,
                    onInput:function (index,row,value,field) {
                        if ( params["onChanged"]!=null ){
                            params["onChanged"].bind(_that)( $fieldView, "edit", row,value,index,field);
                        }
                    },
                    onAfterEdit: function (index,row,changes) {
                        if ( params["onChanged"]!=null ){
                            params["onChanged"].bind(_that)($fieldView, "save", row, changes,index);
                        }
                    },
                }
            );
            if(url==''){
                return
            }
            if( !($fieldView.parents('form').attr('tag')&&$fieldView.parents('form').attr('tag')=='add')){
                HTTP.post(url,{mid:params.mid,id:''},function (result) {
                    if(result['success']&&result['data']['records']){
                        $fieldView.edatagrid('loadData',result['data']['records']);
                    }
                })
            }


        },
        combobox:function (opt) {
            var data=[];
            HTTP.post(opt.url,opt.queryParams||'',function (result) {
                if(result['success']&&result['data']['records'].length>0){
                    $.each(result['data']['records'],function (i,item) {
                        data.push({
                            value:item[opt.value],text:item[opt.text]
                        })
                    })
                }

            });
            return data;
        }
    };
    /**
     * 格式化数字，小数点后是0不表示
     * @param value
     * @param fixed 小数位数
     */
    function formatNumber(value, fixed) {
        var number = Number(value);
        if (isNaN(number)) {
            return '';
        } else {
            if (fixed == 2) {
                return parseFloat(number).toFixed(2);
            } else if (fixed == 6) {
                return number.toFixed(6) * 1000000 / 1000000;
            }else{
                return parseFloat(number).toFixed(fixed);
            }

        }
    }
    window.customDatagrid= window.customDatagrid || datagrid;

    //cell 编辑
    var datagrid_cell={
        init: function ($fieldView,url,params,addBtn,btn) {
            var _that=this;
            var toolbar=[{
                iconCls: 'fa fa-plus',
                text:addBtn.text,
                handler: addBtn.callback
            },
                '-',{
                    iconCls: 'fa fa-file',
                    text:'保存',
                    handler: function(){
                        $fieldView.edatagrid('acceptChanges');
                    }
                },'-',{
                    iconCls:'fa fa-trash',
                    text:'删除',
                    handler: function(){
                        var cols = $fieldView.edatagrid('getRows');
                        var aa=[];
                        var selectrow=$fieldView.edatagrid('getSelected');
                        if(selectrow == null){
                            return false;
                        }
                        var delIndex=$fieldView.edatagrid('getRowIndex',selectrow);
                        $.each(cols,function (i,col) {
                            if( i==delIndex){
                                if(  cols[i]["flag"]!=null &&  cols[i]["flag"]=='I'){
                                } else {
                                    cols[i]['flag'] = 'D';
                                    aa.push(col);
                                }
                            }
                        });
                        if($fieldView.data("mxData")){
                            var bb=$fieldView.data("mxData");
                            $.each(aa,function (i,item) {
                                bb.push(item);
                            });
                            $fieldView.data("mxData",bb);
                        }else{
                            $fieldView.data("mxData", aa);
                        }
                        $fieldView.datagrid('deleteRow', delIndex);
                        $.each(cols,function (index, col) {
                            $fieldView.datagrid('updateRow',{
                                index:index,
                                row: {
                                    xh: index+1
                                }
                            });
                        })
                    }
                }];
            if(btn&&btn.length>0){
                $.each(btn,function (i,item) {
                    toolbar.push(item)
                })
            }
            if(params.columns&&params.columns.length>0){
                $.each(params.columns,function (i,column) {
                    if(column['persion']){
                        column['formatter']=function (value,index,row) {
                            return formatNumber(value,column['persion']||2);
                        }
                    }
                })
            }
            $fieldView.datagrid(
                {   pagination:false,
                    rownumbers:true,
                    columns:[params.columns],
                    toolbar:toolbar,
                    clickToEdit: false,
                    dblclickToEdit: true,
                    onAfterEdit: function (index,row,changes) {
                        /**
                         * Fires after the user finishes editing, the parameters contains:
                         index: the editing row index, start with 0
                         row: the record corresponding to the editing row
                         changes: the changed field/value pairs
                         */
                        if ( params["onChanged"]!=null ){
                            params["onChanged"].bind(_that)($fieldView, "edit", row, changes,index);
                        }
                    },
                }
            );

            if( !($fieldView.parents('form').attr('tag')&&$fieldView.parents('form').attr('tag')=='add')){
                HTTP.post(url,{mid:params.mid,id:''},function (result) {
                    if(result['success']&&result['data']['records']){
                        $fieldView.datagrid('loadData',result['data']['records']);
                    }
                })
            }
            $fieldView.datagrid('enableCellEditing');


        },
        combobox:function (opt) {
            var data=[];
            HTTP.post(opt.url,opt.queryParams||'',function (result) {
                if(result['success']&&result['data']['records'].length>0){
                    $.each(result['data']['records'],function (i,item) {
                        data.push({
                            value:item[opt.value],text:item[opt.text]
                        })
                    })
                }

            });
            return data;
        }
    }
    /**
     * 格式化数字，小数点后是0不表示
     * @param value
     * @param fixed 小数位数
     */
    window.cellDatagrid= window.cellDatagrid || datagrid_cell;

}(jQuery, layer, window));
function customClick(event,obj) {
    event.stopPropagation();
    var  datagrid=$(obj).parents('.datagrid-view2').next('.datagrid-f');
    var input=$(obj).next('input');
    var index=$(input).data('index');
    var value=$(obj).next('input').val();
    var c='-32px';
    if(value=='N'){
        $(obj).next('input').val('Y');
        $(obj).css("background-position","0 0");
        var options=$(datagrid).datagrid('getColumnOption',$(obj).parents('td').attr('field'))['fieldType']['options'];
        $(datagrid).datagrid('getRows')[index][$(obj).parents('td').attr('field')]=options.Y;
    }else{
        $(obj).next('input').val('N');
        $(obj).css("background-position","-32px 0");
        var options=$(datagrid).datagrid('getColumnOption',$(obj).parents('td').attr('field'))['fieldType']['options'];
        $(datagrid).datagrid('getRows')[index][$(obj).parents('td').attr('field')]=options.N;
    }

    return false
}
function customRadioClick(event,obj,datagrid) {
    event.stopPropagation();
    if(datagrid==undefined){
        datagrid=$(obj).parents('.datagrid-view2').next('.datagrid-f');
    }
    var input=$(obj).next('input');
    var index=$(input).data('index');
    var name=$(input).data('name');
    var field=$(obj).parents('td').attr('field');
    var options=JSON.parse($(input).data('options').replace(/\'/g,'"'));
    var y=options.Y;var n=options.N;
    var tr=$($(datagrid).prev()).find("tr[datagrid-row-index=" + index + "]");
    if(options.mold&&options.mold=='column'){
        var elements=$(obj).parents('.datagrid-view2').find('td[field='+field+'] a.custom-check');
        $.each(elements,function (i,ele) {
            $(ele).next('input').val(n);
            $(ele).css("background-position","-32px 0");
            $(datagrid).datagrid('getRows')[i][field]=n;
        })
    }else if(name){
        var radioInput=tr.find('input[data-name="'+name+'"]');
        var value=$(input).val();
        radioInput.each(function (i,item) {
            $(item).val(n);
            $(item).prev('a').css("background-position","-32px 0");
            $(datagrid).datagrid('getRows')[index][$(item).parents('td').attr('field')]=n;
        });
    }

    $(obj).next('input').val(y);
    $(obj).css("background-position","0 0");
    $(datagrid).datagrid('getRows')[index][$(input).attr('name')]=y;
    return false
}