(function (a) {
    'use strict';
    function b(b) {
        var c = a.data(b, "datalist").options;
        a(b).datagrid(a.extend({}, c, {
            cls: "datalist" + (c.lines ? " datalist-lines" : ""),
            frozenColumns: c.frozenColumns && c.frozenColumns.length ? c.frozenColumns : c.checkbox ? [
                [{
                    field: "_ck",
                    checkbox: !0
                }]
            ] : void 0,
            columns: c.columns && c.columns.length ? c.columns : [
                [{
                    field: c.textField,
                    width: "100%",
                    formatter: function (a, b, d) {
                        return c.textFormatter ? c.textFormatter(a, b, d) : a
                    }
                }]
            ]
        }))
    }
    var c = a.extend({}, a.fn.datagrid.defaults.view, {
        render: function (b, c, d) {
            var e = a.data(b, "datagrid"),
                f = e.options;
            if (f.groupField) {
                var g = this.groupRows(b, e.data.rows);
                this.groups = g.groups,
                    e.data.rows = g.rows;
                for (var h = [], i = 0; i < g.groups.length; i++) h.push(this.renderGroup.call(this, b, i, g.groups[i], d));
                a(c).html(h.join(""))
            } else a(c).html(this.renderTable(b, 0, e.data.rows, d))
        },
        renderGroup: function (b, c, d, e) {
            var f = a.data(b, "datagrid"),
                g = f.options,
                h = (a(b).datagrid("getColumnFields", e), []);
            return h.push('<div class="datagrid-group" group-index=' + c + ">"),
            e || (h.push('<span class="datagrid-group-title">'), h.push(g.groupFormatter.call(b, d.value, d.rows)), h.push("</span>")),
                h.push("</div>"),
                h.push(this.renderTable(b, d.startIndex, d.rows, e)),
                h.join("")
        },
        groupRows: function (b, c) {
            function d(a) {
                for (var b = 0; b < g.length; b++) {
                    var c = g[b];
                    if (c.value == a) return c
                }
                return null
            }
            for (var e = a.data(b, "datagrid"), f = e.options, g = [], h = 0; h < c.length; h++) {
                var i = c[h],
                    j = d(i[f.groupField]);
                j ? j.rows.push(i) : (j = {
                    value: i[f.groupField],
                    rows: [i]
                }, g.push(j))
            }
            for (var k = 0, c = [], h = 0; h < g.length; h++) {
                var j = g[h];
                j.startIndex = k,
                    k += j.rows.length,
                    c = c.concat(j.rows)
            }
            return {
                groups: g,
                rows: c
            }
        }
    });
    a.fn.datalist = function (c, d) {
        if ("string" == typeof c) {
            var e = a.fn.datalist.methods[c];
            return e ? e(this, d) : this.datagrid(c, d)
        }
        return c = c || {},
            this.each(function () {
                var d = a.data(this, "datalist");
                if (d) a.extend(d.options, c);
                else {
                    var e = a.extend({}, a.fn.datalist.defaults, a.fn.datalist.parseOptions(this), c);
                    e.columns = a.extend(!0, [], e.columns),
                        d = a.data(this, "datalist", {
                            options: e
                        })
                }
                if (b(this), !d.options.data) {
                    var f = a.fn.datalist.parseData(this);
                    f.total && a(this).datalist("loadData", f)
                }
            })
    },
        a.fn.datalist.methods = {
            options: function (b) {
                return a.data(b[0], "datalist").options
            }
        },
        a.fn.datalist.parseOptions = function (b) {
            return a.extend({}, a.fn.datagrid.parseOptions(b), a.parser.parseOptions(b, ["valueField", "textField", "groupField", {
                checkbox: "boolean",
                lines: "boolean"
            }]))
        },
        a.fn.datalist.parseData = function (b) {
            var c = a.data(b, "datalist").options,
                d = {
                    total: 0,
                    rows: []
                };
            return a(b).children().each(function () {
                var b = a.parser.parseOptions(this, ["value", "group"]),
                    e = {},
                    f = a(this).html();
                e[c.valueField] = void 0 != b.value ? b.value : f,
                    e[c.textField] = f,
                c.groupField && (e[c.groupField] = b.group),
                    d.total++,
                    d.rows.push(e)
            }),
                d
        },
        a.fn.datalist.defaults = a.extend({}, a.fn.datagrid.defaults, {
            fitColumns: !0,
            singleSelect: !0,
            showHeader: !1,
            checkbox: !1,
            lines: !1,
            valueField: "value",
            textField: "text",
            groupField: "",
            view: c,
            textFormatter: function (a, b) {
                return a
            },
            groupFormatter: function (a, b) {
                return a
            }
        })
})(jQuery);