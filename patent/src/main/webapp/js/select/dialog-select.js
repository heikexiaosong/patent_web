/**
 * 对话框/提示框/确定框 chao.shu v1.0
 * 例子：Mvcbox.dialog({url:"menu/menudatalist",title:"abc",width:1050,height:600,context:''});
 */
window.Mvcbox = {};
Mvcbox.dlgWins = [];
(function(window) {
    function editor(fieldType) {
        var map = {
            ftInteger: 'numberbox',
            ftFloat: 'numberbox',
            ftBoolean: 'checkbox',
            ftDate: 'datebox'
        };
        return  map[fieldType] || "textbox";
    }
    var dlgWin = null, dlgWins = [];
    /*
     * 例: options {url:'',title:'',width:0,height:0,top:0,win:window, buttons : {
     * ok : { label: "确定", className: 'btn green', callback : 'dlgOk'
     * //自动调用页面的dlgOk方法 }, cancel :{ label : "取消", className:"btn default",
     * callback : 'dlgCancel' //自动调用页面的dlgCancel方法 } } }
     */
    Mvcbox.dialog = function(options) {
        // url,title,width,height,top,win,
        if (options.win == undefined || options.win == null) {
            options.win = window;
        }
        if (parent == window) {
            Mvcbox.pageTime = new Date().getTime();
            var dialog = new Mvcbox.Dialog();
            dialog.setSize(options.width, options.height);
            dialog.setUrl(options.url);
            dialog.setWindow(options.win);
            dialog.setTitle(options.title);
            dialog.setButtons(options.buttons);
            //区别查询还是填写数量
            dialog.show(options.polling);
            dlgWin = options.win;
            dlgWins.push(dialog);
        } else {
            parent.Mvcbox.dialog(options);
        }
    };
    Mvcbox.getParentWindow = function() {
        if (parent == window) {
            if (dlgWins.length > 0) {
                return dlgWins[dlgWins.length - 1];
            }
            return dlgWin;
        } else {
            return parent.Mvcbox.getParentWindow();
        }
    };
    Mvcbox.getArgs = function() {
        var dialog = Mvcbox.getParentWindow();
        return dialog.getWindow();
    };
    Mvcbox.dialogpop = function() {
        if (parent == window) {
            dlgWins.pop();
        } else {
            parent.Mvcbox.dialogpop();
        }
    };
    // 对话框类
    Mvcbox.Dialog = function() {
        var dlg_id = "mvc_dialog_" + Mvcbox.pageTime;
        var dlg_w =1100;
        var dlg_h = 560;
        var dlg_title = "";
        var dlg_url = "";
        var dlg_buttsons = null; // 按钮

        this.dlg_element = $("#" + dlg_id);
        this.dlg_win = null;
        this.setSize = function(width, height) {
            if (isNaN(width) == true) {
                width = 1050;
            }
            if (isNaN(height) == true) {
                height =600;
            }
            if (width < 100) {
                width = 100;
            }
            if (height < 100) {
                height = 100;
            }
            dlg_w = width;
            dlg_h = height;
            return this;
        };
        this.setTitle = function(argsTitle) {
            dlg_title = argsTitle;
            if (this.dlg_element.length > 0) {
                this.dlg_element.find("#" + id + "-title").html(title);
            }
            return this;
        };
        this.setUrl = function(argsUrl) {
            dlg_url =  argsUrl;
            return this;
        };
        // 参数设置通过windows获取页面值
        this.setWindow = function(argsWin) {
            this.dlg_win = argsWin;
            return this;
        };
        this.getWindow = function() {
            return this.dlg_win;
        };
        this.getElement = function() {
            return this.dlg_element;
        };
        this.setButtons=function (buttons) {
            dlg_buttsons = buttons;
        };
        this.show = function(parmas) {
            if (this.dlg_element.length == 0) {
                createDialog(parmas);
                this.dlg_element = $("#" + dlg_id);
            }
            try {
                //$(".modal-header").dragDiv(".modal-content"); // 拖拽div头部
            } catch (e) {
            }
        };
        function createDialog(parmas) {
            var content='<div class="accordion-menu-wl" style="height:98%;padding-top:10px;width: 200px; border-right: 1px solid #95b8e7;"></div>' +
                '<div class="" style="position: absolute;left: 220px;top: 36px"> ' +
                '<input class="txtQuery" />' +
                '</div>' +
                '<div style="position: absolute;top: 80px;left: 220px;height: 440px;width:400px"><h4 style="text-align: center;font-size: 12px">物料列表</h4>' +
                '<table class="list-left" style="height:100%;"></table></div>' +
                '<div style="position: absolute;top: 80px;left: 640px;height: 440px;width:380px"><h4 style="text-align: center;font-size: 12px">已选择物料</h4>' +
                '<table class="list-right" style="height:100%;"></table>' +
                '</div>';
            var options = {
                title:dlg_title ,
                content: content,
                width:dlg_w,
                height:dlg_h,
                onInit: function ($container) {
                    HTTP.post( dlg_url,{},function (result) {
                        var menus = result.data.records||[];
                        if ( menus.length == 0 ){
                            return;
                        }
                        menus= buildTree(result.data.records||[], "flid", "mc", "sjbm");
                        var columns=[[
                            {"title":"物料编码","index":1,"field":"wlid","width":120,halign:'center'},
                            {"title":"物料名称","index":2,"field":"mc","width":160,halign:'center'},
                            {"title":"规格","index":3,"field":"gg","width":80,align:'right',halign:'center'},
                            {"title":"材质","index":4,"field":"cz","width":120,align:'right',halign:'center'}
                        ]];
                        $container.find('.list-left').datagrid({
                            columns:columns,
                            rownumbers:true,
                            onDblClickRow:function (rowIndex,rowData) {
                                var rows=  $container.find('.list-right').datagrid('getRows');
                                var array=[];
                                if(rows&&rows.length>0){
                                        $.each(rows,function (i,item) {
                                            array.push(item['wlid']);
                                        });
                                    if(array.indexOf(rowData['wlid'])==-1){
                                        $container.find('.list-right').edatagrid('appendRow',rowData);
                                    }else{
                                        layer.alert('物料已存在，请勿重复添加')
                                    }
                                }else{
                                    $container.find('.list-right').edatagrid('appendRow',rowData);
                                }

                        }
                        });
                        $container.find('.accordion-menu-wl').tree({
                            data:menus,
                            lines:false,
                            onClick: function(node){
                                   HTTP.post('jcsj/wlxx/query', {wlflid:node.id}, function (result) {
                                       $container.find('.list-left').datagrid('loadData',result['data']['records']);

                                   });
                            }
                        });
                        var columns2=[[
                            {"title":"物料编码","index":1,"field":"wlid","width":120,halign:'center'},
                            {"title":"物料名称","index":2,"field":"mc","width":160,halign:'center'},
                            {"title":"数量","index":3,"field":"num","width":60,halign:'center',editor:{  type:'numberspinner',
                            options: {precision:3,min:0} }},
                            {field:'operate',title:'操作',width:60,align:'center', formatter:function(value,row,index){
                                    return '<button class="layui-btn layui-btn-xs operate-btn" data-toggle="'+$container.find('.list-right')+'" onclick="RemoveEmpowerment(event,this)">删除</button>';
                                }}
                        ]];
                        $container.find('.list-right').edatagrid({
                            columns:columns2,
                            autoSave:true,
                        });
                    });
                    //search
                    var $dg =$container.find(".list-left");
                    $container.find('.txtQuery').searchbox({
                        width:800,
                        height:30,
                        prompt: '请输入关键字查询',
                        searcher: function (value) {
                          $dg.datagrid('search' ,value);
                        }
                    });
                }

            };
            var dialog = Dialog.buildDialog(options);
            // 注册 对话框 确定按钮 事件
            dialog.regResultHandler(
                function (dlgContainer) {
                    var $div = dlgContainer.find(".list-right");
                    // var getSeletcions = $div.datagrid('getChecked');
                    var getSeletcions = $div.edatagrid('getRows');
                    var selectData=[];
                    if(getSeletcions){
                            $.each(getSeletcions,function (i,item) {
                                $div.edatagrid('endEdit',i);

                               /* if(item['num']&&item['num'] !='' &&item['num']!= 0){
                                    selectData.push(item);
                                }*/
                                selectData.push(item);
                            });
                            var $content= $('<table style="width: 100%;max-width: 400px;text-align: center;margin-top: 10px;"></table>');
                            var $th =$('<tr style="border-bottom: 1px solid lightgrey;height: 32px"><th>名称</th><th>计量单位</th><th>数量</th></tr>');
                            $content.append($th);
                            $.each(selectData,function (i, data) {
                                $content.append($('<tr style="border-bottom: 1px solid #efdfdf;height: 32px"><td>'+data['mc']+'</td><td>'+data['jldwmc']+'</td><td>'+data['num']+'</td></tr>'))
                            });
                            var options = {
                                title:'已选择物料' ,
                                content: $content,
                                width:300,
                                height:600,
                                onInit: function ($container) {
                                }
                            };
                            var dialogList = Dialog.buildDialog(options);
                            dialogList.regResultHandler(
                                function (dlgContainer) {
                                    dlg_buttsons.ok.callback(selectData);
                                    dialog.close();
                                }
                            );
                            dialogList.regcancelHander(
                                function (dlgContainer) {
                                }
                            );
                            return false;
                            dialogList.show();
                    }
                }
            );
            dialog.show();

        }
        function buildTree(records, id, name, pid) {
            var treeData = [], hash = {} ,datas = [];
            $.each(records||[], function (i, record) {
                var data = {
                    id: record[id],
                    text: record[name],
                    pid: record[pid],
                    data: record,
                    children: []
                };
                datas.push(data);
                hash[data["id"]] = data;
            });

            $.each(datas, function (i, data) {
                var hashVP = hash[data["pid"]];
                if (hashVP) {
                    !hashVP["children"] && (hashVP["children"] = []);
                    hashVP["children"].push(data);
                } else {
                    treeData.push(data);
                }
            });

            return treeData;
        }

    };

})(window);
function RemoveEmpowerment(event,obj) {
    event.stopPropagation();
    return false;
}
