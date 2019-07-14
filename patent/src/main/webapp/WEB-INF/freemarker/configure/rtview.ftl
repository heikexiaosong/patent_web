<div style="padding:5px 0;">
    <a id="history_${id}" href="#" data-toggle="topjui-linkbutton" data-options="iconCls:'fa fa-history'" style="width:100px">历史回放</a>
    <a id="stop_${id}" href="#" data-toggle="topjui-linkbutton" data-options="iconCls:'fa fa-stop'" style="width:100px">结束回放</a>
    <label class="textbox-label textbox-label-before" for="_easyui_textbox_input100" style="text-align: left; height: 34px; line-height: 34px; width: auto; padding-left: 20px">时间:</label>
    <label id="time_${id}" class="textbox-label textbox-label-before" for="_easyui_textbox_input100" style="text-align: left; height: 34px; line-height: 34px; width: 200px"></label>
</div>

<canvas width="600" height="400" id="${canvas_id}"></canvas>

<script>

    var timestamp = new Date().Format('yyyy-MM-dd hh:mm:ss');

    var historyFlag${id} = false;

    var code = '${code}';

    var ${canvas_id}_cfg = {
        "start": 0, "end": 0
    };

    var canvas_${id} = new fabric.Canvas('${canvas_id}');
    var selectedTab= $('#tabs').tabs('getSelected');
    $('#tabs').tabs('update', {
        tab: selectedTab,
        options: {
           type:'N'
        }
    });
    canvas_${id}.selection = false;


    //按钮【按钮一】的回调


    //10：加载图片时图片缩放到指定的大小。
    fabric.Image.fromURL('${bgImage}', function (img) {
        canvas_${id}.setWidth(img.width);
        canvas_${id}.setHeight(img.height);
        canvas_${id}.setBackgroundImage(img, canvas_${id}.renderAll.bind(canvas_${id}));
    });

     var isLoaded = false;
    var loadData${id} = function () {
        var canvas= canvas_${id};
        var cfgcode = '${code}';
     /*TimerCustom.setValue(index);*/

        var self = this;
        if ( self.second && self.second >= Math.floor(new Date().getTime()/2000) ){
            return ;
        }
        self.second  = Math.floor(new Date().getTime()/2000);

        reqs("POST","data/history/" + cfgcode,{timestamp: timestamp, history: historyFlag${id}},function (result) {

            $("#time_${id}").html(timestamp);

            var aa = new Date(timestamp);
            aa.setSeconds(aa.getSeconds() + 1);
            timestamp = aa.Format("yyyy-MM-dd hh:mm:ss");

            if ( ${canvas_id}_cfg["end"]!=null && aa.getTime() >= ${canvas_id}_cfg["end"] ) {
                timestamp = new Date().Format('yyyy-MM-dd hh:mm:ss');
                $("#history_${id}").linkbutton('enable');
                $("#stop_${id}").linkbutton('disable');
                historyFlag${id} = false;
                ${canvas_id}_cfg = {};
            }


        // 清空数据
        var items = canvas_${id}.getObjects();
        $.each(items, function (i, item) {
            canvas_${id}.remove(item);
        });

        $.each(result, function (i, item) {
            if(item.type==="image"){
                var textData = {
                    id: item.id,
                    left: Math.floor(item.posx), top: Math.floor(item.posy),
                    name: item["name"],
                    value: item.value|| '',
                    val: item.value|| '',
                    flag: "U",
                };
                var type="2";
                if(item["value"]&&item["prop"]){
                    var props=JSON.parse(item.prop);
                    var on=props.on;
                    var off=props.off;
                    if(on.indexOf("-")>-1){
                        var arry=on.split('-');
                        var maxON=Math.max(arry[0],arry[1]);
                        var minON=Math.min(arry[0],arry[1]);
                        if(minON<=item.value<=maxON){
                            type="1";
                        }
                    }else{
                        if(item.value===parseFloat(on)){
                            type="1";
                        }
                    }
                    if(off.indexOf("-")>-1){
                        var arry=off.split('-');
                        var maxON=Math.max(arry[0],arry[1]);
                        var minON=Math.min(arry[0],arry[1]);
                        if(minON<=item.value<=maxON){
                            type="0";
                        }
                    }else{
                        if(item.value===parseFloat(off)){
                            type="0";
                        }
                    }
                }

                var url={"0":"css/icons/dot1.png","1":"css/icons/dot.png","2":"css/icons/dot2.png"};
                fabric.Image.fromURL(url[type],function (text){
                    canvas_${id}.add(text);
                    text.set('selectable', false);
                },textData);
            }else{
            var textData = {
                uid: item.id,
                id: item.id,
                left: Math.floor(item.posx), top: Math.floor(item.posy),
                name: item["name"],
                type: item["type"] || "RANDOM",
                unit: item["unit"]||'',
                fontSize: item.font || 12,
                val: Math.random().toFixed(2),
                fill: item.textcolor || 'red',
                textAlign :'right',
                flag: "U",
            //stroke: item.textcolor || 'red',
            };
            if (!!item.lower && item.lower >= item.val) {
                textData.fill = item.lowercolor || item.textcolor;
                // textData.stroke = item.lowercolor || item.textcolor;
            }
            if (!!item.upper && item.upper <= item.val) {
                textData.fill = item.uppercolor || item.textcolor;
                // textData.stroke = item.uppercolor || item.textcolor;
            }
            var val = Number(item.val) || 0;
            var text;
            if (!!item.type && item.type === 'TEXT' ) {
                // textData.fill = "black";
                // textData.stroke = "black";
                text = new fabric.Text(item.val||'', textData);
            } else {
                text = new fabric.Text((Number.isInteger(val)?val:val.toFixed(2))  + " " + textData.unit, textData);
            }
            text.set('selectable', false);
            canvas_${id}.add(text);
            }

            // canvas.setActiveObject(text);
        });
    })


    };
    window.clearInterval(TimerCustom.getValue());
    loadData${id}();
    var index=setInterval(function(){
        loadData${id}();
    },1000);
    TimerCustom.setValue(index);
  function reqs(_type, _url, _data, _handler, _showProcess,async,error) {
        if ( _data!=null ){
            if ( typeof _data == 'object' ){
                _data = JSON.stringify(_data);
            }
        }
        $.ajax({
            type: _type,
            url: _url,
            contentType: "application/json", //必须有
            dataType: "json", //表示返回值类型，不必须
            data: _data,
            async:true,
            timeout:1000,
            beforeSend: function () {
                isLoaded = false;

            },
            complete: function (XHR, TS) {
                if ( XHR["status"] == 403 ){
                    window.location.reload(true);
                }
                isLoaded = true;

            },
            success: function (result) {
                (_handler || function () {})(result);
            },
            error:function (result) {
                (error || function () {})(result);
            }
        });
    }
    document.getElementById("${canvas_id}").parentElement.addEventListener('dblclick', function () {
        fullScreen(document.getElementById("${canvas_id}"));
    } ,false);  //监听鼠标双击
    function fullScreen(elem) {
        if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen ) {
            elem.mozRequestFullScreen();
        } else if (elem.requestFullScreen) {
            elem.requestFullscreen();
        } else {
            notice.notice_show("浏览器不支持全屏API或已被禁用", null, null, null, true, true);
        }
    }

    function exitFullScreen() {
        var elem = document;
        if (elem.webkitCancelFullScreen) {
            elem.webkitCancelFullScreen();
        } else if (elem.mozCancelFullScreen) {
            elem.mozCancelFullScreen();
        } else if (elem.cancelFullScreen) {
            elem.cancelFullScreen();
        } else if (elem.exitFullscreen) {
            elem.exitFullscreen();
        } else {
            notice.notice_show("浏览器不支持全屏API或已被禁用", null, null, null, true, true);
        }
    }


    $(function () {
        $("#history_${id}").linkbutton({iconCls: "fa fa-history",
                btnCls: "gui-btn-warm",
                onClick: function () {


                    layer.open({
                        type: 1,
                        title: '历史回放',
                        skin: 'layui-layer-rim', //加上边框
                        btn: ['开始回放', '取消'], //可以无限个按钮
                        area: ['420px', '220px'], //宽高
                        zIndex:100,
                        yes: function(index, layero){
                        //按钮【按钮一】的回调

                            timestamp = $('#dt1').datetimebox('getValue');

                            historyFlag${id} = true;

                            var startStr = $('#dt1').datetimebox('getValue');
                            var endStr = $('#dt2').datetimebox('getValue');


                            ${canvas_id}_cfg["start"] = new Date(startStr).getTime();
                            ${canvas_id}_cfg["end"] = new Date(endStr).getTime();


                            $("#history_${id}").linkbutton('disable');
                            $("#stop_${id}").linkbutton('enable');
                            layer.close(index);

                        },
                        content: '<style> .textbox-label {width: 120px !important;} </style>' +
                        '   <div style="padding: 20px"><input id="dt1" type="text" name="birthday"> <br> ' +
                        '   <input id="dt2" type="text" name="birthday"></div>',
                        success: function(layero, index){
                           var now =  new Date();
                            $('#dt2').datetimebox({
                                value: now.Format('yyyy-MM-dd hh:mm:ss'),
                                width: 320,
                                label: '开始回放时间:',
                                required: true
                            });
                            now.setSeconds(now.getSeconds() - 30);

                            $('#dt1').datetimebox({
                                value: now.Format('yyyy-MM-dd hh:mm:ss'),
                                width: 320,
                                label: '结束回放时间',
                                required: true
                            });
                        }
                    });
                }
        });

        $("#stop_${id}").linkbutton({iconCls: "fa fa-stop",
            btnCls: "gui-btn-warm",
            onClick: function () {
                timestamp = new Date().Format('yyyy-MM-dd hh:mm:ss');
                $("#history_${id}").linkbutton('enable');
                $("#stop_${id}").linkbutton('disable');
                historyFlag${id} = false;
            }
        });
    });

</script>