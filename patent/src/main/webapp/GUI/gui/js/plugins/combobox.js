(function (a) {
    'use strict';

    a.fn.iCombobox = function (b, c) {
        if ("string" == typeof b) {
            var d = a.fn.iCombobox.methods[b];
            return d ? d(this, c) : this.combobox(b, c)
        }
        this.each(function () {
            b = a.fn.iCombobox.parseOptions(this, b),
                a(this).combobox(b)
        })
    };

    a.fn.iCombobox.methods = {};

    a.fn.iCombobox.parseOptions = function (b, c) {
        var d = a.extend({}, a.fn.combobox.parseOptions(b), a.fn.iCombobox.defaults, a.parser.parseOptions(b, ["id"]), c);
        return setId(b, d)
    };

    a.fn.iCombobox.defaults = {
        width: 153,
        panelHeight: "auto",
        editable: !1,
        onShowPanel: function () {
            var b = a(this).iCombobox("options");
            /*if (null != b.url && b.url.indexOf("{") >= 0) {
                var c = a(this).closest("form").serializeObject();
                a("#" + b.id).combobox("reload", replaceUrlParamValueByBrace(b.url, c))
            }*/
        },
        onChange: function (b, c) {
            var d = a(this).iCombobox("options")
            var name = a(this).attr("comboname");
            /*  $("[name='" + name + "']").val(c);*/
            $(this).parents('form').find("input[name='" + name + "']").val(c);
            if ("object" == typeof d.childCombobox) {
                var e = d.childCombobox,
                    f = a("#" + e.id);
                if (f.combobox("setText", ""), f.combobox("setValue", ""), e.url) {
                    var g = e.url.replace("{parentValue}", b);
                    f.combobox("reload", g)
                }
            }
        },
        onSelect: function (b) {
            var c = a(this).iCombobox("options");
            if (c.param) {
                var d = a(this).closest("form"),
                    e = getSelectedRowJson(c.param, b);
                a("#" + d.attr("id")).form("load", e)
            }
        }
    };

    // combox

    function b(b, c) {
        var d = a.data(b, "combobox");
        return a.easyui.indexOfArray(d.data, d.options.valueField, c)
    }

    function c(b, c) {
        var d = a.data(b, "combobox").options,
            e = a(b).combo("panel"),
            f = d.finder.getEl(b, c);
        if (f.length) if (f.position().top <= 0) {
            var g = e.scrollTop() + f.position().top;
            e.scrollTop(g)
        } else if (f.position().top + f.outerHeight() > e.height()) {
            var g = e.scrollTop() + f.position().top + f.outerHeight() - e.height();
            e.scrollTop(g)
        }
        e.triggerHandler("scroll")
    }

    function d(b, c) {
        var d = a.data(b, "combobox").options,
            f = a(b).combobox("panel"),
            g = f.children("div.combobox-item-hover");
        g.length || (g = f.children("div.combobox-item-selected")),
            g.removeClass("combobox-item-hover");
        var h = "div.combobox-item:visible:not(.combobox-item-disabled):first",
            i = "div.combobox-item:visible:not(.combobox-item-disabled):last";
        if (g.length ? "next" == c ? (g = g.nextAll(h), g.length || (g = f.children(h))) : (g = g.prevAll(h), g.length || (g = f.children(i))) : g = f.children("next" == c ? h : i), g.length) {
            g.addClass("combobox-item-hover");
            var j = d.finder.getRow(b, g);
            j && (a(b).combobox("scrollTo", j[d.valueField]), d.selectOnNavigation && e(b, j[d.valueField]))
        }
    }

    function e(b, c, d) {
        var e = a.data(b, "combobox").options,
            f = a(b).combo("getValues");
        a.inArray(c + "", f) == -1 && (e.multiple ? f.push(c) : f = [c], g(b, f, d))
    }

    function f(b, c) {
        var d = (a.data(b, "combobox").options, a(b).combo("getValues")),
            e = a.inArray(c + "", d);
        e >= 0 && (d.splice(e, 1), g(b, d))
    }

    function g(b, c, d) {
        var e = a.data(b, "combobox").options,
            f = a(b).combo("panel");
        a.isArray(c) || (c = c.split(e.separator)),
        e.multiple || (c = c.length ? [c[0]] : [""]);
        var g = a(b).combo("getValues");
        f.is(":visible") && f.find(".combobox-item-selected").each(function () {
            var c = e.finder.getRow(b, a(this));
            c && a.easyui.indexOfArray(g, c[e.valueField]) == -1 && a(this).removeClass("combobox-item-selected")
        }),
            a.map(g, function (d) {
                if (a.easyui.indexOfArray(c, d) == -1) {
                    var f = e.finder.getEl(b, d);
                    f.hasClass("combobox-item-selected") && (f.removeClass("combobox-item-selected"), e.onUnselect.call(b, e.finder.getRow(b, d)))
                }
            });
        for (var h = null, i = [], j = [], k = 0; k < c.length; k++) {
            var l = c[k],
                m = l,
                n = e.finder.getRow(b, l);
            if (n) {
                m = n[e.textField],
                    h = n;
                var o = e.finder.getEl(b, l);
                o.hasClass("combobox-item-selected") || (o.addClass("combobox-item-selected"), e.onSelect.call(b, n))
            }
            i.push(l),
                j.push(m)
        }
        if (d || a(b).combo("setText", j.join(e.separator)), e.showItemIcon) {
            var p = a(b).combobox("textbox");
            p.removeClass("textbox-bgicon " + e.textboxIconCls),
            h && h.iconCls && (p.addClass("textbox-bgicon " + h.iconCls), e.textboxIconCls = h.iconCls)
        }

        a(b).combo("setValues", i),
            f.triggerHandler("scroll")
    }

    function h(b, c, d) {
        var e = a.data(b, "combobox"),
            opts = e.options;

        e.data = opts.loadFilter.call(b, c);
        if(opts.allowNull){
            var s={};s[opts.valueField]='';s[opts.textField]="";
            e.data.unshift(s)}
        opts.view.render.call(opts.view, b, a(b).combo("panel"), e.data);

        var h = a(b).combobox("getValues");
        a.easyui.forEach(e.data, !1, function (b) {
            b.selected && a.easyui.addArrayItem(h, b[opts.valueField] + "")
        });

        opts.multiple ? g(b, h, d) : g(b, h.length ? [h[h.length - 1]] : [], d);

        opts.onLoadSuccess.call(b, c)
    }

    function i(b, c, d, e) {
        var f = a.data(b, "combobox").options;
        c && (f.url = c),
            d = a.extend({}, f.queryParams, d || {}),
        0 != f.onBeforeLoad.call(b, d) && f.loader.call(b, d, function (a) {
            h(b, a, e)
        }, function () {
            f.onLoadError.apply(this, arguments)
        })
    }

    function j(b, c) {
        function d(a) {
            h.reversed ? j.addClass("combobox-item-hover") : g(b, h.multiple ? c ? a : [] : a, !0)
        }

        var f = a.data(b, "combobox"),
            h = f.options,
            j = a(),
            k = h.multiple ? c.split(h.separator) : [c];
        if ("remote" == h.mode) d(k),
            i(b, null, {
                q: c
            }, !0);
        else {
            var l = a(b).combo("panel");
            l.find(".combobox-item-hover").removeClass("combobox-item-hover"),
                l.find(".combobox-item,.combobox-group").hide();
            var m = f.data,
                n = [];
            a.map(k, function (c) {
                c = a.trim(c);
                var d = c,
                    f = void 0;
                j = a();
                for (var g = 0; g < m.length; g++) {
                    var i = m[g];
                    if (h.filter.call(b, c, i)) {
                        var k = i[h.valueField],
                            l = i[h.textField],
                            o = i[h.groupField],
                            p = h.finder.getEl(b, k).show();
                        l.toLowerCase() == c.toLowerCase() && (d = k, h.reversed ? j = p : e(b, k, !0)),
                        h.groupField && f != o && (h.finder.getGroupEl(b, o).show(), f = o)
                    }
                }
                n.push(d)
            }),
                d(n)
        }
    }

    function k(c) {
        var d = a(c),
            e = d.combobox("options"),
            f = d.combobox("panel"),
            g = f.children("div.combobox-item-hover");
        if (g.length) {
            g.removeClass("combobox-item-hover");
            var h = e.finder.getRow(c, g),
                i = h[e.textField];
            e.multiple && g.hasClass("combobox-item-selected") ? d.combobox("unselect", i) : d.combobox("select", i)
        }
        var j = [];
        a.map(d.combobox("getValues"), function (a) {
            b(c, a) >= 0 && j.push(a)
        }),
            d.combobox("setValues", j),
        e.multiple || d.combobox("hidePanel")
    }

    function init(b) {

        var c = a.data(b, "combobox"),
            opts = c.options,
            unit = a(b);

        unit.addClass("combobox-f");

        unit.combo(a.extend({}, opts, {
            onShowPanel: function () {
                a(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
                g(this, a(this).combobox("getValues"), !0);
                a(this).combobox("scrollTo", a(this).combobox("getValue"));
                opts.onShowPanel.call(this);
            }
        }));

        var e = unit.combo("panel");
        e.unbind(".combobox");

        for (var event in opts.panelEvents) {
            e.bind(event + ".combobox", {target: b}, opts.panelEvents[event])
        }
    }

    function onMouseover(b) {
        a(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
        var c = a(b.target).closest("div.combobox-item");
        c.hasClass("combobox-item-disabled") || c.addClass("combobox-item-hover"),
            b.stopPropagation()
    }

    function onMouseout(b) {
        a(b.target).closest("div.combobox-item").removeClass("combobox-item-hover"),
            b.stopPropagation()
    }

    function onClick(b) {
        var c = a(this).panel("options").comboTarget;
        if (c) {
            var d = a(c).combobox("options"),
                g = a(b.target).closest("div.combobox-item");
            if (g.length && !g.hasClass("combobox-item-disabled")) {
                var h = d.finder.getRow(c, g);
                if (h) {
                    d.blurTimer && (clearTimeout(d.blurTimer), d.blurTimer = null);
                    d.onClick.call(c, h);

                    var i = h[d.valueField];
                    d.multiple ? g.hasClass("combobox-item-selected") ? f(c, i) : e(c, i) : a(c).combobox("setValue", i).combobox("hidePanel");
                    b.stopPropagation()
                }
            }
        }
    }

    function onScroll(b) {
        var c = a(this).panel("options").comboTarget;
        if (c) {
            var d = a(c).combobox("options");
            if ("sticky" == d.groupPosition) {
                var e = a(this).children(".combobox-stick");
                e.length || (e = a('<div class="combobox-stick"></div>').appendTo(this)),
                    e.hide();
                var f = a(c).data("combobox");
                a(this).children(".combobox-group:visible").each(function () {
                    var b = a(this),
                        g = d.finder.getGroup(c, b),
                        h = f.data[g.startIndex + g.count - 1],
                        i = d.finder.getEl(c, h[d.valueField]);
                    if (b.position().top < 0 && i.position().top > 0) return e.show().html(b.html()),
                        !1
                })
            }
        }
    }

    a.fn.combobox = function (b, c) {
        if ("string" == typeof b) {
            var d = a.fn.combobox.methods[b];
            return d ? d(this, c) : this.combo(b, c)
        }

        b = b || {};

        return this.each(function () {
            var c = a.data(this, "combobox");

            if (!c) {
                c = a.data(this, "combobox", {
                    options: a.extend({}, a.fn.combobox.defaults, a.fn.combobox.parseOptions(this), b),
                    data: []
                });
            }


            a.extend(c.options, b);

            init(this);

            if (c.options.data) {
                h(this, c.options.data);
            } else {
                var d = a.fn.combobox.parseData(this);
                d.length && h(this, d)
            }

            i(this)
        })
    };

    a.fn.combobox.methods = {
        options: function (b) {
            var c = b.combo("options");
            return a.extend(a.data(b[0], "combobox").options, {
                width: c.width,
                height: c.height,
                originalValue: c.originalValue,
                disabled: c.disabled,
                readonly: c.readonly
            })
        },
        cloneFrom: function (b, c) {
            return b.each(function () {
                a(this).combo("cloneFrom", c),
                    a.data(this, "combobox", a(c).data("combobox")),
                    a(this).addClass("combobox-f").attr("comboboxName", a(this).attr("textboxName"))
            })
        },
        getData: function (b) {
            return a.data(b[0], "combobox").data
        },
        setValues: function (a, b) {
            return a.each(function () {
                g(this, b)
            })
        },
        setValue: function (b, c) {
            return b.each(function () {
                g(this, a.isArray(c) ? c : [c])
            })
        },
        clear: function (a) {
            return a.each(function () {
                g(this, [])
            })
        },
        reset: function (b) {
            return b.each(function () {
                var b = a(this).combobox("options");
                b.multiple ? a(this).combobox("setValues", b.originalValue) : a(this).combobox("setValue", b.originalValue)
            })
        },
        loadData: function (a, b) {
            return a.each(function () {
                h(this, b)
            })
        },
        reload: function (b, c) {
            return b.each(function () {
                if ("string" == typeof c) i(this, c);
                else {
                    if (c) {
                        var b = a(this).combobox("options");
                        b.queryParams = c
                    }
                    i(this)
                }
            })
        },
        select: function (a, b) {
            return a.each(function () {
                e(this, b)
            })
        },
        unselect: function (a, b) {
            return a.each(function () {
                f(this, b)
            })
        },
        scrollTo: function (a, b) {
            return a.each(function () {
                c(this, b)
            })
        }
    };

    a.fn.combobox.parseOptions = function (b) {
        a(b);
        return a.extend({}, a.fn.combo.parseOptions(b), a.parser.parseOptions(b, ["valueField", "textField", "groupField", "groupPosition", "mode", "method", "url", {
            showItemIcon: "boolean",
            limitToList: "boolean"
        }]))
    };

    a.fn.combobox.parseData = function (b) {
        function c(b, c) {
            var f = a(b),
                g = {};
            g[e.valueField] = void 0 != f.attr("value") ? f.attr("value") : f.text(),
                g[e.textField] = f.text(),
                g.iconCls = a.parser.parseOptions(b, ["iconCls"]).iconCls,
                g.selected = f.is(":selected"),
                g.disabled = f.is(":disabled"),
            c && (e.groupField = e.groupField || "group", g[e.groupField] = c),
                d.push(g)
        }

        var d = [],
            e = a(b).combobox("options");
         a(b).children().each(function () {
            if ("optgroup" == this.tagName.toLowerCase()) {
                var b = a(this).attr("label");
                a(this).children().each(function () {
                    c(this, b)
                })
            } else c(this)
        });

        return d;
    };

    var q = 0;

    a.fn.combobox.defaults = a.extend({}, a.fn.combo.defaults, {
        valueField: "value",
        textField: "text",
        groupPosition: "static",
        groupField: null,
        groupFormatter: function (a) {
            return a
        },
        mode: "local",
        method: "post",
        url: null,
        data: null,
        queryParams: {},
        showItemIcon: !1,
        limitToList: !1,
        view: {
            render: function (b, c, datas) {
                var e = a.data(b, "combobox"),
                    opts = f = e.options;
                    q++;
                    e.itemIdPrefix = "_easyui_combobox_i" + q;
                    e.groupIdPrefix = "_easyui_combobox_g" + q;
                    e.groups = [];

                var g = [];
                for (var h = void 0, i = 0; i < datas.length; i++) {
                    var obj = datas[i],
                        k = obj[opts.textField],
                        l = obj[opts.groupField];


                    if ( l ){
                        if (  h != l ) {
                            h = l,
                                e.groups.push({value: l, startIndex: i, count: 1}),
                                g.push('<div id="' + (e.groupIdPrefix + "_" + (e.groups.length - 1)) + '" class="combobox-group">');
                                g.push( opts.groupFormatter ? opts.groupFormatter.call(b, l) : l);
                                g.push("</div>")
                        } else {
                            e.groups[e.groups.length - 1].count++
                        }
                    }  else {
                        h = void 0;
                    }

                    var _class = "combobox-item" + (obj.disabled ? " combobox-item-disabled" : "") + (l ? " combobox-gitem" : "");

                    g.push('<div id="' + (e.itemIdPrefix + "_" + i) + '" class="' + _class + '">');
                    opts["showItemIcon"] && opts["iconCls"] && g.push('<span class="combobox-icon ' + obj.iconCls + '"></span>');
                    g.push( opts.formatter ? opts.formatter.call(b, obj) : k);
                    g.push("</div>")
                }

                a(c).html(g.join(""))
            }
            },
        keyHandler: {
            up: function (a) {
                d(this, "prev"),
                    a.preventDefault()
            },
            down: function (a) {
                d(this, "next"),
                    a.preventDefault()
            },
            left: function (a) {
            },
            right: function (a) {
            },
            enter: function (a) {
                k(this)
            },
            query: function (a, b) {
                j(this, a)
            }
        },
        inputEvents: a.extend({}, a.fn.combo.defaults.inputEvents, {
            blur: function (b) {
                var c = b.data.target,
                    d = a(c).combobox("options");
                (d.reversed || d.limitToList) && (d.blurTimer && clearTimeout(d.blurTimer), d.blurTimer = setTimeout(function () {
                    var b = a(c).parent().length;
                    if (b) {
                        if (d.reversed) a(c).combobox("setValues", a(c).combobox("getValues"));
                        else if (d.limitToList) {
                            var e = [];
                            a.map(a(c).combobox("getValues"), function (b) {
                                var f = a.easyui.indexOfArray(a(c).combobox("getData"), d.valueField, b);
                                f >= 0 && e.push(b)
                            }),
                                a(c).combobox("setValues", e)
                        }
                        d.blurTimer = null
                    }
                }, 50))
            }
        }),
        panelEvents: {
            mouseover: onMouseover,
            mouseout: onMouseout,
            click: onClick,
            scroll: onScroll
        },
        filter: function (b, c) {
            var d = a(this).combobox("options");
            return c[d.textField].toLowerCase().indexOf(b.toLowerCase()) >= 0
        },
        formatter: function (b) {
            var c = a(this).combobox("options");
            return b[c.textField]
        },
        loader: function (b, c, d) {
            var e = a(this).combobox("options");
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
        loadFilter: function (a) {
            return a
        },

        finder: {
            getEl: function (c, d) {
                var e = b(c, d),
                    f = a.data(c, "combobox").itemIdPrefix + "_" + e;
                return a("#" + f)
            },
            getGroupEl: function (b, c) {
                var d = a.data(b, "combobox"),
                    e = a.easyui.indexOfArray(d.groups, "value", c),
                    f = d.groupIdPrefix + "_" + e;
                return a("#" + f)
            },
            getGroup: function (b, c) {
                var d = a.data(b, "combobox"),
                    e = c.attr("id").substr(d.groupIdPrefix.length + 1);
                return d.groups[parseInt(e)]
            },
            getRow: function (c, d) {
                var e = a.data(c, "combobox"),
                    f = d instanceof a ? d.attr("id").substr(e.itemIdPrefix.length + 1) : b(c, d);
                return e.data[parseInt(f)]
            }
        },

        onBeforeLoad: function (a) {
        },
        onLoadSuccess: function (a) {
            var $that = $(this);
            var name = $(this).attr("comboname");
            var b = $(this).combobox("options");
            var num = 0;
            if (a && a.length > 0) {
                $.each(a, function (i, item) {
                    if (item.selected) {
                        num++;
                        $($that.parents('form').find('input[name=' + name + ']')).val(item.value);
                        $that.combobox('setValue', item.value);
                        return false;
                    }
                })
            }
            ;
        },
        onLoadError: function () {
        },
        onSelect: function (a) {
        },
        onUnselect: function (a) {
        },
        onClick: function (item, opt) {
            var name = $(this).attr("comboname");
            var b = a(this).combobox("options");
            a(this).textbox('setValue', item[b.valueField]);
            a(this).textbox('setText', item[b.textField]);

        },
        onChange: function () {

        }

    })

})(jQuery);