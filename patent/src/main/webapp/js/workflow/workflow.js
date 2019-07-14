if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function (window, $) {
    'use strict';

    var _workFlow = {};

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

    _workFlow.init = function (_id, nextInfos) {
        var $container = findJQObj(_id);
        var $layoutContainer = $container.find(".layout_container");
        $layoutContainer.layout();
        var centerContent = '<input style="width:100%;height:26px; border: 0" readonly value="1. 填写处理意见">' +
            '       <textarea  aria-multiline="true" name="comment"  style="height:120px;padding-left: 12px;margin-left: 20px;width: 94%;border: 1px solid lightgray;"></textarea><hr>' +
            '   <input style="width:100%;height:26px; border: 0" readonly style="width:100%;height:26px; padding-top:5px" value="2. 下一步处理事务">' +
            '       <div class="easyui-datagrid setpdatagrid" style="width:100%;" />';
        $layoutContainer.layout('add',{
            region: 'center',
            width: '70%',
            content: centerContent
        });
        var eastContent = '<div style="border-left: 1px solid lightgrey;padding-left: 2px"><input readonly style="width:100%;height:26px;border: 0" value="3. 选择待处理人">' +
            '       <div class="easyui-datalist userlist" style="width:100%;" /></div>';
        $layoutContainer.layout('add',{
            region: 'east',
            width: '30%',
            content: eastContent
        });

        var $setpdatagrid = $container.find(".setpdatagrid");
        $setpdatagrid.datagrid({
            singleSelect: true,
            checkbox: true,
            lines: true,
            valueField: 'wfpid',
            data: nextInfos,
            columns:[[
                {field:'selected',checkbox: true},
                {field:'wfpid',title:'id',width:100, align: 'center'},
                {field:'wfpname',title:'name', align: 'center',width:150}
            ]],
            showHeader: false,
            onSelect: function(index,row) {
                var userList = row['userList'];
                if ( userList!=null && userList.length>0 ){
                    $userlist.datalist({
                        singleSelect: false,
                        checkbox: true,
                        lines: true,
                        data:  userList,//userList,
                        textFormatter: function(value,row,index) {
                            return row["id"] + "    " + row["name"];
                        },
                        onUnselect: function(index,row) {
                            row['selected'] = 'N';
                        },
                        onSelect: function(index,row) {
                            row['selected'] = 'Y';
                        }
                    });

                    $.each(userList,function(index,record){//遍历JSON
                        if( record['selected'] == 'S' || record['selected'] == 'Y' ){
                            $userlist.datagrid('selectRow', index);
                        }
                    });
                } else {
                    $layoutContainer.layout('remove', 'east');
                }
            },}
        );
        $setpdatagrid.parents('.datagrid-wrap').removeClass('panel-body');
        $setpdatagrid.prev('.datagrid-view2').children('.datagrid-header').css('border',0);
        $container.data('setpdatagrid', $setpdatagrid);

        var $userlist = $container.find(".userlist");
        $userlist.datalist({
            singleSelect: false,
            checkbox: true,
            lines: true,
            data: []
        });

        var stepSelected = 0;
        $.each(nextInfos,function(index,record){//遍历JSON
            if( record['selected'] == 'Y' ){
                stepSelected = index;
            }
        });
        $setpdatagrid.datagrid('selectRow', stepSelected);

        return $container;
    };
    _workFlow.collectData = function (_id) {
        var $container = findJQObj(_id);
        var $setpdatagrid = $container.data('setpdatagrid');
        var result =  $setpdatagrid.datagrid('getSelected');
        result["comment"] = $container.find("textarea[name='comment']").val();

        return result;
    };

    _workFlow.traceShow = function (wfinstid) {
        HTTP.post("wf/common/wflog/" + wfinstid, {}, function(resp){
            if ( resp.success ) {
                /*var $container= $('<div style="position:relative"/>');
                $container.iDialog({
                    title:'工作流查看',
                    width: 640, height: 360,
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
                return false;*/
                var submitDlgOptions = {
                    title: "工作流查看",
                    content: '',
                    width:960, height:540,
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

    }

    _workFlow.trace = function (_id, traces) {
        var $container = findJQObj(_id);

        var stepTraces = $container.find(".stepTraces");
        if( stepTraces==null || stepTraces.length==0){
            stepTraces = $container.append('<div class="easyui-datagrid setpdatagrid" style="width:100%;" />');
        }
        stepTraces.datagrid({
            checkbox: true,
            lines: true,
            valueField: 'id',
            data: traces,
            columns:[[
                {field:'nodeName', title:'事务名称', width:100, align: 'center'},
                {field:'actionUserName',title:'处理人', align: 'center',width:80},
                {field:'action',title:'处理', align: 'center',width:50,
                    formatter: function(value,row,index){
                        if (value=='1'){
                            return '提交';
                        }
                        if (value=='2'){
                            return '退回';
                        }
                        if (value=='3'){
                            return '撤回';
                        }
                        if (value=='4'){
                            return '转交';
                        }
                        if (value=='8'){
                            return '待处理';
                        }
                        if (value=='9'){
                            return '完成';
                        }
                    }},
                {field:'actionTime',title:'处理时间', align: 'center',width:140,
                    formatter: function(value,row,index){
                        if ( value==null ) {
                            return "";
                        }
                        return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
                    }
                },
                {field:'nextNodeName',title:'下一步事务', align: 'center',width: 100},
                {field:'nextUserName',title:'下一步处理人', align: 'center',width: 150},
                {field:'comment',title:'处理意见', align: 'left',width: 166}
            ]]
        });
    };

    _workFlow.submit = function (_nextinfourl, params, _submiturl, _callbackFunc) {
        HTTP.post(_nextinfourl, params, function(resp){
            if ( resp.success ) {
                var $container= $('<div style="position:relative"/>');
                    $container.iDialog({
                    title:'工作流提交',
                    width:960, height:540,
                    buttons: [{
                        text: '确认',
                        iconCls: 'fa fa-save',
                        btnCls: 'gui-btn-save',
                        handler: function () {
                            var nextInfo = WORKFLOW.collectData($container);
                            if(params['wfoperate']){
                                delete  params['wfoperate'];
                            }
                            var recos={
                                records : [params],
                                nextinfo: nextInfo
                            };
                            HTTP.post(_submiturl, recos, function(_resp){
                                if ( _resp.success ) {
                                    $.messager.alert('', '工作流提交成功');
                                    _callbackFunc();
                                    $container.iDialog('close');
                                } else {
                                    $.messager.alert('', _resp['message'] || '工作流提交失败');
                                }
                            });

                        }
                    },{
                        text:'取消',
                        iconCls: "fa fa-close",
                        btnCls: "gui-btn-danger",
                        handler:function () {
                            $container.iDialog('close');
                        }
                    }],
                    onOpen:function () {
                        WORKFLOW.init($container, resp.data.records);
                    },
                    onClose: function () {
                        $(this).form("clear");
                        $(this).iDialog('destroy');
                    }

                });
                var $div=$('<div class="layout_container" style="height: 100%" />');
                $container.append($div);
                $container.iDialog('open');
                return false;
            /*    var submitDlgOptions = {
                    title: "工作流提交",
                    content: '<div class="layout_container" style="height: 100%" />',
                    width: 640,
                    height: 360,
                    onInit: function ($container) {
                        WORKFLOW.init($container, resp.data.records);
                    }
                };
                var submitDlg = Dialog.buildDialog(submitDlgOptions);
                submitDlg.regResultHandler(function (dlgContainer) {
                    var that = this;
                    var nextInfo = WORKFLOW.collectData(dlgContainer);
                    if(params['wfoperate']){
                        delete  params['wfoperate'];
                    }
                    var recos={
                        records : [params],
                        nextinfo: nextInfo
                    };
                    HTTP.post(_submiturl, recos, function(_resp){
                        if ( _resp.success ) {
                            $.messager.alert('', '工作流提交成功');
                            _callbackFunc();
                            that.close();
                        } else {
                            $.messager.alert('', _resp['message'] || '工作流提交失败');
                        }
                    });
                    return false;
                });

                submitDlg.show();*/
            } else {
                $.messager.alert('', resp['message'] || '获取工作流信息失败');
            }
        });
    };


    window.WORKFLOW = window.WORKFLOW || _workFlow;

})(window, jQuery);

