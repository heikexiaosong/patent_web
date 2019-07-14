
function MasterSlaveForm(options, $container) {
    if ( $container==null || $container[0]==null ){
        this.container = $('<div />');
    } else {
        this.container = $container;
    }
    this.el = '<div class="easyui-dialog" data-options="modal:true,closed:true,iconCls:\'icon-save\'" style="width:500px;">' +
        '    <form class="masterSlaveForm" method="post" />' +
        '    <div class="detail-view" style="height: 276px;"></div>' +
        '    <div style="text-align:center;" class="dialog-button messager-button dialog-button-custom"> ' +
        '        <a href="#" class="easyui-linkbutton okBtn"><span style="color: #12689a;">确定</span></a>' +
        '        <a href="#" class="easyui-linkbutton cancelBtn">取消</a> ' +
        '   </div>' +
        '</div>';
    this.$el = $(this.el);
    this.container.append(this.$el);

    var DEFAULT_OPTIONS = {
        onAdd: function (params) {
            console.log("Invoke onOk func.");
        },
        onUpdate: function (params) {
            console.log("Invoke onOk func.");
        },
        onCancel: function (params) {
            this.$el.window('close');
        },
        onCtrlInit: function ($ctl, _fieldmeta, _Value, _isNew, _data) {
        },
        onBuildForm: function (masterSlaveForm, data, _clean, _flag, params,cols) {
            var fieldTable = $('<table class="formTable" cellpadding="5" />');
            fieldTable.appendTo(masterSlaveForm);
            var inputVector = new Vector();
            var hidenInputVector = new Vector();
            var bzfield = null;
            var _fields = data.fields||[];
            var _data = data.records||{};
            $.each(_fields, function (i, field) {
                var fieldName = field["name"];
                if ( fieldName  == 'bz' ){
                    bzfield = field;
                    return;
                }
                var value = "";
                if ( _data!=null && _data[fieldName]!=null ){
                    value = _data[fieldName];
                }
                if ( field["showEdit"]  == true ){
                    inputVector.add(ControlBuilder.buildTD(field, value||""));
                } else {
                    hidenInputVector.add(ControlBuilder.buildHidenInput(field, value||""));
                }

            });
            var hidenInputs = hidenInputVector.array();
            for (var i=0; i<hidenInputs.length; i++ ){
                masterSlaveForm.append(hidenInputs[i]);
            }
            var columnNum = cols||3;
            var inputs = inputVector.array();
            for (var i=0; i<inputs.length; i=i+columnNum ){
                var tr = $("<tr />");
                for (var j=0; j<columnNum && (i+j)<inputs.length; j++){
                    tr.append(inputs[i+j]);
                }
                fieldTable.append(tr);
            }

            var bzHeight = 0;
            if ( bzfield!=null ){
                var tr = $("<tr />");
                var _bzValue = (_data==null?"":_data["bz"]);
                var input = '<input class="easyui-textbox" name="bz" data-options="multiline: true" style="width:100%; height:28px" value="' + _bzValue + '">';
                tr.append($("<td  style='text-align:right; padding-right: 5px;'>" + bzfield["caption"] + ":</td><td colspan='" + (1 + columnNum*2)  + "' style='padding: 5px 20px 5px 5px;'>" + input + "</td></tr>"));
                fieldTable.append(tr);
                bzHeight = 80;
            }

            $.parser.parse(masterSlaveForm);

            if ( !isNaN(_clean) && _clean==true ){
                masterSlaveForm.form('clear');
            }

            var ctlInitFunc = this.onCtrlInit;
            var pageCtrl = masterSlaveForm.find(".page-ctrl");
            $.each(pageCtrl, function (index, ctrl) {
                var field = $(ctrl).data("field");
                var showEdit = field['showEdit'];
                if ( showEdit==false ){
                    return;
                }
                var _value = $(ctrl).data("default");

                // 时间 日期 格式 赋初始值
                if ( field["fieldType"]=='ftDate' && _value!=null ){
                    var date = new Date(_value)
                    if ( _flag=='I' ){
                        date = new Date();
                    }
                    if ( date!=null ){
                        if ( field["controlType"]=='date' ){
                            $(ctrl).datebox('setValue', date.Format("yyyy-MM-dd"));
                        } else {
                            $(ctrl).datetimebox('setValue', date.Format("yyyy-MM-dd hh:mm:ss"));
                        }
                    }
                }

                ctlInitFunc.call(masterSlaveForm, $(ctrl), field, _value, _flag=='I', _data);
            });

            var rowNum = parseInt((inputs.length+1)/columnNum);
            if ( columnNum==1 ){
                rowNum = inputs.length;
            }
            return {row: rowNum, column: columnNum, extendHeight: bzHeight};
        },
    };
    this.options = $.extend({}, DEFAULT_OPTIONS, options);

    this.$el.find(".okBtn").bind("click", {ref: this, win: this.$el, options: this.options}, function (event) {
        if ( event.data.ref.flag == "U" ){
            event.data.ref.options.onUpdate.call(event.data.ref, event.data);
        } else {
            event.data.ref.options.onAdd.call(event.data.ref, event.data);
        }
        event.data.win.find(".okBtn").show();
    });
    this.$el.find(".cancelBtn").bind("click", {ref: this, win: this.$el}, function (event) {
        event.data.ref.options.onCancel.call(event.data.ref, event.data);
        event.data.win.find(".cancelBtn").show();
    });

    $.parser.parse(this.container);
}

MasterSlaveForm.prototype.collectData =function () {
    var _master = DataBind.collectData(this.$el.find(".masterSlaveForm"));
    var _details = [];
    var detailView = this.$el.find(".detail-view").children();
    $.each(detailView.data("details")||[],  function (i, $dg) {
        var _module = $dg.data("module");
        var data=$dg.datagrid("getData")["rows"];
        $.each(detailView.data("mxData"),function (i,item) {
            data.push(item);
        });

        if ( _module["tblname"] ) {
            _details.push({
                id: _module["tblname"],
                records: data||[]
            });
        }
    });

    return {
        master: _master,
        details: _details
    };
};

MasterSlaveForm.prototype.getMasterFields =function (field) {
    return this.$el.find("." + field)
};

MasterSlaveForm.prototype.build =function (result, _flag, _title, _clean,  params, _condition){
    var _fields = result.data.fields;
    if ( _fields==null || _fields.length==0 ){
        return;
    }
    if ( _title!=null ){
        this.$el.window("setTitle", _title);
    }
    this.flag = _flag;

    if ( _flag == 'View' ) {
        this.$el.parent().find(".okBtn").hide();
    } else {
        this.$el.parent().find(".okBtn").show();
    }

    var masterSlaveForm = this.$el.find(".masterSlaveForm");
    masterSlaveForm.html("");
    var params = this.options["onBuildForm"](masterSlaveForm, result["data"]||{}, _clean, _flag, params);
    masterSlaveForm.append('<input type="hidden" name="flag" value="' + _flag + '">');
    this.masterSlaveForm = masterSlaveForm;

    this.$el.find(".detail-view").html("");
    var detailView = $("<div />").appendTo(this.$el.find(".detail-view"));
    detailView.html("");
    detailView.tabs({});

    var _that = this;
   $.each(this.options["detailsModule"], function (i, detail) {
       detailView.tabs('add',{
           title: this["title"],
           closable:true
       });
       var wlid =this['wlid'];
       var sl =this['sl'];
       detailView.data("details", []);
       detailView.data("mxData", []);

       var $dg = $("<div style='width: 100%; height: 242px'/>").appendTo(detailView.tabs('getTab', i));
       $dg.data("module", this);
       var url = this["module"] + "/query";
        DataTable.datagrid($dg,
            {   url:  url,
                params: _condition,
                pageList: [10, 15, 20, 30, 50, 100, 200],
                pageSize:20,
                pagination:true,
                toolbar: [{
                    iconCls: 'icon-add',
                    handler: function () {
                        Mvcbox.dialog({
                            url:'jcsj/wlfl/query',
                            title:"选择物料",
                            width:1050,
                            height:600,
                            buttons:{
                                ok : {
                                    label : "保存",
                                    callback : function (data) {
                                        $.each(data,function (i,item) {
                                            var temp= item['wlid']||'';
                                            var num = item['num']||0;
                                            for(var a in item) {
                                                if (a == 'wlid') {
                                                    delete(item[a]);
                                                }
                                                if(a =='num'){
                                                    delete(item[a]);
                                                }
                                            }
                                            if(wlid){
                                                item[wlid] =temp;
                                            }
                                            if(sl){
                                                item[sl] =parseInt(num);
                                            }
                                            item["new"] = true;
                                            detail[""]||(item);
                                            if ( detail["onChanged"]!=null ){
                                                detail["onChanged"].bind(_that)($dg, "append", item);
                                            }
                                            $dg.datagrid('appendRow',item);
                                        });
                                    }
                                },
                                cancel :{
                                    label : "关闭"
                                }
                            }
                        });
                    }
                },'-',{
                    iconCls: 'icon-cut',
                    handler: function(){
                        $.messager.confirm('警告', '是否要删除该数据？', function(r){
                            if (r){
                                var  aa =[];
                                var cols = $dg.datagrid('getRows');
                                var delIndex=$dg.datagrid('getSelectedCells')[0]['index'];
                                $.each(cols,function (i,col) {
                                    if( i==delIndex){
                                        if(  cols[i]["new"]!=null &&  cols[i]["new"]  ){

                                        } else {
                                            cols[i]['flag'] = 'D';
                                            aa.push(col);
                                        }
                                    }
                                });
                                detailView.data("mxData", aa);
                                $dg.datagrid('deleteRow', delIndex);
                                if ( detail["onChanged"]!=null ){
                                    detail["onChanged"].bind(_that)($dg, "delete");
                                }
                                // $dg.datagrid('hideRow',delIndex);
                            }
                        });
                    }
                }],
                clickToEdit: false,
                dblclickToEdit: true,
                onAfterEdit: function (index,row,changes) {
                    /**
                     * Fires after the user finishes editing, the parameters contains:
                     index: the editing row index, start with 0
                     row: the record corresponding to the editing row
                     changes: the changed field/value pairs
                     */
                    if ( detail["onChanged"]!=null ){
                        detail["onChanged"].bind(_that)($dg, "edit", row, changes,index);
                    }
                },
            });

       if(this["toolbar"]&&this["toolbar"] == 'cut'){
           $dg.datagrid({
               toolbar: [{
               iconCls: 'icon-cut',
               handler: function(){
                   $.messager.confirm('警告', '是否要删除该数据？', function(r){
                       if (r){
                           var  aa =[];
                           var cols = $dg.datagrid('getRows');
                           var delIndex=$dg.datagrid('getSelectedCells')[0]['index'];
                           $.each(cols,function (i,col) {
                               if( i==delIndex){
                                   if(  cols[i]["new"]!=null &&  cols[i]["new"]  ){

                                   } else {
                                       cols[i]['flag'] = 'D';
                                       aa.push(col);
                                   }
                               }
                           });
                           detailView.data("mxData", aa);
                           $dg.datagrid('deleteRow', delIndex);
                           if ( detail["onChanged"]!=null ){
                               detail["onChanged"].bind(_that)($dg, "delete");
                           }
                           // $dg.datagrid('hideRow',delIndex);
                       }
                   });
               }
           }]})
       };
       if(this["hiddenColumns"]&&this["hiddenColumns"].length>0){
         $.each(this["hiddenColumns"],function (i,column) {
             $dg.datagrid("hideColumn",column);
         })
       };
       $dg.datagrid('enableCellEditing').datagrid('gotoCell', {
           index: 0,
           field: 'lxmc'
       });
       detailView.data("details").push($dg);
   });
    this.$el.window('resize', {width: 320*params["column"] + 22, height: params["row"]*34 + (params["extendHeight"]||0) + 330});
    this.$el.window('center');
    this.$el.window('open');
};

