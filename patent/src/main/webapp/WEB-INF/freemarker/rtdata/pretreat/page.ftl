<#assign pid="datapoint-${code}">
<div id="${pid}" class="gui-div">
    <table class="toolbar-table" data-options="id: '${pid}Table'"></table>
    <div id="${pid}Table-toolbar" class="gui-toolbar" data-options="grid:{type:'datagrid',id:'${pid}Table'}">
        <a class="toolbar-reload-page toolbar"  href="javascript:void(0)">刷新</a>
        <a class="toolbar-add-page toolbar" href="javascript:void(0)">新增</a>
        <a class="toolbar-edit-page toolbar" href="javascript:void(0)">编辑</a>
        <a class="toolbar-delete-page toolbar" href="javascript:void(0)">删除</a>
    </div>
</div>


<script language="JavaScript" type="text/javascript">

    $(function () {
        var tabls=$('#${pid}').find('.toolbar-table');
        var res=[];
   $('#${pid}').find('.toolbar-add-page').iMenubutton({
            onClick: function (event) {
                creatTarget('新增',function (target) {
                    var data=[];
                    $.each(config,function (i,item) {
                        data.push({
                                name: item["name"],
                                title:item["title"],
                                value: ""
                            }

                        )
                    });
                    target.find('.attrtable').edatagrid("loadData",data);
                },function (target) {
                    target.find('.attrtable').datagrid('acceptChanges');
                    var _details=target.find('.attrtable').datagrid('getRows')||[];
                    var data=[];
                    $.each(_details,function (i,tem) {
                        data.push({
                            metric:tem["name"],
                            value:tem["value"]
                        })
                    });
                    HTTP.post('rtdata/datapoint/batch/insert',{thdate: target.find("input[name='thdate']").val(),time:target.find("input[name='time']").val(),details:data},function (result) {
                        if(result["success"]){
                            $.messager.show({
                                title: "温馨提示",
                                msg: "操作成功"
                            });
                            $div.find('.toolbar-reload-page').click();
                            target.window("close");
                        }else {
                            $.messager.alert("提示",result["msg"]||"操作失败")

                        }


                    })

                })

            },
            text: '新增',
            iconCls: 'fa fa-plus'
        });
        $('#${pid}').find('.toolbar-reload-page').iMenubutton({
            onClick: function () {
                var pager= tabls.datagrid("getPager");
                var b=pager.data("pagination").options.pageSize;
                var a=pager.data("pagination").options.pageNumber;
                pager.pagination({
                    pageNumber:1
                })

                HTTP.post("rtdata/pretreat/datas",{code: '${code}',pageNo:1,pageSize:b},function (result) {
                    if(!result["success"]){
                        return false
                    }
                    var gridOpts = tabls.datagrid('options');
                    gridOpts.pageNumber = 1;
                    gridOpts.pageSize =b;
                    tabls.datagrid("loadData",{rows:result.data.data.records,total:result.data.data.total});
                });
            },
            text: '刷新',
            iconCls: 'fa fa-refresh'
        });
        $('#${pid}').find('.toolbar-edit-page').iMenubutton({
            onClick: function () {
                var seletedRow=tabls.datagrid('getSelected');
                if(seletedRow==null){$.messager.alert('提示','请选中一条数据进行操作');return false}
                creatTarget('编辑',function (target) {
                    target.find("input[textboxname='thdate']").datebox({value:seletedRow['thdate']});
                    target.find("input[textboxname='time']").timespinner({value:seletedRow['time']});
                    HTTP.post('rtdata/datapoint/query/inst',{code: '${code}',thdate:seletedRow["thdate"],time:seletedRow["time"]},function (result) {
                        if(result['success']&&result["data"]["records"]){
                            var config=[];
                            $.each(result["data"]["records"],function (i,data) {
                                config.push({
                                    title:data['itemname'],
                                    name:data['metric'],
                                    value:data["value"],
                                    id:data["id"]
                                })
                            })
                            target.find('.attrtable').edatagrid("loadData",config);

                        }else{
                            target.find('.attrtable').edatagrid("loadData", []);
                        }
                    });

                },function (target) {
                    target.find('.attrtable').datagrid('acceptChanges');
                    var _details=target.find('.attrtable').datagrid('getRows')||[];
                    var data=[];
                    $.each(_details,function (i,tem) {
                        data.push({
                            metric:tem["name"],
                            value:tem["value"],
                            id:tem["id"]
                        })
                    });
                    HTTP.post('rtdata/datapoint/batch/update',{id:seletedRow["id"],thdate: target.find("input[name='thdate']").val(),time:target.find("input[name='time']").val(),details:data},function (result) {
                        if(result["success"]){
                            $.messager.show({
                                title: "温馨提示",
                                msg: "操作成功"
                            })
                            $div.find('.toolbar-reload-page').click();
                            target.window("close");
                        }else {
                            $.messager.alert("提示",result["msg"]||"操作失败")

                        }

                    })
                })
            },
            text: '修改',
            iconCls: 'fa fa-pencil'
        });
        $('#${pid}').find('.toolbar-delete-page').iMenubutton({
            onClick: function () {
                var seletedRow=tabls.datagrid('getSelected');
                if(seletedRow==null){$.messager.alert('提示','请选中一条数据进行操作');return false}
                HTTP.post('rtdata/datapoint/batch/delete',{id:seletedRow["id"],thdate:seletedRow["thdate"],time:seletedRow["time"]},function (result) {
                    if(result["success"]){
                        $.messager.show({
                            title: "温馨提示",
                            msg: "操作成功"
                        });
                        $div.find('.toolbar-reload-page').click();
                    }else {
                        $.messager.alert("提示",result["msg"]||"操作失败")

                    }
                })

            },
            text: '删除',
            iconCls: 'fa fa-trash'
        });
       $('#${pid}').find('.toolbar-table').iDatagrid({toolbar:'#${pid}Table-toolbar'})
        var $div=$('#${pid}Table-toolbar'),config=[];
        HTTP.post("rtdata/pretreat/datas",{code: '${code}',pageNo:1,pageSize:20},function (result) {
            if(!result["success"]){
                $.messager.alert("提示","服务器出错");
                return false
            }
            var columns = [
                {title: "日期", index: 10, field: "thdate", width: 120, halign:'center', align: 'center',  hidden: false },
                {title: "时间点", index: 20, field: "time", width: 120, halign:'center', align: 'center',  hidden: false }
            ];

            if (result.data){
                var fields = result.data.fields;
                $.each(fields,function (i,field) {
                    columns.push({title: fields[i].caption, index: i*10 + 30, field: fields[i].id, width: 160, halign:'center', align: 'right',  hidden: false });
                    config.push({
                        title:fields[i].caption,
                        name:fields[i].id,
                        value:''
                    });
                });
                tabls.datagrid({
                    columns: [columns]
                });
                var pager= tabls.datagrid("getPager");

                if (result.data.data.records){
                    res=result.data.data.records;
                    $.each(res,function (i,r) {
                        if(r!=null||r!=undefined||r!=""){
                            var date=r["thdate"];
                            r["thdate"]=date.substr(0,4)+"-"+date.substr(4,2)+'-'+date.substr(6,2)
                        }
                    });


                    tabls.datagrid("loadData",{rows:result.data.data.records,total:result.data.data.total});
                    pager.pagination({
                        onSelectPage: function (a, b) {
                            HTTP.post("rtdata/pretreat/datas",{code: '${code}',pageNo:a,pageSize:b},function (result) {
                                if(!result["success"]){
                                    return false
                                }
                                var gridOpts = tabls.datagrid('options');
                                gridOpts.pageNumber = a;
                                gridOpts.pageSize =b;
                                tabls.datagrid("loadData",{rows:result.data.data.records,total:result.data.data.total});
                            });

                        }
                    })
                }
            }

        });


        function creatTarget(title,init,handler) {
            var $container = $('<div style="position:relative;padding: 20px"/>');
            $container.iDialog({
                title: title,
                buttons: [{
                    text: '确认',
                    iconCls: 'fa fa-save',
                    btnCls: 'gui-btn-save',
                    handler: function () {
                        handler($container)
                    }
                },
                    {text:'取消', iconCls: "fa fa-close", btnCls: "gui-btn-danger", handler:function () {$container.iDialog('close');}}],
                onOpen:function () {
                    var columns = [
                        {"title": "ID", "index": 0, "field": "name", "align": "center", hidden: true},
                        {"title": "名称", "index": 6, "field": "title", "width": '50%', "align": "center"},
                        {"title": "值", "index": 7, "field": "value", "width": '50%', "align": "center", editor: {type: 'textbox'}}
                    ];
                    $container.find("input[name='thdate']").iDatebox({value:new Date().Format("yyyy-MM-dd")});
                    $container.find("input[name='time']").iTimespinner({showSeconds: true});
                    var $attrTable=$container.find('.attrtable');
                    $attrTable.edatagrid({
                        pagination: false,
                        columns: [columns],
                        height: 216,
                        showHeader: false,
                        autoSave: true
                    });
                    $attrTable.edatagrid("loadData",config||[]);

                    init($container)
                },
                onDestroy:function(){
                },
                onClose: function () {
                    $(this).form("clear");
                    $(this).iDialog('destroy');
                }
            });
            var target='<div class="gui-row" style="display:inline-block;width: 48%" >' +
                '        <div class="gui-col-sm12">' +
                '            <label class="gui-form-label" >日期：</label>' +
                '            <div class="gui-input-block"><input type="text" name="thdate" data-options="required:true"></div>' +
                '        </div>' +
                '        </div>'+
                '       <div class="gui-row" style="display:inline-block;width: 48%" >' +
                '        <div class="gui-col-sm12">' +
                '            <label class="gui-form-label" >时间点：</label>' +
                '            <div class="gui-input-block"><input type="text" name="time" value = "00:00:00", data-options="required:true"></div>' +
                '        </div>' +
                '        </div>'+
                '       <div class="gui-row">' +
                '       <div class="attrtable"></div>'+
                '        </div>';
            $container.html('').append(target);
            $container.iDialog('open');
        }
    })




</script>
</html>
