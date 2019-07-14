if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($, window, undefined) {
    'use strict';

    var _formBuilder = {

        buildFormHtml: function (opts) {

            var options = {
                method: 'post',
                enctype: 'application/x-www-form-urlencoded'
            };
            var options = $.extend(options, opts);

            var _contentHtml = '<form  method="' + options['method'] + '"  enctype="' + options['enctype']  + '" style="padding: 20px 60px 0px">';
            if ( opts["elements"] ){
                var _elements = options["elements"];
                $.each(_elements, function (i, element) {
                    var _element = $.extend({name: '', value: '', desc: '', readonly: false, type: 'text' ,multiline: false} , element);
                    if ( _element['hidden'] && _element['hidden']==true ){
                        _contentHtml = _contentHtml + '<input type="hidden" name="' + _element["name"] + '" value="' + _element["value"] +'">';
                        return;
                    }
                    if ( _element['type'] && _element['type']=='file' ){
                        _contentHtml = _contentHtml + '<div style="margin-bottom:20px"><input class="easyui-' + _element['type'] + 'box" name="' + _element["name"] + '" label="' + _element["desc"] + ':" labelPosition="before" data-options="prompt:\'选择上传文件...\'" style="width:100%"></div>';
                    } else {
                    	var dataopts = "";
                    	var styleOpts = "";
                    	if (  _element["multiline"]==true  ) {
                    		dataopts = 'multiline: true,';
                    		styleOpts = "height:100px;";
                    	}
                    	
                        if (  _element["readonly"]==true ){
                            _contentHtml = _contentHtml + '<div style="margin-bottom:20px"><input name="' + _element["name"] + '" class="easyui-' + _element['type'] + 'box" data-options="' + dataopts + 'label:\'' + _element["desc"] + ':\'" style="width:95%; ' + styleOpts +'" value="' + _element["value"] +'" readonly="readonly"></div>';
                        } else {
                            _contentHtml = _contentHtml + '<div style="margin-bottom:20px"><input name="' + _element["name"] + '" class="easyui-' + _element['type'] + 'box" data-options="'  + dataopts + 'label:\'' + _element["desc"] + ':\'" style="width:95%;' + styleOpts +'" value="' + _element["value"] +'"></div>';
                        }
                    }

                })
            }
            _contentHtml += '</form>';
            return _contentHtml;
        }

    };

    window.FormBuilder = window.FormBuilder || _formBuilder;

}(jQuery, window));