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

    var _chooser_default_opts = {};

    var _chooser = {

        choose: function (url, code, callback, opts) {
            var content_html =
//                '<label class="textbox-label textbox-label-top" style="    padding-left: 13px; text-align: left; height: 32px; line-height: 32px;border-bottom: 1px solid #95B8E7;">辅助输入代码: ' + code + '</label>' +
                '<div>' +
                '<span class="textbox search" style="width: 797px">' +
                '<input type="text" class="keyword textbox-text validatebox-text textbox-prompt" placeholder="输入关键字搜索" style="height: 22px; line-height: 22px; width: 100%;"></span>' +
                '</div>'+
                '<div><table class="dat_table"  style="height: 320px"/></div>';

            var layerIndex = layer.open({
                type: 1,
                title: '辅助输入【' + code + '】',
                skin: 'layui-layer-lan',
                area: ['800px', '480px'],
                content: content_html,
                scrollbar: false,
                btn: ['确定', '清除', '关闭'],
                success: function(layero, index){
                    DataTable.datagrid(layero.find(".dat_table"), {url: url, params: {code: code},formatter:xFormatter});
                    layero.find(".search .keyword").keyup(
                        function(event){
                            layero.find(".dat_table").datagrid("search", $(event.target).val());
                        }
                    );
                },
                yes: function(index, layero){
                    var selectedRow = layero.find(".dat_table").datagrid("getSelected");
                    if (  selectedRow==null ){
                        layer.alert('请先选择一个用户');
                        return ;
                    }
                  /*  layer.close(index);*/

                    callback(selectedRow);

                },
                btn2: function (index) {
                    layer.close(index);
                    callback({});
                },
                btn3: function(){
                }
            });
        },

        multiChoose: function (url, title, callback, params) {
            var content_html =
                '<div style="border: 1px solid #95B8E7;">' +
                '<span class="textbox search" style="width: 797px">' +
                '<input type="text" class="keyword textbox-text validatebox-text textbox-prompt" placeholder="输入关键字搜索" style="height: 22px; line-height: 22px; width: 100%;"></span>' +
                '</div>'+
                '<div><table class="dat_table"  style="height: 353px"/></div>';

            var layerIndex = layer.open({
                type: 1,
                title: title,
                skin: 'layui-layer-lan',
                area: ['800px', '480px'],
                content: content_html,
                scrollbar: false,
                btn: ['确定', '清除', '关闭'],
                success: function(layero, index){
                    DataTable.datagrid(layero.find(".dat_table"), {url: url, params: (params||{}), singleSelect: false});
                    layero.find(".search .keyword").keyup(
                        function(event){
                            layero.find(".dat_table").datagrid("search", $(event.target).val());
                        }
                    );
                },
                yes: function(index, layero){
                    var rows = layero.find(".dat_table").datagrid("getSelections");
                    if ( rows==null || rows.length==0 ){
                        layer.alert('请先选择一个用户');
                        return ;
                    }
                    $.each(rows, function (i, row) {
                        callback(row);
                    });
                    layer.close(index);
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

    window.Chooser = window.Chooser || _chooser;

}(jQuery, layer, window));


