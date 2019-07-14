if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($, window, undefined) {
    'use strict';

    var _builder = {

        buildHidenInput: function (field, value) {
            var _name = field["name"];
            return $('<input type="hidden" name="' + _name  + '" value="' +  value  +'">');
        },

        buildTD: function(field, value, _colspan, _row) {
            var _colspan = _colspan||1;
            var colspan = _colspan*2-1;

            var _row = _row||1;

            var name = field["name"];
            var input = ControlBuilder.buildInputCtrl(name, value, _colspan*154, _row*32);

            if ( field['fieldType']!=null && field.fieldType=='ftDate' ) {
                if ( field['controlType']!=null && field.controlType=='date' ){
                    input = ControlBuilder.buildDateCtrl(name, value);
                } else {
                    input = ControlBuilder.buildDateTimeCtrl(name, value);
                }
            }
            if(field['controlType']!=null&& field.controlType== 'TextArea'){
                input = ControlBuilder.buildInputCtrl(name, value, _colspan*154, _row*96,true);
            }

            if ( field['controlType']!=null && ( field.controlType=='RichText' || field.controlType=='memo' ) ){
                input = ControlBuilder.buildRichTextCtrl(name, value, _colspan*154, _row*32);
            }

            if ( field['controlType']!=null && field.controlType=='checkbox' ){
                input = ControlBuilder.buildCheckBoxCtrl(name, value, _colspan*154, _row*32);
            }

            var $td =  $("<td style='text-align:right; width: 110px; padding-right: 5px;'>" + field["caption"] + ":</td><td colspan='" + colspan + "' class='ctrl-td' style='padding: 5px 20px 5px 5px;'>" + input + "</td></tr>");
            if(!field['name']){
                $td =  $("<td style='text-align:right; width: 110px; padding-right: 5px;'></td><td colspan='" + colspan + "' class='ctrl-td' style='padding: 5px 20px 5px 5px;'></td></tr>");
            }

            var $input = $td.find(".page-ctrl");
            $input.data('field', field);
            $input.data('default', value);
            return $td;
        },

        //
        buildInputCtrl: function (name, value, width, height,multiline) {
            var style = "";
            if ( width!=null && width!='' ){
                style = style + "width: " + width + "px;";
            }
            if ( height!=null && height!='' ){
                style = style + "height: " + height + "px;";
            }
            if(multiline){
                return '<input class="easyui-textbox page-ctrl ' + name + '"  data-options="multiline:true" style="' + style + '" type="text" name="' + name  + '" value="' +  value  +'">';
            } else{
                return '<input class="easyui-textbox page-ctrl ' + name + '"  style="' + style + '" type="text" name="' + name  + '" value="' +  value  +'">';
            }

        },

        //  日期空间
        buildDateCtrl: function (name, value) {
            return '<input class="easyui-datebox page-ctrl ' + name + '" type="text" name="' + name  + '">';
        },

        // 时间控件
        buildDateTimeCtrl: function buildDateTimeCtrl(name, value) {
            return '<input class="easyui-datetimebox page-ctrl ' + name +'" type="text" name="' + name  + '">';
        },

        // 勾选框控件
        buildCheckBoxCtrl: function buildCheckBoxCtrl(name, value) {
            var checked = "";
            if ( value && value==='Y' ){
                checked = 'checked="checked"';
            }
            return '<div class="datagrid-header-check"><input type="checkbox" ' + checked + ' class="page-ctrl ' + name +'" name="' + name  + '" ></div> ';
        },

        //文本域

        // 富文本框
        buildRichTextCtrl: function buildDateTimeCtrl(name, value, width, height) {
            // var style = "";
            // if ( width!=null && width!='' ){
            //     style = "width: " + width + "px;";
            // }
            // if ( height!=null && height!='' ){
            //     style = style + "height: " + height + "px;";
            // }
        return '<input class="easyui-textbox page-ctrl ' + name + '"  data-options="multiline: true, width: ' + width + ', height: ' + height + '" name="' + name  + '" />';
    }

    };

    window.ControlBuilder = window.ControlBuilder || _builder;

}(jQuery, window));