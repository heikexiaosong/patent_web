(function (a) {
    'use strict';
    function b(b) {
        var c = a.data(b, "combo"),
            opts = f = c.options;
        c.panel || (c.panel = a('<div class="combo-panel"></div>').appendTo("body"), c.panel.panel({
            minWidth: f.panelMinWidth,
            maxWidth: f.panelMaxWidth,
            minHeight: f.panelMinHeight,
            maxHeight: f.panelMaxHeight,
            doSize: !1,
            closed: !0,
            cls: "combo-p",
            style: {
                position: "absolute",
                zIndex: 10
            },
            onOpen: function () {
                var b = a(this).panel("options").comboTarget,
                    c = a.data(b, "combo");
                c && c.options.onShowPanel.call(b)
            },
            onBeforeClose: function () {
                e(a(this).parent())
            },
            onClose: function () {
                var b = a(this).panel("options").comboTarget,
                    c = a(b).data("combo");
                c && c.options.onHidePanel.call(b)
            }
        }));
        var g = a.extend(!0, [], f.icons);
        opts.hasDownArrow && g.push({
            iconCls: "combo-arrow",
            handler: function (a) {
                d(a.data.target)
            }
        }),
            a(b).addClass("combo-f").textbox(a.extend({}, f, {
                icons: g,
                onChange: function () {
                }
            })),
            a(b).attr("comboName", a(b).attr("textboxName")),
            c.combo = a(b).next(),
            c.combo.addClass("combo")
    }

    function c(b) {
        var c = a.data(b, "combo");
        if (c) {
            var d = c.options;
            var e = c.panel;

            e.is(":visible") && e.panel("close"),
            d.cloned || e.panel("destroy"),
                a(b).textbox("destroy")
        }

    }

    function d(b) {
        var c = a.data(b, "combo").panel;
        if (c.is(":visible")) {
            var d = c.combo("combo");
            i(d),
            d != b && a(b).combo("showPanel")
        } else {
            var e = a(b).closest("div.combo-p").children(".combo-panel");
            a("div.combo-panel:visible").not(c).not(e).panel("close"),
                a(b).combo("showPanel")
        }
        a(b).combo("textbox").focus()
    }

    function e(b) {
        a(b).find(".combo-f").each(function () {
            var b = a(this).combo("panel");
            b.is(":visible") && b.panel("close")
        })
    }

    function f(b) {
        var c = b.data.target,
            e = a.data(c, "combo"),
            f = e.options;
        if (f.editable) {
            var g = a(c).closest("div.combo-p").children(".combo-panel");
            a("div.combo-panel:visible").not(g).each(function () {
                var b = a(this).combo("combo");
                b != c && i(b)
            })
        } else d(c)
    }

    function g(b) {
        var c = b.data.target,
            d = a(c),
            e = d.data("combo"),
            f = d.combo("options");
        switch (e.panel.panel("options").comboTarget = c, b.keyCode) {
            case 38:
                f.keyHandler.up.call(c, b);
                break;
            case 40:
                f.keyHandler.down.call(c, b);
                break;
            case 37:
                f.keyHandler.left.call(c, b);
                break;
            case 39:
                f.keyHandler.right.call(c, b);
                break;
            case 13:
                return b.preventDefault(),
                    f.keyHandler.enter.call(c, b),
                    !1;
            case 9:
            case 27:
                i(c);
                break;
            default:
                f.editable && (e.timer && clearTimeout(e.timer), e.timer = setTimeout(function () {
                    var a = d.combo("getText");
                    e.previousText != a && (e.previousText = a, d.combo("showPanel"), f.keyHandler.query.call(c, a, b), d.combo("validate"))
                }, f.delay))
        }
    }

    function h(b) {
        function c() {
            var b = f.offset().left;
            return "right" == h.panelAlign && (b += f._outerWidth() - g._outerWidth()),
            b + g._outerWidth() > a(window)._outerWidth() + a(document).scrollLeft() && (b = a(window)._outerWidth() + a(document).scrollLeft() - g._outerWidth()),
            b < 0 && (b = 0),
                b
        }

        function d() {
            var b = f.offset().top + f._outerHeight();
            return b + g._outerHeight() > a(window)._outerHeight() + a(document).scrollTop() && (b = f.offset().top - g._outerHeight()),
            b < a(document).scrollTop() && (b = f.offset().top + f._outerHeight()),
                b
        }

        var e = a.data(b, "combo"),
            f = e.combo,
            g = e.panel,
            h = a(b).combo("options"),
            i = g.panel("options");
        i.comboTarget = b,
        i.closed && (g.panel("panel").show().css({
            zIndex: a.fn.menu ? a.fn.menu.defaults.zIndex++ : a.fn.window ? a.fn.window.defaults.zIndex++ : 99,
            left: -999999
        }), g.panel("resize", {
            width: h.panelWidth ? h.panelWidth : f._outerWidth(),
            height: h.panelHeight
        }), g.panel("panel").hide(), g.panel("open")),


            function () {
                i.comboTarget == b && g.is(":visible") && (g.panel("move", {
                    left: c(),
                    top: d()
                }), setTimeout(arguments.call, 200))
            }()
    }

    function i(b) {
        var c = a.data(b, "combo").panel;
        c.panel("close")
    }

    function j(b, c) {
        var d = a.data(b, "combo"),
            e = a(b).textbox("getText");
        e != c && a(b).textbox("setText", c),
            d.previousText = c
    }

    function k(b) {
        var c = a.data(b, "combo"),
            d = c.options,
            e = a(b).next(),
            f = [];
        return e.find(".textbox-value").each(function () {
            f.push(a(this).val())
        }),
            d.multivalue ? f : f.length ? f[0].split(d.separator) : f
    }

    function l(b, c) {
        function d(c) {
            var d = a(b).attr("textboxName") || "",
                e = a('<input type="hidden" class="textbox-value" value="' + c + '">').appendTo(f);
            e.attr("name", d),
            g.disabled && e.attr("disabled", "disabled")
        }

        var e = a.data(b, "combo"),
            f = e.combo,
            g = a(b).combo("options");
        a.isArray(c) || (c = c.split(g.separator));
        var h = k(b);
        if (f.find(".textbox-value").remove(), c.length) if (g.multivalue) for (var i = 0; i < c.length; i++) d(c[i]);
        else d(c.join(g.separator));
        var j = function () {
            if (h.length != c.length) return !0;
            for (var a = 0; a < c.length; a++) if (c[a] != h[a]) return !0;
            return !1
        }();
        j && (a(b).val(c.join(g.separator)), g.multiple ? g.onChange.call(b, c, h) : g.onChange.call(b, c[0], h[0]), a(b).closest("form").trigger("_change", [b]))
    }

    function m(a) {
        var b = k(a);
        return b[0]
    }

    function n(a, b) {
        l(a, [b])
    }

    function o(b) {
        var c = a.data(b, "combo").options,
            d = c.onChange;
        c.onChange = function () {
        },
            c.multiple ? l(b, c.value ? c.value : []) : n(b, c.value),
            c.onChange = d;

    }

    a(function () {
        a(document).unbind(".combo").bind("mousedown.combo mousewheel.combo", function (b) {
            var c = a(b.target).closest("span.combo,div.combo-p,div.menu");
            return c.length ? void e(c) : void a("body>div.combo-p>div.combo-panel:visible").panel("close")
        })
    });

    a.fn.combo = function (c, d) {
        if ("string" == typeof c) {
            var e = a.fn.combo.methods[c];
            return e ? e(this, d) : this.textbox(c, d)
        }

        c = c || {};

        return this.each(function () {
                var d = a.data(this, "combo");

                d ? (a.extend(d.options, c), void 0 != c.value && (d.options.originalValue = c.value)) : (d = a.data(this, "combo", {
                    options: a.extend({}, a.fn.combo.defaults, a.fn.combo.parseOptions(this), c),
                    previousText: ""
                }), d.options.multiple && "" == d.options.value ? d.options.originalValue = [] : d.options.originalValue = d.options.value);

                b(this);
                o(this);
            });
    };

    a.fn.combo.methods = {
        options: function (b) {
            var c = b.textbox("options");
            return a.extend(a.data(b[0], "combo").options, {
                width: c.width,
                height: c.height,
                disabled: c.disabled,
                readonly: c.readonly
            })
        },
        cloneFrom: function (b, c) {
            return b.each(function () {
                a(this).textbox("cloneFrom", c),
                    a.data(this, "combo", {
                        options: a.extend(!0, {
                            cloned: !0
                        }, a(c).combo("options")),
                        combo: a(this).next(),
                        panel: a(c).combo("panel")
                    }),
                    a(this).addClass("combo-f").attr("comboName", a(this).attr("textboxName"))
            })
        },
        combo: function (a) {
            return a.closest(".combo-panel").panel("options").comboTarget
        },
        panel: function (b) {
            return a.data(b[0], "combo").panel
        },
        destroy: function (a) {
            return a.each(function () {
                c(this)
            })
        },
        showPanel: function (a) {
            return a.each(function () {
                h(this)
            })
        },
        hidePanel: function (a) {
            return a.each(function () {
                i(this)
            })
        },
        clear: function (b) {
            return b.each(function () {
                a(this).textbox("setText", "");
                var b = a.data(this, "combo").options;
                b.multiple ? a(this).combo("setValues", []) : a(this).combo("setValue", "")
            })
        },
        reset: function (b) {
            return b.each(function () {
                var b = a.data(this, "combo").options;
                b.multiple ? a(this).combo("setValues", b.originalValue) : a(this).combo("setValue", b.originalValue)
            })
        },
        setText: function (a, b) {
            return a.each(function () {
                j(this, b)
            })
        },
        getValues: function (a) {
            return k(a[0])
        },
        setValues: function (a, b) {
            return a.each(function () {
                l(this, b)
            })
        },
        getValue: function (a) {
            return m(a[0])
        },
        setValue: function (a, b) {
            return a.each(function () {
                n(this, b)
            })
        }
    };

    a.fn.combo.parseOptions = function (b) {
        var c = a(b);
        return a.extend({}, a.fn.textbox.parseOptions(b), a.parser.parseOptions(b, ["separator", "panelAlign", {
            panelWidth: "number",
            hasDownArrow: "boolean",
            delay: "number",
            reversed: "boolean",
            multivalue: "boolean",
            selectOnNavigation: "boolean"
        },
            {
                panelMinWidth: "number",
                panelMaxWidth: "number",
                panelMinHeight: "number",
                panelMaxHeight: "number"
            }]), {
            panelHeight: "auto" == c.attr("panelHeight") ? "auto" : parseInt(c.attr("panelHeight")) || void 0,
            multiple: !!c.attr("multiple") || void 0
        })
    };

    a.fn.combo.defaults = a.extend({}, a.fn.textbox.defaults, {
        inputEvents: {
            click: f,
            keydown: g,
            paste: g,
            drop: g
        },
        panelWidth: null,
        panelHeight: 200,
        panelMinWidth: null,
        panelMaxWidth: null,
        panelMinHeight: null,
        panelMaxHeight: null,
        panelAlign: "left",
        reversed: !1,
        multiple: !1,
        multivalue: !0,
        selectOnNavigation: !0,
        separator: ",",
        hasDownArrow: !0,
        delay: 200,
        keyHandler: {
            up: function (a) {
            },
            down: function (a) {
            },
            left: function (a) {
            },
            right: function (a) {
            },
            enter: function (a) {
            },
            query: function (a, b) {
            }
        },
        onShowPanel: function () {
        },
        onHidePanel: function () {
        },
        onChange: function (a, b) {
        }
    })

})(jQuery);