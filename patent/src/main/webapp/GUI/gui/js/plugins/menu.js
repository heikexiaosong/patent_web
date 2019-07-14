(function (a) {
    'use strict';

    a.fn.iMenu = function (b, c) {
        if ("string" == typeof b) {
            var d = a.fn.iMenu.methods[b];
            return d ? d(this, c) : this.menu(b, c)
        }
        this.each(function () {
            b = a.fn.iMenu.parseOptions(this, b),
                a(this).menu(b)
        })
    };

    a.fn.iMenu.methods = {};

    a.fn.iMenu.parseOptions = function (b, c) {
        var d = a.extend({}, a.fn.menu.parseOptions(b), a.fn.iMenu.defaults, a.parser.parseOptions(b, ["id"]), c);
        return setId(b, d)
    };

    a.fn.iMenu.defaults = {}


})(jQuery);