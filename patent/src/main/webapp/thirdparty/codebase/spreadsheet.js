/**
 * @license
 * Webix SpreadSheet v.6.3.1
 * This software is covered by Webix Trial License.
 * Usage without proper license is prohibited.
 * (c) XB Software Ltd.
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, function() {
    "use strict";
    function v(e) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        )(e)
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1,
                o.configurable = !0,
            "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
    }
    function i(e, t, n) {
        return t && o(e.prototype, t),  n && o(e, n), e
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && l(e, t)
    }
    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
        )(e)
    }
    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            }
        )(e, t)
    }
    function s(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function n(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    function S(e, t) {
        return function n(e) {
            if (Array.isArray(e))
                return e
        }(e) || function c(e, t) {
            var n = []
                , o = !0
                , i = !1
                , r = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (n.push(a.value),
                !t || n.length !== t); o = !0)
                    ;
            } catch (s) {
                i = !0,
                    r = s
            } finally {
                try {
                    o || null == l["return"] || l["return"]()
                } finally {
                    if (i)
                        throw r
                }
            }
            return n
        }(e, t) || function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    function k(e) {
        return function o(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
        }(e) || function t(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                return Array.from(e)
        }(e) || function n() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    function c(e) {
        return {
            view: "ssheet-suggest",
            css: "webix_ssheet_suggest",
            autowidth: !0,
            template: function(e) {
                var t = "";
                return e.icon && (t += "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + e.icon + "'></span> "),
                    t += e.value || webix.i18n.spreadsheet.menus[e.id] || e.id
            },
            data: e,
            on: {
                onItemClick: function(e) {
                    var t = this.config.master;
                    if (t) {
                        var n = webix.$$(t).getTopParentView()
                            , o = [this.getItem(e)];
                        if (webix.$$(t).config.area) {
                            var i = n.$$("cells").getSelectArea();
                            i && (o = o.concat([i.start, i.end]))
                        }
                        n.callEvent("onCommand", o)
                    }
                }
            }
        }
    }
    webix.i18n.spreadsheet = {
        labels: {
            common: "Common",
            currency: "Currency",
            number: "Number",
            percent: "Percent",
            "custom-format": "Custom",
            "decimal-places": "Decimal places",
            separator: "Group separator",
            negative: "Negative number",
            "format-docs": "How to create a format",
            "undo-redo": "Undo/Redo",
            font: "Font",
            text: "Text",
            cell: "Cell",
            align: "Align",
            format: "Number",
            column: "Column",
            borders: "Borders",
            px: "px",
            apply: "Apply",
            cancel: "Cancel",
            save: "Save",
            sheet: "Sheet",
            "conditional-format": "Conditional Format",
            condition: "Condition",
            "conditional-value": "Value",
            "conditional-style": "Style",
            "conditional-between": "between",
            "conditional-not-equal": "not equal",
            range: "Range",
            "range-title": "Named ranges",
            "range-name": "Name",
            "range-cells": "Range",
            "image-or": "or",
            "image-title": "Add image",
            "image-upload": "Select file for upload",
            "image-url": "URL (e.g. http://*)",
            "sparkline-title": "Add sparkline",
            "sparkline-type": "Type",
            "sparkline-range": "Range",
            "sparkline-color": "Color",
            "sparkline-positive": "Positive",
            "sparkline-negative": "Negative",
            "format-title": "单元格格式",
            "format-pattern": "Format pattern",
            "dropdown-empty": "Empty cells",
            "dropdown-title": "Add dropdown",
            "dropdown-range": "Range",
            ok: "OK",
            "import-title": "Import",
            "import-not-support": "Sorry, your browser does not support import",
            "export-title": "Export",
            "export-name": "Name of xslx file",
            "export-all-sheets": "Export all sheets",
            "link-title": "Add Link",
            "link-name": "Text",
            "link-url": "URL",
            image: "Image",
            graph: "Graph",
            display: "Display",
            value: "Value",
            "range-remove-confirm": "Are you sure you want to remove the range permanently?",
            "sheet-remove-confirm": "Are you sure you want to remove the sheet permanently?",
            "merge-cell-confirm": "Only the left top value will remain after merging. Continue?",
            "error-range": "The range is incorrect!",
            print: "Print",
            "print-title": "Before you print..",
            "print-settings": "General settings",
            "print-paper": "Paper size",
            "print-layout": "Layout",
            "current-sheet": "Current sheet",
            "all-sheets": "All sheets",
            selection: "Selected cells",
            borderless: "Hide gridlines",
            "sheet-names": "Show sheet names",
            "skip-rows": "Skip empty rows",
            margin: "Hide margins",
            "page-letter": "Letter",
            "page-a4": "A4 (210x297mm)",
            "page-a3": "A3 (297x420mm)",
            "page-width": "Page width",
            "page-actual": "Actual Size",
            "page-portrait": "Portrait",
            "page-landscape": "Landscape",
            comment: "Comment"
        },
        tooltips: {
            color: "Font color",
            background: "Background color",
            "font-family": "Font family",
            "font-size": "Font size",
            "text-align": "Horizontal align",
            "vertical-align": "Vertical align",
            borders: "Borders",
            "borders-no": "Clear borders",
            "borders-left": "Left border",
            "borders-top": "Top border",
            "borders-right": "Right border",
            "borders-bottom": "Bottom border",
            "borders-all": "All borders",
            "borders-outer": "Outer borders",
            "borders-top-bottom": "Top and bottom borders",
            "borders-color": "Border color",
            "align-left": "Left align",
            "align-center": "Center align",
            "align-right": "Right align",
            "align-top": "Top align",
            "align-middle": "Middle align",
            "align-bottom": "Bottom align",
            span: "Merge",
            wrap: "Text wrap",
            undo: "Undo",
            redo: "Redo",
            format: "Number format",
            "increase-decimals": "Increase decimal places",
            "decrease-decimals": "Decrease decimal places",
            "font-weight": "Bold",
            "font-style": "Italic",
            "text-decoration": "Underline",
            "hide-gridlines": "Hide/show gridlines",
            "hide-headers": "Hide/show headers",
            "freeze-columns": "Freeze/unfreeze columns",
            "add-range": "Set name for the selected range",
            conditional: "Conditional formatting",
            "add-sheet": "Add Sheet",
            "lock-cell": "Lock/unlock cell",
            clear: "Clear",
            "add-link": "Add link",
            row: "Rows",
            column: "Columns",
            sheet: "Sheet"
        },
        menus: {
            "remove-sheet": "Remove sheet",
            "rename-sheet": "Rename sheet",
            file: "File",
            "new": "New",
            "new-sheet": "New sheet",
            "excel-import": "Import from Excel",
            "excel-export": "Export to Excel",
            sheet: "Sheets",
            "copy-sheet": "Copy to new sheet",
            edit: "Edit",
            undo: "Undo",
            redo: "Redo",
            columns: "Columns",
            "insert-column": "Insert column",
            "delete-column": "Delete column",
            "show-column": "Show column",
            "hide-column": "Hide column",
            rows: "Rows",
            "insert-row": "Insert row",
            "delete-row": "Delete row",
            "show-row": "Show row",
            "hide-row": "Hide row",
            insert: "Insert",
            "conditional-format": "Conditional format",
            clear: "Clear",
            "clear-value": "Values",
            "clear-style": "Styles",
            "clear-conditional-formats": "Conditional formats",
            "clear-dropdown-editors": "Dropdowns and filters",
            "clear-comments": "Comments",
            "clear-all": "All",
            "add-image": "Image",
            "add-sparkline": "Graph",
            data: "Data",
            "add-link": "Add link",
            "add-range": "Named ranges",
            sort: "Sort",
            "sort-asc": "Sort A to Z",
            "sort-desc": "Sort Z to A",
            "create-filter": "Create filter",
            view: "View",
            "freeze-columns": "Freeze/unfreeze columns",
            "freeze-rows": "Freeze/unfreeze rows",
            "hide-gridlines": "Hide/show gridlines",
            "hide-headers": "Hide/show headers",
            "add-dropdown": "Add dropdown",
            "lock-cell": "Lock/unlock cell",
            print: "Print",
            "add-comment": "Comment"
        },
        table: {
            "math-error": "ERROR"
        }
    },
        webix.protoUI({
            name: "ssheet-align",
            $cssName: "richselect",
            $init: function(e) {
                e.options = {
                    view: "datasuggest",
                    body: {
                        view: "ssheet-icons",
                        tooltip: {
                            template: "#tooltip#"
                        },
                        xCount: 3,
                        yCount: 1
                    },
                    data: e.data
                }
            }
        }, webix.ui.richselect),
        webix.protoUI({
            name: "ssheet-borders-suggest",
            defaults: {
                width: 300
            },
            $init: function(e) {
                e.body = {
                    margin: 6,
                    cols: [{
                        view: "ssheet-icons",
                        scroll: !1,
                        select: !0,
                        xCount: 4,
                        yCount: 2,
                        tooltip: {
                            template: function(e) {
                                return webix.i18n.spreadsheet.tooltips["borders-" + e.id]
                            }
                        },
                        on: {
                            onAfterSelect: function() {
                                this.getParentView().getParentView().updateMasterValue(!0)
                            }
                        },
                        template: function(e) {
                            return "<span class='" + ("webix_ssheet_button_icon webix_ssheet_icon ssi-borders-" + e.value) + "'></span>"
                        },
                        data: e.data
                    }, {
                        view: "ssheet-separator"
                    }, {
                        rows: [{
                            view: "ssheet-color",
                            css: e.css,
                            name: e.name,
                            width: 68,
                            value: "#000000",
                            tooltip: webix.i18n.spreadsheet.tooltips["borders-color"],
                            title: "<span class='webix_icon wxi-pencil'></span>",
                            on: {
                                onChange: function() {
                                    this.getParentView().getParentView().getParentView().updateMasterValue(!1)
                                }
                            }
                        }, {}]
                    }]
                }
            },
            updateMasterValue: function(e) {
                var t = this.getValue();
                webix.$$(this.config.master).setValue(t),
                e && this.hide()
            },
            setValue: function(e) {
                e[0] && this.getList().select(e[0]),
                e[1] && this.getColorView().setValue(e[1])
            },
            getValue: function() {
                return [this.getList().getSelectedId(), this.getColorView().getValue() || ""]
            },
            getList: function() {
                return this.getBody().getChildViews()[0]
            },
            getColorView: function() {
                return this.getBody().getChildViews()[2].getChildViews()[0]
            },
            getItemText: function() {
                return "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-borders-all'>"
            }
        }, webix.ui.suggest),
        webix.protoUI({
            name: "ssheet-borders",
            $cssName: "richselect",
            $init: function(e) {
                e.options = {
                    view: "ssheet-borders-suggest",
                    fitMaster: !1,
                    data: e.data
                },
                    this.$ready.push(webix.bind(function() {
                        this.getPopup().config.master = this.config.id
                    }, this))
            },
            setValue: function(e) {
                return webix.isArray(e) && (this.config.value && e[0] == this.config.value[0] && e[1] == this.config.value[1] || this.getPopup().setValue(e),
                (this.config.value = e)[0] && this.callEvent("onChange")),
                    e
            },
            getValue: function() {
                return this.getPopup().getValue().join(",")
            },
            getList: function() {
                return this.getPopup().getBody().getChildViews()[0]
            },
            getColorView: function() {
                return this.getPopup().getBody().getChildViews()[1].getChildViews()[0]
            }
        }, webix.ui.richselect),
        webix.protoUI({
            $cssName: "colorboard",
            name: "ssheet-colorboard",
            defaults: {
                css: "webix_ssheet_colorboard",
                palette: [["#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"], ["#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"], ["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79"], ["#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47"], ["#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]]
            }
        }, webix.ui.colorboard),
        webix.protoUI({
            $cssName: "richselect",
            name: "ssheet-color",
            defaults: {
                css: "webix_ssheet_color",
                icon: "wxi-menu-down",
                suggest: {
                    borderless: !0,
                    body: {
                        view: "ssheet-colorboard",
                        height: 202,
                        on: {
                            onSelect: function(e) {
                                this.getParentView().setMasterValue({
                                    value: e
                                })
                            }
                        }
                    }
                }
            },
            $init: function() {
                this.$view.className += " webix_ssheet_color"
            },
            $renderInput: function(i, e, t) {
                var r = this.renderColor.call(this);
                return e = e.replace(/([^>]>)(.*)(<\/div)/, function(e, t, n, o) {
                    return t + i.title + r + o
                }),
                    webix.ui.colorpicker.prototype.$renderInput.call(this, i, e, t)
            },
            $setValue: function(e) {
                var t = webix.$$(this.config.popup.toString()).getBody();
                e && (t.setValue(e),
                    this.config.value = e,
                    this.getColorNode().style.backgroundColor = e)
            },
            renderColor: function() {
                return "<div class='webix_ssheet_cp_color' style='background-color:" + this.config.value + ";'> </div>"
            },
            getColorNode: function() {
                return this.$view.firstChild.firstChild.childNodes[1]
            },
            $renderIcon: function() {
                return webix.ui.text.prototype.$renderIcon.apply(this, arguments)
            }
        }, webix.ui.colorpicker),
        webix.protoUI({
            $cssName: "window",
            name: "ssheet-dialog",
            $init: function(e) {
                this.$view.className += " webix_ssheet_dialog",
                    this.config.buttons = e.buttons
            },
            getHeaderConfig: function(e) {
                return {
                    paddingX: 10,
                    paddingY: 5,
                    height: 60,
                    cols: [{
                        view: "label",
                        label: e
                    }, {
                        view: "icon",
                        css: "webix_ssheet_hide_icon",
                        icon: "webix_ssheet_icon ssi-close",
                        width: 50,
                        click: function() {
                            this.getTopParentView().callEvent("onHideClick", [])
                        }
                    }]
                }
            },
            getBodyConfig: function(e) {
                return e.borderless = !0,
                    {
                        view: "form",
                        css: "webix_ssheet_form",
                        paddingY: 0,
                        elements: this.getFormElements(e)
                    }
            },
            getFormElements: function(e) {
                var t;
                return webix.isArray(e) ? t = e : (t = []).push(e),
                this.config.buttons && (t.push({
                    height: 1
                }),
                    t.push({
                        margin: 10,
                        cols: [{}, {
                            view: "button",
                            css: "ssheet_cancel_button",
                            label: webix.i18n.spreadsheet.labels.cancel,
                            autowidth: !0,
                            click: function() {
                                this.getTopParentView().callEvent("onCancelClick", [])
                            }
                        }, {
                            view: "button",
                            label: webix.i18n.spreadsheet.labels.save,
                            autowidth: !0,
                            click: function() {
                                this.getTopParentView().callEvent("onSaveClick", [])
                            }
                        }]
                    })),
                    t.push({
                        height: 10,
                        borderless: !0
                    }),
                    t
            },
            body_setter: function(e) {
                return "object" == v(e) && (e.paddingY = e.paddingY || 0,
                    "form" == e.view && e.elements ? (e.elements = this.getFormElements(e.elements),
                    e.css || (e.css = "webix_ssheet_form")) : e = this.getBodyConfig(e)),
                    webix.ui.window.prototype.body_setter.call(this, e)
            },
            head_setter: function(e) {
                return e && (e = this.getHeaderConfig(e)),
                    webix.ui.window.prototype.head_setter.call(this, e)
            },
            defaults: {
                padding: 0,
                move: !0,
                head: !0,
                buttons: !0,
                autofocus: !1,
                width: 350
            }
        }, webix.ui.window, webix.IdSpace),
        webix.protoUI({
            $cssName: "datatable",
            name: "ssheet-dialog-table",
            $init: function(e) {
                e.headerRowHeight || (e.headerRowHeight = 34),
                    this.$view.className += " webix_ssheet_table webix_ssheet_dialog_table"
            }
        }, webix.ui.datatable),
        webix.protoUI({
            name: "ssheet-form-popup",
            defaults: {
                padding: 0,
                borderless: !0
            },
            $init: function() {
                this.$view.className += " webix_ssheet_form"
            }
        }, webix.ui.suggest),
        webix.protoUI({
            name: "ssheet-form-suggest",
            defaults: {
                padding: 0,
                borderless: !0
            },
            $init: function() {
                this.$view.className += " webix_ssheet_suggest"
            }
        }, webix.ui.suggest),
        webix.protoUI({
            $cssName: "colorpicker",
            name: "ssheet-colorpicker",
            $init: function() {
                this.$view.className += " webix_ssheet_colorpicker"
            },
            defaults: {
                icon: "wxi-menu-down",
                suggest: {
                    borderless: !0,
                    body: {
                        view: "ssheet-colorboard",
                        height: 202,
                        on: {
                            onSelect: function(e) {
                                this.getParentView().setMasterValue({
                                    value: e
                                })
                            }
                        }
                    }
                }
            }
        }, webix.ui.colorpicker),
        webix.protoUI({
            name: "formlate",
            setValue: function(e) {
                return this.setHTML(e)
            },
            getValue: function() {
                return ""
            }
        }, webix.ui.template),
        webix.protoUI({
            name: "ssheet-icons",
            $cssName: "dataview",
            $init: function() {
                this.$view.className += " webix_ssheet_dataview"
            },
            defaults: {
                borderless: !0,
                template: "<span class='webix_ssheet_button_icon #css#' ></span>",
                type: {
                    width: 36,
                    height: 36
                }
            }
        }, webix.ui.dataview),
        webix.protoUI({
            name: "ssheet-suggest",
            defaults: {
                padding: 0,
                css: "webix_ssheet_suggest"
            }
        }, webix.ui.contextmenu),
        webix.protoUI({
            name: "suggest-formula",
            defaults: {
                fitMaster: !1,
                width: 200,
                filter: function(e, t) {
                    var n = webix.$$(this.config.master).getInputNode()
                        , o = n.selectionStart
                        , i = n.value;
                    if ("=" === i.charAt(0)) {
                        var r = i.substring(0, o).match(/([a-zA-Z]+)$/)
                            , a = i.charAt(o).search(/[^A-Za-z0-9]/);
                        return !r || o !== i.length && 0 !== a || (t = r[0]),
                        0 === e.value.toString().toLowerCase().indexOf(t.toLowerCase())
                    }
                }
            },
            $init: function() {
                var i = this;
                this.attachEvent("onBeforeShow", function(e) {
                    if (e.tagName) {
                        if (!e.value || "=" !== e.value.charAt(0))
                            return !1;
                        var t = webix.html.offset(e)
                            , n = t.y + t.height
                            , o = t.x + 9 * e.selectionStart;
                        return webix.ui.popup.prototype.show.apply(i, [{
                            x: o,
                            y: n
                        }]),
                            !1
                    }
                })
            },
            setMasterValue: function(e, t) {
                var n = e.id ? this.getItemText(e.id) : e.text || e.value;
                webix.$$(this.config.master).setValueHere(n),
                t || this.hide(!0),
                    this.callEvent("onValueSuggest", [e, n])
            },
            $enterKey: function(e) {
                if (e.isVisible())
                    return webix.ui.suggest.prototype.$enterKey.apply(this, arguments)
            }
        }, webix.ui.suggest),
        webix.protoUI({
            name: "live-editor",
            $cssName: "text webix_ssheet_formula",
            defaults: {
                keyPressTimeout: 25
            },
            $init: function(e) {
                var t = this;
                e.suggest = {
                    view: "suggest-formula",
                    data: e.suggestData
                },
                    this.attachEvent("onKeyPress", function(e) {
                        13 === e && 300 < new Date - (t._last_value_set || 0) && (t.updateCellValue(),
                            webix.delay(function() {
                                this.getTopParentView()._table.moveSelection("down")
                            }, t))
                    }),
                    this.attachEvent("onAfterRender", webix.once(function() {
                        var e = this.getInputNode()
                            , t = webix.env.isIE8 ? "propertychange" : "input";
                        webix.event(e, t, webix.bind(this.paintValue, this)),
                            webix.event(e, "keydown", webix.bind(this.endEdit, this))
                    }))
            },
            endEdit: function(e) {
                var t = e.which || e.keyCode
                    , n = this.getInputNode();
                if (9 == t || 36 < t && t < 41 && "=" !== n.value.charAt(0)) {
                    var o = 40 == t ? "down" : 39 === t ? "right" : 37 == t ? "left" : "up";
                    9 === t && (o = "right"),
                        this.updateCellValue(),
                        this.getTopParentView()._table.moveSelection(o)
                }
            },
            paintValue: function() {
                var e = this.getTopParentView()
                    , t = this.config.activeCell
                    , n = e._table.getItemNode(t);
                t && n && (n.innerHTML = this.getValue())
            },
            updateCellValue: function() {
                var e = this.getValue()
                    , t = this.getTopParentView()
                    , n = this.config.activeCell;
                n ? e != t.getCellValue(n.row, n.column) && (this.config.value = e,
                    t.setCellValue(n.row, n.column, e),
                    t.refresh()) : this.setValue("")
            },
            $setValueHere: function(e) {
                this.setValueHere(e)
            },
            setValueHere: function(e) {
                this._last_value_set = new Date;
                var t = this.getInputNode();
                if (t.value && "=" === t.value.charAt(0)) {
                    var n = t.value
                        , o = t.selectionStart
                        , i = n.substring(0, o)
                        , r = n.substring(o);
                    i = i.replace(/([a-zA-Z(]+)$/, e),
                        t.value = i + "(" + r,
                        t.setSelectionRange(i.length + 1, i.length + 1)
                }
            },
            expectRange: function() {
                var e = this.getValue().trim();
                return e.substr(e.length - 1, 1).match(/[(,]/)
            },
            expectOperator: function() {
                var e = this.getValue().trim()
                    , t = e.substr(e.length - 1, 1);
                return "=" == e.substr(0, 1) && t.match(/[+&\-/*%=(:,]/)
            },
            setRange: function(e) {
                var t = this.getInputNode()
                    , n = t.selectionStart
                    , o = this.getValue()
                    , i = o.substring(0, n) + e
                    , r = o.substring(n);
                t.value = i + r,
                    t.setSelectionRange(i.length + 1, i.length + 1),
                    this.focus()
            }
        }, webix.ui.text),
        webix.protoUI({
            name: "ssheet-separator",
            defaults: {
                css: "webix_ssheet_toolbar_spacer",
                template: " ",
                width: 1,
                borderless: !0
            }
        }, webix.ui.view),
        webix.protoUI({
            name: "sheets",
            defaults: {
                layout: "x",
                borderless: !0,
                css: "ssheet_list_sheets",
                select: !0,
                drag: "order",
                dragscroll: "x",
                scroll: !1
            }
        }, webix.EditAbility, webix.ui.list),
        webix.protoUI({
            $cssName: "toggle",
            name: "ssheet-toggle",
            toggle: function() {
                var e = this.getValue() == this.config.onValue;
                this.setValue(!e)
            },
            $setValue: function(e) {
                e == this.config.offValue ? e = !1 : e == this.config.onValue && (e = !0),
                    webix.ui.toggle.prototype.$setValue.call(this, e)
            },
            getValue: function() {
                var e = this.config
                    , t = e.value;
                return t && t != e.offValue ? e.onValue || !0 : e.offValue || !1
            },
            defaults: {
                template: function(e, t) {
                    var n = !0 === e.value || e.value == e.onValue ? " webix_pressed" : ""
                        , o = t.$renderInput(e, t);
                    return "<div class='webix_el_box" + n + "' style='width:" + e.awidth + "px; height:" + e.aheight + "px'>" + o + "</div>"
                }
            }
        }, webix.ui.toggle),
        webix.protoUI({
            name: "ssheet-bar-title",
            defaults: {
                borderless: !0
            },
            $init: function() {
                this.$view.className += " webix_ssheet_subbar_title"
            }
        }, webix.ui.template),
        webix.protoUI({
            name: "ssheet-button",
            $cssName: "button",
            defaults: {
                type: "htmlbutton",
                width: 40
            },
            $init: function(e) {
                if (this.$view.className += " webix_ssheet_button" + (e.arrow ? " webix_ssheet_button_menu" : ""),
                e.label || e.icon) {
                    var t = e.icon || e.name
                        , n = e.label || "";
                    e.arrow && (n += "<span class='webix_ssheet_button_icon webix_ssheet_icon_arrow webix_icon wxi-menu-down'></span>"),
                        e.label = "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + t + "'></span> " + n,
                        e.tooltip = webix.i18n.spreadsheet.tooltips[e.name] || ""
                }
                e.options && !e.popup && (e.popup = c(e.options))
            }
        }, webix.ui.button),
        webix.protoUI({
            name: "ssheet-button-icon-top",
            $cssName: "button",
            defaults: {
                type: "htmlbutton",
                width: 70,
                height: 70
            },
            $init: function(e) {
                if (this.$view.className += " ssheet_button_icon_top",
                    e.label) {
                    var t = e.icon || e.name || ""
                        , n = e.label;
                    e.label = "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + t + "'></span><br/>",
                        e.label += "<span class='ssheet_button_icon_top_text'>" + n + "</span>",
                    e.arrow && (e.label += "<br/><span class='ssheet_button_icon_top_arrow webix_icon wxi-menu-down'></span>"),
                        e.tooltip = webix.i18n.spreadsheet.tooltips[e.name] || ""
                }
                e.options && !e.popup && (e.popup = c(e.options))
            }
        }, webix.ui.button),
        webix.protoUI({
            name: "multicheckbox",
            defaults: {
                padding: 0,
                type: "clean",
                borderless: !0,
                elementsConfig: {
                    labelWidth: 10
                }
            },
            $init: function(e) {
                e.rows = [{
                    height: 1e-6
                }],
                    this.$ready.push(function() {
                        this._initOnChange(),
                            this.setValue(e.value)
                    })
            },
            _initOnChange: function() {
                this.attachEvent("onChange", function(e) {
                    if (this.blockEvent(),
                    "$all" === this.$eventSource.config.name) {
                        for (var t in this.elements)
                            this.elements[t].setValue(e);
                        this.getChildViews()[0].getBody().getChildViews()[0].setValue(1)
                    } else {
                        var n = this.getValue().length;
                        n === this._count && this.elements.$all.setValue(1),
                        n < this._count && this.elements.$all.setValue(0),
                        0 === n && this.elements[this._findNext(this.$eventSource.config.name)].setValue(1)
                    }
                    this.unblockEvent()
                })
            },
            _findNext: function(e) {
                for (var t in this.elements)
                    if (t !== e && "$all" !== t)
                        return t
            },
            setValue: function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                if (e = e || {},
                    this.elements = {},
                    this._count = t.length,
                "object" === v(e) && t.length) {
                    var o = []
                        , i = [];
                    for (var r in e)
                        i.push({
                            view: "checkbox",
                            labelRight: r,
                            name: r
                        });
                    var a = i.length * webix.skin.$active.inputHeight;
                    for (var l in o.push({
                        view: "scrollview",
                        body: {
                            rows: i
                        },
                        scroll: 400 < a,
                        height: 400 < a ? 400 : a
                    }),
                        o.push({
                            template: "<div class='ss_sep_line'></div>",
                            height: 10
                        }),
                        o.push({
                            view: "checkbox",
                            labelRight: webix.i18n.spreadsheet.labels["export-all-sheets"],
                            name: "$all"
                        }),
                        webix.ui(o, this),
                        e)
                        e[l] && this.elements[l].setValue(e[l])
                } else
                    1 < this.getChildViews().length && webix.ui([{
                        height: 1e-6
                    }], this)
            },
            getValue: function() {
                var e = this.getValues()
                    , t = [];
                for (var n in e)
                    e[n] && "$all" !== n && t.push(n);
                return t
            }
        }, webix.ui.form),
        webix.protoUI({
            name: "formlist",
            defaults: {
                paddingY: 5,
                height: 120
            },
            $init: function(e) {
                var t = this;
                e.cols = [{
                    css: "webix_inp_label",
                    template: e.label,
                    width: e.labelWidth,
                    borderless: !0
                }, {
                    view: "list",
                    data: e.data,
                    css: e.css,
                    template: e.template,
                    select: !0,
                    scroll: !1,
                    borderless: !0,
                    on: {
                        onSelectChange: function() {
                            t.getParentView().callEvent("onChange", [])
                        }
                    }
                }]
            },
            setValue: function(e) {
                this.getChildViews()[1].select(e)
            },
            getValue: function() {
                return this.getChildViews()[1].getSelectedId()
            },
            refresh: function() {
                this.getChildViews()[1].refresh()
            },
            focus: function() {}
        }, webix.ui.layout);
    var u = {
        value: null,
        set: function(e, t) {
            this.value ? e.call(t) : (this.start(),
                e.call(t),
                this.end())
        },
        start: function() {
            this.value = webix.uid()
        },
        end: function() {
            this.value = null
        }
    };
    function d(e, t, n) {
        var o, i = e.config.save;
        if (i) {
            if ("all" == t) {
                if (!i.all)
                    return;
                n = {
                    data: e.serialize({
                        sheets: !0
                    })
                },
                    o = i.all
            } else
                o = "string" == typeof i ? i + "/" + t : i[t];
            if (o = webix.proxy.$parse(o)) {
                if ("function" == typeof o)
                    return o(t, n);
                if (o.$proxy && o.save)
                    return o.save(e, n, null, null);
                var r = webix.ajax();
                "all" === t && r.headers({
                    "Content-type": "application/json"
                }),
                    r.post(o, n)
            }
        }
    }
    for (var h = Object.freeze({
        init: function Pi(i) {
            for (var r, t = [{
                name: "onSheetAdd",
                type: "insert"
            }, {
                name: "onSheetRemove",
                type: "remove"
            }, {
                name: "onSheetRename",
                type: "rename"
            }, {
                name: "onCellChange"
            }, {
                name: "onStyleChange"
            }, {
                name: "onAction"
            }, {
                name: "onRowOperation"
            }, {
                name: "onColumnOperation"
            }, {
                name: "onAfterConditionSet"
            }, {
                name: "onAfterRangeSet"
            }, {
                name: "onAfterSpan"
            }, {
                name: "onAfterSplit"
            }, {
                name: "onRowResize",
                view: "cells"
            }, {
                name: "onColumnResize",
                view: "cells"
            }], e = function(e) {
                var o = t[e];
                (o.view ? i.$$(o.view) : i).attachEvent(o.name, function(e, t) {
                    var n;
                    i._loading_data || (n = o.type ? "rename" == o.type ? [o.type, t, e] : [o.type, e] : ["update", i.getActiveSheet()],
                        clearTimeout(r),
                        r = webix.delay(function() {
                            return i.callEvent("onChange", n)
                        }))
                })
            }, n = 0; n < t.length; n++)
                e(n);
            i.attachEvent("onChange", function() {
                d(i, "all")
            })
        },
        save: d
    }), f = {}, m = {}, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", t = 1; t < 1e3; t++) {
        var g = parseInt((t - 1) / e.length)
            , w = (g ? e[g - 1] : "") + e[(t - 1) % e.length];
        f[w] = t,
            m[t] = w
    }
    function p(e) {
        var t = e.charCodeAt(1) < 59 ? 1 : 2
            , n = e.substr(0, t);
        return [1 * e.substr(t), f[n]]
    }
    function b(e, t) {
        var n = e.indexOf("!")
            , o = "";
        -1 !== n && ("'" === (o = e.substr(0, n))[0] && (o = o.substr(1, o.length - 2)),
            e = e.substr(n + 1));
        var i = e.split(":");
        if (2 != i.length && t) {
            if (!(e = t.ranges.getCode(e, o)))
                return null;
            i = e.split(":")
        }
        var r = p(i[0])
            , a = p(i[1]);
        return [r[0], r[1], a[0], a[1], o]
    }
    m[0] = m[1];
    var x = /[^A-Za-z0-9]/;
    function _(e) {
        return x.test(e) ? "'".concat(e, "'") : e
    }
    function y(e, t, n, o, i) {
        return (i ? _(i) + "!" : "") + m[t] + e + ":" + m[o] + n
    }
    function $(e, t) {
        if ("object" === v(e))
            return e;
        var n = b(e, t);
        return {
            start: {
                row: n[0],
                column: n[1]
            },
            end: {
                row: n[2],
                column: n[3]
            },
            sheet: n[4]
        }
    }
    function C(e, t, n, o) {
        for (var i = $(e), r = i.start.row; r <= i.end.row; r++)
            for (var a = i.start.column; a <= i.end.column; a++)
                n(t, {
                    row: r,
                    column: a
                }, o)
    }
    var E = /(([A-Za-z0-9]+|'[^']+')!|)[A-Z]+[0-9]+:[A-Z]+[0-9]+/;
    function V(e) {
        return E.test(e)
    }
    function I(e, t, n, o) {
        var i = !1;
        if (V(e)) {
            var r = S(b(e), 5)
                , a = r[0]
                , l = r[1]
                , s = r[2]
                , c = r[3]
                , u = r[4];
            "row" === t && o.row <= s ? (o.row <= a && (a += n),
                s += n,
                i = !0) : "column" === t && o.column <= c && (o.column <= l && (l += n),
                c += n,
                i = !0),
            i && (e = y(a, l, s, c, u))
        }
        return e
    }
    var z = {
        width: 38,
        margin: 7,
        paddingY: 1,
        sectorPadding: 5,
        sectorMargin: 0
    }
        , R = {
        color: "#000000",
        background: "#ffffff",
        "font-family": "Arial, Helvetica, sans-serif",
        "font-size": "15px",
        "text-align": "left",
        "vertical-align": "middle",
        "white-space": "nowrap",
        format: "common"
    };
    var A, O = ["color", "background", "text-align", "font-family", "font-size", "font-style", "text-decoration", "font-weight", "vertical-align", "wrap", "borders", "format", "border-right", "border-bottom", "border-left", "border-top"], U = {
        "vertical-align": {
            top: function() {
                return "display: block;"
            },
            middle: function(e) {
                var t = "flex-start";
                return "center" == e["text-align"] ? t = "center" : "right" == e["text-align"] && (t = "flex-end"),
                "display: flex; align-items: center;justify-content:" + t + ";"
            },
            bottom: function(e) {
                var t = "flex-start";
                return "center" == e["text-align"] ? t = "center" : "right" == e["text-align"] && (t = "flex-end"),
                "display: flex; align-items:flex-end;justify-content:" + t + ";"
            }
        },
        wrap: {
            wrap: function() {
                var e = 7 - (34 - webix.skin.$active.rowHeight);
                return "white-space: normal !important; line-height:normal !important; padding-top:" + e + "px;padding-bottom:" + e + "px;"
            },
            nowrap: function() {
                return ""
            }
        },
        format: "",
        borders: "",
        "border-left": function(e) {
            return e["border-left"] ? "border-left: 1px solid " + e["border-left"] + " !important;" : ""
        },
        "border-top": function(e) {
            return e["border-top"] ? "border-top: 1px solid " + e["border-top"] + " !important;" : ""
        },
        "border-right": function(e) {
            return e["border-right"] ? "border-right: 1px solid " + e["border-right"] + " !important;" : ""
        },
        "border-bottom": function(e) {
            return e["border-bottom"] ? "border-bottom: 1px solid " + e["border-bottom"] + " !important;" : ""
        },
        "font-weight": function(e) {
            if ("bold" == e["font-weight"])
                return "font-weight:" + ("'Roboto', sans-serif" == (e["font-family"] || R["font-family"]) ? 500 : 700) + ";"
        }
    }, F = {
        "border-left": function(e, t, n) {
            return e.column == t.start.column || "no" == n
        },
        "border-right": function(e, t, n) {
            return e.column == t.end.column || "all" == n || "no" == n
        },
        "border-top": function(e, t, n) {
            return e.row == t.start.row || "no" == n
        },
        "border-bottom": function(e, t, n) {
            return e.row == t.end.row || "all" == n || "no" == n
        }
    }, M = {
        borders: function(e, t, n, o) {
            var i = e.$$("cells").getSelectArea()
                , r = (n = n.split(","))[0]
                , a = n[1]
                , l = ["border-left", "border-right", "border-bottom", "border-top"];
            "no" == r ? a = "" : "top-bottom" == r ? l = ["border-top", "border-bottom"] : "all" != r && "outer" != r && (l = ["border-" + r]);
            for (var s = 0; s < l.length; s++) {
                var c = l[s];
                (!0 === e.callEvent("onAction", ["check-borders", {
                    row: o.row,
                    column: o.column,
                    area: i,
                    type: r,
                    mode: c
                }]) || F[c](o, i, r)) && (t = H(e, t, c, a, o))
            }
            return t
        }
    };
    function N(e) {
        e._styles = {},
            e._styles_cache = {},
            e._styles_max = 1;
        var t = ".wss_" + e.$index;
        webix.html.removeStyle(t)
    }
    function j(e, t) {
        var n = e.getRow(t.row).$cellCss;
        if (n) {
            var o = n[t.column];
            if (o)
                return e._styles[o]
        }
        return null
    }
    function T(e, t, n) {
        var o = {
            props: q(";;;;;;;;;;;;;;;")
        };
        if (n)
            for (var i in n.props)
                o.props[i] = n.props[i];
        for (var r in t)
            o.props[r] = t[r];
        o.text = Z(o);
        var a = e._styles_cache[o.text];
        return a || (G(e, o),
            o)
    }
    function B(e, t) {
        if (t.styles)
            for (var n = 0; n < t.styles.length; n++) {
                var o = t.styles[n];
                G(e, {
                    id: o[0],
                    text: o[1],
                    props: q(o[1])
                }, !0)
            }
        for (var i = 0; i < t.data.length; i++) {
            var r = S(t.data[i], 4)
                , a = r[0]
                , l = r[1]
                , s = r[3];
            s && D(e.getRow(a), l, e._styles[s])
        }
    }
    function H(e, t, n, o, i) {
        if (M[n])
            return M[n](e, t, o, i);
        if (t && t.props[n] == o)
            return t;
        var r = {
            text: "",
            id: 0,
            props: t ? webix.copy(t.props) : {}
        };
        r.props[n] = o,
            r.text = Z(r);
        var a = e._styles_cache[r.text];
        return a || (G(e, r),
            r)
    }
    function D(e, t, n) {
        e.$cellCss = e.$cellCss || {},
            e.$cellFormat = e.$cellFormat || {},
            n ? (e.$cellCss[t] = n.id,
                e.$cellFormat[t] = n.props.format || null) : (delete e.$cellCss[t],
                delete e.$cellFormat[t])
    }
    function P(e, t, n) {
        return W(e, t, n, j(e, t))
    }
    function L(e, t, n) {
        C(t, e, W, n)
    }
    function K(e, t, n, o, i) {
        var r = 0
            , a = 0;
        return A.innerHTML = t,
            A.style.width = (o || 1) + "px",
            A.style.height = (i || 1) + "px",
            A.className = "webix_table_cell webix_cell " + n,
            e._table.$view.appendChild(A),
            r = Math.max(r, A.scrollWidth),
            a = Math.max(a, A.scrollHeight),
            e._table.$view.removeChild(A),
            A.innerHTML = "",
            {
                width: r,
                height: a
            }
    }
    function W(e, t, n, o) {
        e.callEvent("onBeforeStyleChange", [t.row, t.column, n, o]) && (D(e.getRow(t.row), t.column, n),
            e.saveCell(t.row, t.column),
            e.callEvent("onStyleChange", [t.row, t.column, n, o]))
    }
    function G(e, t, n) {
        for (e._styles_cache[t.text] = t; !t.id || e._styles[t.id]; )
            t.id = "wss" + e._styles_max++;
        var o = function r(e) {
            var t = "";
            for (var n in e)
                e[n] && (U[n] ? U[n][e[n]] ? t += U[n][e[n]](e) : "function" == typeof U[n] && (t += U[n](e)) : t += n + ":" + e[n] + ";");
            return t
        }((e._styles[t.id] = t).props)
            , i = ".wss_" + e.$index;
        webix.html.addStyle(i + " ." + t.id + "{" + o + "}", i),
        n || d(e, "styles", {
            name: t.id,
            text: t.text
        })
    }
    function Z(e) {
        for (var t = [], n = 0; n < O.length; n++)
            t.push(e.props[O[n]]);
        return t.join(";")
    }
    function q(e) {
        for (var t = e.split(";"), n = {}, o = 0; o < O.length; o++)
            n[O[o]] = t[o];
        return n
    }
    function Y(e, t) {
        u.set(function() {
            C(t, e, function(e, t) {
                j(e, t) && P(e, t, null)
            })
        })
    }
    function X(e) {
        for (var t = e.serialize(), n = t.data, o = t.styles, i = {}, r = 0; r < n.length; r++) {
            var a = n[r][3];
            a && (i[a] = 1)
        }
        for (var l = [], s = 0; s < o.length; s++) {
            i[o[s][0]] && l.push(o[s])
        }
        t.styles = l,
            N(e),
            B(e, t)
    }
    var Q, J, ee, te, ne = Object.freeze({
        style_names: O,
        init: function Li(r) {
            r.attachEvent("onStyleSet", function(e, t) {
                return function i(t, n, o) {
                    u.set(function() {
                        t.eachSelectedCell(function(e) {
                            !function a(e, t, n, o) {
                                var i = j(e, t)
                                    , r = H(e, i, n, o, t);
                                r && r != i && W(e, t, r, i)
                            }(t, e, n, o)
                        })
                    }),
                        t.refresh()
                }(r, e, t)
            }),
                r.attachEvent("onDataParse", function(e) {
                    return B(r, e)
                }),
                r.attachEvent("onDataSerialize", function(e) {
                    return function i(e, t) {
                        var n = [];
                        for (var o in e._styles_cache)
                            n.push([e._styles_cache[o].id, o]);
                        t.styles = n
                    }(r, e)
                }),
                r.attachEvent("onReset", function() {
                    return N(r)
                }),
                r.attachEvent("onUndo", function(e, t, n, o) {
                    "style" == e && function i(e, t, n, o) {
                        P(e, {
                            row: t,
                            column: n
                        }, o)
                    }(r, t, n, o)
                }),
                N(r),
            A || (A = webix.html.create("DIV", {
                style: "visibility:hidden; position:absolute; top:0px; left:0px; overflow:hidden;"
            }, ""))
        },
        getStyle: j,
        addStyle: T,
        setStyle: P,
        setRangeStyle: L,
        getTextSize: K,
        clearRangeStyle: Y,
        compactStyles: X
    }), oe = {};
    function ie() {
        for (var e in Q = {},
            J = 0,
            ee = {},
            te = {},
            oe = {
                price: {
                    getFormat: function(e, t) {
                        return t.css = "webix_ssheet_format_price", webix.i18n.priceFormat(e)
                    },
                    values: webix.extend({
                        zeros: webix.i18n.priceSettings.decimalSize,
                        symbol: webix.i18n.priceFormat(""),
                        separator: 1,
                        negative: 1,
                        type: "price"
                    }, re("price"))
                },
                "int": {
                    getFormat: function(e, t) {
                        return t.css = "webix_ssheet_format_int",
                            webix.i18n.numberFormat(e)
                    },
                    values: webix.extend({
                        zeros: webix.i18n.decimalSize,
                        separator: 1,
                        negative: 1,
                        type: "int"
                    }, re("int"))
                },
                percent: {
                    getFormat: function(e, t) {
                        return t.css = "webix_ssheet_format_percent",
                        Math.round(100 * e) + "%"
                    },
                    values: webix.extend({
                        zeros: 0,
                        separator: 0,
                        negative: 1,
                        type: "percent"
                    }, re("percent"))
                }
            })
            ee[e] = ge(ve(e, oe[e].values)),
                te[ee[e]] = e
    }
    function re(e) {
        return "price" == e ? {
            groupSign: webix.i18n.priceSettings.groupDelimiter,
            decimalSign: webix.i18n.priceSettings.decimalDelimiter
        } : {
            groupSign: webix.i18n.groupDelimiter,
            decimalSign: webix.i18n.decimalDelimiter
        }
    }
    function ae(e) {
        return oe[e] ? oe[e].getFormat : oe[e]
    }
    function le(e, t) {
        return t ? ge(we({
            values: oe[e].values,
            format: ee[e]
        }), !0) : ee[e]
    }
    function se(e, t) {
        if (te[e])
            return te[e];
        var n = "object" == v(t) ? "fmt" + J : t;
        return J++,
            Q[n] = e,
            t = webix.extend("object" == v(t) ? t : {
                format: e,
                type: "custom"
            }, re("custom")),
            oe[n] = {
                getFormat: ue(e, {
                    decimalSign: t.decimalSign,
                    groupSign: t.groupSign
                }),
                values: t
            },
            ee[n] = e,
            te[e] = n
    }
    function ce(e, t, n, o, i) {
        i || (i = {
            format: o,
            type: "custom"
        });
        var r = e.getStyle(t, n)
            , a = T(e, {
            format: se(o, i)
        }, r);
        e.setStyle(t, n, a)
    }
    function ue(e, t) {
        for (var n = function a(e) {
            var t = e.match(/.*\[[><=].*/g)
                , n = e.split(";");
            return t || 1 < n.length && (n[0] = (2 < n.length ? "[>0]" : "[>=0]") + n[0],
                n[1] = "[<0]" + n[1],
            n[2] && (n[2] = "[=0]" + n[2])),
                n
        }(e), o = ['var spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";'], i = 0; i < n.length; i++) {
            var r = be(n[i]);
            o.push(he(r.condition, r.color.toLowerCase(), r.fmt, i, 0 < n.length, t))
        }
        return new Function("val","extra",o.join("\n") + " return val;")
    }
    function he(e, t, n, o, i, r) {
        var a = "";
        return e && (a += o ? "else if" : "if",
        "=" === e[0] && (e = "=" + e),
            a += "(val" + e + "){",
        i && (a += "val = Math.abs(val);")),
        t && (a += 'extra.css = "webix_ssheet_format_' + t + '";'),
        -1 !== n.indexOf("%") && (a += "val = val*100;"),
        (a += function c(e, t) {
            if (!e)
                return "return val;";
            for (var n = 0, o = 'return ""', i = "", r = !1, a = !1, l = 0; l < e.length; l++) {
                var s = xe(e[l - 1]) && xe(e[l + 1]);
                if ('"' == e[l]) {
                    if (n) {
                        o += '+"'.concat(e.substr(n, l - n), '"'),
                            n = !1;
                        continue
                    }
                    n = l
                }
                n || (e[l] === t.decimalSign && s ? i += t.decimalSign : xe(e[l]) ? (a || (o += "+fmt",
                    a = !0),
                    i += e[l]) : e[l] === t.groupSign && s ? r = !0 : o += '+"'.concat(e[l], '"'))
            }
            return i ? function f(e, t, n) {
                var o = "if (isNaN(val)) var fmt = val; else {"
                    , i = n.decimalSign
                    , r = S(_e(e, i), 2)
                    , a = r[0]
                    , l = r[1];
                l = (l || "").split("").reverse().join("");
                var s = a.indexOf("0");
                0 <= s && (s = a.length - s);
                var c = a.indexOf("?");
                0 <= c && (c = a.length - c);
                var u = l.indexOf("0");
                0 <= u && (u = l.length - u);
                var h = l.indexOf("?");
                0 <= h && (h = l.length - h);
                var d = l.length;
                return (o += "\n\tvar parts = val.toFixed(".concat(d, ').split(".");\n\tvar left = parts[0];\n\tvar lsize = left.length; \n\tvar right = parts[1] || "";\n\tif (left.length < ').concat(s, ') left = "0000000000".substr(0, ').concat(s, " - left.length)+left;\n\tif (left.length < ").concat(c, ") left = spaces.substr(0, 6*(").concat(c, " - left.length))+left;\n\tif (").concat(t, ') {\n\t\tvar buf = [];\n\t\tvar start = 3;\n\t\twhile (lsize > start) { buf.push(left.substr(left.length-start,3)); start+=3; }\n\t\tvar last = left.substr(0,left.length-start+3);\n\t\tif (last !== "-")\n\t\t\tbuf.push(last);\n\t\telse\n\t\t\tbuf.push("-"+buf.pop());\n\n\t\tleft = buf.reverse().join("').concat(n.groupSign, '");\n\t}\n\tif (right){\n\t\tvar zpoint = right.length-1;\n\t\twhile (zpoint >= ').concat(u, '){\n\t\t\tif (right[zpoint] !== "0"){\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tzpoint--;\n\t\t}\n\t\t\n\t\tif (zpoint <= right.length)\n\t\t\tright = right.substr(0, zpoint+1);\n\n\t\tif (right.length < ').concat(h, "){\n\t\t\tright += spaces.substr(0, 6*(").concat(h, ' - right.length));\n\t\t}\n\t}\n\tvar fmt = left+(right?"').concat(i, '":"")+right;\n\t')) + "}\n"
            }(i, r, t) + ";" + o + ";" : o + ";"
        }(n, r)) + (e ? "}" : "")
    }
    function de(t, n, e, o) {
        var i = function c(e, t, n) {
            {
                if (t && n) {
                    if ("object" !== v(t) || "object" !== v(n))
                        return [{
                            row: t,
                            column: n
                        }];
                    for (var o = [], i = t.row; i <= n.row; i++)
                        for (var r = t.column; r <= n.column; r++)
                            o.push({
                                row: i,
                                column: r
                            });
                    return o
                }
                return e.getSelectedId(!0)
            }
        }(t, e, o);
        if (0 != i.length) {
            var r = t.$$("cells").getItem(i[0].row)[i[0].column]
                , a = r ? r.toString() : r
                , l = t.getStyle(i[0].row, i[0].column);
            if (webix.rules.isNumber(a) || l && l.props.format) {
                u.set(function() {
                    for (var e = 0; e < i.length; e++)
                        fe(t, n, i[e])
                }),
                    t.refresh();
                var s = t.getStyle(i[0].row, i[0].column).props.format;
                t.$$("bar").setValues({
                    format: s.indexOf("fmt") < 0 ? s : "custom"
                }, !0)
            }
        }
    }
    function fe(e, t, n) {
        var o, i = e.getStyle(n.row, n.column), r = e.$$("cells").getItem(n.row)[n.column];
        if (r = r ? r.toString() : "",
        i && i.props.format) {
            var a = i.props.format;
            (o = webix.copy({
                values: oe[a].values,
                format: le(a)
            })).format = function l(e, t, n) {
                for (var o = we(e), i = 0; i < o.length; i++) {
                    if (o[i].decimals)
                        0 < t ? o[i].right.placeholders += Array(t + 1).join("0") : o[i].right.placeholders = o[i].right.placeholders.slice(0, t);
                    else {
                        var r = !o[i].left.text && !o[i].right.text
                            , a = !o[i].left.placeholders && !o[i].right.placeholders;
                        t < 0 && r && a && webix.rules.isNumber(n) && -1 < n.indexOf(".") ? (o[i].left.placeholders = "0",
                            o[i].right.placeholders = Array(n.split(".")[1].length).join(Array(t + 1).join("0"))) : 0 < t && (o[i].left.placeholders || r) && (o[i].left.placeholders = o[i].left.placeholders || "0",
                            o[i].right.placeholders = Array(t + 1).join("0"),
                            o[i].decimals = !0)
                    }
                    o[i].decimals = 0 < o[i].right.placeholders.length
                }
                return ge(o)
            }(o, t, r),
            o.values && o.values.hasOwnProperty("zeros") && (o.values.zeros = Math.max(o.values.zeros + t, 0))
        } else {
            (o = {
                values: {
                    negative: 1,
                    zeros: webix.rules.isNumber(r) && r.split(".")[1] ? Math.max(r.split(".")[1].length + t, 0) : Math.max(t, 0),
                    separator: 0,
                    type: "int"
                }
            }).format = ge(ve(o.values.type, o.values))
        }
        ce(e, n.row, n.column, o.format, o.values)
    }
    function me(e) {
        return "common" != e && (-1 != e.indexOf("fmt") || "custom" == oe[e].values.type)
    }
    function ve(e, t) {
        var n = [{
            condition: ">=0",
            left: {
                text: ""
            },
            right: {
                text: ""
            }
        }, {
            condition: "<0",
            left: {
                text: ""
            },
            right: {
                text: ""
            }
        }];
        if (webix.extend(n, re(e)),
            n[0].right.placeholders = n[1].right.placeholders = t.zeros ? Array(t.zeros + 1).join("0") : "",
            n[0].separator = n[1].separator = t.separator && "percent" != e,
            n[0].left.placeholders = n[1].left.placeholders = n[0].separator ? "#" + n.groupSign + "0" : "0",
            n[0].decimals = n[1].decimals = !!t.zeros,
            n[1].color = 1 != t.negative ? "red" : "",
            n[1].left.text += t.negative < 3 ? "-" : "",
        "percent" === e)
            n[0].right.text = n[1].right.text = "%";
        else if ("price" === e) {
            var o = oe.price.values.symbol
                , i = 0 == o.indexOf(" ");
            n[1][i ? "right" : "left"].text += o,
                n[0][i ? "right" : "left"].text += o
        }
        return n
    }
    function ge(e, t) {
        for (var n = "", o = 0; o < e.length; o++) {
            if (e[o].condition && (n += "[" + e[o].condition + "]"),
            e[o].color && (n += "[" + e[o].color + "]"),
                e[o].left.text) {
                var i = e[o].left.text;
                n += t ? '"' + i + '"' : i
            }
            if (e[o].left.placeholders) {
                var r = e[o].left.placeholders;
                n += t ? r.replace(e.groupSign, ",") : r
            }
            if (e[o].decimals && (n += t ? "." : e.decimalSign),
            e[o].right.placeholders && (n += e[o].right.placeholders),
                e[o].right.text) {
                var a = e[o].right.text;
                n += t ? '"' + a + '"' : a
            }
            o != e.length - 1 && (n += ";")
        }
        return n
    }
    function we(e) {
        for (var t = e.format.split(";"), n = [], o = 0; o < t.length; o++) {
            var i = be(t[o]);
            n[o] = {
                color: i.color,
                condition: i.condition,
                left: {},
                right: {}
            };
            var r = i.fmt;
            n.groupSign = e.values.groupSign,
                n.decimalSign = e.values.decimalSign,
            -1 < r.indexOf(n.groupSign) && (n[o].separator = !0);
            var a = _e(r, n.decimalSign)
                , l = a[0]
                , s = a[1] || "";
            a[1] && (n[o].decimals = !0),
                l = pe(l, "left", n.groupSign),
                s = pe(s, "right", n.groupSign),
                n[o].left = {
                    text: l.leftText,
                    placeholders: l.placeholders
                },
                n[o].right = {
                    text: l.rightText + s.rightText,
                    placeholders: s.placeholders
                }
        }
        return n
    }
    function pe(e, t, n) {
        var o;
        "left" == t && (o = (o = e.match(/[#?0]/)) ? o.index : Infinity);
        for (var i = "", r = "", a = "", l = 0; l < e.length; l++)
            if (xe(e[l]))
                a += e[l];
            else {
                if (e[l] == n && xe(e[l + 1]) && xe(e[l - 1])) {
                    a += e[l];
                    continue
                }
                if ("left" == t && l < o) {
                    i += e[l];
                    continue
                }
                r += e[l]
            }
        return {
            leftText: i,
            rightText: r,
            placeholders: a
        }
    }
    function be(e) {
        var t = ""
            , n = ""
            , o = e.indexOf("[");
        if (-1 !== o && e[1].match(/[><=]/)) {
            var i = e.indexOf("]");
            n = e.substr(o + 1, i - o - 1),
                e = e.substr(i + 1)
        }
        if (-1 !== (o = e.indexOf("["))) {
            var r = e.indexOf("]");
            t = e.substr(o + 1, r - o - 1),
                e = e.substr(r + 1)
        }
        return {
            condition: n,
            color: t,
            fmt: e
        }
    }
    function xe(e) {
        return "0" === e || "#" === e || "?" === e
    }
    function _e(e, t) {
        var n = e.match("[#?0][" + t + "][#?0]");
        return n ? [e.substring(0, n.index + 1), e.substring(n.index + 2)] : [e]
    }
    var ye = Object.freeze({
        get formatHelpers() {
            return oe
        },
        setDefaultFormats: ie,
        getDelimiters: re,
        serialize: function Ki(e, t) {
            var n = [];
            for (var o in ee)
                "percent" != o && "int" != o && "price" != o && n.push([o, ee[o]]);
            t.formats = n
        },
        load: function Wi(e, t) {
            var n, o = t.formats;
            if (o)
                for (n = 0; n < o.length; n++)
                    se(o[n][1], o[n][0])
        },
        getFormat: ae,
        getFormatSource: le,
        addFormat: ce,
        format2code: ue,
        changeAreaDecimals: de,
        changeCellDecimals: fe,
        isCustom: me,
        formToValues: ve,
        serializeFormat: ge
    })
        , $e = {
        span: function(t) {
            var e = t.$$("cells").getSelectArea();
            if (e)
                if (function a(e, t) {
                    var n, o, i = t.start, r = t.end;
                    for (n = 1 * i.row; n <= 1 * r.row; n++)
                        for (o = 1 * i.column; o <= 1 * r.column; o++)
                            if (e.$$("cells").getSpan(n, o))
                                return !0;
                    return !1
                }(t, e))
                    t.splitCell();
                else {
                    for (var n = [], o = e.start.row; o <= e.end.row; o++) {
                        for (var i = e.start.column; i <= e.end.column; i++) {
                            var r = t.getCellValue(o, i);
                            if (r && n.push(r),
                            1 < n.length)
                                break
                        }
                        if (1 < n.length)
                            break
                    }
                    1 < n.length ? t.confirm({
                        text: webix.i18n.spreadsheet.labels["merge-cell-confirm"],
                        callback: function(e) {
                            e && t.combineCells()
                        }
                    }) : t.combineCells()
                }
        },
        undo: function(e) {
            e.undo()
        },
        redo: function(e) {
            e.redo()
        },
        "hide-gridlines": function(e) {
            e.hideGridlines("toggle")
        },
        "hide-headers": function(e) {
            e.hideHeaders("toggle")
        },
        "freeze-columns": function(e) {
            var t = e.$$("cells").getSelectedId();
            e.freezeColumns(t && "rowId" != t.column ? t.column : 0)
        },
        "freeze-rows": function(e) {
            var t = e.$$("cells").getSelectedId();
            e.freezeRows(t ? t.row : 0)
        },
        "increase-decimals": function(e) {
            de(e, 1)
        },
        "decrease-decimals": function(e) {
            de(e, -1)
        }
    };

    var Ce = [
        {
            id: "Microsoft YaHei",
            value: "微软雅黑"
        },
        {
            id: "SimSun",
            value: "宋体"
        },
        {
        id: "Arial, Helvetica, sans-serif",
        value: "Arial"
    }, {
        id: "'Roboto', sans-serif",
        value: "Roboto"
    }, {
        id: "'PT Sans', Tahoma",
        value: "PT Sans"
    }, {
        id: "Tahoma",
        value: "Tahoma"
    }, {
        id: "Verdana",
        value: "Verdana"
    }, {
        id: "Calibri, Tahoma",
        value: "Calibri"
    }];
    
    var getFontFamily = function () {
        return webix.i18n.spreadsheet["font-family"] || Ce;
    };

    var Se = [{
        id: "no",
        value: "no"
    }, {
        id: "left",
        value: "left"
    }, {
        id: "top",
        value: "top"
    }, {
        id: "right",
        value: "right"
    }, {
        id: "bottom",
        value: "bottom"
    }, {
        id: "all",
        value: "all"
    }, {
        id: "outer",
        value: "outer"
    }, {
        id: "top-bottom",
        value: "top-bottom"
    }];
    function ke(e) {
        var t = webix.i18n.spreadsheet.menus;
        return t.clear + " " + t["clear-" + e].toLowerCase()
    }

    var Ee = {
        button: function(e) {
            return {
                view: "ssheet-toggle",
                width: e.width || z.width,
                id: e.name,
                name: e.name,
                label: e.label,
                css: e.css || "",
                onValue: e.onValue,
                offValue: e.offValue,
                tooltip: webix.i18n.spreadsheet.tooltips[e.name] || ""
            }
        },
        colorButton: function(e) {
            return {
                view: "ssheet-color",
                css: e.css,
                name: e.name,
                width: e.width || z.width + 24,
                title: "<span class='webix_ssheet_button_icon webix_ssheet_color_button_icon webix_ssheet_icon ssi-" + e.name + "' ></span>",
                tooltip: webix.i18n.spreadsheet.tooltips[e.name] || ""
            }
        },
        iconButton: function(e) {
            var t = webix.copy(e);
            return webix.extend(t, {
                view: "button",
                type: "htmlbutton",
                width: z.width,
                id: e.name,
                label: "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + e.name + "'></span>",
                css: "",
                tooltip: webix.i18n.spreadsheet.tooltips[e.name] || webix.i18n.spreadsheet.menus[e.name] || ""
            }),
            e.onValue && webix.extend(t, {
                view: "ssheet-toggle",
                onValue: e.onValue,
                offValue: e.offValue
            }, !0), t
        },
        segmented: function(e) {
            return {
                view: "segmented",
                name: e.name,
                css: e.css || "",
                width: e.width || z.width + 76,
                options: e.options
            }
        },
        select: function(e) {
            return webix.extend(e, {
                view: "richselect",
                id: e.name,
                value: R[e.name],
                suggest: {
                    css: "webix_ssheet_suggest",
                    padding: 0,
                    data: e.options
                }
            }),
                e.tooltip = webix.i18n.spreadsheet.tooltips[e.name] || "",
            e.popupWidth && (e.suggest.fitMaster = !1,
                e.suggest.width = e.popupWidth),
            e.popupTemplate && (e.suggest.body = {
                template: e.popupTemplate
            }),
            e.popupEvents && (e.suggest.body = e.suggest.body || {},
                e.suggest.body.on = e.popupEvents),
                e
        },
        separator: function() {
            return {
                view: "ssheet-separator"
            }
        },
        title: function(e) {
            var t = e.title;
            return 0 === t.indexOf("$") && (t = ""),
                {
                    template: t = webix.i18n.spreadsheet.labels[e.title] || t,
                    view: "ssheet-bar-title",
                    height: z.titleHeight
                }
        },
        borders: function(e) {
            return {
                view: "ssheet-borders",
                width: e.width || z.width + 24,
                data: Se,
                id: e.name,
                name: e.name,
                tooltip: webix.i18n.spreadsheet.tooltips[e.name]
            }
        },
        align: function(e) {
            return {
                view: "ssheet-align",
                value: R[e.name],
                width: e.width || z.width + 24,
                data: e.options,
                name: e.name,
                tooltip: webix.i18n.spreadsheet.tooltips[e.name]
            }
        },
        condFormat: function(e) {
            return {
                view: "ssheet-cond-format",
                width: 40,
                id: e.name,
                name: e.name
            }
        }
    }, Ve = {
        "font-family": function() {
            return Ee.select({
                name: "font-family",
                tooltip: "Font family",
                options: getFontFamily(),
                width: 100
            })
        },
        "font-size": function() {
            return Ee.select({
                name: "font-size",
                tooltip: "Font size",
                options: function o() {
                    for (var e = ["8", "9", "10", "11", "12", "14", "15", "16", "18", "20", "22", "24", "28", "32", "36"], t = [], n = 0; n < e.length; n++)
                        t.push({
                            id: e[n] + webix.i18n.spreadsheet.labels.px,
                            value: e[n]
                        });
                    return t
                }(),
                width: 64
            })
        },
        "font-weight": function() {
            return Ee.button({
                name: "font-weight",
                label: "B",
                css: "webix_ssheet_bold",
                tooltip: "Bold",
                onValue: "bold",
                offValue: "normal"
            })
        },
        "font-style": function() {
            return Ee.button({
                name: "font-style",
                label: "I",
                css: "webix_ssheet_italic",
                tooltip: "Italic",
                onValue: "italic",
                offValue: "normal"
            })
        },
        "text-decoration": function() {
            return Ee.button({
                name: "text-decoration",
                label: "U",
                css: "webix_ssheet_underline",
                tooltip: "Underline",
                onValue: "underline",
                offValue: "normal"
            })
        },
        color: function() {
            return Ee.colorButton({
                name: "color",
                icon: "font",
                css: "webix_ssheet_color"
            })
        },
        background: function() {
            return Ee.colorButton({
                name: "background",
                icon: "paint-brush",
                css: "webix_ssheet_background",
                width: 64
            })
        },
        borders: function() {
            return Ee.borders({
                name: "borders"
            })
        },
        "text-align": function() {
            var e = webix.i18n.spreadsheet.tooltips;
            return Ee.align({
                name: "text-align",
                tooltip: "Horizontal Align",
                css: "webix_ssheet_align",
                options: [{
                    id: "left",
                    css: "webix_ssheet_icon ssi-left",
                    tooltip: e["align-left"]
                }, {
                    id: "center",
                    css: "webix_ssheet_icon ssi-center",
                    tooltip: e["align-center"]
                }, {
                    id: "right",
                    css: "webix_ssheet_icon ssi-right",
                    tooltip: e["align-right"]
                }]
            })
        },
        "vertical-align": function() {
            var e = webix.i18n.spreadsheet.tooltips;
            return Ee.align({
                name: "vertical-align",
                tooltip: "Vertical Align",
                css: "webix_ssheet_align",
                options: [{
                    id: "top",
                    css: "webix_ssheet_icon ssi-top",
                    tooltip: e["align-top"]
                }, {
                    id: "middle",
                    css: "webix_ssheet_icon ssi-middle",
                    tooltip: e["align-middle"]
                }, {
                    id: "bottom",
                    css: "webix_ssheet_icon ssi-bottom",
                    tooltip: e["align-bottom"]
                }]
            })
        },
        wrap: function() {
            return Ee.iconButton({
                name: "wrap",
                onValue: "wrap",
                offValue: "nowrap"
            })
        },
        format: function() {
            return Ee.select({
                name: "format",
                tooltip: "Cell data format",
                width: 106,
                options: function t() {
                    var e = webix.i18n.spreadsheet.labels;
                    return [{
                        id: "common",
                        value: e.common
                    }, {
                        id: "price",
                        value: e.currency,
                        example: "98.20"
                    }, {
                        id: "int",
                        value: e.number,
                        example: "2120.02"
                    }, {
                        id: "percent",
                        value: e.percent,
                        example: "0.5"
                    }, {
                        id: "custom",
                        value: e["custom-format"]
                    }]
                }(),
                popupWidth: 180,
                popupTemplate: function(e) {
                    var t = oe[e.id] ? oe[e.id].getFormat : ""
                        , n = {
                        css: ""
                    }
                        , o = t && e.example ? t(e.example, n) : "";
                    return e.value + (t ? "<span class='webix_ssheet_right" + (n.css ? " " + n.css : "") + "'>" + o + "</span>" : "")
                },
                popupEvents: {
                    onItemClick: function(e) {
                        "custom" == e && this.getTopParentView().callEvent("onCommand", [{
                            id: e
                        }])
                    }
                }
            })
        },
        column: function() {
            return {
                name: "column",
                view: "ssheet-button",
                icon: "column",
                arrow: !0,
                area: !0,
                width: 58,
                options: function t() {
                    var e = webix.i18n.spreadsheet.menus;
                    return [{
                        id: "add",
                        group: "column",
                        value: e["insert-column"]
                    }, {
                        id: "del",
                        group: "column",
                        value: e["delete-column"]
                    }, {
                        id: "show",
                        group: "column",
                        value: e["show-column"]
                    }, {
                        id: "hide",
                        group: "column",
                        value: e["hide-column"]
                    }]
                }()
            }
        },
        row: function() {
            return {
                name: "row",
                view: "ssheet-button",
                icon: "row",
                arrow: !0,
                area: !0,
                width: 58,
                options: function t() {
                    var e = webix.i18n.spreadsheet.menus;
                    return [{
                        id: "add",
                        group: "row",
                        value: e["insert-row"]
                    }, {
                        id: "del",
                        group: "row",
                        value: e["delete-row"]
                    }, {
                        id: "show",
                        group: "row",
                        value: e["show-row"]
                    }, {
                        id: "hide",
                        group: "row",
                        value: e["hide-row"]
                    }]
                }()
            }
        },
        clear: function() {
            return {
                name: "clear",
                view: "ssheet-button",
                icon: "clear-styles",
                arrow: !0,
                area: !0,
                width: 58,
                options: function e() {
                    return [{
                        id: "clear-value",
                        value: ke("value")
                    }, {
                        id: "clear-style",
                        value: ke("style")
                    }, {
                        id: "clear-conditional-formats",
                        value: ke("conditional-formats")
                    }, {
                        id: "clear-dropdown-editors",
                        value: ke("dropdown-editors")
                    }, {
                        id: "clear-comments",
                        value: ke("comments")
                    }, {
                        id: "clear-all",
                        value: ke("all")
                    }]
                }()
            }
        },
        comment: function() {
            return {
                name: "comment",
                view: "ssheet-button",
                icon: "comments",
                arrow: !0,
                area: !0,
                width: 55
            }
        }
    };
    function Ie(e) {
        var t = webix.i18n.spreadsheet;
        return t.menus[e] || t.labels[e] || t.tooltips[e] || e
    }
    function ze() {
        var e = function r() {
            var e, t, n, o = {
                undo: ["undo", "redo"],
                insert: ["add-sparkline", "add-image", "add-comment"]
            }, i = {};
            for (t in o)
                for (e = i[t] = 0; e < o[t].length; e++)
                    n = webix.html.getTextSize(Ie(o[t][e]), "webix_ssheet_button_measure").width + 7,
                        i[t] = Math.max(n, i[t]);
            return i
        }()
            , t = z.titleHeight;
        return [{
            padding: 3,
            margin: 0,
            rows: [{
                margin: 2,
                cols: [{
                    name: "sheet",
                    view: "ssheet-button-icon-top",
                    label: Ie("sheet"),
                    arrow: !0,
                    options: [{
                        id: "new-sheet"
                    }, {
                        id: "copy-sheet"
                    }, {
                        id: "remove-sheet"
                    }]
                }, {
                    rows: [{
                        $button: "excel-import"
                    }, {
                        $button: "excel-export"
                    }]
                }, {
                    rows: [{
                        $button: "print"
                    }]
                }]
            }, {}, {
                template: Ie("file"),
                view: "ssheet-bar-title",
                height: t,
                width: 85
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                $button: "undo",
                view: "ssheet-button",
                label: Ie("undo"),
                width: e.undo
            }, {
                $button: "redo",
                view: "ssheet-button",
                label: Ie("redo"),
                width: e.undo
            }, {
                template: Ie("undo-redo"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                margin: 2,
                cols: [{
                    margin: 2,
                    cols: [{
                        $button: "font-family",
                        width: 3 * (webix.skin.$active.inputHeight + 2) + 4
                    }, {
                        $button: "font-size"
                    }]
                }, {
                    $button: "borders"
                }]
            }, {
                margin: 2,
                cols: [{
                    margin: 2,
                    cols: [{
                        $button: "font-weight"
                    }, {
                        $button: "font-style"
                    }, {
                        $button: "text-decoration"
                    }]
                }, {
                    $button: "background"
                }, {
                    $button: "color"
                }]
            }, {
                template: Ie("font"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                margin: 2,
                cols: [{
                    $button: "text-align"
                }, {
                    $button: "span"
                }]
            }, {
                margin: 2,
                cols: [{
                    $button: "vertical-align"
                }, {
                    $button: "wrap"
                }]
            }, {
                template: Ie("align"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                $button: "format"
            }, {
                margin: 2,
                cols: [{
                    $button: "increase-decimals"
                }, {
                    $button: "decrease-decimals"
                }]
            }, {
                template: Ie("number"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                cols: [{
                    $button: "sort-asc"
                }, {
                    $button: "create-filter"
                }, {
                    $button: "conditional-format"
                }, {
                    $button: "add-link"
                }, {
                    $button: "clear"
                }]
            }, {
                cols: [{
                    $button: "sort-desc"
                }, {
                    $button: "add-range"
                }, {
                    $button: "lock-cell"
                }, {
                    $button: "add-dropdown"
                }]
            }, {
                template: Ie("edit"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                cols: [{
                    $button: "add-image",
                    view: "ssheet-button",
                    label: Ie("image"),
                    width: e.insert
                }, {
                    $button: "add-comment",
                    view: "ssheet-button",
                    label: Ie("comment"),
                    width: e.insert
                }]
            }, {
                $button: "add-sparkline",
                view: "ssheet-button",
                label: Ie("graph"),
                width: e.insert
            }, {
                template: Ie("insert"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {
            padding: 3,
            rows: [{
                cols: [{
                    rows: [{
                        $button: "row"
                    }, {
                        $button: "column"
                    }]
                }, {
                    rows: [{
                        $button: "hide-gridlines"
                    }, {
                        $button: "hide-headers"
                    }]
                }, {
                    rows: [{
                        $button: "freeze-rows"
                    }, {
                        $button: "freeze-columns"
                    }]
                }]
            }, {
                template: Ie("view"),
                view: "ssheet-bar-title",
                height: t
            }]
        }, {
            view: "ssheet-separator"
        }, {}]
    }
    var Re = {
        "undo-redo": ["undo", "redo"],
        font: ["font-family", "font-size", "font-weight", "font-style", "text-decoration", "color", "background", "borders"],
        align: ["text-align", "vertical-align", "wrap", "span"],
        format: ["format"]
    };
    function Ae(o) {
        o.attachEvent("onComponentInit", function() {
            return function e(t) {
                t.attachEvent("onAfterSelect", function(e) {
                    return function l(e, t) {
                        var n = {}
                            , o = t[0];
                        if (o) {
                            var i = e.getStyle(o.row, o.column);
                            i && (n = i.props)
                        }
                        var r = webix.copy(n);
                        for (var a in R)
                            r[a] || (r[a] = R[a]);
                        r.format = me(r.format) ? "custom" : r.format,
                            e.$$("bar").setValues(r)
                    }(t, e)
                })
            }(o)
        });
        var e = [];
        if (o.config.toolbar) {
            var t = o.config.toolbar;
            "full" == t && (t = ze(),
            webix.isUndefined(o.config.bottombar) && (o.config.bottombar = !0)),
                e = function a(i, e) {
                    var r = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t].$button;
                            if (n) {
                                var o = Ve[n] ? Ve[n](i) : Ee.iconButton({
                                    name: n
                                });
                                webix.extend(e[t], o)
                            }
                            e[t].rows && r(e[t].rows),
                            e[t].cols && r(e[t].cols)
                        }
                    };
                    return r(e),
                        e
                }(o, t)
        } else
            e = function s(e, t) {
                var n, o, i, r = [];
                for (var a in t)
                    r.push((n = e,
                        i = t[o = a],
                        {
                            rows: [{
                                padding: 2,
                                cols: [{
                                    margin: 2,
                                    cols: function l(e, t) {
                                        for (var n = [], o = 0; o < t.length; o++) {
                                            var i = t[o];
                                            if ("object" == v(i))
                                                n.push(i);
                                            else {
                                                var r = Ve[i] ? Ve[i](e) : Ee.iconButton({
                                                    name: i
                                                });
                                                n.push(r)
                                            }
                                        }
                                        return n
                                    }(n, i)
                                }]
                            }, Ee.title({
                                title: o
                            })]
                        })),
                        r.push(Ee.separator());
                return r
            }(o, o.config.buttons || Re);
        var n = {
            view: "toolbar",
            css: "webix_ssheet_toolbar webix_layout_toolbar",
            id: "bar",
            padding: 0,
            elements: e,
            on: {
                onChange: function() {
                    var e = this.$eventSource
                        , t = e.getValue()
                        , n = e.config.name;
                    "format" == n && "common" == t && (t = ""),
                    "format" == n && "custom" == t || o.callEvent("onStyleSet", [n, t])
                },
                onItemClick: function(e) {
                    var t = o.innerId(e);
                    $e[t] ? $e[t].call(this, o) : o.callEvent("onCommand", [{
                        id: t
                    }])
                }
            }
        };
        return o.callEvent("onViewInit", ["toolbar", n]),
            n
    }
    function Oe(e, t, n) {
        var o = t.$$("cells").config.columns
            , i = {
            row: e,
            column: o["rowId" == o[0].id ? 1 : 0].id
        }
            , r = {
            row: n || e,
            column: o[o.length - 1].id
        };
        i.column && r.column && Be(i, r, t)
    }
    function Ue(e) {
        var t = e.$$("cells").data.order
            , n = e.$$("cells").config.columns
            , o = "rowId" == n[0].id ? 1 : 0
            , i = {
            row: t[0],
            column: n[o].id
        }
            , r = {
            row: t[t.length - 1],
            column: n[n.length - 1].id
        };
        i.column && r.column && Be(i, r, e)
    }
    function Fe(e, t, n) {
        var o = t.$$("cells").data.order;
        Be({
            row: o[0],
            column: e
        }, {
            row: o[o.length - 1],
            column: n || e
        }, t)
    }
    function Me(e, t) {
        var n = t.$$("cells").getSelectArea();
        return !!(n && e >= n.start.column && e <= n.end.column)
    }
    function Ne(e, t, n) {
        return je(e, n) && Me(t, n)
    }
    function je(e, t) {
        var n = t.$$("cells").getSelectArea();
        return !!(n && e >= n.start.row && e <= n.end.row)
    }
    function Te(e, t) {
        var n = t.$$("cells").getSelectArea();
        n ? Fe(Math.min(n.start.column, n.end.column, e), t, Math.max(n.start.column, n.end.column, e)) : Fe(e, t)
    }
    function Be(e, t, n) {
        n.$$("cells").addSelectArea(e, t)
    }
    function He(a, l) {
        var s = 25;
        l._table.eachRow(function(e) {
            var t = this.getItem(e)
                , n = this.getText(e, a)
                , o = l.getStyle(e, a)
                , i = o ? o.id : "";
            if (n) {
                var r = K(l, n, i, 0, t.$height);
                r.width > s && (s = r.width)
            }
        }),
            l._table.setColumnWidth(a, s)
    }
    function De(r, a) {
        var l = 25;
        a._table.eachColumn(function(e) {
            var t = this.getText(r, e)
                , n = a.getStyle(r, e)
                , o = n ? n.id : "";
            if (t) {
                var i = K(a, t, o, this.getColumnConfig(e).width, 0);
                i.height > l && (l = i.height)
            }
        }),
            a._table.setRowHeight(r, l)
    }
    function Pe(e, t, n) {
        if (n._table.config.header) {
            var o = e.row
                , i = t.row
                , r = e.column
                , a = t.column;
            if (i < o) {
                var l = [i, o];
                o = l[0],
                    i = l[1]
            }
            if (a < r) {
                var s = [a, r];
                r = s[0],
                    a = s[1]
            }
            n._table.eachRow(function(e) {
                o <= e && e <= i ? n._table.addCellCss(e, "rowId", "webix_highlight") : n._table.removeCellCss(e, "rowId", "webix_highlight")
            }),
                n._table.eachColumn(function(e) {
                    var t = n._table.getHeaderNode(e);
                    t && (r <= e && e <= a ? webix.html.addCss(t, "webix_highlight") : webix.html.removeCss(t, "webix_highlight"))
                })
        }
    }
    var Le = Object.freeze({
        selectRow: Oe,
        selectAll: Ue,
        selectColumn: Fe,
        isColSelected: Me,
        isCellSelected: Ne,
        isRowSelected: je,
        selectColumns: Te,
        adjustColumn: He,
        adjustRow: De,
        highlightColRow: Pe
    });
    function Ke(e, t) {
        e.attachEvent("onComponentInit", function() {
            return function s(i) {
                var n, r = i._table, e = webix.event(document.body, "mousemove", function(e) {
                    clearTimeout(t),
                        t = webix.delay(function(e) {
                            if (!i.comments._activeComment.editStatus) {
                                var t = r.locate(e)
                                    , n = i.comments.commentsView && i.comments.commentsView.isVisible();
                                if (t && i.comments.get(t.row, t.column)) {
                                    var o = i.comments._activeComment.cell;
                                    (!o || o.row == t.row && o.column == t.column) && n || i.callEvent("onCommand", [{
                                        id: "add-comment",
                                        cell: t,
                                        viewonly: !0
                                    }])
                                } else
                                    n && !i.comments.commentsView.$view.contains(e.target) && i.callEvent("onCommentHide", [])
                            }
                        }, !0, [e], 250)
                });
                var t;
                i.attachEvent("onDestruct", function() {
                    return webix.eventRemove(e)
                }),
                i.config.math && (r.config.editMath = !0);
                r.attachEvent("onBeforeEditStop", function(e, t) {
                    e.old === webix.undefined && "" === e.value || (e.value != e.old && (i.setCellValue(t.row, t.column, e.value),
                        r.refresh()),
                        e.value = e.old)
                }),
                    r.$view.firstChild.addEventListener("mousedown", function(e) {
                        n = e.target.parentNode.cellIndex + 1
                    }),
                    r.$view.firstChild.addEventListener("mouseup", function(e) {
                        var t = e.target.parentNode.cellIndex + 1;
                        n && n !== t && (Fe(n, i, t),
                            n = undefined)
                    }),
                    r.attachEvent("onEnter", function() {
                        r.getEditor() && webix.delay(function() {
                            r.moveSelection("down")
                        })
                    }),
                    i.attachEvent("onBeforeEditStart", function(e, t) {
                        return !i.isCellLocked(e, t)
                    }),
                    r.attachEvent("onBeforeEditStart", function(e) {
                        return i.callEvent("onBeforeEditStart", [e.row, e.column])
                    }),
                    r.attachEvent("onBeforeSelect", function(e) {
                        return "rowId" != e.column
                    }),
                    r.attachEvent("onBeforeBlockSelect", function(e, t, n) {
                        return !n || "rowId" === e.column && "rowId" === t.column || ("rowId" === e.column && (e.column = 1),
                        "rowId" === t.column && (t.column = 1)),
                        ("rowId" !== e.column || "rowId" !== t.column) && (Pe(e, t, i),
                            !0)
                    }),
                    r.attachEvent("onSelectChange", function() {
                        var e = r.getSelectedId(!0);
                        if (e.length) {
                            var t = e[0]
                                , n = e[e.length - 1] ? e[e.length - 1] : e[0];
                            Pe(t, n, i)
                        } else {
                            var o = {
                                row: 0,
                                column: 0
                            };
                            Pe(o, o, i)
                        }
                    }),
                    r.attachEvent("onItemDblClick", function(e) {
                        "rowId" === e.column && De(e.row, i)
                    });
                var a = 0;
                r.attachEvent("onHeaderClick", function(e, t) {
                    if ("rowId" != e.column) {
                        var n = new Date
                            , o = n - a <= 300;
                        o ? He(e.column, i) : (a = n,
                            t.shiftKey ? Te(e.column, i) : Fe(e.column, i))
                    } else
                        Ue(i)
                });
                var o = null;
                r.attachEvent("onItemClick", function(e, t) {
                    "rowId" === e.column && (t.shiftKey && o ? Oe(o, i, e.row) : Oe(e.row, i),
                        o = e.row)
                }),
                    i.attachEvent("onReset", function() {
                        return Ge(i)
                    }),
                    i.attachEvent("onBeforeSheetShow", function() {
                        return r.editStop()
                    }),
                    r.attachEvent("onBlur", function() {
                        webix.delay(function() {
                            var e = document.activeElement;
                            if (!e || "INPUT" != e.tagName) {
                                var t = webix.UIManager.getFocus()
                                    , n = t && t != r && t.getTopParentView && t.getTopParentView() === i;
                                n && webix.UIManager.setFocus(r)
                            }
                        }, this, [], 100)
                    }),
                    function l(e) {
                        webix.html.addStyle("#" + e._table.$view.id + ".webix_dtable .webix_cell { white-space:nowrap;}")
                    }(i)
            }(e)
        });
        var n = {
            view: "datatable",
            id: "cells",
            css: "webix_ssheet_table webix_data_border wss_" + e.$index,
            headerRowHeight: "contrast" == webix.skin.$name || "flat" == webix.skin.$name ? 24 : 20,
            spans: !0,
            leftSplit: 1,
            areaselect: !0,
            editable: !0,
            editaction: t.liveEditor ? "custom" : "dblclick",
            navigation: !0
        };
        return !1 !== t.clipboard && (t.clipboard = "custom",
        t.clipboardDecimalDelimiter && (t.templateCopy = function(e) {
                return webix.rules.isNumber(e) && (e = e.toString().replace(".", t.clipboardDecimalDelimiter)),
                    e
            }
        )),
        t && (n = webix.extend(n, t, !0)),
            n
    }
    function We(e, t, n, o, i) {
        var r = t.$cellFormat ? t.$cellFormat[i.id] : null
            , a = e.comments.get(t.id, i.id) ? "<div class='ssheet_commented_sign'></div>" : "";
        if (r) {
            var l = {
                css: ""
            }
                , s = ae(r);
            if (s) {
                var c = parseFloat(o);
                if (!isNaN(c)) {
                    var u = s(c, l);
                    return l.css ? "<div class='" + l.css + "'>" + u + "</div>" + a : u + a
                }
            }
        }
        return (webix.isUndefined(o) || null === o) && (o = ""),
        o + a
    }
    function Ge(i) {
        var t = i.$$("cells");
        t.clearAll();
        for (var e = i.config.columnCount, n = i.config.rowCount, o = [{
            id: "rowId",
            header: "",
            width: 40,
            css: "sheet_column_0",
            template: function(e) {
                return e.id
            }
        }], r = 1; r <= e; r++)
            o.push({
                id: r,
                editor: "text",
                header: {
                    text: m[r],
                    css: i._hideColumn && 0 <= i._hideColumn.indexOf(r + 1) ? "webix_ssheet_hide_column" : ""
                },
                template: function(e, t, n, o) {
                    return We(i, e, 0, n, o)
                }
            }),
                i.callEvent("onColumnInit", [o[r]]);
        t.refreshColumns(o),
        i._hideColumn && i._hideColumn.length && i._hideColumn.map(function(e) {
            return t.hideColumn(e)
        });
        for (var a = [], l = 1; l <= n; l++)
            a.push({
                id: l
            });
        t.parse(a),
        i._hideRow && i._hideRow.length && t.filter(function(e) {
            if (-1 === i._hideRow.indexOf(e.id))
                return !0;
            if (e.id - 1 == 0) {
                var t = i.$$("cells").getColumnConfig("rowId").header[0];
                t.css = (t.css || "") + " webix_ssheet_hide_row",
                    i.$$("cells").refreshColumns()
            } else
                i.$$("cells").addCellCss(e.id - 1, "rowId", "webix_ssheet_hide_row");
            return !1
        })
    }
    function Ze(o) {
        var i = o.$$("cells");
        webix.UIManager.addHotKey("any", function(e, t) {
            if (16 != (t.which || t.keyCode)) {
                var n = e.getSelectedId(!0);
                n.length && i.config.editable && (i.$anyKey = !0,
                    i.edit(n[0]))
            }
        }, i),
            webix.UIManager.addHotKey("enter", function(e) {
                var t = e.getSelectedId(!0);
                t.length && i.config.editable && (e.config.liveEditor ? i.callEvent("onBeforeLiveEditor", [t[0]]) : i.edit(t[0]))
            }, i),
            webix.UIManager.addHotKey("backspace", function() {
                return qe(o)
            }, i),
            webix.UIManager.addHotKey("delete", function() {
                return qe(o)
            }, i);
        var e = webix.env.isMac ? "command" : "ctrl"
            , t = webix.env.isMac ? "command-shift-z" : "ctrl-y";
        webix.UIManager.addHotKey(t, function() {
            return o.redo()
        }, i),
            webix.UIManager.addHotKey(e + "-a", function() {
                i.getEditor() || Ue(o)
            }, i),
            webix.UIManager.addHotKey(e + "-z", function() {
                return o.undo()
            }, i),
            webix.UIManager.addHotKey(e + "-b", function() {
                return Ye(o, "font-weight")
            }, i),
            webix.UIManager.addHotKey(e + "-i", function() {
                return Ye(o, "font-style")
            }, i),
            webix.UIManager.addHotKey(e + "-u", function(e, t) {
                return function n(e, t) {
                    return Ye(e, "text-decoration"),
                        webix.html.preventEvent(t)
                }(o, t)
            }, i),
            webix.UIManager.addHotKey(e + "-p", function(e, t) {
                return function n(e, t) {
                    return e.callEvent("onCommand", [{
                        id: "print"
                    }]),
                        webix.html.preventEvent(t)
                }(o, t)
            }, i)
    }
    function qe(t) {
        u.set(function() {
            t.eachSelectedCell(function(e) {
                return t.setCellValue(e.row, e.column, "")
            }),
                t.refresh()
        })
    }
    function Ye(e, t) {
        var n = e.getSelectedId();
        if (n) {
            var o = e.getStyle(n.row, n.column)
                , i = e.$$("bar").elements[t].data
                , r = i.onValue
                , a = i.offValue
                , l = o && o.props[t] === r ? a : r;
            e.callEvent("onStyleSet", [t, l])
        }
    }
    function Xe(e) {
        return !(!e && 0 !== e || (e *= 1,
            isNaN(e))) && e
    }
    function Qe(e) {
        for (var t = [], n = 0; n < e.length; n++)
            t = t.concat(e[n]);
        return t
    }
    var Je = Object.freeze({
        SUM: function Gi() {
            for (var e = 0, t = Qe(arguments), n = 0; n < t.length; n++) {
                var o = Xe(t[n]);
                !1 !== o && (e += o)
            }
            return e
        },
        AVERAGE: function Zi() {
            for (var e = 0, t = 0, n = Qe(arguments), o = 0; o < n.length; o++) {
                var i = Xe(n[o]);
                !1 !== i && (e += i,
                    t++)
            }
            return e / t
        },
        COUNT: function qi() {
            for (var e = 0, t = Qe(arguments), n = 0; n < t.length; n++)
                !1 !== Xe(t[n]) && e++;
            return e
        },
        COUNTA: function Yi() {
            for (var e = 0, t = Qe(arguments), n = 0; n < t.length; n++)
                t[n] && 1 * t[n] != 0 && e++;
            return e
        },
        COUNTBLANK: function Xi() {
            for (var e = 0, t = Qe(arguments), n = 0; n < t.length; n++)
                1 * !t[n] && e++;
            return e
        },
        MAX: function Qi() {
            for (var e = "", t = Qe(arguments), n = 0; n < t.length; n++) {
                var o = Xe(t[n]);
                !1 !== o && (e < o || "" === e) && (e = o)
            }
            return e || 0
        },
        MIN: function Ji() {
            for (var e = "", t = Qe(arguments), n = 0; n < t.length; n++) {
                var o = Xe(t[n]);
                !1 !== o && (o < e || "" === e) && (e = o)
            }
            return e || 0
        },
        PRODUCT: function er() {
            for (var e = "", t = Qe(arguments), n = 0; n < t.length; n++) {
                var o = Xe(t[n]);
                !1 !== o && (e = "" === e ? o : e * o)
            }
            return e
        },
        SUMPRODUCT: function tr(e) {
            var t = e[0].length;
            for (var n in e)
                if (e[n].length !== t)
                    return;
            for (var o = 0, i = 0; i < e[0].length; i++) {
                var r = "";
                for (var a in e) {
                    var l = Xe(e[a][i]);
                    if (!1 === l) {
                        r = 0;
                        break
                    }
                    r = "" === r ? l : r * l
                }
                webix.isUndefined(r) || (o += r)
            }
            return o
        },
        SUMSQ: function nr() {
            for (var e = 0, t = Qe(arguments), n = 0; n < t.length; n++) {
                var o = Xe(t[n]);
                "number" == typeof o && (e += Math.pow(o, 2))
            }
            return e
        },
        VARP: function or() {
            for (var e = Qe(arguments), t = this.COUNT(e), n = this.AVERAGE(e), o = 0, i = 0; i < e.length; i++) {
                var r = Xe(e[i]);
                !1 !== r && (o += Math.pow(r - n, 2))
            }
            return o / t
        },
        STDEVP: function ir() {
            var e = Qe(arguments);
            return Math.sqrt(this.VARP(e))
        },
        POWER: function rr(e, t) {
            var n = Xe(e)
                , o = Xe(t);
            if ("number" == typeof n && "number" == typeof o)
                return Math.pow(n, o)
        },
        QUOTIENT: function ar(e, t) {
            var n = Xe(e)
                , o = Xe(t);
            if ("number" == typeof n && "number" == typeof o)
                return n / o
        },
        SQRT: function lr(e) {
            var t = Xe(e);
            if (!1 !== t && 0 <= t)
                return Math.sqrt(t)
        },
        ABS: function sr(e) {
            var t = Xe(e);
            if (!1 !== t)
                return Math.abs(t)
        },
        RAND: function cr() {
            return Math.random()
        },
        PI: function ur() {
            return Math.PI
        },
        INT: function hr(e) {
            var t = Xe(e);
            if (!1 !== t)
                return Math.round(t)
        },
        ROUND: function dr(e, t) {
            var n = Xe(e)
                , o = Xe(t) || 0;
            if (!1 !== n)
                return parseFloat(n.toFixed(o))
        },
        ROUNDDOWN: function fr(e, t) {
            var n = Xe(e)
                , o = Xe(t) || 0;
            if (!1 !== n)
                return Math.floor(n * Math.pow(10, o)) / Math.pow(10, o)
        },
        ROUNDUP: function mr(e, t) {
            var n = Xe(e)
                , o = Xe(t) || 0;
            if (!1 !== n)
                return Math.ceil(n * Math.pow(10, o)) / Math.pow(10, o)
        },
        TRUNC: function vr(e) {
            var t = Xe(e);
            if (!1 !== t)
                return parseInt(t)
        },
        EVEN: function gr(e) {
            var t = Xe(e);
            if (!1 !== t) {
                var n = Math.round(t);
                return n % 2 ? n + 1 : n
            }
        },
        ODD: function wr(e) {
            var t = Xe(e);
            if (!1 !== t) {
                var n = Math.round(t);
                return n % 2 ? n : n + 1
            }
        }
    });
    var et = Object.freeze({
        CONCATENATE: function pr() {
            var e = Array.prototype.slice.call(arguments);
            return (e = e.map(function(e) {
                return "object" === v(e) ? e.join("") : e
            })).join("")
        },
        LEFT: function br(e, t) {
            return e ? e.substring(0, t) : ""
        },
        MID: function xr(e, t, n) {
            return e ? e.substring(t, t + n) : ""
        },
        RIGHT: function _r(e, t) {
            return e ? e.substring(e.length - t) : ""
        },
        LOWER: function yr(e) {
            return e ? e.toLowerCase() : ""
        },
        UPPER: function $r(e) {
            return e ? e.toUpperCase() : ""
        },
        PROPER: function Cr(e) {
            if (!e)
                return "";
            var t = e.toLowerCase().split(" ");
            for (var n in e = "",
                t)
                e += (e ? " " : "") + t[n].substring(0, 1).toUpperCase() + t[n].substring(1);
            return e
        },
        TRIM: function Sr(e) {
            return e ? e.trim() : ""
        },
        LEN: function kr(e) {
            return e || 0 === e ? e.toString().length : 0
        }
    });
    var tt = Object.freeze({
        IMAGE: function Er(e) {
            return '<img class="webix_ssheet_cimage" src="'.concat(webix.template.escape(e), '">')
        },
        SPARKLINE: function Vr(e, t, n, o) {
            var i, r = {
                type: t,
                color: n,
                negativeColor: o
            }, a = "pie" == t ? 60 : 150;
            for (i = 0; i < e.length; i++)
                e[i] = e[i] || 0;
            return webix.Sparklines.getTemplate(r)(e, {
                width: a,
                height: 35
            })
        },
        LINK: function Ir(e, t) {
            return t = t || e,
                '<a target="blank" href="'.concat(webix.template.escape(e), '">').concat(webix.template.escape(t), "</a>")
        },
        IF: function zr(e, t, n) {
            return e ? t : n
        }
    })
        , nt = {};
    webix.extend(nt, Je),
        webix.extend(nt, et),
        webix.extend(nt, tt);
    var ot = [];
    for (var it in nt)
        "__esModule" != it && ot.push(it);
    function rt(t) {
        return t.attachEvent("onComponentInit", function() {
            return function e(o) {
                var r = o.$$("liveEditor");
                function n(e, t, n) {
                    var o = e.getColumnConfig(t.column).editor;
                    return "text" != o || (a(e, t, n),
                        !1)
                }
                function i(e, t) {
                    return !(!o.getCellEditor(e, t) && !o.isCellLocked(e, t)) && (r.setValue(""),
                        r.disable(),
                        !0)
                }
                function a(e, t, n) {
                    i(t.row, t.column) || (r.enable(),
                            r.config.activeCell = t,
                            r.setValue(n ? "" : o.getCellValue(t.row, t.column)),
                            r.focus(),
                            o.$handleSelection = function(e, t, n, o) {
                                return function i(e, t, n, o) {
                                    if (t == n) {
                                        if (!r.expectOperator())
                                            return l(o);
                                        r.setRange(t),
                                            webix.delay(function() {
                                                return r.focus()
                                            })
                                    } else {
                                        if (!r.expectRange())
                                            return l(o);
                                        r.setRange("".concat(t, ":").concat(n)),
                                            webix.delay(function() {
                                                return r.focus()
                                            })
                                    }
                                    return !1
                                }(0, n, o, e)
                            }
                    )
                }
                function l(e) {
                    return r.isEnabled() && (r.updateCellValue(),
                        r.setValue(e ? o.getCellValue(e.row, e.column) : "")),
                        !0
                }
                o._table.attachEvent("onBeforeEditStart", function(e) {
                    var t = o._table.$anyKey;
                    return o._table.$anyKey = !1,
                        n(this, e, t)
                }),
                    o._table.attachEvent("onBeforeLiveEditor", function(e) {
                        n(this, e, !1)
                    }),
                    o._table.attachEvent("onItemDblClick", function(e) {
                        n(this, e, !1)
                    }),
                    o.attachEvent("onCellChange", function(e, t, n) {
                        var o = r.config.activeCell;
                        o && o.row == e && o.column == t && r.setValue(n)
                    }),
                    o.attachEvent("onAfterSelect", function(e) {
                        if (!o.$handleSelection) {
                            var t = e[0];
                            a(o._table, t)
                        }
                    }),
                    o.attachEvent("onReset", function() {
                        return o.$handleSelection = null
                    }),
                    o.attachEvent("onAction", function(e, t) {
                        "lock" != e && "filter" != e && "dropdown" != e || i(t.row, t.column)
                    })
            }(t)
        }),
            {
                view: "toolbar",
                css: "webix_ssheet_toolbar",
                elements: [{
                    view: "text",
                    value: "",
                    id: "cell-text",
                    width: 60,
                    readonly: true
                }, {
                    view: "button",
                    value: "fx",
                    id: "funcList",
                    autowidth:true
                }, {
                    view: "live-editor",
                    disabled: !0,
                    id: "liveEditor",
                    suggestData: ot
                }]
            }
    }
    function at(e, t) {
        return e[lt(e, t)]
    }
    function lt(e, t) {
        for (var n = -1, o = 0; n < 0 && o < e.length; o++)
            t(e[o]) && (n = o);
        return n
    }
    var st = ["rename-sheet", "remove-sheet"]
        , ct = {
        "remove-sheet": function(t) {
            t.confirm({
                text: webix.i18n.spreadsheet.labels["sheet-remove-confirm"],
                callback: function(e) {
                    e && vt(t, t._activeSheet)
                }
            })
        },
        "rename-sheet": function(e) {
            mt(e, e._activeSheet)
        },
        "new-sheet": function(e) {
            ft(e)
        },
        "copy-sheet": function(e) {
            !function t(e) {
                ft(e, e.serialize())
            }(e)
        }
    };
    function ut(t) {
        t.attachEvent("onComponentInit", function() {
            return function e(t) {
                wt(t),
                t.$$("add-sheet") && t.$$("add-sheet").attachEvent("onItemClick", function() {
                    ft(t)
                });
                t.attachEvent("onAfterSheetShow", function(e) {
                    return function n(e, t) {
                        e.$$("sheets") && (e.$$("sheets").select(t),
                            e.$$("sheets").showItem(t))
                    }(t, e)
                }),
                    t.attachEvent("onCommand", function(e) {
                        ct[e.id] && ct[e.id](this)
                    }),
                t.$$("sheets") && (t.$$("sheets").data.attachEvent("onStoreUpdated", function() {
                    return function o(e) {
                        var t = e.$$("bottom-toolbar")
                            , n = e.$$("sheets");
                        n.count() <= n.config.width / e.config.sheetTabWidth ? t.showBatch("pager", !1) : t.showBatch("pager")
                    }(t)
                }),
                    t.$$("sheets").attachEvent("onAfterScroll", function() {
                        return function i(e) {
                            var t = e.$$("sheets")
                                , n = t.getScrollState().x;
                            if (0 == n)
                                e.$$("prev-sheet").disable();
                            else {
                                e.$$("prev-sheet").enable();
                                var o = e.config.sheetTabWidth;
                                if (n == (t.count() - t.config.width / o) * o)
                                    return void e.$$("next-sheet").disable()
                            }
                            e.$$("next-sheet").enable()
                        }(t)
                    }),
                    t.$$("sheets").attachEvent("onAfterDrop", function(e) {
                        return function r(e, t, n) {
                            for (var o in e._sheets)
                                if (e._sheets[o].name == t) {
                                    var i = e._sheets.splice(o, 1);
                                    e._sheets.splice(n, 0, i[0]);
                                    break
                                }
                        }(t, e.start, e.index)
                    }),
                    t.$$("sheets").attachEvent("onAfterEditStop", function(e) {
                        return gt(t, e.old, e.value)
                    }))
            }(t)
        })
    }
    function ht(n) {
        var t = n.config.readonly
            , e = n.config.sheetTabWidth
            , o = {
            view: "toolbar",
            id: "bottom-toolbar",
            css: "webix_ssheet_bottom_toolbar webix_layout_toolbar",
            paddingY: 0,
            height: 34,
            elements: [{
                view: "button",
                type: "htmlbutton",
                width: 34,
                id: "add-sheet",
                label: "<span class='webix_ssheet_icon_add_sheet'></span>",
                tooltip: webix.i18n.spreadsheet.tooltips["add-sheet"] || "",
                hidden: t
            }, {
                id: "sheets",
                view: "sheets",
                width: 5 * e,
                editable: !t,
                editaction: "dblclick",
                editor: "text",
                editValue: "value",
                type: {
                    width: e,
                    height: 32,
                    template: function(e) {
                        return "<div>" + e.value + "</div>" + (t ? "" : "<div class='webix_input_icon wxi-menu-down webix_ssheet_sheet_arrow'></div>")
                    },
                    css: "ssheet_order_sheets"
                },
                onClick: {
                    webix_ssheet_sheet_arrow: function(e, t) {
                        !function o(t, e, n) {
                            t.$sheetMenu || (t.$sheetMenu = webix.ui(function i(e) {
                                for (var t = [], n = 0; n < st.length; n++)
                                    t.push({
                                        id: st[n],
                                        value: webix.i18n.spreadsheet.menus[st[n]] || st[n]
                                    });
                                var o = {
                                    view: "ssheet-suggest",
                                    data: t
                                };
                                return e.callEvent("onViewInit", ["sheet-menu", o]),
                                    o
                            }(t)),
                                t.$sheetMenu.attachEvent("onItemClick", function(e) {
                                    return function n(e, t) {
                                        e.$sheetMenu.data.getMark(t, "webix_disabled") || ct[t](e)
                                    }(t, e)
                                }));
                            t.$sheetMenu.getItem("remove-sheet") && (1 == t.$$("sheets").count() ? t.$sheetMenu.disableItem("remove-sheet") : t.$sheetMenu.enableItem("remove-sheet"));
                            t.callEvent("onBeforeSheetMenu", [n]) && t.$sheetMenu.show(e)
                        }(n, e, t)
                    }
                },
                on: {
                    onItemClick: function(e) {
                        e != n._activeSheet && n.showSheet(e)
                    }
                }
            }, {
                view: "button",
                type: "htmlbutton",
                width: 34,
                id: "prev-sheet",
                disabled: !0,
                label: "<span class='webix_icon wxi-menu-left'></span>",
                batch: "pager",
                click: function() {
                    dt(n, -1)
                }
            }, {
                view: "button",
                type: "htmlbutton",
                width: 34,
                id: "next-sheet",
                label: "<span class='webix_icon wxi-menu-right'></span>",
                batch: "pager",
                click: function() {
                    dt(n, 1)
                }
            }]
        };
        return n.callEvent("onViewInit", ["bottom-toolbar", o]),
            o
    }
    function dt(e, t) {
        var n = e.$$("sheets");
        n.scrollTo(n.getScrollState().x + t * e.config.sheetTabWidth, 0)
    }
    function ft(t, e) {
        var n, o, i;
        return i = -1 < (n = lt(t._sheets, function(e) {
            return e.name == t._activeSheet
        })) ? n + 1 : t._sheets.length,
            o = function r(e) {
                var t = e._sheets.length + 1;
                for (; xt(e, webix.i18n.spreadsheet.labels.sheet + t); )
                    t++;
                return webix.i18n.spreadsheet.labels.sheet + t
            }(t),
            e = e || {
                data: []
            },
            t._sheets.splice(i, 0, {
                name: o,
                content: e
            }),
            t.$$("sheets").add({
                id: o,
                value: o
            }, i),
            t.showSheet(o),
            t.callEvent("onSheetAdd", [o]),
            o
    }
    function mt(e, t) {
        e.$$("sheets").edit(t)
    }
    function vt(e, t) {
        var n, o;
        1 < e._sheets.length && (n = lt(e._sheets, function(e) {
            return e.name == t
        }),
            e._sheets.splice(n, 1),
        e._sheets[n] || (n = 0),
            o = e._sheets[n],
            e._activeSheet = null,
        e.$$("sheets") && (e.$$("sheets").remove(t),
            e.$$("sheets").refresh()),
            e.showSheet(o.name),
            e.callEvent("onSheetRemove", [t]))
    }
    function gt(e, t, n) {
        if (t != n) {
            for (var o = 1; !n || xt(e, n); )
                n = webix.i18n.spreadsheet.labels.sheet + o,
                    o++;
            n = n.replace(/[*?:[\]\\/]/g, "").substring(0, 31);
            var i = xt(e, t)
                , r = e.$$("sheets");
            if (i.name = n,
            e._activeSheet == t && (e._activeSheet = n),
                r)
                r.getItem(t).value = n,
                    r.data.changeId(t, n),
                    r.refresh(n);
            e.callEvent("onSheetRename", [t, n])
        }
    }
    function wt(e, t) {
        t || (t = {
            data: []
        }),
        t.sheets || (t = pt(t));
        var n = t.sheets[0].name;
        e._activeSheet = "",
            e._sheets = t.sheets,
            function i(e, t) {
                var n = e.$$("sheets");
                if (n) {
                    n.clearAll();
                    var o = [];
                    t.sheets.forEach(function(e) {
                        o.push({
                            id: e.name,
                            value: e.name
                        })
                    }),
                        n.parse(o)
                }
            }(e, t),
            bt(e, n)
    }
    function pt(e) {
        return {
            sheets: [{
                name: webix.i18n.spreadsheet.labels.sheet + 1,
                content: e
            }]
        }
    }
    function bt(e, t) {
        t != e._activeSheet && (e.callEvent("onBeforeSheetShow", [t]) && (e._activeSheet && (xt(e, e._activeSheet).content = e.serialize()),
            e._activeSheet = t,
            yt(e, xt(e, t).content),
            e.callEvent("onAfterSheetShow", [t])))
    }
    function xt(e, t) {
        return at(e._sheets, function(e) {
            return e.name == t
        })
    }
    function _t(e) {
        return e._activeSheet
    }
    function yt(e, t) {
        var n = S(function r(e, t, n) {
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                i[0] > t && (t = i[0]),
                i[1] > n && (n = i[1])
            }
            return [1 * t, 1 * n]
        }(t.data, e.config.rowCount, e.config.columnCount), 2)
            , o = n[0]
            , i = n[1];
        e.callEvent("onReset", []),
        o == e.config.rowCount && i == e.config.columnCount || (e.config.rowCount = o,
            e.config.columnCount = i,
            e._resetTable()),
            e._loading_data = !0,
            e.callEvent("onDataParse", [t]),
            e._loading_data = !1,
            e._table.refresh(),
        e.config.bottombar && e.$$("sheets").refresh()
    }
    var $t = function() {
        function t(e) {
            n(this, t),
                this.view = e
        }
        return i(t, [{
            key: "$init",
            value: function() {}
        }, {
            key: "$show",
            value: function() {}
        }, {
            key: "$hide",
            value: function() {}
        }, {
            key: "open",
            value: function() {
                var e = this;
                this.$dialog || (this.$dialog = webix.ui(this.$init()),
                    this.$dialog.attachEvent("onHide", function() {
                        return e.$hide()
                    }));
                var t = this.$dialog.getBody();
                this.$dialog.show(),
                !1 === this.$show(this.$dialog, t) && this.close()
            }
        }, {
            key: "close",
            value: function() {
                webix.UIManager.setFocus(this.view),
                    this.$dialog.hide()
            }
        }]),
            t
    }();
    function Ct(e) {
        return e ? ('"' === (e = e.trim())[0] && (e = e.substr(1)),
        '"' === e[e.length - 1] && (e = e.substr(0, e.length - 1)),
            e) : ""
    }
    var St = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function(e, t) {
                    if (this.cell = this.view.getSelectedId(),
                        !this.cell)
                        return !1;
                    t.elements.preview.setHTML(""),
                        t.elements.url.setValue("");
                    var n = function o(e) {
                        if (e && 0 === e.indexOf("=IMAGE("))
                            return {
                                url: Ct(e.substr(7, e.length - 8))
                            }
                    }(this.view.getCellValue(this.cell.row, this.cell.column));
                    n && n.url && t.elements.url.setValue(n.url),
                        t.elements.url.focus()
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this
                        , t = this.view.config.save
                        , n = t && t.images || null;
                    return {
                        view: "ssheet-dialog",
                        head: webix.i18n.spreadsheet.labels["image-title"],
                        move: !0,
                        position: "center",
                        body: {
                            view: "form",
                            elements: [{
                                view: "text",
                                name: "url",
                                placeholder: webix.i18n.spreadsheet.labels["image-url"],
                                on: {
                                    onChange: Vt
                                }
                            }, {
                                view: "label",
                                label: webix.i18n.spreadsheet.labels["image-or"],
                                align: "center"
                            }, {
                                view: "uploader",
                                label: webix.i18n.spreadsheet.labels["image-upload"],
                                upload: n,
                                on: {
                                    onBeforeFileAdd: kt,
                                    onFileUpload: Et
                                }
                            }, {
                                view: "formlate",
                                name: "preview",
                                borderless: !0,
                                css: "webix_ssheet_preview",
                                template: "",
                                height: 50
                            }]
                        },
                        on: {
                            onSaveClick: function() {
                                return function o(e) {
                                    var t = e.cell
                                        , n = It(e.$dialog.getBody().elements.url.getValue());
                                    e.view.addImage(t.row, t.column, n),
                                        e.close()
                                }(e)
                            },
                            onHideClick: function() {
                                return e.close()
                            },
                            onCancelClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }]),
            t
    }();
    function kt(e) {
        var t = this;
        if (!this.config.upload) {
            var n = new FileReader;
            return n.onload = function(e) {
                return t.getFormView().elements.url.setValue(e.target.result)
            }
                ,
                n.readAsDataURL(e.file),
                !1
        }
        this.getFormView().elements.preview.setHTML("")
    }
    function Et(e, t) {
        this.getFormView().elements.url.setValue(t.imageURL)
    }
    function Vt(e) {
        e && (e = webix.template.escape(It(e)),
            this.getFormView().elements.preview.setHTML("<img class='webix_ssheet_cimage' src='" + e + "'></img>"))
    }
    function It(e) {
        return /^[/]|((https?:\/|data:image)\/)/i.test(e) || (e = "http://" + e),
            e
    }
    var zt = Object.freeze({
        action: "add-image",
        DialogBox: St
    });
    function Rt(e) {
        var t = e.charCodeAt(0);
        return 65 <= t && t <= 122 || 36 === t
    }
    function At(e, t, n) {
        for (var o, i = e.length, r = n, a = !1, l = t; l < i; l++) {
            var s = e[l];
            if ("'" !== s) {
                if (!a)
                    if ("!" === s)
                        "'" === (r = e.substr(t, l - t))[0] && (r = r.substr(1, r.length - 2)),
                            t = l + 1;
                    else if (!(Rt(s) || (void 0,
                    48 <= (o = s.charCodeAt(0)) && o <= 57)))
                        return [e.substr(t, l - t), l, t, r]
            } else
                a = !a
        }
        return [e.substr(t), l, t, r]
    }
    var Ot = /^[A-Z$]+[0-9]+$/;
    function Ut(e) {
        return Ot.test(e)
    }
    function Ft(e) {
        for (var t = 0, n = 0, o = 1, i = 1, r = 0, a = !1, l = e.length - 1; 0 <= l; l--) {
            var s = e[l].charCodeAt(0);
            36 !== s ? s < 58 ? (n += (s - 48) * o,
                o *= 10) : (a || (t = n,
                a = !(n = 0),
                i += o = 1),
                n += (s - 64) * o,
                o *= 26) : r += i
        }
        return [t, n, r]
    }
    function Mt(e, t, n, o) {
        var i = t.ranges.getCode(n, o);
        if (!i)
            return "";
        var r = i.indexOf("!");
        -1 !== r && ("'" === (o = i.substr(0, r))[0] && (o = o.substr(1, o.length - 2)),
            i = i.substr(r + 1));
        var a = S(i.split(":"), 2);
        return Nt(e, a[0], a[1], o)
    }
    function Nt(e, t, n, o) {
        var i = S(Ft(t), 2)
            , r = i[0]
            , a = i[1]
            , l = S(Ft(n), 2)
            , s = l[0]
            , c = l[1];
        if (s < r) {
            var u = r;
            r = s,
                s = u
        }
        if (c < a) {
            var h = a;
            a = c,
                c = h
        }
        return "" === o ? (e.push([r, a, s, c, ""]),
            "this.r(".concat(r, ",").concat(a, ",").concat(s, ",").concat(c, ")")) : (e.push([r, a, s, c, o]),
            'this.rs("'.concat(o, '",').concat(r, ",").concat(a, ",").concat(s, ",").concat(c, ")"))
    }
    function jt(e, t) {
        for (var n = [], o = 0, i = !1, r = !1, a = "=" === e[a] ? 1 : 0; a < e.length; a++) {
            var l = e[a];
            if ('"' == l)
                i = !i;
            else if (!i)
                if ("{" == l && "{" == e[a + 1])
                    r = !0;
                else if ("}" == l && "}" == e[a + 1])
                    r = !1;
                else if (!r && ("'" === l || Rt(l))) {
                    var s = S(At(e, a, ""), 4)
                        , c = s[0]
                        , u = s[1]
                        , h = s[3]
                        , d = u - 1;
                    if ("" === h)
                        "(" !== e[d + 1] && Ut(c) && (Tt(n, e, a, o, t ? c : Ft(c)),
                            o = d + 1);
                    else if (t && (Tt(n, e, a, o, [h, c]),
                        o = d + 1),
                    ":" === e[d + 1])
                        d = S(At(e, d + 2, ""), 2)[1] - 1;
                    a = d
                }
        }
        return o != e.length && n.push(e.substr(o)),
            n
    }
    function Tt(e, t, n, o, i) {
        0 !== n && e.push(t.substr(o, n - o)), e.push(i)
    }
    var Bt = {}, Ht = {};

    function Dt(e, t, n) {
        var o = function C(e, t) {
            var n, o, i, r, a, l = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : "", s = "return ", c = [], u = !1, h = "", d = "";
            if ("=" !== e[0])
                return !1;
            for (var f = 1; f < e.length; f++) {
                var m = e[f];
                if ('"' == m)
                    u = !u;
                else {
                    if ("{" == m && "{" == e[f + 1]) {
                        var v = S(At(e, f + 2), 2)
                            , g = v[0];
                        f = v[1] + 1,
                            s += "this.p.".concat(g);
                        continue
                    }
                    if (!u && ("'" === m || Rt(m))) {
                        var w = S(At(e, f, l), 4)
                            , p = w[0]
                            , b = w[1]
                            , x = w[2]
                            , _ = w[3]
                            , y = p.toUpperCase();
                        if ("(" === e[1 + (f = b - 1)])
                            s += "this.m.".concat(y);
                        else if (Ut(y))
                            ":" === e[f + 1] ? (h = y,
                                d = _,
                                f++) : "" !== h ? (s += Nt(c, h, y, d),
                                h = "") : s += (n = c,
                                o = _,
                                i = S(Ft(y), 2),
                                r = i[0],
                                a = i[1],
                                "" !== o ? (n.push([r, a, r, a, o]),
                                    'this.vs("'.concat(o, '",').concat(r, ",").concat(a, ")")) : (n.push([r, a, r, a, ""]),
                                    "this.v(".concat(r, ",").concat(a, ")")));
                        else {
                            var $ = Mt(c, t, y, _);
                            if ("" == $)
                                continue;
                            s += $
                        }
                        y !== p && (e = e.substr(0, x) + y + e.substr(b));
                        continue
                    }
                }
                u ? s += m : "&" === m && "&" !== e[f + 1] ? s += "+" : "<" === m && ">" === e[f + 1] ? (s += "!=",
                    f++) : "=" === m && "<" !== e[f - 1] && ">" !== e[f - 1] ? s += "==" : s += m
            }
            return {
                code: s + ";",
                triggers: c,
                text: e
            }
        }(e, t, n), i = n ? Ht : Bt;
        return o.handler = i[e] = i[e] || function r(e) {
            try {
                return new Function(e)
            } catch (t) {
                return Pt
            }
        }(o.code), o
    }

    function Pt() {
        return webix.i18n.spreadsheet.table["math-error"]
    }

    function Lt(e, t, n) {
        for (var o = jt(e), i = o.length, r = n ? n.start : null, a = n ? n.end : null, l = 1; l < i; l += 2) {
            var s = S(o[l], 3)
                , c = s[0]
                , u = s[1]
                , h = s[2]
                , d = 1 & h
                , f = 2 & h;
            "move" === t.id && (!t.cut || c >= r.row && c <= a.row && u >= r.column && u <= a.column) ? (u += f ? 0 : t.column,
                c += d ? 0 : t.row) : "row" === t.id && t.start <= c ? c += d ? 0 : t.count : "column" === t.id && t.start <= u && (u += f ? 0 : t.count),
                o[l] = u && c ? (f ? "$" : "") + m[u] + (d ? "$" : "") + c : 0
        }
        return o.join("")
    }
    function Kt(e, t, n, o) {
        for (var i = jt(e, !0), r = 0; r < i.length; r++)
            if (webix.isArray(i[r])) {
                var a = i[r][0] === t;
                !o.multiSheet && a && (o.multiSheet = !0);
                var l = a ? n : i[r][0];
                i[r] = "'" + l + "'!" + i[r][1]
            }
        return i.join("")
    }
    function Wt(r, e, t) {
        r.attachEvent("onBeforeSheetShow", function() {
            delete r._mathSheetCache[_t(r)]
        }),
            r.attachEvent("onSheetRename", function(o, i) {
                r._sheets.forEach(function(e) {
                    var n = {
                        multiSheet: !1
                    };
                    ["data", "editors", "conditions", "ranges"].forEach(function(t) {
                        e.content[t] && e.content[t].forEach(function(e) {
                            switch (t) {
                                case "data":
                                    "=" === e[2][0] && (e[2] = Kt(e[2], o, i, n));
                                    break;
                                case "editors":
                                    e[2].options = Kt(e[2].options, o, i, n);
                                    break;
                                case "conditions":
                                    "=" === e[3][0] && (e[3] = Kt(e[3], o, i, n));
                                    break;
                                case "ranges":
                                    e[1] = Kt(e[1], o, i, n)
                            }
                        })
                    }),
                    !0 === n.multiSheet && (delete r._mathSheetCache[e.name],
                        Gt(r, e.name),
                        function t() {
                            Bt = {},
                                Ht = {}
                        }())
                }),
                    delete r._mathSheetCache[o]
            }),
            r.attachEvent("onSheetRemove", function(e) {
                delete r._mathSheetCache[e]
            }),
            r._mathSheetCache = {},
            r._mathSheetCore = e,
            r._mathSheetHelpers = t
    }
    function Gt(e, t) {
        if (!t)
            return Zt(qt(e));
        e._mathSheetCache[t] || (e._mathSheetCache[t] = t === _t(e) ? Zt(qt(e)) : Zt(function n(c, u) {
            var h = xt(c, u).content
                , d = []
                , f = []
                , m = [];
            return {
                init: function() {
                    if (h.ranges)
                        for (var e = 0; e < h.ranges.length; e++) {
                            var t = h.ranges[e];
                            m[t[0]] = t[1]
                        }
                    if (h.data)
                        for (var n = 0; n < h.data.length; n++) {
                            var o = S(h.data[n], 3)
                                , i = o[0]
                                , r = o[1]
                                , a = o[2];
                            if (d[i] || (d[i] = []),
                            "=" === (d[i][r] = a)[0]) {
                                var l = c._mathSheetHelpers.parse(a, c._mathSheetCore, u);
                                d[i][r] = l.handler;
                                for (var s = 0; s < l.triggers.length; s++)
                                    if (l.triggers[s][5]) {
                                        f.push(h.data[n]);
                                        break
                                    }
                            }
                        }
                },
                getRangeCode: function(e) {
                    return m[e]
                },
                getRow: function(e) {
                    return d[e] || []
                },
                getCell: function(e, t) {
                    var n = this.getRow(e)[t];
                    return "function" == typeof n ? c._mathSheetHelpers.execute(n, c._mathSheetCore) : n
                },
                getRange: function(e, t, n, o) {
                    for (var i = [], r = e; r <= n; r++)
                        for (var a = t; a <= o; a++)
                            i.push(this.getCell(r, a));
                    return i
                }
            }
        }(e, t))).init();
        return e._mathSheetCache[t]
    }
    function Zt(s) {
        return {
            init: function() {
                s.init()
            },
            getRangeCode: function(e) {
                return s.getRangeCode(e)
            },
            getValue: function(e, t) {
                var n = s.getCell(e, t)
                    , o = 1 * n;
                return isNaN(o) ? n || "" : o
            },
            getRangeValue: function(e) {
                var t = this.getRangeCode(e) || e;
                if (-1 == t.indexOf(":"))
                    return [];
                var n = b(t);
                return this.getRange.apply(this, n)
            },
            getRange: function(e, t, n, o) {
                for (var i = s.getRange(e, t, n, o), r = i.length - 1; 0 <= r; r--) {
                    var a = i[r]
                        , l = "" !== a ? 1 * a : "";
                    i[r] = isNaN(l) ? a || "" : l
                }
                return i
            }
        }
    }
    function qt(s) {
        return {
            init: function() {},
            getRangeCode: function(e) {
                return s.ranges.getCode(e)
            },
            getRow: function(e) {
                return s.getRow(e)
            },
            getCell: function(e, t) {
                return s.getRow(e)[t]
            },
            getRange: function(e, t, n, o) {
                for (var i = [], r = e; r <= n; r++)
                    for (var a = s.getRow(r), l = t; l <= o; l++)
                        i.push(a[l]);
                return i
            }
        }
    }
    function Yt() {
        return "<span class='webix_ssheet_empty'>" + webix.i18n.spreadsheet.labels["dropdown-empty"] + "</span>"
    }
    function Xt(e, t, n) {
        var o;
        if ("string" == typeof t) {
            var i = b(t, e)
                , r = Gt(e, i[4]);
            o = r.getRange.apply(r, i)
        } else
            o = webix.copy(t);
        if (n) {
            if (n.unique)
                for (var a = {}, l = o.length - 1; 0 <= l; l--)
                    a[o[l]] ? o.splice(l, 1) : a[o[l]] = !0;
            n.order && o.sort();
            var s = o.indexOf("");
            -1 < s && (o.splice(s, 1),
            n.filter && o.unshift(Yt())),
            n.empty && o.unshift({
                id: "$empty",
                $empty: !0,
                value: ""
            })
        }
        return o
    }
    var Qt = function() {
        function t(e) {
            n(this, t),
                this._master = e,
                this._ranges = {}
        }
        return i(t, [{
            key: "clear",
            value: function() {
                this._ranges = {}
            }
        }, {
            key: "add",
            value: function(e, t) {
                var n = !!this._ranges[e];
                this._master.callEvent("onAfterRangeSet", [e, t]),
                    this._ranges[e] = t,
                n && this._master.callEvent("onMathRefresh", [])
            }
        }, {
            key: "getCode",
            value: function(e, t) {
                return t ? Gt(this._master, t).getRangeCode(e) : this._ranges[e]
            }
        }, {
            key: "remove",
            value: function(e) {
                delete this._ranges[e]
            }
        }, {
            key: "getRanges",
            value: function() {
                var e = [];
                for (var t in this._ranges)
                    e.push({
                        name: t,
                        range: this._ranges[t]
                    });
                return e
            }
        }, {
            key: "parse",
            value: function(e) {
                if (e)
                    for (var t = e.length; t--; ) {
                        var n = e[t];
                        this._ranges[n[0]] = n[1]
                    }
            }
        }, {
            key: "serialize",
            value: function() {
                var e, t = [];
                for (e in this._ranges)
                    t.push([e, this._ranges[e]]);
                return t
            }
        }]),
            t
    }()
        , Jt = [{
        id: "line",
        value: "Line"
    }, {
        id: "spline",
        value: "Spline"
    }, {
        id: "splineArea",
        value: "Spline Area"
    }, {
        id: "area",
        value: "Area"
    }, {
        id: "bar",
        value: "Bar"
    }, {
        id: "pie",
        value: "Pie"
    }]
        , en = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function(e, t) {
                    if (this.cell = this.view.getSelectedId(),
                        !this.cell)
                        return !1;
                    var i = t.elements;
                    this.view.$handleSelection = function(e, t, n, o) {
                        return i.range.setValue(n + ":" + o),
                            !1
                    }
                        ,
                        i.range.setValue("");
                    var n = function o(e) {
                        if (e && 0 === e.indexOf("=SPARKLINE(")) {
                            var t = e.substr(11, e.length - 12).split(",");
                            return {
                                range: t[0],
                                type: Ct(t[1]),
                                color: Ct(t[2]),
                                negativeColor: Ct(t[3])
                            }
                        }
                    }(this.view.getCellValue(this.cell.row, this.cell.column));
                    n && (t.blockEvent(),
                        i.type.setValue(n.type),
                        i.range.setValue(n.range),
                    n.color && (i.color_def.setValue(n.color),
                        i.color_pos.setValue(n.color)),
                    n.negativeColor && i.color_neg.setValue(n.negativeColor),
                        t.unblockEvent(),
                        tn(this)),
                        i.range.focus()
                }
            }, {
                key: "$hide",
                value: function() {
                    this.view.$handleSelection = null
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "ssheet-dialog",
                        head: webix.i18n.spreadsheet.labels["sparkline-title"],
                        move: !0,
                        position: "center",
                        body: {
                            view: "form",
                            id: "form",
                            visibleBatch: 1,
                            on: {
                                onChange: function() {
                                    return tn(e)
                                }
                            },
                            elements: [{
                                view: "richselect",
                                name: "type",
                                label: webix.i18n.spreadsheet.labels["sparkline-type"],
                                value: "line",
                                labelPosition: "left",
                                suggest: {
                                    view: "ssheet-form-suggest",
                                    data: Jt
                                },
                                on: {
                                    onChange: on
                                }
                            }, {
                                view: "text",
                                label: webix.i18n.spreadsheet.labels["sparkline-range"],
                                name: "range"
                            }, {
                                view: "ssheet-colorpicker",
                                label: webix.i18n.spreadsheet.labels["sparkline-color"],
                                name: "color_def",
                                id: "add_sparkline_color",
                                value: "#6666FF",
                                batch: "1"
                            }, {
                                view: "ssheet-colorpicker",
                                label: webix.i18n.spreadsheet.labels["sparkline-positive"],
                                name: "color_pos",
                                value: "#6666FF",
                                batch: "2"
                            }, {
                                view: "ssheet-colorpicker",
                                label: webix.i18n.spreadsheet.labels["sparkline-negative"],
                                name: "color_neg",
                                value: "#FF6666",
                                batch: "2"
                            }, {
                                view: "formlate",
                                name: "preview",
                                borderless: !0,
                                css: "webix_ssheet_preview",
                                height: 50
                            }]
                        },
                        on: {
                            onSaveClick: function() {
                                return function o(e) {
                                    var t = e.$dialog.getBody()
                                        , n = nn(t, t.getValues());
                                    e.checkRange(n.range) && (e.view.addSparkline(e.cell.row, e.cell.column, n),
                                        e.close())
                                }(e)
                            },
                            onHideClick: function() {
                                return e.close()
                            },
                            onCancelClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }, {
                key: "checkRange",
                value: function(e) {
                    if (e && b(e, this.view))
                        return !0;
                    this.view.alert({
                        text: webix.i18n.spreadsheet.labels["error-range"]
                    })
                }
            }]),
            t
    }();
    function tn(e) {
        var t = e.$dialog.getBody()
            , n = t.getValues();
        if (n.range && e.checkRange(n.range)) {
            var o, i = Xt(e.view, n.range), r = nn(t);
            for (o = 0; o < i.length; o++)
                i[o] = i[o] || 0;
            t.elements.preview.setValue(webix.Sparklines.getTemplate(r)(i, {
                width: 200,
                height: 40
            }))
        }
    }
    function nn(e, t) {
        var n = e.getValues();
        return t = t || {
            type: n.type
        },
            "bar" === n.type ? (t.color = n.color_pos,
                t.negativeColor = n.color_neg) : e.elements.color_def.isVisible() && (t.color = n.color_def),
            t
    }
    function on(e) {
        var t = this.getFormView();
        switch (e) {
            case "pie":
                t.showBatch(3);
                break;
            case "bar":
                t.showBatch(2);
                break;
            default:
                t.showBatch(1)
        }
    }
    var rn = Object.freeze({
        action: "add-sparkline",
        DialogBox: en
    })
        , an = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function(e) {
                    var t = e.$$("table")
                        , r = e.$$("form");
                    r.clear(),
                        r.elements.name.focus(),
                        r.elements.range.setValue(this.view.getSelectedRange()),
                        t.clearAll(),
                        t.parse(this.view.ranges.getRanges()),
                        this.view.$handleSelection = function(e, t, n, o) {
                            return r.elements.range.setValue(function i(e, t, n) {
                                return (n ? _(n) + "!" : "") + e + ":" + t
                            }(n, o, "")),
                                !1
                        }
                }
            }, {
                key: "$hide",
                value: function() {
                    this.view.$handleSelection = null
                }
            }, {
                key: "saveClick",
                value: function() {
                    var e = this.$dialog.$$("form")
                        , t = e.getValues()
                        , n = t.range.indexOf("!");
                    if (t.range = t.range.substr(0, n + 1) + t.range.substr(n + 1).toUpperCase(),
                        t.name = t.name.toUpperCase(),
                        e.setValues(t),
                        e.validate()) {
                        var o = this.$dialog.$$("table");
                        t.id && o.exists(t.id) ? (this.view.ranges.remove(o.getItem(t.id).name),
                            o.updateItem(t.id, t)) : this.$dialog.$$("table").add(t),
                            this.view.ranges.add(t.name, t.range),
                            e.clear()
                    }
                }
            }, {
                key: "removeRange",
                value: function(n) {
                    var o = this;
                    this.view.confirm({
                        text: webix.i18n.spreadsheet.labels["range-remove-confirm"],
                        callback: function(e) {
                            if (e) {
                                var t = o.$dialog.$$("table");
                                o.view.ranges.remove(t.getItem(n).name),
                                    t.remove(n)
                            }
                        }
                    })
                }
            }, {
                key: "editRange",
                value: function(e) {
                    this.$dialog.$$("form").setValues(this.$dialog.$$("table").getItem(e))
                }
            }, {
                key: "$init",
                value: function() {
                    var r = this
                        , e = {
                        type: "clean",
                        cols: [{
                            view: "ssheet-dialog-table",
                            id: "table",
                            borderless: !0,
                            columns: [{
                                id: "name",
                                header: webix.i18n.spreadsheet.labels["range-name"],
                                width: 120
                            }, {
                                id: "range",
                                header: webix.i18n.spreadsheet.labels["range-cells"],
                                width: 120
                            }, {
                                template: "<div class='webix_icon wxi-pencil'></div>",
                                width: 40
                            }, {
                                template: "<div class='webix_icon wxi-trash'></div>",
                                width: 40
                            }],
                            autowidth: !0,
                            height: 150,
                            onClick: {
                                "wxi-trash": function(e, t) {
                                    return r.removeRange(t)
                                },
                                "wxi-pencil": function(e, t) {
                                    return r.editRange(t)
                                }
                            }
                        }, {
                            width: 250,
                            view: "form",
                            id: "form",
                            rules: {
                                name: function(n) {
                                    var e = /^[A-Za-z]+$/.test(n)
                                        , t = r.$dialog.$$("table")
                                        , o = r.$dialog.$$("form").getValues()
                                        , i = !0;
                                    return t.eachRow(function(e) {
                                        var t = this.getItem(e);
                                        t.name == n && t.id != o.id && (i = !1)
                                    }),
                                    e && i
                                },
                                range: V
                            },
                            elementsConfig: {
                                labelWidth: 70
                            },
                            elements: [{
                                view: "text",
                                name: "name",
                                gravity: 1,
                                label: webix.i18n.spreadsheet.labels["range-name"]
                            }, {
                                view: "text",
                                name: "range",
                                gravity: 1,
                                label: webix.i18n.spreadsheet.labels["range-cells"]
                            }, {
                                cols: [{}, {
                                    view: "button",
                                    value: "Save",
                                    click: function() {
                                        return r.saveClick()
                                    }
                                }]
                            }]
                        }]
                    };
                    return {
                        view: "ssheet-dialog",
                        move: !0,
                        head: webix.i18n.spreadsheet.labels["range-title"],
                        buttons: !1,
                        autoheight: !0,
                        width: 610,
                        position: "center",
                        body: e,
                        on: {
                            onSaveClick: function() {
                                return r.close()
                            },
                            onHideClick: function() {
                                return r.close()
                            },
                            onCancelClick: function() {
                                return r.close()
                            }
                        }
                    }
                }
            }]),
            t
    }()
        , ln = Object.freeze({
        action: "add-range",
        DialogBox: an
    })
        , sn = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function() {
                    var i = this.$dialog.$$("form");
                    if (this.cell = this.view.getSelectedId(!0),
                        !this.cell.length)
                        return !1;
                    i.clear();
                    var e = this.view.getCellEditor(this.cell[0].row, this.cell[0].column);
                    e && e.options && i.elements.range.setValue(e.options),
                        this.view.$handleSelection = function(e, t, n, o) {
                            return i.elements.range.setValue(n + ":" + o),
                                !1
                        }
                        ,
                        i.elements.range.focus()
                }
            }, {
                key: "$hide",
                value: function() {
                    this.view.$handleSelection = null
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "ssheet-dialog",
                        position: "center",
                        head: webix.i18n.spreadsheet.labels["dropdown-title"],
                        move: !0,
                        body: {
                            view: "form",
                            id: "form",
                            rows: [{
                                view: "text",
                                label: webix.i18n.spreadsheet.labels["dropdown-range"],
                                name: "range"
                            }]
                        },
                        on: {
                            onSaveClick: function() {
                                return e.okClick()
                            },
                            onHideClick: function() {
                                return e.close()
                            },
                            onCancelClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }, {
                key: "okClick",
                value: function() {
                    var t = this.$dialog.$$("form").elements.range.getValue();
                    t ? b(t, this.view) ? (u.set(function() {
                        for (var e = 0; e < this.cell.length; e++)
                            this.view.setCellEditor(this.cell[e].row, this.cell[e].column, {
                                editor: "richselect",
                                options: t
                            })
                    }, this),
                        this.close()) : this.view.alert({
                        text: webix.i18n.spreadsheet.labels["error-range"]
                    }) : this.close()
                }
            }]),
            t
    }()
        , cn = Object.freeze({
        action: "add-dropdown",
        DialogBox: sn
    })
        , un = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function() {
                    if (this.form = this.$dialog.$$("form"),
                        this.list = this.$dialog.$$("list"),
                        this.preview = this.$dialog.$$("preview"),
                        this.cell = this.view.getSelectedId(!0),
                        !this.cell.length)
                        return !1;
                    this.fillForm(this.view),
                        this.view.$handleSelection = function() {
                            return !1
                        }
                }
            }, {
                key: "$hide",
                value: function() {
                    this.view.$handleSelection = null
                }
            }, {
                key: "$init",
                value: function() {
                    var i = this,
                        e = webix.i18n.spreadsheet.labels,
                        t = re("int");
                    return {
                        view: "ssheet-dialog",
                        position: "center",
                        width: 460,
                        head: e["format-title"],
                        move: !0,
                        body: {
                            cols: [{
                                view: "list",
                                id: "list",
                                css: "webix_ssheet_format_type",
                                width: 120,
                                scroll: !1,
                                data: this.getFormats(),
                                select: !0,
                                on: {
                                    onSelectChange: function(e) {
                                        i.updateForm(),  "custom" === e[0] ? i.form.showBatch("custom") : (i.form.showBatch("common"), i.form.elements.separator.show(), "percent" === e[0] && i.form.elements.separator.hide())
                                    }
                                }
                            }, {
                                view: "form",
                                id: "form",
                                margin: 15,
                                height: 270,
                                paddingY: 0,
                                paddingX: 20,
                                elements: [{
                                    template: function(e) {
                                        return "<span class ='" + e.css + "'>" + e.value + "</span>"
                                    },
                                    css: "webix_ssheet_format_preview",
                                    autoheight: !0,
                                    id: "preview",
                                    borderless: !0
                                }, {
                                    view: "counter",
                                    css: "webix_ssheet_counter",
                                    label: e["decimal-places"],
                                    name: "zeros",
                                    value: 0,
                                    batch: "common"
                                }, {
                                    view: "checkbox",
                                    label: e.separator,
                                    name: "separator",
                                    batch: "common"
                                }, {
                                    view: "formlist",
                                    label: e.negative,
                                    name: "negative",
                                    batch: "common",
                                    css: "webix_ssheet_format_negative",
                                    template: function(e) {
                                        if (i.list) {
                                            var t = i.getFormat(e.id)
                                                , n = {
                                                css: ""
                                            }
                                                , o = (t = ue(t.fmt, t.delimiters))(-1234.56789, n);
                                            return "<span class='" + n.css + "'>" + o + "</span>"
                                        }
                                    },
                                    data: [{
                                        id: 1
                                    }, {
                                        id: 2
                                    }, {
                                        id: 3
                                    }]
                                }, {
                                    view: "text",
                                    label: e["format-pattern"],
                                    name: "format",
                                    labelPosition: "top",
                                    batch: "custom",
                                    placeholder: "[>100]0" + t.groupSign + "000" + t.decimalSign + "00;[>0]None"
                                }, {
                                    template: "<a href='https://webix-guides.gitbook.io/spreadsheet-user-guide/formatting_numbers#custom-number-format' target='_blank' class = 'docs'>" + e["format-docs"] + "</a>",
                                    borderless: !0,
                                    batch: "custom",
                                    id: "docs"
                                }],
                                elementsConfig: {
                                    labelWidth: 155
                                },
                                on: {
                                    onChange: function() {
                                        return i.updateForm()
                                    }
                                }
                            }]
                        },
                        on: {
                            onSaveClick: function() {
                                return i.okClick()
                            },
                            onHideClick: function() {
                                return i.close()
                            },
                            onCancelClick: function() {
                                return i.closeWin()
                            }
                        }
                    }
                }
            }, {
                key: "okClick",
                value: function() {
                    var t = this
                        , e = this.list.getSelectedId()
                        , n = "custom" == e ? {
                        format: this.form.getValues().format
                    } : this.form.getValues();
                    n.type = e,
                        u.set(function() {
                            for (var e = 0; e < t.cell.length; e++)
                                ce(t.view, t.cell[e].row, t.cell[e].column, n.format, n)
                        }),
                        this.view.$$("cells").refresh(),
                        this.closeWin()
                }
            }, {
                key: "closeWin",
                value: function() {
                    var e = this.view.getStyle(this.cell[0].row, this.cell[0].column)
                        , t = e && e.props.format ? e.props.format : "common";
                    me(t) || this.view.$$("bar").setValues({
                        format: t
                    }, !0),
                        this.close()
                }
            }, {
                key: "getFormat",
                value: function(e) {
                    var t = this.list.getSelectedId(),
                        n = this.form.getValues();
                    return n.negative = e || n.negative,
                        "custom" !== t ? {
                            fmt: ge(n = ve(t, n)),
                            delimiters: re(t)
                        } : {
                            fmt: n.format,
                            delimiters: re(t)
                        }
                }
            }, {
                key: "fillForm",
                value: function(e) {
                    var t, n = e.getStyle(this.cell[0].row, this.cell[0].column), o = {
                        zeros: 0,
                        separator: 0,
                        negative: 1,
                        format: ""
                    }, i = n && n.props.format ? n.props.format : "";
                    t = i && -1 != i ? oe[i].values.type : i = "price",
                        o.format = le(i),
                    "custom" !== t && webix.extend(o, oe[i].values, !0);
                    var r = this.view.$$("cells").getItem(this.cell[0].row)[this.cell[0].column];
                    ("" === r || isNaN(r)) && (r = 1234.56789),
                        this.value = r,
                        this.form.setValues(o),
                        this.list.select(t),
                        this.updateForm()
                }
            }, {
                key: "updateForm",
                value: function() {
                    var e = this.form.elements,
                        t = this.getFormat(),
                        n = { css: "" },
                        o = ue(t.fmt, t.delimiters)(1 * this.value, n);
                    this.preview.parse({
                        value: o,
                        css: n.css
                    }),
                        e.negative.refresh(),
                        e.format.setValue(t.fmt)
                }
            }, {
                key: "getFormats",
                value: function() {
                    var e = webix.i18n.spreadsheet.labels;
                    return [{
                        id: "price",
                        value: e.currency
                    }, {
                        id: "int",
                        value: e.number
                    }, {
                        id: "percent",
                        value: e.percent
                    }, {
                        id: "custom",
                        value: e["custom-format"]
                    }]
                }
            }]),
            t
    }()
        , hn = Object.freeze({
        action: "custom",
        DialogBox: un
    })
        , dn = [{
        id: ">",
        value: ">"
    }, {
        id: "<",
        value: "<"
    }, {
        id: "=",
        value: "="
    }, {
        id: "!=",
        value: webix.i18n.spreadsheet.labels["conditional-not-equal"]
    }, {
        id: "<>",
        value: webix.i18n.spreadsheet.labels["conditional-between"]
    }];
    var fn = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "_getCondition",
                value: function() {
                    var i = this
                        , e = this.view
                        , t = this.$dialog.getBody().getChildViews()[0].getChildViews()[0].getChildViews()
                        , r = [];
                    t.forEach(function(e) {
                        if (e.getValues) {
                            var t = e.getValues()
                                , n = [];
                            n.push(t.condition),
                                "<>" !== t.condition ? n.push(i._safeInt(t.value, 10)) : n.push([i._safeInt(t.value, 10), i._safeInt(t.value2, 10)]),
                                n.push(t.style);
                            for (var o = 0; o < n.length; o++)
                                if ("" === n[o])
                                    return !1;
                            r.push(n)
                        }
                    }),
                        e.callEvent("onConditionSet", [r])
                }
            }, {
                key: "_safeInt",
                value: function(e) {
                    var t = parseFloat(e);
                    return t == e ? t : e
                }
            }, {
                key: "_setCondition",
                value: function() {
                    var e = this.view
                        , t = e.getSelectedId(!0)
                        , n = t[0];
                    if (!t.length)
                        return !1;
                    var o = e.conditions.get(n.row, n.column);
                    if (o) {
                        var i = this.$dialog.getBody().getChildViews()[0].getChildViews()[0].getChildViews();
                        o.forEach(function(e, t) {
                            var n = {};
                            n.condition = e[0],
                                webix.isArray(e[1]) ? (n.value = e[1][0].toString(),
                                    n.value2 = e[1][1].toString()) : n.value = e[1].toString(),
                                n.style = e[2],
                                i[t + 1].setValues(n)
                        })
                    }
                }
            }, {
                key: "apply",
                value: function() {
                    this._getCondition(),
                        this.close()
                }
            }, {
                key: "_clean",
                value: function() {
                    this.$dialog.getBody().getChildViews()[0].getChildViews()[0].getChildViews().forEach(function(e) {
                        e.setValues && e.setValues({
                            condition: "",
                            value: "",
                            value2: "",
                            style: ""
                        })
                    })
                }
            }, {
                key: "$show",
                value: function() {
                    var i = this;
                    if (!this.view.getSelectedId())
                        return !1;
                    this.view.$handleSelection = function(e, t, n, o) {
                        return i.activeValue && n == o && i.activeValue.setValue("=" + n),
                            !1
                    }
                        ,
                        this._setCondition()
                }
            }, {
                key: "$hide",
                value: function() {
                    this.view.$handleSelection = null,
                        this._clean()
                }
            }, {
                key: "getRows",
                value: function(e, t) {
                    for (var n = this, o = [{
                        height: 36,
                        cols: [{
                            view: "label",
                            label: webix.i18n.spreadsheet.labels.display
                        }, {
                            view: "label",
                            label: webix.i18n.spreadsheet.labels.condition
                        }, {
                            view: "label",
                            label: webix.i18n.spreadsheet.labels.value
                        }, {
                            width: 25
                        }]
                    }], i = {
                        view: "form",
                        padding: 0,
                        borderless: !0,
                        elements: [{
                            margin: 10,
                            cols: [{
                                view: "richselect",
                                name: "style",
                                width: 120,
                                placeholder: webix.i18n.spreadsheet.labels["conditional-style"],
                                css: "webix_ssheet_cformat_select",
                                suggest: {
                                    padding: 0,
                                    borderless: !0,
                                    css: "webix_ssheet_cformat_list",
                                    body: {
                                        template: function(e) {
                                            var t = "webix_ssheet_cformat " + e.css;
                                            return '<div class="'.concat(t, '">').concat(e.name, "</div>")
                                        },
                                        data: e
                                    }
                                }
                            }, {
                                view: "richselect",
                                width: 105,
                                name: "condition",
                                placeholder: webix.i18n.spreadsheet.labels["conditional-operator"],
                                on: {
                                    onChange: function(e) {
                                        "<>" === e ? this.getFormView().elements.value2.show() : this.getFormView().elements.value2.hide()
                                    }
                                },
                                suggest: {
                                    view: "ssheet-form-suggest",
                                    body: {
                                        data: dn
                                    }
                                }
                            }, {
                                cols: [{
                                    view: "text",
                                    placeholder: webix.i18n.spreadsheet.labels["conditional-number"],
                                    on: {
                                        onFocus: function(e) {
                                            n.activeValue = e
                                        }
                                    },
                                    name: "value"
                                }, {
                                    view: "text",
                                    name: "value2",
                                    on: {
                                        onFocus: function(e) {
                                            n.activeValue = e
                                        }
                                    },
                                    hidden: !0
                                }]
                            }, {
                                view: "icon",
                                css: "webix_ssheet_cformat_clear",
                                icon: "wxi-trash",
                                click: mn
                            }]
                        }]
                    }; t--; )
                        o.push(i);
                    return o
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "ssheet-dialog",
                        head: webix.i18n.spreadsheet.labels["conditional-format"],
                        position: "center",
                        width: 500,
                        move: !0,
                        buttons: !1,
                        body: {
                            view: "form",
                            borderless: !0,
                            rows: [{
                                rows: this.getRows(function t(e) {
                                    return e.map(function(e) {
                                        return e.id = e.css,
                                            e
                                    })
                                }(this.view.config.conditionStyle), 3)
                            }, {
                                cols: [{
                                    gravity: 2
                                }, {
                                    view: "button",
                                    value: webix.i18n.spreadsheet.labels.apply,
                                    click: function() {
                                        return e.apply()
                                    }
                                }]
                            }]
                        },
                        on: {
                            onHideClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }]),
            t
    }();
    function mn() {
        this.getFormView().clear()
    }
    var vn = Object.freeze({
        action: "conditional-format",
        DialogBox: fn
    })
        , gn = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function(e, t) {
                    this.view.disable(),
                        t.elements.sheets.setValue(this.getSheets()),
                        t.elements.filename.setValue("Data"),
                        t.elements.filename.getInputNode().select()
                }
            }, {
                key: "$hide",
                value: function() {
                    this.view.enable()
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "ssheet-dialog",
                        head: webix.i18n.spreadsheet.labels["export-title"],
                        move: !0,
                        position: "center",
                        body: {
                            view: "form",
                            elements: [{
                                view: "text",
                                name: "filename",
                                placeholder: webix.i18n.spreadsheet.labels["export-name"]
                            }, {
                                view: "multicheckbox",
                                name: "sheets"
                            }]
                        },
                        on: {
                            onSaveClick: function() {
                                return function n(e) {
                                    var t = e.$dialog.getBody().getValues();
                                    webix.toExcel(e.view, t),
                                        e.close()
                                }(e)
                            },
                            onHideClick: function() {
                                return e.close()
                            },
                            onCancelClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }, {
                key: "getSheets",
                value: function() {
                    var e = this.view
                        , t = e._sheets
                        , n = {};
                    if (t && 1 < t.length)
                        for (var o = 0; o < t.length; o++)
                            n[t[o].name] = e._activeSheet === t[o].name ? 1 : 0;
                    return n
                }
            }]),
            t
    }();

    var wn = Object.freeze({
        action: "excel-export",
        DialogBox: gn
    })
        , pn = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function(e, t) {
                    if (!this.view.getSelectedId())
                        return !1;
                    this.restoreValue(t) || t.clear(),
                        t.elements.name.focus()
                }
            }, {
                key: "restoreValue",
                value: function(e) {
                    var t = this.view.getSelectedId();
                    if (t) {
                        var n = this.view.getRow(t.row)
                            , o = n["$" + t.column] || n[t.column];
                        if (o && 0 === o.indexOf("=LINK")) {
                            var i = o.split('"');
                            return e.setValues({
                                name: i[3] || "",
                                url: i[1] || ""
                            }),
                                !0
                        }
                    }
                    return !1
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "ssheet-dialog",
                        head: webix.i18n.spreadsheet.labels["link-title"],
                        move: !0,
                        position: "center",
                        body: {
                            view: "form",
                            elements: [{
                                view: "text",
                                name: "name",
                                placeholder: webix.i18n.spreadsheet.labels["link-name"]
                            }, {
                                view: "text",
                                name: "url",
                                placeholder: webix.i18n.spreadsheet.labels["link-url"]
                            }]
                        },
                        on: {
                            onSaveClick: function() {
                                return function i(e) {
                                    var t = e.view.getSelectedId()
                                        , n = e.$dialog.getBody().getValues()
                                        , o = "";
                                    n.url && (n.name = n.name || n.url,
                                    /^https?:\/\//i.test(n.url) || (n.url = "http://" + n.url),
                                        o = '=LINK("'.concat(n.url, '","').concat(n.name, '")'));
                                    e.view.setCellValue(t.row, t.column, o),
                                        e.view.refresh(),
                                        e.close()
                                }(e)
                            },
                            onHideClick: function() {
                                return e.close()
                            },
                            onCancelClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }]),
            t
    }();

    var bn = Object.freeze({
        action: "add-link",
        DialogBox: pn
    })
        , xn = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "$show",
                value: function(e, t) {
                    t.setValues({
                        data: "current",
                        paper: "A4",
                        fit: "page",
                        mode: "landscape",
                        sheetnames: 1,
                        margin: 0
                    })
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "ssheet-dialog",
                        head: webix.i18n.spreadsheet.labels["print-title"],
                        move: !0,
                        modal: !0,
                        width: 520,
                        height: 520,
                        position: "center",
                        buttons: !1,
                        body: {
                            view: "form",
                            elements: [{
                                type: "section",
                                template: webix.i18n.spreadsheet.labels["print-settings"]
                            }, {
                                cols: [{
                                    view: "radio",
                                    name: "data",
                                    vertical: !0,
                                    options: [{
                                        id: "current",
                                        value: webix.i18n.spreadsheet.labels["current-sheet"]
                                    }, {
                                        id: "all",
                                        value: webix.i18n.spreadsheet.labels["all-sheets"]
                                    }, {
                                        id: "selection",
                                        value: webix.i18n.spreadsheet.labels.selection
                                    }],
                                    on: {
                                        onChange: function(e) {
                                            "all" == e && this.getFormView().elements.sheetnames.setValue(1)
                                        }
                                    }
                                }, {
                                    rows: [{
                                        view: "checkbox",
                                        name: "sheetnames",
                                        labelRight: webix.i18n.spreadsheet.labels["sheet-names"]
                                    }, {
                                        view: "checkbox",
                                        name: "borderless",
                                        labelRight: webix.i18n.spreadsheet.labels.borderless
                                    }, {
                                        view: "checkbox",
                                        name: "skiprows",
                                        labelRight: webix.i18n.spreadsheet.labels["skip-rows"]
                                    }, {
                                        view: "checkbox",
                                        name: "margin",
                                        labelRight: webix.i18n.spreadsheet.labels.margin
                                    }]
                                }]
                            }, {
                                type: "section",
                                template: webix.i18n.spreadsheet.labels["print-paper"]
                            }, {
                                view: "radio",
                                name: "paper",
                                options: [{
                                    id: "letter",
                                    value: webix.i18n.spreadsheet.labels["page-letter"]
                                }, {
                                    id: "A4",
                                    value: webix.i18n.spreadsheet.labels["page-a4"]
                                }, {
                                    id: "A3",
                                    value: webix.i18n.spreadsheet.labels["page-a3"]
                                }]
                            }, {
                                type: "section",
                                template: webix.i18n.spreadsheet.labels["print-layout"]
                            }, {
                                cols: [{
                                    view: "radio",
                                    name: "fit",
                                    options: [{
                                        id: "page",
                                        value: webix.i18n.spreadsheet.labels["page-width"]
                                    }, {
                                        id: "data",
                                        value: webix.i18n.spreadsheet.labels["page-actual"]
                                    }]
                                }, {
                                    width: 35
                                }, {
                                    view: "radio",
                                    width: 220,
                                    name: "mode",
                                    options: [{
                                        id: "portrait",
                                        value: webix.i18n.spreadsheet.labels["page-portrait"]
                                    }, {
                                        id: "landscape",
                                        value: webix.i18n.spreadsheet.labels["page-landscape"]
                                    }]
                                }]
                            }, {
                                cols: [{}, {
                                    view: "button",
                                    css: "ssheet_cancel_button",
                                    value: webix.i18n.spreadsheet.labels.cancel,
                                    autowidth: !0,
                                    click: function() {
                                        return e.close()
                                    }
                                }, {
                                    view: "button",
                                    value: webix.i18n.spreadsheet.labels.print,
                                    autowidth: !0,
                                    click: function() {
                                        return e.apply(e)
                                    }
                                }]
                            }]
                        },
                        on: {
                            onHideClick: function() {
                                return e.close()
                            }
                        }
                    }
                }
            }, {
                key: "apply",
                value: function(e) {
                    var t = e.$dialog.getBody().getValues();
                    t.margin = t.margin ? 0 : {},
                        this.close(),
                        webix.print(e.view, t)
                }
            }]),
            t
    }()
        , _n = Object.freeze({
        action: "print",
        DialogBox: xn
    })
        , yn = function(e) {
        function t() {
            return n(this, t),
                s(this, a(t).apply(this, arguments))
        }
        return r(t, $t),
            i(t, [{
                key: "open",
                value: function(e) {
                    var t = this;
                    if (this.cell = e.cell ? e.cell : this.view.getSelectedId(),
                    !this.cell || this.view.isCellLocked(this.cell.row, this.cell.column) && !e.viewonly || !this.view.callEvent("onBeforeCommentShow", [this.cell.row, this.cell.column, !e.viewonly]))
                        return !1;
                    this.view.comments._activeComment = {
                        editStatus: !e.viewonly,
                        cell: this.cell
                    },
                    this.$dialog || (this.$dialog = webix.ui(this.$init()),
                        this.view.comments.commentsView = this.$dialog,
                        this.$dialog.attachEvent("onHide", function() {
                            return t.$hide()
                        }),
                        this.view.attachEvent("onCommentHide", function() {
                            return t.$dialog.hide()
                        }));
                    var n = this.$dialog.getBody()
                        , o = this.view.$$("cells").getSpan(this.cell.row, this.cell.column)
                        , i = o ? {
                        row: this.cell.row,
                        column: 1 * o[1] + o[2] - 1
                    } : this.cell;
                    webix.delay(function() {
                        t.$dialog.show(t.view.$$("cells").getItemNode(i)),
                            t._setComment()
                    }),
                    !1 === this.$show(this.$dialog, n) && this.close()
                }
            }, {
                key: "$show",
                value: function() {
                    this.textarea = this.$dialog.queryView({
                        view: "textarea"
                    }),
                        this.template = this.$dialog.queryView({
                            view: "template"
                        })
                }
            }, {
                key: "$init",
                value: function() {
                    var e = this;
                    return {
                        view: "popup",
                        css: "ssheet_comments",
                        minWidth: 250,
                        minHeight: 150,
                        relative: "right",
                        resize: !0,
                        on: {
                            onViewResize: function() {
                                e.$dialog.hide(),
                                    e.$dialog.show()
                            }
                        },
                        body: {
                            animate: !1,
                            cells: [{
                                view: "template",
                                css: "ssheet_comment_view",
                                borderless: !0,
                                scroll: "auto",
                                onClick: {
                                    ssheet_comment_view: function() {
                                        e.view.config.readonly || e.view.isCellLocked(e.cell.row, e.cell.column) || e.showInput(e.view.comments.get(e.cell.row, e.cell.column))
                                    }
                                }
                            }, {
                                view: "textarea",
                                on: {
                                    onChange: function() {
                                        e.addComment()
                                    },
                                    onFocus: function() {
                                        e.view.$$("cells").select(e.cell.row, e.cell.column),
                                            e.view.comments._activeComment = {
                                                editStatus: !0,
                                                cell: e.cell
                                            }
                                    },
                                    onBlur: function() {
                                        e.showTemplate(e.textarea.getValue()),
                                            e.changeTextarea(),
                                            e.view.comments._activeComment = {}
                                    }
                                }
                            }]
                        }
                    }
                }
            }, {
                key: "_setComment",
                value: function() {
                    var e = this.view.comments.get(this.cell.row, this.cell.column);
                    this.view.comments._activeComment.editStatus ? this.showInput(e) : this.showTemplate(e)
                }
            }, {
                key: "showTemplate",
                value: function(e) {
                    this.template.show(),
                        this.template.setHTML(e)
                }
            }, {
                key: "showInput",
                value: function(e) {
                    this.changeTextarea(e),
                        this.textarea.show(),
                        this.textarea.focus()
                }
            }, {
                key: "addComment",
                value: function() {
                    this.view.comments.add(this.cell.row, this.cell.column, this.textarea.getValue()),
                        this.$dialog.hide()
                }
            }, {
                key: "changeTextarea",
                value: function(e) {
                    this.textarea.blockEvent(),
                        this.textarea.setValue(e || ""),
                        this.textarea.unblockEvent()
                }
            }]),
            t
    }()
        , $n = Object.freeze({
        action: "add-comment",
        DialogBox: yn
    })
        , Cn = [zt, rn, ln, cn, hn, vn, wn, bn, _n, $n]
        , Sn = {};
    var kn = "webix_lock";
    function En(n, e, t, o, i) {
        var r = n.$$("cells");
        "object" === v(e) && "object" === v(t) ? u.set(function() {
            !function a(e, t, n, o) {
                for (var i = e.row; i <= t.row; i++)
                    for (var r = e.column; r <= t.column; r++)
                        n.call(o || this, i, r)
            }(e, t, function(e, t) {
                En(n, e, t, o, !0)
            })
        }) : (o = !1 !== o,
            ((n._locks[e] = n._locks[e] || {})[t] = o) ? r.addCellCss(e, t, kn, !0) : r.removeCellCss(e, t, kn, !0),
            n.callEvent("onAction", ["lock", {
                row: e,
                column: t,
                value: !o,
                newValue: o
            }]));
        i || r.refresh()
    }
    function Vn(e, t, n) {
        return !!e._locks[t] && e._locks[t][n]
    }
    var In = Object.freeze({
        lockCss: kn,
        init: function Rr(i) {
            i._locks = {},
                i.attachEvent("onReset", function() {
                    return function t(e) {
                        e._locks = {}
                    }(i)
                }),
                i.attachEvent("onUndo", function(e, t, n, o) {
                    "lock" === e && En(i, t, n, !!o, !0)
                }),
                i.attachEvent("onCommand", function(e) {
                    "lock-cell" === e.id && function o(e) {
                        var t = e.$$("cells").getSelectArea();
                        if (t) {
                            var n = e.isCellLocked(t.start.row, t.start.column);
                            e.lockCell(t.start, t.end, !n)
                        }
                    }(i)
                }),
                i.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function c(e, t, n, o) {
                        var i = n.locked
                            , r = i.length;
                        if (t)
                            for (; r--; ) {
                                var a = S(i[r], 2)
                                    , l = a[0]
                                    , s = a[1];
                                (l && "row" == e && l >= o.row || s && "column" == e && s >= o.column) && ("row" == e ? l < o.row - t ? i.splice(r, 1) : i[r][0] = 1 * l + t : "column" == e && (s < o.column - t ? i.splice(r, 1) : i[r][1] = 1 * s + t))
                            }
                    }(t.name, t.inc, t.data, t.start)
                })
        },
        lockCell: En,
        isCellLocked: Vn,
        serialize: function Ar(e, t) {
            var n, o, i = [];
            for (n in e._locks)
                for (o in e._locks[n])
                    e._locks[n][o] && i.push([n, o]);
            t.locked = i
        },
        load: function Or(e, t) {
            var n, o = t.locked;
            if (o)
                for (n = 0; n < o.length; n++)
                    En(e, o[n][0], o[n][1], !0, !0)
        }
    })
        , zn = !1;
    function Rn(e) {
        Nn(e, -1)
    }
    function An(e) {
        Nn(e, 1)
    }
    function On(e) {
        zn || (e._ssUndoHistory = [],
            e._ssUndoCursor = -1)
    }
    function Un(e, t) {
        e.$skipHistory || (e._ssUndoHistory.splice(e._ssUndoCursor + 1),
            e._ssUndoHistory.push(t),
            e._ssUndoCursor++)
    }
    function Fn(e, t) {
        t.$skipHistory++;
        try {
            e.call(t)
        } finally {
            t.$skipHistory--
        }
    }
    function Mn(e) {
        zn = !0,
            e(),
            zn = !1
    }
    function Nn(e, t) {
        var n = e._ssUndoHistory[0 < t ? e._ssUndoCursor + t : e._ssUndoCursor];
        if (n) {
            var o = 0 < t ? n.newValue : n.value
                , i = 0 < t
                , r = [n.action, n.row, n.column, o, i];
            e._ssUndoCursor += t;
            var a = n.group
                , l = e._ssUndoHistory[0 < t ? e._ssUndoCursor + t : e._ssUndoCursor];
            Fn(function() {
                e.callEvent("onUndo", r),
                a && l && a == l.group || e.refresh()
            }, e),
            l && a && a == l.group && Nn(e, t)
        }
    }
    var jn = Object.freeze({
        init: function Ur(i) {
            On(i),
                function e(i) {
                    i.attachEvent("onUndo", function(e, t, n, o) {
                        switch (e) {
                            case "freeze-row":
                                i.freezeRows(o);
                                break;
                            case "freeze-column":
                                i.freezeColumns(o)
                        }
                    })
                }(i),
                i.attachEvent("onHardReset", function() {
                    return On(i)
                }),
                i.attachEvent("onAfterSheetShow", function() {
                    return On(i)
                }),
                i.attachEvent("onBeforeStyleChange", function(e, t, n, o) {
                    if (Vn(i, e, t))
                        return !1;
                    Un(i, {
                        action: "style",
                        row: e,
                        column: t,
                        value: o,
                        newValue: n,
                        group: u.value
                    })
                }),
                i.attachEvent("onBeforeValueChange", function(e, t, n, o) {
                    if (Vn(i, e, t))
                        return !1;
                    Un(i, {
                        action: "value",
                        row: e,
                        column: t,
                        value: o,
                        newValue: n,
                        group: u.value
                    })
                }),
                i.attachEvent("onBeforeSpan", function(e, t, n) {
                    if (Vn(i, e, t))
                        return !1;
                    Un(i, {
                        action: "span",
                        row: e,
                        column: t,
                        value: n,
                        newValue: n,
                        group: u.value
                    })
                }),
                i.attachEvent("onBeforeSplit", function(e, t, n) {
                    if (Vn(i, e, t))
                        return !1;
                    Un(i, {
                        action: "split",
                        row: e,
                        column: t,
                        value: n,
                        newValue: n,
                        group: u.value
                    })
                }),
                i.attachEvent("onAction", function(e, t) {
                    return Un(i, {
                        action: e,
                        row: t.row || null,
                        column: t.column || null,
                        value: t.value || null,
                        newValue: t.newValue || null,
                        group: u.value
                    })
                }),
                i.$$("cells").attachEvent("onColumnResize", function(e, t, n) {
                    return Un(i, {
                        action: "c-resize",
                        row: 0,
                        column: e,
                        value: n,
                        newValue: t
                    })
                }),
                i.attachEvent("onColumnOperation", function(e, t, n) {
                    "add" !== e.id && "del" !== e.id && Un(i, {
                        action: e,
                        row: 0,
                        column: {
                            start: t,
                            end: n
                        }
                    })
                }),
                i.attachEvent("onRowOperation", function(e, t, n) {
                    "add" !== e.id && "del" !== e.id && Un(i, {
                        action: e,
                        row: {
                            start: t,
                            end: n
                        },
                        column: 0
                    })
                }),
                i.$$("cells").attachEvent("onRowResize", function(e, t, n) {
                    return Un(i, {
                        action: "r-resize",
                        row: e,
                        column: 0,
                        value: n,
                        newValue: t
                    })
                }),
                i.attachEvent("onBeforeConditionSet", function(e, t, n, o) {
                    if (Vn(i, e, t))
                        return !1;
                    n = n ? webix.copy(n) : null,
                        Un(i, {
                            action: "condition",
                            row: e,
                            column: t,
                            value: n,
                            newValue: o,
                            group: u.value
                        })
                }),
                i.$skipHistory = 0
        },
        undo: Rn,
        redo: An,
        reset: On,
        ignoreUndo: Fn,
        ignoreReset: Mn
    });
    function Tn(e, t, n) {
        var o = e.$$("cells").getSpan()[t];
        if (o)
            return o[n]
    }
    function Bn(e, t, n, o, i) {
        if (!(n < 2 && o < 2) && (i || e.callEvent("onBeforeSpan", [t.row, t.column, [n, o]]))) {
            var r = e.getRow(t.row)
                , a = r.$cellCss && r.$cellCss[t.column] || "";
            !function u(e, t, n, o) {
                var i, r, a, l = 1 * t.row, s = 1 * t.column, c = !e.getCellValue(l, s);
                for (i = l; i < l + o; i++)
                    for (r = s; r < s + n; r++)
                        "" === (a = e.getCellValue(i, r)) || r == s && i == l || (c && (c = !1,
                            e.setCellValue(l, s, a)),
                            e.setCellValue(i, r, ""))
            }(e, t, n, o),
                e.$$("cells").addSpan(t.row, t.column, n, o, null, a),
            i || (e.callEvent("onAfterSpan", [t.row, t.column, [n, o]]),
                d(e, "spans", {
                    row: t.row,
                    column: t.column,
                    x: n,
                    y: o
                }))
        }
    }
    function Hn(e, t) {
        var n = e.$$("cells").getSpan(t.row, t.column);
        n && e.callEvent("onBeforeSplit", [t.row, t.column, [n[2], n[3]]]) && (e.$$("cells").removeSpan(t.row, t.column),
            e.callEvent("onAfterSplit", [t.row, t.column, [n[2], n[3]]]),
            d(e, "spans", {
                row: t.row,
                column: t.column,
                x: 0,
                y: 0
            }))
    }
    function Dn(e) {
        var t, n, o, i;
        o = i = 0,
            t = n = Infinity;
        for (var r = 0; r < e.length; r++) {
            var a = 1 * e[r].column
                , l = 1 * e[r].row;
            t = Math.min(a, t),
                o = Math.max(a, o),
                n = Math.min(l, n),
                i = Math.max(l, i)
        }
        return {
            cell: {
                row: n,
                column: t
            },
            x: o - t + 1,
            y: i - n + 1
        }
    }
    var Pn = {
        "border-right": function(e, t, n, o) {
            return o.end.column == t + n[0] - 1
        },
        "border-bottom": function(e, t, n, o) {
            return o.end.row == e + n[1] - 1
        }
    };
    function Ln(t, e, n, o, i) {
        var r = "row" == e.group ? t[3] : t[2]
            , a = "row" == e.group ? [1 * t[0], 1 * t[0] + t[3] - 1] : [1 * t[1], 1 * t[1] + t[2] - 1]
            , l = "row" == e.group ? [n.row, o.row] : [n.column, o.column]
            , s = l[1] - l[0] + 1;
        l[0] = Math.max(l[0], a[0]),
            l[1] = Math.min(l[1], a[1]);
        var c = l[0] == a[0];
        if (l[0] <= l[1]) {
            if ("del" == e.id && (s = -1 * (l[1] - l[0] + 1)),
            "del" == e.id && c && -1 * s < r) {
                var u = at(i, function(e) {
                    return e[0] == t[0] && e[1] == t[1]
                });
                u[0] = "row" == e.group ? u[0] - s : u[0],
                    u[1] = "column" == e.group ? u[1] - s : u[1];
                var h = lt(i, function(e) {
                    return e[0] == u[0] && e[1] == u[1] && (e[2] != u[2] || e[3] != u[3])
                });
                -1 < h && i.splice(h, 1)
            }
            c && "add" == e.id || (t[2] = "column" == e.group ? t[2] + s : t[2],
                t[3] = "row" == e.group ? t[3] + s : t[3])
        }
        return t
    }
    function Kn(o, e, t, n, i, r) {
        var a = o._table.getSpan(t, n);
        if (e && e.span) {
            var l = e.span;
            t == 1 * l[0] + r.row && n == 1 * l[1] + r.column && (o._table.mapCells(t, n, l[3], l[2], function(e, t, n) {
                (a = o._table.getSpan(t, n)) && Hn(o, {
                    row: a[0],
                    column: a[1]
                })
            }, !0),
                Bn(o, {
                    row: t,
                    column: n
                }, l[2], l[3]),
            1 === i && Hn(o, {
                row: e.row,
                column: e.col
            }))
        } else
            a && Hn(o, {
                row: a[0],
                column: a[1]
            })
    }
    var Wn = Object.freeze({
        init: function Fr(l) {
            l.attachEvent("onStyleChange", function(e, t, n) {
                var o = Tn(l, e, t);
                o && (o[3] = n ? n.id : "")
            }),
                l.attachEvent("onDataParse", function(e) {
                    if (e.spans)
                        for (var t = 0; t < e.spans.length; t++) {
                            var n = e.spans[t];
                            Bn(l, {
                                row: n[0],
                                column: n[1]
                            }, 1 * n[2], 1 * n[3], !0)
                        }
                }),
                l.attachEvent("onDataSerialize", function(e) {
                    var t = []
                        , n = l.$$("cells").getSpan();
                    if (n) {
                        for (var o in n) {
                            var i = n[o];
                            for (var r in i) {
                                var a = i[r];
                                t.push([1 * o, 1 * r, a[0], a[1]])
                            }
                        }
                        e.spans = t
                    }
                }),
                l.attachEvent("onUndo", function(e, t, n, o, i) {
                    "span" != e && "split" != e || ("span" == e && (i = !i),
                        function r(e, t, n, o, i) {
                            i ? Hn(e, {
                                row: t,
                                column: n
                            }) : Bn(e, {
                                row: t,
                                column: n
                            }, o[0], o[1])
                        }(l, t, n, o, i))
                }),
                l.attachEvent("onAction", function(e, t) {
                    if ("lock" == e)
                        !function r(e, t, n, o) {
                            var i = Tn(e, t, n);
                            i && (o ? -1 == i[3].indexOf(kn) && (i[3] += " " + kn) : i[3] = i[3].replace(" " + kn, ""),
                                e._table.refresh())
                        }(l, t.row, t.column, t.newValue);
                    else if ("before-grid-change" == e)
                        !function c(e, t, n, o) {
                            var i = n.spans;
                            if (t)
                                for (var r = i.length - 1; 0 <= r; r--) {
                                    var a = S(i[r], 2)
                                        , l = a[0]
                                        , s = a[1];
                                    t < 0 && ("row" == e && l <= o.row - t - 1 ? t = o.row - i[r][0] : "column" == e && s <= o.column - t - 1 && (t = o.column - i[r][1])),
                                    ("row" == e && l >= o.row || "column" == e && s >= o.column) && (i[r][0] = "row" == e ? 1 * l + t : l,
                                        i[r][1] = "column" == e ? 1 * s + t : s)
                                }
                        }(t.name, t.inc, t.data, t.start);
                    else if ("check-borders" == e)
                        return function a(e, t, n, o, i) {
                            var r = Tn(e, t, n);
                            return !(!r || !Pn[i]) && Pn[i](t, n, r, o)
                        }(l, t.row, t.column, t.area, t.mode)
                })
        },
        addSpan: Bn,
        removeSpan: Hn,
        getRange: Dn,
        adjustSpan: Ln,
        pasteSpan: Kn
    });
    function Gn(e, t, n, o, i, r) {
        var a, l, s, c, u, h = 0, d = 0, f = o._table.getSelectArea(), m = o._table.getScrollState();
        s = o.serialize({
            math: !0
        }),
            c = webix.copy(s);
        var v = s.spans;
        for (var g in v) {
            var w = v[g];
            ((w = Ln(w, e, t, n, s.data))[2] <= 0 || w[3] <= 0) && v.splice(g, 1)
        }
        u = function x(e, t, n) {
            var o = e.group
                , i = "add" == e.id ? 1 : "del" == e.id ? -1 : 0;
            i && ("row" == o && (i += i * (n.row - t.row)),
            "column" == o && (i += i * (n.column - t.column)));
            return {
                name: o,
                inc: i
            }
        }(e, t, n),
            o.$handleSelection = null,
        i || Fn(function() {
            o.callEvent("onAction", ["before-grid-change", {
                name: u.name,
                inc: u.inc,
                data: s,
                start: t
            }])
        }, o),
            a = s.data,
            "column" == e.group ? (h = n.column - t.column + 1,
                d = t.column,
                "add" == e.id ? function _(e, t, n, o, i, r, a) {
                    var l = a.length
                        , s = n.column - t.column + 1;
                    o.config.columnCount += s,
                        o.reset();
                    for (; l--; )
                        a[l][1] >= t.column && (a[l][1] += s);
                    i ? a.push.apply(a, k(r)) : o.callEvent("onColumnOperation", [e, t, n, null])
                }(e, t, n, o, i, r, a) : "del" == e.id && (!function y(e, t, n, o, i, r, a) {
                    var l = a.length
                        , s = n.column - t.column + 1;
                    if (o.config.columnCount === s) {
                        if (t.column == n.column)
                            return;
                        n.column--,
                            s--
                    }
                    o.config.columnCount -= s,
                        o.reset();
                    var c = [];
                    for (; l--; )
                        a[l][1] >= t.column && a[l][1] <= n.column ? c.push(a.splice(l, 1)[0]) : a[l][1] > n.column && (a[l][1] -= s);
                    i || o.callEvent("onColumnOperation", [e, t, n, c])
                }(e, t, n, o, i, 0, a),
                    h = -h)) : "row" == e.group && (h = n.row - t.row + 1,
                d = t.row,
                "add" == e.id ? function $(e, t, n, o, i, r, a) {
                    var l = a.length
                        , s = n.row - t.row + 1;
                    o.config.rowCount += s,
                        o.reset();
                    for (; l--; )
                        a[l][0] >= t.row && (a[l][0] += s);
                    i ? a.push.apply(a, k(r)) : o.callEvent("onRowOperation", [e, t, n, null])
                }(e, t, n, o, i, r, a) : "del" == e.id && (!function C(e, t, n, o, i, r, a) {
                    var l = a.length
                        , s = n.row - t.row + 1;
                    if (o.config.rowCount === s) {
                        if (t.row == n.row)
                            return;
                        n.row--,
                            s--
                    }
                    o.config.rowCount -= s,
                        o.reset();
                    var c = [];
                    for (; l--; )
                        a[l][0] >= t.row && a[l][0] <= n.row ? c.push(a.splice(l, 1)[0]) : a[l][0] > n.row && (a[l][0] -= s);
                    i || o.callEvent("onRowOperation", [e, t, n, c])
                }(e, t, n, o, i, 0, a),
                    h = -h));
        var p = {
            id: e.group,
            start: d,
            count: h
        };
        for (l = a.length; l--; )
            a[l][2] && "string" == typeof a[l][2] && "=" == a[l][2].substr(0, 1) && (a[l][2] = Lt(a[l][2], p));
        if (o.callEvent("onAction", ["grid-change", {
            value: c,
            newValue: s
        }]),
            Fn(function() {
                Zn(o, s),
                    o._table.scrollTo(m.x, m.y)
            }, o),
            f) {
            var b = o.$$("cells");
            (f = function S(e, t) {
                var n = t.count()
                    , o = t.config.columns.length;
                return 1 * e.start.row > n ? null : 1 * e.end.row > n ? null : 1 * e.start.column > o ? null : 1 * e.end.column > o ? null : e
            }(f, b)) && b.addSelectArea(f.start, f.end)
        }
    }
    function Zn(e, t) {
        Mn(function() {
            e.$handleSelection = null,
                e.parse(t)
        })
    }
    var qn = Object.freeze({
        init: function Mr(i) {
            i.attachEvent("onCommand", function(e, t, n) {
                if ("add" == e.id || "del" == e.id) {
                    var o = i._table.getSelectArea();
                    !o || t && n || (t = o.start,
                        n = o.end),
                    t && n && u.set(function() {
                        Gn(e, t, n, i)
                    })
                }
            }),
                i.attachEvent("onUndo", function(e, t, n, o) {
                    "grid-change" == e && Zn(i, o)
                })
        },
        process: Gn
    });
    function Yn(e, t) {
        var n = Qn(e);
        return t = Xn(Dt(t, n, "").handler, n)
    }
    function Xn(e, t) {
        var n, o = webix.i18n.spreadsheet.table["math-error"];
        try {
            n = e.call(t)
        } catch (i) {
            return o
        }
        return "number" == typeof n ? isNaN(n) ? o : Math.round(1e5 * n) / 1e5 : "string" != typeof n ? n ? n.toString() : o : n
    }
    function Qn(r) {
        var e = Gt(r);
        return {
            rs: function(e, t, n, o, i) {
                return Gt(r, e).getRange(t, n, o, i)
            },
            r: e.getRange,
            vs: function(e, t, n) {
                return Gt(r, e).getValue(t, n)
            },
            v: e.getValue,
            m: nt,
            p: {}
        }
    }
    var Jn = Object.freeze({
        init: function Nr(l) {
            var s, c, h = [], a = [], d = Qn(l);
            function u(e, t, n) {
                var o = l.getRow(e)
                    , i = Xn(n, d);
                o[t] = i;
                var r = 1e8 * t + e
                    , a = c[r] = (c[r] || 0) + 1;
                s[r] === i || 1e3 < a || (s[r] = i,
                    m(e, t))
            }
            function m(e, t) {
                var n = h[e];
                if (n) {
                    var o = n[t];
                    if (o)
                        for (var i = 0; i < o.length; i++) {
                            var r = o[i]
                                , a = r.row
                                , l = r.column
                                , s = r.handler;
                            a == e && l == t || u(a, l, s)
                        }
                }
            }
            function f(e, t, n) {
                var o = a[e];
                if (o && o[t] && function u(e, t, n, o) {
                    var i = t[o][n];
                    t[o][n] = null;
                    for (var r = i.length - 1; 0 <= r; r--)
                        for (var a = i[r], l = e[a[0]][a[1]], s = l.length - 1; 0 <= s; s--) {
                            var c = l[s];
                            c.row == o && c.column == n && l.splice(s, 1)
                        }
                }(h, a, t, e), n && 0 === n.toString().indexOf("=") && !!this.config.formulaCalc ) {
                    var i = Dt(n, d, ""), r = l.getRow(e);
                    r[t] = Xn(i.handler, d), r["$" + t] = i.text, i.triggers.length && function f(e, t, n, o, i) {
                        for (var r = [], a = 0; a < n.length; a++) {
                            var l = n[a];
                            if ("" === l[4] || l[4] === i)
                                for (var s = l[0]; s <= l[2]; s++) {
                                    var c = e[s];
                                    c || (c = e[s] = []);
                                    for (var u = l[1]; u <= l[3]; u++) {
                                        var h = c[u];
                                        h || (h = c[u] = []),
                                            r.push([s, u]),
                                            h.push(o)
                                    }
                                }
                        }
                        !function d(e, t, n, o) {
                            var i = e[t];
                            i || (i = e[t] = []), i[n] = o
                        }(t, o.row, o.column, r)
                    }(h, a, i.triggers, {
                        row: e,
                        column: t,
                        handler: i.handler
                    }, l.getActiveSheet())
                }
                s = {}, c = {}, m(e, t)
            }

            l.ranges = d.ranges = new Qt(l),
                d.p = function e(o) {
                    var i = {};
                    return o.setPlaceholder = function(e, t) {
                        if ("object" === v(e))
                            for (var n in e)
                                i[n.toLowerCase()] = e[n];
                        else
                            i[e.toString().toLowerCase()] = t;
                        o.callEvent("onMathRefresh", [])
                    }
                        ,
                        i
                }(l),
                l.attachEvent("onReset", function() {
                    h = [],
                        a = [],
                        l.ranges.clear()
                }),
                l.attachEvent("onCellChange", f),
                l.attachEvent("onMathRefresh", function n() {
                    var e = l.$$("cells")
                        , t = e.getState()
                        , r = t.ids.concat(t.hidden);
                    e.eachRow(function(e) {
                        for (var t = this.getItem(e), n = 1; n < r.length; n++) {
                            var o = r[n]
                                , i = t["$" + o];
                            i && f(e, o, i)
                        }
                    }, !0),
                        e.refresh()
                }),
                l.attachEvent("onDataSerialize", function(e) {
                    return function n(e, t) {
                        t.ranges = e.ranges.serialize()
                    }(l, e)
                }),
                l.attachEvent("onDataParse", function(e) {
                    return function n(e, t) {
                        e.ranges.parse(t.ranges)
                    }(l, e)
                }),
                l.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function a(e, t, n, o) {
                        for (var i = n.ranges, r = 0; r < i.length; r++)
                            i[r][1] = I(i[r][1], e, t, o)
                    }(t.name, t.inc, t.data, t.start)
                }),
                Wt(l, d, {
                    parse: Dt,
                    execute: Xn
                })
        },
        calculate: Yn
    });
    function eo(e, t) {
        return isNaN(1 * t) ? "=" == t.charAt(0) && (t = Yn(e, t)) : t *= 1,
            t
    }
    function to(e, t, n, o) {
        return o._empty = !1,
        e[t] || (e[t] = {}),
        e[t][n] || (e[t][n] = []),
            e[t][n]
    }
    function no(e) {
        if (this._empty = !0,
            e)
            for (var t = e.length; t--; ) {
                var n = e[t];
                to(this._pull, n[0], n[1], this).push([n[2], n[3], n[4]])
            }
    }
    function oo() {
        this._pull = {}
    }
    function io(e, t, n) {
        this.get(e, t) || to(this._pull, e, t, this),
            this._pull[e][t] = n
    }
    function ro(e, t) {
        return e ? t ? this._pull[e] ? this._pull[e][t] : null : this._pull[e] : this._pull
    }
    function ao(e, t, n, o, i) {
        to(this._pull, e, t, this).push([n, o, i])
    }
    function lo(e, t) {
        this.get(e, t) && delete this._pull[e][t]
    }
    function so() {
        var e, t, n, o, i = [];
        for (o in this._pull)
            for (e in this._pull[o])
                for (n = 0; n < this._pull[o][e].length; n++)
                    t = this._pull[o][e][n],
                        i.push([o, e, t[0], t[1], t[2]]);
        return i
    }
    function co(e, t) {
        u.set(function() {
            C(t, e, function(e, t) {
                var n = e.conditions.get(t.row, t.column);
                n && ho("remove", t.row, t.column, n, null, e)
            }),
                e.refresh()
        })
    }
    function uo(e, t, n, o, i) {
        var r = t.condition;
        ho("update", n, o, e.conditions.get(n, o) || null, r, e),
        1 === i && ho("remove", t.row, t.col, r, null, e)
    }
    function ho(e, t, n, o, i, r) {
        r.callEvent("onBeforeConditionSet", [t, n, o, i]) && (r.conditions[e].apply(r.conditions, [t, n, i]),
            r.callEvent("onAfterConditionSet", [t, n, o, i]))
    }
    var fo = Object.freeze({
        init: function jr(r) {
            r.conditions = {
                _empty: !0,
                _pull: {},
                handlers: {
                    ">": function(e, t) {
                        return e > eo(r, t)
                    },
                    "<": function(e, t) {
                        return e < eo(r, t)
                    },
                    "=": function(e, t) {
                        return e == eo(r, t)
                    },
                    "!=": function(e, t) {
                        return e != eo(r, t)
                    },
                    "<>": function(e, t) {
                        var n = t[0]
                            , o = t[1];
                        return webix.isArray(t) && e < eo(r, o) && e > eo(r, n)
                    }
                },
                add: ao,
                remove: lo,
                update: io,
                get: ro,
                parse: no,
                serialize: so,
                clear: oo
            },
                r.attachEvent("onConditionSet", function(e) {
                    return function t(n, o) {
                        u.set(function() {
                            n.eachSelectedCell(function(e) {
                                var t = n.conditions.get(e.row, e.column);
                                ho("update", e.row, e.column, t || null, o, n)
                            })
                        }),
                            n.refresh()
                    }(r, e)
                }),
                r.attachEvent("onUndo", function(e, t, n, o) {
                    "condition" == e && function i(e, t, n, o) {
                        e.conditions.get(t, n) && e.conditions.remove(t, n),
                        o && e.conditions.update(t, n, o)
                    }(r, t, n, o)
                }),
                r.attachEvent("onDataSerialize", function(e) {
                    return function n(e, t) {
                        t.conditions = e.conditions.serialize()
                    }(r, e)
                }),
                r.attachEvent("onDataParse", function(e) {
                    return function n(e, t) {
                        e.conditions.parse(t.conditions)
                    }(r, e)
                }),
                r.attachEvent("onColumnInit", function(e) {
                    return function t(l, e) {
                        e.cssFormat = function(e, t, n, o) {
                            if (l.conditions._empty)
                                return "";
                            var i, r;
                            if (!(i = l.conditions.get(n, o)))
                                return "";
                            for (r = i.length; r--; ) {
                                var a = l.conditions.handlers[i[r][0]];
                                if (a && a(t[o], i[r][1]))
                                    return i[r][2]
                            }
                            return ""
                        }
                    }(r, e)
                }),
                r.attachEvent("onReset", function() {
                    return r.conditions.clear()
                }),
                r.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function c(e, t, n, o) {
                        var i = n.conditions
                            , r = i.length;
                        if (t)
                            for (; r--; ) {
                                var a = S(i[r], 2)
                                    , l = a[0]
                                    , s = a[1];
                                ("row" == e && l >= o.row || "column" == e && s >= o.column) && ("row" == e ? l < o.row - t ? i.splice(r, 1) : i[r][0] = 1 * l + t : "column" == e && (s < o.column - t ? i.splice(r, 1) : i[r][1] = 1 * s + t))
                            }
                    }(t.name, t.inc, t.data, t.start)
                }),
                function t(e) {
                    e.conditions.clear()
                }(r)
        },
        clearConditionalFormats: co,
        pasteCondition: uo,
        _changeCondition: ho
    });
    function mo(e) {
        e._table._ssEditors = {},
            e._table._ssFilters = {}
    }
    function vo(e, t) {
        var i = !1;
        e._table.editStop(),
            C(t, e, function(e, t) {
                var n = e._table._ssEditors[t.row]
                    , o = e._table._ssFilters[t.row];
                n && n[t.column] && (delete n[t.column],
                    e._table.removeCellCss(t.row, t.column, "ss_filter")),
                o && o[t.column] && (delete o[t.column],
                    i = !0)
            }),
        i && e.filterSpreadSheet()
    }
    function go(e, t, n) {
        var o = e._table._ssFilters;
        return o[t] && o[t][n]
    }
    function wo(e, t, n, o) {
        var i = e._table._ssFilters;
        (i[t] = i[t] || {})[n] = [t, n],
            e.callEvent("onAction", ["addFilter", {
                row: t,
                column: n
            }]),
        o || "" == e.getCellValue(t, n) || e.setCellValue(t, n, "")
    }
    function po(e, t, n, o, i, r, a) {
        var l = t.dropdown.editor;
        if (t.dropdown.filter) {
            if (a) {
                var s = I(l.options, "row", r.row, {
                    column: t.col,
                    row: t.row
                });
                s = I(s, "column", r.column, {
                    column: t.col,
                    row: t.row
                }),
                    e.setCellFilter(n, o, s),
                    e.callEvent("onAction", ["filter", {
                        row: n,
                        column: o,
                        value: null,
                        newValue: {
                            options: s
                        }
                    }])
            }
        } else
            e.setCellEditor(n, o, l),
            1 === i && e.setCellEditor(t.row, t.col, {})
    }
    function bo(e, t, n, o, i) {
        (o || (o = {
            end: {
                row: t
            }
        }),
            o.end) && (o = function r(e, t, n, o) {
            if (t === o)
                for (o = t; o < e.config.rowCount && e.getCellValue(o + 1, n); o++)
                    ;
            return y(t + 1, n, o, n)
        }(e, t, n, o.end.row));
        e.setCellEditor(t, n, {
            editor: "richselect",
            options: o,
            useAsFilter: !0
        }),
            wo(e, t, n, i)
    }
    var xo, _o, yo, $o, Co, So = Object.freeze({
        init: function Tr(o) {
            var e = o._table;
            o.attachEvent("onReset", function() {
                return mo(o)
            }),
                mo(o),
                e.attachEvent("onBeforeEditStart", function(e) {
                    var t = this.getColumnConfig(e.column);
                    if (this._ssEditors[e.row]) {
                        var n = this._ssEditors[e.row][e.column];
                        n && (webix.extend(t, n, !0),
                        n.options && ("string" == typeof n.options ? t.options = Xt(o, n.options, {
                            unique: !0,
                            empty: !0,
                            order: !0,
                            filter: n.useAsFilter
                        }) : webix.isArray(n.options) && (t.options = Xt(o, n.options, {
                            empty: !0,
                            filter: n.useAsFilter
                        }))))
                    }
                }),
                e.attachEvent("onAfterEditStop", function(e, t) {
                    var n = this.getColumnConfig(t.column);
                    if (n.editor = "text",
                        delete n.popup,
                        delete n.$popup,
                        go(o, t.row, t.column))
                        return o.filterSpreadSheet()
                }),
                e.on_click.ss_filter = function(e, t) {
                    this.edit(t)
                }
                ,
                o.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function u(e, t, n, o) {
                        var i, r = n.editors;
                        if (t)
                            for (i = r.length - 1; 0 <= i; i--) {
                                var a = S(r[i], 3)
                                    , l = a[0]
                                    , s = a[1]
                                    , c = a[2];
                                ("row" == e && l >= o.row || "column" == e && s >= o.column) && (c = r[i][2] = webix.copy(c),
                                    "row" == e ? l < o.row - t ? r.splice(i, 1) : r[i][0] = 1 * l + t : "column" == e && (s < o.column - t ? r.splice(i, 1) : r[i][1] = 1 * s + t)),
                                    c.options = I(c.options, e, t, o)
                            }
                    }(t.name, t.inc, t.data, t.start)
                })
        },
        serialize: function Br(e, t) {
            var n, o, i = e._table._ssEditors, r = [];
            for (n in i)
                for (o in i[n])
                    go(e, n, o) || r.push([n, o, i[n][o]]);
            t.editors = r
        },
        load: function Hr(e, t) {
            var n, o = t.editors;
            if (o)
                for (n = 0; n < o.length; n++)
                    e.setCellEditor.apply(e, o[n])
        },
        clearEditors: vo,
        isFilter: go,
        addCellFilter: wo,
        pasteDropdown: po,
        setFilter: bo
    });
    function ko(e, t, n, o, i, r) {
        var a = o
            , l = null;
        if ("object" === v(o)) {
            a = o.math ? Lt(o.math, r, yo) : o.text,
                l = o.style,
                e.setStyle(t, n, l);
            var s = o.extra;
            s && (s.condition && uo(e, s, t, n, $o),
            s.dropdown && po(e, s, t, n, $o, r, Co)),
                Kn(e, s, t, n, $o, r)
        }
        e.setCellValue(t, n, a)
    }
    var Eo = Object.freeze({
        init: function Dr(o, e) {
            var i = o.$$("cells");
            i.attachEvent("onKeyPress", function(e, t) {
                67 !== e && 88 !== e || !t.ctrlKey && !t.metaKey || !i.getSelectedId() || (xo = function n(s, c) {
                    var u, h, d = [];
                    return c.mapSelection(function(e, t, n) {
                        t != h && (u = [],
                            d.push(u),
                            h = t);
                        var o = {
                            text: e,
                            math: c.getItem(t)["$" + n],
                            style: s.getStyle(t, n)
                        }
                            , i = s.conditions.get(t, n)
                            , r = s.getCellEditor(t, n)
                            , a = s._table.getSpan(t, n);
                        if (r || i || a) {
                            var l = {
                                row: t,
                                col: n
                            };
                            i && (l.condition = i),
                            r && (l.dropdown = {
                                editor: r,
                                filter: !!go(s, t, n)
                            }),
                            a && (l.span = a),
                                o.extra = l
                        }
                        return u.push(o),
                            e
                    }),
                        d
                }(o, i),
                    _o = document.getElementsByClassName("webix_clipbuffer")[0].value,
                    yo = i.getSelectArea(),
                ($o = 1 * (88 === e)) && 0 !== Object.keys(o._table._ssFilters).length && (Co = function u(e, t, n) {
                    for (var o = Object.keys(e), i = Math.min.apply(null, o), r = Math.max.apply(null, o), a = n, l = 1, s = i; s <= r; s++)
                        if (e[s]) {
                            var c = Object.keys(e[s]);
                            a = Math.min(a, Math.min.apply(null, c)),
                                l = Math.max(l, Math.max.apply(null, c))
                        }
                    return t.start.row <= i && t.end.row >= r && t.start.column <= a && t.end.column >= l
                }(o._table._ssFilters, yo, o.config.columnCount)))
            }),
            e || i.attachEvent("onPaste", function(e) {
                !function a(l, n, e) {
                    var t = n.getSelectArea();
                    if (t) {
                        var o = t.start
                            , i = e === _o
                            , s = i ? xo : webix.csv.parse(e, n.config.delimiter);
                        !i && l.config.clipboardDecimalDelimiter && (s = function r(e, t) {
                            for (var n = 0; n < e.length; n++)
                                for (var o = 0; o < e[n].length; o++) {
                                    var i = e[n][o].toString().replace(t, ".");
                                    webix.rules.isNumber(i) && (e[n][o] = i)
                                }
                            return e
                        }(s, l.config.clipboardDecimalDelimiter));
                        var c = {
                            id: "move",
                            column: 0,
                            row: 0,
                            cut: $o
                        };
                        i ? (c.column = o.column - yo.start.column,
                            c.row = o.row - yo.start.row) : $o = 0,
                            u.set(function() {
                                if (Co && l.removeFilter(),
                                    function a(e, t, n) {
                                        var o = t.row + n.length - 1
                                            , i = t.column + n[0].length - 1;
                                        if (o > e.config.rowCount || i > e.config.columnCount) {
                                            var r = {
                                                id: "add"
                                            };
                                            o > e.config.rowCount && (r.group = "row",
                                                e.callEvent("onCommand", [r, {
                                                    row: e.config.rowCount + 1
                                                }, {
                                                    row: o
                                                }])),
                                            i > e.config.columnCount && (r.group = "column",
                                                e.callEvent("onCommand", [r, {
                                                    column: e.config.columnCount + 1
                                                }, {
                                                    column: i
                                                }]))
                                        }
                                    }(l, o, s),
                                1 === $o)
                                    for (var e = yo.start.row; e <= yo.end.row; e++)
                                        for (var t = yo.start.column; t <= yo.end.column; t++)
                                            l.setCellValue(e, t, null),
                                                l.setStyle(e, t, null);
                                1 != s.length || 1 != s[0].length || Co ? n.mapCells(o.row, o.column, s.length, null, function(e, t, n, o, i) {
                                    if (s[o] && s[o].length > i) {
                                        var r = s[o][i];
                                        ko(l, t, n, r, 0, c)
                                    }
                                }, !0) : l.eachSelectedCell(function(e) {
                                    var t = {
                                        id: "move",
                                        column: c.column + 1 * e.column - o.column,
                                        row: c.row + 1 * e.row - o.row,
                                        cut: $o
                                    };
                                    ko(l, e.row, e.column, s[0][0], 0, t)
                                }),
                                1 === $o && (Co = !($o = 2))
                            }),
                            l.refresh()
                    }
                }(o, i, e)
            })
        }
    });
    var Vo = Object.freeze({
        init: function Pr(a) {
            a.attachEvent("onDataParse", function(e) {
                return function h(e, t) {
                    var n = e.$$("cells")
                        , o = t.table || {
                        frozenColumns: 0,
                        frozenRows: 0
                    };
                    o && (webix.isUndefined(o.frozenColumns) || o.frozenColumns + 1 == n.config.leftSplit || e.freezeColumns(o.frozenColumns),
                    webix.isUndefined(o.frozenRows) || o.frozenRows == n.config.topSplit || e.freezeRows(o.frozenRows)),
                    t.sizes && n.define("fixedRowHeight", !1);
                    for (var i = 0; i < t.data.length; i++) {
                        var r = S(t.data[i], 4)
                            , a = r[0]
                            , l = r[1]
                            , s = r[2]
                            , c = r[3]
                            , u = n.getItem(a);
                        u[l] = s,
                        c && (u.$cellCss = u.$cellCss || {},
                            u.$cellCss[l] = c),
                            e.callEvent("onCellChange", [a, l, s])
                    }
                }(a, e)
            }),
                a.attachEvent("onDataSerialize", function(e, t) {
                    return function r(e, t, n) {
                        var l = !n || !1 !== n.math
                            , s = []
                            , o = e.$$("cells")
                            , i = o.getState()
                            , c = i.ids.concat(i.hidden);
                        c.splice(c.indexOf("rowId"), 1),
                            o.eachRow(function(e) {
                                for (var t = this.getItem(e), n = 0; n < c.length; n++) {
                                    var o = c[n]
                                        , i = t[o]
                                        , r = t.$cellCss && t.$cellCss[o] || "";
                                    l && (i = t["$" + o] || i);
                                    var a = i || 0 === i;
                                    (a || r) && s.push([1 * e, 1 * o, a ? i : "", r])
                                }
                            }, !0),
                            t.table = {
                                frozenColumns: o.config.leftSplit - (-1 != i.hidden.indexOf("rowId") ? 0 : 1),
                                frozenRows: o.config.topSplit
                            },
                            t.data = s
                    }(a, e, t)
                }),
                a.attachEvent("onUndo", function(e, t, n, o) {
                    "value" == e && function i(e, t, n, o) {
                        e.setCellValue(t, n, o)
                    }(a, t, n, o)
                })
        }
    });
    function Io(e, t) {
        t ? e["_hidden_" + t + "_hash"] = {} : (e._hidden_cols_hash = {},
            e._hidden_rows_hash = {})
    }
    function zo(e) {
        return webix.isArray(e) ? e : [e, e]
    }
    function Ro(e, t, n) {
        if (t) {
            var o = zo(t);
            if (e._hidden_cols_hash[o[0]] || !webix.isUndefined(n) && !n) {
                if (e._hidden_cols_hash[o[0]] && (webix.isUndefined(n) || !n)) {
                    var i = 1 < o[0] ? 1 : -1;
                    Mo({
                        id: "show",
                        group: "column"
                    }, {
                        column: o[0] + i
                    }, {
                        column: o[1] + i
                    }, e)
                }
            } else
                jo({
                    id: "hide",
                    group: "column"
                }, {
                    column: o[0]
                }, {
                    column: o[1]
                }, e)
        } else {
            var r = e.getSelectedId(!0)
                , a = {
                id: !1 === n ? "show" : "hide",
                group: "column"
            };
            r.length && e.callEvent("onCommand", [a, r[0], r[r.length - 1]])
        }
    }
    function Ao(e, t) {
        return !e._hidden_cols_hash[t]
    }
    function Oo(e, t, n) {
        if (t) {
            var o = zo(t);
            if (e._hidden_rows_hash[o[0]] || !webix.isUndefined(n) && !n) {
                if (e._hidden_rows_hash[o[0]] && (webix.isUndefined(n) || !n)) {
                    var i = 1 < o[0] ? 1 : -1;
                    No({
                        id: "show",
                        group: "row"
                    }, {
                        row: o[0] + i
                    }, {
                        row: o[1] + i
                    }, e)
                }
            } else
                To({
                    id: "hide",
                    group: "row"
                }, {
                    row: o[0]
                }, {
                    row: o[1]
                }, e)
        } else {
            var r = e.getSelectedId(!0)
                , a = {
                id: !1 === n ? "show" : "hide",
                group: "row"
            };
            r.length && e.callEvent("onCommand", [a, r[0], r[r.length - 1]])
        }
    }
    function Uo(e, t) {
        return !e._hidden_rows_hash[t]
    }
    function Fo(e) {
        "column" == e.group ? "show" == e.id ? Mo.apply(this, arguments) : "hide" == e.id && jo.apply(this, arguments) : "row" == e.group && ("show" == e.id ? No.apply(this, arguments) : "hide" == e.id && To.apply(this, arguments))
    }
    function Mo(e, t, n, o, i) {
        for (var r = n.column; r >= t.column; ) {
            var a = r;
            if (i || (a = o._hidden_cols_hash[1 * r - 1] || o._hidden_cols_hash[1 * r + 1] || !1),
            !1 !== a) {
                delete o._hidden_cols_hash[a];
                var l = o.$$("cells").getColumnConfig(a - 1 || "rowId").header[0];
                l.css = l.css.replace("webix_ssheet_hide_column", ""),
                    o.$$("cells").showColumn(a),
                    t.column = t.column < a ? t.column : a,
                    n.column = n.column > a ? n.column : a,
                i || o.callEvent("onColumnOperation", [e, {
                    column: a
                }, {
                    column: a
                }, null])
            }
            r--
        }
    }
    function No(e, t, n, o, i) {
        for (var r = n.row; r >= t.row; ) {
            var a = r;
            if (i || (a = o._hidden_rows_hash[1 * r - 1] || o._hidden_rows_hash[1 * r + 1] || !1),
            !1 !== a) {
                if (delete o._hidden_rows_hash[a],
                a - 1 == 0) {
                    var l = o.$$("cells").getColumnConfig("rowId").header[0];
                    l.css = l.css.replace("webix_ssheet_hide_row", ""),
                        o.$$("cells").refreshColumns()
                } else
                    o.$$("cells").removeCellCss(a - 1, "rowId", "webix_ssheet_hide_row");
                i || o.callEvent("onRowOperation", [e, {
                    row: a
                }, {
                    row: a
                }, null])
            }
            r--
        }
        o.$$("cells").filter(function(e) {
            return !o._hidden_rows_hash[e.id]
        })
    }
    function jo(e, t, n, o, i) {
        var r = n.column;
        if (o.$handleSelection = null,
            o.$$("cells").unselect(),
        n.column < 1 || t.column < 1)
            delete o._hidden_cols_hash[t.column];
        else {
            for (; r >= t.column; ) {
                o._hidden_cols_hash[r] = r;
                var a = o.$$("cells").getColumnConfig(r - 1 || "rowId").header[0];
                a.css = (a.css || "") + " webix_ssheet_hide_column",
                    o.$$("cells").hideColumn(r),
                    r--
            }
            i || o.callEvent("onColumnOperation", [e, t, n, null])
        }
    }
    function To(e, t, n, o, i) {
        var r = n.row;
        if (n.row < 1 || t.row < 1)
            delete o._hidden_rows_hash[t.row];
        else {
            for (; r >= t.row; ) {
                if ((o._hidden_rows_hash[r] = r) - 1 == 0) {
                    var a = o.$$("cells").getColumnConfig("rowId").header[0];
                    a.css = (a.css || "") + " webix_ssheet_hide_row",
                        o.$$("cells").refreshColumns()
                } else
                    o.$$("cells").addCellCss(r - 1, "rowId", "webix_ssheet_hide_row");
                r--
            }
            o.$$("cells").filter(function(e) {
                return !o._hidden_rows_hash[e.id]
            }),
            i || o.callEvent("onRowOperation", [e, t, n, null])
        }
    }
    var Bo = Object.freeze({
        init: function Lr(l) {
            l.attachEvent("onCommand", function(e) {
                if ("show" == e.id || "hide" == e.id) {
                    var t = l._table.getSelectArea();
                    t && Fo(e, t.start, t.end, l)
                }
            }),
                Io(l),
                l.attachEvent("onUndo", function(e, t, n, o, i) {
                    if (!("hide" != e.id && "show" != e.id || "column" != e.group && "row" != e.group)) {
                        var r = e.id;
                        i || (r = "hide" == r ? "show" : "hide");
                        var a = t || n;
                        Fo({
                            id: r,
                            group: e.group
                        }, a.start, a.end, l, !0)
                    }
                }),
                l.attachEvent("onHardReset", function() {
                    return Io(l)
                }),
                l.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function u(e, t, n, o, i) {
                        if (o.table && o.table.hidden && o.table.hidden[t] && o.table.hidden[t].length) {
                            "column" === t && Io(e, "cols"),
                            "row" === t && Io(e, "rows");
                            var r = i[t]
                                , a = r + n;
                            if (a < r) {
                                var l = [a, r];
                                r = l[0],
                                    a = l[1]
                            }
                            for (var s = r; s < a; s++)
                                for (var c = 0; c < o.table.hidden[t].length; c++)
                                    o.table.hidden[t][c] >= s && (o.table.hidden[t][c] = 1 * o.table.hidden[t][c] + (0 < n ? 1 : -1))
                        }
                    }(l, t.name, t.inc, t.data, t.start)
                })
        },
        reset: Io,
        setColumnState: Ro,
        isColumnVisible: Ao,
        setRowState: Oo,
        isRowVisible: Uo,
        serialize: function Kr(e, t) {
            var n = []
                , o = [];
            for (var i in e._hidden_rows_hash)
                n.push(i);
            for (var r in e._hidden_cols_hash)
                o.push(r);
            (n.length || o.length) && (t.table.hidden = {}),
            n.length && (t.table.hidden.row = n),
            o.length && (t.table.hidden.column = o)
        },
        load: function Wr(e, t) {
            if (Io(e),
            !webix.isUndefined(t.table) && !webix.isUndefined(t.table.hidden)) {
                var n = t.table.hidden;
                if (n.row && n.row.length)
                    for (var o = 0; o < n.row.length; o++)
                        To({
                            id: "hide",
                            group: "row"
                        }, {
                            row: n.row[o]
                        }, {
                            row: n.row[o]
                        }, e, !0);
                if (n.column && n.column.length)
                    for (var i = 0; i < n.column.length; i++)
                        jo({
                            id: "hide",
                            group: "column"
                        }, {
                            column: n.column[i]
                        }, {
                            column: n.column[i]
                        }, e, !0)
            }
        }
    });
    function Ho(i, e) {
        var r = this
            , t = j(r, {
            row: i,
            column: e
        });
        if (t && t.props.wrap) {
            var n = r._table.getItem(i)
                , a = n.$height || r._table.config.rowHeight;
            r._table.eachColumn(function(e, t) {
                var n = j(r, {
                    row: i,
                    column: e
                });
                if (n && n.props && "wrap" === n.props.wrap) {
                    var o = this.getText(i, e);
                    a = Math.max(a, K(r, o, n.id, t.width).height)
                }
            }),
                n.$height = a
        }
    }
    var Do = Object.freeze({
        init: function Gr(h) {
            if (h.config.resizeCell) {
                var e = h.$$("cells");
                e.define("resizeRow", {
                    headerOnly: !0,
                    size: 10
                }),
                    e.define("resizeColumn", {
                        headerOnly: !0,
                        size: 10
                    }),
                    e.define("fixedRowHeight", !1),
                    e.attachEvent("onRowResize", function(e) {
                        h.$$("cells").refreshSelectArea(),
                            d(h, "sizes", {
                                row: e,
                                column: 0,
                                size: h.getRow(e).$height
                            })
                    }),
                    e.attachEvent("onColumnResize", function(e) {
                        h.$$("cells").refreshSelectArea(),
                            d(h, "sizes", {
                                row: 0,
                                column: e,
                                size: h.getColumn(e).width
                            })
                    }),
                    h.attachEvent("onUndo", function(e, t, n, o) {
                        "c-resize" != e && "r-resize" != e || function i(e, t, n, o) {
                            t ? (e.$$("cells").getItem(t).$height = o,
                                d(e, "sizes", {
                                    row: t,
                                    column: 0,
                                    size: o
                                })) : e._table.setColumnWidth(n, o),
                                e._table.refreshSelectArea()
                        }(h, t, n, o)
                    })
            }
            h.attachEvent("onDataParse", function(e) {
                if (e.sizes) {
                    for (var t = 0; t < e.sizes.length; t++) {
                        var n = e.sizes[t];
                        if (1 * n[0] != 0) {
                            var o = h.getRow(n[0]);
                            o && (o.$height = 1 * n[2])
                        } else {
                            var i = h.getColumn(n[1]);
                            i && (i.width = 1 * n[2])
                        }
                    }
                    e.sizes.length && h.refresh(!0)
                }
            }),
                h.attachEvent("onDataSerialize", function(e) {
                    for (var t = [], n = h.$$("cells"), o = n.getState().order, i = n.data.order, r = n.config.columnWidth, a = n.config.rowHeight, l = 1; l < o.length; l++) {
                        var s = n.getColumnConfig(o[l]).width;
                        s && s != r && t.push([0, l, s])
                    }
                    for (var c = 0; c < i.length; c++) {
                        var u = n.getItem(i[c]).$height;
                        u && u != a && t.push([1 * i[c], 0, u])
                    }
                    e.sizes = t
                }),
                h.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function h(e, t, n, o) {
                        var i, r = n.sizes, a = [];
                        if (t) {
                            for (i = r.length - 1; 0 <= i; i--) {
                                var l = S(r[i], 3)
                                    , s = l[0]
                                    , c = l[1]
                                    , u = l[2];
                                s && "row" == e && s >= o.row || c && "column" == e && c >= o.column ? (s = "row" == e ? 1 * s + t : s,
                                    c = "column" == e ? 1 * c + t : c,
                                ("row" == e && 0 < s || "column" == e && 0 < c) && a.push([s, c, u])) : a.push(r[i])
                            }
                            n.sizes = a
                        }
                    }(t.name, t.inc, t.data, t.start)
                }),
                h.attachEvent("onBeforeStyleChange", function(e, t, n, o) {
                    !o || "wrap" !== o.props.wrap || n && n.props.wrap == o.props.wrap || delete h._table.getItem(e).$height
                }),
                h.attachEvent("onStyleChange", Ho),
                h.attachEvent("onCellChange", Ho)
        }
    });
    var Po = Object.freeze({
        init: function Zr(r) {
            var a = r._table
                , e = 0;
            a.attachEvent("onAreaDrag", function() {
                return e = new Date
            }),
                a.attachEvent("onBeforeAreaRemove", function() {
                    if (r.$handleSelection && new Date - e < 500)
                        return !1
                }),
                a.attachEvent("onBeforeAreaAdd", function(e) {
                    if ("rowId" == e.start.column)
                        return !1;
                    var t = a.getEditor();
                    if (!t || t.row == e.start.row && t.column == e.start.column && t.row == e.start.row && t.column == e.start.column || a.editStop(),
                        !r.$handleSelection)
                        return !0;
                    var n = m[e.start.column] + e.start.row
                        , o = m[e.end.column] + e.end.row
                        , i = r.$handleSelection(e.start, e.end, n, o);
                    return !1 !== i && (r.$handleSelection = null,
                        a.removeSelectArea()),
                        i
                }),
                webix.event(a.$view, "mousedown", function(e) {
                    if (r.$handleSelection)
                        return webix.html.preventEvent(e)
                })
        }
    });
    function Lo(e, t, n) {
        var o = n.getItem(e)[t];
        return o !== undefined && "" !== o
    }
    var Ko = {
        "int": function(i, r) {
            return function(e, t) {
                var n = parseFloat(e[r]) || -Infinity
                    , o = parseFloat(t[r]) || -Infinity;
                return (o < n ? 1 : n == o ? 0 : -1) * i
            }
        },
        str: function(i, r) {
            return function(e, t) {
                var n = (e[r] || "").toString().toLowerCase()
                    , o = (t[r] || "").toString().toLowerCase();
                return (o < n ? 1 : n == o ? 0 : -1) * i
            }
        }
    };
    function Wo(e, t, n, o) {
        if (t = t || e._table.getSelectArea()) {
            var i = t = $(t, e);
            t.start.row === t.end.row && (i = function m(e, t) {
                for (var n = t.config.rowCount, o = t.config.columnCount, i = t._table, r = e.start.row, a = e.end.row, l = e.start.column, s = e.end.column, c = r - 1; 0 < c && Lo(c, e.start.column, i); c--)
                    r = c;
                for (var u = a + 1; u < n && Lo(u, e.end.column, i); u++)
                    a = u;
                for (var h = l - 1; 0 < h && Lo(e.start.row, h, i); h--)
                    l = h;
                for (var d = s + 1; d < o && Lo(e.end.row, d, i); d++)
                    s = d;
                var f = {
                    start: {
                        row: r,
                        column: l
                    },
                    end: {
                        row: a,
                        column: s
                    }
                };
                return r == e.start.row && a == e.end.row && l == e.start.column && s == e.end.column || t._table.addSelectArea(f.start, f.end),
                    f
            }(t, e));
            var r = e.getRow(t.start.row)[t.start.column];
            o = o || (isNaN(parseFloat(r)) ? "str" : "int"),
                n = n && "asc" !== n ? -1 : 1,
                u.set(function() {
                    return function w(e, t, n, o, i) {
                        for (var r = e.start.column; r <= e.end.column; r++) {
                            for (var a = [], l = e.start.row; l <= e.end.row; l++)
                                if (i.isRowVisible(l)) {
                                    var s = i.getRow(l)
                                        , c = s[r]
                                        , u = i.getStyle(l, r)
                                        , h = s["$" + r]
                                        , d = i.conditions.get(l, r);
                                    d && ho("remove", l, r, d, null, i),
                                        a.push({
                                            value: c,
                                            style: u,
                                            math: h,
                                            row: l,
                                            conditions: d
                                        })
                                }
                            a.sort(Ko[n](o, "value"));
                            for (var f = e.start.row; f <= e.end.row; f++)
                                if (i.isRowVisible(f)) {
                                    var m = a.shift();
                                    if (i.setStyle(f, r, m.style || null),
                                    m.conditions && ho("update", f, r, null, m.conditions, i),
                                        m.math) {
                                        var v = {
                                            id: "move",
                                            row: f - m.row,
                                            column: 0
                                        }
                                            , g = Lt(m.math, v);
                                        i.setCellValue(f, r, g)
                                    } else
                                        i.setCellValue(f, r, m.value)
                                }
                        }
                        i.refresh()
                    }(i, t.start.column, o, n, e)
                })
        }
    }
    var Go = Object.freeze({
        init: function qr(t) {
            t.attachEvent("onCommand", function(e) {
                "sort-asc" !== e.id && "sort-desc" !== e.id || Wo(t, null, e.id.replace("sort-", ""))
            })
        },
        sortRange: Wo
    });
    function Zo(e) {
        var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
            , n = e.$$("cells")
            , o = -1 != n.$view.className.indexOf("webix_borderless");
        "toggle" === t && (t = !o),
            !o && t ? (webix.html.addCss(n.$view, "webix_borderless", !0),
                e.callEvent("onAction", ["gridlines-hide", {
                    newValue: !0,
                    value: !1
                }])) : o && !t && (webix.html.removeCss(n.$view, "webix_borderless"),
                e.callEvent("onAction", ["gridlines-hide", {
                    newValue: !1,
                    value: !0
                }]))
    }
    var qo = Object.freeze({
        hideGridlines: Zo,
        serialize: function Yr(e, t) {
            t.table.gridlines = -1 != e.$$("cells").$view.className.indexOf("webix_borderless") ? 0 : 1
        },
        load: function Xr(e, t) {
            var n = !1;
            webix.isUndefined(t.table) || webix.isUndefined(t.table.gridlines) || (n = !t.table.gridlines),
                Zo(e, n)
        }
    });
    function Yo(e) {
        var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
            , n = e.$$("cells");
        "toggle" === t && (t = n.config.header),
            n.config.header && t ? (n.config.header = !1,
            n.isColumnVisible("rowId") && n.hideColumn("rowId", {}, !0, !0),
                n.refreshColumns(),
                e.callEvent("onAction", ["header-hide", {
                    newValue: !0,
                    value: !1
                }])) : n.config.header || t || (n.config.header = !0,
            n.isColumnVisible("rowId") || n.showColumn("rowId", {}, !0),
                n.refreshColumns(),
                e.callEvent("onAction", ["header-hide", {
                    newValue: !1,
                    value: !0
                }]))
    }
    var Xo = Object.freeze({
        hideHeaders: Yo,
        serialize: function Qr(e, t) {
            t.table.headers = e.$$("cells").config.header ? 1 : 0
        },
        load: function Jr(e, t) {
            var n = !1;
            t.table && !webix.isUndefined(t.table.headers) && (n = !t.table.headers),
                Yo(e, n)
        }
    });
    function Qo(e) {
        var t = e._ssFilters
            , n = [];
        for (var o in t)
            for (var i in t[o])
                n.push(t[o][i]);
        return n
    }
    var Jo = Object.freeze({
        init: function ea(i) {
            i.attachEvent("onCommand", function(e) {
                "create-filter" === e.id && function t(n, o) {
                    o = o || n._table.getSelectArea(),
                        u.set(function() {
                            if (n.removeFilter(),
                                o)
                                for (var e = o.start.row, t = o.start.column; t <= o.end.column; t++)
                                    n.setCellFilter(e, t, o),
                                        n.callEvent("onAction", ["filter", {
                                            row: e,
                                            column: t,
                                            value: null,
                                            newValue: o
                                        }])
                        })
                }(i)
            }),
                i.attachEvent("onUndo", function(e, t, n, o) {
                    "filter" === e ? o ? i.setCellFilter(t, n, o.options) : i.removeFilter() : "dropdown" == e && i.setCellEditor(t, n, o)
                }),
                i.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function u(e, t, n, o) {
                        var i, r = n.filters;
                        if (t)
                            for (i = r.length - 1; 0 <= i; i--) {
                                var a = S(r[i], 3)
                                    , l = a[0]
                                    , s = a[1]
                                    , c = a[2];
                                ("row" == e && l >= o.row || "column" == e && s >= o.column) && (r[i][0] = "row" == e ? 1 * l + t : l,
                                    r[i][1] = "column" == e ? 1 * s + t : s,
                                    r[i][2] = I(c, e, t, o))
                            }
                    }(t.name, t.inc, t.data, t.start)
                })
        },
        getFilters: Qo,
        serialize: function ta(e, t) {
            for (var n = Qo(e._table), o = e._table._ssEditors, i = t.filters = [], r = 0; r < n.length; r++) {
                var a = S(n[r], 2)
                    , l = a[0]
                    , s = a[1]
                    , c = o[l][s].options;
                c && i.push([l, s, c])
            }
        },
        load: function na(e, t) {
            var n, o = t.filters;
            if (o) {
                for (n = 0; n < o.length; n++)
                    bo(e, o[n][0], o[n][1], o[n][2], !0);
                e.filterSpreadSheet()
            }
        }
    });
    function ei(e, t, n, o) {
        oi(e, t, n) && (o || e.callEvent("onAction", ["comment", {
            row: t,
            column: n,
            newValue: null,
            value: e.comments._pull[t][n]
        }]),
            delete e.comments._pull[t][n]),
            e.$$("cells").updateItem(t, n)
    }
    function ti(e, t) {
        u.set(function() {
            C(t, e, function(e, t) {
                oi(e, t.row, t.column) && ei(e, t.row, t.column)
            }),
                e.$$("cells").refresh()
        })
    }
    function ni(e, t, n, o, i) {
        var r = oi(e, t, n) ? e.comments._pull[t][n] : null
            , a = e.$$("cells");
        "string" == typeof o && (o = o.trim() ? o : ""),
            e.comments._pull[t] = e.comments._pull[t] ? e.comments._pull[t] : {},
            e.comments._pull[t][n] = o,
            a.addCellCss(t, n, "ssheet_commented_cell"),
        i || e.callEvent("onAction", ["comment", {
            row: t,
            column: n,
            newValue: o,
            value: r
        }])
    }
    function oi(e, t, n) {
        return e.comments._pull[t] && e.comments._pull[t][n] ? e.comments._pull[t][n] : ""
    }
    var ii = Object.freeze({
        init: function oa(r) {
            r.comments = {
                get: function(e, t) {
                    return oi(r, e, t)
                },
                add: function(e, t, n) {
                    ni(r, e, t, n)
                },
                remove: function(e, t) {
                    ei(r, e, t)
                },
                _activeComment: {},
                _pull: {}
            },
                r.attachEvent("onReset", function() {
                    return function t(e) {
                        e.comments._pull = {}
                    }(r)
                }),
                r.attachEvent("onUndo", function(e, t, n, o) {
                    "comment" === e && function i(e, t, n, o) {
                        oi(e, t, n) && ei(e, t, n, !0),
                        o && ni(e, t, n, o, !0)
                    }(r, t, n, o)
                }),
                r.attachEvent("onAction", function(e, t) {
                    "before-grid-change" == e && function c(e, t, n, o) {
                        var i = n.comments
                            , r = i.length;
                        if (t)
                            for (; r--; ) {
                                var a = S(i[r], 2)
                                    , l = a[0]
                                    , s = a[1];
                                (l && "row" == e && l >= o.row || s && "column" == e && s >= o.column) && ("row" == e ? l < o.row - t ? i.splice(r, 1) : i[r][0] = 1 * l + t : "column" == e && (s < o.column - t ? i.splice(r, 1) : i[r][1] = 1 * s + t))
                            }
                    }(t.name, t.inc, t.data, t.start)
                })
        },
        removeCommentsRange: ti,
        serialize: function ia(e, t) {
            var n, o, i = [];
            for (n in e.comments._pull)
                for (o in e.comments._pull[n])
                    e.comments._pull[n][o] && i.push([n, o, e.comments._pull[n][o]]);
            t.comments = i
        },
        load: function ra(e, t) {
            var n, o = t.comments;
            if (o)
                for (n = 0; n < o.length; n++)
                    ni(e, o[n][0], o[n][1], o[n][2], !0)
        }
    });
    var ri = Object.freeze({
        init: function aa(n) {
            var o = [qo, Xo, In, So, Jo, ye, Bo, ii];
            n.attachEvent("onDataSerialize", function(e) {
                for (var t = 0; t < o.length; t++)
                    o[t].serialize && o[t].serialize(n, e)
            }),
                n.attachEvent("onDataParse", function(e) {
                    n._loading_data = !0;
                    for (var t = 0; t < o.length; t++)
                        o[t].load && o[t].load(n, e);
                    n._loading_data = !1
                })
        }
    })
        , ai = [".xls", ".xlt", ".xla", ".xlsx", ".xlsm", ".xltx", ".xltm", ".xlam", ".xlsb"];
    var li = Object.freeze({
        init: function la(t) {
            var o;
            window.XMLHttpRequest && (new XMLHttpRequest).upload && (o = webix.ui({
                view: "uploader",
                apiOnly: !0,
                accept: ai.join()
            })).attachEvent("onBeforeFileAdd", webix.bind(function(e) {
                return -1 < ai.indexOf("." + e.type) && (t.reset(),
                    t.parse(e.file, "excel")),
                    !1
            }, this)),
                t.attachEvent("onCommand", function(e) {
                    "excel-import" === e.id && function n(e, t) {
                        t ? webix.delay(function() {
                            return t.fileDialog()
                        }) : webix.alert(webix.i18n.spreadsheet.labels["import-not-support"])
                    }(0, o)
                })
        }
    });
    function si(e, t) {
        var n = e._activeSheet
            , o = function i(a, l, s) {
            var c = webix.html.create("div", {
                "class": "webix_ssheet_print"
            });
            l.xCorrection = 1,
                l.header = l.header || !1,
                l.trim = !!webix.isUndefined(l.trim) || l.trim,
                l.sheetnames = !!webix.isUndefined(l.sheetnames) || l.sheetnames;
            var u = a.$index;
            return a._sheets.forEach(function(e, t) {
                if (a.$index = u + "_" + t,
                "all" === l.data || "all" !== l.data && e.name === s) {
                    a.showSheet(e.name);
                    var n = "wss_" + a.$index;
                    if (l.sheetnames) {
                        var o = webix.html.create("div", {
                            "class": "webix_view webix_ssheet_sheetname"
                        }, e.name + ":");
                        c.appendChild(o)
                    }
                    var i = a._table.$customPrint(l, !0);
                    if (i.firstChild && (i.firstChild.className += " " + n),
                        c.appendChild(i),
                    "all" == l.data && t + 1 < a._sheets.length) {
                        var r = webix.html.create("DIV", {
                            "class": "webix_print_pagebreak"
                        });
                        c.appendChild(r)
                    }
                }
            }),
                a.$index = u,
                c
        }(e, t, n);
        webix.html.insertBefore(o, t.docFooter, document.body),
            window.print(),
            function r(n, e) {
                webix.html.remove(e),
                    n._sheets.forEach(function(e, t) {
                        webix.html.removeStyle(".wss_" + n.$index + "_" + t)
                    })
            }(e, o),
            e.showSheet(n)
    }
    var ci = Object.freeze({
        print: si,
        init: function sa(t) {
            t.$customPrint = function(e) {
                si(t, e)
            }
        }
    });
    function ui(e) {
        return 3 === (e = e.substring(1)).length && (e += e),
            e
    }
    function hi(o, i) {
        o.compactStyles();
        var r = []
            , a = {}
            , l = function n() {
            var e = R;
            return {
                font: {
                    sz: .75 * e["font-size"].replace("px", ""),
                    name: e["font-family"].replace(/'|,.*$/g, "")
                },
                alignment: {
                    horizontal: e["text-align"],
                    vertical: e["vertical-align"],
                    wrapText: "nowrap" != e["white-space"]
                }
            }
        }();
        i.docHeader && (r = r.concat([{
            0: fi(i.docHeader.css)
        }, {}])),
        i.header && r.push({});
        var e = r.length
            , t = o.$$("cells")
            , s = t.config.columns
            , c = e;
        return t.eachRow(function(e) {
            for (var t = i.xCorrection; t < s.length; t++) {
                var n = o.getStyle(e, s[t].id);
                r[c] = r[c] || {},
                    r[c][t - i.xCorrection] = n ? a[n.id] = a[n.id] || di(n.text) : l
            }
            c++
        }),
        i.docFooter && (r = r.concat([{}, {
            0: fi(i.docFooter.css)
        }])),
            r
    }
    function di(e) {
        for (var t = e.split(";"), n = {
            font: {},
            alignment: {},
            border: {}
        }, o = 0; o < t.length; o++)
            if (t[o])
                switch (O[o]) {
                    case "color":
                        n.font.color = {
                            rgb: ui(t[o])
                        };
                        break;
                    case "background":
                        var i = ui(t[o]);
                        i && "ffffff" !== i.toLowerCase() && (n.fill = {
                            fgColor: {
                                rgb: i
                            }
                        });
                        break;
                    case "text-align":
                        n.alignment.horizontal = t[o];
                        break;
                    case "font-family":
                        n.font.name = t[o].replace(/'|,.*$/g, "");
                        break;
                    case "font-size":
                        n.font.sz = .75 * t[o].replace("px", "");
                        break;
                    case "font-style":
                        n.font.italic = !0;
                        break;
                    case "text-decoration":
                        n.font.underline = !0;
                        break;
                    case "font-weight":
                        n.font.bold = !0;
                        break;
                    case "vertical-align":
                        n.alignment.vertical = "middle" == t[o] ? "center" : t[o];
                        break;
                    case "wrap":
                        n.alignment.wrapText = "wrap" == t[o];
                        break;
                    case "borders":
                        break;
                    case "format":
                        n.format = le(t[o], !0) || "";
                        break;
                    case "border-right":
                        n.border.right = {
                            color: {
                                rgb: ui(t[o])
                            },
                            style: "thin"
                        };
                        break;
                    case "border-bottom":
                        n.border.bottom = {
                            color: {
                                rgb: ui(t[o])
                            },
                            style: "thin"
                        };
                        break;
                    case "border-left":
                        n.border.left = {
                            color: {
                                rgb: ui(t[o])
                            },
                            style: "thin"
                        };
                        break;
                    case "border-top":
                        n.border.top = {
                            color: {
                                rgb: ui(t[o])
                            },
                            style: "thin"
                        }
                }
        return n
    }
    function fi(e) {
        if (!e)
            return {};
        for (var t = [], n = 0; n < O.length; n++)
            t.push(e[O[n]] || "");
        return di(t.join(";"))
    }
    var mi = Object.freeze({
        init: function ca(t) {
            t.$exportView = function(e) {
                return webix.extend(e, {
                    header: !1,
                    rawValues: !0,
                    spans: !0,
                    styles: !0,
                    math: !0,
                    xCorrection: 1,
                    ignore: {
                        rowId: !0
                    }
                }),
                    "excel" == e.export_mode ? function l(e, t) {
                        !0 === t.sheets ? t.sheets = e._sheets.map(function(e) {
                            return e.name
                        }) : t.sheets && t.sheets.length ? "string" == typeof t.sheets && (t.sheets = [t.sheets]) : t.sheets = [e._activeSheet],
                            t.dataOnly = !0;
                        for (var n = [], o = e._activeSheet, i = 0; i < t.sheets.length; i++) {
                            e.showSheet(t.sheets[i]),
                                t.xCorrection = e.$$("cells").config.header ? 1 : 0,
                                (n = n.concat(webix.toExcel(e._table, t)))[i].ranges = [];
                            for (var r = e.ranges.getRanges(), a = 0; a < r.length; a++)
                                n[i].ranges.push({
                                    Sheet: i,
                                    Name: r[a].name,
                                    Ref: t.sheets[i] + "!" + r[a].range.replace(/(\w)/gi, function(e) {
                                        return "$" + e
                                    })
                                });
                            t.styles && (n[i].styles = hi(e, t))
                        }
                        return e.showSheet(o),
                            delete t.dataOnly,
                            n
                    }(t, e) : t._table
            }
        }
    });
    function vi(e, t, n) {
        for (var o = webix.copy(e.data), i = [], r = 0; r < o.length; r++)
            for (var a = 0; a < o[0].length; a++) {
                var l = r + 1
                    , s = a + 1;
                i.push([l, s, o[r][a]])
            }
        if (e.data = i,
            e.spans)
            for (var c = 0; c < e.spans.length; c++)
                e.spans[c][0]++,
                    e.spans[c][1]++;
        if (t)
            for (var u = 0; u < t.length; u++)
                t[u].Sheet === n && (e.ranges = e.ranges || [],
                    e.ranges.push([t[u].Name.toUpperCase(), t[u].Ref.substring(t[u].Ref.indexOf("!") + 1).replace(/\$/g, "")]));
        if (e.styles && (e = function d(e) {
            for (var t = {}, n = [], o = 1, i = 0; i < e.styles.length; i++) {
                for (var r = [], a = e.styles[i][2], l = void 0, s = 0; s < O.length; s++)
                    switch (O[s]) {
                        case "color":
                            r[s] = a.font && a.font.color && gi(a.font.color.rgb) || "";
                            break;
                        case "background":
                            r[s] = a.fill && a.fill.fgColor && gi(a.fill.fgColor.rgb) || "";
                            break;
                        case "text-align":
                            r[s] = (a.alignment ? a.alignment.horizontal : "") || R["text-align"];
                            break;
                        case "font-family":
                            r[s] = a.font && a.font.name ? wi(a.font.name) : "";
                            break;
                        case "font-size":
                            r[s] = a.font && a.font.sz && a.font.sz / .75 + "px" || "";
                            break;
                        case "font-style":
                            r[s] = a.font && a.font.italic ? "italic" : "";
                            break;
                        case "text-decoration":
                            r[s] = a.font && a.font.underline ? "underline" : "";
                            break;
                        case "font-weight":
                            r[s] = a.font && a.font.bold ? "bold" : "";
                            break;
                        case "vertical-align":
                            var c = a.alignment && a.alignment.vertical || "";
                            r[s] = ("center" == c ? "middle" : c) || R["vertical-align"];
                            break;
                        case "wrap":
                            r[s] = a.alignment && a.alignment.wrapText ? "wrap" : "nowrap";
                            break;
                        case "borders":
                        case "format":
                            r[s] = "";
                            break;
                        case "border-right":
                            r[s] = a.border && a.border.right && gi(a.border.right.color.rgb) || "";
                            break;
                        case "border-bottom":
                            r[s] = a.border && a.border.bottom && gi(a.border.bottom.color.rgb) || "";
                            break;
                        case "border-left":
                            r[s] = a.border && a.border.left && gi(a.border.left.color.rgb) || "";
                            break;
                        case "border-top":
                            r[s] = a.border && a.border.top && gi(a.border.top.color.rgb) || ""
                    }
                r = r.join(";"),
                    l = t[r] || "wss" + o;
                for (var u = 0; u < e.data.length; u++)
                    if (e.data[u][0] === e.styles[i][0] + 1 && e.data[u][1] === e.styles[i][1] + 1) {
                        e.data[u][3] = l;
                        break
                    }
                t[r] || (n.push([l, r]),
                    t[r] = l,
                    o++)
            }
            return e.styles = n,
                e
        }(e)),
            e.sizes)
            for (var h = 0; h < e.sizes.length; h++)
                "column" == e.sizes[h][0] ? e.sizes[h] = [0, e.sizes[h][1] + 1, e.sizes[h][2]] : e.sizes[h] = [e.sizes[h][1] + 1, 0, e.sizes[h][2]];
        return e
    }
    function gi(e) {
        return 8 === (e = e || "000000").length && (e = e.substring(2)),
        "#" + e
    }
    function wi(e) {
        for (var t = R["font-family"], n = 0; n < Ce.length; n++)
            if (getFontFamily()[n].value == e) {
                t = getFontFamily()[n].id;
                break
            }
        return t
    }
    var pi = Object.freeze({
        init: function ua(r) {
            r._parseExcel = function(e, t) {
                var n = e.options || {};
                n.math = r.config.math;
                for (var o = {
                    sheets: []
                }, i = 0; i < e.names.length; i++)
                    n.name = e.names[i],
                        o.sheets.push({
                            name: n.name,
                            content: vi(t.getSheet(e, n), e.ranges, i)
                        });
                return o
            }
                ,
                r._parseCsv = function(e, t) {
                    e = t.getRecords(e);
                    for (var n = webix.copy(e), o = [], i = 0; i < n.length; i++)
                        for (var r = n[i].split(t.cell), a = 0; a < r.length; a++) {
                            var l = i + 1
                                , s = a + 1;
                            o.push([l, s, r[a]])
                        }
                    return {
                        data: o
                    }
                }
        }
    });
    var bi = Object.freeze({
        init: function ha(t) {
            t.attachEvent("onCommand", function(e) {
                switch (e.id) {
                    case "clear-value":
                        t.clearRange(null, {
                            values: !0
                        });
                        break;
                    case "clear-style":
                        t.clearRange(null, {
                            styles: !0
                        });
                        break;
                    case "clear-conditional-formats":
                        t.clearRange(null, {
                            conditions: !0
                        });
                        break;
                    case "clear-dropdown-editors":
                        t.clearRange(null, {
                            editors: !0
                        });
                        break;
                    case "clear-all":
                        u.set(function() {
                            t.clearRange(null, null)
                        });
                        break;
                    case "clear-comments":
                        t.clearRange(null, {
                            comments: !0
                        })
                }
            })
        }
    });
    function xi(e, t, n, o) {
        var i = {}
            , r = {};
        o = function a(e, t, n) {
            if (t)
                webix.isArray(t) || (t = [t, t]);
            else {
                var o = e.$$("cells").getSelectArea();
                o && (t = [o.start[n], o.end[n]])
            }
            return t
        }(e, o, n),
            i[n] = o[0],
            r[n] = o[1],
            e.callEvent("onCommand", [{
                id: t,
                group: n
            }, i, r])
    }
    var _i = Object.freeze({
        insertRow: function da(e) {
            xi(this, "add", "row", e)
        },
        deleteRow: function fa(e) {
            xi(this, "del", "row", e)
        },
        insertColumn: function ma(e) {
            xi(this, "add", "column", e)
        },
        deleteColumn: function va(e) {
            xi(this, "del", "column", e)
        }
    });
    var yi = Object.freeze({
        lockCell: function ga(e, t, n) {
            En(this, e, t, n)
        },
        isCellLocked: function wa(e, t) {
            return Vn(this, e, t)
        }
    });
    function $i(e, t, n) {
        var o = e.$$("cells");
        if ("row" == t)
            for (var i = e.config.columnCount, r = 1; r <= i; r++) {
                var a = o.getSpan(n, r);
                if (a)
                    n < 1 * a[0] + a[3] - 1 && Ci(e, a, a[2], n - a[1] + 1)
            }
        else
            for (var l = o.data.order[0], s = o.data.order.length, c = l; c <= s; c++) {
                var u = o.getSpan(c, n);
                if (u)
                    n < 1 * u[1] + u[2] - 1 && Ci(e, u, n - u[0] + 1, u[3])
            }
    }
    function Ci(e, t, n, o) {
        e.splitCell(t[0], t[1]),
            e.combineCells({
                cell: {
                    row: t[0],
                    column: t[1]
                },
                x: n,
                y: o
            })
    }
    var Si = Object.freeze({
        freezeColumns: function pa(t) {
            var n = this.$$("cells")
                , o = n.config.leftSplit - 1;
            if (!1 === t && (t = 0),
                webix.isUndefined(t)) {
                var e = this.getSelectedId(!0);
                t = e.length ? e[0].column : 0
            }
            1 < n.config.leftSplit && (t - o || (t = 0)),
                u.set(function() {
                    $i(this, "column", t),
                        n.unselect();
                    var e = "rowId" == n.config.columns[0].id ? 1 : 0;
                    n.define("leftSplit", t ? t + e : e),
                        n.refreshColumns(),
                        this.callEvent("onAction", ["freeze-column", {
                            value: o,
                            newValue: t
                        }])
                }, this)
        },
        freezeRows: function ba(e) {
            var t = this.$$("cells")
                , n = t.config.topSplit;
            n == e && (e = 0),
                u.set(function() {
                    $i(this, "row", e),
                        t.unselect(),
                        t.define("topSplit", e || 0),
                        t.refreshColumns(),
                        this.callEvent("onAction", ["freeze-row", {
                            value: n,
                            newValue: e
                        }])
                }, this)
        }
    });
    var ki = Object.freeze({
        hideGridlines: function xa(e) {
            Zo(this, e)
        }
    });
    var Ei = Object.freeze({
        hideHeaders: function _a(e) {
            Yo(this, e)
        }
    });
    var Vi = Object.freeze({
        hideColumn: function ya(e, t) {
            Ro(this, e, t)
        },
        isColumnVisible: function $a(e) {
            return Ao(this, e)
        },
        hideRow: function Ca(e, t) {
            Oo(this, e, t)
        },
        isRowVisible: function Sa(e) {
            return Uo(this, e)
        }
    });
    var Ii = Object.freeze({
        addImage: function ka(e, t, n) {
            this.setCellValue(e, t, function o(e) {
                return '=IMAGE("'.concat(e, '")')
            }(n)),
                this.refresh()
        },
        addSparkline: function Ea(e, t, n) {
            var o = function i(e) {
                var t = "=SPARKLINE(".concat(e.range, ',"').concat(e.type, '"');
                return "bar" === e.type ? t += ',"'.concat(e.color, '","').concat(e.negativeColor, '"') : e.color && (t += ',"'.concat(e.color, '"')),
                t + ")"
            }(n);
            this.setCellValue(e, t, o),
                this.refresh()
        },
        getSheetData: function Va(e) {
            return Gt(this, e)
        },
        recalculate: function Ia() {
            this.callEvent("onMathRefresh", [])
        },
        registerMathMethod: function za(e, t) {
            if (function i(e, t) {
                nt[e] = t
            }(e = e.toUpperCase(), t),
                this.$$("liveEditor")) {
                var n = this.$$("liveEditor").config.suggest
                    , o = webix.$$(n).getList();
                o.exists(e) || o.add({
                    id: e,
                    value: e
                })
            }
        }
    });
    var zi = Object.freeze({
        combineCells: function Ra(e) {
            var t = this;
            if (!e) {
                var n = this.getSelectedId(!0);
                1 < n.length && (e = Dn(n))
            }
            u.set(function() {
                e && Bn(t, e.cell, e.x, e.y)
            }),
                this.refresh()
        },
        splitCell: function Aa(e, t) {
            e && t ? Hn(this, {
                row: e,
                column: t
            }) : u.set(function() {
                this.eachSelectedCell(function(e) {
                    Hn(this, e)
                })
            }, this),
                this.refresh()
        },
        addStyle: function Oa(e, t) {
            return T(this, e, t)
        },
        getStyle: function Ua(e, t) {
            return j(this, {
                row: e,
                column: t
            })
        },
        setStyle: function Fa(e, t, n) {
            return P(this, {
                row: e,
                column: t
            }, n)
        },
        setRangeStyle: function Ma(e, t) {
            u.set(function() {
                L(this, e, t)
            }, this)
        },
        clearRange: function Na(e, t) {
            (e || (e = this._table.getSelectArea())) && (t || (t = {
                styles: !0,
                values: !0,
                editors: !0,
                conditions: !0,
                comments: !0
            }),
            t.styles && Y(this, e),
            t.conditions && co(this, e),
            t.values && this.setRangeValue(e, null),
            t.editors && vo(this, e),
            t.comments && ti(this, e),
                this.refresh())
        },
        compactStyles: function ja() {
            return X(this)
        },
        serialize: function Ta(e) {
            var t = {};
            return this.callEvent("onDataSerialize", [t, e]),
                e && e.sheets ? function n(e, t) {
                    return xt(e, e._activeSheet).content = t,
                        e._sheets
                }(this, t) : t
        },
        showSheet: function Ba(e) {
            bt(this, e)
        },
        getActiveSheet: function Ha() {
            return this._activeSheet
        },
        addSheet: function Da(e) {
            ft(this, e)
        },
        clearSheet: function Pa() {
            this.reset()
        },
        renameSheet: function La(e, t) {
            gt(this, e, t)
        },
        editSheet: function Ka(e) {
            mt(this, e)
        },
        removeSheet: function Wa(e) {
            vt(this, e)
        },
        undo: function Ga() {
            Rn(this)
        },
        redo: function Za() {
            An(this)
        },
        sortRange: function qa(e, t) {
            Wo(this, e, t)
        }
    });
    var Ri = Object.freeze({
        refresh: function Ya(e) {
            e ? this._table.refreshColumns() : this._table.refresh()
        },
        eachSelectedCell: function Xa(e) {
            for (var t = this.getSelectedId(!0), n = 0; n < t.length; n++)
                e.call(this, t[n])
        },
        getSelectedRange: function Qa(e) {
            var t = this._table.getSelectArea();
            return t ? (e && (e = this.getActiveSheet()),
                y(t.start.row, t.start.column, t.end.row, t.end.column, e)) : ""
        },
        getSelectedId: function Ja(e) {
            var t = this._table.getSelectArea();
            if (!e)
                return t && t.start.row ? t.start : null;
            var n = [];
            if (t)
                for (var o = t.start, i = t.end, r = o.row; r <= i.row; r++)
                    for (var a = o.column; a <= i.column; a++)
                        n.push({
                            row: r,
                            column: a
                        });
            return n
        },
        getCellValue: function el(e, t) {
            var n = this.getRow(e)
                , o = n["$" + t] || n[t];
            return void 0 === o ? "" : o
        },
        setCellValue: function tl(e, t, n) {
            if (this.getCellValue(e, t) !== n) {
                var o = this.getRow(e)
                    , i = o["$" + t] || o[t];
                this.callEvent("onBeforeValueChange", [e, t, n, i]) && (o[t] = n,
                    delete o["$" + t],
                    this.callEvent("onCellChange", [e, t, n]),
                    this.saveCell(e, t))
            }
        },
        setRangeValue: function nl(o, i) {
            u.set(function() {
                for (var e = $(o, this), t = e.start.row; t <= e.end.row; t++)
                    for (var n = e.start.column; n <= e.end.column; n++)
                        this.setCellValue(t, n, i)
            }, this)
        },
        getRow: function ol(e) {
            return this._table.getItem(e)
        },
        getColumn: function il(e) {
            return this._table.getColumnConfig(e)
        },
        reset: function rl(e) {
            var t = {
                data: []
            };
            e && e.sheets && (t = pt(t)),
                this.parse(t)
        },
        _resetTable: function al() {
            Ge(this)
        }
    });
    var Ai = Object.freeze({
        saveCell: function ll(e, t) {
            var n = this.getStyle(e, t);
            d(this, "data", {
                row: e,
                column: t,
                value: this.getCellValue(e, t),
                style: n ? n.id : ""
            })
        }
    });
    var Oi = Object.freeze({
        getRow: function sl(e) {
            return this._table.getItem(e)
        },
        setCellFilter: function cl(e, t, n) {
            bo(this, e, t, n)
        },
        setCellEditor: function ul(e, t, n) {
            var o = this._table._ssEditors[e] = this._table._ssEditors[e] || {}
                , i = o[t] || this._table.getItem(e)[t];
            (o[t] = n) && n.editor ? this._table.addCellCss(e, t, "ss_filter") : (delete this._table._ssEditors[e][t],
                this._table.removeCellCss(e, t, "ss_filter")),
                this.callEvent("onAction", ["dropdown", {
                    row: e,
                    column: t,
                    value: i,
                    newValue: n
                }])
        },
        getCellEditor: function hl(e, t) {
            return (this._table._ssEditors[e] || {})[t] || null
        },
        addFilter: function dl(e, t) {
            return wo(this, e, t)
        },
        removeFilter: function fl() {
            for (var e = Qo(this._table), t = 0; t < e.length; t++) {
                var n = S(e[t], 2)
                    , o = n[0]
                    , i = n[1]
                    , r = this.getCellEditor(o, i);
                this.setCellEditor(o, i, null),
                    this._table.removeCellCss(o, i, "ss_filter"),
                    this.callEvent("onAction", ["filter", {
                        row: o,
                        column: i,
                        value: r,
                        newValue: null
                    }])
            }
            this._table._ssFilters = {},
                this._table.data.filter(function() {
                    return !0
                })
        },
        filterSpreadSheet: function ml() {
            this._table.data.silent(function() {
                for (var i = this, r = Qo(this._table), e = function() {
                    var e = S(r[a], 2)
                        , t = e[0]
                        , n = e[1];
                    l = i._table.getItem(t)[n],
                        s = !1;
                    var o = l == Yt();
                    i._table.data.filter(function(e) {
                        return !l || !(!o || e[n]) || 1 * e.id <= 1 * t || (e[n] || "" === e[n] || (s = !0),
                        s || e[n] == l)
                    }, 1, a)
                }, a = 0; a < r.length; a++) {
                    var l, s;
                    e()
                }
            }, this),
                this._table.refresh()
        }
    });
    var Ui = Object.freeze({
        confirm: function vl(t) {
            var n = this;
            webix.modalbox({
                type: "alert webix_ssheet_confirm",
                text: t.text,
                buttons: [webix.i18n.spreadsheet.labels.cancel, webix.i18n.spreadsheet.labels.ok],
                callback: function(e) {
                    t.callback.call(n, "0" != e)
                }
            })
        },
        alert: function gl(e) {
            webix.modalbox({
                type: "alert webix_ssheet_alert",
                text: e.text,
                buttons: [webix.i18n.spreadsheet.labels.ok]
            })
        }
    });
    var Fi = Object.freeze({
        resetUndo: function wl() {
            On(this)
        },
        groupUndo: function pl(e) {
            u.set(e, this)
        },
        ignoreUndo: function bl(e) {
            Fn(e, this)
        }
    });
    var Mi = Object.freeze({
        setFormat: function xl(e, t, n) {
            ce(this, e, t, n)
        },
        changeDecimals: function _l(e, t, n) {
            de(this, n, e, t)
        }
    });
    var Ni = [{
        id: "file",
        submenu: [{
            id: "sheet",
            submenu: [{
                id: "new-sheet"
            }, {
                id: "copy-sheet"
            }, {
                id: "remove-sheet"
            }]
        }, {
            id: "excel-import"
        }, {
            id: "excel-export"
        }]
    }, {
        id: "edit",
        submenu: [{
            id: "add-range"
        }, {
            id: "add-dropdown"
        }, {
            id: "add-link"
        }, {
            id: "lock-cell"
        }, {
            id: "conditional-format"
        }, {
            id: "clear",
            submenu: [{
                id: "clear-value"
            }, {
                id: "clear-style"
            }, {
                id: "clear-conditional-formats"
            }, {
                id: "clear-dropdown-editors"
            }, {
                id: "clear-comments"
            }, {
                $template: "Separator"
            }, {
                id: "clear-all"
            }]
        }]
    }, {
        id: "insert",
        submenu: [{
            id: "add-image"
        }, {
            id: "add-sparkline"
        }, {
            id: "add-comment"
        }]
    }, {
        id: "data",
        submenu: [{
            id: "sort",
            submenu: [{
                id: "sort-asc"
            }, {
                id: "sort-desc"
            }]
        }, {
            id: "create-filter"
        }]
    }, {
        id: "view",
        submenu: [{
            id: "columns",
            submenu: [{
                id: "insert-column"
            }, {
                id: "delete-column"
            }, {
                id: "show-column"
            }, {
                id: "hide-column"
            }]
        }, {
            id: "rows",
            submenu: [{
                id: "insert-row"
            }, {
                id: "delete-row"
            }, {
                id: "show-row"
            }, {
                id: "hide-row"
            }]
        }, {
            $template: "Separator"
        }, {
            id: "freeze-columns"
        }, {
            id: "freeze-rows"
        }, {
            id: "hide-gridlines"
        }, {
            id: "hide-headers"
        }]
    }]
        , ji = {
        getMenuData: function(e) {
            var t;
            for (t = 0; t < e.length; t++)
                "string" == typeof e[t] && (e[t] = {
                    id: e[t]
                }),
                e[t].value || (e[t].value = webix.i18n.spreadsheet.menus[e[t].id]),
                e[t].submenu && (e[t].submenu = this.getMenuData(e[t].submenu));
            return e
        }
    };
    function Ti(t) {
        t.attachEvent("onComponentInit", function() {
            return function e(t) {
                t.$$("menu") && t.$$("menu").attachEvent("onMenuItemClick", function(e) {
                    return function n(e, t) {
                        e.callEvent("onMenuItemClick", [t]) && (Bi[t] ? Bi[t](e) : e.callEvent("onCommand", [{id: t}]))
                    }(t, e)
                })
            }(t)
        });
        var e = t.config
            , n = {
            view: "menu",
            borderless: !0,
            css: "webix_ssheet_menu",
            id: "menu",
            autowidth: !0,
            type: {
                height: 40
            },
            data: ji.getMenuData(webix.isArray(e.menu) ? e.menu : Ni)
        };
        return t.callEvent("onViewInit", ["menu", n]),
            n
    }
    var Bi = {
        undo: function(e) {
            e.undo()
        },
        redo: function(e) {
            e.redo()
        },
        "insert-column": function(e) {
            e.insertColumn()
        },
        "delete-column": function(e) {
            e.deleteColumn()
        },
        "show-column": function(e) {
            e.hideColumn(null, !1)
        },
        "hide-column": function(e) {
            e.hideColumn(null, !0)
        },
        "insert-row": function(e) {
            e.insertRow()
        },
        "delete-row": function(e) {
            e.deleteRow()
        },
        "show-row": function(e) {
            e.hideRow(null, !1)
        },
        "hide-row": function(e) {
            e.hideRow(null, !0)
        },
        "freeze-columns": function(e) {
            e.freezeColumns()
        },
        "hide-gridlines": function(e) {
            e.hideGridlines("toggle")
        },
        "hide-headers": function(e) {
            e.hideHeaders("toggle")
        }
    };
    function Hi(e) {
        return webix.i18n.spreadsheet.labels[e] || e
    }
    var Di = {
        name: "spreadsheet",
        _base_index: {
            count: 1
        },
        defaults: {
            spans: !0,
            rowCount: 50,
            math: !0,
            columnCount: 20,
            resizeCell: !0,
            sheetTabWidth: 90,
            conditionStyle: function yl() {
                return [{
                    name: Hi("normal"),
                    css: "webix_ssheet_condition_regular"
                }, {
                    name: Hi("neutral"),
                    css: "webix_ssheet_condition_neutral"
                }, {
                    name: Hi("bad"),
                    css: "webix_ssheet_condition_bad"
                }, {
                    name: Hi("good"),
                    css: "webix_ssheet_condition_good"
                }]
            }()
        },
        $init: function() {
            this.$index = this._base_index.count++,
                this.$view.className += " webix_ssheet",
                this.$ready.unshift(this._sub_init),
                this.$ready.unshift(ie),
                this.$ready.push(this._set_handlers)
        },
        $skin: function() {
            !function t() {
                var e = "material" == webix.skin.$name || "mini" == webix.skin.$name;
                z.width = webix.skin.$active.inputHeight + 2,
                    z.titleHeight = "mini" == webix.skin.$name ? 18 : 20,
                    R["font-family"] = e ? "Arial, Helvetica, sans-serif" : "'PT Sans', Tahoma"
            }()
        },
        _sub_init: function() {
            var e = this.config
                , t = [];
            !e.readonly && e.menu && t.push(Ti(this)),
            e.readonly || !1 === e.toolbar || t.push(Ae(this)),
            e.subbar && t.push(e.subbar),
            e.liveEditor && t.push(rt(this)),
                t.push(Ke(this, {
                    editable: !e.readonly,
                    spans: !0,
                    clipboard: e.clipboard,
                    liveEditor: e.liveEditor,
                    clipboardDecimalDelimiter: e.clipboardDecimalDelimiter
                }));
            var n = !0 === e.bottombar ? ht(this) : e.bottombar;
            n && t.push(n),
                ut(this),
            e.readonly || function o(r) {
                r.attachEvent("onComponentInit", function() {
                    return r.$$("context").attachTo(r._table.$view)
                });
                var e = webix.i18n.spreadsheet.menus
                    , a = {
                    data: [{
                        id: "clear",
                        value: e.clear,
                        submenu: [{
                            id: "clear-value",
                            value: e["clear-value"]
                        }, {
                            id: "clear-style",
                            value: e["clear-style"]
                        }, {
                            id: "clear-conditional-formats",
                            value: e["clear-conditional-formats"]
                        }, {
                            id: "clear-dropdown-editors",
                            value: e["clear-dropdown-editors"]
                        }, {
                            id: "clear-comments",
                            value: e["clear-comments"]
                        }, {
                            $template: "Separator"
                        }, {
                            id: "clear-all",
                            value: e["clear-all"]
                        }]
                    }, {
                        id: "lock-cell",
                        value: e["lock-cell"]
                    }, {
                        $template: "Separator"
                    }, {
                        id: "sort",
                        value: e.sort,
                        submenu: [{
                            id: "sort-asc",
                            value: e["sort-asc"]
                        }, {
                            id: "sort-desc",
                            value: e["sort-desc"]
                        }]
                    }, {
                        id: "create-filter",
                        value: e["create-filter"]
                    }, {
                        $template: "Separator"
                    }, {
                        id: "add-range",
                        value: e["add-range"]
                    }, {
                        id: "add-link",
                        value: e["add-link"]
                    }, {
                        id: "add-comment",
                        value: e["add-comment"]
                    }],
                    column: [{
                        id: "add",
                        group: "column",
                        value: e["insert-column"]
                    }, {
                        id: "del",
                        group: "column",
                        value: e["delete-column"]
                    }, {
                        id: "show",
                        group: "column",
                        value: e["show-column"]
                    }, {
                        id: "hide",
                        group: "column",
                        value: e["hide-column"]
                    }],
                    row: [{
                        id: "add",
                        group: "row",
                        value: e["insert-row"]
                    }, {
                        id: "del",
                        group: "row",
                        value: e["delete-row"]
                    }, {
                        id: "show",
                        group: "row",
                        value: e["show-row"]
                    }, {
                        id: "hide",
                        group: "row",
                        value: e["hide-row"]
                    }]
                }
                    , t = {
                    view: "contextmenu",
                    id: "context",
                    padding: 0,
                    sizeToContent: !0,
                    submenuConfig: {
                        padding: 0,
                        on: {
                            onBeforeShow: function() {
                                this.sizeToContent()
                            }
                        }
                    },
                    data: [],
                    on: {
                        onMenuItemClick: function(e) {
                            r.callEvent("onCommand", [this.getMenuItem(e)])
                        },
                        onBeforeShow: function(e) {
                            var t, n;
                            if (webix.callEvent("onClick", []),
                                !(n = r._table.locate(e)))
                                return !1;
                            if (t = "",
                                n.header && "rowId" !== n.column ? (Me(n.column, r) || Fe(n.column, r),
                                    t = "column") : n.row && (t = "rowId" === n.column ? (je(n.row, r) || Oe(n.row, r),
                                    "row") : (Ne(n.row, n.column, r) || r._table.addSelectArea(n, n),
                                    "data")),
                                t) {
                                var o = function i(e, t, n) {
                                    var o = {
                                        area: t,
                                        data: n
                                    };
                                    return e.callEvent("onContextMenuConfig", [o]) ? o.data : null
                                }(r, t, a[t]);
                                if (o)
                                    return this.clearAll(),
                                        this.parse(o),
                                        webix.html.preventEvent(e),
                                        !0
                            }
                            return !1
                        }
                    }
                };
                r.callEvent("onViewInit", ["context", t]), r.ui(t)
            }(this),
                function i(e) {
                    e.config.readonly && (Cn = [$n]);
                    for (var t = 0; t < Cn.length; t++)
                        Sn[Cn[t].action] = new Cn[t].DialogBox(e);
                    e.attachEvent("onCommand", function(e) {
                        var t = Sn[e.id];
                        t && t.open(e)
                    })
                }(this),
                this.rows_setter(t)
        },
        _set_handlers: function() {
            var e = this;
            this._table || (this._table = this.$$("cells"),
                function o(e) {
                    for (var t = [qn, fo, ne, Eo, ye, Po, Go, jn, Le, Bo, In, Wn, Jn, Do, Vo, So, ri, li, Jo, ci, mi, pi, bi, ii, h], n = 0; n < t.length; n++)
                        t[n].init && t[n].init(e)
                }(this),
                Ge(this, this.config.columnCount, this.config.rowCount),
                Ze(this),
                this._table.attachEvent("onAfterAreaAdd", function() {
                    return e.callEvent("onAfterSelect", [e.getSelectedId(!0)])
                }),
                this.callEvent("onComponentInit", []))
        },
        $onLoad: function(e, t) {
            this._set_handlers(),
                e.excel ? e = this._parseExcel(e, t) : e.data || "string" != typeof e || !t.cell && !t.row || (e = this._parseCsv(e, t)),
                function n(e, t) {
                    !(t = webix.isArray(t) ? {
                        sheets: t
                    } : t).excel && t.sheets || !e._activeSheet ? wt(e, t) : yt(e, xt(e, e._activeSheet).content = t)
                }(this, e)
        }
    };
    !function $l(e) {
        for (var t = [_i, yi, Si, ki, Ei, Vi, Ii, zi, Ri, Ai, Oi, Ui, Fi, Mi], n = 0; n < t.length; n++)
            webix.extend(e, t[n])
    }(Di),
        webix.protoUI(Di, webix.AtomDataLoader, webix.IdSpace, webix.ui.layout)
});
//# sourceMappingURL=spreadsheet.js.map
