(function (a) {
    'use strict';
    function indexOfArray(a, b) {
        return $.easyui.indexOfArray(a, b)
    }
    function removeArrayItem(a, b, c) {
        $.easyui.removeArrayItem(a, b, c)
    }
    function addArrayItem(a, b, c) {
        $.easyui.addArrayItem(a, b, c)
    }
    function getArguments(a, b) {
        return $.data(a, "treegrid") ? b.slice(1) : b
    }
    function createStyleSheet(a) {
        var b = $.data(a, "datagrid"),
            c = b.options,
            d = b.panel,
            e = b.dc,
            f = null;
        c.sharedStyleSheet ? f = "boolean" == typeof c.sharedStyleSheet ? "head" : c.sharedStyleSheet : (f = d.closest("div.datagrid-view"), f.length || (f = e.view));
        var g = $(f),
            h = $.data(g[0], "ss");
        return h || (h = $.data(g[0], "ss", {
            cache: {},
            dirty: []
        })),
            {
                add: function (a) {
                    for (var b = ['<style type="text/css" easyui="true">'], c = 0; c < a.length; c++) h.cache[a[c][0]] = {
                        width: a[c][1]
                    };
                    var d = 0;
                    for (var e in h.cache) {
                        var f = h.cache[e];
                        f.index = d++,
                            b.push(e + "{width:" + f.width + "}")
                    }
                    b.push("</style>"),
                        $(b.join("\n")).appendTo(g),
                        g.children("style[easyui]:not(:last)").remove()
                },
                getRule: function (a) {
                    var b = g.children("style[easyui]:last")[0],
                        c = b.styleSheet ? b.styleSheet : b.sheet || document.styleSheets[document.styleSheets.length - 1],
                        d = c.cssRules || c.rules;
                    return d[a]
                },
                set: function (a, b) {
                    var c = h.cache[a];
                    if (c) {
                        c.width = b;
                        var d = this.getRule(c.index);
                        d && (d.style.width = b)
                    }
                },
                remove: function (a) {
                    var b = [];
                    for (var c in h.cache) c.indexOf(a) == -1 && b.push([c, h.cache[c].width]);
                    h.cache = {},
                        this.add(b)
                },
                dirty: function (a) {
                    a && h.dirty.push(a)
                },
                clean: function () {
                    for (var a = 0; a < h.dirty.length; a++) this.remove(h.dirty[a]);
                    h.dirty = []
                }
            }
    }
    function setSize(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = c.panel;
        if (b && $.extend(d, b), 1 == d.fit) {
            var f = e.panel("panel").parent();
            d.width = f.width(),
                d.height = f.height()
        }
        e.panel("resize", d)
    }
    function setBodySize(a) {
        var b = $.data(a, "datagrid"),
            c = b.options,
            d = b.dc,
            e = b.panel,
            f = e.width(),
            g = e.height(),
            h = d.view,
            i = d.view1,
            j = d.view2,
            k = i.children("div.datagrid-header"),
            l = j.children("div.datagrid-header"),
            m = k.find("table"),
            n = l.find("table");
        h.width(f);
        var o = k.children("div.datagrid-header-inner").show();
        i.width(o.find("table").width()),
        c.showHeader || o.hide(),
            j.width(f - i._outerWidth()),
            i.children()._outerWidth(i.width()),
            j.children()._outerWidth(j.width());
        var p = k.add(l).add(m).add(n);
        p.css("height", "");
        var q = Math.max(m.height(), n.height());
        p._outerHeight(q),
            h.children(".datagrid-empty").css("top", q + "px"),
            d.body1.add(d.body2).children("table.datagrid-btable-frozen").css({
                position: "absolute",
                top: d.header2._outerHeight()
            });
        var r = d.body2.children("table.datagrid-btable-frozen")._outerHeight(),
            s = r + l._outerHeight() + j.children(".datagrid-footer")._outerHeight();
        e.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function () {
            s += $(this)._outerHeight()
        });
        var t = e.outerHeight() - e.height(),
            u = e._size("minHeight") || "",
            v = e._size("maxHeight") || "";
        i.add(j).children("div.datagrid-body").css({
            marginTop: r,
            height: isNaN(parseInt(c.height)) ? "" : g - s,
            minHeight: u ? u - t - s : "",
            maxHeight: v ? v - t - s : ""
        }),
            h.height(j.height())
    }
    function fixRowHeight(a, b, c) {
        function d(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = $(a[c]),
                    e = $(b[c]);
                d.css("height", ""),
                    e.css("height", "");
                var f = Math.max(d.height(), e.height());
                d.css("height", f),
                    e.css("height", f)
            }
        }
        function e(a) {
            var b = 0,
                c = 0;
            return $(a).children().each(function () {
                var a = $(this);
                a.is(":visible") && (c += a._outerHeight(), b < a._outerWidth() && (b = a._outerWidth()))
            }),
                {
                    width: b,
                    height: c
                }
        }
        var f = ($.data(a, "datagrid").data.rows, $.data(a, "datagrid").options),
            g = $.data(a, "datagrid").dc;
        if (!g.body1.is(":empty") && (!f.nowrap || f.autoRowHeight || c)) if (void 0 != b) {
            var h = f.finder.getTr(a, b, "body", 1),
                i = f.finder.getTr(a, b, "body", 2);
            d(h, i)
        } else {
            var h = f.finder.getTr(a, 0, "allbody", 1),
                i = f.finder.getTr(a, 0, "allbody", 2);
            if (d(h, i), f.showFooter) {
                var h = f.finder.getTr(a, 0, "allfooter", 1),
                    i = f.finder.getTr(a, 0, "allfooter", 2);
                d(h, i)
            }
        }
        if (setBodySize(a), "auto" == f.height) {
            var j = g.body1.parent(),
                k = g.body2,
                l = e(k),
                m = l.height;
            l.width > k.width() && (m += 18),
                m -= parseInt(k.css("marginTop")) || 0,
                j.height(m),
                k.height(m),
                g.view.height(g.view2.height())
        }
        g.body2.triggerHandler("scroll")
    }
    function freezeRow(a, b) {
        function c(c) {
            var d = c ? 1 : 2,
                g = e.finder.getTr(a, b, "body", d);
            (c ? f.body1 : f.body2).children("table.datagrid-btable-frozen").append(g)
        }
        var d = $.data(a, "datagrid"),
            e = d.options,
            f = d.dc;
        f.body2.children("table.datagrid-btable-frozen").length || f.body1.add(f.body2).prepend('<table class="datagrid-btable datagrid-btable-frozen" cellspacing="0" cellpadding="0"></table>'),
            c(!0),
            c(!1),
            setBodySize(a)
    }
    function wrapGrid(target, rownumbers) {
        function getColumns() {
            var frozenColumns = [],
                columns = [];
            return $(target).children("thead").each(function () {
                var opt = $.parser.parseOptions(this, [{
                    frozen: "boolean"
                }]);
                $(this).find("tr").each(function () {
                    var cols = [];
                    $(this).find("th").each(function () {
                        var th = $(this),
                            col = $.extend({}, $.parser.parseOptions(this, ["id", "field", "align", "halign", "order", "width", {
                                sortable: "boolean",
                                checkbox: "boolean",
                                resizable: "boolean",
                                fixed: "boolean"
                            },
                                {
                                    rowspan: "number",
                                    colspan: "number"
                                }]), {
                                title: th.html() || void 0,
                                hidden: !! th.attr("hidden") || void 0,
                                formatter: th.attr("formatter") ? eval(th.attr("formatter")) : void 0,
                                styler: th.attr("styler") ? eval(th.attr("styler")) : void 0,
                                sorter: th.attr("sorter") ? eval(th.attr("sorter")) : void 0
                            });
                        if (col.width && String(col.width).indexOf("%") == -1 && (col.width = parseInt(col.width)), th.attr("editor")) {
                            var s = $.trim(th.attr("editor"));
                            "{" == s.substr(0, 1) ? col.editor = eval("(" + s + ")") : col.editor = s
                        }
                        cols.push(col)
                    }),
                        opt.frozen ? frozenColumns.push(cols) : columns.push(cols)
                })
            }),
                [frozenColumns, columns]
        }
        var panel = $('<div class="datagrid-wrap"><div class="datagrid-view"><div class="datagrid-view1"><div class="datagrid-header"><div class="datagrid-header-inner"></div></div><div class="datagrid-body"><div class="datagrid-body-inner"></div></div><div class="datagrid-footer"><div class="datagrid-footer-inner"></div></div></div><div class="datagrid-view2"><div class="datagrid-header"><div class="datagrid-header-inner"></div></div><div class="datagrid-body"></div><div class="datagrid-footer"><div class="datagrid-footer-inner"></div></div></div></div></div>').insertAfter(target);
        panel.panel({
            doSize: !1,
            cls: "datagrid"
        }),
            $(target).addClass("datagrid-f").hide().appendTo(panel.children("div.datagrid-view"));
        var cc = getColumns(),
            view = panel.children("div.datagrid-view"),
            view1 = view.children("div.datagrid-view1"),
            view2 = view.children("div.datagrid-view2");
        return {
            panel: panel,
            frozenColumns: cc[0],
            columns: cc[1],
            dc: {
                view: view,
                view1: view1,
                view2: view2,
                header1: view1.children("div.datagrid-header").children("div.datagrid-header-inner"),
                header2: view2.children("div.datagrid-header").children("div.datagrid-header-inner"),
                body1: view1.children("div.datagrid-body").children("div.datagrid-body-inner"),
                body2: view2.children("div.datagrid-body"),
                footer1: view1.children("div.datagrid-footer").children("div.datagrid-footer-inner"),
                footer2: view2.children("div.datagrid-footer").children("div.datagrid-footer-inner")
            }
        }
    }
    function buildGrid(target) {
        function createColumnHeader(a, b, c) {
            if (b) {
                $(a).show(),
                    $(a).empty();
                var d = $('<div class="datagrid-cell" style="position:absolute;left:-99999px"></div>').appendTo("body");
                d._outerWidth(99);
                var e = 100 - parseInt(d[0].style.width);
                d.remove();
                var f = [],
                    g = [],
                    h = [];
                opts.sortName && (f = opts.sortName.split(","), g = opts.sortOrder.split(","));
                for (var i = $('<table class="datagrid-htable" border="0" cellspacing="0" cellpadding="0"><tbody></tbody></table>').appendTo(a), j = 0; j < b.length; j++) for (var k = $('<tr class="datagrid-header-row"></tr>').appendTo($("tbody", i)), l = b[j], m = 0; m < l.length; m++) {
                    var n = l[m],
                        o = "";
                    n.rowspan && (o += 'rowspan="' + n.rowspan + '" '),
                    n.colspan && (o += 'colspan="' + n.colspan + '" ', n.id || (n.id = ["datagrid-td-group" + DATAGRID_SERNO, j, m].join("-"))),
                    n.id && (o += 'id="' + n.id + '"');
                    var p = $("<td " + o + "></td>").appendTo(k);
                    if (n.checkbox) p.attr("field", n.field),
                        $('<div class="datagrid-header-check"></div>').html('<input type="checkbox"/>').appendTo(p);
                    else if (n.field) {
                        p.attr("field", n.field),
                            p.append('<div class="datagrid-cell"><span></span><span class="datagrid-sort-icon"></span></div>'),
                            p.find("span:first").html(n.title);
                        var q = p.find("div.datagrid-cell"),
                            r = indexOfArray(f, n.field);
                        if (r >= 0 && q.addClass("datagrid-sort-" + g[r]), n.sortable && q.addClass("datagrid-sort"), 0 == n.resizable && q.attr("resizable", "false"), n.width) {
                            var s = $.parser.parseValue("width", n.width, dc.view, opts.scrollbarSize + (opts.rownumbers ? opts.rownumberWidth : 0));
                            n.deltaWidth = e,
                                n.boxWidth = s - e
                        } else n.auto = !0;
                        q.css("text-align", n.halign || n.align || ""),
                            n.cellClass = state.cellClassPrefix + "-" + n.field.replace(/[\.|\s]/g, "-"),
                            q.addClass(n.cellClass)
                    } else $('<div class="datagrid-cell-group"></div>').html(n.title).appendTo(p);
                    n.hidden && (p.hide(), h.push(n.field))
                }
                if (c && opts.rownumbers) {
                    var p = $('<td rowspan="' + opts.frozenColumns.length + '"><div class="datagrid-header-rownumber"></div></td>');
                    0 == $("tr", i).length ? p.wrap('<tr class="datagrid-header-row"></tr>').parent().appendTo($("tbody", i)) : p.prependTo($("tr:first", i))
                }
                for (var j = 0; j < h.length; j++) fixColumnSpan(target, h[j], -1)
            }
        }
        function createColumnStyle() {
            for (var a = [
                [".datagrid-header-rownumber", opts.rownumberWidth - 1 + "px"],
                [".datagrid-cell-rownumber", opts.rownumberWidth - 1 + "px"]
            ], b = getColumnFields(target, !0).concat(getColumnFields(target)), c = 0; c < b.length; c++) {
                var d = getColumnOption(target, b[c]);
                d && !d.checkbox && a.push(["." + d.cellClass, d.boxWidth ? d.boxWidth + "px" : "auto"])
            }
            state.ss.add(a),
                state.ss.dirty(state.cellSelectorPrefix),
                state.cellSelectorPrefix = "." + state.cellClassPrefix
        }
        var state = $.data(target, "datagrid"),
            opts = state.options,
            dc = state.dc,
            panel = state.panel;
        if (state.ss = $(target).datagrid("createStyleSheet"), panel.panel($.extend({}, opts, {
            id: null,
            doSize: !1,
            onResize: function (a, b) {
                $.data(target, "datagrid") && (setBodySize(target), $(target).datagrid("fitColumns"), opts.onResize.call(panel, a, b))
            },
            onExpand: function () {
                $.data(target, "datagrid") && ($(target).datagrid("fixRowHeight").datagrid("fitColumns"), opts.onExpand.call(panel))
            }
        })), state.rowIdPrefix = "datagrid-row-r" + ++DATAGRID_SERNO, state.cellClassPrefix = "datagrid-cell-c" + DATAGRID_SERNO, createColumnHeader(dc.header1, opts.frozenColumns, !0), createColumnHeader(dc.header2, opts.columns, !1), createColumnStyle(), dc.header1.add(dc.header2).css("display", opts.showHeader ? "block" : "none"), dc.footer1.add(dc.footer2).css("display", opts.showFooter ? "block" : "none"), opts.toolbar) if ($.isArray(opts.toolbar)) {
            $("div.datagrid-toolbar", panel).remove();
            for (var tb = $('<div class="datagrid-toolbar"><table cellspacing="0" cellpadding="0"><tr></tr></table></div>').prependTo(panel), tr = tb.find("tr"), i = 0; i < opts.toolbar.length; i++) {
                var btn = opts.toolbar[i];
                if ("-" == btn) $('<td><div class="datagrid-btn-separator"></div></td>').appendTo(tr);
                else {
                    var td = $("<td></td>").appendTo(tr),
                        tool = $('<a href="javascript:;"></a>').appendTo(td);
                    tool[0].onclick = eval(btn.handler ||
                        function () {}),
                        tool.linkbutton($.extend({}, btn, {
                            plain: !0
                        }))
                }
            }
        } else $(opts.toolbar).addClass("datagrid-toolbar").prependTo(panel),
            $(opts.toolbar).show();
        else $("div.datagrid-toolbar", panel).remove();
        if ($("div.datagrid-pager", panel).remove(), opts.pagination) {
            var pager = $('<div class="datagrid-pager"></div>');
            if ("bottom" == opts.pagePosition) pager.appendTo(panel);
            else if ("top" == opts.pagePosition) pager.addClass("datagrid-pager-top").prependTo(panel);
            else {
                var ptop = $('<div class="datagrid-pager datagrid-pager-top"></div>').prependTo(panel);
                pager.appendTo(panel),
                    pager = pager.add(ptop)
            }
            pager.pagination({
                total: 0,
                pageNumber: opts.pageNumber,
                pageSize: opts.pageSize,
                pageList: opts.pageList,
                onSelectPage: function (a, b) {
                    opts.pageNumber = a || 1,
                        opts.pageSize = b,
                        pager.pagination("refresh", {
                            pageNumber: a,
                            pageSize: b
                        }),
                        request(target)
                }
            }),
                opts.pageSize = pager.pagination("options").pageSize
        }
    }
    function bindEvents(a) {
        var b = $.data(a, "datagrid"),
            c = b.panel,
            d = b.options,
            e = b.dc,
            f = e.header1.add(e.header2);
        f.unbind(".datagrid");
        for (var g in d.headerEvents) f.bind(g + ".datagrid", d.headerEvents[g]);
        var h = f.find("div.datagrid-cell"),
            i = "right" == d.resizeHandle ? "e" : "left" == d.resizeHandle ? "w" : "e,w";
        h.each(function () {
            $(this).resizable({
                handles: i,
                edge: d.resizeEdge,
                disabled: !! $(this).attr("resizable") && "false" == $(this).attr("resizable"),
                minWidth: 25,
                onStartResize: function (a) {
                    b.resizing = !0,
                        f.css("cursor", $("body").css("cursor")),
                    b.proxy || (b.proxy = $('<div class="datagrid-resize-proxy"></div>').appendTo(e.view)),
                        "e" == a.data.dir ? a.data.deltaEdge = $(this)._outerWidth() - (a.pageX - $(this).offset().left) : a.data.deltaEdge = $(this).offset().left - a.pageX - 1,
                        b.proxy.css({
                            left: a.pageX - $(c).offset().left - 1 + a.data.deltaEdge,
                            display: "none"
                        }),
                        setTimeout(function () {
                            b.proxy && b.proxy.show()
                        }, 500)
                },
                onResize: function (a) {
                    return b.proxy.css({
                        left: a.pageX - $(c).offset().left - 1 + a.data.deltaEdge,
                        display: "block"
                    }),
                        !1
                },
                onStopResize: function (c) {
                    f.css("cursor", ""),
                        $(this).css("height", "");
                    var e = $(this).parent().attr("field"),
                        g = getColumnOption(a, e);
                    g.width = $(this)._outerWidth() + 1,
                        g.boxWidth = g.width - g.deltaWidth,
                        g.auto = void 0,
                        $(this).css("width", ""),
                        $(a).datagrid("fixColumnSize", e),
                        b.proxy.remove(),
                        b.proxy = null,
                    $(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1") && setBodySize(a),
                        $(a).datagrid("fitColumns"),
                        d.onResizeColumn.call(a, e, g.width),
                        setTimeout(function () {
                            b.resizing = !1
                        }, 0)
                }
            })
        });
        var j = e.body1.add(e.body2);
        j.unbind();
        for (var g in d.rowEvents) j.bind(g, d.rowEvents[g]);
        e.body1.bind("mousewheel DOMMouseScroll", function (a) {
            a.preventDefault();
            var b = a.originalEvent || window.event,
                c = b.wheelDelta || b.detail * -1;
            "deltaY" in b && (c = b.deltaY * -1);
            var d = $(a.target).closest("div.datagrid-view").children(".datagrid-f"),
                e = d.data("datagrid").dc;
            e.body2.scrollTop(e.body2.scrollTop() - c)
        }),
            e.body2.bind("scroll", function () {
                var a = e.view1.children("div.datagrid-body");
                a.scrollTop($(this).scrollTop());
                var b = e.body1.children(":first"),
                    c = e.body2.children(":first");
                if (b.length && c.length) {
                    var d = b.offset().top,
                        f = c.offset().top;
                    d != f && a.scrollTop(a.scrollTop() + d - f)
                }
                e.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft()),
                    e.body2.children("table.datagrid-btable-frozen").css("left", -$(this)._scrollLeft())
            })
    }
    function headerOverEventHandler(a) {
        return function (b) {
            var c = $(b.target).closest("td[field]");
            if (c.length) {
                var d = getTableTarget(c);
                !$(d).data("datagrid").resizing && a ? c.addClass("datagrid-header-over") : c.removeClass("datagrid-header-over")
            }
        }
    }
    function headerClickEventHandler(a) {
        var b = getTableTarget(a.target),
            c = $(b).datagrid("options"),
            d = $(a.target).closest("input[type=checkbox]");
        if (d.length) {
            if (c.singleSelect && c.selectOnCheck) return !1;
            d.is(":checked") ? checkAll(b) : uncheckAll(b),
                a.stopPropagation()
        } else {
            var e = $(a.target).closest(".datagrid-cell");
            if (e.length) {
                var f = e.offset().left + 5,
                    g = e.offset().left + e._outerWidth() - 5;
                a.pageX < g && a.pageX > f && sortGrid(b, e.parent().attr("field"))
            }
        }
    }
    function headerDblclickEventHandler(a) {
        var b = getTableTarget(a.target),
            c = $(b).datagrid("options"),
            d = $(a.target).closest(".datagrid-cell");
        if (d.length) {
            var e = d.offset().left + 5,
                f = d.offset().left + d._outerWidth() - 5,
                g = "right" == c.resizeHandle ? a.pageX > f : "left" == c.resizeHandle ? a.pageX < e : a.pageX < e || a.pageX > f;
            if (g) {
                var h = d.parent().attr("field"),
                    i = getColumnOption(b, h);
                if (0 == i.resizable) return;
                $(b).datagrid("autoSizeColumn", h),
                    i.auto = !1
            }
        }
    }
    function headerMenuEventHandler(a) {
        var b = getTableTarget(a.target),
            c = $(b).datagrid("options"),
            d = $(a.target).closest("td[field]");
        c.onHeaderContextMenu.call(b, a, d.attr("field"))
    }
    function hoverEventHandler(a) {
        return function (b) {
            var c = getClosestTr(b.target);
            if (c) {
                var d = getTableTarget(c);
                if (!$.data(d, "datagrid").resizing) {
                    var e = getTrIndex(c);
                    if (a) highlightRow(d, e);
                    else {
                        var f = $.data(d, "datagrid").options;
                        f.finder.getTr(d, e).removeClass("datagrid-row-over")
                    }
                }
            }
        }
    }
    function clickEventHandler(a) {
        var b = getClosestTr(a.target);
        if (b) {
            var c = getTableTarget(b),
                d = $.data(c, "datagrid").options,
                e = getTrIndex(b),
                f = $(a.target);
            if (f.parent().hasClass("datagrid-cell-check")) d.singleSelect && d.selectOnCheck ? (f._propAttr("checked", !f.is(":checked")), checkRow(c, e)) : f.is(":checked") ? (f._propAttr("checked", !1), checkRow(c, e)) : (f._propAttr("checked", !0), uncheckRow(c, e));
            else {
                var g = d.finder.getRow(c, e),
                    h = f.closest("td[field]", b);
                if (h.length) {
                    var i = h.attr("field");
                    d.onClickCell.call(c, e, i, g[i])
                }
                if (1 == d.singleSelect) selectRow(c, e);
                else if (d.ctrlSelect) if (a.metaKey || a.ctrlKey) b.hasClass("datagrid-row-selected") ? unselectRow(c, e) : selectRow(c, e);
                else if (a.shiftKey) {
                    $(c).datagrid("clearSelections");
                    for (var j = Math.min(d.lastSelectedIndex || 0, e), k = Math.max(d.lastSelectedIndex || 0, e), l = j; l <= k; l++) selectRow(c, l)
                } else $(c).datagrid("clearSelections"),
                    selectRow(c, e),
                    d.lastSelectedIndex = e;
                else b.hasClass("datagrid-row-selected") ? unselectRow(c, e) : selectRow(c, e);
                d.onClickRow.apply(c, getArguments(c, [e, g]))
            }
        }
    }
    function dblclickEventHandler(a) {
        var b = getClosestTr(a.target);
        if (b) {
            var c = getTableTarget(b),
                d = $.data(c, "datagrid").options,
                e = getTrIndex(b),
                f = d.finder.getRow(c, e),
                g = $(a.target).closest("td[field]", b);
            if (g.length) {
                var h = g.attr("field");
                d.onDblClickCell.call(c, e, h, f[h])
            }
            d.onDblClickRow.apply(c, getArguments(c, [e, f]))
        }
    }
    function contextmenuEventHandler(a) {
        var b = getClosestTr(a.target);
        if (b) {
            var c = getTableTarget(b),
                d = $.data(c, "datagrid").options,
                e = getTrIndex(b),
                f = d.finder.getRow(c, e);
            d.onRowContextMenu.call(c, a, e, f)
        } else {
            var g = getClosestTr(a.target, ".datagrid-body");
            if (g) {
                var c = getTableTarget(g),
                    d = $.data(c, "datagrid").options;
                d.onRowContextMenu.call(c, a, -1, null)
            }
        }
    }
    function getTableTarget(a) {
        return $(a).closest("div.datagrid-view").children(".datagrid-f")[0]
    }
    function getClosestTr(a, b) {
        var c = $(a).closest(b || "tr.datagrid-row");
        return c.length && c.parent().length ? c : void 0
    }
    function getTrIndex(a) {
        return a.attr("datagrid-row-index") ? parseInt(a.attr("datagrid-row-index")) : a.attr("node-id")
    }
    function sortGrid(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options;
        b = b || {};
        var e = {
            sortName: d.sortName,
            sortOrder: d.sortOrder
        };
        "object" == typeof b && $.extend(e, b);
        var f = [],
            g = [];
        if (e.sortName && (f = e.sortName.split(","), g = e.sortOrder.split(",")), "string" == typeof b) {
            var h = b,
                i = getColumnOption(a, h);
            if (!i.sortable || c.resizing) return;
            var j = i.order || "asc",
                k = indexOfArray(f, h);
            if (k >= 0) {
                var l = "asc" == g[k] ? "desc" : "asc";
                d.multiSort && l == j ? (f.splice(k, 1), g.splice(k, 1)) : g[k] = l
            } else d.multiSort ? (f.push(h), g.push(j)) : (f = [h], g = [j]);
            e.sortName = f.join(","),
                e.sortOrder = g.join(",")
        }
        if (0 != d.onBeforeSortColumn.call(a, e.sortName, e.sortOrder)) {
            $.extend(d, e);
            var m = c.dc,
                n = m.header1.add(m.header2);
            n.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
            for (var o = 0; o < f.length; o++) {
                var i = getColumnOption(a, f[o]);
                n.find("div." + i.cellClass).addClass("datagrid-sort-" + g[o])
            }
            d.remoteSort ? request(a) : loadData(a, $(a).datagrid("getData")),
                d.onSortColumn.call(a, d.sortName, d.sortOrder)
        }
    }
    function fixColumnSpan(a, b, c) {
        function d(d) {
            var e = getColumnLayout(a, d);
            if (e.length) {
                var f = e[e.length - 1],
                    g = indexOfArray(f, b);
                if (g >= 0) for (var h = 0; h < e.length - 1; h++) {
                    var i = $("#" + e[h][g]),
                        j = parseInt(i.attr("colspan") || 1) + (c || 0);
                    i.attr("colspan", j),
                        j ? i.show() : i.hide()
                }
            }
        }
        d(!0),
            d(!1)
    }
    function fitColumns(a) {
        function b() {
            if (g.fitColumns) {
                f.leftWidth || (f.leftWidth = 0);
                for (var b = 0, c = [], d = getColumnFields(a, !1), h = 0; h < d.length; h++) {
                    var j = getColumnOption(a, d[h]);
                    e(j) && (b += j.width, c.push({
                        field: j.field,
                        col: j,
                        addingWidth: 0
                    }))
                }
                if (b) {
                    c[c.length - 1].addingWidth -= f.leftWidth;
                    var k = i.children("div.datagrid-header-inner").show(),
                        l = i.width() - i.find("table").width() - g.scrollbarSize + f.leftWidth,
                        m = l / b;
                    g.showHeader || k.hide();
                    for (var h = 0; h < c.length; h++) {
                        var n = c[h],
                            o = parseInt(n.col.width * m);
                        n.addingWidth += o,
                            l -= o
                    }
                    c[c.length - 1].addingWidth += l;
                    for (var h = 0; h < c.length; h++) {
                        var n = c[h];
                        n.col.boxWidth + n.addingWidth > 0 && (n.col.boxWidth += n.addingWidth, n.col.width += n.addingWidth)
                    }
                    f.leftWidth = l,
                        $(a).datagrid("fixColumnSize")
                }
            }
        }
        function c() {
            var b = !1,
                c = getColumnFields(a, !0).concat(getColumnFields(a, !1));
            $.map(c, function (c) {
                var d = getColumnOption(a, c);

                if (String(d.width || "").indexOf("%") >= 0) {
                    var e = $.parser.parseValue("width", d.width, h.view, g.scrollbarSize + (g.rownumbers ? g.rownumberWidth : 0)) - d.deltaWidth;
                    e > 0 && (d.boxWidth = e, b = !0)
                }
            }),
            b && $(a).datagrid("fixColumnSize")
        }
        function d(b) {
            var c = h.header1.add(h.header2).find(".datagrid-cell-group");
            c.length && (c.each(function () {
                $(this)._outerWidth(b ? $(this).parent().width() : 10)
            }), b && setBodySize(a))
        }
        function e(a) {
            return !(String(a.width || "").indexOf("%") >= 0) && (!(a.hidden || a.checkbox || a.auto || a.fixed) || void 0)
        }
        var f = $.data(a, "datagrid"),
            g = f.options,
            h = f.dc,
            i = h.view2.children("div.datagrid-header");
        h.body2.css("overflow-x", ""),
            d(),
            c(),
            b(),
            d(!0),
        i.width() >= i.find("table").width() && h.body2.css("overflow-x", "hidden")
    }
    function autoSizeColumn(a, b) {
        function c(b) {
            function c(c) {
                function f(a) {
                    return a.is(":visible") ? a._outerWidth() : g.html(a.html())._outerWidth()
                }
                var h = 0;
                return "header" == c ? h = f(d) : e.finder.getTr(a, 0, c).find('td[field="' + b + '"] div.datagrid-cell').each(function () {
                    var a = f($(this));
                    h < a && (h = a)
                }),
                    h
            }
            var d = f.view.find('div.datagrid-header td[field="' + b + '"] div.datagrid-cell');
            d.css("width", "");
            var h = $(a).datagrid("getColumnOption", b);
            h.width = void 0,
                h.boxWidth = void 0,
                h.auto = !0,
                $(a).datagrid("fixColumnSize", b);
            var i = Math.max(c("header"), c("allbody"), c("allfooter")) + 1;
            d._outerWidth(i - 1),
                h.width = i,
                h.boxWidth = parseInt(d[0].style.width),
                h.deltaWidth = i - h.boxWidth,
                d.css("width", ""),
                $(a).datagrid("fixColumnSize", b),
                e.onResizeColumn.call(a, b, h.width)
        }
        var d = $.data(a, "datagrid"),
            e = d.options,
            f = d.dc,
            g = $('<div class="datagrid-cell" style="position:absolute;left:-9999px"></div>').appendTo("body");
        if (b) c(b),
            $(a).datagrid("fitColumns");
        else {
            for (var h = !1, i = getColumnFields(a, !0).concat(getColumnFields(a, !1)), j = 0; j < i.length; j++) {
                var b = i[j],
                    k = getColumnOption(a, b);
                k.auto && (c(b), h = !0)
            }
            h && $(a).datagrid("fitColumns")
        }
        g.remove()
    }
    function fixColumnSize(a, b) {
        function c(b) {
            var c = getColumnOption(a, b);
            c.cellClass && d.ss.set("." + c.cellClass, c.boxWidth ? c.boxWidth + "px" : "auto")
        }
        var d = $.data(a, "datagrid"),
            e = (d.options, d.dc),
            f = e.view.find("table.datagrid-btable,table.datagrid-ftable");
        if (f.css("table-layout", "fixed"), b) c(b);
        else for (var g = getColumnFields(a, !0).concat(getColumnFields(a, !1)), h = 0; h < g.length; h++) c(g[h]);
        f.css("table-layout", ""),
            fixMergedSize(a),
            fixRowHeight(a),
            fixEditableSize(a)
    }
    function fixMergedSize(a, b) {
        var c = $.data(a, "datagrid").dc;
        b = b || c.view.find("td.datagrid-td-merged"),
            b.each(function () {
                var b = $(this),
                    c = b.attr("colspan") || 1;
                if (c > 1) {
                    for (var d = getColumnOption(a, b.attr("field")), e = d.boxWidth + d.deltaWidth - 1, f = 1; f < c; f++) b = b.next(),
                        d = getColumnOption(a, b.attr("field")),
                        e += d.boxWidth + d.deltaWidth;
                    $(this).children("div.datagrid-cell")._outerWidth(e)
                }
            })
    }
    function fixEditableSize(a) {
        var b = $.data(a, "datagrid").dc;
        b.view.find("div.datagrid-editable").each(function () {
            var b = $(this),
                c = b.parent().attr("field"),
                d = $(a).datagrid("getColumnOption", c);
            b._outerWidth(d.boxWidth + d.deltaWidth - 1);
            var e = $.data(this, "datagrid.editor");
            e.actions.resize && e.actions.resize(e.target, b.width())
        })
    }
    function getColumnOption(a, b) {
        function c(a) {
            if (a) for (var c = 0; c < a.length; c++) for (var d = a[c], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.field == b) return f
            }
            return null
        }
        var d = $.data(a, "datagrid").options,
            e = c(d.columns);

        return e || (e = c(d.frozenColumns)),
            e
    }
    function getColumnLayout(a, b) {
        function c() {
            var a = 0;
            return $.map(f[0] || [], function (b) {
                a += b.colspan || 1
            }),
                a
        }
        function d(a) {
            for (var b = 0; b < a.length; b++) if (void 0 == a[b]) return b;
            return -1
        }
        for (var e = $.data(a, "datagrid").options, f = b ? e.frozenColumns : e.columns, g = [], h = c(), i = 0; i < f.length; i++) g[i] = new Array(h);
        for (var j = 0; j < f.length; j++) $.map(f[j], function (a) {
            var b = d(g[j]);
            if (b >= 0) for (var c = a.field || a.id || "", e = 0; e < (a.colspan || 1); e++) {
                for (var f = 0; f < (a.rowspan || 1); f++) g[j + f][b] = c;
                b++
            }
        });
        return g
    }
    function getColumnFields(a, b) {
        var c = getColumnLayout(a, b);
        return c.length ? c[c.length - 1] : c
    }
    function loadData(a, b, page) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = c.dc;

        page = $.extend({total: b.length},  page)
        if (b = d.loadFilter.call(a, b), $.isArray(b) && (b = {
            total:  page.total,
            rows: b
        }), b.total = parseInt(b.total), c.data = b, b.footer && (c.footer = b.footer), !d.remoteSort && d.sortName) {
            var f = d.sortName.split(","),
                g = d.sortOrder.split(",");
            b.rows.sort(function (b, c) {
                for (var d = 0, e = 0; e < f.length; e++) {
                    var h = f[e],
                        i = g[e],
                        j = getColumnOption(a, h),
                        k = j.sorter ||
                            function (a, b) {
                                return a == b ? 0 : a > b ? 1 : -1
                            };
                    if (d = k(b[h], c[h]) * ("asc" == i ? 1 : -1), 0 != d) return d
                }
                return d
            })
        }
        d.view.onBeforeRender && d.view.onBeforeRender.call(d.view, a, b.rows),
            d.view.render.call(d.view, a, e.body2, !1),
            d.view.render.call(d.view, a, e.body1, !0),
        d.showFooter && (d.view.renderFooter.call(d.view, a, e.footer2, !1), d.view.renderFooter.call(d.view, a, e.footer1, !0)),
        d.view.onAfterRender && d.view.onAfterRender.call(d.view, a),
            c.ss.clean();
        var h = $(a).datagrid("getPager");
        if (h.length) {
            var i = h.pagination("options");
            i.total != b.total && (h.pagination("refresh", {
                pageNumber: d.pageNumber,
                total: b.total
            }), (console.log("d.pageNumber != i.pageNumber: " + (d.pageNumber != i.pageNumber)),  d.pageNumber != i.pageNumber) && (console.log("i.pageNumber > 0: "), i.pageNumber > 0 )
            && (d.pageNumber = i.pageNumber, console.log("invoke request(a)"), request(a)))
        }
        fixRowHeight(a),
            e.body2.triggerHandler("scroll"),
            $(a).datagrid("setSelectionState"),
            $(a).datagrid("autoSizeColumn"),
            d.onLoadSuccess.call(a, b)
    }
    function setSelectionState(a) {
        function b(a, b) {
            for (var c = 0; c < a.length; c++) if (a[c][d.idField] == b[d.idField]) return a[c] = b,
                !0;
            return !1
        }
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = c.dc;
        if (e.header1.add(e.header2).find("input[type=checkbox]")._propAttr("checked", !1), d.idField) {
            var f = !! $.data(a, "treegrid"),
                g = d.onSelect,
                h = d.onCheck;
            d.onSelect = d.onCheck = function () {};
            for (var i = d.finder.getRows(a), j = 0; j < i.length; j++) {
                var k = i[j],
                    l = f ? k[d.idField] : $(a).datagrid("getRowIndex", k[d.idField]);
                b(c.selectedRows, k) && selectRow(a, l, !0, !0),
                b(c.checkedRows, k) && checkRow(a, l, !0)
            }
            d.onSelect = g,
                d.onCheck = h
        }
    }
    function getRowIndex(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = c.data.rows;
        if ("object" == typeof b) return indexOfArray(e, b);
        for (var f = 0; f < e.length; f++) if (e[f][d.idField] == b) return f;
        return -1
    }
    function getSelectedRows(a) {
        var b = $.data(a, "datagrid"),
            c = b.options;
        b.data;
        if (c.idField) return b.selectedRows;
        var d = [];
        return c.finder.getTr(a, "", "selected", 2).each(function () {
            d.push(c.finder.getRow(a, $(this)))
        }),
            d
    }
    function getCheckedRows(a) {
        var b = $.data(a, "datagrid"),
            c = b.options;
        if (c.idField) return b.checkedRows;
        var d = [];
        return c.finder.getTr(a, "", "checked", 2).each(function () {
            d.push(c.finder.getRow(a, $(this)))
        }),
            d
    }
    function scrollTo(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.dc,
            e = c.options,
            f = e.finder.getTr(a, b);
        if (f.length) {
            if (f.closest("table").hasClass("datagrid-btable-frozen")) return;
            var g = d.view2.children("div.datagrid-header")._outerHeight(),
                h = d.body2,
                i = e.scrollbarSize;
            h[0].offsetHeight && h[0].clientHeight && h[0].offsetHeight <= h[0].clientHeight && (i = 0);
            var j = h.outerHeight(!0) - h.outerHeight(),
                k = f.position().top - g - j;
            k < 0 ? h.scrollTop(h.scrollTop() + k) : k + f._outerHeight() > h.height() - i && h.scrollTop(h.scrollTop() + k + f._outerHeight() - h.height() + i)
        }
    }
    function highlightRow(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options;
        d.finder.getTr(a, c.highlightIndex).removeClass("datagrid-row-over"),
            d.finder.getTr(a, b).addClass("datagrid-row-over"),
            c.highlightIndex = b
    }
    function selectRow(a, b, c, d) {
        var e = $.data(a, "datagrid"),
            f = e.options,
            g = f.finder.getRow(a, b);
        g && 0 != f.onBeforeSelect.apply(a, getArguments(a, [b, g])) && (f.singleSelect && (unselectAll(a, !0), e.selectedRows = []), !c && f.checkOnSelect && checkRow(a, b, !0), f.idField && addArrayItem(e.selectedRows, f.idField, g), f.finder.getTr(a, b).addClass("datagrid-row-selected"), f.onSelect.apply(a, getArguments(a, [b, g])), !d && f.scrollOnSelect && scrollTo(a, b))
    }
    function unselectRow(a, b, c) {
        var d = $.data(a, "datagrid"),
            e = (d.dc, d.options),
            f = e.finder.getRow(a, b);
        f && 0 != e.onBeforeUnselect.apply(a, getArguments(a, [b, f])) && (!c && e.checkOnSelect && uncheckRow(a, b, !0), e.finder.getTr(a, b).removeClass("datagrid-row-selected"), e.idField && removeArrayItem(d.selectedRows, e.idField, f[e.idField]), e.onUnselect.apply(a, getArguments(a, [b, f])))
    }
    function selectAll(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = d.finder.getRows(a),
            f = $.data(a, "datagrid").selectedRows;
        if (!b && d.checkOnSelect && checkAll(a, !0), d.finder.getTr(a, "", "allbody").addClass("datagrid-row-selected"), d.idField) for (var g = 0; g < e.length; g++) addArrayItem(f, d.idField, e[g]);
        d.onSelectAll.call(a, e)
    }
    function unselectAll(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = d.finder.getRows(a),
            f = $.data(a, "datagrid").selectedRows;
        if (!b && d.checkOnSelect && uncheckAll(a, !0), d.finder.getTr(a, "", "selected").removeClass("datagrid-row-selected"), d.idField) for (var g = 0; g < e.length; g++) removeArrayItem(f, d.idField, e[g][d.idField]);
        d.onUnselectAll.call(a, e)
    }
    function checkRow(a, b, c) {
        var d = $.data(a, "datagrid"),
            e = d.options,
            f = e.finder.getRow(a, b);
        if (f && 0 != e.onBeforeCheck.apply(a, getArguments(a, [b, f]))) {
            e.singleSelect && e.selectOnCheck && (uncheckAll(a, !0), d.checkedRows = []),
            !c && e.selectOnCheck && selectRow(a, b, !0);
            var g = e.finder.getTr(a, b).addClass("datagrid-row-checked");
            if (g.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked", !0), g = e.finder.getTr(a, "", "checked", 2), g.length == e.finder.getRows(a).length) {
                var h = d.dc;
                h.header1.add(h.header2).find("input[type=checkbox]")._propAttr("checked", !0)
            }
            e.idField && addArrayItem(d.checkedRows, e.idField, f),
                e.onCheck.apply(a, getArguments(a, [b, f]))
        }
    }
    function uncheckRow(a, b, c) {
        var d = $.data(a, "datagrid"),
            e = d.options,
            f = e.finder.getRow(a, b);
        if (f && 0 != e.onBeforeUncheck.apply(a, getArguments(a, [b, f]))) {
            !c && e.selectOnCheck && unselectRow(a, b, !0);
            var g = e.finder.getTr(a, b).removeClass("datagrid-row-checked");
            g.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked", !1);
            var h = d.dc,
                i = h.header1.add(h.header2);
            i.find("input[type=checkbox]")._propAttr("checked", !1),
            e.idField && removeArrayItem(d.checkedRows, e.idField, f[e.idField]),
                e.onUncheck.apply(a, getArguments(a, [b, f]))
        }
    }
    function checkAll(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = d.finder.getRows(a);
        !b && d.selectOnCheck && selectAll(a, !0);
        var f = c.dc,
            g = f.header1.add(f.header2).find("input[type=checkbox]"),
            h = d.finder.getTr(a, "", "allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
        if (g.add(h)._propAttr("checked", !0), d.idField) for (var i = 0; i < e.length; i++) addArrayItem(c.checkedRows, d.idField, e[i]);
        d.onCheckAll.call(a, e)
    }
    function uncheckAll(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = d.finder.getRows(a);
        !b && d.selectOnCheck && unselectAll(a, !0);
        var f = c.dc,
            g = f.header1.add(f.header2).find("input[type=checkbox]"),
            h = d.finder.getTr(a, "", "checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
        if (g.add(h)._propAttr("checked", !1), d.idField) for (var i = 0; i < e.length; i++) removeArrayItem(c.checkedRows, d.idField, e[i][d.idField]);
        d.onUncheckAll.call(a, e)
    }
    function beginEdit(a, b) {
        var c = $.data(a, "datagrid").options,
            d = c.finder.getTr(a, b),
            e = c.finder.getRow(a, b);
        d.hasClass("datagrid-row-editing") || 0 != c.onBeforeEdit.apply(a, getArguments(a, [b, e])) && (d.addClass("datagrid-row-editing"), createEditor(a, b), fixEditableSize(a), d.find("div.datagrid-editable").each(function () {
            var a = $(this).parent().attr("field"),
                b = $.data(this, "datagrid.editor");
            b.actions.setValue(b.target, e[a])
        }), validateRow(a, b), c.onBeginEdit.apply(a, getArguments(a, [b, e])))
    }
    function endEdit(a, b, c) {
        var d = $.data(a, "datagrid"),
            e = d.options,
            f = d.updatedRows,
            g = d.insertedRows,
            h = e.finder.getTr(a, b),
            i = e.finder.getRow(a, b);
        if (h.hasClass("datagrid-row-editing")) {
            if (!c) {
                if (!validateRow(a, b)) return;
                var j = !1,
                    k = {};
                h.find("div.datagrid-editable").each(function () {
                    var a = $(this).parent().attr("field"),
                        b = $.data(this, "datagrid.editor"),
                        c = $(b.target),
                        d = c.data("textbox") ? c.textbox("textbox") : c;
                    d.is(":focus") && d.triggerHandler("blur");
                    var e = b.actions.getValue(b.target);
                    i[a] !== e && (i[a] = e, j = !0, k[a] = e)
                }),
                j && indexOfArray(g, i) == -1 && indexOfArray(f, i) == -1 && f.push(i),
                    e.onEndEdit.apply(a, getArguments(a, [b, i, k]))
            }
            h.removeClass("datagrid-row-editing"),
                destroyEditor(a, b),
                $(a).datagrid("refreshRow", b),
                c ? e.onCancelEdit.apply(a, getArguments(a, [b, i])) : e.onAfterEdit.apply(a, getArguments(a, [b, i, k]))
        }
    }
    function getEditors(a, b) {
        var c = $.data(a, "datagrid").options,
            d = c.finder.getTr(a, b),
            e = [];
        return d.children("td").each(function () {
            var a = $(this).find("div.datagrid-editable");
            if (a.length) {
                var b = $.data(a[0], "datagrid.editor");
                e.push(b)
            }
        }),
            e
    }
    function getEditor(a, b) {
        for (var c = getEditors(a, void 0 != b.index ? b.index : b.id), d = 0; d < c.length; d++) if (c[d].field == b.field) return c[d];
        return null
    }
    function createEditor(a, b) {
        var c = $.data(a, "datagrid").options,
            d = c.finder.getTr(a, b);
        d.children("td").each(function () {
            var b = $(this).find("div.datagrid-cell"),
                d = $(this).attr("field"),
                e = getColumnOption(a, d);
            if (e && e.editor) {
                var f, g;
                "string" == typeof e.editor ? f = e.editor : (f = e.editor.type, g = e.editor.options);
                var h = c.editors[f];
                if (h) {
                    var i = b.html(),
                        j = b._outerWidth();
                    b.addClass("datagrid-editable"),
                        b._outerWidth(j),
                        b.html('<table border="0" cellspacing="0" cellpadding="1"><tr><td style="text-align:center"></td></tr></table>'),
                        b.children("table").bind("click dblclick contextmenu", function (a) {
                            a.stopPropagation()
                        }),

                        $.data(b[0], "datagrid.editor", {
                            actions: h,
                            target: h.init(b.find("td"), $.extend({
                                height: c.editorHeight
                            }, g)),
                            field: d,
                            type: f,
                            oldHtml: i
                        })
                }
            }
        }),
            fixRowHeight(a, b, !0)
    }
    function destroyEditor(a, b) {
        var c = $.data(a, "datagrid").options,
            d = c.finder.getTr(a, b);
        d.children("td").each(function () {
            var a = $(this).find("div.datagrid-editable");
            if (a.length) {
                var b = $.data(a[0], "datagrid.editor");
                b.actions.destroy && b.actions.destroy(b.target),
                    a.html(b.oldHtml),
                    $.removeData(a[0], "datagrid.editor"),
                    a.removeClass("datagrid-editable"),
                    a.css("width", "")
            }
        })
    }
    function validateRow(a, b) {
        var c = $.data(a, "datagrid").options.finder.getTr(a, b);
        if (!c.hasClass("datagrid-row-editing")) return !0;
        var d = c.find(".validatebox-text");
        d.validatebox("validate"),
            d.trigger("mouseleave");
        var e = c.find(".validatebox-invalid");
        return 0 == e.length
    }
    function getChanges(a, b) {
        var c = $.data(a, "datagrid").insertedRows,
            d = $.data(a, "datagrid").deletedRows,
            e = $.data(a, "datagrid").updatedRows;
        if (!b) {
            var f = [];
            return f = f.concat(c),
                f = f.concat(d),
                f = f.concat(e)
        }
        return "inserted" == b ? c : "deleted" == b ? d : "updated" == b ? e : []
    }
    function deleteRow(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = c.data,
            f = c.insertedRows,
            g = c.deletedRows;
        $(a).datagrid("cancelEdit", b);
        var h = d.finder.getRow(a, b);
        indexOfArray(f, h) >= 0 ? removeArrayItem(f, h) : g.push(h),
            removeArrayItem(c.selectedRows, d.idField, h[d.idField]),
            removeArrayItem(c.checkedRows, d.idField, h[d.idField]),
            d.view.deleteRow.call(d.view, a, b),
        "auto" == d.height && fixRowHeight(a),
            $(a).datagrid("getPager").pagination("refresh", {
                total: e.total
            })
    }
    function insertRow(a, b) {
        var c = $.data(a, "datagrid").data,
            d = $.data(a, "datagrid").options.view,
            e = $.data(a, "datagrid").insertedRows;
        d.insertRow.call(d, a, b.index, b.row),
            e.push(b.row),
            $(a).datagrid("getPager").pagination("refresh", {
                total: c.total
            })
    }
    function appendRow(a, b) {
        var c = $.data(a, "datagrid").data,
            d = $.data(a, "datagrid").options.view,
            e = $.data(a, "datagrid").insertedRows;
        d.insertRow.call(d, a, null, b),
            e.push(b),
            $(a).datagrid("getPager").pagination("refresh", {
                total: c.total
            })
    }
    function updateRow(a, b) {
        var c = $.data(a, "datagrid"),
            d = c.options,
            e = d.finder.getRow(a, b.index),
            f = !1;
        b.row = b.row || {};
        for (var g in b.row) if (e[g] !== b.row[g]) {
            f = !0;
            break
        }
        f && (indexOfArray(c.insertedRows, e) == -1 && indexOfArray(c.updatedRows, e) == -1 && c.updatedRows.push(e), d.view.updateRow.call(d.view, a, b.index, b.row))
    }
    function initChanges(a) {
        for (var b = $.data(a, "datagrid"), c = b.data, d = c.rows, e = [], f = 0; f < d.length; f++) e.push($.extend({}, d[f]));
        b.originalRows = e,
            b.updatedRows = [],
            b.insertedRows = [],
            b.deletedRows = []
    }
    function acceptChanges(a) {
        for (var b = $.data(a, "datagrid").data, c = !0, d = 0, e = b.rows.length; d < e; d++) validateRow(a, d) ? $(a).datagrid("endEdit", d) : c = !1;
        c && initChanges(a)
    }
    function rejectChanges(a) {
        function b(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(a[c][e.idField]);
            return b
        }
        function c(b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = getRowIndex(a, b[d]);
                e >= 0 && ("s" == c ? selectRow : checkRow)(a, e, !0)
            }
        }
        for (var d = $.data(a, "datagrid"), e = d.options, f = d.originalRows, g = d.insertedRows, h = d.deletedRows, i = d.selectedRows, j = d.checkedRows, k = d.data, l = 0; l < k.rows.length; l++) $(a).datagrid("cancelEdit", l);
        var m = b(i),
            n = b(j);
        i.splice(0, i.length),
            j.splice(0, j.length),
            k.total += h.length - g.length,
            k.rows = f,
            loadData(a, k),
            c(m, "s"),
            c(n, "c"),
            initChanges(a)
    }
    /* function request(a, b, c) {
         var d = $.data(a, "datagrid").options;

         b && (d.queryParams = b);
         var e = $.extend({}, d.queryParams);
         if (d.pagination && $.extend(e, {
                 // total: d.pageNumber || 1,
                 // rows: d.pageSize
                 pageNo: d.pageNumber || 1,
                 pageSize: d.pageSize
             }), d.sortName && $.extend(e, {
                 sort: d.sortName,
                 order: d.sortOrder
             }), 0 == d.onBeforeLoad.call(a, e)) return void d.view.setEmptyMsg(a);
         $(a).datagrid("loading");
         var f = d.loader.call(a, e, function (b) {
             ;
             $(a).datagrid("loaded"),
                 $(a).datagrid("loadData", b);

             var e = $(a).datagrid("getPager");
             b.total / d.pageSize > 2 && (d.pageNumber -= 1),
                 e.pagination("refresh", {
                     pageNumber: d.pageNumber,
                     total: b.total
                 }),
             c && c()
         }, function () {
             ;
             $(a).datagrid("loaded"),
                 d.onLoadError.apply(a, arguments)
         });
         0 == f && ($(a).datagrid("loaded"), d.view.setEmptyMsg(a))
     }*/

    function request(a, b, c) {
        var d = $.data(a, "datagrid").options;
        b && (d.queryParams = b);
        var e = $.extend({}, d.queryParams);
        if (d.pagination && $.extend(e, {
            // page: d.pageNumber || 1,
            // rows: d.pageSize
            pageNo: d.pageNumber || 1,
            pageSize: d.pageSize
        }), d.sortName && $.extend(e, {
            sort: d.sortName,
            order: d.sortOrder
        }), 0 == d.onBeforeLoad.call(a, e)) return void d.view.setEmptyMsg(a);
        $(a).datagrid("loading");

        var f = d.loader.call(a, e, function (b) {
            $(a).datagrid("loaded");
            /*  $(a).datagrid({columns: $(a).datagrid('options')['columns'], refresh: false});*/
            $(a).datagrid("loadData", b.data.records, b.data);
            var e = $(a).datagrid("getPager");
            // b.data.total / d.pageSize > 2 && (d.pageNumber -= 1),
            e.pagination("refresh", {
                pageNumber: d.pageNumber,
                total: b.data.total
            }),
            c && c()
        }, function () {
            $(a).datagrid("loaded"),
                d.onLoadError.apply(a, arguments)
        });
        0 == f && ($(a).datagrid("loaded"), d.view.setEmptyMsg(a))
    }
    function mergeCells(a, b) {
        function c(a, b) {
            for (var c = 0; c < b; c++) a.hide(),
                a = a.next()
        }
        var d = $.data(a, "datagrid").options;
        if (b.type = b.type || "body", b.rowspan = b.rowspan || 1, b.colspan = b.colspan || 1, 1 != b.rowspan || 1 != b.colspan) {
            var e = d.finder.getTr(a, void 0 != b.index ? b.index : b.id, b.type);
            if (e.length) {
                var f = e.find('td[field="' + b.field + '"]');
                f.attr("rowspan", b.rowspan).attr("colspan", b.colspan),
                    f.addClass("datagrid-td-merged"),
                    c(f.next(), b.colspan - 1);
                for (var g = 1; g < b.rowspan && (e = e.next(), e.length); g++) c(e.find('td[field="' + b.field + '"]'), b.colspan);
                fixMergedSize(a, f)
            }
        }
    }
    function getDefaultEditors(a) {
        function b(a) {
            function b(b) {
                return void 0 != $.data($(b)[0], a)
            }
            return {
                init: function (b, c) {
                    var d = $('<input type="text" class="datagrid-editable-input">').appendTo(b);
                    return d[a] && "text" != a ? d[a](c) : d
                },
                destroy: function (c) {
                    b(c, a) && $(c)[a]("destroy")
                },
                getValue: function (c) {
                    if (b(c, a)) {
                        var d = $(c)[a]("options");
                        return d.multiple ? $(c)[a]("getValues").join(d.separator) : $(c)[a]("getValue")
                    }
                    return $(c).val()
                },
                setValue: function (c, d) {
                    if (b(c, a)) {
                        var e = $(c)[a]("options");
                        e.multiple ? d ? $(c)[a]("setValues", d.split(e.separator)) : $(c)[a]("clear") : $(c)[a]("setValue", d)
                    } else $(c).val(d)
                },
                resize: function (c, d) {
                    b(c, a) ? $(c)[a]("resize", d) : $(c)._size({
                        width: d,
                        height: $.fn.datagrid.defaults.editorHeight
                    })
                }
            }
        }
        var c = {};
        return $.map(a, function (a) {
            c[a] = b(a)
        }),
            c
    }
    var DATAGRID_SERNO = 0;
    $.fn.datagrid = function (a, b, page) {
        return "string" == typeof a ? $.fn.datagrid.methods[a](this, b, page) : (a = a || {}, this.each(function () {
            var b, c = $.data(this, "datagrid");
            if (c)
                b = $.extend(c.options, a), c.options = b;
            else {
                b = $.extend({}, $.extend({}, $.fn.datagrid.defaults, {
                    queryParams: {}
                }), $.fn.datagrid.parseOptions(this), a),
                    $(this).css("width", "").css("height", "");
                var d = wrapGrid(this, b.rownumbers);
                b.columns || (b.columns = d.columns),
                b.frozenColumns || (b.frozenColumns = d.frozenColumns),
                    b.columns = $.extend(!0, [], b.columns),
                    b.frozenColumns = $.extend(!0, [], b.frozenColumns),
                    b.view = $.extend({}, b.view),
                    $.data(this, "datagrid", {
                        options: b,
                        panel: d.panel,
                        dc: d.dc,
                        ss: null,
                        selectedRows: [],
                        checkedRows: [],
                        data: {
                            total: 0,
                            rows: []
                        },
                        originalRows: [],
                        updatedRows: [],
                        insertedRows: [],
                        deletedRows: []
                    })
            }

            if (buildGrid(this), bindEvents(this), setSize(this), b.data) $(this).datagrid("loadData", b.data);
            else {
                var e = $.fn.datagrid.parseData(this);
                e.total > 0 ? $(this).datagrid("loadData", e) : $(this).datagrid("autoSizeColumn")
            }
            if (b && b.refresh!=false) request(this)
        }))
    };
    var editors = $.extend({}, getDefaultEditors(["text", "textbox", "passwordbox", "filebox", "numberbox", "numberspinner", "combobox", "combotree", "combogrid", "combotreegrid", "datebox", "datetimebox", "timespinner", "datetimespinner"]), {
        textarea: {
            init: function (a, b) {
                var c = $('<textarea class="datagrid-editable-input"></textarea>').appendTo(a);
                return c.css("vertical-align", "middle")._outerHeight(b.height),
                    c
            },
            getValue: function (a) {
                return $(a).val()
            },
            setValue: function (a, b) {
                $(a).val(b)
            },
            resize: function (a, b) {
                $(a)._outerWidth(b)
            }
        },
        checkbox: {
            init: function (a, b) {
                var c = $('<input type="checkbox">').appendTo(a);
                return c.val(b.on),
                    c.attr("offval", b.off),
                    c
            },
            getValue: function (a) {
                return $(a).is(":checked") ? $(a).val() : $(a).attr("offval")
            },
            setValue: function (a, b) {
                var c = !1;
                $(a).val() == b && (c = !0),
                    $(a)._propAttr("checked", c)
            }
        },
        validatebox: {
            init: function (a, b) {
                var c = $('<input type="text" class="datagrid-editable-input">').appendTo(a);
                return c.validatebox(b),
                    c
            },
            destroy: function (a) {
                $(a).validatebox("destroy")
            },
            getValue: function (a) {
                return $(a).val()
            },
            setValue: function (a, b) {
                $(a).val(b)
            },
            resize: function (a, b) {
                $(a)._outerWidth(b)._outerHeight($.fn.datagrid.defaults.editorHeight)
            }
        }
    });
    $.fn.datagrid.methods = {
        options: function (a) {
            var b = $.data(a[0], "datagrid").options,
                c = $.data(a[0], "datagrid").panel.panel("options"),
                d = $.extend(b, {
                    width: c.width,
                    height: c.height,
                    closed: c.closed,
                    collapsed: c.collapsed,
                    minimized: c.minimized,
                    maximized: c.maximized
                });
            return d
        },
        setSelectionState: function (a) {
            return a.each(function () {
                setSelectionState(this)
            })
        },
        createStyleSheet: function (a) {
            return createStyleSheet(a[0])
        },
        getPanel: function (a) {
            return $.data(a[0], "datagrid").panel
        },
        getPager: function (a) {
            return $.data(a[0], "datagrid").panel.children("div.datagrid-pager")
        },
        getColumnFields: function (a, b) {
            return getColumnFields(a[0], b)
        },
        getColumnOption: function (a, b) {
            return getColumnOption(a[0], b)
        },
        resize: function (a, b) {
            return a.each(function () {
                setSize(this, b)
            })
        },
        load: function (a, b) {
            return a.each(function () {
                var a = $(this).datagrid("options");
                "string" == typeof b && (a.url = b, b = null),
                    a.pageNumber = 1;
                var c = $(this).datagrid("getPager");
                c.pagination("refresh", {
                    pageNumber: 1
                }),
                    request(this, b)
            })
        },
        reload: function (a, b) {
            return a.each(function () {
                var a = $(this).datagrid("options");
                "string" == typeof b && (a.url = b, b = null),
                    request(this, b)
            })
        },
        reloadFooter: function (a, b) {
            return a.each(function () {
                var a = $.data(this, "datagrid").options,
                    c = $.data(this, "datagrid").dc;
                b && ($.data(this, "datagrid").footer = b),
                a.showFooter && (a.view.renderFooter.call(a.view, this, c.footer2, !1), a.view.renderFooter.call(a.view, this, c.footer1, !0), a.view.onAfterRender && a.view.onAfterRender.call(a.view, this), $(this).datagrid("fixRowHeight"))
            })
        },
        loading: function (a) {
            return a.each(function () {
                var a = $.data(this, "datagrid").options;
                if ($(this).datagrid("getPager").pagination("loading"), a.loadMsg) {
                    var b = $(this).datagrid("getPanel");
                    if (!b.children("div.datagrid-mask").length) {
                        $('<div class="datagrid-mask" style="display:block"></div>').appendTo(b);
                        var c = $('<div class="datagrid-mask-msg" style="display:block;left:50%"></div>').html(a.loadMsg).appendTo(b);
                        c._outerHeight(40),
                            c.css({
                                marginLeft: -c.outerWidth() / 2,
                                lineHeight: c.height() + "px"
                            })
                    }
                }
            })
        },
        loaded: function (a) {
            return a.each(function () {
                $(this).datagrid("getPager").pagination("loaded");
                var a = $(this).datagrid("getPanel");
                a.children("div.datagrid-mask-msg").remove(),
                    a.children("div.datagrid-mask").remove()
            })
        },
        fitColumns: function (a) {
            return a.each(function () {
                fitColumns(this)
            })
        },
        fixColumnSize: function (a, b) {
            return a.each(function () {
                fixColumnSize(this, b)
            })
        },
        fixRowHeight: function (a, b) {
            return a.each(function () {
                fixRowHeight(this, b)
            })
        },
        freezeRow: function (a, b) {
            return a.each(function () {
                freezeRow(this, b)
            })
        },
        autoSizeColumn: function (a, b) {
            return a.each(function () {
                autoSizeColumn(this, b)
            })
        },
        loadData: function (a, b, page) {
            return a.each(function () {
                loadData(this, b, page),
                    initChanges(this)
            })
        },
        getData: function (a) {
            return $.data(a[0], "datagrid").data
        },
        getRows: function (a) {
            return $.data(a[0], "datagrid").data.rows
        },
        getFooterRows: function (a) {
            return $.data(a[0], "datagrid").footer
        },
        getRowIndex: function (a, b) {
            return getRowIndex(a[0], b)
        },
        getChecked: function (a) {
            return getCheckedRows(a[0])
        },
        getSelected: function (a) {
            var b = getSelectedRows(a[0]);
            return b.length > 0 ? b[0] : null
        },
        getSelections: function (a) {
            return getSelectedRows(a[0])
        },
        clearSelections: function (a) {
            return a.each(function () {
                var a = $.data(this, "datagrid"),
                    b = a.selectedRows,
                    c = a.checkedRows;
                b.splice(0, b.length),
                    unselectAll(this),
                a.options.checkOnSelect && c.splice(0, c.length)
            })
        },
        clearChecked: function (a) {
            return a.each(function () {
                var a = $.data(this, "datagrid"),
                    b = a.selectedRows,
                    c = a.checkedRows;
                c.splice(0, c.length),
                    uncheckAll(this),
                a.options.selectOnCheck && b.splice(0, b.length)
            })
        },
        scrollTo: function (a, b) {
            return a.each(function () {
                scrollTo(this, b)
            })
        },
        highlightRow: function (a, b) {
            return a.each(function () {
                highlightRow(this, b),
                    scrollTo(this, b)
            })
        },
        selectAll: function (a) {
            return a.each(function () {
                selectAll(this)
            })
        },
        unselectAll: function (a) {
            return a.each(function () {
                unselectAll(this)
            })
        },
        selectRow: function (a, b) {
            return a.each(function () {
                selectRow(this, b)
            })
        },
        selectRecord: function (a, b) {
            return a.each(function () {
                var a = $.data(this, "datagrid").options;
                if (a.idField) {
                    var c = getRowIndex(this, b);
                    c >= 0 && $(this).datagrid("selectRow", c)
                }
            })
        },
        unselectRow: function (a, b) {
            return a.each(function () {
                unselectRow(this, b)
            })
        },
        checkRow: function (a, b) {
            return a.each(function () {
                checkRow(this, b)
            })
        },
        uncheckRow: function (a, b) {
            return a.each(function () {
                uncheckRow(this, b)
            })
        },
        checkAll: function (a) {
            return a.each(function () {
                checkAll(this)
            })
        },
        uncheckAll: function (a) {
            return a.each(function () {
                uncheckAll(this)
            })
        },
        beginEdit: function (a, b) {
            return a.each(function () {
                beginEdit(this, b)
            })
        },
        endEdit: function (a, b) {
            return a.each(function () {
                endEdit(this, b, !1)
            })
        },
        cancelEdit: function (a, b) {
            return a.each(function () {
                endEdit(this, b, !0)
            })
        },
        getEditors: function (a, b) {
            return getEditors(a[0], b)
        },
        getEditor: function (a, b) {
            return getEditor(a[0], b)
        },
        refreshRow: function (a, b) {
            return a.each(function () {
                var a = $.data(this, "datagrid").options;
                a.view.refreshRow.call(a.view, this, b)
            })
        },
        validateRow: function (a, b) {
            return validateRow(a[0], b)
        },
        updateRow: function (a, b) {
            return a.each(function () {
                updateRow(this, b)
            })
        },
        appendRow: function (a, b) {
            return a.each(function () {
                appendRow(this, b)
            })
        },
        insertRow: function (a, b) {
            return a.each(function () {
                insertRow(this, b)
            })
        },
        deleteRow: function (a, b) {
            return a.each(function () {
                deleteRow(this, b)
            })
        },
        getChanges: function (a, b) {
            return getChanges(a[0], b)
        },
        acceptChanges: function (a) {
            return a.each(function () {
                acceptChanges(this)
            })
        },
        rejectChanges: function (a) {
            return a.each(function () {
                rejectChanges(this)
            })
        },
        mergeCells: function (a, b) {
            return a.each(function () {
                mergeCells(this, b)
            })
        },
        showColumn: function (a, b) {
            return a.each(function () {
                var a = $(this).datagrid("getColumnOption", b);
                a.hidden && (a.hidden = !1, $(this).datagrid("getPanel").find('td[field="' + b + '"]').show(), fixColumnSpan(this, b, 1), $(this).datagrid("fitColumns"))
            })
        },
        hideColumn: function (a, b) {
            return a.each(function () {
                var a = $(this).datagrid("getColumnOption", b);
                a.hidden || (a.hidden = !0, $(this).datagrid("getPanel").find('td[field="' + b + '"]').hide(), fixColumnSpan(this, b, -1), $(this).datagrid("fitColumns"))
            })
        },
        sort: function (a, b) {
            return a.each(function () {
                sortGrid(this, b)
            })
        },
        gotoPage: function (a, b) {
            return a.each(function () {
                var a, c, d = this;
                "object" == typeof b ? (a = b.page, c = b.callback) : a = b,
                    $(d).datagrid("options").pageNumber = a,
                    $(d).datagrid("getPager").pagination("refresh", {
                        pageNumber: a
                    }),
                    request(d, null, function () {
                        c && c.call(d, a)
                    })
            })
        }
    },
        $.fn.datagrid.parseOptions = function (target) {
            var t = $(target);
            return $.extend({}, $.fn.panel.parseOptions(target), $.parser.parseOptions(target, ["url", "toolbar", "idField", "sortName", "sortOrder", "pagePosition", "resizeHandle", {
                sharedStyleSheet: "boolean",
                fitColumns: "boolean",
                autoRowHeight: "boolean",
                striped: "boolean",
                nowrap: "boolean"
            },
                {
                    rownumbers: "boolean",
                    singleSelect: "boolean",
                    ctrlSelect: "boolean",
                    checkOnSelect: "boolean",
                    selectOnCheck: "boolean"
                },
                {
                    pagination: "boolean",
                    pageSize: "number",
                    pageNumber: "number"
                },
                {
                    multiSort: "boolean",
                    remoteSort: "boolean",
                    showHeader: "boolean",
                    showFooter: "boolean"
                },
                {
                    scrollbarSize: "number",
                    scrollOnSelect: "boolean"
                }]), {
                pageList: t.attr("pageList") ? eval(t.attr("pageList")) : void 0,
                loadMsg: void 0 != t.attr("loadMsg") ? t.attr("loadMsg") : void 0,
                rowStyler: t.attr("rowStyler") ? eval(t.attr("rowStyler")) : void 0
            })
        },
        $.fn.datagrid.parseData = function (a) {
            var b = $(a),
                c = {
                    total: 0,
                    rows: []
                },
                d = b.datagrid("getColumnFields", !0).concat(b.datagrid("getColumnFields", !1));
            return b.find("tbody tr").each(function () {
                c.total++;
                var a = {};
                $.extend(a, $.parser.parseOptions(this, ["iconCls", "state"]));
                for (var b = 0; b < d.length; b++) a[d[b]] = $(this).find("td:eq(" + b + ")").html();
                c.rows.push(a)
            }),
                c
        };
    var defaultView = {
        render: function (a, b, c) {
            var d = $(a).datagrid("getRows");
            $(b).empty().html(this.renderTable(a, 0, d, c))
        },
        renderFooter: function (a, b, c) {
            for (var d = ($.data(a, "datagrid").options, $.data(a, "datagrid").footer || []), e = $(a).datagrid("getColumnFields", c), f = ['<table class="datagrid-ftable" cellspacing="0" cellpadding="0" border="0"><tbody>'], g = 0; g < d.length; g++) f.push('<tr class="datagrid-row" datagrid-row-index="' + g + '">'),
                f.push(this.renderRow.call(this, a, e, c, g, d[g])),
                f.push("</tr>");
            f.push("</tbody></table>"),
                $(b).html(f.join(""))
        },
        renderTable: function (a, b, c, d) {
            var e = $.data(a, "datagrid"),
                f = e.options;
            if (d && !(f.rownumbers || f.frozenColumns && f.frozenColumns.length)) return "";
            for (var g = $(a).datagrid("getColumnFields", d), h = ['<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>'], i = 0; i < c.length; i++) {
                var j = c[i],
                    k = f.rowStyler ? f.rowStyler.call(a, b, j) : "",
                    l = this.getStyleValue(k),
                    m = 'class="datagrid-row ' + (b % 2 && f.striped ? "datagrid-row-alt " : " ") + l.c + '"',
                    n = l.s ? 'style="' + l.s + '"' : "",
                    o = e.rowIdPrefix + "-" + (d ? 1 : 2) + "-" + b;
                h.push('<tr id="' + o + '" datagrid-row-index="' + b + '" ' + m + " " + n + ">"),
                    h.push(this.renderRow.call(this, a, g, d, b, j)),
                    h.push("</tr>"),
                    b++
            }
            return h.push("</tbody></table>"),
                h.join("")
        },
        renderRow: function (a, b, c, d, e) {
            var f = $.data(a, "datagrid").options,
                g = [];
            if (c && f.rownumbers) {
                var h = d + 1;
                f.pagination && (h += (f.pageNumber - 1) * f.pageSize),
                    g.push('<td class="datagrid-td-rownumber"><div class="datagrid-cell-rownumber">' + h + "</div></td>")
            }
            for (var i = 0; i < b.length; i++) {
                var j = b[i],
                    k = $(a).datagrid("getColumnOption", j);
                if (k) {
                    var l = e[j],
                        m = k.styler ? k.styler.call(a, l, e, d) || "" : "",
                        n = this.getStyleValue(m),
                        o = n.c ? 'class="' + n.c + '"' : "",
                        p = k.hidden ? 'style="display:none;' + n.s + '"' : n.s ? 'style="' + n.s + '"' : "";
                    g.push('<td field="' + j + '" ' + o + " " + p + ">");
                    var p = "";
                    k.checkbox || (k.align && (p += "text-align:" + k.align + ";"), f.nowrap ? f.autoRowHeight && (p += "height:auto;") : p += "white-space:normal;height:auto;"),
                        g.push('<div style="' + p + '" '),
                        g.push(k.checkbox ? 'class="datagrid-cell-check"' : 'class="datagrid-cell ' + k.cellClass + '"'),
                        g.push(">"),
                        k.checkbox ? (g.push('<input type="checkbox" ' + (e.checked ? 'checked="checked"' : "")), g.push(' name="' + j + '" value="' + (void 0 != l ? l : "") + '">')) : k.formatter ? g.push(k.formatter(l, e, d)) : g.push(l),
                        g.push("</div>"),
                        g.push("</td>")
                }
            }
            return g.join("")
        },
        getStyleValue: function (a) {
            var b = "",
                c = "";
            return "string" == typeof a ? c = a : a && (b = a.class || "", c = a.style || ""),
                {
                    c: b,
                    s: c
                }
        },
        refreshRow: function (a, b) {
            this.updateRow.call(this, a, b, {})
        },
        updateRow: function (a, b, c) {
            function d(b) {
                var c = f.rowStyler ? f.rowStyler.call(a, b, g) : "";
                return this.getStyleValue(c)
            }
            function e(c) {
                var d = f.finder.getTr(a, b, "body", c ? 1 : 2);
                if (d.length) {
                    var e = $(a).datagrid("getColumnFields", c),
                        h = d.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
                    d.html(this.renderRow.call(this, a, e, c, b, g));
                    var k = (d.hasClass("datagrid-row-checked") ? " datagrid-row-checked" : "") + (d.hasClass("datagrid-row-selected") ? " datagrid-row-selected" : "");
                    d.attr("style", i).attr("class", j + k),
                    h && d.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked", !0)
                }
            }
            var f = $.data(a, "datagrid").options,
                g = f.finder.getRow(a, b);
            $.extend(g, c);
            var h = d.call(this, b),
                i = h.s,
                j = "datagrid-row " + (b % 2 && f.striped ? "datagrid-row-alt " : " ") + h.c;
            e.call(this, !0),
                e.call(this, !1),
                $(a).datagrid("fixRowHeight", b)
        },
        insertRow: function (a, b, c) {
            function d(c) {
                for (var d = c ? 1 : 2, e = i.rows.length - 1; e >= b; e--) {
                    var h = g.finder.getTr(a, e, "body", d);
                    if (h.attr("datagrid-row-index", e + 1), h.attr("id", f.rowIdPrefix + "-" + d + "-" + (e + 1)), c && g.rownumbers) {
                        var j = e + 2;
                        g.pagination && (j += (g.pageNumber - 1) * g.pageSize),
                            h.find("div.datagrid-cell-rownumber").html(j)
                    }
                    g.striped && h.removeClass("datagrid-row-alt").addClass((e + 1) % 2 ? "datagrid-row-alt" : "")
                }
            }
            function e(c) {
                var d = c ? 1 : 2,
                    e = ($(a).datagrid("getColumnFields", c), f.rowIdPrefix + "-" + d + "-" + b),
                    j = '<tr id="' + e + '" class="datagrid-row" datagrid-row-index="' + b + '"></tr>';
                if (b >= i.rows.length) if (i.rows.length) g.finder.getTr(a, "", "last", d).after(j);
                else {
                    var k = c ? h.body1 : h.body2;
                    k.html('<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>' + j + "</tbody></table>")
                } else g.finder.getTr(a, b + 1, "body", d).before(j)
            }
            var f = $.data(a, "datagrid"),
                g = f.options,
                h = f.dc,
                i = f.data;
            void 0 != b && null != b || (b = i.rows.length),
            b > i.rows.length && (b = i.rows.length),
                d.call(this, !0),
                d.call(this, !1),
                e.call(this, !0),
                e.call(this, !1),
                i.total += 1,
                i.rows.splice(b, 0, c),
                this.setEmptyMsg(a),
                this.refreshRow.call(this, a, b)
        },
        deleteRow: function (a, b) {
            function c(c) {
                for (var g = c ? 1 : 2, h = b + 1; h < f.rows.length; h++) {
                    var i = e.finder.getTr(a, h, "body", g);
                    if (i.attr("datagrid-row-index", h - 1), i.attr("id", d.rowIdPrefix + "-" + g + "-" + (h - 1)), c && e.rownumbers) {
                        var j = h;
                        e.pagination && (j += (e.pageNumber - 1) * e.pageSize),
                            i.find("div.datagrid-cell-rownumber").html(j)
                    }
                    e.striped && i.removeClass("datagrid-row-alt").addClass((h - 1) % 2 ? "datagrid-row-alt" : "")
                }
            }
            var d = $.data(a, "datagrid"),
                e = d.options,
                f = d.data;
            e.finder.getTr(a, b).remove(),
                c.call(this, !0),
                c.call(this, !1),
                f.total -= 1,
                f.rows.splice(b, 1),
                this.setEmptyMsg(a)
        },
        onBeforeRender: function (a, b) {},
        onAfterRender: function (a) {
            var b = $.data(a, "datagrid"),
                c = b.options;
            if (c.showFooter) {
                var d = $(a).datagrid("getPanel").find("div.datagrid-footer");
                d.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility", "hidden")
            }
            this.setEmptyMsg(a)
        },
        setEmptyMsg: function (a) {
            var b = $.data(a, "datagrid"),
                c = b.options,
                d = 0 == c.finder.getRows(a).length;
            if (d && this.renderEmptyRow(a), c.emptyMsg && (b.dc.view.children(".datagrid-empty").remove(), d)) {
                var e = b.dc.header2.parent().outerHeight(),
                    f = $('<div class="datagrid-empty"></div>').appendTo(b.dc.view);
                f.html(c.emptyMsg).css("top", e + "px")
            }
        },
        renderEmptyRow: function (a) {
            var b = $.map($(a).datagrid("getColumnFields"), function (b) {
                return $(a).datagrid("getColumnOption", b)
            });
            $.map(b, function (a) {
                a.formatter1 = a.formatter,
                    a.styler1 = a.styler,
                    a.formatter = a.styler = void 0
            });
            var c = $.data(a, "datagrid").dc.body2;
            c.html(this.renderTable(a, 0, [{}], !1)),
                c.find("tbody *").css({
                    height: 1,
                    borderColor: "transparent",
                    background: "transparent"
                });
            var d = c.find(".datagrid-row");
            d.removeClass("datagrid-row").removeAttr("datagrid-row-index"),
                d.find(".datagrid-cell,.datagrid-cell-check").empty(),
                $.map(b, function (a) {
                    a.formatter = a.formatter1,
                        a.styler = a.styler1,
                        a.formatter1 = a.styler1 = void 0
                })
        }
    };
    $.fn.datagrid.defaults = $.extend({}, $.fn.panel.defaults, {
        sharedStyleSheet: !1,
        frozenColumns: void 0,
        columns: void 0,
        fitColumns: !1,
        resizeHandle: "right",
        resizeEdge: 5,
        autoRowHeight: !0,
        toolbar: null,
        striped: !1,
        method: "post",
        nowrap: !0,
        idField: null,
        url: null,
        data: null,
        loadMsg: "Processing, please wait ...",
        emptyMsg: "",
        rownumbers: !1,
        singleSelect: !1,
        ctrlSelect: !1,
        selectOnCheck: !0,
        checkOnSelect: !0,
        pagination: !1,
        pagePosition: "bottom",
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 20, 30, 40, 50,5],
        queryParams: {},
        sortName: null,
        sortOrder: "asc",
        multiSort: !1,
        remoteSort: !0,
        showHeader: !0,
        showFooter: !1,
        scrollOnSelect: !0,
        scrollbarSize: 18,
        rownumberWidth: 30,
        editorHeight: 24,
        headerEvents: {
            mouseover: headerOverEventHandler(!0),
            mouseout: headerOverEventHandler(!1),
            click: headerClickEventHandler,
            dblclick: headerDblclickEventHandler,
            contextmenu: headerMenuEventHandler
        },
        rowEvents: {
            mouseover: hoverEventHandler(!0),
            mouseout: hoverEventHandler(!1),
            click: clickEventHandler,
            dblclick: dblclickEventHandler,
            contextmenu: contextmenuEventHandler
        },
        rowStyler: function (a, b) {},
        loader: function (a, b, c) {
            var d = $(this).datagrid("options");
            var url=d.url;
            if ( a!=null ){
                if ( typeof  a == 'object' ){
                    if(a.url&&a.url!=''){
                        url=a.url;
                    }
                    a = JSON.stringify(a);
                }
            }

            return !!d.url && void $.ajax({
                type: d.method,
                url: url,
                data: a,
                dataType: "json",
                contentType : 'application/json;charset=UTF-8',
                success: function (a) {
                    b(a)
                },
                error: function () {
                    c.apply(this, arguments)
                }
            })
        },
        loadFilter: function (a) {
            return a
        },
        editors: editors,
        finder: {
            getTr: function (a, b, c, d) {
                c = c || "body",
                    d = d || 0;
                var e = $.data(a, "datagrid"),
                    f = e.dc,
                    g = e.options;
                if (0 == d) {
                    var h = g.finder.getTr(a, b, c, 1),
                        i = g.finder.getTr(a, b, c, 2);
                    return h.add(i)
                }
                if ("body" == c) {
                    var j = $("#" + e.rowIdPrefix + "-" + d + "-" + b);
                    return j.length || (j = (1 == d ? f.body1 : f.body2).find(">table>tbody>tr[datagrid-row-index=" + b + "]")),
                        j
                }
                return "footer" == c ? (1 == d ? f.footer1 : f.footer2).find(">table>tbody>tr[datagrid-row-index=" + b + "]") : "selected" == c ? (1 == d ? f.body1 : f.body2).find(">table>tbody>tr.datagrid-row-selected") : "highlight" == c ? (1 == d ? f.body1 : f.body2).find(">table>tbody>tr.datagrid-row-over") : "checked" == c ? (1 == d ? f.body1 : f.body2).find(">table>tbody>tr.datagrid-row-checked") : "editing" == c ? (1 == d ? f.body1 : f.body2).find(">table>tbody>tr.datagrid-row-editing") : "last" == c ? (1 == d ? f.body1 : f.body2).find(">table>tbody>tr[datagrid-row-index]:last") : "allbody" == c ? (1 == d ? f.body1 : f.body2).find(">table>tbody>tr[datagrid-row-index]") : "allfooter" == c ? (1 == d ? f.footer1 : f.footer2).find(">table>tbody>tr[datagrid-row-index]") : void 0
            },
            getRow: function (a, b) {
                var c = "object" == typeof b ? b.attr("datagrid-row-index") : b;
                return $.data(a, "datagrid").data.rows[parseInt(c)]
            },
            getRows: function (a) {
                return $(a).datagrid("getRows")
            }
        },
        view: defaultView,
        onBeforeLoad: function (a) {},
        onLoadSuccess: function () {},
        onLoadError: function () {},
        onClickRow: function (a, b) {},
        onDblClickRow: function (a, b) {},
        onClickCell: function (a, b, c) {},
        onDblClickCell: function (a, b, c) {},
        onBeforeSortColumn: function (a, b) {},
        onSortColumn: function (a, b) {},
        onResizeColumn: function (a, b) {},
        onBeforeSelect: function (a, b) {},
        onSelect: function (a, b) {},
        onBeforeUnselect: function (a, b) {},
        onUnselect: function (a, b) {},
        onSelectAll: function (a) {},
        onUnselectAll: function (a) {},
        onBeforeCheck: function (a, b) {},
        onCheck: function (a, b) {},
        onBeforeUncheck: function (a, b) {},
        onUncheck: function (a, b) {},
        onCheckAll: function (a) {},
        onUncheckAll: function (a) {},
        onBeforeEdit: function (a, b) {},
        onBeginEdit: function (a, b) {},
        onEndEdit: function (a, b, c) {},
        onAfterEdit: function (a, b, c) {},
        onCancelEdit: function (a, b) {},
        onHeaderContextMenu: function (a, b) {},
        onRowContextMenu: function (a, b, c) {},
        onBeforeDrag: function(row){},	// return false to deny drag
        onStartDrag: function(row){},
        onStopDrag: function(row){},
        onDragEnter: function(targetRow, sourceRow){},	// return false to deny drop
        onDragOver: function(targetRow, sourceRow){},	// return false to deny drop
        onDragLeave: function(targetRow, sourceRow){},
        onBeforeDrop: function(targetRow, sourceRow, point){},
        onDrop: function(targetRow, sourceRow, point){},	// point:'append','top','bottom'
    })

})(jQuery);
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