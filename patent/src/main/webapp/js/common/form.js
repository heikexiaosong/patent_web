function SingleTableForm(options, $container) {
    if ( $container==null || $container[0]==null ){
        this.container = $('<div />');
    } else {
        this.container = $container;
    }
    this.el = '<div class="easyui-dialog" data-options="resizable:true, maximizable: true, modal:true,closed:true,iconCls:\'icon-save\'" style="width:500px;height:200px;padding:10px;">' +
              '    <form class="singleTableForm" method="post" />' +
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
        onBuildForm: function (singleTableForm, data, _clean, _flag, params) {
            var fieldTable = $('<table class="formTable" cellpadding="5" />');
            fieldTable.appendTo(singleTableForm);
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
                    if(value!=undefined||value!=null){
                        inputVector.add(ControlBuilder.buildTD(field, value));
                    }else {
                        inputVector.add(ControlBuilder.buildTD(field, ''));
                    }

                } else {
                    if(value!=undefined||value!=null){
                        hidenInputVector.add(ControlBuilder.buildHidenInput(field, value));
                    }else{
                        hidenInputVector.add(ControlBuilder.buildHidenInput(field, ''));
                    }
                }
            });
            var hidenInputs = hidenInputVector.array();
            for (var i=0; i<hidenInputs.length; i++ ){
                singleTableForm.append(hidenInputs[i]);
            }
            var columnNum = 1;
            if ( inputVector.size() < 5 ){
                columnNum = 1;
            } else if ( inputVector.size() < 15 ) {
                columnNum = 2;
            } else {
                columnNum = 3;
            }
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
                var input = '<input class="easyui-textbox" name="bz" data-options="multiline: true" style="width:100%; height: 56px" value="' + _bzValue + '">';
                tr.append($("<td  style='text-align:right; padding-right: 5px;'>" + bzfield["caption"] + ":</td><td colspan='" + (1 + columnNum*2)  + "' style='padding: 5px 20px 5px 5px;'>" + input + "</td></tr>"));
                fieldTable.append(tr);
                bzHeight = 80;
            }

            $.parser.parse(singleTableForm);

            if ( !isNaN(_clean) && _clean==true ){
                singleTableForm.form('clear');
            }

            var ctlInitFunc = this.onCtrlInit;
            var pageCtrl = singleTableForm.find(".page-ctrl");
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

                ctlInitFunc.call(singleTableForm, $(ctrl), field, _value, _flag=='I', _data);
            });

            var rowNum = parseInt((inputs.length+1)/columnNum);
            if ( columnNum==1 ){
                rowNum = inputs.length;
            }

            return {row: rowNum, column: columnNum, extendHeight: bzHeight};
        }
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
        event.data.ref.options.onCancel.call(event.data.ref, event.data)
        event.data.win.find(".cancelBtn").show();
    });
    $.parser.parse(this.container);
}

SingleTableForm.prototype.collectData =function () {

    var _master = DataBind.collectData(this.$el.find(".singleTableForm"));
    var _details = [];

    var $dg =  this.$el.find(".detail-view");
    if($dg.length>0){
        _details.push({
            id: $dg.data("tblname"),
            records: $dg.datagrid("getData")["rows"]||[]
        });
    }

    return {
        master: _master,
        details: _details
    };
};

SingleTableForm.prototype.build =function (result, _flag, _title, _clean,  params){
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

    var singleTableForm = this.$el.find(".singleTableForm");
    singleTableForm.html("");

    var params = this.options["onBuildForm"](singleTableForm, result["data"]||{}, _clean, _flag, params);

    singleTableForm.append('<input type="hidden" name="flag" value="' + _flag + '">');

    this.$el.window('resize', {width: 320*params["column"] + 22, height: params["row"]*32 + (params["extendHeight"]||0) + 100});
    this.$el.window('center');
    this.$el.window('open');
};

