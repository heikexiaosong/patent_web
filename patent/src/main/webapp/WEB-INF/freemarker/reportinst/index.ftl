 <style>
    .fontSize12{
        font-size:12px;
        line-height: 12px;
        height: 12px;
    }
    .fontSize14{
        font-size:14px;
        line-height: 14px!important;
        height: 14px!important;
    }
    .fontSize18{
        font-size:18px;
        line-height: 18px!important;
        height: 18px!important;
    }
    .fontSize24{
        font-size:24px;
        line-height: 24px!important;
        height: 24px!important;
    }
    .fontSize32{
        font-size:32px;
        line-height: 32px!important;
        height: 32px!important;
    }
    .fontSize48{
        font-size:48px;
        line-height: 48px!important;
        height: 48px!important;
    }
    .htItalic{
        font-style: italic;
    }
    .htBold{
        font-weight: bold;
    }
    .htUnderline{
        text-decoration:underline;
        text-underline: black;
    }
    .material-icons {
        font-size: 18px;
        display: block;
        margin-top: -2px;
    }
</style>
<#assign pid="reportInst-${bbbm}">

<div id="${pid}" class="gui-div">
    <table class="toolbar-table" data-options="id: '${pid}Table',herf:'report/gridset/query'">
    </table>
    <div id="${pid}Table-toolbar" class="gui-toolbar" data-options="grid:{type:'datagrid',id:'${pid}Table'}">
        <a class="toolbar-reload toolbar"  href="javascript:void(0)"></a>
        <a class="toolbar-generate" href="javascript:void(0)"></a>
       <#-- <a class="toolbar-show" href="javascript:void(0)"></a>-->
        <a class="toolbar-publish" href="javascript:void(0)">报表计算</a>
    <#--    <a class="toolbar-show-design" href="javascript:void(0)"></a>-->
    <#--  <a class="toolbar-show-design-new" href="javascript:void(0)"></a>-->
    	<a class="toolbar-display-v2" href="javascript:void(0)"></a>
        <a class="toolbar-export-design" href="javascript:void(0)"></a>
        <a class="toolbar-delete toolbar" href="javascript:void(0)"></a>
        <a class="btn btn-primary serach toolbar-search"></a>

        <div class="bdsug" style="height: auto; display: none" >
            <form action="" class="query-criteria">
                <ul><li class="bdsug-store bdsug-overflow">
                <span style="margin: 10px">
                        <label >日期范围：</label>
                    <input type="text" data-toggle="gui-datebox" name="start">
                    <input type="text" data-toggle="gui-datebox" name="end">
                    </span>
                </li></ul>
            </form>
        </div>
    </div>
</div>
<script>

    $('#${pid}').find('.toolbar-generate').iMenubutton({
        onClick: function () {
            var $container = $('<div style="position:relative"/>');
            var bblx="D";
            HTTP.post("report/reporttemp/query",{bbbm:'${bbbm}'},function (result) {
                    if(result["success"]&&result["data"]["records"]){
                      bblx=result['data']["records"][0]["bblx"];
                    }});
            $container.iDialog({
                title: '报表生成 -- ' + '${reporttemp.bbmc}',
                width:400,
                height:300,
                buttons: [{
                    text: '确认',
                    iconCls: 'fa fa-save',
                    btnCls: 'gui-btn-save',
                    handler: function () {
                        var theDate = new Date($container.find("input[name='theDate']").val());
                        var parmas={bbbm:  '${bbbm}', theDate: theDate};
                        switch (bblx) {
                            case "M" :parmas={bbbm:  '${bbbm}', year: theDate.getFullYear(), month: theDate.getMonth()+1}; break;
                            case "Y" :parmas={bbbm:  '${bbbm}',year: theDate.getFullYear()}; break;
                            default:parmas={bbbm:  '${bbbm}', theDate: theDate.getTime()};;break;
                        }
                        HTTP.post('report/reportinst/generate',parmas,function (result) {
                            console.log(result.data);
                            if ( result.success ){
                                $.messager.alert('信息', '${reporttemp.bbmc}生成成功');
                                $("#${pid}").find('.toolbar-reload').click();
                                $container.iDialog('close');
                            } else {
                                $.messager.alert('信息', result.message || ('${reporttemp.bbmc}生成失败'));
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
                onOpen:function ($container) {
                    // $('#'+ele).find(".detail-view").html("");
                },
                onClose: function () {
                    $(this).form("clear");
                    $(this).iDialog('destroy');
                }

            });
            var $div=$('<div style="margin: 20px"> <input type="text"  name="theDate"> </div>');

            switch (bblx) {
                case"M": Month($div.find('input[name="theDate"]')); break;
                case"Y": YearDATE($div.find('input[name="theDate"]')); break;
                default:DateDATE($div.find('input[name="theDate"]'));break;

            }
       function Month(ele){
               ele.datebox({
                    //显示日趋选择对象后再触发弹出月份层的事件，初始化时没有生成月份层
                    onShowPanel: function () {
                        //触发click事件弹出月份层
                        span.trigger('click');
                        if (!tds)
                        //延时触发获取月份对象，因为上面的事件触发和对象生成有时间间隔
                            setTimeout(function() {
                                tds = p.find('div.calendar-menu-month-inner td');
                                tds.click(function(e) {
                                    //禁止冒泡执行easyui给月份绑定的事件
                                    e.stopPropagation();
                                    //得到年份
                                    var year = /\d{4}/.exec(span.html())[0] ,
                                        //月份
                                        //之前是这样的month = parseInt($(this).attr('abbr'), 10) + 1;
                                        month = parseInt($(this).attr('abbr'), 10);

                                    //隐藏日期对象
                                   ele.datebox('hidePanel')
                                    //设置日期的值
                                        .datebox('setValue', year + '-' + month);
                                });
                            }, 0);
                    },
                    //配置parser，返回选择的日期
                    parser: function (s) {
                        if (!s) return new Date();
                        var arr = s.split('-');
                        return new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, 1);
                    },
                    //配置formatter，只返回年月 之前是这样的d.getFullYear() + '-' +(d.getMonth());
                    formatter: function (d) {
                        var currentMonth = (d.getMonth()+1);
                        var currentMonthStr = currentMonth < 10 ? ('0' + currentMonth) : (currentMonth + '');
                        return d.getFullYear() + '-' + currentMonthStr;
                    }
                });

                //日期选择对象
                var p =ele.datebox('panel'),
                    //日期选择对象中月份
                    tds = false,
                    //显示月份层的触发控件
                    span = p.find('span.calendar-text');
                var curr_time = new Date();

                //设置前当月
                ele.datebox("setValue", myformatter(curr_time));
            };
      function  YearDATE(ele){
                ele.datebox({
                    //显示日趋选择对象后再触发弹出月份层的事件，初始化时没有生成月份层
                    onShowPanel: function () {
                        //触发click事件弹出月份层
                        span.trigger('click');
                        if (!tds)
                        //延时触发获取月份对象，因为上面的事件触发和对象生成有时间间隔
                            setTimeout(function() {
                                tds = p.find('div.calendar-menu-month-inner');
                               tds.remove();
                            }, 0);
                    },
                    //配置parser，返回选择的日期
                    parser: function (s) {
                        if (!s) return new Date();

                        if($.isArray(s)&&s.indexOf('-')>-1){
                            var arr = s.split('-');
                            return new Date(parseInt(arr[0], 10),0, 1);
                        }else{
                            return new Date(s,0, 1);
                        }
                    },
                    //配置formatter，只返回年月 之前是这样的d.getFullYear() + '-' +(d.getMonth());
                    formatter: function (d) {
                        return d.getFullYear() ;
                    },
                });
                var buttons=[];
                buttons.push({
                    text: function (b) {
                        return "确定"
                    },
                    handler: function (b) {
                      var year= p.find('.calendar-menu-year').val();
                      ele.datebox("setValue",year)
                        ele.datebox('hidePanel');

                    }
                },{
                    text: function (b) {
                        return "关闭"
                    },
                    handler: function (b) {
                       $(this).closest("div.combo-panel").panel("close")
                    }
                })
                ele.datebox({buttons:buttons});
          var p =ele.datebox('panel'),
              //日期选择对象中月份
              tds = false,
              //显示月份层的触发控件
              span = p.find('span.calendar-text');
          var curr_time = new Date().getFullYear();

          ele.datebox("setValue", curr_time);

      };
       function myformatter(date) {
                //获取年份
                var y = date.getFullYear();
                //获取月份
                var m = date.getMonth() + 1;
                return y + '-' + m;
            }
        function DateDATE(ele){
          ele.iDatebox({
              value: new Date().Format("yyyy-MM-dd"),
              width:110});
        }
            $container.html('').append($div);
            $container.iDialog('open');

        },
        text: '生成报表',
        iconCls: 'fa fa-bar-chart'
    });



    $('#${pid}').find('.toolbar-show').iMenubutton({
        onClick: function () {
            var record = $('#${pid}').find('.toolbar-table').datagrid('getSelected') || {};

            if ( record==null || record == undefined ) {
                $.messager.alert('提示','请选择需要查看的报表');
                return false;
            }
            HTTP.post('report/reportinst/query/old/'+record["id"],{},function (res) {
                if(res["success"]&&res["data"]["records"]){
                    record=res["data"]["records"];
                }
            });

            var $container = $('<div style="position:relative"/>');
            $container.iDialog({
                title: record["bbmc"] + '[' + record["bbrq"] + ']',
                maximized: 1,
                width: $(document).width(),
                height:$(document).height(),
                buttons: [{
                    text: '确认',
                    iconCls: 'fa fa-save',
                    btnCls: 'gui-btn-save',
                    handler: function () {
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
                    $(this).find('header input[name="cell"]').iTextbox({width:70});
                    $(this).find('header input[name="formula"]').iTextbox({width:$(hot.rootElement).width()-160,onChange:function (event) {
                            console.log($(this).val());
                        }});
                    $(this).find('header input[name="formula"]').prev().focus(function () {
                        if($container.find('header input[textboxname="cell"]').data('row')&&$container.find('header input[textboxname="cell"]').data('col')){
                            hot.selectCell($container.find('header input[textboxname="cell"]').data('row'),$container.find('header input[textboxname="cell"]').data('col'));
                        }
                    });
                    $(this).find('.add-formula').unbind().bind('click',function () {
                        var $context = $('<div style="position:relative"/>');
                        $context.iDialog({
                            title: '插入函数',
                            width: 400,
                            height:400,
                            buttons: [{
                                text: '确认',
                                iconCls: 'fa fa-save',
                                btnCls: 'gui-btn-save',
                                handler: function () {
                                }
                            },{
                                text:'取消',
                                iconCls: "fa fa-close",
                                btnCls: "gui-btn-danger",
                                handler:function () {
                                    $context.iDialog('close');
                                }
                            }],
                            onOpen:function () {

                            },
                            onClose: function () {
                                $(this).form("clear");
                                $(this).iDialog('destroy');
                            }
                        });

                        var targetElement='<div></div>';
                        $context.html('').append(targetElement);
                        $context.iDialog('open');
                    });
                    $container.unbind().bind('input propertychange','.handsontableInput',function(event){
                        $(this).find('header input[textboxname="formula"]').textbox('setValue',$(event.target).val())
                    });
                    hot.render();
                },
                onDestroy:function(){
                    hot.destroy();
                },
                onClose: function () {
                    $(this).form("clear");
                    $(this).iDialog('destroy');
                }
            });

            var target='<div><header style="background-color: #e2e2e2;height: 36px;padding-top: 2px"><input type="text" name="cell">' +
                    '<a class="add-formula l-btn l-btn-small l-btn-plain" href="javascript:void(0)" style="height: 28px;background-color: white;margin-left: 10px">' +
                    '<span class="l-btn-left l-btn-icon-left" style="margin-top: 5px;"><span class="l-btn-text" style="margin: -4px 4px 0 24px;">fx</span></span></a>' +
                    '<span style="margin-left: 4px" ><input type="text" name="formula"></span>' +
                    '</header><div id="handsontable"></div></div>';
            $container.html('').append(target);
            var _config={
                mergeCells: [],
                customBorders:[],
                cell:[],
                colWidths:[],
                rowHeights:[],
                data:null
            };
            if(record["bbsj"]){
              _config = JSON.parse(record["bbsj"]);
            }

            var borders=[];
            var startCols=parseInt(document.body.clientWidth/50-1);
            var startRows=parseInt(document.body.clientHeight-130/24);
            if(_config["customBorders"]&&_config["customBorders"].length>0){
                borders=JSON.parse(_config["customBorders"])
            }
            var hot= new Handsontable(document.getElementById('handsontable'), {
                data: _config["data"],
                startCols: startCols,
                startRows: startRows,
                rowHeaders: true,
                colHeaders: true,
                colWidths:_config["colWidths"],
                rowHeights:_config["rowHeights"],
                manualRowResize : true,
                manualColumnResize : true,
                manualColumnMove : true,
                manualRowMove : true,
                outsideClickDeselects: false,
                /*     filters: true,*/
                cell:_config["cell"],
                dropdownMenu: true,
                language:'zh-CN',
                // as a boolean
                contextMenu: true,
                customBorder:true,
                customBorders:borders,
                mergeCells:_config["mergeCells"],
                afterOnCellMouseDown:function (event,coords,TD) {
                    var getSelectedRange=hot.getColHeader(coords.col)+hot.getRowHeader(coords.row);
                    $container.find('header input[textboxname="cell"]').data('col',coords.col);
                    $container.find('header input[textboxname="cell"]').data('row',coords.row);
                    $container.find('header input[textboxname="cell"]').textbox({value:getSelectedRange});
                    $container.find('header input[textboxname="formula"]').textbox('setValue',$(event.target).text())
                }

            });
            $container.iDialog('open');

        },
        text: '报表数据',
        iconCls: 'fa fa-bar-chart'
    });

    $('#${pid}').find('.toolbar-show-design').iMenubutton({
        onClick: function () {
            var record = $('#${pid}').find('.toolbar-table').datagrid('getSelected');

            if ( record==null || record == undefined ) {
                $.messager.alert('提示','请选择需要查看的报表');
                return false;
            }
            HTTP.post('report/reportinst/query/old/'+record["id"],{},function (res) {
                if(res["success"]&&res["data"]["records"]){
                    record=res["data"]["records"];
                }
            });

            var $container = $('<div style="position:relative"/>');
            var date=new Date(record["bbrq"]).Format("yyyy-MM-dd")
            $container.iDialog({
                title: record["bbmc"] + '[' + date + ']',
                maximized: 1,
                width: $(document).width(),
                height:$(document).height(),
                buttons: [{
                    text: '确认',
                    iconCls: 'fa fa-save',
                    btnCls: 'gui-btn-save',
                    handler: function () {
                        console.log(JSON.stringify(b.getData()));
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

                },
                onDestroy:function(){
                },
                onClose: function () {
                    $(this).form("clear");
                    $(this).iDialog('destroy');
                }
            });

            var target='<div><div id="x-spreadsheet-demo"></div></div>';
            $container.html('').append(target);
            var _config={
            };
            if(record["bbsj"]){
                _config = JSON.parse(record["bbsj"]);
            }
            var borders=[];
            if(_config["customBorders"]&&_config["customBorders"].length>0){
                borders=JSON.parse(_config["customBorders"])
            }
            var b= x.spreadsheet('#x-spreadsheet-demo',{showToolbar:false,showGrid:false});
            var x_rows={},x_mergeCells=[],styles=[];
            //cells
            var arr=_config.cell;var arr2=borders ;
            var map={}, map1={}, map2={},map3={};
            var style_refrence={
                "htCenter":{"align":"center"}
            };
            if(arr){
                $.each(arr,function (i,e) {
                    var style={};
                    if((e.className.indexOf("htCenter")) >= 0){
                        style=$.extend({},style_refrence["htCenter"]);
                    }
                    map1[e.row+'_'+e.col]=style;
                    map[e.row+'_'+e.col] = {};
                })
            }
            if(arr2){
                $.each(arr2,function (i,r) {
                    var border={},border_config=["thin", "#000"];
                    if(r["top"]["width"])border["top"]=border_config;
                    if(r["bottom"]["width"])border["bottom"]=border_config;
                    if(r["left"]["width"])border["left"]=border_config;
                    if(r["right"]["width"])border["right"]=border_config;
                    map2[r.row+'_'+r.col]={"border":border};
                    map[r.row+'_'+r.col] = {};
                })
            }
            $.each(map, function(i, e){
                $.extend(e, map2[i],map1[i])
            });
            $.each(_config.data,function (i,item) {
                $.each(item,function (j,r) {
                    var value='';
                    if(r!=null){
                        value=r
                    }
                    map3[i+'_'+j]={text:value};
                })
            });
            var num=0;
            $.each(map,function (i,e) {
                styles.push(e);
                map3[i]["style"]=num;
                num++;
            });
            //data
            $.each(_config.data,function (i,item) {
                var cell={};
                $.each(item,function (j,r) {
                    cell[j]=map3[i+"_"+j];
                });
                x_rows[i]={
                    "cells":cell
                };
            });
            //mergeCell
            $.each(_config.mergeCells,function (i,item) {
                var startR=item.row;var startC=item.col;
                var endR=item.row+item.rowspan-1;
                var endC=item.col+item.colspan-1;
                var mergeCell={sri:item.row,sci:item.col,eri:item.row+item.rowspan-1,eci:item.col+item.colspan-1};
                x_rows[item.row]["cells"][item.col]["merge"]=[item.rowspan-1,item.colspan-1];
                for(var i=startR+1;i<=endR;i++){
                    for(var j=startC;j<=endC;j++){
                        if(x_rows[i]["cells"]){
                            if(x_rows[i]["cells"][j])
                            x_rows[i]["cells"][j]["text"]='';
                        }
                    }
                }
                x_mergeCells.push(b.data.toString(mergeCell));
            });
            var options= {
                "name":"sheet1",
                "styles":styles,
                "merges":x_mergeCells,
                "rows":x_rows,
                "validations":[]}
                ;
                b.loadData(
                    options
                ).change((cdata) => console.log(JSON.stringify(cdata)));

            $container.iDialog('open');

        },
        text: '报表数据'
    });
    $('#${pid}').find('.toolbar-show-design-new').iMenubutton({
        onClick: function () {
            var record = $('#${pid}').find('.toolbar-table').datagrid('getSelected');

            if ( record==null || record == undefined ) {
                $.messager.alert('提示','请选择需要查看的报表');
                return false;
            }
            HTTP.post('report/reportinst/query/'+record["id"],{},function (res) {
                if(res["success"]&&res["data"]["records"]){
                    record=res["data"]["records"];
                }
            });

            var $container = $('<div style="position:relative"/>');
            var date=new Date(record["bbrq"]).Format("yyyy-MM-dd");
            $container.iDialog({
                title: record["bbmc"] + '[' + date + ']',
               /* maximized: 1,*/
                width: $(document).width(),
                height:$(document).height(),
                buttons: [{
                    text: '确认',
                    iconCls: 'fa fa-save',
                    btnCls: 'gui-btn-save',
                    handler: function () {
                        console.log(JSON.stringify(b.getData()));
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

                },
                onDestroy:function(){
                },
                onClose: function () {
                    $(this).form("clear");
                    $(this).iDialog('destroy');
                }
            });

            var target='<div><div id="x-spreadsheet-demo"></div></div>';
            $container.html('').append(target);

            var _config={},page={};
            if(record["bbsj"]){_config = JSON.parse(record["bbsj"]);}
            /*page配置*/
            if(_config["page"]){
                if((_config["page"]["showGrid"]!==undefined)&&!_config["page"]["showGrid"])page.showGrid=false;
            }
            var b= x.spreadsheet('#x-spreadsheet-demo',{showToolbar:false,showGrid:false,
                col: {
                    len: 50,
                    width: 100,
                    indexWidth: 60,
                    minWidth:60
                },
                row: {
                    len: 200,
                    height: 25
                },
            });
            var x_rows={},x_mergeCells=[];var cols={};
            var rows={},styles=[],merges=[]; var style_index=0;
            /*数据、样式*/
            if(_config["rows"])x_rows=_config["rows"];
            $.each(x_rows,function (i,row) {
                var cells=[];
                rows[i]={};
                if(row["height"]){
                    rows[i].height=row["height"]};
                if(row["visible"]!=undefined&&!row["visible"]){rows[i].height=1};
                $.each(row["cells"],function (j,cell) {
                    cells[j]={};
                    if(cell["value"])cells[j].text=cell["value"];
                    if(cell["style"]){
                        var item={};
                        /*边框*/
                        if(cell["style"]["border"]){
                            item.border={};
                            if(cell["style"]["border"]["top"])item.border.top=[cell["style"]["border"]["top"]["style"]||'',cell["style"]["border"]["top"]["color"]||'black'];
                            if(cell["style"]["border"]["bottom"])item.border.bottom=[cell["style"]["border"]["bottom"]["style"]||'',cell["style"]["border"]["bottom"]["color"]||'black'];
                            if(cell["style"]["border"]["left"])item.border.left=[cell["style"]["border"]["left"]["style"]||'',cell["style"]["border"]["left"]["color"]||'black'];
                            if(cell["style"]["border"]["right"])item.border.right=[cell["style"]["border"]["right"]["style"]||'',cell["style"]["border"]["right"]["color"]||'black'];
                        }
                        /*水平*/
                        if(cell["style"]["align"])item.align=cell["style"]["align"].toLowerCase();
                        /*垂直*/
                        if(cell["style"]["valign"]){
                            if(cell["style"]["valign"]==="CENTER"){
                                item.valign="middle";
                            }else{
                                item.valign=cell["style"]["valign"].toLowerCase();
                            }
                        }
                        /*字体*/
                        if(cell["style"]["font"]){
                            item.font={};
                            if(cell["style"]["font"]["bold"]){item.font.bold=true}
                            if(cell["style"]["font"]["italic"]){item.font.italic=true}
                            if(cell["style"]["font"]["size"]){item.font.size=cell["style"]["font"]["size"]}
                            if(cell["style"]["font"]["name"]){item.font.name=cell["style"]["font"]["name"]}
                            if(cell["style"]["font"]["color"]){item.color=cell["style"]["font"]["color"]}
                            if(cell["style"]["font"]["underline"]){item.underline=true}
                        }
                        /*背景色*/
                        if(cell["style"]["bgcolor"])item.bgcolor=cell["style"]["bgcolor"];
                        /*freeze*/
                        if(cell["style"]["freeze"])item.bgcolor=cell["style"]["freeze"];

                        styles.push(item);
                        cells[j].style=style_index;
                        style_index++;
                    }
                });
                rows[i]["cells"]=cells;
            });
            /*column*/
            if(_config["columns"]){
                $.each(_config["columns"],function (i,ie) {
                    cols[i]={};
                    cols[i]["width"]=ie.width;
                    if(ie["visible"]!=undefined&&!ie["visible"]){
                        cols[i]["width"]=1;
                    }
                })

            }
            /*合并单元格*/
            if(_config["mergeCells"]){
                x_mergeCells=_config["mergeCells"];
                $.each(x_mergeCells,function (n,item) {
                    var m={sri:item.firstRow,sci:item.firstCol,eri:item.lastRow,eci:item.lastCol};
                    rows[item.firstRow]["cells"][item.firstCol]["merge"]=[m.eri-m.sri,m.eci-m.sci];
                   /* var startR=item.firstRow;var startC=item.firstCol;var endR=item.lastRow;var endC=item.lastCol;
                    for(var i=startR+1;i<=endR;i++){
                           for(var j=startC;j<=endC;j++){
                               if(rows[i]["cells"]){
                                   if(rows[i]["cells"][j])rows[i]["cells"][j]["text"]='';
                               }
                           }
                       }*/
                    merges.push(b.data.toString(m));
                });
            }
            var options= {
                "name":"sheet1",
                "styles":styles,
                "merges":merges,
                "rows":rows,
                "cols":cols,
                "validations":[]}
            ;
            b.loadData(options).change();
            $container.iDialog('open');

        },
        text: '报表数据'
    });

    $('#${pid}').find('.toolbar-export-design').iMenubutton({
        onClick:function () {
            var record = $('#${pid}').find('.toolbar-table').datagrid('getSelected') || {};
            if ( record==null || record == undefined ) {
                $.messager.alert('提示','请选择一条数据进行操作');
                return false;
            }
            HTTP.download('report/reportinst/export',{id:record["id"]})

        },
        text: '报表导出',
        iconCls: 'fa fa-ban',
    });


    function layerClose(index){
        layer.close(index);
    }


    // 数据报表展示
    $('#${pid}').find('.toolbar-display-v2').iMenubutton({
        onClick: function () {
            var record = $('#${pid}').find('.toolbar-table').datagrid('getSelected');

            if ( record==null || record == undefined ) {
                $.messager.alert('提示','请选择需要查看的报表');
                return false;
            }

            //弹出即全屏
          /*  var index = layer.open({
                type: 2,
                title: false,
                closeBtn: false,
                shade: false,
                area: ['893px', '600px'],
                content: 'report/reportinst/display/v2/' + record["id"]
            });
            layer.full(index);*/
            $('<div class="firm" style="position:relative;overflow-y: hidden">').iDialog({
                width:800,
                height:640,
                title:'报表数据',
                maximized: 1,
                onClose: function () {
                    $(this).form("clear");
                    $(this).iDialog('destroy');
                },
                onOpen:function () {
                    var iframe=$('<iframe style="width: 100%;height: 100%"/>');
                    iframe.attr("src",'report/reportinst/display/v2/' + record["id"]);
                    $(this).append(iframe);

                }
            });
            $('.firm').iDialog('open');



        },
        text: '报表数据'
    });


    $('#${pid}').find('.toolbar-publish').iMenubutton({
        onClick: function () {

            var record = $('#${pid}').find('.toolbar-table').datagrid('getSelected') || {};
            if ( record==null || record == undefined ) {
                $.messager.alert('提示','请选择一条报表记录');
                return false;
            }
            $.messager.confirm("警告","选中的记录是否重新计算",function (r) {
                if(r){
                    HTTP.post('report/reportinst/recalculate',{id:  record["id"] },function (result) {
                        console.log(result.data);
                        if ( result.success ){
                            $.messager.alert('信息','报表[' + record["bbmc"]  + ']更新成功');
                            $("#${pid}").find('.toolbar-reload').click();
                        } else {
                            $.messager.alert('信息', result.message || ('报表[' + record["bbmc"]  + ']更新失败'));
                        }
                    });
                }
            })


        },
        text: '报表计算',
        iconCls: 'fa fa-calculator'
    });


    $(function () {

        $('#${pid}').find("input[name='start']").iDatebox({});
        $('#${pid}').find("input[name='end']").iDatebox({});


        $('#${pid}').Container(
                {
                    url:'report/reportinst/${bbbm}',
                    columns:[[
                        {title: "ID", index: 0, field: "id", width: 160, hidden: true },
                        {title: "报表编码", index: 10, field: "bbbm", width: 160, hidden: true },
                        {title: "序号", index: 20, field: "xh", width: 60,  fieldType:'ftFloat',},
                        {title: "报表名称", index: 30, field: "bbmc", width: 300 },
                        {title: "日期", index: 35, field: "bbrq", width: 100, fieldType:'ftDate'},
                        {title: "年度", index: 50, field: "year", width: 80, hidden: true },
                        {title: "开始时间", index: 70, field: "kssj", width: 160, fieldType:'ftDateTime', hidden: true },
                        {title: "结束时间", index: 80, field: "jssj", width: 160, fieldType:'ftDateTime', hidden: true },
                        {title: "计算人", index: 90, field: "jsr", width: 100},
                        {title: "计算时间", index: 100, field: "calctime", width: 160, fieldType:'ftDateTime'},
                        {title: "报表数据", index: 110, field: "bbsj", width: 160, hidden: true },
                        {title: "备注", index: 120, field: "bz", width: 160},
                        {title: "系统版本", index: 130, field: "sysversion", width: 160, hidden: true },
                        {title: "维护人编码", index: 140, field: "whrid", width: 160, hidden: true },
                        {title: "维护人", index: 150, field: "whr", width: 160},
                        {title: "维护时间", index: 160, field: "whsj", width: 160,  fieldType:'ftDateTime'},
                        {title: "创建人编码", index: 170, field: "cjrid", width: 160, hidden: true },
                        {title: "创建人", index: 180, field: "cjr", width: 160, hidden: true },
                        {title: "创建时间", index: 190, field: "cjsj", width: 160, fieldType:'ftDateTime', hidden: true }
                    ]],
                    dialog:{
                        id:'reportInstEdit',
                        width: 1000,
                        height: 600,
                        href:'report/reportinst/edit'
                    }
                }
        );
    });


</script>