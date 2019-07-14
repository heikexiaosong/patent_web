if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($, window, document, undefined) {
    'use strict';

    var Dialog = {
        buildDialog: function(_options){
            var _dialog = {};
            var container = $('<div class="easyui-panel my-popup"/>');
            var buttons = [{
                text:'<span >确定</span>',
                iconCls: "fa fa-save",
                btnCls: "gui-btn-save",
                handler:function(){
                    var result = this.resultHandler(this.container);
                    if ( isNaN(result) ||  result==true ){
                        container.dialog('destroy');
                    }
                }.bind(_dialog)
            },{
                text:'取消',
                iconCls: "fa fa-close",
                btnCls: "gui-btn-danger",
                handler:function(){
                    var cancel=this.cancelHander(this.container);
                    if ( isNaN(cancel) ||  cancel==true ){
                        container.dialog('destroy');
                    }
                }.bind(_dialog)
            }];

            if ( _options["buttons"]!=null && _options["buttons"].length>0 ){
                $.each(_options["buttons"], function (i, btn) {
                    var handler = btn["handler"];
                    if ( handler!=null ){
                        btn["handler"] = handler.bind(_dialog);
                    }
                    buttons.push(btn);
                })
            }
            _options["buttons"] = buttons;

            // 工具栏事件重新绑定
            var toolbars = _options["toolbar"];
            if ( toolbars != null &&  toolbars.length>0 ){
                $.each(toolbars, function (i, toolbar) {
                    var handler = toolbar['handler'];
                    if ( handler==null ){
                        return;
                    }
                    toolbar['handler'] = function(){
                        handler(this.container, _options);
                    }.bind(_dialog);
                });
            }
            _options["toolbar"] = toolbars;

            var _opts = $.extend({}, {
                width: 400, height: 200,
                closed: false, cache: false,
                modal: true
            }, _options);

            _dialog.container = container;
            _dialog.opts = _opts;

            _dialog.resultHandler = function (dlgContainer) {
                return true;
            };

            _dialog.regResultHandler = function (callback) {
                if ( callback!=null && typeof callback === 'function') {
                    this.resultHandler = callback;
                }
                return this;
            };
            _dialog.cancelHander = function (dlgContainer) {
                return true;
            };
            _dialog.regcancelHander = function (callback) {
                if ( callback!=null && typeof callback === 'function') {
                    this.cancelHander = callback;
                }
                return this;
            };

            _dialog.close = function () {
                container.dialog('destroy');
                container.remove();
            };

            function buildAndShow(dialog, options) {
                var _container = dialog.container;
                _container.dialog(options);
                $.parser.parse(_container);
                var initFunc = options["onInit"];
                if ( initFunc!=null && typeof initFunc === 'function') {
                    var reparse = initFunc(_container);
                    if ( reparse!=null && reparse ){
                        $.parser.parse(_container);
                    }
                }
            }

            if ( _opts["url"] && _opts["url"]!=''  ){
                _dialog.show = function () { };
                HTTP.get(_opts["url"], "", function (result) {
                    _opts["content"] = result;
                    buildAndShow(_dialog, _opts);
                });
            } else {
                container.dialog(_opts);
                _dialog.show = function () {
                    $.parser.parse(this.container);
                    var initFunc = _opts["onInit"];
                    if ( initFunc!=null && typeof initFunc === 'function') {
                        var reparse = initFunc(this.container);
                        if ( reparse!=null && reparse ){
                            $.parser.parse(this.container);
                        }
                    }
                };
            }

            return _dialog;
        }
    };

    window.Dialog = window.Dialog || Dialog;

}(jQuery, window));
