(function (a) {
    'use strict';
    function b(b) {
        var d = a.data(b, "treegrid"),
            e = d.options;
        a(b).datagrid(a.extend({}, e, {
            url: null,
            data: null,
            loader: function () {
                return !1
            },
            onBeforeLoad: function () {
                return !1
            },
            onLoadSuccess: function () {},
            onResizeColumn: function (a, d) {
                c(b),
                    e.onResizeColumn.call(b, a, d)
            },
            onBeforeSortColumn: function (a, c) {
                if (0 == e.onBeforeSortColumn.call(b, a, c)) return !1
            },
            onSortColumn: function (c, d) {
                if (e.sortName = c, e.sortOrder = d, e.remoteSort) p(b);
                else {
                    var f = a(b).treegrid("getData");
                    o(b, null, f)
                }
                e.onSortColumn.call(b, c, d)
            },
            onClickCell: function (a, c) {
                e.onClickCell.call(b, c, v(b, a))
            },
            onDblClickCell: function (a, c) {
                e.onDblClickCell.call(b, c, v(b, a))
            },
            onRowContextMenu: function (a, c) {
                e.onContextMenu.call(b, a, v(b, c))
            }
        }));
        var f = a.data(b, "datagrid").options;
        if (e.columns = f.columns, e.frozenColumns = f.frozenColumns, d.dc = a.data(b, "datagrid").dc, e.pagination) {
            var g = a(b).datagrid("getPager");
            g.pagination({
                pageNumber: e.pageNumber,
                pageSize: e.pageSize,
                pageList: e.pageList,
                onSelectPage: function (a, c) {
                    e.pageNumber = a,
                        e.pageSize = c,
                        p(b)
                }
            }),
                e.pageSize = g.pagination("options").pageSize
        }
    }

    function c(b, c) {
        function d(a) {
            var c = e.finder.getTr(b, a, "body", 1),
                d = e.finder.getTr(b, a, "body", 2);
            c.css("height", ""),
                d.css("height", "");
            var f = Math.max(c.height(), d.height());
            c.css("height", f),
                d.css("height", f)
        }
        var e = a.data(b, "datagrid").options,
            f = a.data(b, "datagrid").dc;
        if (!f.body1.is(":empty") && (!e.nowrap || e.autoRowHeight) && void 0 != c) for (var g = t(b, c), h = 0; h < g.length; h++) d(g[h][e.idField]);
        a(b).datagrid("fixRowHeight", c)
    }
    function d(b) {
        var c = a.data(b, "datagrid").dc,
            d = a.data(b, "treegrid").options;
        d.rownumbers && c.body1.find("div.datagrid-cell-rownumber").each(function (b) {
            a(this).html(b + 1)
        })
    }
    function e(b) {
        return function (c) {
            a.fn.datagrid.defaults.rowEvents[b ? "mouseover" : "mouseout"](c);
            var d = a(c.target),
                e = b ? "addClass" : "removeClass";
            d.hasClass("tree-hit") && (d.hasClass("tree-expanded") ? d[e]("tree-expanded-hover") : d[e]("tree-collapsed-hover"))
        }
    }
    function f(b) {
        var c = a(b.target),
            d = c.closest("tr.datagrid-row");
        if (d.length && d.parent().length) {
            var e = d.attr("node-id"),
                f = g(d);
            if (c.hasClass("tree-hit")) y(f, e);
            else if (c.hasClass("tree-checkbox")) h(f, e);
            else {
                var i = a(f).datagrid("options");
                if (c.parent().hasClass("datagrid-cell-check") || i.singleSelect || !b.shiftKey) a.fn.datagrid.defaults.rowEvents.click(b);
                else {
                    var j = a(f).treegrid("getChildren"),
                        k = a.easyui.indexOfArray(j, i.idField, i.lastSelectedIndex),
                        l = a.easyui.indexOfArray(j, i.idField, e),
                        m = Math.min(Math.max(k, 0), l),
                        n = Math.max(k, l),
                        o = j[l],
                        p = c.closest("td[field]", d);
                    if (p.length) {
                        var q = p.attr("field");
                        i.onClickCell.call(f, e, q, o[q])
                    }
                    a(f).treegrid("clearSelections");
                    for (var r = m; r <= n; r++) a(f).treegrid("selectRow", j[r][i.idField]);
                    i.onClickRow.call(f, o)
                }
            }
        }
    }
    function g(b) {
        return a(b).closest("div.datagrid-view").children(".datagrid-f")[0]
    }
    function h(b, c, d, e) {
        var f = a.data(b, "treegrid"),
            g = (f.checkedRows, f.options);
        if (g.checkbox) {
            var h = v(b, c);
            if (h.checkState) {
                var l = g.finder.getTr(b, c),
                    m = l.find(".tree-checkbox");
                if (void 0 == d && (m.hasClass("tree-checkbox1") ? d = !1 : m.hasClass("tree-checkbox0") ? d = !0 : (void 0 == h._checked && (h._checked = m.hasClass("tree-checkbox1")), d = !h._checked)), h._checked = d, d) {
                    if (m.hasClass("tree-checkbox1")) return
                } else if (m.hasClass("tree-checkbox0")) return;
                (e || 0 != g.onBeforeCheckNode.call(b, h, d)) && (g.cascadeCheck ? (j(b, h, d), k(b, h)) : i(b, h, d ? "1" : "0"), e || g.onCheckNode.call(b, h, d))
            }
        }
    }
    function i(b, c, d) {
        var e = a.data(b, "treegrid"),
            f = e.checkedRows,
            g = e.options;
        if (c.checkState && void 0 != d) {
            var h = g.finder.getTr(b, c[g.idField]),
                i = h.find(".tree-checkbox");
            i.length && (c.checkState = ["unchecked", "checked", "indeterminate"][d], c.checked = "checked" == c.checkState, i.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2"), i.addClass("tree-checkbox" + d), 0 == d ? a.easyui.removeArrayItem(f, g.idField, c[g.idField]) : a.easyui.addArrayItem(f, g.idField, c))
        }
    }
    function j(b, c, d) {
        var e = d ? 1 : 0;
        i(b, c, e),
            a.easyui.forEach(c.children || [], !0, function (a) {
                i(b, a, e)
            })
    }
    function k(b, c) {
        var d = a.data(b, "treegrid").options,
            e = s(b, c[d.idField]);
        e && (i(b, e, l(e)), k(b, e))
    }
    function l(b) {
        var c = 0,
            d = 0,
            e = 0;
        if (a.easyui.forEach(b.children || [], !1, function (a) {
                a.checkState && (c++, "checked" == a.checkState ? e++ : "unchecked" == a.checkState && d++)
            }), 0 != c) {
            var f = 0;
            return f = d == c ? 0 : e == c ? 1 : 2
        }
    }
    function m(b, c) {
        var d = a.data(b, "treegrid").options;
        if (d.checkbox) {
            var e = v(b, c),
                f = d.finder.getTr(b, c),
                g = f.find(".tree-checkbox");
            if (d.view.hasCheckbox(b, e)) if (g.length || (e.checkState = e.checkState || "unchecked", a('<span class="tree-checkbox"></span>').insertBefore(f.find(".tree-title"))), "checked" == e.checkState) h(b, c, !0, !0);
            else if ("unchecked" == e.checkState) h(b, c, !1, !0);
            else {
                var i = l(e);
                0 === i ? h(b, c, !1, !0) : 1 === i && h(b, c, !0, !0)
            } else g.remove(),
                e.checkState = void 0,
                e.checked = void 0,
                k(b, e)
        }
    }
    function n(b, c) {
        function d(b, c) {
            a('<tr class="treegrid-tr-tree"><td style="border:0px" colspan="' + c + '"><div></div></td></tr>').insertAfter(b)
        }
        var e = a.data(b, "treegrid").options,
            f = e.finder.getTr(b, c, "body", 1),
            g = e.finder.getTr(b, c, "body", 2),
            h = a(b).datagrid("getColumnFields", !0).length + (e.rownumbers ? 1 : 0),
            i = a(b).datagrid("getColumnFields", !1).length;
        d(f, h),
            d(g, i)
    }
    function o(b, e, f, g, h) {
        var i = a.data(b, "treegrid"),
            j = i.options,
            k = i.dc;
        f = j.loadFilter.call(b, f, e);
        var l = v(b, e);
        if (l) {
            var m = j.finder.getTr(b, e, "body", 1),
                n = j.finder.getTr(b, e, "body", 2),
                o = m.next("tr.treegrid-tr-tree").children("td").children("div"),
                p = n.next("tr.treegrid-tr-tree").children("td").children("div");
            g || (l.children = [])
        } else {
            var o = k.body1,
                p = k.body2;
            g || (i.data = [])
        }
        if (g || (o.empty(), p.empty()), j.view.onBeforeRender && j.view.onBeforeRender.call(j.view, b, e, f), j.view.render.call(j.view, b, o, !0), j.view.render.call(j.view, b, p, !1), j.showFooter && (j.view.renderFooter.call(j.view, b, k.footer1, !0), j.view.renderFooter.call(j.view, b, k.footer2, !1)), j.view.onAfterRender && j.view.onAfterRender.call(j.view, b), !e && j.pagination) {
            var q = a.data(b, "treegrid").total,
                r = a(b).datagrid("getPager");
            r.pagination("options").total != q && r.pagination({
                total: q
            })
        }
        c(b),
            d(b),
            a(b).treegrid("showLines"),
            a(b).treegrid("setSelectionState"),
            a(b).treegrid("autoSizeColumn"),
        h || j.onLoadSuccess.call(b, l, f)
    }
    function p(b, c, d, e, f) {
        var g = a.data(b, "treegrid").options,
            h = a(b).datagrid("getPanel").find("div.datagrid-body");
        void 0 == c && g.queryParams && (g.queryParams.id = void 0),
        d && (g.queryParams = d);
        var i = a.extend({}, g.queryParams);
        g.pagination && a.extend(i, {
            page: g.pageNumber,
            rows: g.pageSize
        }),
        g.sortName && a.extend(i, {
            sort: g.sortName,
            order: g.sortOrder
        });
        var j = v(b, c);
        if (0 != g.onBeforeLoad.call(b, j, i)) {
            var k = h.find('tr[node-id="' + c + '"] span.tree-folder');
            k.addClass("tree-loading"),
                a(b).treegrid("loading");
            var l = g.loader.call(b, i, function (d) {
                k.removeClass("tree-loading"),
                    a(b).treegrid("loaded"),
                    o(b, c, d, e),
                f && f()
            }, function () {
                k.removeClass("tree-loading"),
                    a(b).treegrid("loaded"),
                    g.onLoadError.apply(b, arguments),
                f && f()
            });
            0 == l && (k.removeClass("tree-loading"), a(b).treegrid("loaded"))
        }
    }
    function q(a) {
        var b = r(a);
        return b.length ? b[0] : null
    }
    function r(b) {
        return a.data(b, "treegrid").data
    }
    function s(a, b) {
        var c = v(a, b);
        return c._parentId ? v(a, c._parentId) : null
    }
    function t(b, c) {
        var d = a.data(b, "treegrid").data;
        if (c) {
            var e = v(b, c);
            d = e ? e.children || [] : []
        }
        var f = [];
        return a.easyui.forEach(d, !0, function (a) {
            f.push(a)
        }),
            f
    }
    function u(b, c) {
        var d = a.data(b, "treegrid").options,
            e = d.finder.getTr(b, c),
            f = e.children('td[field="' + d.treeField + '"]');
        return f.find("span.tree-indent,span.tree-hit").length
    }
    function v(b, c) {
        var d = a.data(b, "treegrid"),
            e = d.options,
            f = null;
        return a.easyui.forEach(d.data, !0, function (a) {
            if (a[e.idField] == c) return f = a,
                !1
        }),
            f
    }
    function w(b, d) {
        var e = a.data(b, "treegrid").options,
            f = v(b, d),
            g = e.finder.getTr(b, d),
            h = g.find("span.tree-hit");
        if (0 != h.length && !h.hasClass("tree-collapsed") && 0 != e.onBeforeCollapse.call(b, f)) {
            h.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed"),
                h.next().removeClass("tree-folder-open"),
                f.state = "closed",
                g = g.next("tr.treegrid-tr-tree");
            var i = g.children("td").children("div");
            e.animate ? i.slideUp("normal", function () {
                a(b).treegrid("autoSizeColumn"),
                    c(b, d),
                    e.onCollapse.call(b, f)
            }) : (i.hide(), a(b).treegrid("autoSizeColumn"), c(b, d), e.onCollapse.call(b, f))
        }
    }
    function x(b, d) {
        function e(e) {
            i.state = "open",
                f.animate ? e.slideDown("normal", function () {
                    a(b).treegrid("autoSizeColumn"),
                        c(b, d),
                        f.onExpand.call(b, i)
                }) : (e.show(), a(b).treegrid("autoSizeColumn"), c(b, d), f.onExpand.call(b, i))
        }
        var f = a.data(b, "treegrid").options,
            g = f.finder.getTr(b, d),
            h = g.find("span.tree-hit"),
            i = v(b, d);
        if (0 != h.length && !h.hasClass("tree-expanded") && 0 != f.onBeforeExpand.call(b, i)) {
            h.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded"),
                h.next().addClass("tree-folder-open");
            var j = g.next("tr.treegrid-tr-tree");
            if (j.length) {
                var k = j.children("td").children("div");
                e(k)
            } else {
                n(b, i[f.idField]);
                var j = g.next("tr.treegrid-tr-tree"),
                    k = j.children("td").children("div");
                k.hide();
                var l = a.extend({}, f.queryParams || {});
                l.id = i[f.idField],
                    p(b, i[f.idField], l, !0, function () {
                        k.is(":empty") ? j.remove() : e(k)
                    })
            }
        }
    }
    function y(b, c) {
        var d = a.data(b, "treegrid").options,
            e = d.finder.getTr(b, c),
            f = e.find("span.tree-hit");
        f.hasClass("tree-expanded") ? w(b, c) : x(b, c)
    }
    function z(b, c) {
        var d = a.data(b, "treegrid").options,
            e = t(b, c);
        c && e.unshift(v(b, c));
        for (var f = 0; f < e.length; f++) w(b, e[f][d.idField])
    }
    function A(b, c) {
        var d = a.data(b, "treegrid").options,
            e = t(b, c);
        c && e.unshift(v(b, c));
        for (var f = 0; f < e.length; f++) x(b, e[f][d.idField])
    }
    function B(b, c) {
        for (var d = a.data(b, "treegrid").options, e = [], f = s(b, c); f;) {
            var g = f[d.idField];
            e.unshift(g),
                f = s(b, g)
        }
        for (var h = 0; h < e.length; h++) x(b, e[h])
    }
    function C(b, c) {
        var d = a.data(b, "treegrid"),
            e = d.options;
        if (c.parent) {
            var f = e.finder.getTr(b, c.parent);
            0 == f.next("tr.treegrid-tr-tree").length && n(b, c.parent);
            var g = f.children('td[field="' + e.treeField + '"]').children("div.datagrid-cell"),
                h = g.children("span.tree-icon");
            if (h.hasClass("tree-file")) {
                h.removeClass("tree-file").addClass("tree-folder tree-folder-open");
                var i = a('<span class="tree-hit tree-expanded"></span>').insertBefore(h);
                i.prev().length && i.prev().remove()
            }
        }
        o(b, c.parent, c.data, d.data.length > 0, !0)
    }
    function D(b, c) {
        function e(a) {
            var d = a ? 1 : 2,
                e = g.finder.getTr(b, c.data[g.idField], "body", d),
                h = e.closest("table.datagrid-btable");
            e = e.parent().children();
            var i = g.finder.getTr(b, f, "body", d);
            if (c.before) e.insertBefore(i);
            else {
                var j = i.next("tr.treegrid-tr-tree");
                e.insertAfter(j.length ? j : i)
            }
            h.remove()
        }
        var f = c.before || c.after,
            g = a.data(b, "treegrid").options,
            h = s(b, f);
        C(b, {
            parent: h ? h[g.idField] : null,
            data: [c.data]
        });
        for (var i = h ? h.children : a(b).treegrid("getRoots"), j = 0; j < i.length; j++) if (i[j][g.idField] == f) {
            var k = i[i.length - 1];
            i.splice(c.before ? j : j + 1, 0, k),
                i.splice(i.length - 1, 1);
            break
        }
        e(!0),
            e(!1),
            d(b),
            a(b).treegrid("showLines")
    }
    function E(b, c) {
        var e = a.data(b, "treegrid"),
            f = e.options,
            g = s(b, c);
        a(b).datagrid("deleteRow", c),
            a.easyui.removeArrayItem(e.checkedRows, f.idField, c),
            d(b),
        g && m(b, g[f.idField]),
            e.total -= 1,
            a(b).datagrid("getPager").pagination("refresh", {
                total: e.total
            }),
            a(b).treegrid("showLines")
    }
    function F(b) {
        function c(b) {
            if (a.map(b, function (a) {
                    if (a.children && a.children.length) c(a.children);
                    else {
                        var b = e(a);
                        b.find(".tree-icon").prev().addClass("tree-join")
                    }
                }), b.length) {
                var d = e(b[b.length - 1]);
                d.addClass("tree-node-last"),
                    d.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom")
            }
        }
        function d(c) {
            a.map(c, function (a) {
                a.children && a.children.length && d(a.children)
            });
            for (var e = 0; e < c.length - 1; e++) {
                var h = c[e],
                    i = f.treegrid("getLevel", h[g.idField]),
                    j = g.finder.getTr(b, h[g.idField]),
                    k = j.next().find('tr.datagrid-row td[field="' + g.treeField + '"] div.datagrid-cell');
                k.find("span:eq(" + (i - 1) + ")").addClass("tree-line")
            }
        }
        function e(a) {
            var c = g.finder.getTr(b, a[g.idField]),
                d = c.find('td[field="' + g.treeField + '"] div.datagrid-cell');
            return d
        }
        var f = a(b),
            g = f.treegrid("options");
        if (!g.lines) return void f.treegrid("getPanel").removeClass("tree-lines");
        f.treegrid("getPanel").addClass("tree-lines"),
            f.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom"),
            f.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
        var h = f.treegrid("getRoots");
        h.length > 1 ? e(h[0]).addClass("tree-root-first") : 1 == h.length && e(h[0]).addClass("tree-root-one"),
            c(h),
            d(h)
    }
    a.fn.treegrid = function (c, d) {
        if ("string" == typeof c) {
            var e = a.fn.treegrid.methods[c];
            return e ? e(this, d) : this.datagrid(c, d)
        }
        return c = c || {},
            this.each(function () {
                var d = a.data(this, "treegrid");
                d ? a.extend(d.options, c) : d = a.data(this, "treegrid", {
                    options: a.extend({}, a.fn.treegrid.defaults, a.fn.treegrid.parseOptions(this), c),
                    data: [],
                    checkedRows: [],
                    tmpIds: []
                }),
                    b(this),
                d.options.data && a(this).treegrid("loadData", d.options.data),
                    p(this)
            })
    },
        a.fn.treegrid.methods = {
            options: function (b) {
                return a.data(b[0], "treegrid").options
            },
            resize: function (b, c) {
                return b.each(function () {
                    a(this).datagrid("resize", c)
                })
            },
            fixRowHeight: function (a, b) {
                return a.each(function () {
                    c(this, b)
                })
            },
            loadData: function (a, b) {
                return a.each(function () {
                    o(this, b.parent, b)
                })
            },
            load: function (b, c) {
                return b.each(function () {
                    a(this).treegrid("options").pageNumber = 1,
                        a(this).treegrid("getPager").pagination({
                            pageNumber: 1
                        }),
                        a(this).treegrid("reload", c)
                })
            },
            reload: function (b, c) {
                return b.each(function () {
                    var b = a(this).treegrid("options"),
                        d = {};
                    if ("object" == typeof c ? d = c : (d = a.extend({}, b.queryParams), d.id = c), d.id) {
                        var e = a(this).treegrid("find", d.id);
                        e.children && e.children.splice(0, e.children.length),
                            b.queryParams = d;
                        var f = b.finder.getTr(this, d.id);
                        f.next("tr.treegrid-tr-tree").remove(),
                            f.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed"),
                            x(this, d.id)
                    } else p(this, null, d)
                })
            },
            reloadFooter: function (b, c) {
                return b.each(function () {
                    var b = a.data(this, "treegrid").options,
                        d = a.data(this, "datagrid").dc;
                    c && (a.data(this, "treegrid").footer = c),
                    b.showFooter && (b.view.renderFooter.call(b.view, this, d.footer1, !0), b.view.renderFooter.call(b.view, this, d.footer2, !1), b.view.onAfterRender && b.view.onAfterRender.call(b.view, this), a(this).treegrid("fixRowHeight"))
                })
            },
            getData: function (b) {
                return a.data(b[0], "treegrid").data
            },
            getFooterRows: function (b) {
                return a.data(b[0], "treegrid").footer
            },
            getRoot: function (a) {
                return q(a[0])
            },
            getRoots: function (a) {
                return r(a[0])
            },
            getParent: function (a, b) {
                return s(a[0], b)
            },
            getChildren: function (a, b) {
                return t(a[0], b)
            },
            getLevel: function (a, b) {
                return u(a[0], b)
            },
            find: function (a, b) {
                return v(a[0], b)
            },
            isLeaf: function (b, c) {
                var d = a.data(b[0], "treegrid").options,
                    e = d.finder.getTr(b[0], c),
                    f = e.find("span.tree-hit");
                return 0 == f.length
            },
            select: function (b, c) {
                return b.each(function () {
                    a(this).datagrid("selectRow", c)
                })
            },
            unselect: function (b, c) {
                return b.each(function () {
                    a(this).datagrid("unselectRow", c)
                })
            },
            collapse: function (a, b) {
                return a.each(function () {
                    w(this, b)
                })
            },
            expand: function (a, b) {
                return a.each(function () {
                    x(this, b)
                })
            },
            toggle: function (a, b) {
                return a.each(function () {
                    y(this, b)
                })
            },
            collapseAll: function (a, b) {
                return a.each(function () {
                    z(this, b)
                })
            },
            expandAll: function (a, b) {
                return a.each(function () {
                    A(this, b)
                })
            },
            expandTo: function (a, b) {
                return a.each(function () {
                    B(this, b)
                })
            },
            append: function (a, b) {
                return a.each(function () {
                    C(this, b)
                })
            },
            insert: function (a, b) {
                return a.each(function () {
                    D(this, b)
                })
            },
            remove: function (a, b) {
                return a.each(function () {
                    E(this, b)
                })
            },
            pop: function (a, b) {
                var c = a.treegrid("find", b);
                return a.treegrid("remove", b),
                    c
            },
            refresh: function (b, c) {
                return b.each(function () {
                    var b = a.data(this, "treegrid").options;
                    b.view.refreshRow.call(b.view, this, c)
                })
            },
            update: function (b, c) {
                return b.each(function () {
                    var b = a.data(this, "treegrid").options,
                        d = c.row;
                    b.view.updateRow.call(b.view, this, c.id, d),
                    void 0 != d.checked && (d = v(this, c.id), a.extend(d, {
                        checkState: d.checked ? "checked" : d.checked === !1 ? "unchecked" : void 0
                    }), m(this, c.id))
                })
            },
            beginEdit: function (b, c) {
                return b.each(function () {
                    a(this).datagrid("beginEdit", c),
                        a(this).treegrid("fixRowHeight", c)
                })
            },
            endEdit: function (b, c) {
                return b.each(function () {
                    a(this).datagrid("endEdit", c)
                })
            },
            cancelEdit: function (b, c) {
                return b.each(function () {
                    a(this).datagrid("cancelEdit", c)
                })
            },
            showLines: function (a) {
                return a.each(function () {
                    F(this)
                })
            },
            setSelectionState: function (b) {
                return b.each(function () {
                    a(this).datagrid("setSelectionState");
                    for (var b = a(this).data("treegrid"), c = 0; c < b.tmpIds.length; c++) h(this, b.tmpIds[c], !0, !0);
                    b.tmpIds = []
                })
            },
            getCheckedNodes: function (b, c) {
                c = c || "checked";
                var d = [];
                return a.easyui.forEach(b.data("treegrid").checkedRows, !1, function (a) {
                    a.checkState == c && d.push(a)
                }),
                    d
            },
            getCheckedAndIndeter: function (b, c) {
                c = c || "checked";
                var d = [];
                return a.easyui.forEach(b.data("treegrid").checkedRows, !1, function (a) {
                    (a.checkState == c ||a.checkState =='indeterminate') && d.push(a)
                }),
                    d
            },
            checkNode: function (a, b) {
                return a.each(function () {
                    h(this, b, !0)
                })
            },
            uncheckNode: function (a, b) {
                return a.each(function () {
                    h(this, b, !1)
                })
            },
            clearChecked: function (b) {
                return b.each(function () {
                    var b = this,
                        c = a(b).treegrid("options");
                    a(b).datagrid("clearChecked"),
                        a.map(a(b).treegrid("getCheckedNodes"), function (a) {
                            h(b, a[c.idField], !1, !0)
                        })
                })
            }
        },
        a.fn.treegrid.parseOptions = function (b) {
            return a.extend({}, a.fn.datagrid.parseOptions(b), a.parser.parseOptions(b, ["treeField", {
                checkbox: "boolean",
                cascadeCheck: "boolean",
                onlyLeafCheck: "boolean"
            },
                {
                    animate: "boolean"
                }]))
        };
    var G = a.extend({}, a.fn.datagrid.defaults.view, {
        render: function (b, c, d) {
            function e(c, d, j) {
                for (var k = a(b).treegrid("getParent", j[0][f.idField]), l = (k ? k.children.length : a(b).treegrid("getRoots").length) - j.length, m = ['<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>'], n = 0; n < j.length; n++) {
                    var o = j[n];
                    "open" != o.state && "closed" != o.state && (o.state = "open");
                    var p = f.rowStyler ? f.rowStyler.call(b, o) : "",
                        q = this.getStyleValue(p),
                        r = 'class="datagrid-row ' + (l++ % 2 && f.striped ? "datagrid-row-alt " : " ") + q.c + '"',
                        s = q.s ? 'style="' + q.s + '"' : "",
                        t = h + "-" + (c ? 1 : 2) + "-" + o[f.idField];
                    if (m.push('<tr id="' + t + '" node-id="' + o[f.idField] + '" ' + r + " " + s + ">"), m = m.concat(i.renderRow.call(i, b, g, c, d, o)), m.push("</tr>"), o.children && o.children.length) {
                        var u = e.call(this, c, d + 1, o.children),
                            v = "closed" == o.state ? "none" : "block";
                        m.push('<tr class="treegrid-tr-tree"><td style="border:0px" colspan=' + (g.length + (f.rownumbers ? 1 : 0)) + '><div style="display:' + v + '">'),
                            m = m.concat(u),
                            m.push("</div></td></tr>")
                    }
                }
                return m.push("</tbody></table>"),
                    m
            }
            var f = a.data(b, "treegrid").options,
                g = a(b).datagrid("getColumnFields", d),
                h = a.data(b, "datagrid").rowIdPrefix;
            if (!d || f.rownumbers || f.frozenColumns && f.frozenColumns.length) {
                var i = this;
                if (this.treeNodes && this.treeNodes.length) {
                    var j = e.call(this, d, this.treeLevel, this.treeNodes);
                    a(c).append(j.join(""))
                }
            }
        },
        renderFooter: function (b, c, d) {
            for (var e = a.data(b, "treegrid").options, f = a.data(b, "treegrid").footer || [], g = a(b).datagrid("getColumnFields", d), h = ['<table class="datagrid-ftable" cellspacing="0" cellpadding="0" border="0"><tbody>'], i = 0; i < f.length; i++) {
                var j = f[i];
                j[e.idField] = j[e.idField] || "foot-row-id" + i,
                    h.push('<tr class="datagrid-row" node-id="' + j[e.idField] + '">'),
                    h.push(this.renderRow.call(this, b, g, d, 0, j)),
                    h.push("</tr>")
            }
            h.push("</tbody></table>"),
                a(c).html(h.join(""))
        },
        renderRow: function (b, c, d, e, f) {
            var g = a.data(b, "treegrid"),
                h = g.options,
                i = [];
            d && h.rownumbers && i.push('<td class="datagrid-td-rownumber"><div class="datagrid-cell-rownumber">0</div></td>');
            for (var j = 0; j < c.length; j++) {
                var k = c[j],
                    l = a(b).datagrid("getColumnOption", k);
                if (l) {
                    var m = l.styler ? l.styler(f[k], f) || "" : "",
                        n = this.getStyleValue(m),
                        o = n.c ? 'class="' + n.c + '"' : "",
                        p = l.hidden ? 'style="display:none;' + n.s + '"' : n.s ? 'style="' + n.s + '"' : "";
                    i.push('<td field="' + k + '" ' + o + " " + p + ">");
                    var p = "";
                    if (l.checkbox || (l.align && (p += "text-align:" + l.align + ";"), h.nowrap ? h.autoRowHeight && (p += "height:auto;") : p += "white-space:normal;height:auto;"), i.push('<div style="' + p + '" '), l.checkbox ? i.push('class="datagrid-cell-check ') : i.push('class="datagrid-cell ' + l.cellClass), i.push('">'), l.checkbox) f.checked ? i.push('<input type="checkbox" checked="checked"') : i.push('<input type="checkbox"'),
                        i.push(' name="' + k + '" value="' + (void 0 != f[k] ? f[k] : "") + '">');
                    else {
                        var q = null;
                        if (q = l.formatter ? l.formatter(f[k], f) : f[k], k == h.treeField) {
                            for (var r = 0; r < e; r++) i.push('<span class="tree-indent"></span>');
                            if ("closed" == f.state ? (i.push('<span class="tree-hit tree-collapsed"></span>'), i.push('<span class="tree-icon tree-folder ' + (f.iconCls ? f.iconCls : "") + '"></span>')) : f.children && f.children.length ? (i.push('<span class="tree-hit tree-expanded"></span>'), i.push('<span class="tree-icon tree-folder tree-folder-open ' + (f.iconCls ? f.iconCls : "") + '"></span>')) : (i.push('<span class="tree-indent"></span>'), i.push('<span class="tree-icon tree-file ' + (f.iconCls ? f.iconCls : "") + '"></span>')), this.hasCheckbox(b, f)) {
                                var s = 0,
                                    t = a.easyui.getArrayItem(g.checkedRows, h.idField, f[h.idField]);
                                if (t) s = "checked" == t.checkState ? 1 : 2,
                                    f.checkState = t.checkState,
                                    f.checked = t.checked,
                                    a.easyui.addArrayItem(g.checkedRows, h.idField, f);
                                else {
                                    var u = a.easyui.getArrayItem(g.checkedRows, h.idField, f._parentId);
                                    u && "checked" == u.checkState && h.cascadeCheck ? (s = 1, f.checked = !0, a.easyui.addArrayItem(g.checkedRows, h.idField, f)) : f.checked && a.easyui.addArrayItem(g.tmpIds, f[h.idField]),
                                        f.checkState = s ? "checked" : "unchecked"
                                }
                                i.push('<span class="tree-checkbox tree-checkbox' + s + '"></span>')
                            } else f.checkState = void 0,
                                f.checked = void 0;
                            i.push('<span class="tree-title">' + q + "</span>")
                        } else i.push(q)
                    }
                    i.push("</div>"),
                        i.push("</td>")
                }
            }
            return i.join("")
        },
        hasCheckbox: function (b, c) {
            var d = a.data(b, "treegrid").options;
            if (d.checkbox) {
                if (a.isFunction(d.checkbox)) return !!d.checkbox.call(b, c);
                if (!d.onlyLeafCheck) return !0;
                if (!("open" != c.state || c.children && c.children.length)) return !0
            }
            return !1
        },
        refreshRow: function (a, b) {
            this.updateRow.call(this, a, b, {})
        },
        updateRow: function (b, c, d) {
            function e(d) {
                var e = a(b).treegrid("getColumnFields", d),
                    l = f.finder.getTr(b, c, "body", d ? 1 : 2),
                    m = l.find("div.datagrid-cell-rownumber").html(),
                    n = l.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
                l.html(this.renderRow(b, e, d, h, g)),
                    l.attr("style", i || ""),
                    l.find("div.datagrid-cell-rownumber").html(m),
                n && l.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked", !0),
                k != c && (l.attr("id", j + "-" + (d ? 1 : 2) + "-" + k), l.attr("node-id", k))
            }
            var f = a.data(b, "treegrid").options,
                g = a(b).treegrid("find", c);
            a.extend(g, d);
            var h = a(b).treegrid("getLevel", c) - 1,
                i = f.rowStyler ? f.rowStyler.call(b, g) : "",
                j = a.data(b, "datagrid").rowIdPrefix,
                k = g[f.idField];
            e.call(this, !0),
                e.call(this, !1),
                a(b).treegrid("fixRowHeight", c)
        },
        deleteRow: function (b, c) {
            function d(c) {
                var d, f = a(b).treegrid("getParent", c);
                d = f ? f.children : a(b).treegrid("getData");
                for (var g = 0; g < d.length; g++) if (d[g][e.idField] == c) {
                    d.splice(g, 1);
                    break
                }
                return f
            }
            var e = a.data(b, "treegrid").options,
                f = e.finder.getTr(b, c);
            f.next("tr.treegrid-tr-tree").remove(),
                f.remove();
            var g = d(c);
            if (g && 0 == g.children.length) {
                f = e.finder.getTr(b, g[e.idField]),
                    f.next("tr.treegrid-tr-tree").remove();
                var h = f.children('td[field="' + e.treeField + '"]').children("div.datagrid-cell");
                h.find(".tree-icon").removeClass("tree-folder").addClass("tree-file"),
                    h.find(".tree-hit").remove(),
                    a('<span class="tree-indent"></span>').prependTo(h)
            }
            this.setEmptyMsg(b)
        },
        onBeforeRender: function (b, c, d) {
            function e(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    d._parentId = b,
                    d.children && d.children.length && e(d.children, d[g.idField])
                }
            }
            if (a.isArray(c) && (d = {
                    total: c.length,
                    rows: c
                }, c = null), !d) return !1;
            var f = a.data(b, "treegrid"),
                g = f.options;
            void 0 == d.length ? (d.footer && (f.footer = d.footer), d.total && (f.total = d.total), d = this.transfer(b, c, d.rows)) : e(d, c),
                this.sort(b, d),
                this.treeNodes = d,
                this.treeLevel = a(b).treegrid("getLevel", c);
            var h = v(b, c);
            h ? h.children ? h.children = h.children.concat(d) : h.children = d : f.data = f.data.concat(d)
        },
        sort: function (b, c) {
            function d(c) {
                c.sort(function (c, d) {
                    for (var e = 0, h = 0; h < f.length; h++) {
                        var i = f[h],
                            j = g[h],
                            k = a(b).treegrid("getColumnOption", i),
                            l = k.sorter ||
                                function (a, b) {
                                    return a == b ? 0 : a > b ? 1 : -1
                                };
                        if (e = l(c[i], d[i]) * ("asc" == j ? 1 : -1), 0 != e) return e
                    }
                    return e
                });
                for (var e = 0; e < c.length; e++) {
                    var h = c[e].children;
                    h && h.length && d(h)
                }
            }
            var e = a.data(b, "treegrid").options;
            if (!e.remoteSort && e.sortName) {
                var f = e.sortName.split(","),
                    g = e.sortOrder.split(",");
                d(c)
            }
        },
        transfer: function (b, c, d) {
            function e(a, b) {
                for (var c = [], d = 0; d < b.length; d++) {
                    var e = b[d];
                    e._parentId == a && (c.push(e), b.splice(d, 1), d--)
                }
                return c
            }
            for (var f = a.data(b, "treegrid").options, g = a.extend([], d), h = e(c, g), i = a.extend([], h); i.length;) {
                var j = i.shift(),
                    k = e(j[f.idField], g);
                k.length && (j.children ? j.children = j.children.concat(k) : j.children = k, i = i.concat(k))
            }
            return h
        }
    });
    a.fn.treegrid.defaults = a.extend({}, a.fn.datagrid.defaults, {
        treeField: null,
        checkbox: !1,
        cascadeCheck: !0,
        onlyLeafCheck: !1,
        lines: !1,
        animate: !1,
        singleSelect: !0,
        view: G,
        rowEvents: a.extend({}, a.fn.datagrid.defaults.rowEvents, {
            mouseover: e(!0),
            mouseout: e(!1),
            click: f
        }),
        loader: function (b, c, d) {
            var e = a(this).treegrid("options");
            return !!e.url && void a.ajax({
                type: e.method,
                url: e.url,
                data: b,
                dataType: "json",
                success: function (a) {
                    c(a)
                },
                error: function () {
                    d.apply(this, arguments)
                }
            })
        },
        loadFilter: function (a, b) {
            return a
        },
        finder: {
            getTr: function (b, c, d, e) {
                d = d || "body",
                    e = e || 0;
                var f = a.data(b, "datagrid").dc;
                if (0 == e) {
                    var g = a.data(b, "treegrid").options,
                        h = g.finder.getTr(b, c, d, 1),
                        i = g.finder.getTr(b, c, d, 2);
                    return h.add(i)
                }
                if ("body" == d) {
                    var j = a("#" + a.data(b, "datagrid").rowIdPrefix + "-" + e + "-" + c);
                    return j.length || (j = (1 == e ? f.body1 : f.body2).find('tr[node-id="' + c + '"]')),
                        j
                }
                return "footer" == d ? (1 == e ? f.footer1 : f.footer2).find('tr[node-id="' + c + '"]') : "selected" == d ? (1 == e ? f.body1 : f.body2).find("tr.datagrid-row-selected") : "highlight" == d ? (1 == e ? f.body1 : f.body2).find("tr.datagrid-row-over") : "checked" == d ? (1 == e ? f.body1 : f.body2).find("tr.datagrid-row-checked") : "last" == d ? (1 == e ? f.body1 : f.body2).find("tr:last[node-id]") : "allbody" == d ? (1 == e ? f.body1 : f.body2).find("tr[node-id]") : "allfooter" == d ? (1 == e ? f.footer1 : f.footer2).find("tr[node-id]") : void 0
            },
            getRow: function (b, c) {
                var d = "object" == typeof c ? c.attr("node-id") : c;
                return a(b).treegrid("find", d)
            },
            getRows: function (b) {
                return a(b).treegrid("getChildren")
            }
        },
        onBeforeLoad: function (a, b) {},
        onLoadSuccess: function (a, b) {},
        onLoadError: function () {},
        onBeforeCollapse: function (a) {},
        onCollapse: function (a) {},
        onBeforeExpand: function (a) {},
        onExpand: function (a) {},
        onClickRow: function (a) {},
        onDblClickRow: function (a) {},
        onClickCell: function (a, b) {},
        onDblClickCell: function (a, b) {},
        onContextMenu: function (a, b) {},
        onBeforeEdit: function (a) {},
        onAfterEdit: function (a, b) {},
        onCancelEdit: function (a) {},
        onBeforeCheckNode: function (a, b) {},
        onCheckNode: function (a, b) {}
    })
})(jQuery);

(function (a) {
    a.fn.iTreegrid = function (b, c) {
        if ("string" == typeof b) {
            var d = a.fn.iTreegrid.methods[b];
            return d ? d(this, c) : this.treegrid(b, c)
        }
        this.each(function () {
            b = a.fn.iTreegrid.parseOptions(this, b),
                b.toolbar = "#" + b.id + "-toolbar",
                b.url = appendSourceUrlParam(b.url);
            if(b&&b.columns){
                b.columns[0]=requester_treegrid(b.columns[0]);/*初始化*/
            }
            a(this).treegrid(b)
        })
    },
        a.fn.iTreegrid.methods = {
            cascadeCheck: function (b, c) {
                function d(b, c, e, f) {
                    var g = a(b.selector).treegrid("getParent", c);
                    if (g) {
                        var h = g[e];
                        f ? a(b.selector).treegrid("select", h) : a(b.selector).treegrid("unselect", h),
                            d(b, h, e, f)
                    }
                }
                function e(b, c, d, f, g) {
                    !g && f && a(b).treegrid("expand", c);
                    for (var h = a(b).treegrid("getChildren", c), i = 0; i < h.length; i++) {
                        var j = h[i][d];
                        g ? a(b).treegrid("select", j) : a(b).treegrid("unselect", j),
                            e(b, j, d, f, g)
                    }
                }
                var f = a.data(b[0], "treegrid").options;
                if (!f.singleSelect) {
                    for (var g = f.idField, h = !1, i = a(b.selector).treegrid("getSelections"), j = 0; j < i.length; j++) i[j][g] == c.id && (h = !0);
                    d(b, c.id, g, h),
                        e(b, c.id, g, c.deepCascade, h)
                }
            },
        },
        a.fn.iTreegrid.parseOptions = function (b, c) {
            var d = a.extend({}, a.fn.treegrid.parseOptions(b), a.fn.iTreegrid.defaults, a.parser.parseOptions(b, ["id"]), c);
            return setId(b, d)
        },
        a.fn.iTreegrid.defaults = {
            id: this.selector,
            beforeExpandUrl: "",
            idField: "id",
            treeField: "text",
            fit: !0,
            fitColumns: !0,
            border: !1,
            expandRoot: !0,
            toolbar: this.selector + "-toolbar",
            pageSize: 20,
            animate: !0,
            checkOnSelect: !1,
            selectOnCheck: !1,
            onBeforeLoad: function (a) {
            },
            onBeforeExpand: function (b) {
                var c = a(this).iTreegrid("options");
                a(this).iTreegrid("options").url = replaceUrlParamValueByBrace(c.expandUrl, b)
            },
            onExpand: function (a) {},
            onLoadSuccess: function () {
                var b = a(this).iTreegrid("options");
                if (b.expandRoot) {
                    var c = a("#" + b.id).iTreegrid("getRoot");
                    c && a("#" + b.id).iTreegrid("expand", c.id)
                }
            },
            onContextMenu: function (b, c) {
                a(this).iTreegrid("options")
            },
            onClickRow: function (b) {
                var c = a(this).iTreegrid("options");
                if (a("#" + c.id).iTreegrid("cascadeCheck", {
                        id: b.id,
                        deepCascade: !0
                    }), "object" == typeof c.childGrid) {
                    var d = {};
                    d = getSelectedRowJson(c.childGrid.param, b);
                    for (var e = c.childGrid.grids, f = 0; f < e.length; f++) {
                        var g = a("#" + e[f].id);
                        if ("datagrid" == e[f].type) {
                            var h = g.datagrid("options").queryParams;
                            g.iDatagrid("options").queryParams = a.extend({}, h, d),
                                g.iDatagrid("load")
                        } else if ("treegrid" == e[f].type) {
                            var h = g.treegrid("options").queryParams;
                            g.iTreegrid("options").queryParams = a.extend({}, h, d),
                                g.iTreegrid("load")
                        } else if ("panel" == e[f].type) {
                            var i = replaceUrlParamValueByBrace(e[f].href, b);
                            g.panel("refresh", i)
                        }
                    }
                }
                if ("object" == typeof c.childTabs) for (var j = c.childTabs, f = 0; f < j.length; f++) {
                    var k = a("#" + j[f].id),
                        l = k.tabs("options"),
                        m = k.tabs("getSelected"),
                        n = m.panel("options");
                    if (null != n.href || null != n.iframeHref) {
                        void 0 != n.href && (n.iframeHref = n.href, n.href = null);
                        var o = '<iframe src="' + n.iframeHref + '" scrolling="auto" frameborder="0" style="width:100%;height:99.5%;"></iframe>';
                        m.panel({
                            content: o
                        })
                    } else "object" == typeof n.dgOpts && ("object" == typeof l.parentGrid && setGridQueryParams(l.parentGrid, "datagrid", n.dgOpts.id), a("#" + n.dgOpts.id).datagrid("reload"))
                }
            },
            onHeaderContextMenu: a.fn.iDatagrid.methods.createGridHeaderContextMenu
        }
}(jQuery));