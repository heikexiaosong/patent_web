if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($){
    'use strict';
    function pagerFilter(data){
        if ($.isArray(data)){    // is array
            data = {
                total: data.length,
                rows: data
            }
        }
        var target = this;
        var dg = $(target);
        var state = dg.data('datagrid');
        var opts = dg.datagrid('options');
        if (!state.allRows){
            state.allRows = (data.rows);
        }

        var rows = state.allRows;
        var keyword = state["keyword"];
        if( keyword!=null && keyword!='' ){
            var vector = new Vector();
            $.each(state.allRows, function (i, record) {
                var str = JSON.stringify(record);
                if ( str!=null && str.indexOf(keyword) > 0 ){
                    vector.add(record);
                }
            });
            rows = vector.array();
        }

        var start = (opts.pageNumber-1)*parseInt(opts.pageSize);
        var end = start + parseInt(opts.pageSize);
        data.total = rows.length;

        if( start>rows.length){
            start = rows.length - opts.pageSize;
            if( start < 0 ){
                start = 0;
            }
        }
        if( end > rows.length ){
            end  = rows.length;
        }
        if(rows.length){
            data.rows = rows.slice(start, end);
        }else{
            data.rows=rows;
        }

        return data;
    }

    $.extend($.fn.datagrid.methods, {
        clientPaging: function(jq, params){
            return jq.each(function(){
                var dg = $(this);
                var state = dg.data('datagrid');
                state.allRows = params.data;
                state.data = params.data;

                var opts = state.options;
                opts.loadFilter = pagerFilter;
                var pager = dg.datagrid('getPager');
                pager.pagination({
                    onSelectPage:function(pageNum, pageSize){
                        opts.pageNumber = pageNum;
                        opts.pageSize = pageSize;
                        pager.pagination('refresh',{
                            pageNumber:pageNum,
                            pageSize:pageSize
                        });
                        dg.datagrid('loadData', state.allRows);
                    }
                });
                $(this).datagrid('loadData', params.data);
            });
        },
        search: function(jq, params){
            return jq.each(function(){
                var dg = $(this);
                var state = dg.data('datagrid');
                state["keyword"] = params;
                $(this).datagrid('loadData', state.allRows);
            });
        },
        doCellTip : function(jq, params) {
            function showTip(data, td, e) {
                if ($(td).text() == "")
                    return;
                data.tooltip.text($(td).text()).css({
                    top : (e.pageY + 10) + 'px',
                    left : (e.pageX + 20) + 'px',
                    'z-index' : $.fn.window.defaults.zIndex,
                    display : 'block'
                });
            };
            return jq.each(function() {
                var grid = $(this);
                var options = $(this).data('datagrid');
                if (!options.tooltip) {
                    var panel = grid.datagrid('getPanel').panel('panel');
                    var defaultCls = {
                        'border' : '1px  dotted #333',
                        'padding' : '2px',
                        'color' : '#333',
                        'background':'#ffe48d',
                        'position' : 'absolute',
                        'max-width' : '200px',
                        'border-radius' : '4px',
                        '-moz-border-radius' : '4px',
                        '-webkit-border-radius' : '4px',
                        'font-size':'12px',
                        'display' : 'none'
                    };
                    var tooltip = $("<div></div>").appendTo('body');
                    tooltip.css($.extend({}, defaultCls, params.cls));
                    options.tooltip = tooltip;
                    panel.find('.datagrid-body').each(function() {
                        var delegateEle = $(this).find('> div.datagrid-body-inner').length
                            ? $(this).find('> div.datagrid-body-inner')[0]
                            : this;
                        $(delegateEle).undelegate('td', 'mouseover').undelegate(
                            'td', 'mouseout').undelegate('td', 'mousemove')
                            .delegate('td', {
                                'mouseover' : function(e) {
                                    if (params.delay) {
                                        if (options.tipDelayTime)
                                            clearTimeout(options.tipDelayTime);
                                        var that = this;
                                        options.tipDelayTime = setTimeout(
                                            function() {
                                                showTip(options, that, e);
                                            }, params.delay);
                                    } else {
                                        showTip(options, this, e);
                                    }
                                },
                                'mouseout' : function(e) {
                                    if (options.tipDelayTime)
                                        clearTimeout(options.tipDelayTime);
                                    options.tooltip.css({
                                        'display' : 'none'
                                    });
                                },
                                'mousemove' : function(e) {
                                    var that = this;
                                    if (options.tipDelayTime) {
                                        clearTimeout(options.tipDelayTime);
                                        options.tipDelayTime = setTimeout(
                                            function() {
                                                showTip(options, that, e);
                                            }, params.delay);
                                    } else {
                                        showTip(options, that, e);
                                    }
                                }
                            });
                    });
                }
            });
        },
        cancelCellTip : function(jq) {
            return jq.each(function() {
                var data = $(this).data('datagrid');
                if (data.tooltip) {
                    data.tooltip.remove();
                    data.tooltip = null;
                    var panel = $(this).datagrid('getPanel').panel('panel');
                    panel.find('.datagrid-body').undelegate('td',
                        'mouseover').undelegate('td', 'mouseout')
                        .undelegate('td', 'mousemove')
                }
                if (data.tipDelayTime) {
                    clearTimeout(data.tipDelayTime);
                    data.tipDelayTime = null;
                }
            });
        },
        showRow: function(jq, index){
            return jq.each(function(){
                var opts = $(this).datagrid('options');
                opts.finder.getTr(this, index).show();
            })
        },
        hideRow: function(jq, index){
            return jq.each(function(){
                var opts = $(this).datagrid('options');
                opts.finder.getTr(this, index).hide();

            })
        },
        addEditor : function(jq, param) {
            if (param instanceof Array) {
                $.each(param, function(index, item) {
                    var e = $(jq).datagrid('getColumnOption', item.field);
                    e.editor = item.editor; });
            } else {
                var e = $(jq).datagrid('getColumnOption', param.field);
                e.editor = param.editor;
            }
        },
        removeEditor : function(jq, param) {
            if (param instanceof Array) {
                $.each(param, function(index, item) {
                    var e = $(jq).datagrid('getColumnOption', item);
                    e.editor = {};
                });
            } else {
                var e = $(jq).datagrid('getColumnOption', param);
                e.editor = {};
            }
        }
    });
})(jQuery);
