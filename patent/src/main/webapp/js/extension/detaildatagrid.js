if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($) {
    'use strict';

    var TOOLBAR = {
        createNormalToolbar: function(jq){
            var _toolbar = [];
            var _item0 = {
                iconCls: 'icon-add',
                text: '新增',
                handler: function () {
                    var createRecord = this.datagrid('options').createRecord;
                    createRecord(this);
                }.bind(jq)
            };
            _toolbar[0] = _item0;
            _toolbar[1] = '-';
            var _item2 = {
                iconCls: 'icon-edit',
                text: '编辑',
                handler: function () {
                    var row = this.datagrid('getSelected');
                    if( row==null ){
                        return
                    }
                    var index = this.datagrid('getRowIndex' ,row);
                    if ( index==null ){
                        return
                    }

                    var options = this.datagrid('options');
                    var datas = this.datagrid('getData');
                    var _options = $.extend({}, options, {toolbar: options.editmodeToolbar, data: datas, editIndex: index});
                    this.datagrid(_options);

                    this.datagrid('selectRow', index).datagrid('beginEdit', index);
                    var eds = this.datagrid('getEditors', index);
                    if (eds){
                        for (var i=0; i<eds.length; i++ ){
                            var ed = eds[i];
                            if (ed){
                                ($(ed.target).data('textbox') ? $(ed.target).textbox('textbox') : $(ed.target)).focus();
                                break;
                            }
                        }
                    }

                }.bind(jq)
            };
            _toolbar[2] = _item2;
            _toolbar[3] = '-';
            var _item4 = {
                iconCls: 'icon-remove',
                text: '删除',
                handler: function () {
                    var row = this.datagrid('getSelected');
                    var index = this.datagrid('getRowIndex' ,row);
                    if ( index!=null ){
                        this.datagrid('deleteRow', index);
                        var totalRowIndex = this.datagrid('getRows').length-1;
                        if ( index>=totalRowIndex ) {
                            this.datagrid('selectRow', totalRowIndex)
                        } else {
                            this.datagrid('selectRow', index)
                        }
                    }
                }.bind(jq)
            };
            _toolbar[4] = _item4;

            return _toolbar;
        },

        createEditModeToolbar: function(jq){
            var _toolbar = [];

            _toolbar[0] = '-';
            var _item1 = {
                iconCls: 'icon-save',
                text: '确定',
                handler: function () {
                    var options = this.datagrid('options');
                    this.datagrid('acceptChanges');
                    var selectedIndex = options["editIndex"];
                    options["editIndex"] = undefined;
                    var _options = $.extend({}, options, {toolbar: options.normalToolbar});
                    this.datagrid(_options);
                    this.datagrid('selectRow', selectedIndex);
                }.bind(jq)
            };
            _toolbar[1] = _item1;
            _toolbar[2] = '-';
            var _item3 = {
                iconCls: 'icon-undo',
                text: '取消',
                handler: function () {
                    var options = this.datagrid('options');
                    this.datagrid('rejectChanges');
                    var selectedIndex = options["editIndex"];
                    options["editIndex"] = undefined;
                    var _options = $.extend({}, options, {toolbar: options.normalToolbar, editIndex: undefined});
                    this.datagrid(_options);
                    this.datagrid('selectRow', selectedIndex);
                }.bind(jq)
            };
            _toolbar[3] = _item3;
            _toolbar[4] = '-';

            return _toolbar;
        }
    };

    $.extend($.fn.datagrid.methods, {
        createRecord: function (jq, newRecord) {
            var that = $(jq);
            that.datagrid('appendRow', $.extend({}, that.datagrid('options')["record"], newRecord));
            var addRowIndex = that.datagrid('getRows').length-1;

            var options = that.datagrid('options');
            var datas = that.datagrid('getData');
            var _options = $.extend({}, options, {toolbar: options.editmodeToolbar, data: datas, editIndex: addRowIndex});
            that.datagrid(_options);

            that.datagrid('selectRow', addRowIndex).datagrid('beginEdit', addRowIndex);
            var eds = that.datagrid('getEditors', addRowIndex);
            if (eds){
                for (var i=0; i<eds.length; i++ ){
                    var ed = eds[i];
                    if (ed){
                        ($(ed.target).data('textbox') ? $(ed.target).textbox('textbox') : $(ed.target)).focus();
                        break;
                    }
                }
            }

        },

        loadDatas: function (jq, param) {
            var _handler = function (result) {
                var _that = this;
                var fields = result.data.fields;
                var vector = new Vector();
                var record = {flag: "I"};
                _that.datagrid('options')["record"] = record;
                if ( fields !=null && fields.length>0 ){
                    vector.add({field: 'id', checkbox: 'true'});
                    $.each(fields, function (i, field) {
                        record[field["name"]] = "0";
                        if ( field["showlist"]!=null && field["showlist"]==true ) {
                            vector.add({
                                field: field["name"],
                                title: field["caption"],
                                index: field["index"],
                                editor:'textbox'
                            });
                        }
                    });
                }
                _that.datagrid({columns: [vector.sort("index")]});
                //_that.datagrid('loadData', result.data.records);
                _that.datagrid('clientPaging', {data: result.data.records});
                _that.datagrid('doCellTip',{cls:{},delay:500});

            }.bind($(jq));
            HTTP.post(param["url"], JSON.stringify(param), _handler);

        }

    });

    $.parser.plugins.push("detaildatagrid");           //注册组件

    $.fn.detaildatagrid = function (_options, _param) {  //定义组件

        //当options为字符串时，说明执行的是该插件的方法。
        if (typeof _options == "string") { return $.fn.datagrid.apply(this, arguments); }

        //当该组件在一个页面出现多次时，this是一个集合，故需要通过each遍历。
        return this.each(function () {
            var jq = $(this);

            //把配置对象myopts放到$.fn.combobox这个函数中执行。
            var _customOpts = $.extend(true, {
                singleSelect: true,

                toolbar: TOOLBAR.createNormalToolbar(jq),
                normalToolbar: TOOLBAR.createNormalToolbar(jq),
                editmodeToolbar: TOOLBAR.createEditModeToolbar(jq),
                editIndex: undefined,

                onClickRow: function (index, row) {
                    console.log(index + ": onClickRow");
                    var editIndex =  this.datagrid("options").editIndex;
                    if ( editIndex!=null ){
                        this.datagrid('selectRow', editIndex);
                    }
                }.bind(jq),
                onDblClickRow: function (index, row) {
                    console.log(index + ": onDblClickRow");
                    var editIndex =  this.datagrid("options").editIndex;
                    if ( editIndex!=null ){
                        this.datagrid('selectRow', editIndex);
                    }
                }.bind(jq),
                createRecord: function (jq) {}
            }, _options);
            $.fn.datagrid.call(jq, _customOpts);
        });
    };



    $.fn.datebox.defaults.cleanText = '清空';
    var buttons = $.extend([], $.fn.datebox.defaults.buttons);
    buttons.splice(1, 0, {
        text: function (target) {
            return $(target).datebox("options").cleanText
        },
        handler: function (target) {
            $(target).datebox("setValue", "");
            $(target).datebox("hidePanel");
        }
    });
    $.extend($.fn.datebox.defaults, {
        buttons: buttons
    });

}(jQuery));