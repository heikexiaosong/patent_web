<!DOCTYPE html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${reporttemp.bbmc}</title>
    <meta  name = "viewport" content = "initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no">

    <script src="../../../../thirdparty/codebase/webix/webix.js?v=6.3.1" type="text/javascript"></script>
    <script src="../../../../thirdparty/codebase/locales/locales.js?v=6.3.1" type="text/javascript"></script>
    <script src="../../../../thirdparty/codebase/spreadsheet.js?v=6.3.1" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="../../../../thirdparty/codebase/webix/webix.css?v=6.3.1">
    <link rel="stylesheet" type="text/css" href="../../../../thirdparty/codebase/spreadsheet.css?v=6.3.1">

    <script src="../../../../thirdparty/codebase/data.js?v=6.3.1"></script>
</head>
<body>
<script type="text/javascript">
    webix.ready(function(){

        webix.i18n.setLocale("zh-CN");


        webix.i18n.spreadsheet = {
            labels: {
                common: "常规",
                currency: "货币",
                number: "数值",
                percent: "百分比",
                "custom-format": "自定义",
                "decimal-places": "小数位数",
                separator: "使用千分位分隔符",
                negative: "负数",
                "format-docs": "How to create a format",
                "undo-redo": "Undo/Redo",
                font: "字体",
                text: "文本",
                cell: "单元格",
                align: "Align",
                format: "Number",
                column: "Column",
                borders: "Borders",
                px: "px",
                apply: "应用",
                cancel: "取消",
                save: "保存",
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
                "format-pattern": "类型",
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
                color: "文字颜色",
                background: "背景颜色",
                "font-family": "字体",
                "font-size": "字体大小",
                "text-align": "水平对齐",
                "vertical-align": "垂直对齐",
                borders: "边框",
                "borders-no": "无边框",
                "borders-left": "左边框",
                "borders-top": "上边框",
                "borders-right": "右边框",
                "borders-bottom": "下边框",
                "borders-all": "全边框",
                "borders-outer": "外边框",
                "borders-top-bottom": "上下边框",
                "borders-color": "Border color",
                "align-left": "左对齐",
                "align-center": "水平居中",
                "align-right": "右对齐",
                "align-top": "上对齐",
                "align-middle": "垂直居中",
                "align-bottom": "下对齐",
                span: "合并单元格",
                wrap: "Text wrap",
                undo: "Undo",
                redo: "Redo",
                format: "单元格格式",
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
                "insert-column": "插入列",
                "delete-column": "删除列",
                "show-column": "显示列",
                "hide-column": "隐藏列",
                rows: "Rows",
                "insert-row": "插入行",
                "delete-row": "删除行",
                "show-row": "显示行",
                "hide-row": "隐藏行",
                insert: "插入",
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
            },

            "font-family": [{
                id: "Microsoft YaHei",
                value: "微软雅黑"
            },  {
                id: "SimSun",
                value: "宋体"
            },{
                id: "Arial, Helvetica, sans-serif",
                value: "Arial"
            }, {
                id: "'Roboto', sans-serif",
                value: "Roboto"
            }, {
                id: "Georgia, serif",
                value: "Georgia"
            }, {
                id: "Tahoma",
                value: "Tahoma"
            }, {
                id: "Verdana",
                value: "Verdana"
            }]
        };

        var popup = webix.ui({
            view:"popup",
            position:"center",
            width: 620, height:500,
            body: {
                view:"datatable",
                columns:[
                    { id:"csbm",	header:"参数编码", css:"rank",  		width:200},
                    { id:"csfz",	header:"参数分组",width:200},
                    { id:"csmc",	header:"参数说明" , width:200}  ],
                url:"../../../reportparam/list",
                select:"row",
                on:{
                    onSelectChange:function(){

                        var item = this.getSelectedItem();
                        var cells = $$("ssheet").getSelectedId();

                        $$("ssheet").setCellValue(cells.row, cells.column, "=" + item["csbm"] + "()");

                        $$("ssheet").refresh();


                    }
                } // the default data source
            }
        });

        var hiddenPopup = webix.ui({
            view:"window",
            position:"center",
            head: "隐藏行(列)",
            close:true,
            width: 620,
            height:500,
            body: {
                view:"list",
                id: "hiddenList",
                template:"第 #title# #type#, 条件： #condition# <span class='info'  style='float: right; margin-right: 20px; color: red'>删除</span>",
                select:true,
                data:[],
                onClick:{
                    info:function(e, id){
                        var item = this.getItem(id);
                        if ( item["type"] === '列' ) {
                            delete $$("ssheet")._conditional_hide_column[item.num]
                        } if ( item["type"] === '行' ) {
                            delete $$("ssheet")._conditional_hide_row[item.num];
                        }
                        $$("hiddenList").remove(item.id); //removes the item with ID=1
                        return false;
                    }
                }
            },
            on: {
                'onShow': function(){
                    $$("hiddenList").clearAll();
                    var hidenColumns = $$("ssheet")._conditional_hide_column || {};
                    var hidenRows = $$("ssheet")._conditional_hide_row || {};

                    var columns = Object.keys(hidenColumns);
                    var rows = Object.keys(hidenRows);

                    var list = [];
                    for (var i = 0; i < columns.length; i++) {
                        var columnName = $$("ssheet").getColumn(columns[i]).header[0].text;
                        list.push({type: "列", title: columnName, num: columns[i], condition: hidenColumns[columns[i]]})
                    }
                    for (var i = 0; i < rows.length; i++) {
                        list.push({type: "行", title: rows[i],  num: rows[i], condition: hidenRows[rows[i]]})
                    }

                    $$("hiddenList").parse(list);
                }
            }
        });




        webix.ui({
            view:"spreadsheet",
            id:"ssheet",
            liveEditor: true,
            buttons: {
                "$title": [{
                    view: "label", width: 150, label: "${reporttemp.bbmc}", align:"center"
                }],
                "字体": ["font-family","font-size","font-weight","font-style","text-decoration","color"],
                "单元格样式": ["background","borders","span", "format"],
                "对齐": ["text-align","vertical-align"],
                "": [
                    {view: "button", name: "save", width: 50, label: "保存",
                        click: function(){

                            var promise =  webix.ajax().headers({
                                "Content-type":"application/json"
                            }).post("../../sheet/save/${id}", $$("ssheet").serialize());

                            promise.then(function(data){
                                var res = data.json();
                                console.log(res);

                                if ( res.success ){
                                    webix.message("保存成功");
                                } else {
                                    webix.message( res.message || "保存失败");
                                }
                            });

                        }
                    },
                    {view: "uploader", width: 120, value: "从Excel导入",
                        on:{
                            onBeforeFileAdd: function(upload){
                                //webix.message("onBeforeFileAdd");
                                $$("ssheet").reset();
                                $$("ssheet").parse(upload.file, "excel");
                                return false;
                            }
                        }
                    },
                    {view: "button", width: 120, value: "查看隐藏行/列",
                        click: function(){
                            hiddenPopup.show();
                        }
                    },
                   /* {view: "button", name: "close", width: 50, label: "关闭", click: function(){
                        if ( !!self.frameElement  ) {
                            var iid = self.frameElement.getAttribute('id');
                            parent.layerClose(parseInt(iid.substring(18)));
                        }}
                    }*/
                ]
            },
            url: "../../query/v2/${id}",
            on:{
                onDataSerialize: function(data){
                    // some code here
                    var hideConditionals = [];

                    var _conditional_hide_column = this._conditional_hide_column || {};

                    var keys = Object.keys(_conditional_hide_column);
                    for (var i = 0; i < keys.length; i++) {
                        hideConditionals.push(["column", keys[i],  _conditional_hide_column[keys[i]]]);
                    }

                    var _conditional_hide_row = this._conditional_hide_row || {};
                    var keys = Object.keys(_conditional_hide_row);
                    for (var i = 0; i < keys.length; i++) {
                        hideConditionals.push(["row", keys[i],  _conditional_hide_row[keys[i]]]);
                    }

                    return data["hideConditionals"] = hideConditionals,  data;
                },

                onDataParse: function(data){
                    // some code here
                    if ( !!data && !!data.hideConditionals ) {

                        this._conditional_hide_row = this._conditional_hide_row || {};
                        this._conditional_hide_column = this._conditional_hide_column || {};

                        var hideConditionals = data.hideConditionals;

                        for (var i = 0; i < hideConditionals.length; i++) {
                            // ["column", "2", "C002"] ["column", "2", "C002"]
                            var hideConditional = hideConditionals[i];
                            if ( hideConditional[0] === 'row' ){
                                this._conditional_hide_row[hideConditional[1]] = hideConditional[2];
                            } else if ( hideConditional[0] === 'column' ){
                                this._conditional_hide_column[hideConditional[1]] = hideConditional[2];
                            }
                        }
                    }
                },

                onAfterSelect:function(ids){
                    if ( ids.length <= 0 ){
                        return
                    }

                    var id = ids[0];

                    var columnName = $$("ssheet").getColumn(id.column).header[0].text;

                    var  ids =  Object.keys($$("ssheet").ws);
                    for (var i = 0; i < ids.length; i++) {
                        if ( $$("ssheet").ws[ids[i]] === 'cell-text' ) {
                            $$(ids[i]).setValue(columnName + id.row );
                            break
                        }
                    }


                    for (var i = 0; i < ids.length; i++) {
                        if ( $$("ssheet").ws[ids[i]] === 'funcList' ) {
                            $$(ids[i]).attachEvent("onItemClick", function(_id, e){
                                popup.show();
                            });
                            break
                        }
                    }

                },

                onContextMenuConfig:function(ev){
                    if (ev.area == "data") {
                        ev.data = [
                            { id:"custom", group:"myContext", value:"设置单元格格式" },
                            {$template: "Separator", id: 1557720224334},
                            { id:"hide-column", group:"myContext", value:"隐藏列" },
                            { id:"hide-row", group:"myContext", value:"隐藏行" },
                            {$template: "Separator", id: 1557720224335},
                            { id:"conditional-hide-column", group:"myContext", value:"条件隐藏列" },
                            { id:"conditional-hide-row", group:"myContext", value:"条件隐藏行" }
                        ];
                    } else if ( ev.area === 'row' ) {
                        ev.data = [{"id":"add","group":"row","value":"插入行"},{"id":"del","group":"row","value":"删除行"},
                            {"id":"row-height","group":"row","value":"行高"}];
                    } else if ( ev.area === 'column' ) {
                        ev.data = [{"id":"add","group":"column","value":"插入列"},{"id":"del","group":"column","value":"删除列"}];
                    }
                },

                onCommand: function(e) {
                    if (e.group === "myContext") {
                        if ("hide-row" == e.id) {
                            var that = this;
                            var area = this._table.getSelectArea();

                            this._conditional_hide_row = this._conditional_hide_row || {};

                            for (var i = area.start.row; i <= area.end.row; i++) {
                                that._conditional_hide_row[i] = "1==2";
                            }
                        }
                        if ("hide-column" == e.id) {
                            var that = this;
                            var area = this._table.getSelectArea();

                            this._conditional_hide_column = this._conditional_hide_column || {};

                            for (var i = area.start.column; i <= area.end.column; i++) {
                                that._conditional_hide_column[i] = "1==2";
                            }
                        }

                        // 条件隐藏行
                        if ("conditional-hide-row" == e.id) {
                            var that = this;
                            var area = this._table.getSelectArea();
                            var srow =  area.start.row;
                            var erow =  area.end.row;
                            var text = "";
                            this._conditional_hide_row = this._conditional_hide_row || {};
                            if ( srow === erow ){
                                text =  this._conditional_hide_row[srow] || "";
                            }


                            var conditionalHideRow =  webix.ui({
                                view: "ssheet-dialog",
                                head: "条件隐藏行",
                                position: "center",
                                width: 500,
                                move: !0,
                                body: {
                                    view: "form",
                                    id: "conditionalRowForm",
                                    borderless: !0,
                                    elements:[
                                        {
                                            cols:[
                                                {view: "label", label: "条件", width: 80},
                                                {view: "text", placeholder: "输入隐藏条件", id: "hide-row-conditional", value: text}
                                            ]
                                        }
                                    ]
                                },
                                on: {
                                    onSaveClick: function () {
                                        var conditional = this.gs["hide-row-conditional"].getValue() || "";

                                        for (var i = srow ; i <= erow ; i++) {
                                            that._conditional_hide_row[i] = conditional;
                                        }

                                        this.hide();
                                    },
                                    onCancelClick: function () {
                                        this.hide();
                                    },
                                    onHideClick: function () {
                                        this.hide();
                                    },
                                    onShow: function(){
                                        this.gs['hide-row-conditional'].focus();
                                    }

                                }
                            });

                            conditionalHideRow.show();
                        }

                        // 条件隐藏列
                        if ("conditional-hide-column" == e.id) {

                            var that = this;

                            var area = this._table.getSelectArea();

                            var scolumn =  area.start.column;
                            var ecolumn =  area.end.column;


                            var text = "";
                            this._conditional_hide_column = this._conditional_hide_column || {};
                            if ( scolumn === ecolumn ){
                               text =  this._conditional_hide_column[scolumn] || "";
                            }
                            

                           var conditionalHideColumn =  webix.ui({
                                view: "ssheet-dialog",
                                head: "条件隐藏列",
                                position: "center",
                                width: 500,
                                move: !0,
                                body: {
                                    view: "form",
                                    id: "conditionalColumnForm",
                                    borderless: !0,
                                    elements:[
                                        {
                                            cols:[
                                                {view: "label", label: "条件", width: 80},
                                                {view: "text", placeholder: "输入隐藏条件", id: "hide-column-conditional", value: text}
                                            ]
                                        }
                                    ]
                                },
                                on: {
                                    onSaveClick: function () {
                                        var conditional = this.gs["hide-column-conditional"].getValue() || "";
                                        for (var i = scolumn ; i <= ecolumn ; i++) {
                                            that._conditional_hide_column[i] = conditional;
                                        }
                                        this.hide();
                                    },
                                    onCancelClick: function () {
                                        this.hide();
                                    },
                                    onHideClick: function () {
                                        this.hide();
                                    },
                                    onShow: function(){
                                        this.gs["hide-column-conditional"].focus();
                                    }
                                }
                            });

                            conditionalHideColumn.show();
                        }
                    }
                    if(e.group==="row"){
                        if ("row-height" == e.id) {
                            var that = this;
                            var area = this._table.getSelectArea();
                            var srow =  area.start.row;
                            var erow =  area.end.row;
                            var text = "";
                            var RowHeightDialog =  webix.ui({
                                view: "ssheet-dialog",
                                head: "行高",
                                position: "center",
                                width: 500,
                                move: !0,
                                body: {
                                    view: "form",
                                    id: "RowHeightForm",
                                    borderless: !0,
                                    elements:[
                                        {
                                            cols:[
                                                {view: "label", label: "行高", width: 80},
                                                {view: "text", placeholder: "", id: "row-height-conditional", value: text}
                                            ]
                                        }
                                    ]
                                },
                                on: {
                                    onSaveClick: function () {
                                        var conditional = this.gs["row-height-conditional"].getValue() || "";
                                        for (var i = srow ; i <= erow ; i++) {
                                            that._table.setRowHeight(i,parseInt(conditional))
                                        }
                                        this.hide();

                                    },
                                    onCancelClick: function () {
                                        this.hide();
                                    },
                                    onHideClick: function () {
                                        this.hide();
                                    },
                                    onShow: function(){
                                        this.gs['row-height-conditional'].focus();
                                    }

                                }
                            });
                            RowHeightDialog.show();
                        }
                    }
                }
            },
            columnCount: 13,
            rowCount:13
        });

        // 注册函数名
        var promise =  webix.ajax().headers({
            "Content-type":"application/json"
        }).post("../../../reportparam/query", {});

        promise.then(function(data){
            var records = data.json().data.records || [];
            for (var i = 0; i < records.length; i++) {
                var  record =  records[i];
                $$("ssheet").registerMathMethod(record["csbm"], function(value){});
            }
        });
    });
</script>
</body>
</html>