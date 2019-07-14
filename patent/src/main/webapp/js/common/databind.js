(function (window, $) {

    var _binding = {};

    function findFrom(_from) {
        if ( _from == null ){
            return null;
        }

        if ( typeof _from == "string" ){
            return $("#" + _from);
        }


        if ( _from instanceof jQuery ){
            return _from;
        }
    }

    function attrFillIn(_ctrl, _data) {

        if ( _ctrl==null || _data==null ){
            return ;
        }

        _ctrl.val(_data);
    }

    _binding.fillIn = function (_form, _data) {

        var formcontrol = findFrom(_form);
        if ( formcontrol==null || _data==null ) {
            return ;
        }

        if (_data) {
            for( var attr in _data ) {

                if ( _data[attr]==null ) {
                    continue;
                }

                var control = formcontrol.find("[name='" + attr + "']");
                if ( control==null ){
                    continue;
                }

                attrFillIn(control, _data[attr]);
            }
        }

    };

    _binding.collectData = function(_form){
        var formcontrol = findFrom(_form);
        if ( formcontrol==null) {
            return {};
        }

        var _returnData = {};

        var ctrls = formcontrol.find("[name]");
        $.each(ctrls, function (i, ctrl) {
            var name = $(ctrl).attr("name");
            var value = $(ctrl).val();
            if ( $(ctrl).attr("type") === 'checkbox' ){
                if ( $(ctrl).is(':checked') ){
                    value = 'Y';
                } else {
                    value = 'N';
                }
            }
            if($(ctrl).attr("type") === 'radio'&&!$(ctrl).attr('checked')){
            }else{
                _returnData[name] = value;
            }

        });
        return _returnData;

    }

    window.DataBind = window.DataBind || _binding;
})(window, jQuery);

