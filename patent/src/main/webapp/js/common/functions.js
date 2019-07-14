function createYear(start,end) {
    var s=parseInt(start),e=parseInt(end),data=[];
    for(var i=s;i<=e;i++){
        data.push(
            {value:i,text:i}
        )
    }
    return data
}
function getNextMonth(date) {
    var arr= new Date(date);
    var year = arr.getFullYear();
    var month = arr.getMonth()+1;
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 === 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var t2 ={
        year:year2,month:month2
    };
    return t2;
}
function gjDialog(ele,options) {
    var content_html =
        '<div style="overflow: hidden;position: relative">' +
        '<div class="" style="width: 100%;margin: 10px">' +
        '<label style="display: inline-block;margin-right: 6px" >搜索条件</label><input type="text" class="keyword" data-toggle="gui-textbox" placeholder="" style="height: 30px;line-height: 30px;margin-left: 10px;padding-left: 10px">' +
        '<span class="auxiliary-icon fa fa-search"></span></div>' +
        '</div>'+
        '<div style="width:100%;overflow: auto"><table class="dat_table" style="height:398px"></table></div>';
    $('<div id="'+ele+'" style="position:relative">').iDialog({
        width:800,
        height:600,
        title:"选择指标",
        buttons: [
            {text: '确定', iconCls: 'fa fa-save', btnCls: 'gui-btn',
                handler: function () {
                    var selectedRow = $("#"+ele).find(".dat_table").datagrid("getSelected");
                    options.callback(selectedRow);
                    $("#"+ele).form("clear");
                    $("#"+ele).iDialog("destroy");
                }
            }],
        onOpen: function () {
            var layero=$("#"+ele).append(content_html);
            layero.find('.keyword').iTextbox({
                width:'90%',
                inputEvents: $.extend({}, $.fn.textbox.defaults.inputEvents, {
                    keyup: function (event) {
                        event.stopPropagation();
                        if (event.keyCode === 13) {
                            var keyword=layero.find('.keyword').iTextbox('getValue');
                            HTTP.post("kzzx/ele/select",{id:result["data"]["id"],condition:keyword},function (result) {
                                if(result['success']){
                                    layero.find('.dat_table').datagrid('loadData',result['data']['records']);
                                }
                            })
                        }}})
            });

            layero.find(".dat_table").datagrid({
                singleSelect:true,
                columns:[],
                rownumbers:true,
                height:459,
                columnFormatter: xFormatter,
                onDblClickRow:function () {
                    var selectedRow = layero.find(".dat_table").datagrid("getSelected");
                    options.callback(selectedRow,fh);
                    $("#"+ele).form("clear");
                    $("#"+ele).iDialog("destroy");
                }
            });
            var keyword=layero.find('.keyword').iTextbox('getValue');
            layero.find('.auxiliary-icon').unbind().bind('click',function() {
                var keyword=layero.find('.keyword').iTextbox('getValue');

            });


        },
        onClose: function () {
            $(this).form("clear");
            $(this).iDialog('destroy');
        }
    });
    $("#"+ele).iDialog("open");
}