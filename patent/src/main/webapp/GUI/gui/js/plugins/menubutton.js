(function (a) {
    'use strict';

    a.fn.iMenubutton = function (b, opts) {
        if ("string" == typeof b) {
            var method = a.fn.iMenubutton.methods[b];
            return method ? method(this, opts) : this.menubutton(b, opts)
        }

        this.each(function () {
            b = a.fn.iMenubutton.parseOptions(this, b),
                b = bindMenuClickEvent(a(this), b),
                b.text = "" == b.text ? a(this).text() : b.text,
                a(this).menubutton(b)
        })
    };

    a.fn.iMenubutton.methods = {
        openDialog: function (a) {
            return a.each(function () {
                openDialog(this)
            })
        },
        openTab: function (a) {
            return a.each(function () {
                addParentTab(this)
            })
        },
        openWindow: function (a) {
            return a.each(function () {
                openWindow(this)
            })
        },
        doAjax: function (a) {
            return a.each(function () {
                doAjaxHandler(this)
            })
        },
        request: function (a) {
            return a.each(function () {
                requestHandler(this)
            })
        },
        delete: function (a) {
            return a.each(function () {
                deleteHandler(this)
            })
        },
        filter: function (a) {
            return a.each(function () {
                filterHandler(this)
            })
        },
        search: function (a) {
            return a.each(function () {
                searchHandler(this)
            })
        },
        query: function (a) {
            return a.each(function () {
                queryHandler(this)
            })
        },
        export: function (a) {
            return a.each(function () {
                exportHandler(this)
            })
        },
        import: function (a) {
            return a.each(function () {
                importHandler(this)
            })
        },
        upload: function (a) {
            return a.each(function () {
                uploadHandler(this)
            })
        },
        edatagrid: function (a) {
            return a.each(function () {
                edatagridHandler(this)
            })
        },
        custom: function (a) {
            return a.each(function () {
                customHandler(this)
            })
        }

    };

    a.fn.iMenubutton.parseOptions = function (b, c) {
        var d = a.extend({}, a.fn.menubutton.parseOptions(b), a.fn.iMenubutton.defaults, a.parser.parseOptions(b, ["id"]), c);
        return setId(b, d)
    };

    a.fn.iMenubutton.defaults = {
        plain: !0,
        iconCls: "fa fa-cog",
        hasDownArrow: !1,
        height: 30,
        onClick: function () {
            var b = a(this).iMenubutton("options");
            a(this).iMenubutton(b.event)
        },
        onInit: function () {
            var b = a(this).iMenubutton("options");
            a(this).iMenubutton(b.event)
        }
    }
})(jQuery);