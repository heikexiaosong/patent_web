(function (window, $) {

    var _comboBox = {};
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

    _comboBox.init = function (_id, _options, useCuruser) {
        var _default = {
            url: null,
            params: {},
            valueFiled: 'value',
            textFiled: 'text',
           /* width:200,*/
            height:24,
            panelHeight: 220,
            editable: 1,
            showValue:false,
            disabled: false,
            onSelect: function (selectedItem) {

            },
            onChange: function (b, c) {
            }
        };

        var options = $.extend(_default, _options);
        var comboBoxObj = findJQObj(_id);
        comboBoxObj.removeClass("easyui-textbox");
        var data=[];
        if( comboBoxObj && options["url"]){
            HTTP.post(options["url"], options["params"], function (result) {
                comboBoxObj.empty();
                if(result['success']){
                    if(result['data']&&result['data']['records']){
                        if(options['allowNull']==true){
                            data.push({
                                value:'',
                                text:'',
                                data: {}
                            });
                        }
                        if(options['showValue']){
                            $.each(result['data']['records'],function (i,item) {
                                data.push({
                                    value:item[options['valueField']],
                                    text:item[options['valueField']]+':'+item[options['textField']],
                                    data:item
                                })
                            });
                        }else{
                            $.each(result['data']['records'],function (i,item) {
                                data.push({
                                    value:item[options['valueField']],
                                    text:item[options['textField']],
                                    data:item
                                })
                            });
                        }

                        if(data&&data.length>0){
                            if(options['defaultValue']){
                                $.each(data,function (i,item) {
                                    if(item.value==options['defaultValue']){
                                        item['selected']=!0;
                                        return false;
                                    }
                                });
                            }else{
                                data[0]['selected']=!0;
                            }
                        }

                    }
                }
            });
        }else if(comboBoxObj&&options["data"]){
            data=options['data'];
        }
        comboBoxObj.iCombobox({
            textField: "text",
            valueField: "value",
            data: data,
            height:24,
            /* value:_selectValue,*/
            width:options['width'],
            panelHeight: 220,
            editable: 1,
            disabled:options['disabled'],
            onSelect: options["onSelected"],
            onChange: function (b, c) {
                debugger;
                if(options["onChanged"] && b){
                    var data=$(this).combobox('getData');
                    $.each( data,function (i,item) {
                        if(item['value']==b){
                            options["onChanged"](item, b);
                            return false;
                        }
                    });
                }
            }
        });
        return comboBoxObj;

    };

    window.ComboboBox = window.ComboboBox || _comboBox;

})(window, jQuery);