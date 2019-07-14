if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($) {

    var ctrlHtml =  '<span class="textbox combo datebox" style="width: 156px;">' +
                    '   <span class="textbox-addon textbox-addon-right" style="right: 0px; top: 0px;">' +
                    '       <a href="javascript:;" class="textbox-icon auxinput-arrow" icon-index="0" tabindex="-1" style="width: 24px; height: 22px;"></a>' +
                    '   </span>' +
                    '   <input type="text" class="textbox-text validatebox-text plan-element" autocomplete="off" tabindex="" placeholder="" readonly="readonly" ' +
                    '          style="margin: 0px 18px 0px 0px; padding-top: 0px; padding-bottom: 0px; height: 22px; line-height: 22px; width: 130px;">' +
                    '   <input type="hidden" class="textbox-value hiden-element">' +
                    '</span>';

    $.fn.auxinput = function(options) {
        if (typeof options == "string") {
            var params = [];
            for (var i = 1; i < arguments.length; i++) {
                params.push(arguments[i]);
            }
            this.each(function() {
                $.fn.auxinput.methods[options].apply(this, params);
            });
            return this;
        }
        options = options || {};

        return this.each(function() {

            var target = $(this);

            var data = $.data(this, "auxinput");

            var newOptions;
            if (data) {
                newOptions = $.extend(data.options, options);
                data.opts = newOptions;
            } else {
                newOptions = $.extend({}, $.fn.auxinput.defaults, $.fn.auxinput.parseOptions(this), options);
                 var _name = target.attr('textboxname');
                if ( _name!=null ){
                    target.next().remove();
                } else {
                    _name = target.attr('name');
                    target.attr('name', "");
                }

                target.css('display','none');
                target.attr('type','text');
                target.attr('textboxname', _name);
                target.attr('comboname', _name);
                target.removeClass("easyui-auxinput");

                var $element = $(ctrlHtml);

                var $hidenElement = $element.find("input.hiden-element");
                $hidenElement.attr("name", _name);
                $hidenElement.val(target.attr("value"));

                var $planElement = $element.find("input.plan-element");
                $planElement.val(newOptions["text"] || target.attr("value"));

                target.after($element);

                $.data(this, "auxinput", {
                    options: newOptions,
                    "hiden.element": $hidenElement,
                    "plan.element": $planElement
                });

                $element.find("a.auxinput-arrow").click(target, function (event) {
                    var _data = event.data.data("auxinput");
                    var readonly =  _data["options"]["readonly"];
                    if ( readonly ){
                        return
                    }
                    var _value = _data['hiden.element'].val();
                    _data['options']["onTyping"].call(target, _value, function (value, text) {
                        _data['hiden.element'].val(value || text || "");
                        _data['plan.element'].val(text || value || "");
                    });
                })
            }
        });
    };

    $.fn.auxinput.methods = {
        setValue: function(value, text) {
            $(this).data("auxinput")["plan.element"].val(value||text||"");
            $(this).data("auxinput")["hiden.element"].val(text||value||"");
        },

        getValue: function() {
            return $(this).data("auxinput")["hiden.element"].val();
        },

        getText: function() {
            return $(this).data("auxinput")["plan.element"].val();
        },


        disable: function () {
            $(this).data("auxinput")["plan.element"].attr("disabled", "disabled");
            $(this).data("auxinput")["options"]["readonly"] = true;
        },

        enable: function () {
            $(this).data("auxinput")["plan.element"].removeAttr("disabled");
            $(this).data("auxinput")["options"]["readonly"] = false;
        }
    };

    $.fn.auxinput.parseOptions = function(target) {
        return $.extend({}, $.parser.parseOptions(target, ["type", {cache: 'boolean'}]));
    };

    $.fn.auxinput.defaults = {
        type: "mulitext",
        text: "",
        readonly: false,
        onTyping: function (initValue, updateValue) {
            var addTeamMemberOptions = {
                title: "输入",
                content: '<input class="easyui-textbox sm-edit" data-options="multiline:true" style="width:626px; height: 280px" >',
                width: 640,
                height: 360,
                onInit: function ($container1) {
                    $container1.find(".sm-edit").textbox("setText", initValue);
                }
            };

            var addTeamMemberDialog = Dialog.buildDialog(addTeamMemberOptions);

            // 注册 对话框 确定按钮 事件
            addTeamMemberDialog.regResultHandler(
                function (dlgContainer) {
                    var smEdit = dlgContainer.find(".sm-edit");
                    updateValue(smEdit.textbox("getText"));
                }
            );
            addTeamMemberDialog.show();
        }
    };

    $.parser.plugins.push('auxinput');
})(jQuery);
