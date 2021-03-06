function loadJS(url,success) {
    var domScript=document.createElement('script');
    domScript.src= url;
    success=success||function () {};
    domScript.onload=domScript.onreadystatechange=function () {
        if(!this.readyState|| 'loaded'===this.readyState||'complete'===this.readyState){
            success();
            this.onload=this.onreadystatechang=null;
            this.parentNode.removeChild(this);
        }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript);
}
function loadGrid(a) {
    "datagrid" == $.cookie("gridType") ? $("#" + $.cookie("gridId")).datagrid("load", {
        advanceFilter: JSON.stringify(a)
    }) : "treegrid" == $.cookie("gridType") && $("#" + $.cookie("gridId")).treegrid("load", {
        advanceFilter: JSON.stringify(a)
    })
}
function subString(a, b, c) {
    return void 0 != a ? a.substring(b, c) : ""
}
function loadMask() {
    var a = '<div id="Loading" class="loading-wrap">';
    a += '<div class="loading-content">',
        a += '<div class="loading-round">',
        a += "</div>",
        a += '<div class="loading-dot">',
        a += "</div>",
        a += "</div>",
        a += "</div>",
        $("body").append(a)
}
function hiddenMask() {
    $("#Loading").fadeOut("normal")
}
function showMask() {
    $("#Loading").fadeIn()
}
function selectAllOptions(a) {
    $(a + " option").attr("selected", !0)
}
function executeCallBackFun(functionStr, options) {
    if (void 0 != functionStr) {
        for (var handlerBeforeArr = functionStr.split("|"), handlerBeforeParamsArr = handlerBeforeArr[1].split(","), handlerBeforeParams = "", h = 0; h < handlerBeforeParamsArr.length; h++) handlerBeforeParams += handlerBeforeParamsArr[h].indexOf("options.") > -1 ? handlerBeforeParamsArr[h] + "," : '"' + handlerBeforeParamsArr[h] + '",';
        eval(handlerBeforeArr[0] + "(" + handlerBeforeParams.substr(0, handlerBeforeParams.length - 1) + ")")
    }
}
function isMultiArr(a) {
    if (!a) return !1;
    for (var b = 0; b < a.length; b++) return a[b] instanceof Array
}
function isMultiObj(a) {
    if (!a) return !1;
    for (var b = 0; b < a.length; b++) return "object" == typeof a[b]
}
function bytesToSize(a, b) {
    if (null == b && (b = 2), 0 === a) return "0 B";
    var c = 1024,
        d = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        e = Math.floor(Math.log(a) / Math.log(c));
    return (a / Math.pow(c, e)).toFixed(b) + " " + d[e]
}
function appendUrlParam(a, b) {
    return a.indexOf("?") == -1 ? a + "?" + b : a + "&" + b
}
function appendSourceUrlParam(a) {
    return a.indexOf("?") == -1 ? a + location.search : a + location.search.replace("?", "&")
}
function getCurrentDatetime(a) {
    var b = new Date;
    return timestamp2Datetime(b, a)
}
function timestamp2Datetime(a, b) {
    var c, d = new Date(a),
        e = d.getFullYear(),
        f = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1,
        g = d.getDate() < 10 ? "0" + d.getDate() : d.getDate(),
        h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours(),
        i = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(),
        j = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    return c = "YmdHis" == b ? e + "" + f + g + h + i + j : "Y-m-d H:i:s" == b ? e + "-" + f + "-" + g + " " + h + ":" + i + ":" + j : "Y-m-d" == b ? e + "-" + f + "-" + g : e + "-" + f + "-" + g + " " + h + ":" + i
}
function getUrl(a) {
    var b, c = window.location.pathname;
    return b = "controller" == a ? c.substring(0, c.lastIndexOf("/") + 1) : c
}
function getOptionsJson(a) {
    var b = a.data();
    return b = b.options ? 0 == b.options.indexOf("{") ? $.parseJSON(b.options.replace(/'/g, '"')) : strToJson("{" + b.options.replace(/'/g, '"') + "}") : {}
}
function setId(a, b) {
    return void 0 == b.id && (b.id = getRandomNumByDef()),
        a.id = b.id,
        b

}
function convertDateToFullDate(a) {
    return (a < 10 ? "0" : "") + a
}
function isNull(a) {
    return "" == a || void 0 == a || null == a
}
function getSelectedRowJson(a, b) {
    var c = {};
    if (a) for (var d = a.split(","), e = 0; e < d.length; e++) if (d[e].indexOf(":") == -1) c[d[e]] = b[d[e]];
    else {
        var f = d[e].split(":");
        c[f[0]] = b[f[1]]
    }
    return c
}
function setGridQueryParams(a, b, c) {
    var d = $("#" + a.id),
        e = d[a.type]("getSelected");
    if (e) {
        var f = getSelectedRowJson(a.param, e),
            g = {};
        $("#" + c)[b]("options").queryParams = $.extend({}, g, f)
    }
}
function setPanelQueryParams(a, b) {
    var c = $("#" + b.id),
        d = c[b.type]("getSelected");
    return d ? replaceUrlParamValueByBrace(a, d) : a
}
function param2JsonObj(a) {
    var b = {};
    if (a) for (var c = a.split(","), d = 0; d < c.length; d++) if (c[d].indexOf(":") == -1) b[c[d]] = c[d];
    else {
        var e = c[d].split(":");
        b[e[0]] = e[1]
    }
    return b
}
function strToJson(str) {
    var json = eval("(" + str + ")");
    return json
}
function jsonLength(a) {
    var b, c = 0;
    for (b in a) a.hasOwnProperty(b) && c++;
    return c
}
function getTimestamp() {
    return (new Date).getTime()
}
function getRandomNum(a, b) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * a + 1);
        case 2:
            return parseInt(Math.random() * (b - a + 1) + a);
        default:
            return 0
    }
}
function getRandomNumByDef() {
    return getRandomNum(1e5, 999999)
}
function arrayContain(a, b) {
    for (var c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1
}
function getTabWindow() {
    var a = null;
    if (gui.config.aloneUse) a = window;
    else {
        var b = parent.$("#index_tabs").tabs("getSelected");
        b && b.find("iframe").length > 0 && (a = b.find("iframe")[0].contentWindow)
    }
    return a
}
function showMask() {
    $('<div class="datagrid-mask"></div>').css({
        display: "block",
        width: "100%",
        height: $(window).height()
    }).appendTo("body"),
        $('<div class="datagrid-mask-msg"></div>').html("正在处理，请稍候...").appendTo("body").css({
            display: "block",
            left: ($(document.body).outerWidth(!0) - 190) / 2,
            top: ($(window).height() - 45) / 2
        })
}
function hideMask() {
    $(".datagrid-mask").remove(),
        $(".datagrid-mask-msg").remove()
}
function addTab(a) {
    var b = '<iframe src="' + a.url + '" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe>',
        c = $("#index_tabs"),
        d = {
            id: Math.random(),
            title: a.text,
            closable: "undefined" == typeof a.closable || a.closable,
            iconCls: a.iconCls ? a.iconCls : "fa fa-page",
            content: b,
            border: a.border || !1,
            fit: !0
        };
    if (c.tabs("exists", d.title)) c.tabs("select", d.title);
    else {
        var e = $.cookie("menuClickTime"),
            f = (new Date).getTime();
        f - e >= 1e3 ? ($.cookie("menuClickTime", (new Date).getTime()), c.tabs("myAdd", d)) : $.messager.show({
            title: "温馨提示",
            msg: "操作过快，请稍后重试！"
        })
    }
}
function getSelectedTabOpts(a) {
    var b = a.iTabs("getSelected"),
        c = b.panel("options");
    return c
}
function bindMenuClickEvent(a, b) {
    var c = a.closest(".gui-toolbar"),
        d = {};
    c.length > 0 && (d = getOptionsJson(c)),
        b = $.extend(!0, d, b);
    var e = {};
    return "openDialog" == b.event ? (e = {}, b.dialog.width = b.dialog.width ? b.dialog.width : 700, b.dialog.height = b.dialog.height ? b.dialog.height : 450, b = $.extend({}, b, e)) : "openTab" == b.event ? (e = {
        iconCls: "fa fa-th"
    }, b = $.extend(e, b)) : "openWindow" == b.event ? (e = {
        iconCls: "fa fa-link"
    }, b = $.extend(b, e)) : "edatagrid" == b.event ? (e = {
        iconCls: "fa fa-plus"
    }, b = $.extend(e, b)) : "doAjax" == b.event || "request" == b.event || ("delete" == b.event ? (e = {
        iconCls: "fa fa-trash"
    }, b = $.extend(b, e)) : "filter" == b.event ? (e = {
        iconCls: "fa fa-filter"
    }, b = $.extend(b, e)) : "search" == b.event ? (e = {
        iconCls: "fa fa-search"
    }, b = $.extend(b, e)) : "export" == b.event ? (e = {
        iconCls: "fa fa-cloud-download"
    }, b = $.extend(b, e)) : "import" == b.event && (e = {
        iconCls: "fa fa-cloud-upload",
        href: "/system/excel/excelImport"
    }, b = $.extend(b, e))),
        b
}
function openDialogAndloadDataByParentGrid(a) {
    var b = "",
        c = "";
    "object" == typeof a.parentGrid && (b = a.parentGrid.unselectedMsg, c = a.parentGrid.param, "datagrid" == a.parentGrid.type || "treegrid" == a.parentGrid.type);
    var d = getSelectedRowData(a.parentGrid.type, a.parentGrid.id);
    if (!d) return void $.messager.alert(gui.language.message.title.operationTips, a.parentGrid.unselectedMsg || gui.language.message.msg.selectParentGrid, gui.language.message.icon.warning);
    if (!a.dialog.beforeOpenCheckUrl || beforeOpenCheck(replaceUrlParamValueByBrace(a.dialog.beforeOpenCheckUrl, d))) {
        var e = $("#" + a.dialog.id);
        e.iDialog(a.dialog);
        var f = a.dialog.href,
            g = f;
        if (a.dialog.href.indexOf("{") != -1) {
            if (a.dialog.href.indexOf("{parent.") != -1 && (g = replaceUrlParamValueByBrace(appendSourceUrlParam(f), d, "parent")), g.indexOf("{") != -1) {
                var h = getSelectedRowData(a.grid.type, a.grid.id);
                g = replaceUrlParamValueByBrace(appendSourceUrlParam(g), h)
            }
            e.iDialog({
                href: g
            }),
                e.iDialog("open")
        } else e.iDialog("open")
    }
}
function openDialogAndloadDataByUrl(a) {
    var b = getSelectedRowData(a.grid.type, a.grid.id);
    if(a.grid.type=='treegrid'&&!b){
        b=getCheckedRowsData(a.grid.type, a.grid.id)
    }
    if (!b) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectSelfGrid, gui.language.message.icon.warning);
    if (!a.dialog.beforeOpenCheckUrl || beforeOpenCheck(replaceUrlParamValueByBrace(a.dialog.beforeOpenCheckUrl, b))) {
        var c = $("#" + a.dialog.id);
        var  flag=true;
        if(a.dialog.tag=='edit'&&a.dialog.grid&&typeof(a.dialog.grid["editEnable"])=='function'){
            var  editEnable =a.dialog.grid["editEnable"](b);
            if( editEnable!=null && editEnable==false ){
                $.messager.alert("提示信息", "非初始状态不允许操作！");
                flag=false;
            }
        }
        if(!flag){
            return
        }
        a.dialog.edit=b;
        c.iDialog(a.dialog);
        var d = a.dialog.href;
        if (a.dialog.href) {
            // var e = replaceUrlParamValueByBrace(appendSourceUrlParam(d), b);
            /*if(a.dialog.tag=='copy'){
                d=b.dialog.href.substring(0,b.dialog.href.length-4)+'copy';
            }*/
            c.dialog({
                href: d,
            });
            c.dialog("open");

        } else c.dialog("open")
    }
}
function dialogHandler(a) {
    "loadData" == a.component ? editHandler(a) : "loadParentData" == a.action ? addChildHandler(a) : addHandler(a)
}
function addHandler(a) {
    var b = (getUrl("controller"), {
        gridId: "datagrid"
    });
    a = $.extend(b, a);
    var c = $("#" + a.dialogId);
    c.dialog({
        iconCls: "fa fa-plus",
        toolbar: "#" + a.dialogId + "-toolbar",
        buttons: "#" + a.dialogId + "-buttons"
    }),
    void 0 != a.dialogHref && c.dialog("refresh", a.dialogHref),
        c.dialog("open")
}
function authCheck(a) {
    if ("" == gui.config.authUrl) return !0;
    var b = !1;
    return $.ajax({
        type: "post",
        url: "/system/authAccess/getAuthByRoleIdAndUrl",
        data: {
            url: a
        },
        async: !1,
        success: function (a) {
            if (0 == a) {
                var c = {
                    title: gui.language.message.title.operationTips,
                    msg: gui.language.message.msg.permissionDenied,
                    icon: gui.language.message.icon.warning
                };
                $.messager.alert(c),
                    b = !1
            } else b = !0
        }
    }),
        b
}
function beforeOpenCheck(a) {
    var b = !1;
    return $.ajax({
        type: "get",
        url: a,
        async: !1,
        success: function (a) {
            if (300 == a.statusCode) {
                var c = {
                    title: gui.language.message.title.operationTips,
                    msg: a.message
                };
                $.messager.alert(c),
                    b = !1
            } else b = !0
        }
    }),
        b
}
function addChildHandler(a) {
    var b = $("#" + a.parentGridId).treegrid("getSelected") ? $("#" + a.parentGridId).treegrid("getSelected") : $("#" + a.parentGridId).datagrid("getSelected");
    if (b) {
        var c = getUrl("controller"),
            d = {
                gridId: "datagrid",
                dialogHref: a.dialogHref ? a.dialogHref : c + "edit"
            };
        a = $.extend(d, a);
        var e = $("#" + a.dialogId);
        e.dialog({
            iconCls: "fa fa-plus",
            toolbar: "#" + a.dialogId + "-toolbar",
            buttons: "#" + a.dialogId + "-buttons"
        }),
        void 0 != a.dialogHref && e.dialog("refresh", a.dialogHref),
            e.dialog("open"),
            setTimeout(function () {
                $("#" + a.dialogId + " iframe").each(function (a) {
                    this.contentWindow.document.body.innerHTML = ""
                });
                var c = {};
                if (a.gridParam) for (var d = a.gridParam.split(","), f = 0; f < d.length; f++) c[d[f]] = b[d[f]];
                c.puuid = b.uuid,
                    e.form("load", c)
            }, 500)
    } else $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectParentGrid, gui.language.message.icon.warning)
}
function editHandler(a) {
    var b = getUrl("controller"),
        c = {
            gridId: "datagrid",
            dialogHref: a.dialogHref ? a.dialogHref : b + "edit",
            dialogUrl: a.dialogUrl ? a.dialogUrl : b + "getDetailByUuid?uuid={uuid}"
        };
    a = $.extend(c, a),
        loadDialogData(a)
}
function getCheckedRowsData(a, b) {
    return $("#" + b).treegrid("getChecked")
}
function getSelectedRowData(a, b) {
    return getRowsDataBySelected(a, b, !1)
}
function getSelectedRowsData(a, b) {
    return getRowsDataBySelected(a, b, !0)
}
function getRowsDataBySelected(a, b, c) {
    var d;
    return "datagrid" == a ? d = c ? $("#" + b).datagrid("getSelections") : $("#" + b).datagrid("getSelected") : "treegrid" == a && (d = c ? $("#" + b).treegrid("getSelections") : $("#" + b).treegrid("getSelected")),
        d
}
function getRowsDataBySelected2(a, b) {
    var c, d;
    return "object" == typeof a.parentGrid ? (d = a.parentGrid.id, "datagrid" == a.parentGrid.type ? c = b ? $("#" + d).datagrid("getSelections") : $("#" + d).datagrid("getSelected") : "treegrid" == a.parentGrid.type && (c = b ? $("#" + d).treegrid("getSelections") : $("#" + d).treegrid("getSelected"))) : "object" == typeof a.grid && (d = a.grid.id, "datagrid" == a.grid.type ? c = b ? $("#" + d).datagrid("getSelections") : $("#" + d).datagrid("getSelected") : "treegrid" == a.grid.type && (c = b ? $("#" + d).treegrid("getSelections") : $("#" + d).treegrid("getSelected"))),
        c
}
function refreshGrids(a) {
    if ("object" == typeof a) for (var b = 0; b < a.length; b++) {
        var c = a[b];
        !
            function (a) {
                setTimeout(function () {
                    refreshGrid(c.type, c.id, c.clearQueryParams)
                }, 100 * a)
            }(b)
    }
}
function refreshGrid(a, b, c) {
    var d = $("#" + b);
    if ("datagrid" == a) 1 == c && d[a]({
        queryParams: {
            clearQueryParams: ""
        }
    }),
        d[a]("reload");
    /*else if ("treegrid" == a) for (var e = d[a]("getRoot"), f = d[a]("getData", e), g = 0; g < f.length; g++) d[a]("reload", f[g].id);*/
    else if("treegrid" == a&&c){
        var f={
            url:'',
            ajaxData:{}
        };
        if(c['dialog']&&c['dialog']['module'])f.url=c.dialog.module;
        else if(c['grid']&&c['grid']['module'])f.url=c.grid.module;
        var data= doAjax(f);
        if(data.queryParms){
            d[a]('loadData', transDataGUI(data.queryParms,c.grid.childId,c.grid.parentId,'children'))
        }

    }
    /*    d[a]("unselectAll"),
            d[a]("uncheckAll")*/
}
function transDataGUI(a, idStr, pidStr, chindrenStr){
    var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;
    for(; i < len; i++){
        hash[a[i][id]] = a[i];
    }
    for(; j < len; j++){
        var aVal = a[j], hashVP = hash[aVal[pid]];
        if(hashVP){
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(aVal);
        }else{
            r.push(aVal);
        }
    }
    return r;
}
function GridRefresh(a,b,c){
    var d = $("#" + b);
    var _resultHandler = function(result){
        // d[a]('clientPaging', {data: result.data.records||[]});
        d[a]('loadData', result.data.records||[]);
    };
    HTTP.post(c.grid.url, c.grid.params, _resultHandler);

}
function loadGridByQueryParm(a, b, c) {
    "datagrid" == a ? ($("#" + b).datagrid("load", c), $("#" + b).datagrid("unselectAll")) : "treegrid" == a && ($("#" + b).treegrid("load", c), $("#" + b).treegrid("unselectAll"))
}
function loadGridByQueryParmClass(a, b, c) {
    "datagrid" == a ? ($("#" + b).find('.toolbar-table').datagrid("load", c), $("#" + b).find('.toolbar-table').datagrid("unselectAll")) : "treegrid" == a && ($("#" + b).find('.toolbar-table').treegrid("load", c), $("#" + b).find('.toolbar-table').treegrid("unselectAll"))
}
function doAjaxHandler(a) {
    var b = $.data(a, "menubutton").options,
        c = {
            gridId: "datagrid",
            iconCls: "fa fa-cog",
            confirmMsg: gui.language.message.msg.confirmMsg,
            grid: {
                reload: !0,
                uncheckedMsg: gui.language.message.msg.checkSelfGrid
            }
        };
    if (b = $.extend(!0, c, b), b.url = appendSourceUrlParam(b.url), b.url.indexOf("{parent") != -1) {
        var d = getSelectedRowData(b.parentGrid.type, b.parentGrid.id);
        if (!d) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectParentGrid, gui.language.message.icon.warning);
        // b.url = replaceUrlParamValueByBrace(b.url, d, "parent")
    }

    if ("object" == typeof b.grid) {
        var e = $("#" + b.grid.id).iDatagrid("options");
        if(b.grid.singleSelect){
            $("#" + b.grid.id).iDatagrid("singleSelectedAjax", b)
        }else{
            1 == b.grid.multiCheck || void 0 != b.grid.uncheckedMsg ? $("#" + b.grid.id).iDatagrid("multiCheckedAjax", b) : 0 == e.singleSelect ? $("#" + b.grid.id).iDatagrid("multiSelectedAjax", b) : $("#" + b.grid.id).iDatagrid("singleSelectedAjax", b)
        }

    }
}
function requestHandler(a) {
    var b = $.data(a, "menubutton").options;
    if (b.url = appendSourceUrlParam(b.url), "object" == typeof b.grid) {
        var c = getSelectedRowData(b.grid.type, b.grid.id);
        if (null == c) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectSelfGrid, gui.language.message.icon.warning);
        b.newUrl = replaceUrlParamValueByBrace(b.url, c)
    } else b.newUrl = b.url;
    window.location.href = b.newUrl
}
function deleteHandler(a) {
    var b = $.data(a, "menubutton").options,
        c = {
            gridId: "datagrid",
            url: b.url ? appendSourceUrlParam(b.url) : getUrl("controller") + "delete" + location.search
        };
    b = $.extend(c, b);
    var d = getCheckedRowsData(b.grid.type, b.grid.id);
    return 0 == d.length ? void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.checkSelfGrid, gui.language.message.icon.warning) : void $.messager.confirm(gui.language.message.title.confirmTips, gui.language.message.msg.confirmDelete, function (a) {
        a && (b.ajaxData = {
            uuid: getMultiRowsFieldValue(d, "uuid"),
            uuids: getMultiRowsFieldValue(d, "uuid")
        }, doAjax(b) && refreshGrid(b.grid.type, b.grid.id))
    })
}
function filterHandler(a) {
    var b = $.data(a, "menubutton").options;
    if ("object" == typeof b.grid) {
        var c = b.grid.id,
            d = $("#" + c).datagrid("options"),
            e = d.filter ? d.filter : [];
        "datagrid" == b.grid.type ? $(".datagrid-filter-row").length > 0 ? $("#" + c).datagrid("disableFilter") : $("#" + c).datagrid("enableFilter", e) : "treegrid" == b.grid.type && ($(".datagrid-filter-row").length > 0 ? $("#" + c).treegrid("disableFilter") : $("#" + c).treegrid("enableFilter", e))
    }
}
function searchHandler(a) {
    var b = $.data(a, "menubutton").options;
    "object" == typeof b.grid && getColumnsNameAndField(b.grid.type, b.grid.id);
    var c = '<table id="advanceSearchTable" class="editTable">';
    c += "<tr>",
        c += '<td style="font-weight: bold;">方式</td>',
        c += '<td style="font-weight: bold;">左括号</td>',
        c += '<td style="font-weight: bold;">字段</td>',
        c += '<td style="font-weight: bold;">条件</td>',
        c += '<td style="font-weight: bold;">数值</td>',
        c += '<td style="font-weight: bold;">右括号</td>',
        c += '<td style="font-weight: bold;">操作</td>',
        c += "</tr>",
        c += "<tr>",
        c += '<td><input type="text" class="join" name="join"></td>',
        c += '<td><input type="text" class="lb" name="lb"></td>',
        c += '<td><input type="text" class="field" name="field"></td>',
        c += '<td><input type="text" class="op" name="op"></td>',
        c += '<td><input type="text" class="value" name="value"></td>',
        c += '<td><input type="text" class="rb" name="rb"></td>',
        c += '<td><a id="addCondition" href="javascript:void(0)"></a>',
        c += "</td>",
        c += "</tr>",
        c += "</table>";
    var d = {
        dialog: {
            id: "advanceSearchDialog",
            title: "组合查询",
            width: 700,
            height: 300,
            modal: !1,
            collapsible: !0,
            minimizable: !1,
            maximized: !1,
            resizable: !0,
            closed: !1,
            closable: !0,
            zIndex: 10,
            iconCls: "fa fa-search",
            content: c,
            buttons: "#advanceSearchDialog-buttons",
            onOpen: function () {
                $(this).trigger(gui.eventType.initUI.advanceSearchForm)
            }
        }
    };
    b = $.extend(d, b);
    var e = '<form id="advanceSearchDialog"></form>';
    e += '<div id="advanceSearchDialog-buttons" style="display:none">',
        e += '<a href="#" id="resetAdvanceSearchForm" data-toggle="gui-linkbutton" data-options="iconCls:\'icon-reload\',btnCls:\'gui-btn\'">清空</a>',
        e += '<a href="#" id="submitAdvanceSearchForm" data-toggle="gui-linkbutton" data-options="iconCls:\'icon-search\'">查询</a>',
        e += '<a href="#" id="closeAdvanceSearchDialog" data-toggle="gui-linkbutton" data-options="btnCls:\'gui-btn-danger\'">关闭</a>',
        e += "</div>",
        $("body").append(e);
    var f = $("#" + b.dialog.id);
    f.dialog(b.dialog),
        $("#resetAdvanceSearchForm").linkbutton({
            iconCls: "fa fa-refresh",
            onClick: function () {
                var a = [];
                loadGrid(a)
            }
        }),
        $("#submitAdvanceSearchForm").linkbutton({
            iconCls: "fa fa-search",
            btnCls: "gui-btn-warm",
            onClick: function () {
                for (var a = [], c = $("#" + b.dialog.id).serializeArray(), d = c.length / 6, e = 0; e < d; e++) {
                    var f = (c[6 * e + 0].name, c[6 * e + 0].value),
                        g = (c[6 * e + 1].name, c[6 * e + 1].value),
                        h = (c[6 * e + 2].name, c[6 * e + 2].value),
                        i = (c[6 * e + 3].name, c[6 * e + 3].value),
                        j = (c[6 * e + 4].name, c[6 * e + 4].value),
                        k = (c[6 * e + 5].name, c[6 * e + 5].value);
                    a.push({
                        join: f,
                        lb: g,
                        field: h,
                        op: i,
                        value: j,
                        rb: k
                    })
                }
                loadGrid(a)
            }
        }),
        $("#closeAdvanceSearchDialog").linkbutton({
            iconCls: "fa fa-close",
            onClick: function () {
                $("#" + b.dialog.id).dialog("close")
            }
        });
    var g = "<tr>";
    g += '<td><input type="text" class="join" name="join"></td>',
        g += '<td><input type="text" class="lb" name="lb"></td>',
        g += '<td><input type="text" class="field" name="field"></td>',
        g += '<td><input type="text" class="op" name="op"></td>',
        g += '<td><input type="text" class="value" name="value"></td>',
        g += '<td><input type="text" class="rb" name="rb"></td>',
        g += '<td><a class="deleteCondition" href="javascript:void(0)"></a></td></tr>',
        $("#addCondition").on("click", function () {
            $("#advanceSearchTable").append(g),
                $(this).trigger(gui.eventType.initUI.advanceSearchForm)
        })
}
function queryHandler(a) {
    var b = $.data(a, "menubutton").options;
    var c={};
    var d=$(a).closest('.gui-div').attr('id');
    if(b.form){
        if(b.form.class){
            c=$(a).closest('.gui-toolbar').find('.'+b.form.class).serializeObject();
            loadGridByQueryParmClass(b.grid.type, d, c);
        }else{
            c = $("#" + b.form.id).serializeObject();
            loadGridByQueryParm(b.grid.type, b.grid.id, c)
        }

    }

}
function importHandler(a) {
    var b = $.data(a, "menubutton").options;
    if ("object" == typeof b.grid) {
        var c = '<table id="importTable" class="editTable">';
        c += "<tr>",
            c += '<td width="450"><input type="text" class="importFilePath" name="filePath"></td>',
            c += '<td width="100"><button type="button" class="layui-btn" id="importUpBtn"><i class="layui-icon"></i>上传文件</button></td>',
            c += "</td>",
            c += "</tr>",
            c += "</table>";
        var d = {
            dialog: {
                id: "importDialog",
                title: "数据导入",
                width: 700,
                height: 200,
                modal: !1,
                collapsible: !0,
                minimizable: !1,
                maximized: !1,
                resizable: !0,
                closed: !1,
                closable: !0,
                zIndex: 10,
                iconCls: "fa fa-cloud-upload",
                content: c,
                buttons: "#importDialog-buttons",
                onOpen: function () {}
            }
        };
        b = $.extend(d, b);
        var e = '<form id="importDialog"></form>';
        e += '<div id="importDialog-buttons" style="display:none">',
            e += '<a href="#" id="submitImportForm" data-toggle="gui-linkbutton" data-options="iconCls:\'fa fa-check-circle\'">开始导入</a>',
            e += '<a href="#" id="closeImportDialog" data-toggle="gui-linkbutton" data-options="btnCls:\'gui-btn-danger\'">关闭</a>',
            e += "</div>",
            $("body").append(e);
        var f = $("#" + b.dialog.id);
        f.dialog(b.dialog);
        var g = $(".importFilePath");
        g.textbox({
            width: 450,
            readonly: !0
        }),
            layui.use("upload", function () {
                var a = layui.upload;
                a.render({
                    elem: "#importUpBtn",
                    url: b.uploadUrl,
                    accept: "file",
                    before: function (a) {
                        layer.load()
                    },
                    done: function (a, b, c) {
                        200 == a.statusCode ? g.textbox("setValue", a.filePath) : layer.msg(a.msg, {
                            icon: 5
                        }),
                            layer.closeAll("loading")
                    },
                    error: function () {
                        layer.closeAll("loading")
                    }
                })
            }),
            $("#submitImportForm").linkbutton({
                iconCls: "fa fa-check-circle",
                btnCls: "gui-btn-normal",
                onClick: function () {
                    var a = $("#" + b.dialog.id).serialize(),
                        c = getColumnsNameAndField(b.grid.type, b.grid.id),
                        d = {};
                    d.ajaxData = a + "&colName=" + c.colName + "&fieldName=" + c.fieldName,
                        d.url = b.url;
                    var e = doAjax(d);
                    200 == e.statusCode && ($("#" + b.dialog.id).dialog("close"), refreshGrid(b.grid.type, b.grid.id)),
                        showMessage(e)
                }
            }),
            $("#closeImportDialog").linkbutton({
                iconCls: "fa fa-close",
                onClick: function () {
                    $("#" + b.dialog.id).dialog("close")
                }
            })
    }
}
function uploadHandler(a) {
    var b = $.data(a, "menubutton").options;
    if ("object" == typeof b.grid) {
        var c = '<div id="uploadGrid-toolbar" style="margin:2px;"><button type="button" class="layui-btn layui-btn-normal" id="selectFile">选择文件</button><button type="button" class="layui-btn" id="startUp" style="margin-left: 5px;"><i class="layui-icon">&#xe652;</i>开始上传</button><button type="button" class="layui-btn layui-btn-danger" id="removeFi" style="margin-left: 5px;"><i class="layui-icon">&#x1007;</i>移除文件</button></div>',
            d = '<form id="upDialog">' + c + '<table id="uploadGrid"></table></form>';
        d += '<div id="upDialog-buttons" style="display:none">',
            d += '<a href="#" id="closeUpDialog">关闭</a>',
            d += "</div>",
            $("body").append(d);
        var e = {
            dialog: {
                id: "upDialog",
                title: "文件上传",
                width: 900,
                height: 500,
                modal: !1,
                collapsible: !0,
                minimizable: !1,
                maximized: !1,
                resizable: !0,
                closed: !1,
                closable: !0,
                zIndex: 10,
                iconCls: "fa fa-cloud-upload",
                buttons: "#upDialog-buttons",
                onOpen: function () {}
            }
        };
        b = $.extend(e, b);
        var f = $("#" + b.dialog.id);
        f.dialog(b.dialog),
            upfileGrid = $("#uploadGrid").datagrid({
                fit: !0,
                fitColumns: !0,
                rownumbers: !0,
                nowrap: !0,
                idField: "fileId",
                pagination: !1,
                toolbar: "uploadGrid-toolbar",
                columns: [
                    [{
                        field: "ck",
                        checkbox: !0
                    },
                        {
                            field: "fileId",
                            title: "fileId",
                            hidden: !0
                        },
                        {
                            field: "fileName",
                            title: "文件名称",
                            width: 100
                        },
                        {
                            field: "fileSize",
                            title: "文件大小",
                            width: 30
                        },
                        {
                            field: "progress",
                            title: "上传进度",
                            width: 180,
                            fixed: !0,
                            formatter: function (a, b) {
                                var c = '<div class="gui-progressbar progressbar" style="width: 170px; height: 20px;" value="' + a + '" text="' + a + '%"><div class="progressbar-text" style="width: 170px; height: 20px; line-height: 20px;">' + a + '%</div><div class="progressbar-value" style="width: ' + a + '%; height: 20px; line-height: 20px;"><div class="progressbar-text" style="width: 170px; height: 20px; line-height: 20px;">' + a + "%</div></div></div>";
                                return c
                            }
                        },
                        {
                            field: "fileState",
                            title: "上传状态",
                            width: 20
                        }]
                ]
            }),
            layui.use("upload", function () {
                var a = layui.jquery,
                    c = layui.upload;
                a("#fileList"),
                    c.render({
                        elem: "#selectFile",
                        url: b.uploadUrl || "upload",
                        accept: b.accept || "file",
                        multiple: !0,
                        auto: !1,
                        bindAction: "#startUp",
                        choose: function (a) {
                            a.pushFile();
                            a.preview(function (a, b, c) {
                                var d = bytesToSize(b.size),
                                    e = {
                                        fileId: b.id,
                                        fileName: b.name,
                                        fileSize: d,
                                        progress: 0,
                                        fileState: "等待上传"
                                    };
                                upfileGrid.datagrid("insertRow", {
                                    index: 0,
                                    row: e
                                })
                            })
                        },
                        done: function (a, b, c) {
                            if (200 != a.statusCode) this.error(b, c);
                            else for (var d = upfileGrid.datagrid("getRows"), e = 0; e < d.length; e++) upfileGrid.datagrid("updateRow", {
                                index: upfileGrid.datagrid("getRowIndex", d[e]),
                                row: {
                                    progress: 100..toFixed(2)
                                }
                            }),
                                upfileGrid.datagrid("updateRow", {
                                    index: upfileGrid.datagrid("getRowIndex", d[e]),
                                    row: {
                                        fileState: "上传成功"
                                    }
                                })
                        },
                        error: function (a, b) {
                            this.error(a, b)
                        }
                    })
            });
        var g = function () {
            for (var a = upfileGrid.datagrid("getSelections"), b = [], c = 0; c < a.length; c++) b.push(a[c]);
            for (var d = 0; d < b.length; d++) {
                var e = upfileGrid.datagrid("getRowIndex", b[d]);
                upfileGrid.datagrid("deleteRow", e)
            }
            upfileGrid.datagrid("clearSelections")
        };
        $("#removeFi").on("click", g),
            $("#closeUpDialog").linkbutton({
                iconCls: "fa fa-close",
                btnCls: "gui-btn-danger",
                onClick: function () {
                    $("#" + b.dialog.id).dialog("close")
                }
            })
    }
}
function edatagridHandler(a) {
    var b = $.data(a, "menubutton").options;
    "addRow" == b.type && $("#" + b.grid.id).edatagrid("addRow", 0),
    "saveRow" == b.type && $("#" + b.grid.id).edatagrid("saveRow"),
    "cancelRow" == b.type && $("#" + b.grid.id).edatagrid("cancelRow"),
    "destroyRow" == b.type && $("#" + b.grid.id).edatagrid("destroyRow")
}
function customHandler(a){
    var b = $.data(a, "menubutton").options;
}
function getColumnsNameAndField(a, b) {
    var c = [],
        d = [],
        e = [],
        f = [];
    if ("datagrid" == a) {
        c = $("#" + b).datagrid("getColumnFields", !0),
            d = $("#" + b).datagrid("getColumnFields"),
            e = c.concat(d);
        for (var g = 0; g < e.length; g++) {
            var h = $("#" + b).datagrid("getColumnOption", e[g]);
            f.push(h.title)
        }
    } else if ("treegrid" == a) {
        c = $("#" + b).treegrid("getColumnFields", !0),
            d = $("#" + b).treegrid("getColumnFields"),
            e = c.concat(d);
        for (var i = 0; i < e.length; i++) {
            var h = $("#" + b).treegrid("getColumnOption", e[i]);
            f.push(h.title)
        }
    }
    var j = f.join(",").replace(/,操作/g, "").replace(/操作,/g, ""),
        k = e.join(",").replace(/,handle/g, "").replace(/handle,/g, "");
    $.cookie("gridId", b),
        $.cookie("gridType", a),
        $.cookie("colNameStr", j),
        $.cookie("fieldNameStr", k);
    var l = {};
    return l.colName = j,
        l.fieldName = k,
        l
}
function exportHandler(a) {
    var b = $.data(a, "menubutton").options,
        c = getUrl("controller"),
        d = {
            gridId: "datagrid",
            excelTitle: parent.$("#index_tabs").tabs("getSelected").panel("options").title + "_导出数据_" + getCurrentDatetime("YmdHis"),
            url: b.url ? b.url : c + "exportExcel"
        };
    b = $.extend(!0, d, b);
    var e, f, g, h, i, j = [],
        k = [];
    if ("object" == typeof b.grid) if (e = b.grid.id, "datagrid" == b.grid.type) {
        f = $("#" + e).datagrid("getColumnFields", !0),
            g = $("#" + e).datagrid("getColumnFields"),
            h = f.concat(g);
        for (var l = 0; l < h.length; l++) i = $("#" + e).datagrid("getColumnOption", h[l]),
            j.push(i.title),
            1 == i.hidden || 1 == i.checkbox ? k.push(!0) : k.push(!1)
    } else if ("treegrid" == b.grid.type) {
        f = $("#" + e).treegrid("getColumnFields", !0),
            g = $("#" + e).treegrid("getColumnFields"),
            h = f.concat(g);
        for (var m = 0; m < h.length; m++) i = $("#" + e).treegrid("getColumnOption", h[m]),
            j.push(i.title),
            1 == i.hidden || 1 == i.checkbox ? k.push(!0) : k.push(!1)
    }
    for (var n = 0; n < k.length; n++) k[n] && (j.splice(n, 1), h.splice(n, 1), k.splice(n, 1), n--);
    var o = j.join(",").replace(/,操作/g, "").replace(/操作,/g, ""),
        p = h.join(",").replace(/,handle/g, "").replace(/handle,/g, "");
    b.ajaxData = {
        excelTitle: b.excelTitle,
        colName: o,
        fieldName: p
    },
        window.location.href = b.url + "?excelTitle=" + b.excelTitle + "&colName=" + o + "&fieldName=" + p
}
function redoHandler() {
    $(options.gridId).datagrid("rejectChanges"),
        $(options.gridId).datagrid("unselectAll")
}
function doAjax(a) {
    var b = {},
        c = {};
    if ( a.ajaxData!=null ){
        if ( typeof  a.ajaxData == 'object' ){
            a.ajaxData = JSON.stringify( a.ajaxData);
        }
    }
    return a = $.extend(c, a),
        $.ajax({
            url: a.url,
            type: "post",
            data: a.ajaxData,
            dataType: "json",
            contentType:'application/json;charset=utf-8',
            async: !1,
            beforeSend: function () {
                $.messager.progress({
                    text: "正在操作..."
                })
            },
            success: function (c, d, e) {
                $.messager.progress("close");
                if(c['success']){
                    if(c.data){
                        if(c.data.records){
                            b.queryParms=c.data.records;
                        }else{
                            b.queryParms=c.data;
                        }
                    }
                    b.statusCode = 200, b.title = "操作提示", b.message = c['message']||"操作成功！";
                }else{
                    if(c.data.records){
                        b.queryParms=c.data.records;
                    }
                    b.statusCode =400, b.title = "操作提示", b.message = c['message']||"操作失败！";
                }
                /*refreshGrids(a.reload);
                1 == c.statusCode || 100 == c.statusCode || 200 == c.statusCode
                    ? (b.statusCode = 200, b.title = c.title, b.message = c.message)
                    : (1 == c ? (b.statusCode = 200, b.title = "操作提示", b.message = "操作成功！") : (b.statusCode = 300, b.title = c.title, b.message = c.message))*/


            },
            error:function (c,d) {
                $.messager.progress("close");
                $.messager.alert('error')
            }
        }),
        b
}
function setDialogHrefKeyValue(a, b, c) {
    var d = b.split(","),
        e = c.split(","),
        f = $(a).dialog("options").href,
        g = "";
    for (i = 0; i < d.length; i++) f.indexOf("?") > 0 ? f.indexOf(d[i] + "=" + e[i]) == -1 && (g += "&" + d[i] + "=" + e[i]) : 0 == i ? g = "?" + d[i] + "=" + e[i] : g += "&" + d[i] + "=" + e[i];
    $(a).dialog("options").href = f + g
}
function clearDialogHrefKeyValue(a, b) {
    var c = b.split(","),
        d = $(a).dialog("options").href;
    if (d.indexOf("?") > 0) {
        var e = "",
            f = d.substring(0, d.indexOf("?") + 1),
            g = d.substring(d.indexOf("?") + 1),
            h = g.split("&");
        for (i = 0; i < h.length; i++) for (j = 0; j < c.length; j++) h[i].indexOf(c[j] + "=") >= 0 && h.remove(i);
        1 == h.length ? e = h[0] : h.length > 1 && (e = h.join("&"));
        var k = "";
        k = f + e;
        var l = k.substring(k.length - 1);
        "?" == l && (k = k.substring(0, k.length - 1))
    } else k = d;
    $(a).dialog("options").href = k
}
function msgFn(a) {
    var b = {},
        c = "";
    "object" == typeof a ? (c = a.code, b = {
        title: a.title,
        msg: a.message
    }) : (c = a, b = 1 == a ? {
        title: "温馨提示",
        msg: "操作成功"
    } : {
        title: "温馨提示",
        msg: "操作失败！未知错误，请重试！"
    }),
        !(1 != c && 100 != c && 200 != c || 1 != c && 200 != c) ? $.messager.show(b) : $.messager.alert(b)
}
function showMessage(a) {
    var b = {},
        c = "";
    "object" == typeof a ? (c = a.statusCode, void 0 == a.icon && (a.icon = gui.language.message.icon.info), b = {
        showType: gui.language.message.showType.slide,
        title: a.title,
        msg: a.message,
        icon: a.icon
    }) : (c = a, b = 1 == a ? {
        showType: gui.language.message.showType.slide,
        title: gui.language.message.title.operationTips,
        msg: gui.language.message.msg.success,
        icon: gui.language.message.icon.info
    } : {
        showType: gui.language.message.showType.slide,
        title: gui.language.message.title.operationTips,
        msg: gui.language.message.msg.failed,
        icon: gui.language.message.icon.error
    }),
        !(1 != c && 100 != c && 200 != c || 1 != c && 200 != c) ? (b.timeout = 1e3, $.messager.show(b)) : $.messager.alert(b)
}
function isExistBrace(a) {
    return a.indexOf("{") >= 0
}
function replaceUrlParamValueByBrace(a, b, c) {
    var d = a;
    if (a) {
        var e = isMultiObj(b) ? b[0] : b,
            f = isNull(c) ? "" : c + ".",
            g = new RegExp("{" + f + "(.*?)}", "g"),
            h = a.match(g);
        if (h.length > 0) for (var i = 0; i < h.length; i++) {
            var j = h[i].replace("{" + f, "").replace("}", "");
            d = "multiple" == c ? d.replace(h[i], getMultiRowsFieldValue(b, j)) : d.replace(h[i], e[j])
        }
    }
    return d
}
function convertParamValue2Object(a, b, c) {
    var d = a;
    if (a && a.indexOf("{") >= 0) {
        var e = {},
            f = isMultiObj(b) ? b[0] : b,
            g = isNull(c) ? "" : c + ".",
            h = new RegExp("{" + g + "(.*?)}", "g"),
            i = a.match(h);
        if (i.length > 0) for (var j = 0; j < i.length; j++) {
            var k = i[j].replace("{" + g, "").replace("}", "");
            "multiple" == c ? e[k] = d.replace(i[j], getMultiRowsFieldValue(b, k)) : e[k] = d.replace(i[j], f[k])
        }
    }
    return e
}
function convertParamObj2ObjData(a, b) {
    var c, d, e = {};
    for (c in a) d = a[c],
        isMultiObj(b) ? e[c] = getMultiRowsFieldValue(b, d) : gui.config.singleQuotesParam ? e[c] = "'" + b[d] + "'" : e[c] = b[d];
    return e
}
function getMultiRowsFieldValue(a, b) {
    for (var c = [], d = 0; d < a.length; d++) gui.config.singleQuotesParam ? c.push("'" + a[d][b] + "'") : c.push(a[d][b]);
    return c.join(",")
}!
    function (a) {
        a.easyui = {
            indexOfArray: function (a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) if (void 0 == c) {
                    if (a[d] == b) return d
                } else if (a[d][b] == c) return d;
                return -1
            },
            removeArrayItem: function (a, b, c) {
                if ("string" == typeof b) {
                    for (var d = 0, e = a.length; d < e; d++) if (a[d][b] == c) return void a.splice(d, 1)
                } else {
                    var f = this.indexOfArray(a, b);
                    f != -1 && a.splice(f, 1)
                }
            },
            addArrayItem: function (a, b, c) {
                var d = this.indexOfArray(a, b, c ? c[b] : void 0);
                d == -1 ? a.push(c ? c : b) : a[d] = c ? c : b
            },
            getArrayItem: function (a, b, c) {
                var d = this.indexOfArray(a, b, c);
                return d == -1 ? null : a[d]
            },
            forEach: function (a, b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e]);
                for (; d.length;) {
                    var f = d.shift();
                    if (0 == c(f)) return;
                    if (b && f.children) for (var e = f.children.length - 1; e >= 0; e--) d.unshift(f.children[e])
                }
            }
        },
            a.parser = {
                auto: !0,
                onComplete: function (a) {},
                plugins: ["draggable", "droppable", "resizable", "pagination", "tooltip", "linkbutton", "menu", "menubutton", "splitbutton", "switchbutton", "progressbar", "tree", "textbox", "passwordbox", "filebox", "combo", "combobox", "tagbox", "numberbox", "validatebox", "searchbox", "spinner", "numberspinner", "timespinner", "datetimespinner", "calendar", "datebox", "datetimebox", "slider", "layout", "panel", "datagrid", "propertygrid", "treegrid", "datalist", "tabs", "accordion", "window", "dialog", "form"],
                parse: function (b) {
                    for (var c = [], d = 0; d < a.parser.plugins.length; d++) {
                        var e = a.parser.plugins[d],
                            f = a(".gui-" + e, b);
                        f.length && (f[e] ? f.each(function () {
                            a(this)[e](a.data(this, "options") || {})
                        }) : c.push({
                            name: e,
                            jq: f
                        }))
                    }
                    if (c.length && window.easyloader) {
                        for (var g = [], d = 0; d < c.length; d++) g.push(c[d].name);
                        easyloader.load(g, function () {
                            for (var d = 0; d < c.length; d++) {
                                var e = c[d].name,
                                    f = c[d].jq;
                                f.each(function () {
                                    a(this)[e](a.data(this, "options") || {})
                                })
                            }
                            a.parser.onComplete.call(a.parser, b)
                        })
                    } else a.parser.onComplete.call(a.parser, b)
                },
                parseValue: function (b, c, d, e) {
                    e = e || 0;
                    var f = a.trim(String(c || "")),
                        g = f.substr(f.length - 1, 1);
                    return "%" == g ? (f = parseFloat(f.substr(0, f.length - 1)), f = b.toLowerCase().indexOf("width") >= 0 ? Math.floor((d.width() - e) * f / 100) : Math.floor((d.height() - e) * f / 100)) : f = parseInt(f) || void 0,
                        f
                },
                parseOptions: function (b, c) {
                    var d = a(b),
                        e = {},
                        f = a.trim(d.attr("data-options"));
                    if (f && ("{" != f.substring(0, 1) && (f = "{" + f + "}"), e = new Function("return " + f)()), a.map(["width", "height", "left", "top", "minWidth", "maxWidth", "minHeight", "maxHeight"], function (c) {
                        var d = a.trim(b.style[c] || "");
                        d && (d.indexOf("%") == -1 && (d = parseInt(d), isNaN(d) && (d = void 0)), e[c] = d)
                    }), c) {
                        for (var g = {}, h = 0; h < c.length; h++) {
                            var i = c[h];
                            if ("string" == typeof i) g[i] = d.attr(i);
                            else for (var j in i) {
                                var k = i[j];
                                "boolean" == k ? g[j] = d.attr(j) ? "true" == d.attr(j) : void 0 : "number" == k && (g[j] = "0" == d.attr(j) ? 0 : parseFloat(d.attr(j)) || void 0)
                            }
                        }
                        a.extend(e, g)
                    }
                    return e
                }
            },
            a(function () {
                var b = a('<div style="position:absolute;top:-1000px;width:100px;height:100px;padding:5px"></div>').appendTo("body");
                a._boxModel = 100 != b.outerWidth(),
                    b.remove(),
                    b = a('<div style="position:fixed"></div>').appendTo("body"),
                    a._positionFixed = "fixed" == b.css("position"),
                    b.remove(),
                !window.easyloader && a.parser.auto && a.parser.parse()
            }),
            a.fn._outerWidth = function (a) {
                return void 0 == a ? this[0] == window ? this.width() || document.body.clientWidth : this.outerWidth() || 0 : this._size("width", a)
            },
            a.fn._outerHeight = function (a) {
                return void 0 == a ? this[0] == window ? this.height() || document.body.clientHeight : this.outerHeight() || 0 : this._size("height", a)
            },
            a.fn._scrollLeft = function (b) {
                return void 0 == b ? this.scrollLeft() : this.each(function () {
                    a(this).scrollLeft(b)
                })
            },
            a.fn._propAttr = a.fn.prop || a.fn.attr,
            a.fn._size = function (b, c) {
                function d(b, c, d) {
                    if (!c.length) return !1;
                    var e = a(b)[0],
                        f = c[0],
                        g = f.fcount || 0;
                    return d ? (e.fitted || (e.fitted = !0, f.fcount = g + 1, a(f).addClass("panel-noscroll"), "BODY" == f.tagName && a("html").addClass("panel-fit")), {
                        width: a(f).width() || 1,
                        height: a(f).height() || 1
                    }) : (e.fitted && (e.fitted = !1, f.fcount = g - 1, 0 == f.fcount && (a(f).removeClass("panel-noscroll"), "BODY" == f.tagName && a("html").removeClass("panel-fit"))), !1)
                }
                function e(b, c, d, e) {
                    var f = a(b),
                        g = c,
                        h = g.substr(0, 1).toUpperCase() + g.substr(1),
                        i = a.parser.parseValue("min" + h, e["min" + h], d),
                        j = a.parser.parseValue("max" + h, e["max" + h], d),
                        k = a.parser.parseValue(g, e[g], d),
                        l = String(e[g] || "").indexOf("%") >= 0;
                    if (isNaN(k)) f._size(g, ""),
                        f._size("min" + h, i),
                        f._size("max" + h, j);
                    else {
                        var m = Math.min(Math.max(k, i || 0), j || 99999);
                        l || (e[g] = m),
                            f._size("min" + h, ""),
                            f._size("max" + h, ""),
                            f._size(g, m)
                    }
                    return l || e.fit
                }
                function f(b, c, d) {
                    function e() {
                        return c.toLowerCase().indexOf("width") >= 0 ? f.outerWidth() - f.width() : f.outerHeight() - f.height()
                    }
                    var f = a(b);
                    if (void 0 == d) {
                        if (d = parseInt(b.style[c]), isNaN(d)) return;
                        return a._boxModel && (d += e()),
                            d
                    }
                    "" === d ? f.css(c, "") : (a._boxModel && (d -= e(), d < 0 && (d = 0)), f.css(c, d + "px"))
                }
                return "string" == typeof b ? "clear" == b ? this.each(function () {
                    a(this).css({
                        width: "",
                        minWidth: "",
                        maxWidth: "",
                        height: "",
                        minHeight: "",
                        maxHeight: ""
                    })
                }) : "fit" == b ? this.each(function () {
                    d(this, "BODY" == this.tagName ? a("body") : a(this).parent(), !0)
                }) : "unfit" == b ? this.each(function () {
                    d(this, a(this).parent(), !1)
                }) : void 0 == c ? f(this[0], b) : this.each(function () {
                    f(this, b, c)
                }) : this.each(function () {
                    c = c || a(this).parent(),
                        a.extend(b, d(this, c, b.fit) || {});
                    var f = e(this, "width", c, b),
                        g = e(this, "height", c, b);
                    f || g ? a(this).addClass("easyui-fluid") : a(this).removeClass("easyui-fluid")
                })
            }
    }(jQuery),


    function (a) {
        function b(b) {
            1 == b.touches.length && (g ? (clearTimeout(dblClickTimer), g = !1, e(b, "dblclick")) : (g = !0, dblClickTimer = setTimeout(function () {
                g = !1
            }, 500)), f = setTimeout(function () {
                e(b, "contextmenu", 3)
            }, 1e3), e(b, "mousedown"), (a.fn.draggable.isDragging || a.fn.resizable.isResizing) && b.preventDefault())
        }
        function c(b) {
            1 == b.touches.length && (f && clearTimeout(f), e(b, "mousemove"), (a.fn.draggable.isDragging || a.fn.resizable.isResizing) && b.preventDefault())
        }
        function d(b) {
            f && clearTimeout(f),
                e(b, "mouseup"),
            (a.fn.draggable.isDragging || a.fn.resizable.isResizing) && b.preventDefault()
        }
        function e(b, c, d) {
            var e = new a.Event(c);
            e.pageX = b.changedTouches[0].pageX,
                e.pageY = b.changedTouches[0].pageY,
                e.which = d || 1,
                a(b.target).trigger(e)
        }
        var f = null,
            g = !1;
        document.addEventListener && (document.addEventListener("touchstart", b, !0), document.addEventListener("touchmove", c, !0), document.addEventListener("touchend", d, !0))
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b.data.target, "draggable"),
                d = c.options,
                e = c.proxy,
                f = b.data,
                g = f.startLeft + b.pageX - f.startX,
                h = f.startTop + b.pageY - f.startY;
            e && (e.parent()[0] == document.body ? (g = null != d.deltaX && void 0 != d.deltaX ? b.pageX + d.deltaX : b.pageX - b.data.offsetWidth, h = null != d.deltaY && void 0 != d.deltaY ? b.pageY + d.deltaY : b.pageY - b.data.offsetHeight) : (null != d.deltaX && void 0 != d.deltaX && (g += b.data.offsetWidth + d.deltaX), null != d.deltaY && void 0 != d.deltaY && (h += b.data.offsetHeight + d.deltaY))),
            b.data.parent != document.body && (g += a(b.data.parent).scrollLeft(), h += a(b.data.parent).scrollTop()),
                "h" == d.axis ? f.left = g : "v" == d.axis ? f.top = h : (f.left = g, f.top = h)
        }
        function c(b) {
            var c = a.data(b.data.target, "draggable"),
                d = c.options,
                e = c.proxy;
            e || (e = a(b.data.target)),
                e.css({
                    left: b.data.left,
                    top: b.data.top
                }),
                a("body").css("cursor", d.cursor)
        }
        function d(d) {
            if (!a.fn.draggable.isDragging) return !1;
            var e = a.data(d.data.target, "draggable"),
                f = e.options,
                g = a(".droppable:visible").filter(function () {
                    return d.data.target != this
                }).filter(function () {
                    var b = a.data(this, "droppable").options.accept;
                    return !b || a(b).filter(function () {
                        return this == d.data.target
                    }).length > 0
                });
            e.droppables = g;
            var h = e.proxy;
            return h || (f.proxy ? (h = "clone" == f.proxy ? a(d.data.target).clone().insertAfter(d.data.target) : f.proxy.call(d.data.target, d.data.target), e.proxy = h) : h = a(d.data.target)),
                h.css("position", "absolute"),
                b(d),
                c(d),
                f.onStartDrag.call(d.data.target, d),
                !1
        }
        function e(d) {
            if (!a.fn.draggable.isDragging) return !1;
            var e = a.data(d.data.target, "draggable");
            b(d),
            0 != e.options.onDrag.call(d.data.target, d) && c(d);
            var f = d.data.target;
            return e.droppables.each(function () {
                var b = a(this);
                if (!b.droppable("options").disabled) {
                    var c = b.offset();
                    d.pageX > c.left && d.pageX < c.left + b.outerWidth() && d.pageY > c.top && d.pageY < c.top + b.outerHeight() ? (this.entered || (a(this).trigger("_dragenter", [f]), this.entered = !0), a(this).trigger("_dragover", [f])) : this.entered && (a(this).trigger("_dragleave", [f]), this.entered = !1)
                }
            }),
                !1
        }
        function f(b) {
            function c() {
                h && h.remove(),
                    f.proxy = null
            }
            function d() {
                var d = !1;
                return f.droppables.each(function () {
                    var e = a(this);
                    if (!e.droppable("options").disabled) {
                        var f = e.offset();
                        return b.pageX > f.left && b.pageX < f.left + e.outerWidth() && b.pageY > f.top && b.pageY < f.top + e.outerHeight() ? (i.revert && a(b.data.target).css({
                            position: b.data.startPosition,
                            left: b.data.startLeft,
                            top: b.data.startTop
                        }), a(this).triggerHandler("_drop", [b.data.target]), c(), d = !0, this.entered = !1, !1) : void 0
                    }
                }),
                d || i.revert || c(),
                    d
            }
            if (!a.fn.draggable.isDragging) return g(),
                !1;
            e(b);
            var f = a.data(b.data.target, "draggable"),
                h = f.proxy,
                i = f.options;
            if (i.onEndDrag.call(b.data.target, b), i.revert) if (1 == d()) a(b.data.target).css({
                position: b.data.startPosition,
                left: b.data.startLeft,
                top: b.data.startTop
            });
            else if (h) {
                var j, k;
                h.parent()[0] == document.body ? (j = b.data.startX - b.data.offsetWidth, k = b.data.startY - b.data.offsetHeight) : (j = b.data.startLeft, k = b.data.startTop),
                    h.animate({
                        left: j,
                        top: k
                    }, function () {
                        c()
                    })
            } else a(b.data.target).animate({
                left: b.data.startLeft,
                top: b.data.startTop
            }, function () {
                a(b.data.target).css("position", b.data.startPosition)
            });
            else a(b.data.target).css({
                position: "absolute",
                left: b.data.left,
                top: b.data.top
            }),
                d();
            return i.onStopDrag.call(b.data.target, b),
                g(),
                !1
        }
        function g() {
            a.fn.draggable.timer && (clearTimeout(a.fn.draggable.timer), a.fn.draggable.timer = void 0),
                a(document).unbind(".draggable"),
                a.fn.draggable.isDragging = !1,
                setTimeout(function () {
                    a("body").css("cursor", "")
                }, 100)
        }
        a.fn.draggable = function (b, c) {
            return "string" == typeof b ? a.fn.draggable.methods[b](this, c) : this.each(function () {
                function c(b) {
                    var c = a.data(b.data.target, "draggable"),
                        d = c.handle,
                        e = a(d).offset(),
                        f = a(d).outerWidth(),
                        g = a(d).outerHeight(),
                        h = b.pageY - e.top,
                        i = e.left + f - b.pageX,
                        j = e.top + g - b.pageY,
                        k = b.pageX - e.left;
                    return Math.min(h, i, j, k) > c.options.edge
                }
                var g, h = a.data(this, "draggable");
                h ? (h.handle.unbind(".draggable"), g = a.extend(h.options, b)) : g = a.extend({}, a.fn.draggable.defaults, a.fn.draggable.parseOptions(this), b || {});
                var i = g.handle ? "string" == typeof g.handle ? a(g.handle, this) : g.handle : a(this);
                return a.data(this, "draggable", {
                    options: g,
                    handle: i
                }),
                    g.disabled ? void a(this).css("cursor", "") : void i.unbind(".draggable").bind("mousemove.draggable", {
                        target: this
                    }, function (b) {
                        if (!a.fn.draggable.isDragging) {
                            var d = a.data(b.data.target, "draggable").options;
                            c(b) ? a(this).css("cursor", d.cursor) : a(this).css("cursor", "")
                        }
                    }).bind("mouseleave.draggable", {
                        target: this
                    }, function (b) {
                        a(this).css("cursor", "")
                    }).bind("mousedown.draggable", {
                        target: this
                    }, function (b) {
                        if (0 != c(b)) {
                            a(this).css("cursor", "");
                            var g = a(b.data.target).position(),
                                h = a(b.data.target).offset(),
                                i = {
                                    startPosition: a(b.data.target).css("position"),
                                    startLeft: g.left,
                                    startTop: g.top,
                                    left: g.left,
                                    top: g.top,
                                    startX: b.pageX,
                                    startY: b.pageY,
                                    width: a(b.data.target).outerWidth(),
                                    height: a(b.data.target).outerHeight(),
                                    offsetWidth: b.pageX - h.left,
                                    offsetHeight: b.pageY - h.top,
                                    target: b.data.target,
                                    parent: a(b.data.target).parent()[0]
                                };
                            a.extend(b.data, i);
                            var j = a.data(b.data.target, "draggable").options;
                            if (0 != j.onBeforeDrag.call(b.data.target, b)) return a(document).bind("mousedown.draggable", b.data, d),
                                a(document).bind("mousemove.draggable", b.data, e),
                                a(document).bind("mouseup.draggable", b.data, f),
                                a.fn.draggable.timer = setTimeout(function () {
                                    a.fn.draggable.isDragging = !0,
                                        d(b)
                                }, j.delay),
                                !1
                        }
                    })
            })
        },
            a.fn.draggable.methods = {
                options: function (b) {
                    return a.data(b[0], "draggable").options
                },
                proxy: function (b) {
                    return a.data(b[0], "draggable").proxy
                },
                enable: function (b) {
                    return b.each(function () {
                        a(this).draggable({
                            disabled: !1
                        })
                    })
                },
                disable: function (b) {
                    return b.each(function () {
                        a(this).draggable({
                            disabled: !0
                        })
                    })
                }
            },
            a.fn.draggable.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.parser.parseOptions(b, ["cursor", "handle", "axis", {
                    revert: "boolean",
                    deltaX: "number",
                    deltaY: "number",
                    edge: "number",
                    delay: "number"
                }]), {
                    disabled: !! c.attr("disabled") || void 0
                })
            },
            a.fn.draggable.defaults = {
                proxy: null,
                revert: !1,
                cursor: "move",
                deltaX: null,
                deltaY: null,
                handle: null,
                disabled: !1,
                edge: 0,
                axis: null,
                delay: 100,
                onBeforeDrag: function (a) {},
                onStartDrag: function (a) {},
                onDrag: function (a) {},
                onEndDrag: function (a) {},
                onStopDrag: function (a) {}
            },
            a.fn.draggable.isDragging = !1
    }(jQuery),


    function (a) {
        function b(b) {
            a(b).addClass("droppable"),
                a(b).bind("_dragenter", function (c, d) {
                    a.data(b, "droppable").options.onDragEnter.apply(b, [c, d])
                }),
                a(b).bind("_dragleave", function (c, d) {
                    a.data(b, "droppable").options.onDragLeave.apply(b, [c, d])
                }),
                a(b).bind("_dragover", function (c, d) {
                    a.data(b, "droppable").options.onDragOver.apply(b, [c, d])
                }),
                a(b).bind("_drop", function (c, d) {
                    a.data(b, "droppable").options.onDrop.apply(b, [c, d])
                })
        }
        a.fn.droppable = function (c, d) {
            return "string" == typeof c ? a.fn.droppable.methods[c](this, d) : (c = c || {}, this.each(function () {
                var d = a.data(this, "droppable");
                d ? a.extend(d.options, c) : (b(this), a.data(this, "droppable", {
                    options: a.extend({}, a.fn.droppable.defaults, a.fn.droppable.parseOptions(this), c)
                }))
            }))
        },
            a.fn.droppable.methods = {
                options: function (b) {
                    return a.data(b[0], "droppable").options
                },
                enable: function (b) {
                    return b.each(function () {
                        a(this).droppable({
                            disabled: !1
                        })
                    })
                },
                disable: function (b) {
                    return b.each(function () {
                        a(this).droppable({
                            disabled: !0
                        })
                    })
                }
            },
            a.fn.droppable.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.parser.parseOptions(b, ["accept"]), {
                    disabled: !! c.attr("disabled") || void 0
                })
            },
            a.fn.droppable.defaults = {
                accept: null,
                disabled: !1,
                onDragEnter: function (a, b) {},
                onDragOver: function (a, b) {},
                onDragLeave: function (a, b) {},
                onDrop: function (a, b) {}
            }
    }(jQuery),


    function (a) {
        function b(b) {
            var c = b.data,
                d = a.data(c.target, "resizable").options;
            if (c.dir.indexOf("e") != -1) {
                var e = c.startWidth + b.pageX - c.startX;
                e = Math.min(Math.max(e, d.minWidth), d.maxWidth),
                    c.width = e
            }
            if (c.dir.indexOf("s") != -1) {
                var f = c.startHeight + b.pageY - c.startY;
                f = Math.min(Math.max(f, d.minHeight), d.maxHeight),
                    c.height = f
            }
            if (c.dir.indexOf("w") != -1) {
                var e = c.startWidth - b.pageX + c.startX;
                e = Math.min(Math.max(e, d.minWidth), d.maxWidth),
                    c.width = e,
                    c.left = c.startLeft + c.startWidth - c.width
            }
            if (c.dir.indexOf("n") != -1) {
                var f = c.startHeight - b.pageY + c.startY;
                f = Math.min(Math.max(f, d.minHeight), d.maxHeight),
                    c.height = f,
                    c.top = c.startTop + c.startHeight - c.height
            }
        }
        function c(b) {
            var c = b.data,
                d = a(c.target);
            d.css({
                left: c.left,
                top: c.top
            }),
            d.outerWidth() != c.width && d._outerWidth(c.width),
            d.outerHeight() != c.height && d._outerHeight(c.height)
        }
        function d(b) {
            return a.fn.resizable.isResizing = !0,
                a.data(b.data.target, "resizable").options.onStartResize.call(b.data.target, b),
                !1
        }
        function e(d) {
            return b(d),
            0 != a.data(d.data.target, "resizable").options.onResize.call(d.data.target, d) && c(d),
                !1
        }
        function f(d) {
            return a.fn.resizable.isResizing = !1,
                b(d, !0),
                c(d),
                a.data(d.data.target, "resizable").options.onStopResize.call(d.data.target, d),
                a(document).unbind(".resizable"),
                a("body").css("cursor", ""),
                !1
        }
        function g(b) {
            var c = a(b.data.target).resizable("options"),
                d = a(b.data.target),
                e = "",
                f = d.offset(),
                g = d.outerWidth(),
                h = d.outerHeight(),
                i = c.edge;
            b.pageY > f.top && b.pageY < f.top + i ? e += "n" : b.pageY < f.top + h && b.pageY > f.top + h - i && (e += "s"),
                b.pageX > f.left && b.pageX < f.left + i ? e += "w" : b.pageX < f.left + g && b.pageX > f.left + g - i && (e += "e");
            var j = c.handles.split(",");
            if (j = a.map(j, function (b) {
                return a.trim(b).toLowerCase()
            }), a.inArray("all", j) >= 0 || a.inArray(e, j) >= 0) return e;
            for (var k = 0; k < e.length; k++) {
                var l = a.inArray(e.substr(k, 1), j);
                if (l >= 0) return j[l]
            }
            return ""
        }
        a.fn.resizable = function (b, c) {
            return "string" == typeof b ? a.fn.resizable.methods[b](this, c) : this.each(function () {
                var c = null,
                    h = a.data(this, "resizable");
                h ? (a(this).unbind(".resizable"), c = a.extend(h.options, b || {})) : (c = a.extend({}, a.fn.resizable.defaults, a.fn.resizable.parseOptions(this), b || {}), a.data(this, "resizable", {
                    options: c
                })),
                1 != c.disabled && a(this).bind("mousemove.resizable", {
                    target: this
                }, function (b) {
                    if (!a.fn.resizable.isResizing) {
                        var c = g(b);
                        a(b.data.target).css("cursor", c ? c + "-resize" : "")
                    }
                }).bind("mouseleave.resizable", {
                    target: this
                }, function (b) {
                    a(b.data.target).css("cursor", "")
                }).bind("mousedown.resizable", {
                    target: this
                }, function (b) {
                    function c(c) {
                        var d = parseInt(a(b.data.target).css(c));
                        return isNaN(d) ? 0 : d
                    }
                    var h = g(b);
                    if ("" != h) {
                        var i = {
                            target: b.data.target,
                            dir: h,
                            startLeft: c("left"),
                            startTop: c("top"),
                            left: c("left"),
                            top: c("top"),
                            startX: b.pageX,
                            startY: b.pageY,
                            startWidth: a(b.data.target).outerWidth(),
                            startHeight: a(b.data.target).outerHeight(),
                            width: a(b.data.target).outerWidth(),
                            height: a(b.data.target).outerHeight(),
                            deltaWidth: a(b.data.target).outerWidth() - a(b.data.target).width(),
                            deltaHeight: a(b.data.target).outerHeight() - a(b.data.target).height()
                        };
                        a(document).bind("mousedown.resizable", i, d),
                            a(document).bind("mousemove.resizable", i, e),
                            a(document).bind("mouseup.resizable", i, f),
                            a("body").css("cursor", h + "-resize")
                    }
                })
            })
        },
            a.fn.resizable.methods = {
                options: function (b) {
                    return a.data(b[0], "resizable").options
                },
                enable: function (b) {
                    return b.each(function () {
                        a(this).resizable({
                            disabled: !1
                        })
                    })
                },
                disable: function (b) {
                    return b.each(function () {
                        a(this).resizable({
                            disabled: !0
                        })
                    })
                }
            },
            a.fn.resizable.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.parser.parseOptions(b, ["handles", {
                    minWidth: "number",
                    minHeight: "number",
                    maxWidth: "number",
                    maxHeight: "number",
                    edge: "number"
                }]), {
                    disabled: !! c.attr("disabled") || void 0
                })
            },
            a.fn.resizable.defaults = {
                disabled: !1,
                handles: "n, e, s, w, ne, se, sw, nw, all",
                minWidth: 10,
                minHeight: 10,
                maxWidth: 1e4,
                maxHeight: 1e4,
                edge: 5,
                onStartResize: function (a) {},
                onResize: function (a) {},
                onStopResize: function (a) {}
            },
            a.fn.resizable.isResizing = !1
    }(jQuery),


    function (a) {
        function b(b, c) {
            var d = a.data(b, "linkbutton").options;
            if (c && a.extend(d, c), d.width || d.height || d.fit) {
                var e = a(b),
                    f = e.parent(),
                    g = e.is(":visible");
                if (!g) {
                    var h = a('<div style="display:none"></div>').insertBefore(b),
                        i = {
                            position: e.css("position"),
                            display: e.css("display"),
                            left: e.css("left")
                        };
                    e.appendTo("body"),
                        e.css({
                            position: "absolute",
                            display: "inline-block",
                            left: -2e4
                        })
                }
                e._size(d, f);
                var j = e.find(".l-btn-left");
                j.css("margin-top", 0),
                    j.css("margin-top", parseInt((e.height() - j.height()) / 2) + "px"),
                g || (e.insertAfter(h), e.css(i), h.remove())
            }
        }
        function c(b) {
            var c = a.data(b, "linkbutton").options,
                f = a(b).empty(),
                g = c.btnCls ? " " + c.btnCls : "";
            f.addClass("l-btn" + g).removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline"),
                f.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-" + c.size),
            c.plain && f.addClass("l-btn-plain"),
            c.outline && f.addClass("l-btn-outline"),
            c.selected && f.addClass(c.plain ? "l-btn-selected l-btn-plain-selected" : "l-btn-selected"),
                f.attr("group", c.group || ""),
                f.attr("id", c.id || "");
            var h = a('<span class="l-btn-left"></span>').appendTo(f);
            c.text ? a('<span class="l-btn-text"></span>').html(c.text).appendTo(h) : a('<span class="l-btn-text l-btn-empty">&nbsp;</span>').appendTo(h),
            c.iconCls && (a('<span class="l-btn-icon">&nbsp;</span>').addClass(c.iconCls).appendTo(h), h.addClass("l-btn-icon-" + c.iconAlign)),
                f.unbind(".linkbutton").bind("focus.linkbutton", function () {
                    c.disabled || a(this).addClass("l-btn-focus")
                }).bind("blur.linkbutton", function () {
                    a(this).removeClass("l-btn-focus")
                }).bind("click.linkbutton", function () {
                    c.disabled || (c.toggle && (c.selected ? a(this).linkbutton("unselect") : a(this).linkbutton("select")), c.onClick.call(this))
                }),
                d(b, c.selected),
                e(b, c.disabled)
        }
        function d(b, c) {
            var d = a.data(b, "linkbutton").options;
            c ? (d.group && a('a.l-btn[group="' + d.group + '"]').each(function () {
                var b = a(this).linkbutton("options");
                b.toggle && (a(this).removeClass("l-btn-selected l-btn-plain-selected"), b.selected = !1)
            }), a(b).addClass(d.plain ? "l-btn-selected l-btn-plain-selected" : "l-btn-selected"), d.selected = !0) : d.group || (a(b).removeClass("l-btn-selected l-btn-plain-selected"), d.selected = !1)
        }
        function e(b, c) {
            var d = a.data(b, "linkbutton"),
                e = d.options;
            if (a(b).removeClass("l-btn-disabled l-btn-plain-disabled"), c) {
                e.disabled = !0;
                var f = a(b).attr("href");
                f && (d.href = f, a(b).attr("href", "javascript:;")),
                b.onclick && (d.onclick = b.onclick, b.onclick = null),
                    e.plain ? a(b).addClass("l-btn-disabled l-btn-plain-disabled") : a(b).addClass("l-btn-disabled")
            } else e.disabled = !1,
            d.href && a(b).attr("href", d.href),
            d.onclick && (b.onclick = d.onclick)
        }
        a.fn.linkbutton = function (d, e) {
            return "string" == typeof d ? a.fn.linkbutton.methods[d](this, e) : (d = d || {}, this.each(function () {
                var e = a.data(this, "linkbutton");
                e ? a.extend(e.options, d) : (a.data(this, "linkbutton", {
                    options: a.extend({}, a.fn.linkbutton.defaults, a.fn.linkbutton.parseOptions(this), d)
                }), a(this).removeAttr("disabled"), a(this).bind("_resize", function (c, d) {
                    return (a(this).hasClass("easyui-fluid") || d) && b(this),
                        !1
                })),
                    c(this),
                    b(this)
            }))
        },
            a.fn.linkbutton.methods = {
                options: function (b) {
                    return a.data(b[0], "linkbutton").options
                },
                resize: function (a, c) {
                    return a.each(function () {
                        b(this, c)
                    })
                },
                enable: function (a) {
                    return a.each(function () {
                        e(this, !1)
                    })
                },
                disable: function (a) {
                    return a.each(function () {
                        e(this, !0)
                    })
                },
                select: function (a) {
                    return a.each(function () {
                        d(this, !0)
                    })
                },
                unselect: function (a) {
                    return a.each(function () {
                        d(this, !1)
                    })
                }
            },
            a.fn.linkbutton.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.parser.parseOptions(b, ["id", "iconCls", "iconAlign", "group", "size", "text", {
                    plain: "boolean",
                    toggle: "boolean",
                    selected: "boolean",
                    outline: "boolean"
                }]), {
                    disabled: !! c.attr("disabled") || void 0,
                    text: a.trim(c.html()) || void 0,
                    iconCls: c.attr("icon") || c.attr("iconCls")
                })
            },
            a.fn.linkbutton.defaults = {
                id: null,
                disabled: !1,
                toggle: !1,
                selected: !1,
                outline: !1,
                group: null,
                plain: !1,
                text: "",
                iconCls: null,
                iconAlign: "left",
                size: "small",
                onClick: function () {}
            }
    }(jQuery),


    function ($) {
        function buildToolbar(target) {
            function createButton(a) {
                var b = opts.nav[a],
                    c = $('<a href="javascript:;"></a>').appendTo(tr);
                return c.wrap("<td></td>"),
                    c.linkbutton({
                        iconCls: b.iconCls,
                        plain: !0
                    }).unbind(".pagination").bind("click.pagination", function () {
                        b.handler.call(target)
                    }),
                    c
            }
            function removeArrayItem(a, b) {
                var c = $.inArray(b, a);
                return c >= 0 && a.splice(c, 1),
                    a
            }
            var state = $.data(target, "pagination"),
                opts = state.options,
                bb = state.bb = {},
                pager = $(target).addClass("pagination").html('<table cellspacing="0" cellpadding="0" border="0"><tr></tr></table>'),
                tr = pager.find("tr"),
                aa = $.extend([], opts.layout);
            opts.showPageList || removeArrayItem(aa, "list"),
            opts.showPageInfo || removeArrayItem(aa, "info"),
            opts.showRefresh || removeArrayItem(aa, "refresh"),
            "sep" == aa[0] && aa.shift(),
            "sep" == aa[aa.length - 1] && aa.pop();
            for (var index = 0; index < aa.length; index++) {
                var item = aa[index];
                if ("list" == item) {
                    var ps = $('<select class="pagination-page-list"></select>');
                    ps.bind("change", function () {
                        opts.pageSize = parseInt($(this).val()),
                            opts.onChangePageSize.call(target, opts.pageSize),
                            selectPage(target, opts.pageNumber)
                    });
                    for (var i = 0; i < opts.pageList.length; i++) $("<option></option>").text(opts.pageList[i]).appendTo(ps);
                    $("<td></td>").append(ps).appendTo(tr)
                } else "sep" == item ? $('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr) : "first" == item ? bb.first = createButton("first") : "prev" == item ? bb.prev = createButton("prev") : "next" == item ? bb.next = createButton("next") : "last" == item ? bb.last = createButton("last") : "manual" == item ? ($('<span style="padding-left:6px;"></span>').html(opts.beforePageText).appendTo(tr).wrap("<td></td>"), bb.num = $('<input class="pagination-num" type="text" value="1" size="2">').appendTo(tr).wrap("<td></td>"), bb.num.unbind(".pagination").bind("keydown.pagination", function (a) {
                    if (13 == a.keyCode) {
                        var b = parseInt($(this).val()) || 1;
                        return selectPage(target, b),
                            !1
                    }
                }), bb.after = $('<span style="padding-right:6px;"></span>').appendTo(tr).wrap("<td></td>")) : "refresh" == item ? bb.refresh = createButton("refresh") : "links" == item ? $('<td class="pagination-links"></td>').appendTo(tr) : "info" == item && (index == aa.length - 1 ? $('<div class="pagination-info"></div>').appendTo(pager) : $('<td><div class="pagination-info"></div></td>').appendTo(tr))
            }
            if (opts.buttons) if ($('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr), $.isArray(opts.buttons)) for (var i = 0; i < opts.buttons.length; i++) {
                var btn = opts.buttons[i];
                if ("-" == btn) $('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr);
                else {
                    var td = $("<td></td>").appendTo(tr),
                        a = $('<a href="javascript:;"></a>').appendTo(td);
                    a[0].onclick = eval(btn.handler ||
                        function () {}),
                        a.linkbutton($.extend({}, btn, {
                            plain: !0
                        }))
                }
            } else {
                var td = $("<td></td>").appendTo(tr);
                $(opts.buttons).appendTo(td).show()
            }
            $('<div style="clear:both;"></div>').appendTo(pager)
        }
        function selectPage(a, b) {
            var c = $.data(a, "pagination").options;
            refreshData(a, {
                pageNumber: b
            }),
                c.onSelectPage.call(a, c.pageNumber, c.pageSize)
        }
        function refreshData(a, b) {
            var c = $.data(a, "pagination"),
                d = c.options,
                e = c.bb;
            $.extend(d, b || {});
            var f = $(a).find("select.pagination-page-list");
            f.length && (f.val(d.pageSize + ""), d.pageSize = parseInt(f.val()));
            var g = Math.ceil(d.total / d.pageSize) || 1;
            d.pageNumber < 1 && (d.pageNumber = 1),
            d.pageNumber > g && (d.pageNumber = g),
            0 == d.total && (d.pageNumber = 0, g = 0),
            e.num && e.num.val(d.pageNumber),
            e.after && e.after.html(d.afterPageText.replace(/{pages}/, g));
            var h = $(a).find("td.pagination-links");
            if (h.length) {
                h.empty();
                var i = d.pageNumber - Math.floor(d.links / 2);
                i < 1 && (i = 1);
                var j = i + d.links - 1;
                j > g && (j = g),
                    i = j - d.links + 1,
                i < 1 && (i = 1);
                for (var k = i; k <= j; k++) {
                    var l = $('<a class="pagination-link" href="javascript:;"></a>').appendTo(h);
                    l.linkbutton({
                        plain: !0,
                        text: k
                    }),
                        k == d.pageNumber ? l.linkbutton("select") : l.unbind(".pagination").bind("click.pagination", {
                            pageNumber: k
                        }, function (b) {
                            selectPage(a, b.data.pageNumber)
                        })
                }
            }
            var m = d.displayMsg;
            m = m.replace(/{from}/, 0 == d.total ? 0 : d.pageSize * (d.pageNumber - 1) + 1),
                m = m.replace(/{to}/, Math.min(d.pageSize * d.pageNumber, d.total)),
                m = m.replace(/{total}/, d.total),
                $(a).find("div.pagination-info").html(m),
            e.first && e.first.linkbutton({
                disabled: !d.total || 1 == d.pageNumber
            }),
            e.prev && e.prev.linkbutton({
                disabled: !d.total || 1 == d.pageNumber
            }),
            e.next && e.next.linkbutton({
                disabled: d.pageNumber == g
            }),
            e.last && e.last.linkbutton({
                disabled: d.pageNumber == g
            }),
                setLoadStatus(a, d.loading)
        }
        function setLoadStatus(a, b) {
            var c = $.data(a, "pagination"),
                d = c.options;
            d.loading = b,
            d.showRefresh && c.bb.refresh && c.bb.refresh.linkbutton({
                iconCls: d.loading ? "pagination-loading" : "pagination-load"
            })
        }
        $.fn.pagination = function (a, b) {
            return "string" == typeof a ? $.fn.pagination.methods[a](this, b) : (a = a || {}, this.each(function () {
                var b, c = $.data(this, "pagination");
                c ? b = $.extend(c.options, a) : (b = $.extend({}, $.fn.pagination.defaults, $.fn.pagination.parseOptions(this), a), $.data(this, "pagination", {
                    options: b
                })),
                    buildToolbar(this),
                    refreshData(this)
            }))
        },
            $.fn.pagination.methods = {
                options: function (a) {
                    return $.data(a[0], "pagination").options
                },
                loading: function (a) {
                    return a.each(function () {
                        setLoadStatus(this, !0)
                    })
                },
                loaded: function (a) {
                    return a.each(function () {
                        setLoadStatus(this, !1)
                    })
                },
                refresh: function (a, b) {
                    return a.each(function () {
                        refreshData(this, b)
                    })
                },
                select: function (a, b) {
                    return a.each(function () {
                        selectPage(this, b)
                    })
                }
            },
            $.fn.pagination.parseOptions = function (target) {
                var t = $(target);
                return $.extend({}, $.parser.parseOptions(target, [{
                    total: "number",
                    pageSize: "number",
                    pageNumber: "number",
                    links: "number"
                },
                    {
                        loading: "boolean",
                        showPageList: "boolean",
                        showPageInfo: "boolean",
                        showRefresh: "boolean"
                    }]), {
                    pageList: t.attr("pageList") ? eval(t.attr("pageList")) : void 0
                })
            },
            $.fn.pagination.defaults = {
                total: 1,
                pageSize: 10,
                pageNumber: 1,
                pageList: [10, 20, 30, 50],
                loading: !1,
                buttons: null,
                showPageList: !0,
                showPageInfo: !0,
                showRefresh: !0,
                links: 10,
                layout: ["list", "sep", "first", "prev", "sep", "manual", "sep", "next", "last", "sep", "refresh", "info"],
                onSelectPage: function (a, b) {},
                onBeforeRefresh: function (a, b) {},
                onRefresh: function (a, b) {},
                onChangePageSize: function (a) {},
                beforePageText: "Page",
                afterPageText: "of {pages}",
                displayMsg: "Displaying {from} to {to} of {total} items",
                nav: {
                    first: {
                        iconCls: "pagination-first",
                        handler: function () {
                            var a = $(this).pagination("options");
                            a.pageNumber > 1 && $(this).pagination("select", 1)
                        }
                    },
                    prev: {
                        iconCls: "pagination-prev",
                        handler: function () {
                            var a = $(this).pagination("options");
                            a.pageNumber > 1 && $(this).pagination("select", a.pageNumber - 1)
                        }
                    },
                    next: {
                        iconCls: "pagination-next",
                        handler: function () {
                            var a = $(this).pagination("options"),
                                b = Math.ceil(a.total / a.pageSize);
                            a.pageNumber < b && $(this).pagination("select", a.pageNumber + 1)
                        }
                    },
                    last: {
                        iconCls: "pagination-last",
                        handler: function () {
                            var a = $(this).pagination("options"),
                                b = Math.ceil(a.total / a.pageSize);
                            a.pageNumber < b && $(this).pagination("select", b)
                        }
                    },
                    refresh: {
                        iconCls: "pagination-refresh",
                        handler: function () {
                            var a = $(this).pagination("options");
                            0 != a.onBeforeRefresh.call(this, a.pageNumber, a.pageSize) && ($(this).pagination("select", a.pageNumber), a.onRefresh.call(this, a.pageNumber, a.pageSize))
                        }
                    }
                }
            }
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a(b);
            return c.addClass("tree"),
                c
        }
        function c(b) {
            var c = a.data(b, "tree").options;
            a(b).unbind().bind("mouseover", function (b) {
                var c = a(b.target),
                    d = c.closest("div.tree-node");
                d.length && (d.addClass("tree-node-hover"), c.hasClass("tree-hit") && (c.hasClass("tree-expanded") ? c.addClass("tree-expanded-hover") : c.addClass("tree-collapsed-hover")), b.stopPropagation())
            }).bind("mouseout", function (b) {
                var c = a(b.target),
                    d = c.closest("div.tree-node");
                d.length && (d.removeClass("tree-node-hover"), c.hasClass("tree-hit") && (c.hasClass("tree-expanded") ? c.removeClass("tree-expanded-hover") : c.removeClass("tree-collapsed-hover")), b.stopPropagation())
            }).bind("click", function (d) {
                var e = a(d.target),
                    g = e.closest("div.tree-node");
                if (g.length) {
                    if (e.hasClass("tree-hit")) return q(b, g[0]),
                        !1;
                    if (e.hasClass("tree-checkbox")) return f(b, g[0]),
                        !1;
                    K(b, g[0]),
                        c.onClick.call(b, G(b, g[0])),
                        d.stopPropagation()
                }
            }).bind("dblclick", function (d) {
                var e = a(d.target).closest("div.tree-node");
                e.length && (K(b, e[0]), c.onDblClick.call(b, G(b, e[0])), d.stopPropagation())
            }).bind("contextmenu", function (d) {
                var e = a(d.target).closest("div.tree-node");
                e.length && (c.onContextMenu.call(b, d, G(b, e[0])), d.stopPropagation())
            })
        }
        function d(b) {
            var c = a.data(b, "tree").options;
            c.dnd = !1;
            var d = a(b).find("div.tree-node");
            d.draggable("disable"),
                d.css("cursor", "pointer")
        }
        function e(b) {
            function c(b, c) {
                return a(b).closest("ul.tree").tree(c ? "pop" : "getData", b)
            }
            function d(b, c) {
                var d = a(b).draggable("proxy").find("span.tree-dnd-icon");
                d.removeClass("tree-dnd-yes tree-dnd-no").addClass(c ? "tree-dnd-yes" : "tree-dnd-no")
            }
            function e(d, e) {
                function f() {
                    var f = c(d, !0);
                    a(b).tree("append", {
                        parent: e,
                        data: [f]
                    }),
                        h.onDrop.call(b, e, f, "append")
                }
                "closed" == G(b, e).state ? o(b, e, function () {
                    f()
                }) : f()
            }
            function f(d, e, f) {
                var g = {};
                "top" == f ? g.before = e : g.after = e;
                var i = c(d, !0);
                g.data = i,
                    a(b).tree("insert", g),
                    h.onDrop.call(b, e, i, f)
            }
            var g = a.data(b, "tree"),
                h = g.options,
                i = g.tree;
            g.disabledNodes = [],
                h.dnd = !0,
                i.find("div.tree-node").draggable({
                    disabled: !1,
                    revert: !0,
                    cursor: "pointer",
                    proxy: function (b) {
                        var c = a('<div class="tree-node-proxy"></div>').appendTo("body");
                        return c.html('<span class="tree-dnd-icon tree-dnd-no">&nbsp;</span>' + a(b).find(".tree-title").html()),
                            c.hide(),
                            c
                    },
                    deltaX: 15,
                    deltaY: 15,
                    onBeforeDrag: function (c) {
                        if (0 == h.onBeforeDrag.call(b, G(b, this))) return !1;
                        if (a(c.target).hasClass("tree-hit") || a(c.target).hasClass("tree-checkbox")) return !1;
                        if (1 != c.which) return !1;
                        var d = a(this).find("span.tree-indent");
                        d.length && (c.data.offsetWidth -= d.length * d.width())
                    },
                    onStartDrag: function (c) {
                        a(this).next("ul").find("div.tree-node").each(function () {
                            a(this).droppable("disable"),
                                g.disabledNodes.push(this)
                        }),
                            a(this).draggable("proxy").css({
                                left: -1e4,
                                top: -1e4
                            }),
                            h.onStartDrag.call(b, G(b, this));
                        var d = G(b, this);
                        void 0 == d.id && (d.id = "easyui_tree_node_id_temp", y(b, d)),
                            g.draggingNodeId = d.id
                    },
                    onDrag: function (b) {
                        var c = b.pageX,
                            d = b.pageY,
                            e = b.data.startX,
                            f = b.data.startY,
                            g = Math.sqrt((c - e) * (c - e) + (d - f) * (d - f));
                        g > 3 && a(this).draggable("proxy").show(),
                            this.pageY = b.pageY
                    },
                    onStopDrag: function () {
                        for (var c = 0; c < g.disabledNodes.length; c++) a(g.disabledNodes[c]).droppable("enable");
                        g.disabledNodes = [];
                        var d = H(b, g.draggingNodeId);
                        d && "easyui_tree_node_id_temp" == d.id && (d.id = "", y(b, d)),
                            h.onStopDrag.call(b, d)
                    }
                }).droppable({
                    accept: "div.tree-node",
                    onDragEnter: function (e, f) {
                        0 == h.onDragEnter.call(b, this, c(f)) && (d(f, !1), a(this).removeClass("tree-node-append tree-node-top tree-node-bottom"), a(this).droppable("disable"), g.disabledNodes.push(this))
                    },
                    onDragOver: function (e, f) {
                        if (!a(this).droppable("options").disabled) {
                            var i = f.pageY,
                                j = a(this).offset().top,
                                k = j + a(this).outerHeight();
                            d(f, !0),
                                a(this).removeClass("tree-node-append tree-node-top tree-node-bottom"),
                                i > j + (k - j) / 2 ? k - i < 5 ? a(this).addClass("tree-node-bottom") : a(this).addClass("tree-node-append") : i - j < 5 ? a(this).addClass("tree-node-top") : a(this).addClass("tree-node-append"),
                            0 == h.onDragOver.call(b, this, c(f)) && (d(f, !1), a(this).removeClass("tree-node-append tree-node-top tree-node-bottom"), a(this).droppable("disable"), g.disabledNodes.push(this))
                        }
                    },
                    onDragLeave: function (e, f) {
                        d(f, !1),
                            a(this).removeClass("tree-node-append tree-node-top tree-node-bottom"),
                            h.onDragLeave.call(b, this, c(f))
                    },
                    onDrop: function (d, g) {
                        var i, j, k = this;
                        return a(this).hasClass("tree-node-append") ? (i = e, j = "append") : (i = f, j = a(this).hasClass("tree-node-top") ? "top" : "bottom"),
                            0 == h.onBeforeDrop.call(b, k, c(g), j) ? void a(this).removeClass("tree-node-append tree-node-top tree-node-bottom") : (i(g, k, j), void a(this).removeClass("tree-node-append tree-node-top tree-node-bottom"))
                    }
                })
        }
        function f(b, c, d, e) {
            var f = a.data(b, "tree"),
                j = f.options;
            if (j.checkbox) {
                var k = G(b, c);
                if (k.checkState) {
                    var l = a(c).find(".tree-checkbox");
                    if (void 0 == d && (l.hasClass("tree-checkbox1") ? d = !1 : l.hasClass("tree-checkbox0") ? d = !0 : (void 0 == k._checked && (k._checked = a(c).find(".tree-checkbox").hasClass("tree-checkbox1")), d = !k._checked)), k._checked = d, d) {
                        if (l.hasClass("tree-checkbox1")) return
                    } else if (l.hasClass("tree-checkbox0")) return;
                    (e || 0 != j.onBeforeCheck.call(b, k, d)) && (j.cascadeCheck ? (g(b, k, d), i(b, k)) : h(b, k, d ? "1" : "0"), e || j.onCheck.call(b, k, d))
                }
            }
        }
        function g(b, c, d) {
            var e = a.data(b, "tree").options,
                f = d ? 1 : 0;
            if (h(b, c, f), e.deepCheck) a.easyui.forEach(c.children || [], !0, function (a) {
                h(b, a, f)
            });
            else {
                var g = [];
                c.children && c.children.length && g.push(c),
                    a.easyui.forEach(c.children || [], !0, function (a) {
                        a.hidden || (h(b, a, f), a.children && a.children.length && g.push(a))
                    });
                for (var i = g.length - 1; i >= 0; i--) {
                    var k = g[i];
                    h(b, k, j(k))
                }
            }
        }
        function h(b, c, d) {
            var e = a.data(b, "tree").options;
            if (c.checkState && void 0 != d && (!c.hidden || e.deepCheck)) {
                var f = a("#" + c.domId).find(".tree-checkbox");
                c.checkState = ["unchecked", "checked", "indeterminate"][d],
                    c.checked = "checked" == c.checkState,
                    f.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2"),
                    f.addClass("tree-checkbox" + d)
            }
        }
        function i(b, c) {
            var d = C(b, a("#" + c.domId)[0]);
            d && (h(b, d, j(d)), i(b, d))
        }
        function j(b) {
            var c = 0,
                d = 0,
                e = 0;
            if (a.easyui.forEach(b.children || [], !1, function (a) {
                a.checkState && (e++, "checked" == a.checkState ? d++ : "unchecked" == a.checkState && c++)
            }), 0 != e) {
                var f = 0;
                return f = c == e ? 0 : d == e ? 1 : 2
            }
        }
        function k(b, c) {
            var d = a.data(b, "tree").options;
            if (d.checkbox) {
                var e = a(c),
                    g = e.find(".tree-checkbox"),
                    h = G(b, c);
                if (d.view.hasCheckbox(b, h)) if (g.length || (h.checkState = h.checkState || "unchecked", a('<span class="tree-checkbox"></span>').insertBefore(e.find(".tree-title"))), "checked" == h.checkState) f(b, c, !0, !0);
                else if ("unchecked" == h.checkState) f(b, c, !1, !0);
                else {
                    var k = j(h);
                    0 === k ? f(b, c, !1, !0) : 1 === k && f(b, c, !0, !0)
                } else g.remove(),
                    h.checkState = void 0,
                    h.checked = void 0,
                    i(b, h)
            }
        }
        function l(b, c, d, g, h) {
            var i = a.data(b, "tree"),
                j = i.options,
                k = a(c).prevAll("div.tree-node:first");
            d = j.loadFilter.call(b, d, k[0]);
            var l = I(b, "domId", k.attr("id"));
            g ? l ? l.children ? l.children = l.children.concat(d) : l.children = d : i.data = i.data.concat(d) : (l ? l.children = d : i.data = d, a(c).empty()),
                j.view.render.call(j.view, b, c, d),
            j.dnd && e(b),
            l && y(b, l);
            for (var n = 0; n < i.tmpIds.length; n++) f(b, a("#" + i.tmpIds[n])[0], !0, !0);
            i.tmpIds = [],
                setTimeout(function () {
                    m(b, b)
                }, 0),
            h || j.onLoadSuccess.call(b, l, d)
        }
        function m(b, c, d) {
            function e(a, b) {
                var c = a.find("span.tree-icon");
                c.prev("span.tree-indent").addClass("tree-join")
            }
            function f(b) {
                var c = b.find("span.tree-indent, span.tree-hit").length;
                b.next().find("div.tree-node").each(function () {
                    a(this).children("span:eq(" + (c - 1) + ")").addClass("tree-line")
                })
            }
            var g = a.data(b, "tree").options;
            if (!g.lines) return void a(b).removeClass("tree-lines");
            if (a(b).addClass("tree-lines"), !d) {
                d = !0,
                    a(b).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom"),
                    a(b).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
                var h = a(b).tree("getRoots");
                h.length > 1 ? a(h[0].target).addClass("tree-root-first") : 1 == h.length && a(h[0].target).addClass("tree-root-one")
            }
            a(c).children("li").each(function () {
                var c = a(this).children("div.tree-node"),
                    g = c.next("ul");
                g.length ? (a(this).next().length && f(c), m(b, g, d)) : e(c)
            });
            var i = a(c).children("li:last").children("div.tree-node").addClass("tree-node-last");
            i.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom")
        }
        function n(b, c, d, e) {
            var f = a.data(b, "tree").options;
            d = a.extend({}, f.queryParams, d || {});
            var g = null;
            if (b != c) {
                var h = a(c).prev();
                g = G(b, h[0])
            }
            if (0 != f.onBeforeLoad.call(b, g, d)) {
                var i = a(c).prev().children("span.tree-folder");
                i.addClass("tree-loading");
                var j = f.loader.call(b, d, function (a) {
                    i.removeClass("tree-loading"),
                        l(b, c, a),
                    e && e()
                }, function () {
                    i.removeClass("tree-loading"),
                        f.onLoadError.apply(b, arguments),
                    e && e()
                });
                0 == j && i.removeClass("tree-loading")
            }
        }
        function o(b, c, d) {
            var e = a.data(b, "tree").options,
                f = a(c).children("span.tree-hit");
            if (0 != f.length && !f.hasClass("tree-expanded")) {
                var g = G(b, c);
                if (0 != e.onBeforeExpand.call(b, g)) {
                    f.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded"),
                        f.next().addClass("tree-folder-open");
                    var h = a(c).next();
                    if (h.length) e.animate ? h.slideDown("normal", function () {
                        g.state = "open",
                            e.onExpand.call(b, g),
                        d && d()
                    }) : (h.css("display", "block"), g.state = "open", e.onExpand.call(b, g), d && d());
                    else {
                        var i = a('<ul style="display:none"></ul>').insertAfter(c);
                        n(b, i[0], {
                            id: g.id
                        }, function () {
                            i.is(":empty") && i.remove(),
                                e.animate ? i.slideDown("normal", function () {
                                    g.state = "open",
                                        e.onExpand.call(b, g),
                                    d && d()
                                }) : (i.css("display", "block"), g.state = "open", e.onExpand.call(b, g), d && d())
                        })
                    }
                }
            }
        }
        function p(b, c) {
            var d = a.data(b, "tree").options,
                e = a(c).children("span.tree-hit");
            if (0 != e.length && !e.hasClass("tree-collapsed")) {
                var f = G(b, c);
                if (0 != d.onBeforeCollapse.call(b, f)) {
                    e.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed"),
                        e.next().removeClass("tree-folder-open");
                    var g = a(c).next();
                    d.animate ? g.slideUp("normal", function () {
                        f.state = "closed",
                            d.onCollapse.call(b, f)
                    }) : (g.css("display", "none"), f.state = "closed", d.onCollapse.call(b, f))
                }
            }
        }
        function q(b, c) {
            var d = a(c).children("span.tree-hit");
            0 != d.length && (d.hasClass("tree-expanded") ? p(b, c) : o(b, c))
        }
        function r(a, b) {
            var c = B(a, b);
            b && c.unshift(G(a, b));
            for (var d = 0; d < c.length; d++) o(a, c[d].target)
        }
        function s(a, b) {
            for (var c = [], d = C(a, b); d;) c.unshift(d),
                d = C(a, d.target);
            for (var e = 0; e < c.length; e++) o(a, c[e].target)
        }
        function t(b, c) {
            for (var d = a(b).parent();
                 "BODY" != d[0].tagName && "auto" != d.css("overflow-y");) d = d.parent();
            var e = a(c),
                f = e.offset().top;
            if ("BODY" != d[0].tagName) {
                var g = d.offset().top;
                f < g ? d.scrollTop(d.scrollTop() + f - g) : f + e.outerHeight() > g + d.outerHeight() - 18 && d.scrollTop(d.scrollTop() + f + e.outerHeight() - g - d.outerHeight() + 18)
            } else d.scrollTop(f)
        }
        function u(a, b) {
            var c = B(a, b);
            b && c.unshift(G(a, b));
            for (var d = 0; d < c.length; d++) p(a, c[d].target)
        }
        function v(b, c) {
            var d = a(c.parent),
                e = c.data;
            if (e && (e = a.isArray(e) ? e : [e], e.length)) {
                var f;
                if (0 == d.length) f = a(b);
                else {
                    if (L(b, d[0])) {
                        var g = d.find("span.tree-icon");
                        g.removeClass("tree-file").addClass("tree-folder tree-folder-open");
                        var h = a('<span class="tree-hit tree-expanded"></span>').insertBefore(g);
                        h.prev().length && h.prev().remove()
                    }
                    f = d.next(),
                    f.length || (f = a("<ul></ul>").insertAfter(d))
                }
                l(b, f[0], e, !0, !0)
            }
        }
        function w(b, c) {
            var d = c.before || c.after,
                e = C(b, d),
                f = c.data;
            if (f && (f = a.isArray(f) ? f : [f], f.length)) {
                v(b, {
                    parent: e ? e.target : null,
                    data: f
                });
                for (var g = e ? e.children : a(b).tree("getRoots"), h = 0; h < g.length; h++) if (g[h].domId == a(d).attr("id")) {
                    for (var i = f.length - 1; i >= 0; i--) g.splice(c.before ? h : h + 1, 0, f[i]);
                    g.splice(g.length - f.length, f.length);
                    break
                }
                for (var j = a(), h = 0; h < f.length; h++) j = j.add(a("#" + f[h].domId).parent());
                c.before ? j.insertBefore(a(d).parent()) : j.insertAfter(a(d).parent())
            }
        }
        function x(b, c) {
            function d(c) {
                for (var d = a(c).attr("id"), e = C(b, c), f = e ? e.children : a.data(b, "tree").data, g = 0; g < f.length; g++) if (f[g].domId == d) {
                    f.splice(g, 1);
                    break
                }
                return e
            }
            var e = d(c);
            if (a(c).parent().remove(), e) {
                if (!e.children || !e.children.length) {
                    var f = a(e.target);
                    f.find(".tree-icon").removeClass("tree-folder").addClass("tree-file"),
                        f.find(".tree-hit").remove(),
                        a('<span class="tree-indent"></span>').prependTo(f),
                        f.next().remove()
                }
                y(b, e)
            }
            m(b, b)
        }
        function y(b, c) {
            var d = a.data(b, "tree").options,
                e = a(c.target),
                f = G(b, c.target);
            f.iconCls && e.find(".tree-icon").removeClass(f.iconCls),
                a.extend(f, c),
                e.find(".tree-title").html(d.formatter.call(b, f)),
            f.iconCls && e.find(".tree-icon").addClass(f.iconCls),
                k(b, c.target)
        }
        function z(a, b) {
            if (b) {
                for (var c = C(a, b); c;) b = c.target,
                    c = C(a, b);
                return G(a, b)
            }
            var d = A(a);
            return d.length ? d[0] : null
        }
        function A(b) {
            for (var c = a.data(b, "tree").data, d = 0; d < c.length; d++) J(c[d]);
            return c
        }
        function B(b, c) {
            var d = [],
                e = G(b, c),
                f = e ? e.children || [] : a.data(b, "tree").data;
            return a.easyui.forEach(f, !0, function (a) {
                d.push(J(a))
            }),
                d
        }
        function C(b, c) {
            var d = a(c).closest("ul").prevAll("div.tree-node:first");
            return G(b, d[0])
        }
        function D(b, c) {
            c = c || "checked",
            a.isArray(c) || (c = [c]);
            var d = [];
            return a.easyui.forEach(a.data(b, "tree").data, !0, function (b) {
                b.checkState && a.easyui.indexOfArray(c, b.checkState) != -1 && d.push(J(b))
            }),
                d
        }

        function E(b) {
            var c = a(b).find("div.tree-node-selected");
            return c.length ? G(b, c[0]) : null
        }
        function F(b, c) {
            var d = G(b, c);
            return d && d.children && a.easyui.forEach(d.children, !0, function (a) {
                J(a)
            }),
                d
        }
        function G(b, c) {
            return I(b, "domId", a(c).attr("id"))
        }
        function H(a, b) {
            return I(a, "id", b)
        }
        function I(b, c, d) {
            var e = a.data(b, "tree").data,
                f = null;
            return a.easyui.forEach(e, !0, function (a) {
                if (a[c] == d) return f = J(a),
                    !1
            }),
                f
        }
        function J(b) {
            return b.target = a("#" + b.domId)[0],
                b
        }
        function K(b, c) {
            var d = a.data(b, "tree").options,
                e = G(b, c);
            0 != d.onBeforeSelect.call(b, e) && (a(b).find("div.tree-node-selected").removeClass("tree-node-selected"), a(c).addClass("tree-node-selected"), d.onSelect.call(b, e))
        }
        function L(b, c) {
            return 0 == a(c).children("span.tree-hit").length
        }
        function M(b, c) {
            var d = a.data(b, "tree").options,
                e = G(b, c);
            if (0 != d.onBeforeEdit.call(b, e)) {
                a(c).css("position", "relative");
                var f = a(c).find(".tree-title"),
                    g = f.outerWidth();
                f.empty();
                var h = a('<input class="tree-editor">').appendTo(f);
                h.val(e.text).focus(),
                    h.width(g + 20),
                    h._outerHeight(18),
                    h.bind("click", function (a) {
                        return !1
                    }).bind("mousedown", function (a) {
                        a.stopPropagation()
                    }).bind("mousemove", function (a) {
                        a.stopPropagation()
                    }).bind("keydown", function (a) {
                        return 13 == a.keyCode ? (N(b, c), !1) : 27 == a.keyCode ? (O(b, c), !1) : void 0
                    }).bind("blur", function (a) {
                        a.stopPropagation(),
                            N(b, c)
                    })
            }
        }
        function N(b, c) {
            var d = a.data(b, "tree").options;
            a(c).css("position", "");
            var e = a(c).find("input.tree-editor"),
                f = e.val();
            e.remove();
            var g = G(b, c);
            g.text = f,
                y(b, g),
                d.onAfterEdit.call(b, g)
        }
        function O(b, c) {
            var d = a.data(b, "tree").options;
            a(c).css("position", ""),
                a(c).find("input.tree-editor").remove();
            var e = G(b, c);
            y(b, e),
                d.onCancelEdit.call(b, e)
        }
        function P(b, c) {
            function d(c) {
                for (var d = a(b).tree("getParent", a("#" + c)[0]); d;) a(d.target).removeClass("tree-node-hidden"),
                    d.hidden = !1,
                    d = a(b).tree("getParent", d.target)
            }
            var e = a.data(b, "tree"),
                f = e.options,
                g = {};
            a.easyui.forEach(e.data, !0, function (d) {
                f.filter.call(b, c, d) ? (a("#" + d.domId).removeClass("tree-node-hidden"), g[d.domId] = 1, d.hidden = !1) : (a("#" + d.domId).addClass("tree-node-hidden"), d.hidden = !0)
            });
            for (var h in g) d(h)
        }
        a.fn.tree = function (d, e) {
            if ("string" == typeof d) return a.fn.tree.methods[d](this, e);
            var d = d || {};
            return this.each(function () {
                var e, f = a.data(this, "tree");
                if (f) e = a.extend(f.options, d),
                    f.options = e;
                else {
                    e = a.extend({}, a.fn.tree.defaults, a.fn.tree.parseOptions(this), d),
                        a.data(this, "tree", {
                            options: e,
                            tree: b(this),
                            data: [],
                            tmpIds: []
                        });
                    var g = a.fn.tree.parseData(this);
                    g.length && l(this, this, g)
                }
                c(this),
                e.data && l(this, this, a.extend(!0, [], e.data)),
                    n(this, this)
            })
        },
            a.fn.tree.methods = {
                options: function (b) {
                    return a.data(b[0], "tree").options
                },
                loadData: function (a, b) {
                    return a.each(function () {
                        l(this, this, b)
                    })
                },
                getNode: function (a, b) {
                    return G(a[0], b)
                },
                getData: function (a, b) {
                    return F(a[0], b)
                },
                reload: function (b, c) {
                    return b.each(function () {
                        if (c) {
                            var b = a(c),
                                d = b.children("span.tree-hit");
                            d.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed"),
                                b.next().remove(),
                                o(this, c)
                        } else a(this).empty(),
                            n(this, this)
                    })
                },
                getRoot: function (a, b) {
                    return z(a[0], b)
                },
                getRoots: function (a) {
                    return A(a[0])
                },
                getParent: function (a, b) {
                    return C(a[0], b)
                },
                getChildren: function (a, b) {
                    return B(a[0], b)
                },
                getChecked: function (a, b) {
                    return D(a[0], b)
                },
                getSelected: function (a) {
                    return E(a[0])
                },
                isLeaf: function (a, b) {
                    return L(a[0], b)
                },
                find: function (a, b) {
                    return H(a[0], b)
                },
                select: function (a, b) {
                    return a.each(function () {
                        K(this, b)
                    })
                },
                check: function (a, b) {
                    return a.each(function () {
                        f(this, b, !0)
                    })
                },
                uncheck: function (a, b) {
                    return a.each(function () {
                        f(this, b, !1)
                    })
                },
                collapse: function (a, b) {
                    return a.each(function () {
                        p(this, b)
                    })
                },
                expand: function (a, b) {
                    return a.each(function () {
                        o(this, b)
                    })
                },
                collapseAll: function (a, b) {
                    return a.each(function () {
                        u(this, b)
                    })
                },
                expandAll: function (a, b) {
                    return a.each(function () {
                        r(this, b)
                    })
                },
                expandTo: function (a, b) {
                    return a.each(function () {
                        s(this, b)
                    })
                },
                scrollTo: function (a, b) {
                    return a.each(function () {
                        t(this, b)
                    })
                },
                toggle: function (a, b) {
                    return a.each(function () {
                        q(this, b)
                    })
                },
                append: function (a, b) {
                    return a.each(function () {
                        v(this, b)
                    })
                },
                insert: function (a, b) {
                    return a.each(function () {
                        w(this, b)
                    })
                },
                remove: function (a, b) {
                    return a.each(function () {
                        x(this, b)
                    })
                },
                pop: function (a, b) {
                    var c = a.tree("getData", b);
                    return a.tree("remove", b),
                        c
                },
                update: function (b, c) {
                    return b.each(function () {
                        y(this, a.extend({}, c, {
                            checkState: c.checked ? "checked" : c.checked === !1 ? "unchecked" : void 0
                        }))
                    })
                },
                enableDnd: function (a) {
                    return a.each(function () {
                        e(this)
                    })
                },
                disableDnd: function (a) {
                    return a.each(function () {
                        d(this)
                    })
                },
                beginEdit: function (a, b) {
                    return a.each(function () {
                        M(this, b)
                    })
                },
                endEdit: function (a, b) {
                    return a.each(function () {
                        N(this, b)
                    })
                },
                cancelEdit: function (a, b) {
                    return a.each(function () {
                        O(this, b)
                    })
                },
                doFilter: function (a, b) {
                    return a.each(function () {
                        P(this, b)
                    })
                }
            },
            a.fn.tree.parseOptions = function (b) {
                a(b);
                return a.extend({}, a.parser.parseOptions(b, ["url", "method", {
                    checkbox: "boolean",
                    cascadeCheck: "boolean",
                    onlyLeafCheck: "boolean"
                },
                    {
                        animate: "boolean",
                        lines: "boolean",
                        dnd: "boolean"
                    }]))
            },
            a.fn.tree.parseData = function (b) {
                function c(b, d) {
                    d.children("li").each(function () {
                        var d = a(this),
                            e = a.extend({}, a.parser.parseOptions(this, ["id", "iconCls", "state"]), {
                                checked: !! d.attr("checked") || void 0
                            });
                        e.text = d.children("span").html(),
                        e.text || (e.text = d.html());
                        var f = d.children("ul");
                        f.length && (e.children = [], c(e.children, f)),
                            b.push(e)
                    })
                }
                var d = [];
                return c(d, a(b)),
                    d
            };
        var Q = 1,
            R = {
                render: function (b, c, d) {
                    function e(c, d) {
                        for (var h = [], j = 0; j < d.length; j++) {
                            var k = d[j];
                            "open" != k.state && "closed" != k.state && (k.state = "open"),
                                k.domId = "_easyui_tree_" + Q++,
                                h.push("<li>"),
                                h.push('<div id="' + k.domId + '" class="tree-node">');
                            for (var l = 0; l < c; l++) h.push('<span class="tree-indent"></span>');
                            if ("closed" == k.state ? (h.push('<span class="tree-hit tree-collapsed"></span>'), h.push('<span class="tree-icon tree-folder ' + (k.iconCls ? k.iconCls : "") + '"></span>')) : k.children && k.children.length ? (h.push('<span class="tree-hit tree-expanded"></span>'), h.push('<span class="tree-icon tree-folder tree-folder-open ' + (k.iconCls ? k.iconCls : "") + '"></span>')) : (h.push('<span class="tree-indent"></span>'), h.push('<span class="tree-icon tree-file ' + (k.iconCls ? k.iconCls : "") + '"></span>')), this.hasCheckbox(b, k)) {
                                var m = 0;
                                i && "checked" == i.checkState && g.cascadeCheck ? (m = 1, k.checked = !0) : k.checked && a.easyui.addArrayItem(f.tmpIds, k.domId),
                                    k.checkState = m ? "checked" : "unchecked",
                                    h.push('<span class="tree-checkbox tree-checkbox' + m + '"></span>')
                            } else k.checkState = void 0,
                                k.checked = void 0;
                            if (h.push('<span class="tree-title">' + g.formatter.call(b, k) + "</span>"), h.push("</div>"), k.children && k.children.length) {
                                var n = e.call(this, c + 1, k.children);
                                h.push('<ul style="display:' + ("closed" == k.state ? "none" : "block") + '">'),
                                    h = h.concat(n),
                                    h.push("</ul>")
                            }
                            h.push("</li>")
                        }
                        return h
                    }
                    var f = a.data(b, "tree"),
                        g = f.options,
                        h = a(c).prev(".tree-node"),
                        i = h.length ? a(b).tree("getNode", h[0]) : null,
                        j = h.find("span.tree-indent, span.tree-hit").length,
                        k = e.call(this, j, d);
                    a(c).append(k.join(""))
                },
                hasCheckbox: function (b, c) {
                    var d = a.data(b, "tree"),
                        e = d.options;
                    if (e.checkbox) {
                        if (a.isFunction(e.checkbox)) return !!e.checkbox.call(b, c);
                        if (!e.onlyLeafCheck) return !0;
                        if (!("open" != c.state || c.children && c.children.length)) return !0
                    }
                    return !1
                }
            };
        a.fn.tree.defaults = {
            url: null,
            method: "post",
            animate: !1,
            checkbox: !1,
            cascadeCheck: !0,
            onlyLeafCheck: !1,
            lines: !1,
            dnd: !1,
            data: null,
            queryParams: {},
            formatter: function (a) {
                return a.text
            },
            filter: function (b, c) {
                var d = [];
                a.map(a.isArray(b) ? b : [b], function (b) {
                    b = a.trim(b),
                    b && d.push(b)
                });
                for (var e = 0; e < d.length; e++) {
                    var f = c.text.toLowerCase().indexOf(d[e].toLowerCase());
                    if (f >= 0) return !0
                }
                return !d.length
            },
            loader: function (b, c, d) {
                var e = a(this).tree("options");
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
            view: R,
            onBeforeLoad: function (a, b) {},
            onLoadSuccess: function (a, b) {},
            onLoadError: function () {},
            onClick: function (a) {},
            onDblClick: function (a) {},
            onBeforeExpand: function (a) {},
            onExpand: function (a) {},
            onBeforeCollapse: function (a) {},
            onCollapse: function (a) {},
            onBeforeCheck: function (a, b) {},
            onCheck: function (a, b) {},
            onBeforeSelect: function (a) {},
            onSelect: function (a) {},
            onContextMenu: function (a, b) {},
            onBeforeDrag: function (a) {},
            onStartDrag: function (a) {},
            onStopDrag: function (a) {},
            onDragEnter: function (a, b) {},
            onDragOver: function (a, b) {},
            onDragLeave: function (a, b) {},
            onBeforeDrop: function (a, b, c) {},
            onDrop: function (a, b, c) {},
            onBeforeEdit: function (a) {},
            onAfterEdit: function (a) {},
            onCancelEdit: function (a) {}
        }
    }(jQuery),


    function (a) {
        function b(b) {
            return a(b).addClass("progressbar"),
                a(b).html('<div class="progressbar-text"></div><div class="progressbar-value"><div class="progressbar-text"></div></div>'),
                a(b).bind("_resize", function (d, e) {
                    return (a(this).hasClass("easyui-fluid") || e) && c(b),
                        !1
                }),
                a(b)
        }
        function c(b, c) {
            var d = a.data(b, "progressbar").options,
                e = a.data(b, "progressbar").bar;
            c && (d.width = c),
                e._size(d),
                e.find("div.progressbar-text").css("width", e.width()),
                e.find("div.progressbar-text,div.progressbar-value").css({
                    height: e.height() + "px",
                    lineHeight: e.height() + "px"
                })
        }
        a.fn.progressbar = function (d, e) {
            if ("string" == typeof d) {
                var f = a.fn.progressbar.methods[d];
                if (f) return f(this, e)
            }
            return d = d || {},
                this.each(function () {
                    var e = a.data(this, "progressbar");
                    e ? a.extend(e.options, d) : e = a.data(this, "progressbar", {
                        options: a.extend({}, a.fn.progressbar.defaults, a.fn.progressbar.parseOptions(this), d),
                        bar: b(this)
                    }),
                        a(this).progressbar("setValue", e.options.value),
                        c(this)
                })
        },
            a.fn.progressbar.methods = {
                options: function (b) {
                    return a.data(b[0], "progressbar").options
                },
                resize: function (a, b) {
                    return a.each(function () {
                        c(this, b)
                    })
                },
                getValue: function (b) {
                    return a.data(b[0], "progressbar").options.value
                },
                setValue: function (b, c) {
                    return c < 0 && (c = 0),
                    c > 100 && (c = 100),
                        b.each(function () {
                            var b = a.data(this, "progressbar").options,
                                d = b.text.replace(/{value}/, c),
                                e = b.value;
                            b.value = c,
                                a(this).find("div.progressbar-value").width(c + "%"),
                                a(this).find("div.progressbar-text").html(d),
                            e != c && b.onChange.call(this, c, e)
                        })
                }
            },
            a.fn.progressbar.parseOptions = function (b) {
                return a.extend({}, a.parser.parseOptions(b, ["width", "height", "text", {
                    value: "number"
                }]))
            },
            a.fn.progressbar.defaults = {
                width: "auto",
                height: 22,
                value: 0,
                text: "{value}%",
                onChange: function (a, b) {}
            }
    }(jQuery),


    function (a) {
        function b(b) {
            a(b).addClass("tooltip-f")
        }
        function c(b) {
            var c = a.data(b, "tooltip").options;
            a(b).unbind(".tooltip").bind(c.showEvent + ".tooltip", function (c) {
                a(b).tooltip("show", c)
            }).bind(c.hideEvent + ".tooltip", function (c) {
                a(b).tooltip("hide", c)
            }).bind("mousemove.tooltip", function (d) {
                c.trackMouse && (c.trackMouseX = d.pageX, c.trackMouseY = d.pageY, a(b).tooltip("reposition"))
            })
        }
        function d(b) {
            var c = a.data(b, "tooltip");
            c.showTimer && (clearTimeout(c.showTimer), c.showTimer = null),
            c.hideTimer && (clearTimeout(c.hideTimer), c.hideTimer = null)
        }
        function e(b) {
            function c(c) {
                e.position = c || "bottom",
                    f.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-" + e.position);
                var d, g, h = a.isFunction(e.deltaX) ? e.deltaX.call(b, e.position) : e.deltaX,
                    i = a.isFunction(e.deltaY) ? e.deltaY.call(b, e.position) : e.deltaY;
                if (e.trackMouse) j = a(),
                    d = e.trackMouseX + h,
                    g = e.trackMouseY + i;
                else {
                    var j = a(b);
                    d = j.offset().left + h,
                        g = j.offset().top + i
                }
                switch (e.position) {
                    case "right":
                        d += j._outerWidth() + 12 + (e.trackMouse ? 12 : 0),
                            g -= (f._outerHeight() - j._outerHeight()) / 2;
                        break;
                    case "left":
                        d -= f._outerWidth() + 12 + (e.trackMouse ? 12 : 0),
                            g -= (f._outerHeight() - j._outerHeight()) / 2;
                        break;
                    case "top":
                        d -= (f._outerWidth() - j._outerWidth()) / 2,
                            g -= f._outerHeight() + 12 + (e.trackMouse ? 12 : 0);
                        break;
                    case "bottom":
                        d -= (f._outerWidth() - j._outerWidth()) / 2,
                            g += j._outerHeight() + 12 + (e.trackMouse ? 12 : 0)
                }
                return {
                    left: d,
                    top: g
                }
            }
            var d = a.data(b, "tooltip");
            if (d && d.tip) {
                var e = d.options,
                    f = d.tip,
                    g = {
                        left: -1e5,
                        top: -1e5
                    };
                if (a(b).is(":visible")) if (g = c(e.position), "top" == e.position && g.top < 0 ? g = c("bottom") : "bottom" == e.position && g.top + f._outerHeight() > a(window)._outerHeight() + a(document).scrollTop() && (g = c("top")), g.left < 0)"left" == e.position ? g = c("right") : (a(b).tooltip("arrow").css("left", f._outerWidth() / 2 + g.left), g.left = 0);
                else if (g.left + f._outerWidth() > a(window)._outerWidth() + a(document)._scrollLeft()) if ("right" == e.position) g = c("left");
                else {
                    var h = g.left;
                    g.left = a(window)._outerWidth() + a(document)._scrollLeft() - f._outerWidth(),
                        a(b).tooltip("arrow").css("left", f._outerWidth() / 2 - (g.left - h))
                }
                f.css({
                    left: g.left,
                    top: g.top,
                    zIndex: void 0 != e.zIndex ? e.zIndex : a.fn.window ? a.fn.window.defaults.zIndex++ : ""
                }),
                    e.onPosition.call(b, g.left, g.top)
            }
        }
        function f(b, c) {
            var e = a.data(b, "tooltip"),
                f = e.options,
                g = e.tip;
            g || (g = a('<div tabindex="-1" class="tooltip"><div class="tooltip-content"></div><div class="tooltip-arrow-outer"></div><div class="tooltip-arrow"></div></div>').appendTo("body"), e.tip = g, h(b)),
                d(b),
                e.showTimer = setTimeout(function () {
                    a(b).tooltip("reposition"),
                        g.show(),
                        f.onShow.call(b, c);
                    var d = g.children(".tooltip-arrow-outer"),
                        e = g.children(".tooltip-arrow"),
                        h = "border-" + f.position + "-color";
                    d.add(e).css({
                        borderTopColor: "",
                        borderBottomColor: "",
                        borderLeftColor: "",
                        borderRightColor: ""
                    }),
                        d.css(h, g.css(h)),
                        e.css(h, g.css("backgroundColor"))
                }, f.showDelay)
        }
        function g(b, c) {
            var e = a.data(b, "tooltip");
            e && e.tip && (d(b), e.hideTimer = setTimeout(function () {
                e.tip.hide(),
                    e.options.onHide.call(b, c)
            }, e.options.hideDelay))
        }
        function h(b, c) {
            var d = a.data(b, "tooltip"),
                e = d.options;
            if (c && (e.content = c), d.tip) {
                var f = "function" == typeof e.content ? e.content.call(b) : e.content;
                d.tip.children(".tooltip-content").html(f),
                    e.onUpdate.call(b, f)
            }
        }
        function i(b) {
            var c = a.data(b, "tooltip");
            if (c) {
                d(b);
                var e = c.options;
                c.tip && c.tip.remove(),
                e._title && a(b).attr("title", e._title),
                    a.removeData(b, "tooltip"),
                    a(b).unbind(".tooltip").removeClass("tooltip-f"),
                    e.onDestroy.call(b)
            }
        }
        a.fn.tooltip = function (d, e) {
            return "string" == typeof d ? a.fn.tooltip.methods[d](this, e) : (d = d || {}, this.each(function () {
                var e = a.data(this, "tooltip");
                e ? a.extend(e.options, d) : (a.data(this, "tooltip", {
                    options: a.extend({}, a.fn.tooltip.defaults, a.fn.tooltip.parseOptions(this), d)
                }), b(this)),
                    c(this),
                    h(this)
            }))
        },
            a.fn.tooltip.methods = {
                options: function (b) {
                    return a.data(b[0], "tooltip").options
                },
                tip: function (b) {
                    return a.data(b[0], "tooltip").tip
                },
                arrow: function (a) {
                    return a.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow")
                },
                show: function (a, b) {
                    return a.each(function () {
                        f(this, b)
                    })
                },
                hide: function (a, b) {
                    return a.each(function () {
                        g(this, b)
                    })
                },
                update: function (a, b) {
                    return a.each(function () {
                        h(this, b)
                    })
                },
                reposition: function (a) {
                    return a.each(function () {
                        e(this)
                    })
                },
                destroy: function (a) {
                    return a.each(function () {
                        i(this)
                    })
                }
            },
            a.fn.tooltip.parseOptions = function (b) {
                var c = a(b),
                    d = a.extend({}, a.parser.parseOptions(b, ["position", "showEvent", "hideEvent", "content", {
                        trackMouse: "boolean",
                        deltaX: "number",
                        deltaY: "number",
                        showDelay: "number",
                        hideDelay: "number"
                    }]), {
                        _title: c.attr("title")
                    });
                return c.attr("title", ""),
                d.content || (d.content = d._title),
                    d
            },
            a.fn.tooltip.defaults = {
                position: "bottom",
                content: null,
                trackMouse: !1,
                deltaX: 0,
                deltaY: 0,
                showEvent: "mouseenter",
                hideEvent: "mouseleave",
                showDelay: 200,
                hideDelay: 100,
                onShow: function (a) {},
                onHide: function (a) {},
                onUpdate: function (a) {},
                onPosition: function (a, b) {},
                onDestroy: function () {}
            }
    }(jQuery),


    function ($) {
        function removeNode(a) {
            a._remove()
        }
        function setSize(a, b) {
            var c = $.data(a, "panel"),
                d = c.options,
                e = c.panel,
                f = e.children(".panel-header"),
                g = e.children(".panel-body"),
                h = e.children(".panel-footer"),
                i = "left" == d.halign || "right" == d.halign;
            if (b && $.extend(d, {
                width: b.width,
                height: b.height,
                minWidth: b.minWidth,
                maxWidth: b.maxWidth,
                minHeight: b.minHeight,
                maxHeight: b.maxHeight,
                left: b.left,
                top: b.top
            }), e._size(d), i || f._outerWidth(e.width()), g._outerWidth(e.width()), isNaN(parseInt(d.height))) {
                g.css("height", "");
                var j = $.parser.parseValue("minHeight", d.minHeight, e.parent()),
                    k = $.parser.parseValue("maxHeight", d.maxHeight, e.parent()),
                    l = f._outerHeight() + h._outerHeight() + e._outerHeight() - e.height();
                g._size("minHeight", j ? j - l : ""),
                    g._size("maxHeight", k ? k - l : "")
            } else if (i) {
                if (d.header) var m = $(d.header)._outerWidth();
                else {
                    f.css("width", "");
                    var m = f._outerWidth()
                }
                var n = f.find(".panel-title");
                m += Math.min(n._outerWidth(), n._outerHeight());
                var o = e.height();
                f._outerWidth(m)._outerHeight(o),
                    n._outerWidth(f.height()),
                    g._outerWidth(e.width() - m - h._outerWidth())._outerHeight(o),
                    h._outerHeight(o),
                    g.css({
                        left: "",
                        right: ""
                    }).css(d.halign, f.position()[d.halign] + m + "px"),
                    d.panelCssWidth = e.css("width"),
                d.collapsed && e._outerWidth(m + h._outerWidth())
            } else g._outerHeight(e.height() - f._outerHeight() - h._outerHeight());
            e.css({
                height: i ? void 0 : "",
                minHeight: "",
                maxHeight: "",
                left: d.left,
                top: d.top
            }),
                d.onResize.apply(a, [d.width, d.height]),
                $(a).panel("doLayout")
        }
        function movePanel(a, b) {
            var c = $.data(a, "panel"),
                d = c.options,
                e = c.panel;
            b && (null != b.left && (d.left = b.left), null != b.top && (d.top = b.top)),
                e.css({
                    left: d.left,
                    top: d.top
                }),
                e.find(".tooltip-f").each(function () {
                    $(this).tooltip("reposition")
                }),
                d.onMove.apply(a, [d.left, d.top])
        }
        function wrapPanel(a) {
            $(a).addClass("panel-body")._size("clear");
            var b = $('<div class="panel"></div>').insertBefore(a);
            return b[0].appendChild(a),
                b.bind("_resize", function (b, c) {
                    return ($(this).hasClass("easyui-fluid") || c) && setSize(a),
                        !1
                }),
                b
        }
        function createPanel(target) {
            function _addHeader() {
                if (opts.noheader || !opts.title && !opts.header) removeNode(panel.children(".panel-header")),
                    panel.children(".panel-body").addClass("panel-body-noheader");
                else {
                    if (opts.header) $(opts.header).addClass("panel-header").prependTo(panel);
                    else {
                        var header = panel.children(".panel-header");
                        header.length || (header = $('<div class="panel-header"></div>').prependTo(panel)),
                        $.isArray(opts.tools) || header.find("div.panel-tool .panel-tool-a").appendTo(opts.tools),
                            header.empty();
                        var htitle = $('<div class="panel-title"></div>').html(opts.title).appendTo(header);
                        opts.iconCls && (htitle.addClass("panel-with-icon"), $('<div class="panel-icon"></div>').addClass(opts.iconCls).appendTo(header)),
                        "left" != opts.halign && "right" != opts.halign || htitle.addClass("panel-title-" + opts.titleDirection);
                        var tool = $('<div class="panel-tool"></div>').appendTo(header);
                        tool.bind("click", function (a) {
                            a.stopPropagation()
                        }),
                        opts.tools && ($.isArray(opts.tools) ? $.map(opts.tools, function (t) {
                            _buildTool(tool, t.iconCls, eval(t.handler))
                        }) : $(opts.tools).children().each(function () {
                            $(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool)
                        })),
                        opts.collapsible && _buildTool(tool, "panel-tool-collapse", function () {
                            1 == opts.collapsed ? expandPanel(target, !0) : collapsePanel(target, !0)
                        }),
                        opts.minimizable && _buildTool(tool, "panel-tool-min", function () {
                            minimizePanel(target)
                        }),
                        opts.maximizable && _buildTool(tool, "panel-tool-max", function () {
                            1 == opts.maximized ? restorePanel(target) : maximizePanel(target)
                        }),
                        opts.closable && _buildTool(tool, "panel-tool-close", function () {
                            /*closePanel(target)*/
                            destroyPanel(target)
                        })
                    }
                    panel.children("div.panel-body").removeClass("panel-body-noheader")
                }
            }
            function _buildTool(a, b, c) {
                var d = $('<a href="javascript:;"></a>').addClass(b).appendTo(a);
                d.bind("click", c)
            }
            function _addFooter() {
                opts.footer ? ($(opts.footer).addClass("panel-footer").appendTo(panel), $(target).addClass("panel-body-nobottom")) : (panel.children(".panel-footer").remove(), $(target).removeClass("panel-body-nobottom"))
            }
            var state = $.data(target, "panel"),
                opts = state.options,
                panel = state.panel;
            panel.css(opts.style),
                panel.addClass(opts.cls),
                panel.removeClass("panel-hleft panel-hright").addClass("panel-h" + opts.halign),
                _addHeader(),
                _addFooter();
            var header = $(target).panel("header"),
                body = $(target).panel("body"),
                footer = $(target).siblings(".panel-footer");
            opts.border ? (header.removeClass("panel-header-noborder"), body.removeClass("panel-body-noborder"), footer.removeClass("panel-footer-noborder")) : (header.addClass("panel-header-noborder"), body.addClass("panel-body-noborder"), footer.addClass("panel-footer-noborder")),
                header.addClass(opts.headerCls),
                body.addClass(opts.bodyCls),
                $(target).attr("id", opts.id || ""),
            opts.content && ($(target).panel("clear"), $(target).html(opts.content), $.parser.parse($(target)))
        }
        function loadData(a, b) {
            var c = $.data(a, "panel"),
                d = c.options;
            if (e && (d.queryParams = b), d.href && (!c.isLoaded || !d.cache)) {
                var e = $.extend({}, d.queryParams);
                if (0 == d.onBeforeLoad.call(a, e)) return;
                c.isLoaded = !1,
                d.loadingMessage && ($(a).panel("clear"), $(a).html($('<div class="panel-loading"></div>').html(d.loadingMessage))),
                    d.loader.call(a, e, function (b) {
                        var e = d.extractor.call(a, b);
                        $(a).panel("clear"),
                            $(a).html(e),
                            $.parser.parse($(a)),
                            d.onLoad.apply(a, arguments),
                            c.isLoaded = !0
                    }, function () {
                        d.onLoadError.apply(a, arguments)
                    })
            }
        }
        function clearPanel(a) {
            var b = $(a);
            b.find(".combo-f").each(function () {
                $(this).combo("destroy")
            }),
                b.find(".m-btn").each(function () {
                    $(this).menubutton("destroy")
                }),
                b.find(".s-btn").each(function () {
                    $(this).splitbutton("destroy")
                }),
                b.find(".tooltip-f").each(function () {
                    $(this).tooltip("destroy")
                }),
                b.children("div").each(function () {
                    $(this)._size("unfit")
                }),
                b.empty()
        }
        function doLayout(a) {
            $(a).panel("doLayout", !0)
        }
        function openPanel(a, b) {
            function c() {
                d.closed = !1,
                    d.minimized = !1;
                var b = e.children(".panel-header").find("a.panel-tool-restore");
                b.length && (d.maximized = !0),
                    d.onOpen.call(a),
                1 == d.maximized && (d.maximized = !1, maximizePanel(a)),
                1 == d.collapsed && (d.collapsed = !1, collapsePanel(a)),
                d.collapsed || (loadData(a), doLayout(a))
            }
            var d = $.data(a, "panel").options,
                e = $.data(a, "panel").panel;
            if (1 == b || 0 != d.onBeforeOpen.call(a)) if (e.stop(!0, !0), $.isFunction(d.openAnimation)) d.openAnimation.call(a, c);
            else switch (d.openAnimation) {
                    case "slide":
                        e.slideDown(d.openDuration, c);
                        break;
                    case "fade":
                        e.fadeIn(d.openDuration, c);
                        break;
                    case "show":
                        e.show(d.openDuration, c);
                        break;
                    default:
                        e.show(),
                            c()
                }
        }
        function closePanel(a, b) {
            function c() {
                e.closed = !0,
                    e.onClose.call(a)
            }
            var d = $.data(a, "panel"),
                e = d.options,
                f = d.panel;
            if (1 == b || 0 != e.onBeforeClose.call(a)) if (f.find(".tooltip-f").each(function () {
                $(this).tooltip("hide")
            }), f.stop(!0, !0), f._size("unfit"), $.isFunction(e.closeAnimation)) e.closeAnimation.call(a, c);
            else switch (e.closeAnimation) {
                    case "slide":
                        f.slideUp(e.closeDuration, c);
                        break;
                    case "fade":
                        f.fadeOut(e.closeDuration, c);
                        break;
                    case "hide":
                        f.hide(e.closeDuration, c);
                        break;
                    default:
                        f.hide(),
                            c()
                }
        }
        function destroyPanel(a, b) {
            var c = $.data(a, "panel"),
                d = c.options,
                e = c.panel;
            1 != b && 0 == d.onBeforeDestroy.call(a) || ($(a).panel("clear").panel("clear", "footer"), removeNode(e), d.onDestroy.call(a))
        }
        function collapsePanel(a, b) {
            function c() {
                f.hide(),
                    d.collapsed = !0,
                    d.onCollapse.call(a)
            }
            var d = $.data(a, "panel").options,
                e = $.data(a, "panel").panel,
                f = e.children(".panel-body"),
                g = e.children(".panel-header"),
                h = g.find("a.panel-tool-collapse");
            1 != d.collapsed && (f.stop(!0, !0), 0 != d.onBeforeCollapse.call(a) && (h.addClass("panel-tool-expand"), 1 == b ? "left" == d.halign || "right" == d.halign ? e.animate({
                width: g._outerWidth() + e.children(".panel-footer")._outerWidth()
            }, function () {
                c()
            }) : f.slideUp("normal", function () {
                c()
            }) : ("left" != d.halign && "right" != d.halign || e._outerWidth(g._outerWidth() + e.children(".panel-footer")._outerWidth()), c())))
        }
        function expandPanel(a, b) {
            function c() {
                f.show(),
                    d.collapsed = !1,
                    d.onExpand.call(a),
                    loadData(a),
                    doLayout(a)
            }
            var d = $.data(a, "panel").options,
                e = $.data(a, "panel").panel,
                f = e.children(".panel-body"),
                g = e.children(".panel-header").find("a.panel-tool-collapse");
            0 != d.collapsed && (f.stop(!0, !0), 0 != d.onBeforeExpand.call(a) && (g.removeClass("panel-tool-expand"), 1 == b ? "left" == d.halign || "right" == d.halign ? (f.show(), e.animate({
                width: d.panelCssWidth
            }, function () {
                c()
            })) : f.slideDown("normal", function () {
                c()
            }) : ("left" != d.halign && "right" != d.halign || e.css("width", d.panelCssWidth), c())))
        }
        function maximizePanel(a) {
            var b = $.data(a, "panel").options,
                c = $.data(a, "panel").panel,
                d = c.children(".panel-header").find("a.panel-tool-max");
            1 != b.maximized && (d.addClass("panel-tool-restore"), $.data(a, "panel").original || ($.data(a, "panel").original = {
                width: b.width,
                height: b.height,
                left: b.left,
                top: b.top,
                fit: b.fit
            }), b.left = 0, b.top = 0, b.fit = !0, setSize(a), b.minimized = !1, b.maximized = !0, b.onMaximize.call(a))
        }
        function minimizePanel(a) {
            var b = $.data(a, "panel").options,
                c = $.data(a, "panel").panel;
            c._size("unfit"),
                c.hide(),
                b.minimized = !0,
                b.maximized = !1,
                b.onMinimize.call(a)
        }
        function restorePanel(a) {
            var b = $.data(a, "panel").options,
                c = $.data(a, "panel").panel,
                d = c.children(".panel-header").find("a.panel-tool-max");
            0 != b.maximized && (c.show(), d.removeClass("panel-tool-restore"), $.extend(b, $.data(a, "panel").original), setSize(a), b.minimized = !1, b.maximized = !1, $.data(a, "panel").original = null, b.onRestore.call(a))
        }
        function setTitle(a, b) {
            $.data(a, "panel").options.title = b,
                $(a).panel("header").find("div.panel-title").html(b)
        }
        $.fn._remove = function () {
            return this.each(function () {
                $(this).remove();
                try {
                    this.outerHTML = ""
                } catch (a) {}
            })
        };
        var resizeTimer = null;
        $(window).unbind(".panel").bind("resize.panel", function () {
            resizeTimer && clearTimeout(resizeTimer),
                resizeTimer = setTimeout(function () {
                    var a = $("body.layout");
                    a.length ? (a.layout("resize"), $("body").children(".easyui-fluid:visible").each(function () {
                        $(this).triggerHandler("_resize")
                    })) : $("body").panel("doLayout"),
                        resizeTimer = null
                }, 100)
        }),
            $.fn.panel = function (a, b) {
                return "string" == typeof a ? $.fn.panel.methods[a](this, b) : (a = a || {}, this.each(function () {
                    var b, c = $.data(this, "panel");
                    c ? (b = $.extend(c.options, a), c.isLoaded = !1) : (b = $.extend({}, $.fn.panel.defaults, $.fn.panel.parseOptions(this), a), $(this).attr("title", ""), c = $.data(this, "panel", {
                        options: b,
                        panel: wrapPanel(this),
                        isLoaded: !1
                    })),
                        createPanel(this),
                        $(this).show(),
                    1 == b.doSize && (c.panel.css("display", "block"), setSize(this)),
                        1 == b.closed || 1 == b.minimized ? c.panel.hide() : openPanel(this)
                }))
            },
            $.fn.panel.methods = {
                options: function (a) {
                    return $.data(a[0], "panel").options
                },
                panel: function (a) {
                    return $.data(a[0], "panel").panel
                },
                header: function (a) {
                    return $.data(a[0], "panel").panel.children(".panel-header")
                },
                footer: function (a) {
                    return a.panel("panel").children(".panel-footer")
                },
                body: function (a) {
                    return $.data(a[0], "panel").panel.children(".panel-body")
                },
                setTitle: function (a, b) {
                    return a.each(function () {
                        setTitle(this, b)
                    })
                },
                open: function (a, b) {
                    return a.each(function () {
                        openPanel(this, b)
                    })
                },
                close: function (a, b) {
                    return a.each(function () {
                        closePanel(this, b)
                    })
                },
                destroy: function (a, b) {
                    return a.each(function () {
                        destroyPanel(this, b)
                    })
                },
                clear: function (a, b) {
                    return a.each(function () {
                        clearPanel("footer" == b ? $(this).panel("footer") : this)
                    })
                },
                refresh: function (a, b) {
                    return a.each(function () {
                        var a = $.data(this, "panel");
                        a.isLoaded = !1,
                        b && ("string" == typeof b ? a.options.href = b : a.options.queryParams = b),
                            loadData(this)
                    })
                },
                resize: function (a, b) {
                    return a.each(function () {
                        setSize(this, b)
                    })
                },
                doLayout: function (a, b) {
                    return a.each(function () {
                        function a(a, c) {
                            if (a) {
                                var d = a == $("body")[0],
                                    e = $(a).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function (b, e) {
                                        var f = $(e).parents(".panel-" + c + ":first");
                                        return d ? 0 == f.length : f[0] == a
                                    });
                                e.each(function () {
                                    $(this).triggerHandler("_resize", [b || !1])
                                })
                            }
                        }
                        a(this, "body"),
                            a($(this).siblings(".panel-footer")[0], "footer")
                    })
                },
                move: function (a, b) {
                    return a.each(function () {
                        movePanel(this, b)
                    })
                },
                maximize: function (a) {
                    return a.each(function () {
                        maximizePanel(this)
                    })
                },
                minimize: function (a) {
                    return a.each(function () {
                        minimizePanel(this)
                    })
                },
                restore: function (a) {
                    return a.each(function () {
                        restorePanel(this)
                    })
                },
                collapse: function (a, b) {
                    return a.each(function () {
                        collapsePanel(this, b)
                    })
                },
                expand: function (a, b) {
                    return a.each(function () {
                        expandPanel(this, b)
                    })
                }
            },
            $.fn.panel.parseOptions = function (a) {
                var b = $(a),
                    c = b.children(".panel-header,header"),
                    d = b.children(".panel-footer,footer");
                return $.extend({}, $.parser.parseOptions(a, ["id", "width", "height", "left", "top", "title", "iconCls", "cls", "headerCls", "bodyCls", "tools", "href", "method", "header", "footer", "halign", "titleDirection", {
                    cache: "boolean",
                    fit: "boolean",
                    border: "boolean",
                    noheader: "boolean"
                },
                    {
                        collapsible: "boolean",
                        minimizable: "boolean",
                        maximizable: "boolean"
                    },
                    {
                        closable: "boolean",
                        collapsed: "boolean",
                        minimized: "boolean",
                        maximized: "boolean",
                        closed: "boolean"
                    },
                    "openAnimation", "closeAnimation", {
                        openDuration: "number",
                        closeDuration: "number"
                    }]), {
                    loadingMessage: void 0 != b.attr("loadingMessage") ? b.attr("loadingMessage") : void 0,
                    header: c.length ? c.removeClass("panel-header") : void 0,
                    footer: d.length ? d.removeClass("panel-footer") : void 0
                })
            },
            $.fn.panel.defaults = {
                id: null,
                title: null,
                iconCls: null,
                width: "auto",
                height: "auto",
                left: null,
                top: null,
                cls: null,
                headerCls: null,
                bodyCls: null,
                style: {},
                href: null,
                cache: !0,
                fit: !1,
                border: !0,
                doSize: !0,
                noheader: !1,
                content: null,
                halign: "top",
                titleDirection: "down",
                collapsible: !1,
                minimizable: !1,
                maximizable: !1,
                closable: !1,
                collapsed: !1,
                minimized: !1,
                maximized: !1,
                closed: !1,
                openAnimation: !1,
                openDuration: 400,
                closeAnimation: !1,
                closeDuration: 400,
                tools: null,
                footer: null,
                header: null,
                queryParams: {},
                method: "get",
                href: null,
                loadingMessage: "Loading...",
                loader: function (a, b, c) {
                    var d = $(this).panel("options");
                    return !!d.href && void $.ajax({
                        type: d.method,
                        url: d.href,
                        cache: !1,
                        data: a,
                        dataType: "html",
                        success: function (a) {
                            b(a)
                        },
                        error: function () {
                            c.apply(this, arguments)
                        }
                    })
                },
                extractor: function (a) {
                    var b = /<body[^>]*>((.|[\n\r])*)<\/body>/im,
                        c = b.exec(a);
                    return c ? c[1] : a
                },
                onBeforeLoad: function (a) {},
                onLoad: function () {},
                onLoadError: function () {},
                onBeforeOpen: function () {},
                onOpen: function () {},
                onBeforeClose: function () {},
                onClose: function () {},
                onBeforeDestroy: function () {},
                onDestroy: function () {},
                onResize: function (a, b) {},
                onMove: function (a, b) {},
                onMaximize: function () {},
                onRestore: function () {},
                onMinimize: function () {},
                onBeforeCollapse: function () {},
                onBeforeExpand: function () {},
                onCollapse: function () {},
                onExpand: function () {}
            }
    }(jQuery),


    function (a) {
        function b(b, c) {
            var d = a.data(b, "window");
            c && (null != c.left && (d.options.left = c.left), null != c.top && (d.options.top = c.top)),
                a(b).panel("move", d.options),
            d.shadow && d.shadow.css({
                left: d.options.left,
                top: d.options.top
            })
        }
        function c(c, d) {
            var e = a.data(c, "window").options,
                f = a(c).window("panel"),
                g = f._outerWidth();
            if (e.inline) {
                var h = f.parent();
                e.left = Math.ceil((h.width() - g) / 2 + h.scrollLeft())
            } else e.left = Math.ceil((a(window)._outerWidth() - g) / 2 + a(document).scrollLeft());
            d && b(c)
        }
        function d(c, d) {
            var e = a.data(c, "window").options,
                f = a(c).window("panel"),
                g = f._outerHeight();
            if (e.inline) {
                var h = f.parent();
                e.top = Math.ceil((h.height() - g) / 2 + h.scrollTop())
            } else e.top = Math.ceil((a(window)._outerHeight() - g) / 2 + a(document).scrollTop());
            d && b(c)
        }
        function e(e) {
            var f = a.data(e, "window"),
                g = f.options,
                h = a(e).panel(a.extend({}, f.options, {
                    border: !1,
                    doSize: !0,
                    closed: !0,
                    cls: "window " + (g.border ? "thin" == g.border ? "window-thinborder " : "" : "window-thinborder window-noborder ") + (g.cls || ""),
                    headerCls: "window-header " + (g.headerCls || ""),
                    bodyCls: "window-body " + (g.noheader ? "window-body-noheader " : " ") + (g.bodyCls || ""),
                    onBeforeDestroy: function () {
                        return 0 != g.onBeforeDestroy.call(e) && (f.shadow && f.shadow.remove(), void(f.mask && f.mask.remove()))
                    },
                    onClose: function () {
                        f.shadow && f.shadow.hide(),
                        f.mask && f.mask.hide(),
                            g.onClose.call(e)
                    },
                    onOpen: function () {
                        f.mask && f.mask.css(a.extend({
                            display: "block",
                            zIndex: a.fn.window.defaults.zIndex++
                        }, a.fn.window.getMaskSize(e))),
                        f.shadow && f.shadow.css({
                            display: "block",
                            zIndex: a.fn.window.defaults.zIndex++,
                            left: g.left,
                            top: g.top,
                            width: f.window._outerWidth(),
                            height: f.window._outerHeight()
                        }),
                            f.window.css("z-index", a.fn.window.defaults.zIndex++),
                            g.onOpen.call(e)
                    },
                    onResize: function (b, c) {
                        var d = a(this).panel("options");
                        a.extend(g, {
                            width: d.width,
                            height: d.height,
                            left: d.left,
                            top: d.top
                        }),
                        f.shadow && f.shadow.css({
                            left: g.left,
                            top: g.top,
                            width: f.window._outerWidth(),
                            height: f.window._outerHeight()
                        }),
                            g.onResize.call(e, b, c)
                    },
                    onMinimize: function () {
                        f.shadow && f.shadow.hide(),
                        f.mask && f.mask.hide(),
                            f.options.onMinimize.call(e)
                    },
                    onBeforeCollapse: function () {
                        return 0 != g.onBeforeCollapse.call(e) && void(f.shadow && f.shadow.hide())
                    },
                    onExpand: function () {
                        f.shadow && f.shadow.show(),
                            g.onExpand.call(e)
                    }
                }));
            f.window = h.panel("panel"),
            f.mask && f.mask.remove(),
            g.modal && (f.mask = a('<div class="window-mask" style="display:none"></div>').insertAfter(f.window)),
            f.shadow && f.shadow.remove(),
            g.shadow && (f.shadow = a('<div class="window-shadow" style="display:none"></div>').insertAfter(f.window));
            var i = g.closed;
            null == g.left && c(e),
            null == g.top && d(e),
                b(e),
            i || h.window("open")
        }
        function f(b, c, d, e) {
            var f = this,
                g = a.data(f, "window"),
                h = g.options;
            if (!h.constrain) return {};
            if (a.isFunction(h.constrain)) return h.constrain.call(f, b, c, d, e);
            var i = a(f).window("window"),
                j = h.inline ? i.parent() : a(window);
            return b < 0 && (b = 0),
            c < j.scrollTop() && (c = j.scrollTop()),
            b + d > j.width() && (d == i.outerWidth() ? b = j.width() - d : d = j.width() - b),
            c - j.scrollTop() + e > j.height() && (e == i.outerHeight() ? c = j.height() - e + j.scrollTop() : e = j.height() - c + j.scrollTop()),
                {
                    left: b,
                    top: c,
                    width: d,
                    height: e
                }
        }
        function g(b) {
            function c(b) {
                g.pmask && g.pmask.remove(),
                    g.pmask = a('<div class="window-proxy-mask"></div>').insertAfter(g.window),
                    g.pmask.css({
                        display: "none",
                        zIndex: a.fn.window.defaults.zIndex++,
                        left: b.data.left,
                        top: b.data.top,
                        width: g.window._outerWidth(),
                        height: g.window._outerHeight()
                    }),
                g.proxy && g.proxy.remove(),
                    g.proxy = a('<div class="window-proxy"></div>').insertAfter(g.window),
                    g.proxy.css({
                        display: "none",
                        zIndex: a.fn.window.defaults.zIndex++,
                        left: b.data.left,
                        top: b.data.top
                    }),
                    g.proxy._outerWidth(b.data.width)._outerHeight(b.data.height),
                    g.proxy.hide(),
                    setTimeout(function () {
                        g.pmask && g.pmask.show(),
                        g.proxy && g.proxy.show()
                    }, 500)
            }
            function d(c) {
                a.extend(c.data, f.call(b, c.data.left, c.data.top, c.data.width, c.data.height)),
                    g.pmask.show(),
                    g.proxy.css({
                        display: "block",
                        left: c.data.left,
                        top: c.data.top
                    }),
                    g.proxy._outerWidth(c.data.width),
                    g.proxy._outerHeight(c.data.height)
            }
            function e(c, d) {
                a.extend(c.data, f.call(b, c.data.left, c.data.top, c.data.width + .1, c.data.height + .1)),
                    a(b).window(d, c.data),
                    g.pmask.remove(),
                    g.pmask = null,
                    g.proxy.remove(),
                    g.proxy = null
            }
            var g = a.data(b, "window");
            g.window.draggable({
                handle: ">div.panel-header>div.panel-title",
                disabled: 0 == g.options.draggable,
                onBeforeDrag: function (b) {
                    g.mask && g.mask.css("z-index", a.fn.window.defaults.zIndex++),
                    g.shadow && g.shadow.css("z-index", a.fn.window.defaults.zIndex++),
                        g.window.css("z-index", a.fn.window.defaults.zIndex++)
                },
                onStartDrag: function (a) {
                    c(a)
                },
                onDrag: function (a) {
                    return d(a),
                        !1
                },
                onStopDrag: function (a) {
                    e(a, "move")
                }
            }),
                g.window.resizable({
                    disabled: 0 == g.options.resizable,
                    onStartResize: function (a) {
                        c(a)
                    },
                    onResize: function (a) {
                        return d(a),
                            !1
                    },
                    onStopResize: function (a) {
                        e(a, "resize")
                    }
                })
        }
        a(function () {
            a._positionFixed || a(window).resize(function () {
                a("body>div.window-mask:visible").css({
                    width: "",
                    height: ""
                }),
                    setTimeout(function () {
                        a("body>div.window-mask:visible").css(a.fn.window.getMaskSize())
                    }, 50)
            })
        }),
            a.fn.window = function (b, c) {
                if ("string" == typeof b) {
                    var d = a.fn.window.methods[b];
                    return d ? d(this, c) : this.panel(b, c)
                }
                return b = b || {},
                    this.each(function () {
                        var c = a.data(this, "window");
                        c ? a.extend(c.options, b) : (c = a.data(this, "window", {
                            options: a.extend({}, a.fn.window.defaults, a.fn.window.parseOptions(this), b)
                        }), c.options.inline || document.body.appendChild(this)),
                            e(this),
                            g(this)
                    })
            },
            a.fn.window.methods = {
                options: function (b) {
                    var c = b.panel("options"),
                        d = a.data(b[0], "window").options;
                    return a.extend(d, {
                        closed: c.closed,
                        collapsed: c.collapsed,
                        minimized: c.minimized,
                        maximized: c.maximized
                    })
                },
                window: function (b) {
                    return a.data(b[0], "window").window
                },
                move: function (a, c) {
                    return a.each(function () {
                        b(this, c)
                    })
                },
                hcenter: function (a) {
                    return a.each(function () {
                        c(this, !0)
                    })
                },
                vcenter: function (a) {
                    return a.each(function () {
                        d(this, !0)
                    })
                },
                center: function (a) {
                    return a.each(function () {
                        c(this),
                            d(this),
                            b(this)
                    })
                }
            },
            a.fn.window.getMaskSize = function (b) {
                var c = a(b).data("window");
                return c && c.options.inline ? {} : a._positionFixed ? {
                    position: "fixed"
                } : {
                    width: a(document).width(),
                    height: a(document).height()
                }
            },
            a.fn.window.parseOptions = function (b) {
                return a.extend({}, a.fn.panel.parseOptions(b), a.parser.parseOptions(b, [{
                    draggable: "boolean",
                    resizable: "boolean",
                    shadow: "boolean",
                    modal: "boolean",
                    inline: "boolean"
                }]))
            },
            a.fn.window.defaults = a.extend({}, a.fn.panel.defaults, {
                zIndex: 9e3,
                draggable: !0,
                resizable: !0,
                shadow: !0,
                modal: !1,
                border: !0,
                inline: !1,
                title: "New Window",
                collapsible: !0,
                minimizable: !0,
                maximizable: !0,
                closable: !0,
                closed: !1,
                constrain: !1
            })
    }(jQuery),


    function ($) {
        function buildDialog(target) {

            var opts = $.data(target, "dialog").options;
            opts.inited = !1,
                $(target).window($.extend({}, opts, {
                    onResize: function (a, b) {
                        opts.inited && (setContentSize(this), opts.onResize.call(this, a, b))
                    }
                }));
            var win = $(target).window("window");
            if (opts.toolbar) if ($.isArray(opts.toolbar)) {
                $(target).siblings("div.dialog-toolbar").remove();
                for (var toolbar = $('<div class="dialog-toolbar"><table cellspacing="0" cellpadding="0"><tr></tr></table></div>').appendTo(win), tr = toolbar.find("tr"), i = 0; i < opts.toolbar.length; i++) {
                    var btn = opts.toolbar[i];
                    if ("-" == btn) $('<td><div class="dialog-tool-separator"></div></td>').appendTo(tr);
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
            } else $(opts.toolbar).addClass("dialog-toolbar").appendTo(win),
                $(opts.toolbar).show();
            else $(target).siblings("div.dialog-toolbar").remove();
            if (opts.buttons) if ($.isArray(opts.buttons)) {
                $(target).siblings("div.dialog-button").remove();
                for (var buttons = $('<div class="dialog-button"></div>').appendTo(win), i = 0; i < opts.buttons.length; i++) {
                    var p = opts.buttons[i],
                        button = $('<a href="javascript:;"></a>').appendTo(buttons);
                    p.handler && (button[0].onclick = p.handler),
                        button.linkbutton(p)
                }
            } else $(opts.buttons).addClass("dialog-button").appendTo(win),
                $(opts.buttons).show();
            else $(target).siblings("div.dialog-button").remove();
            opts.inited = !0;
            var closed = opts.closed;
            win.show(),
                $(target).window("resize"),
            closed && win.hide()
        }
        function setContentSize(a, b) {
            var c = $(a),
                d = c.dialog("options"),
                e = d.noheader,
                f = c.siblings(".dialog-toolbar"),
                g = c.siblings(".dialog-button");
            f.insertBefore(a).css({
                borderTopWidth: e ? 1 : 0,
                top: e ? f.length : 0
            }),
                g.insertAfter(a),
                f.add(g)._outerWidth(c._outerWidth()).find(".easyui-fluid:visible").each(function () {
                    $(this).triggerHandler("_resize")
                });
            var h = f._outerHeight() + g._outerHeight();
            if (isNaN(parseInt(d.height))) {
                var i = c._size("min-height");
                i && c._size("min-height", i - h);
                var j = c._size("max-height");
                j && c._size("max-height", j - h)
            } else c._outerHeight(c._outerHeight() - h);
            var k = $.data(a, "window").shadow;
            if (k) {
                var l = c.panel("panel");
                k.css({
                    width: l._outerWidth(),
                    height: l._outerHeight()
                })
            }
        }
        $.fn.dialog = function (a, b) {
            if ("string" == typeof a) {
                var c = $.fn.dialog.methods[a];
                return c ? c(this, b) : this.window(a, b)
            }
            return a = a || {},
                this.each(function () {
                    var b = $.data(this, "dialog");
                    b ? $.extend(b.options, a) : $.data(this, "dialog", {
                        options: $.extend({}, $.fn.dialog.defaults, $.fn.dialog.parseOptions(this), a)
                    }),
                        buildDialog(this)
                })
        },
            $.fn.dialog.methods = {
                options: function (a) {
                    var b = $.data(a[0], "dialog").options,
                        c = a.panel("options");
                    return $.extend(b, {
                        width: c.width,
                        height: c.height,
                        left: c.left,
                        top: c.top,
                        closed: c.closed,
                        collapsed: c.collapsed,
                        minimized: c.minimized,
                        maximized: c.maximized
                    }),
                        b
                },
                dialog: function (a) {
                    return a.window("window")
                }
            },
            $.fn.dialog.parseOptions = function (a) {
                var b = $(a);
                return $.extend({}, $.fn.window.parseOptions(a), $.parser.parseOptions(a, ["toolbar", "buttons"]), {
                    toolbar: b.children(".dialog-toolbar").length ? b.children(".dialog-toolbar").removeClass("dialog-toolbar") : void 0,
                    buttons: b.children(".dialog-button").length ? b.children(".dialog-button").removeClass("dialog-button") : void 0
                })
            },
            $.fn.dialog.defaults = $.extend({}, $.fn.window.defaults, {
                title: "New Dialog",
                collapsible: !1,
                minimizable: !1,
                maximizable: !1,
                resizable: !1,
                toolbar: null,
                buttons: null
            })
    }(jQuery),


    function (a) {
        function b() {
            a(document).unbind(".messager").bind("keydown.messager", function (b) {
                if (27 == b.keyCode) a("body").children("div.messager-window").children("div.messager-body").each(function () {
                    a(this).dialog("close")
                });
                else if (9 == b.keyCode) {
                    var c = a("body").children("div.messager-window");
                    if (!c.length) return;
                    for (var d = c.find(".messager-input,.messager-button .l-btn"), e = 0; e < d.length; e++) if (a(d[e]).is(":focus")) return a(d[e >= d.length - 1 ? 0 : e + 1]).focus(),
                        !1
                } else if (13 == b.keyCode) {
                    var g = a(b.target).closest("input.messager-input");
                    if (g.length) {
                        var h = g.closest(".messager-body");
                        f(h, g.val())
                    }
                }
            })
        }
        function c() {
            a(document).unbind(".messager")
        }
        function d(b) {
            var c = a.extend({}, a.messager.defaults, {
                    modal: !1,
                    shadow: !1,
                    draggable: !1,
                    resizable: !1,
                    closed: !0,
                    style: {
                        left: "",
                        top: "",
                        right: 0,
                        zIndex: a.fn.window.defaults.zIndex++,
                        bottom: -document.body.scrollTop - document.documentElement.scrollTop
                    },
                    title: "",
                    width: 250,
                    height: 100,
                    minHeight: 0,
                    showType: "slide",
                    showSpeed: 600,
                    content: b.msg,
                    timeout: 4e3
                }, b),
                d = a('<div class="messager-body"></div>').appendTo("body");
            return d.dialog(a.extend({}, c, {
                noheader: !c.title,
                openAnimation: c.showType,
                closeAnimation: "show" == c.showType ? "hide" : c.showType,
                openDuration: c.showSpeed,
                closeDuration: c.showSpeed,
                onOpen: function () {
                    function a() {
                        c.timeout > 0 && (c.timer = setTimeout(function () {
                            d.length && d.data("dialog") && d.dialog("close")
                        }, c.timeout))
                    }
                    d.dialog("dialog").hover(function () {
                        c.timer && clearTimeout(c.timer)
                    }, function () {
                        a()
                    }),
                        a(),
                        b.onOpen ? b.onOpen.call(this) : c.onOpen.call(this)
                },
                onClose: function () {
                    c.timer && clearTimeout(c.timer),
                        b.onClose ? b.onClose.call(this) : c.onClose.call(this),
                        d.dialog("destroy")
                }
            })),
                d.dialog("dialog").css(c.style),
                d.dialog("open"),
                d
        }
        function e(d) {
            b();
            var e = a('<div class="messager-body"></div>').appendTo("body");
            e.dialog(a.extend({}, d, {
                noheader: !d.title,
                onClose: function () {
                    c(),
                    d.onClose && d.onClose.call(this),
                        e.dialog("destroy")
                }
            }));
            var f = e.dialog("dialog").addClass("messager-window"),
                g = f.find(".dialog-button").addClass("messager-button");
            return g.find("a:first").focus().addClass("gui-btn-normal").find(".l-btn-left").addClass("l-btn-icon-left").append('<span class="l-btn-icon fa fa-check-circle">&nbsp;</span>'),
                g.find("a:eq(1)").addClass("gui-btn-danger").find(".l-btn-left").addClass("l-btn-icon-left").append('<span class="l-btn-icon fa fa-check-circle">&nbsp;</span>'),
                e
        }
        function f(a, b) {
            var c = a.dialog("options");
            a.dialog("close"),
                c.fn(b)
        }
        a.messager = {
            show: function (a) {
                return d(a)
            },
            alert: function (b, c, d, g) {
                var h = "object" == typeof b ? b : {
                        title: b,
                        msg: c,
                        icon: d,
                        fn: g
                    },
                    i = h.icon ? "messager-icon " + h.icon : "";
                h = a.extend({}, a.messager.defaults, {
                    content: '<div class="' + i + '"></div><div>' + h.msg + '</div><div style="clear:both;"/>'
                }, h),
                h.buttons || (h.buttons = [{
                    text: h.ok,
                    onClick: function () {
                        f(j)
                    }
                }]);
                var j = e(h);
                return j
            },
            confirm: function (b, c, d) {
                var g = "object" == typeof b ? b : {
                    title: b,
                    msg: c,
                    fn: d
                };
                g = a.extend({}, a.messager.defaults, {
                    content: '<div class="messager-icon ' + gui.language.message.icon.question + '"></div><div>' + g.msg + '</div><div style="clear:both;"/>'
                }, g),
                g.buttons || (g.buttons = [{
                    text: g.ok,
                    onClick: function () {
                        f(h, !0)
                    }
                },
                    {
                        text: g.cancel,
                        onClick: function () {
                            f(h, !1)
                        }
                    }]);
                var h = e(g);
                return h
            },
            prompt: function (b, c, d) {
                var g = "object" == typeof b ? b : {
                    title: b,
                    msg: c,
                    fn: d
                };
                g = a.extend({}, a.messager.defaults, {
                    content: '<div class="messager-icon ' + gui.language.message.icon.question + '"></div><div>' + g.msg + '</div><br/><div style="clear:both;"/><div><input class="messager-input" type="text"/></div>'
                }, g),
                g.buttons || (g.buttons = [{
                    text: g.ok,
                    onClick: function () {
                        f(h, h.find(".messager-input").val())
                    }
                },
                    {
                        text: g.cancel,
                        onClick: function () {
                            f(h)
                        }
                    }]);
                var h = e(g);
                return h.find(".messager-input").focus(),
                    h
            },
            progress: function (b) {
                var c = {
                    bar: function () {
                        return a("body>div.messager-window").find("div.messager-p-bar")
                    },
                    close: function () {
                        var b = a("body>div.messager-window>div.messager-body:has(div.messager-progress)");
                        b.length && b.dialog("close")
                    }
                };
                if ("string" == typeof b) {
                    var d = c[b];
                    return d()
                }
                b = b || {};
                var f = a.extend({}, {
                        title: "",
                        minHeight: 0,
                        content: void 0,
                        msg: "",
                        text: void 0,
                        interval: 300
                    }, b),
                    g = e(a.extend({}, a.messager.defaults, {
                        content: '<div class="messager-progress"><div class="messager-p-msg">' + f.msg + '</div><div class="messager-p-bar"></div></div>',
                        closable: !1,
                        doSize: !1
                    }, f, {
                        onClose: function () {
                            this.timer && clearInterval(this.timer),
                                b.onClose ? b.onClose.call(this) : a.messager.defaults.onClose.call(this)
                        }
                    })),
                    h = g.find("div.messager-p-bar");
                return h.progressbar({
                    text: f.text
                }),
                    g.dialog("resize"),
                f.interval && (g[0].timer = setInterval(function () {
                    var a = h.progressbar("getValue");
                    a += 10,
                    a > 100 && (a = 0),
                        h.progressbar("setValue", a)
                }, f.interval)),
                    g
            }
        },
            a.messager.defaults = a.extend({}, a.fn.dialog.defaults, {
                ok: "Ok",
                cancel: "Cancel",
                width: 300,
                height: "auto",
                minHeight: 150,
                modal: !0,
                collapsible: !1,
                minimizable: !1,
                maximizable: !1,
                resizable: !1,
                fn: function () {}
            })
    }(jQuery),


    function (a) {
        function b(b, c) {
            function d(a, b) {
                for (var c = 0, d = 0; d < g.length; d++) {
                    var e = g[d];
                    if (i) var f = e.panel("header")._outerWidth(j);
                    else var f = e.panel("header")._outerHeight(j);
                    if (e.panel("options").collapsible == a) {
                        var k = isNaN(b) ? void 0 : b + j * f.length;
                        i ? (e.panel("resize", {
                            // height: h.height(),
                            width: a ? k : void 0
                        }), c += e.panel("panel")._outerWidth() - j * f.length) : (e.panel("resize", {
                            width: h.width(),
                            // height: a ? k : void 0
                        }), c += e.panel("panel").outerHeight() - j * f.length)
                    }
                }
                return c
            }
            var e = a.data(b, "accordion"),
                f = e.options,
                g = e.panels,
                h = a(b),
                i = "left" == f.halign || "right" == f.halign;

            h.children(".panel-last").removeClass("panel-last"),
                h.children(".panel:last").addClass("panel-last"),
            c && a.extend(f, {
                width: c.width,
                height: c.height
            }),
                h._size(f);;
            var j = 0,
                k = "auto",
                l = h.find(">.panel>.accordion-header");
            l.length && (i ? (a(g[0]).panel("resize", {
                width: h.width(),
                height: h.height()
            }), j = a(l[0])._outerWidth()) : j = a(l[0]).css("height", "")._outerHeight()),
            isNaN(parseInt(f.height)) || (k = i ? h.width() - j * l.length : h.height() - j * l.length),
                d(!0, k - d(!1))
        }
        function c(b, c, d, e) {
            for (var f = a.data(b, "accordion").panels, g = [], h = 0; h < f.length; h++) {
                var i = f[h];
                if (c) i.panel("options")[c] == d && g.push(i);
                else if (i[0] == a(d)[0]) return h
            }
            return c ? e ? g : g.length ? g[0] : null : -1
        }
        function d(a) {
            return c(a, "collapsed", !1, !0)
        }
        function e(a) {
            var b = d(a);
            return b.length ? b[0] : null
        }
        function f(a, b) {
            return c(a, null, b)
        }
        function g(b, d) {
            var e = a.data(b, "accordion").panels;
            return "number" == typeof d ? d < 0 || d >= e.length ? null : e[d] : c(b, "title", d)
        }
        function h(b) {
            var c = a.data(b, "accordion").options,
                d = a(b);
            c.border ? d.removeClass("accordion-noborder") : d.addClass("accordion-noborder")
        }
        function i(c) {
            var d = a.data(c, "accordion"),
                e = a(c);
            e.addClass("accordion"),
                d.panels = [],
                e.children("div").each(function () {
                    var b = a.extend({}, a.parser.parseOptions(this), {
                            selected: !! a(this).attr("selected") || void 0
                        }),
                        e = a(this);
                    d.panels.push(e),
                        j(c, e, b)
                });
                e.bind("_resize", function (d, e) {
                    return (a(this).hasClass("easyui-fluid") || e) && b(c),
                        !1
                })
        }
        function j(b, c, e) {
            function g(a) {
                var c = a.panel("options");
                if (c.collapsible) {
                    var d = f(b, a);
                    c.collapsed ? k(b, d) : l(b, d)
                }
            }
            var h = a.data(b, "accordion").options;
            c.panel(a.extend({}, {
                collapsible: !0,
                minimizable: !1,
                maximizable: !1,
                closable: !1,
                doSize: !1,
                collapsed: !0,
                headerCls: "accordion-header",
                bodyCls: "accordion-body",
                halign: h.halign
            }, e, {
                onBeforeExpand: function () {
                    if (e.onBeforeExpand && 0 == e.onBeforeExpand.call(this)) return !1;
                    if (!h.multiple) for (var c = a.grep(d(b), function (a) {
                        return a.panel("options").collapsible
                    }), g = 0; g < c.length; g++) l(b, f(b, c[g]));
                    var i = a(this).panel("header");
                    i.addClass("accordion-header-selected"),
                        i.find(".accordion-collapse").removeClass("accordion-expand")
                },
                onExpand: function () {
                    a(b).find(">.panel-last>.accordion-header").removeClass("accordion-header-border"),
                    e.onExpand && e.onExpand.call(this),
                        h.onSelect.call(b, a(this).panel("options").title, f(b, this))
                },
                onBeforeCollapse: function () {
                    if (e.onBeforeCollapse && 0 == e.onBeforeCollapse.call(this)) return !1;
                    a(b).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
                    var c = a(this).panel("header");
                    c.removeClass("accordion-header-selected"),
                        c.find(".accordion-collapse").addClass("accordion-expand")
                },
                onCollapse: function () {
                    isNaN(parseInt(h.height)) && a(b).find(">.panel-last>.accordion-header").removeClass("accordion-header-border"),
                    e.onCollapse && e.onCollapse.call(this),
                        h.onUnselect.call(b, a(this).panel("options").title, f(b, this))
                }
            }));
            var i = c.panel("header"),
                j = i.children("div.panel-tool");
            j.children("a.panel-tool-collapse").hide();
            var m = a('<a href="javascript:;"></a>').addClass("accordion-collapse accordion-expand").appendTo(j);
            m.bind("click", function () {
                return g(c),
                    !1
            }),
                c.panel("options").collapsible ? m.show() : m.hide(),
            "left" != h.halign && "right" != h.halign || m.hide(),
                i.click(function () {
                    return g(c),
                        !1
                })
        }
        function k(b, c) {
            var d = g(b, c);
            if (d) {
                n(b);
                var e = a.data(b, "accordion").options;
                d.panel("expand", e.animate)
            }
        }
        function l(b, c) {
            var d = g(b, c);
            if (d) {
                n(b);
                var e = a.data(b, "accordion").options;
                d.panel("collapse", e.animate)
            }
        }
        function m(b) {
            function d(a) {
                var c = e.animate;
                e.animate = !1,
                    k(b, a),
                    e.animate = c
            }
            var e = a.data(b, "accordion").options;
            a(b).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
            var g = c(b, "selected", !0);
            d(g ? f(b, g) : e.selected)
        }
        function n(b) {
            for (var c = a.data(b, "accordion").panels, d = 0; d < c.length; d++) c[d].stop(!0, !0)
        }
        function o(c, d) {
            var e = a.data(c, "accordion"),
                f = e.options,
                g = e.panels;
            void 0 == d.selected && (d.selected = !0),
                n(c);
            var h = a("<div></div>").appendTo(c);
            g.push(h),
                j(c, h, d),
                b(c),
                f.onAdd.call(c, d.title, g.length - 1),
            d.selected && k(c, g.length - 1)
        }
        function p(c, d) {
            var h = a.data(c, "accordion"),
                i = h.options,
                j = h.panels;
            n(c);
            var l = g(c, d),
                m = l.panel("options").title,
                o = f(c, l);
            if (l && 0 != i.onBeforeRemove.call(c, m, o)) {
                if (j.splice(o, 1), l.panel("destroy"), j.length) {
                    b(c);
                    var p = e(c);
                    p || k(c, 0)
                }
                i.onRemove.call(c, m, o)
            }
        }
        a.fn.accordion = function (c, d) {
            return "string" == typeof c ? a.fn.accordion.methods[c](this, d) : (c = c || {}, this.each(function () {
                var d = a.data(this, "accordion");
                d ? a.extend(d.options, c) : (a.data(this, "accordion", {
                    options: a.extend({}, a.fn.accordion.defaults, a.fn.accordion.parseOptions(this), c),
                    accordion: a(this).addClass("accordion"),
                    panels: []
                }), i(this)),
                    h(this),
                    b(this),
                    m(this)
            }))
        },
            a.fn.accordion.methods = {
                options: function (b) {
                    return a.data(b[0], "accordion").options
                },
                panels: function (b) {
                    return a.data(b[0], "accordion").panels
                },
                resize: function (a, c) {
                    return a.each(function () {
                        b(this, c)
                    })
                },
                getSelections: function (a) {
                    return d(a[0])
                },
                getSelected: function (a) {
                    return e(a[0])
                },
                getPanel: function (a, b) {
                    return g(a[0], b)
                },
                getPanelIndex: function (a, b) {
                    return f(a[0], b)
                },
                select: function (a, b) {
                    return a.each(function () {
                        k(this, b)
                    })
                },
                unselect: function (a, b) {
                    return a.each(function () {
                        l(this, b)
                    })
                },
                add: function (a, b) {
                    return a.each(function () {
                        o(this, b)
                    })
                },
                remove: function (a, b) {
                    return a.each(function () {
                        p(this, b)
                    })
                }
            },
            a.fn.accordion.parseOptions = function (b) {
                a(b);
                return a.extend({}, a.parser.parseOptions(b, ["width", "height", "halign", {
                    fit: "boolean",
                    border: "boolean",
                    animate: "boolean",
                    multiple: "boolean",
                    selected: "number"
                }]))
            },
            a.fn.accordion.defaults = {
                width: "auto",
                height: "auto",
                fit: !1,
                border: !0,
                animate: !0,
                multiple: !1,
                selected: 0,
                halign: "top",
                onSelect: function (a, b) {},
                onUnselect: function (a, b) {},
                onAdd: function (a, b) {},
                onBeforeRemove: function (a, b) {},
                onRemove: function (a, b) {}
            }
    }(jQuery),


    function ($) {
        function getContentWidth(a) {
            var b = 0;
            return $(a).children().each(function () {
                b += $(this).outerWidth(!0)
            }),
                b
        }
        function setScrollers(a) {
            var b = $.data(a, "tabs").options;
            if ("left" != b.tabPosition && "right" != b.tabPosition && b.showHeader) {
                var c = $(a).children("div.tabs-header"),
                    d = c.children("div.tabs-tool:not(.tabs-tool-hidden)"),
                    e = c.children("div.tabs-scroller-left"),
                    f = c.children("div.tabs-scroller-right"),
                    g = c.children("div.tabs-wrap"),
                    h = c.outerHeight();
                b.plain && (h -= h - c.height()),
                    d._outerHeight(h);
                var i = getContentWidth(c.find("ul.tabs")),
                    j = c.width() - d._outerWidth();
                i > j ? (e.add(f).show()._outerHeight(h), "left" == b.toolPosition ? (d.css({
                    left: e.outerWidth(),
                    right: ""
                }), g.css({
                    marginLeft: e.outerWidth() + d._outerWidth(),
                    marginRight: f._outerWidth(),
                    width: j - e.outerWidth() - f.outerWidth()
                })) : (d.css({
                    left: "",
                    right: f.outerWidth()
                }), g.css({
                    marginLeft: e.outerWidth(),
                    marginRight: f.outerWidth() + d._outerWidth(),
                    width: j - e.outerWidth() - f.outerWidth()
                }))) : (e.add(f).hide(), "left" == b.toolPosition ? (d.css({
                    left: 0,
                    right: ""
                }), g.css({
                    marginLeft: d._outerWidth(),
                    marginRight: 0,
                    width: j
                })) : (d.css({
                    left: "",
                    right: 0
                }), g.css({
                    marginLeft: 0,
                    marginRight: d._outerWidth(),
                    width: j
                })))
            }
        }
        function addTools(container) {
            var opts = $.data(container, "tabs").options,
                header = $(container).children("div.tabs-header");
            if (opts.tools) if ("string" == typeof opts.tools) $(opts.tools).addClass("tabs-tool").appendTo(header),
                $(opts.tools).show();
            else {
                header.children("div.tabs-tool").remove();
                for (var tools = $('<div class="tabs-tool"><table cellspacing="0" cellpadding="0" style="height:100%"><tr></tr></table></div>').appendTo(header), tr = tools.find("tr"), i = 0; i < opts.tools.length; i++) {
                    var td = $("<td></td>").appendTo(tr),
                        tool = $('<a href="javascript:;"></a>').appendTo(td);
                    tool[0].onclick = eval(opts.tools[i].handler ||
                        function () {}),
                        tool.linkbutton($.extend({}, opts.tools[i], {
                            plain: !0
                        }))
                }
            } else header.children("div.tabs-tool").remove()
        }
        function setSize(a, b) {
            function c(a, b) {
                var c = a.panel("options"),
                    d = c.tab.find("a.tabs-inner"),
                    b = b ? b : parseInt(c.tabWidth || e.tabWidth || void 0);
                b ? d._outerWidth(b) : d.css("width", ""),
                    d._outerHeight(e.tabHeight),
                    d.css("lineHeight", d.height() + "px"),
                    d.find(".easyui-fluid:visible").triggerHandler("_resize")
            }
            var d = $.data(a, "tabs"),
                e = d.options,
                f = $(a);
            if (e.doSize) {
                b && $.extend(e, {
                    width: b.width,
                    height: b.height
                }),
                    f._size(e);
                var g = f.children("div.tabs-header"),
                    h = f.children("div.tabs-panels"),
                    i = g.find("div.tabs-wrap"),
                    j = i.find(".tabs");
                if (j.children("li").removeClass("tabs-first tabs-last"), j.children("li:first").addClass("tabs-first"), j.children("li:last").addClass("tabs-last"), "left" == e.tabPosition || "right" == e.tabPosition ? (g._outerWidth(e.showHeader ? e.headerWidth : 0), h._outerWidth(f.width() - g.outerWidth()), g.add(h)._size("height", isNaN(parseInt(e.height)) ? "" : f.height()), i._outerWidth(g.width()), j._outerWidth(i.width()).css("height", "")) : (g.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display", e.showHeader ? "block" : "none"), g._outerWidth(f.width()).css("height", ""), e.showHeader ? (g.css("background-color", ""), i.css("height", "")) : (g.css("background-color", "transparent"), g._outerHeight(0), i._outerHeight(0)), j._outerHeight(e.tabHeight).css("width", ""), j._outerHeight(j.outerHeight() - j.height() - 1 + e.tabHeight).css("width", ""), h._size("height", isNaN(parseInt(e.height)) ? "" : f.height() - g.outerHeight()), h._size("width", f.width())), d.tabs.length) {
                    var k = j.outerWidth(!0) - j.width(),
                        l = j.children("li:first"),
                        m = l.outerWidth(!0) - l.width(),
                        n = g.width() - g.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth(),
                        o = Math.floor((n - k - m * d.tabs.length) / d.tabs.length);
                    if ($.map(d.tabs, function (a) {
                        c(a, e.justified && $.inArray(e.tabPosition, ["top", "bottom"]) >= 0 ? o : void 0)
                    }), e.justified && $.inArray(e.tabPosition, ["top", "bottom"]) >= 0) {
                        var p = n - k - getContentWidth(j);
                        c(d.tabs[d.tabs.length - 1], o + p)
                    }
                }
                setScrollers(a)
            }
        }
        function setSelectedSize(a) {
            var b = $.data(a, "tabs").options,
                c = getSelectedTab(a);
            if (c) {
                var d = $(a).children("div.tabs-panels"),
                    e = "auto" == b.width ? "auto" : d.width(),
                    f = "auto" == b.height ? "auto" : d.height();
                c.panel("resize", {
                    width: e,
                    height: f
                })
            }
        }
        function wrapTabs(a) {
            var b = ($.data(a, "tabs").tabs, $(a).addClass("tabs-container")),
                c = $('<div class="tabs-panels"></div>').insertBefore(b);
            b.children("div").each(function () {
                c[0].appendChild(this)
            }),
                b[0].appendChild(c[0]),
                $('<div class="tabs-header"><div class="tabs-scroller-left"></div><div class="tabs-scroller-right"></div><div class="tabs-wrap"><ul class="tabs"></ul></div></div>').prependTo(a),
                b.children("div.tabs-panels").children("div").each(function (b) {
                    var c = $.extend({}, $.parser.parseOptions(this), {
                        disabled: !! $(this).attr("disabled") || void 0,
                        selected: !! $(this).attr("selected") || void 0
                    });
                    createTab(a, c, $(this))
                }),
                b.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function () {
                    $(this).addClass("tabs-scroller-over")
                }, function () {
                    $(this).removeClass("tabs-scroller-over")
                }),
                b.bind("_resize", function (b, c) {
                    return ($(this).hasClass("easyui-fluid") || c) && (setSize(a), setSelectedSize(a)),
                        !1
                })
        }
        function bindEvents(a) {
            function b(a) {
                var b = 0;
                return a.parent().children("li").each(function (c) {
                    if (a[0] == this) return b = c,
                        !1
                }),
                    b
            }
            var c = $.data(a, "tabs"),
                d = c.options;
            $(a).children("div.tabs-header").unbind().bind("click", function (e) {
                if ($(e.target).hasClass("tabs-scroller-left")) $(a).tabs("scrollBy", -d.scrollIncrement);
                else {
                    if (!$(e.target).hasClass("tabs-scroller-right")) {
                        var f = $(e.target).closest("li");
                        if (f.hasClass("tabs-disabled")) return !1;
                        var g = $(e.target).closest("a.tabs-close");
                        if (g.length) closeTab(a, b(f));
                        else if (f.length) {
                            var h = b(f),
                                i = c.tabs[h].panel("options");
                            i.collapsible ? i.closed ? selectTab(a, h) : unselectTab(a, h) : selectTab(a, h)
                        }
                        return !1
                    }
                    $(a).tabs("scrollBy", d.scrollIncrement)
                }
            }).bind("contextmenu", function (c) {
                var e = $(c.target).closest("li");
                e.hasClass("tabs-disabled") || e.length && d.onContextMenu.call(a, c, e.find("span.tabs-title").html(), b(e))
            })
        }
        function setProperties(a) {
            var b = $.data(a, "tabs").options,
                c = $(a).children("div.tabs-header"),
                d = $(a).children("div.tabs-panels");
            c.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right"),
                d.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right"),
                "top" == b.tabPosition ? c.insertBefore(d) : "bottom" == b.tabPosition ? (c.insertAfter(d), c.addClass("tabs-header-bottom"), d.addClass("tabs-panels-top")) : "left" == b.tabPosition ? (c.addClass("tabs-header-left"), d.addClass("tabs-panels-right")) : "right" == b.tabPosition && (c.addClass("tabs-header-right"), d.addClass("tabs-panels-left")),
                1 == b.plain ? c.addClass("tabs-header-plain") : c.removeClass("tabs-header-plain"),
                c.removeClass("tabs-header-narrow").addClass(b.narrow ? "tabs-header-narrow" : "");
            var e = c.find(".tabs");
            e.removeClass("tabs-pill").addClass(b.pill ? "tabs-pill" : ""),
                e.removeClass("tabs-narrow").addClass(b.narrow ? "tabs-narrow" : ""),
                e.removeClass("tabs-justified").addClass(b.justified ? "tabs-justified" : ""),
                1 == b.border ? (c.removeClass("tabs-header-noborder"), d.removeClass("tabs-panels-noborder")) : (c.addClass("tabs-header-noborder"), d.addClass("tabs-panels-noborder")),
                b.doSize = !0
        }
        function createTab(a, b, c) {
            b = b || {};
            var d = $.data(a, "tabs"),
                e = d.tabs;
            (void 0 == b.index || b.index > e.length) && (b.index = e.length),
            b.index < 0 && (b.index = 0);
            var f = $(a).children("div.tabs-header").find("ul.tabs"),
                g = $(a).children("div.tabs-panels"),
                h = $('<li><a href="javascript:;" class="tabs-inner"><span class="tabs-title"></span><span class="tabs-icon"></span></a></li>');
            c || (c = $("<div></div>")),
                b.index >= e.length ? (h.appendTo(f), c.appendTo(g), e.push(c)) : (h.insertBefore(f.children("li:eq(" + b.index + ")")), c.insertBefore(g.children("div.panel:eq(" + b.index + ")")), e.splice(b.index, 0, c)),
                c.panel($.extend({}, b, {
                    tab: h,
                    border: !1,
                    noheader: !0,
                    closed: !0,
                    doSize: !1,
                    iconCls: b.icon ? b.icon : void 0,
                    onLoad: function () {
                        b.onLoad && b.onLoad.apply(this, arguments),
                            d.options.onLoad.call(a, $(this))
                    },
                    onBeforeOpen: function () {
                        if (b.onBeforeOpen && 0 == b.onBeforeOpen.call(this)) return !1;
                        var c = $(a).tabs("getSelected");
                        if (c) {
                            if (c[0] == this) return setSelectedSize(a),
                                !1;
                            if ($(a).tabs("unselect", getTabIndex(a, c)), c = $(a).tabs("getSelected")) return !1
                        }
                        var d = $(this).panel("options");
                        d.tab.addClass("tabs-selected");
                        var e = $(a).find(">div.tabs-header>div.tabs-wrap"),
                            f = d.tab.position().left,
                            g = f + d.tab.outerWidth();
                        if (f < 0 || g > e.width()) {
                            var h = f - (e.width() - d.tab.width()) / 2;
                            $(a).tabs("scrollBy", h)
                        } else $(a).tabs("scrollBy", 0);
                        var i = $(this).panel("panel");
                        i.css("display", "block"),
                            setSelectedSize(a),
                            i.css("display", "none")
                    },
                    onOpen: function () {
                        b.onOpen && b.onOpen.call(this);
                        var c = $(this).panel("options");
                        d.selectHis.push(c.title),
                            d.options.onSelect.call(a, c.title, getTabIndex(a, this))
                    },
                    onBeforeClose: function () {
                        return (!b.onBeforeClose || 0 != b.onBeforeClose.call(this)) && void $(this).panel("options").tab.removeClass("tabs-selected")
                    },
                    onClose: function () {
                        b.onClose && b.onClose.call(this);
                        var c = $(this).panel("options");
                        d.options.onUnselect.call(a, c.title, getTabIndex(a, this))
                    }
                })),
                $(a).tabs("update", {
                    tab: c,
                    options: c.panel("options"),
                    type: "header"
                })
        }
        function addTab(a, b) {
            var c = $.data(a, "tabs"),
                d = c.options;
            void 0 == b.selected && (b.selected = !0),
                createTab(a, b),
                d.onAdd.call(a, b.title, b.index),
            b.selected && selectTab(a, b.index)
        }
        function updateTab(a, b) {
            b.type = b.type || "all";
            var c = $.data(a, "tabs").selectHis,
                d = b.tab,
                e = d.panel("options"),
                f = e.title;
            if ($.extend(e, b.options, {
                iconCls: b.options.icon ? b.options.icon : void 0
            }), "all" != b.type && "body" != b.type || d.panel(), "all" == b.type || "header" == b.type) {
                var g = e.tab;
                if (e.header) g.find(".tabs-inner").html($(e.header));
                else {
                    var h = g.find("span.tabs-title"),
                        i = g.find("span.tabs-icon");
                    if (h.html(e.title), i.attr("class", "tabs-icon"), g.find("a.tabs-close").remove(), e.closable ? (h.addClass("tabs-closable"), $('<a href="javascript:;" class="tabs-close"></a>').appendTo(g)) : h.removeClass("tabs-closable"), e.iconCls ? (h.addClass("tabs-with-icon"), i.addClass(e.iconCls)) : h.removeClass("tabs-with-icon"), e.tools) {
                        var j = g.find("span.tabs-p-tool");
                        if (!j.length) var j = $('<span class="tabs-p-tool"></span>').insertAfter(g.find("a.tabs-inner"));
                        if ($.isArray(e.tools)) {
                            j.empty();
                            for (var k = 0; k < e.tools.length; k++) {
                                var l = $('<a href="javascript:;"></a>').appendTo(j);
                                l.addClass(e.tools[k].iconCls),
                                e.tools[k].handler && l.bind("click", {
                                    handler: e.tools[k].handler
                                }, function (a) {
                                    $(this).parents("li").hasClass("tabs-disabled") || a.data.handler.call(this);
                                })
                            }
                        } else $(e.tools).children().appendTo(j);
                        var m = 12 * j.children().length;
                        e.closable ? (m += 8, j.css("right", "")) : (m -= 3, j.css("right", "5px")),
                            h.css("padding-right", m + "px")
                    } else g.find("span.tabs-p-tool").remove(),
                        h.css("padding-right", "")
                }
                if (f != e.title) for (var k = 0; k < c.length; k++) c[k] == f && (c[k] = e.title)
            }
            e.disabled ? e.tab.addClass("tabs-disabled") : e.tab.removeClass("tabs-disabled"),
                setSize(a),
                $.data(a, "tabs").options.onUpdate.call(a, e.title, getTabIndex(a, d))
        }
        function closeTab(a, b) {
            var c = $.data(a, "tabs").options,
                d = $.data(a, "tabs").tabs,
                e = $.data(a, "tabs").selectHis;
            if (exists(a, b)) {
                var f = getTab(a, b),
                    g = f.panel("options").title,
                    h = getTabIndex(a, f);
                if (0 != c.onBeforeClose.call(a, g, h)) {
                    var f = getTab(a, b, !0);
                    f.panel("options").tab.remove(),
                        f.panel("destroy"),
                        c.onClose.call(a, g, h),
                        setSize(a);
                    for (var i = 0; i < e.length; i++) e[i] == g && (e.splice(i, 1), i--);
                    var j = e.pop();
                    j ? selectTab(a, j) : d.length && selectTab(a, 0)
                }
            }
        }
        function getTab(a, b, c) {
            var d = $.data(a, "tabs").tabs,
                e = null;
            if ("number" == typeof b) b >= 0 && b < d.length && (e = d[b], c && d.splice(b, 1));
            else {
                for (var f = $("<span></span>"), g = 0; g < d.length; g++) {
                    var h = d[g];
                    if (f.html(h.panel("options").title), f.text() == b) {
                        e = h,
                        c && d.splice(g, 1);
                        break
                    }
                }
                f.remove()
            }
            return e
        }
        function getTabIndex(a, b) {
            for (var c = $.data(a, "tabs").tabs, d = 0; d < c.length; d++) if (c[d][0] == $(b)[0]) return d;
            return -1
        }
        function getSelectedTab(a) {
            for (var b = $.data(a, "tabs").tabs, c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.panel("options").tab.hasClass("tabs-selected")) return d
            }
            return null
        }
        function doFirstSelect(a) {
            for (var b = $.data(a, "tabs"), c = b.tabs, d = 0; d < c.length; d++) {
                var e = c[d].panel("options");
                if (e.selected && !e.disabled) return void selectTab(a, d)
            }
            selectTab(a, b.options.selected)
        }
        function selectTab(a, b) {
            var c = getTab(a, b);
            c && !c.is(":visible") && (stopAnimate(a), c.panel("options").disabled || c.panel("open"))
        }
        function unselectTab(a, b) {
            var c = getTab(a, b);
            c && c.is(":visible") && (stopAnimate(a), c.panel("close"))
        }
        function stopAnimate(a) {
            $(a).children("div.tabs-panels").each(function () {
                $(this).stop(!0, !0)
            })
        }
        function exists(a, b) {
            return null != getTab(a, b)
        }
        function showHeader(a, b) {
            var c = $.data(a, "tabs").options;
            c.showHeader = b,
                $(a).tabs("resize")
        }
        function showTool(a, b) {
            var c = $(a).find(">.tabs-header>.tabs-tool");
            b ? c.removeClass("tabs-tool-hidden").show() : c.addClass("tabs-tool-hidden").hide(),
                $(a).tabs("resize").tabs("scrollBy", 0)
        }
        $.fn.tabs = function (a, b) {
            return "string" == typeof a ? $.fn.tabs.methods[a](this, b) : (a = a || {}, this.each(function () {
                var b = $.data(this, "tabs");
                b ? $.extend(b.options, a) : ($.data(this, "tabs", {
                    options: $.extend({}, $.fn.tabs.defaults, $.fn.tabs.parseOptions(this), a),
                    tabs: [],
                    selectHis: []
                }), wrapTabs(this)),
                    addTools(this),
                    setProperties(this),
                    setSize(this),
                    bindEvents(this),
                    doFirstSelect(this)
            }))
        },
            $.fn.tabs.methods = {
                options: function (a) {
                    var b = a[0],
                        c = $.data(b, "tabs").options,
                        d = getSelectedTab(b);
                    return c.selected = d ? getTabIndex(b, d) : -1,
                        c
                },
                tabs: function (a) {
                    return $.data(a[0], "tabs").tabs
                },
                resize: function (a, b) {
                    return a.each(function () {
                        setSize(this, b),
                            setSelectedSize(this)
                    })
                },
                add: function (a, b) {
                    return a.each(function () {
                        addTab(this, b)
                    })
                },
                close: function (a, b) {
                    return a.each(function () {
                        closeTab(this, b)
                    })
                },
                getTab: function (a, b) {
                    return getTab(a[0], b)
                },
                getTabIndex: function (a, b) {
                    return getTabIndex(a[0], b)
                },
                getSelected: function (a) {
                    return getSelectedTab(a[0])
                },
                select: function (a, b) {
                    return a.each(function () {
                        selectTab(this, b)
                    })
                },
                unselect: function (a, b) {
                    return a.each(function () {
                        unselectTab(this, b)
                    })
                },
                exists: function (a, b) {
                    return exists(a[0], b)
                },
                update: function (a, b) {
                    return a.each(function () {
                        updateTab(this, b)
                    })
                },
                enableTab: function (a, b) {
                    return a.each(function () {
                        var a = $(this).tabs("getTab", b).panel("options");
                        a.tab.removeClass("tabs-disabled"),
                            a.disabled = !1
                    })
                },
                disableTab: function (a, b) {
                    return a.each(function () {
                        var a = $(this).tabs("getTab", b).panel("options");
                        a.tab.addClass("tabs-disabled"),
                            a.disabled = !0
                    })
                },
                showHeader: function (a) {
                    return a.each(function () {
                        showHeader(this, !0)
                    })
                },
                hideHeader: function (a) {
                    return a.each(function () {
                        showHeader(this, !1)
                    })
                },
                showTool: function (a) {
                    return a.each(function () {
                        showTool(this, !0)
                    })
                },
                hideTool: function (a) {
                    return a.each(function () {
                        showTool(this, !1)
                    })
                },
                scrollBy: function (a, b) {
                    return a.each(function () {
                        function a() {
                            var a = 0,
                                b = d.children("ul");
                            return b.children("li").each(function () {
                                a += $(this).outerWidth(!0)
                            }),
                            a - d.width() + (b.outerWidth() - b.width())
                        }
                        var c = $(this).tabs("options"),
                            d = $(this).find(">div.tabs-header>div.tabs-wrap"),
                            e = Math.min(d._scrollLeft() + b, a());
                        d.animate({
                            scrollLeft: e
                        }, c.scrollDuration)
                    })
                }
            },
            $.fn.tabs.parseOptions = function (a) {
                return $.extend({}, $.parser.parseOptions(a, ["tools", "toolPosition", "tabPosition", {
                    fit: "boolean",
                    border: "boolean",
                    plain: "boolean"
                },
                    {
                        headerWidth: "number",
                        tabWidth: "number",
                        tabHeight: "number",
                        selected: "number"
                    },
                    {
                        showHeader: "boolean",
                        justified: "boolean",
                        narrow: "boolean",
                        pill: "boolean"
                    }]))
            },
            $.fn.tabs.defaults = {
                width: "auto",
                height: "auto",
                headerWidth: 150,
                tabWidth: "auto",
                tabHeight: 27,
                selected: 0,
                showHeader: !0,
                plain: !1,
                fit: !1,
                border: !0,
                justified: !1,
                narrow: !1,
                pill: !1,
                tools: null,
                toolPosition: "right",
                tabPosition: "top",
                scrollIncrement: 100,
                scrollDuration: 400,
                onLoad: function (a) {},
                onSelect: function (a, b) {},
                onUnselect: function (a, b) {},
                onBeforeClose: function (a, b) {},
                onClose: function (a, b) {},
                onAdd: function (a, b) {},
                onUpdate: function (a, b) {},
                onContextMenu: function (a, b, c) {}
            }
    }(jQuery),


    function (a) {
        function b(b, c) {
            function d(a, b) {
                if (a.length && h(a)) {
                    var c = a.panel("options");
                    a.panel("resize", {
                        width: j.width(),
                        height: c.height
                    });
                    var d = a.panel("panel").outerHeight();
                    a.panel("move", {
                        left: 0,
                        top: "n" == b ? 0 : j.height() - d
                    }),
                        k.height -= d,
                    "n" == b && (k.top += d, !c.split && c.border && k.top--),
                    !c.split && c.border && k.height++
                }
            }
            function e(a, b) {
                if (a.length && h(a)) {
                    var c = a.panel("options");
                    a.panel("resize", {
                        width: c.width,
                        height: k.height
                    });
                    var d = a.panel("panel").outerWidth();
                    a.panel("move", {
                        left: "e" == b ? j.width() - d : 0,
                        top: k.top
                    }),
                        k.width -= d,
                    "w" == b && (k.left += d, !c.split && c.border && k.left--),
                    !c.split && c.border && k.width++
                }
            }
            var f = a.data(b, "layout"),
                g = f.options,
                i = f.panels,
                j = a(b);
            c && a.extend(g, {
                width: c.width,
                height: c.height
            }),
                "body" == b.tagName.toLowerCase() ? j._size("fit") : j._size(g);
            var k = {
                top: 0,
                left: 0,
                width: j.width(),
                height: j.height()
            };
            d(h(i.expandNorth) ? i.expandNorth : i.north, "n"),
                d(h(i.expandSouth) ? i.expandSouth : i.south, "s"),
                e(h(i.expandEast) ? i.expandEast : i.east, "e"),
                e(h(i.expandWest) ? i.expandWest : i.west, "w"),
                i.center.panel("resize", k)
        }
        function c(c) {
            function e(b) {
                var e = a.fn.layout.parsePanelOptions(b);
                "north,south,east,west,center".indexOf(e.region) >= 0 && d(c, e, b)
            }
            var f = a(c);
            f.addClass("layout");
            var g = f.layout("options"),
                h = g.onAdd;
            g.onAdd = function () {},
                f.find(">div,>form>div").each(function () {
                    e(this)
                }),
                g.onAdd = h,
                f.append('<div class="layout-split-proxy-h"></div><div class="layout-split-proxy-v"></div>'),
                f.bind("_resize", function (d, e) {
                    return (a(this).hasClass("easyui-fluid") || e) && b(c),
                        !1
                })
        }
        function d(c, d, e) {
            function g(b) {
                var d = "expand" + l.substring(0, 1).toUpperCase() + l.substring(1),
                    e = i.center,
                    f = "north" == l || "south" == l ? "minHeight" : "minWidth",
                    g = "north" == l || "south" == l ? "maxHeight" : "maxWidth",
                    j = "north" == l || "south" == l ? "_outerHeight" : "_outerWidth",
                    k = a.parser.parseValue(g, i[l].panel("options")[g], a(c)),
                    m = a.parser.parseValue(f, e.panel("options")[f], a(c)),
                    n = e.panel("panel")[j]() - m;
                return n += h(i[d]) ? i[d][j]() - 1 : a(b)[j](),
                n > k && (n = k),
                    n
            }
            d.region = d.region || "center";
            var i = a.data(c, "layout").panels,
                j = a(c),
                l = d.region;
            if (!i[l].length) {
                var m = a(e);
                m.length || (m = a("<div></div>").appendTo(j));
                var n = a.extend({}, a.fn.layout.paneldefaults, {
                    width: m.length ? parseInt(m[0].style.width) || m.outerWidth() : "auto",
                    height: m.length ? parseInt(m[0].style.height) || m.outerHeight() : "auto",
                    doSize: !1,
                    collapsible: !0,
                    onOpen: function () {
                        var b = a(this).panel("header").children("div.panel-tool");
                        b.children("a.panel-tool-collapse").hide();
                        var d = {
                            north: "up",
                            south: "down",
                            east: "right",
                            west: "left"
                        };
                        if (d[l]) {
                            var e = "layout-button-" + d[l],
                                g = b.children("a." + e);
                            g.length || (g = a('<a href="javascript:;"></a>').addClass(e).appendTo(b), g.bind("click", {
                                dir: l
                            }, function (a) {
                                return f(c, a.data.dir),
                                    !1
                            })),
                                a(this).panel("options").collapsible ? g.show() : g.hide()
                        }
                    }
                }, d, {
                    cls: (d.cls || "") + " layout-panel layout-panel-" + l,
                    bodyCls: (d.bodyCls || "") + " layout-body"
                });
                m.panel(n),
                    i[l] = m;
                var o = {
                        north: "s",
                        south: "n",
                        east: "w",
                        west: "e"
                    },
                    p = m.panel("panel");
                m.panel("options").split && p.addClass("layout-split-" + l),
                    p.resizable(a.extend({}, {
                        handles: o[l] || "",
                        disabled: !m.panel("options").split,
                        onStartResize: function (b) {
                            if (k = !0, "north" == l || "south" == l) var d = a(">div.layout-split-proxy-v", c);
                            else var d = a(">div.layout-split-proxy-h", c);
                            var e = {
                                display: "block"
                            };
                            "north" == l ? (e.top = parseInt(p.css("top")) + p.outerHeight() - d.height(), e.left = parseInt(p.css("left")), e.width = p.outerWidth(), e.height = d.height()) : "south" == l ? (e.top = parseInt(p.css("top")), e.left = parseInt(p.css("left")), e.width = p.outerWidth(), e.height = d.height()) : "east" == l ? (e.top = parseInt(p.css("top")) || 0, e.left = parseInt(p.css("left")) || 0, e.width = d.width(), e.height = p.outerHeight()) : "west" == l && (e.top = parseInt(p.css("top")) || 0, e.left = p.outerWidth() - d.width(), e.width = d.width(), e.height = p.outerHeight()),
                                d.css(e),
                                a('<div class="layout-mask"></div>').css({
                                    left: 0,
                                    top: 0,
                                    width: j.width(),
                                    height: j.height()
                                }).appendTo(j)
                        },
                        onResize: function (b) {
                            if ("north" == l || "south" == l) {
                                var d = g(this);
                                a(this).resizable("options").maxHeight = d;
                                var e = a(">div.layout-split-proxy-v", c),
                                    f = "north" == l ? b.data.height - e.height() : a(c).height() - b.data.height;
                                e.css("top", f)
                            } else {
                                var h = g(this);
                                a(this).resizable("options").maxWidth = h;
                                var e = a(">div.layout-split-proxy-h", c),
                                    i = "west" == l ? b.data.width - e.width() : a(c).width() - b.data.width;
                                e.css("left", i)
                            }
                            return !1
                        },
                        onStopResize: function (a) {
                            j.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide(),
                                m.panel("resize", a.data),
                                b(c),
                                k = !1,
                                j.find(">div.layout-mask").remove()
                        }
                    }, d)),
                    j.layout("options").onAdd.call(c, l)
            }
        }
        function e(b, c) {
            var d = a.data(b, "layout").panels;
            if (d[c].length) {
                d[c].panel("destroy"),
                    d[c] = a();
                var e = "expand" + c.substring(0, 1).toUpperCase() + c.substring(1);
                d[e] && (d[e].panel("destroy"), d[e] = void 0),
                    a(b).layout("options").onRemove.call(b, c)
            }
        }
        function f(b, c, d) {
            function e(d) {
                var e = {
                        east: "left",
                        west: "right",
                        north: "down",
                        south: "up"
                    },
                    f = "north" == m.region || "south" == m.region,
                    h = "layout-button-" + e[d],
                    i = a("<div></div>").appendTo(b);
                if (i.panel(a.extend({}, a.fn.layout.paneldefaults, {
                    cls: "layout-expand layout-expand-" + d,
                    title: "&nbsp;",
                    titleDirection: m.titleDirection,
                    iconCls: m.hideCollapsedContent ? null : m.iconCls,
                    closed: !0,
                    minWidth: 0,
                    minHeight: 0,
                    doSize: !1,
                    region: m.region,
                    collapsedSize: m.collapsedSize,
                    noheader: !f && m.hideExpandTool,
                    tools: f && m.hideExpandTool ? null : [{
                        iconCls: h,
                        handler: function () {
                            return g(b, c),
                                !1
                        }
                    }],
                    onResize: function () {
                        var b = a(this).children(".layout-expand-title");
                        if (b.length) {
                            b._outerWidth(a(this).height());
                            var c = (a(this).width() - Math.min(b._outerWidth(), b._outerHeight())) / 2,
                                d = Math.max(b._outerWidth(), b._outerHeight());
                            b.hasClass("layout-expand-title-down") && (c += Math.min(b._outerWidth(), b._outerHeight()), d = 0),
                                b.css({
                                    left: c + "px",
                                    top: d + "px"
                                })
                        }
                    }
                })), !m.hideCollapsedContent) {
                    var j = "function" == typeof m.collapsedContent ? m.collapsedContent.call(i[0], m.title) : m.collapsedContent;
                    f ? i.panel("setTitle", j) : i.html(j)
                }
                return i.panel("panel").hover(function () {
                    a(this).addClass("layout-expand-over")
                }, function () {
                    a(this).removeClass("layout-expand-over")
                }),
                    i
            }
            function i() {
                var d = a(b),
                    e = j.center.panel("options"),
                    f = m.collapsedSize;
                if ("east" == c) {
                    var g = l.panel("panel")._outerWidth(),
                        i = e.width + g - f;
                    return !m.split && m.border || i++,
                        {
                            resizeC: {
                                width: i
                            },
                            expand: {
                                left: d.width() - g
                            },
                            expandP: {
                                top: e.top,
                                left: d.width() - f,
                                width: f,
                                height: e.height
                            },
                            collapse: {
                                left: d.width(),
                                top: e.top,
                                height: e.height
                            }
                        }
                }
                if ("west" == c) {
                    var g = l.panel("panel")._outerWidth(),
                        i = e.width + g - f;
                    return !m.split && m.border || i++,
                        {
                            resizeC: {
                                width: i,
                                left: f - 1
                            },
                            expand: {
                                left: 0
                            },
                            expandP: {
                                left: 0,
                                top: e.top,
                                width: f,
                                height: e.height
                            },
                            collapse: {
                                left: -g,
                                top: e.top,
                                height: e.height
                            }
                        }
                }
                if ("north" == c) {
                    var k = l.panel("panel")._outerHeight(),
                        n = e.height;
                    return h(j.expandNorth) || (n += k - f + (m.split || !m.border ? 1 : 0)),
                        j.east.add(j.west).add(j.expandEast).add(j.expandWest).panel("resize", {
                            top: f - 1,
                            height: n
                        }),
                        {
                            resizeC: {
                                top: f - 1,
                                height: n
                            },
                            expand: {
                                top: 0
                            },
                            expandP: {
                                top: 0,
                                left: 0,
                                width: d.width(),
                                height: f
                            },
                            collapse: {
                                top: -k,
                                width: d.width()
                            }
                        }
                }
                if ("south" == c) {
                    var k = l.panel("panel")._outerHeight(),
                        n = e.height;
                    return h(j.expandSouth) || (n += k - f + (m.split || !m.border ? 1 : 0)),
                        j.east.add(j.west).add(j.expandEast).add(j.expandWest).panel("resize", {
                            height: n
                        }),
                        {
                            resizeC: {
                                height: n
                            },
                            expand: {
                                top: d.height() - k
                            },
                            expandP: {
                                top: d.height() - f,
                                left: 0,
                                width: d.width(),
                                height: f
                            },
                            collapse: {
                                top: d.height(),
                                width: d.width()
                            }
                        }
                }
            }
            void 0 == d && (d = "normal");
            var j = a.data(b, "layout").panels,
                l = j[c],
                m = l.panel("options");
            if (0 != m.onBeforeCollapse.call(l)) {
                var n = "expand" + c.substring(0, 1).toUpperCase() + c.substring(1);
                if (!j[n]) {
                    j[n] = e(c);
                    var o = j[n].panel("panel");
                    m.expandMode ? o.bind("click", function () {
                        if ("dock" == m.expandMode) g(b, c);
                        else {
                            l.panel("expand", !1).panel("open");
                            var d = i();
                            l.panel("resize", d.collapse),
                                l.panel("panel").animate(d.expand, function () {
                                    a(this).unbind(".layout").bind("mouseleave.layout", {
                                        region: c
                                    }, function (c) {
                                        1 != k && (a("body>div.combo-p>div.combo-panel:visible").length || f(b, c.data.region))
                                    }),
                                        a(b).layout("options").onExpand.call(b, c)
                                })
                        }
                        return !1
                    }) : o.css("cursor", "default")
                }
                var p = i();
                h(j[n]) || j.center.panel("resize", p.resizeC),
                    l.panel("panel").animate(p.collapse, d, function () {
                        l.panel("collapse", !1).panel("close"),
                            j[n].panel("open").panel("resize", p.expandP),
                            a(this).unbind(".layout"),
                            a(b).layout("options").onCollapse.call(b, c)
                    })
            }
        }
        function g(c, d) {
            function e() {
                var b = a(c),
                    e = f.center.panel("options");
                return "east" == d && f.expandEast ? {
                    collapse: {
                        left: b.width(),
                        top: e.top,
                        height: e.height
                    },
                    expand: {
                        left: b.width() - g.panel("panel")._outerWidth()
                    }
                } : "west" == d && f.expandWest ? {
                    collapse: {
                        left: -g.panel("panel")._outerWidth(),
                        top: e.top,
                        height: e.height
                    },
                    expand: {
                        left: 0
                    }
                } : "north" == d && f.expandNorth ? {
                    collapse: {
                        top: -g.panel("panel")._outerHeight(),
                        width: b.width()
                    },
                    expand: {
                        top: 0
                    }
                } : "south" == d && f.expandSouth ? {
                    collapse: {
                        top: b.height(),
                        width: b.width()
                    },
                    expand: {
                        top: b.height() - g.panel("panel")._outerHeight()
                    }
                } : void 0
            }
            var f = a.data(c, "layout").panels,
                g = f[d],
                h = g.panel("options");
            if (0 != h.onBeforeExpand.call(g)) {
                var i = "expand" + d.substring(0, 1).toUpperCase() + d.substring(1);
                if (f[i]) {
                    f[i].panel("close"),
                        g.panel("panel").stop(!0, !0),
                        g.panel("expand", !1).panel("open");
                    var j = e();
                    g.panel("resize", j.collapse),
                        g.panel("panel").animate(j.expand, function () {
                            b(c),
                                a(c).layout("options").onExpand.call(c, d)
                        })
                }
            }
        }
        function h(a) {
            return !!a && ( !! a.length && a.panel("panel").is(":visible"))
        }
        function i(b) {
            function c(a) {
                var c = g[a];
                c.length && c.panel("options").collapsed && f(b, a, 0)
            }
            var d = a.data(b, "layout"),
                e = d.options,
                g = d.panels,
                h = e.onCollapse;
            e.onCollapse = function () {},
                c("east"),
                c("west"),
                c("north"),
                c("south"),
                e.onCollapse = h
        }
        function j(c, d, e) {
            var f = a(c).layout("panel", d);
            f.panel("options").split = e;
            var g = "layout-split-" + d,
                h = f.panel("panel").removeClass(g);
            e && h.addClass(g),
                h.resizable({
                    disabled: !e
                }),
                b(c)
        }
        var k = !1;
        a.fn.layout = function (d, e) {
            return "string" == typeof d ? a.fn.layout.methods[d](this, e) : (d = d || {}, this.each(function () {
                var e = a.data(this, "layout");
                if (e) a.extend(e.options, d);
                else {
                    var f = a.extend({}, a.fn.layout.defaults, a.fn.layout.parseOptions(this), d);
                    a.data(this, "layout", {
                        options: f,
                        panels: {
                            center: a(),
                            north: a(),
                            south: a(),
                            east: a(),
                            west: a()
                        }
                    }),
                        c(this)
                }
                b(this),
                    i(this)
            }))
        },
            a.fn.layout.methods = {
                options: function (b) {
                    return a.data(b[0], "layout").options
                },
                resize: function (a, c) {
                    return a.each(function () {
                        b(this, c)
                    })
                },
                panel: function (b, c) {
                    return a.data(b[0], "layout").panels[c]
                },
                collapse: function (a, b) {
                    return a.each(function () {
                        f(this, b)
                    })
                },
                expand: function (a, b) {
                    return a.each(function () {
                        g(this, b)
                    })
                },
                add: function (c, e) {
                    return c.each(function () {
                        d(this, e),
                            b(this),
                        a(this).layout("panel", e.region).panel("options").collapsed && f(this, e.region, 0)
                    })
                },
                remove: function (a, c) {
                    return a.each(function () {
                        e(this, c),
                            b(this)
                    })
                },
                split: function (a, b) {
                    return a.each(function () {
                        j(this, b, !0)
                    })
                },
                unsplit: function (a, b) {
                    return a.each(function () {
                        j(this, b, !1)
                    })
                }
            },
            a.fn.layout.parseOptions = function (b) {
                return a.extend({}, a.parser.parseOptions(b, [{
                    fit: "boolean"
                }]))
            },
            a.fn.layout.defaults = {
                fit: !1,
                onExpand: function (a) {},
                onCollapse: function (a) {},
                onAdd: function (a) {},
                onRemove: function (a) {}
            },
            a.fn.layout.parsePanelOptions = function (b) {
                a(b);
                return a.extend({}, a.fn.panel.parseOptions(b), a.parser.parseOptions(b, ["region", {
                    split: "boolean",
                    collpasedSize: "number",
                    minWidth: "number",
                    minHeight: "number",
                    maxWidth: "number",
                    maxHeight: "number"
                }]))
            },
            a.fn.layout.paneldefaults = a.extend({}, a.fn.panel.defaults, {
                region: null,
                split: !1,
                collapsedSize: 28,
                expandMode: "float",
                hideExpandTool: !1,
                hideCollapsedContent: !0,
                collapsedContent: function (b) {
                    var c = a(this),
                        d = c.panel("options");
                    if ("north" == d.region || "south" == d.region) return b;
                    var e = [];
                    return d.iconCls && e.push('<div class="panel-icon ' + d.iconCls + '"></div>'),
                        e.push('<div class="panel-title layout-expand-title'),
                        e.push(" layout-expand-title-" + d.titleDirection),
                        e.push(d.iconCls ? " layout-expand-with-icon" : ""),
                        e.push('">'),
                        e.push(b),
                        e.push("</div>"),
                        e.join("")
                },
                minWidth: 10,
                minHeight: 10,
                maxWidth: 1e4,
                maxHeight: 1e4
            })
    }(jQuery),


    function ($) {
        function init(a) {
            function b(a) {
                var c = [];
                return a.addClass("menu"),
                    c.push(a),
                a.hasClass("menu-content") || a.children("div").each(function () {
                    var a = $(this).children("div");
                    if (a.length) {
                        a.appendTo("body"),
                            this.submenu = a;
                        var d = b(a);
                        c = c.concat(d)
                    }
                }),
                    c
            }
            var c = $.data(a, "menu").options;
            $(a).addClass("menu-top"),
                c.inline ? $(a).addClass("menu-inline") : $(a).appendTo("body"),
                $(a).bind("_resize", function (b, c) {
                    return ($(this).hasClass("easyui-fluid") || c) && $(a).menu("resize", a),
                        !1
                });
            for (var d = b($(a)), e = 0; e < d.length; e++) createMenu(a, d[e])
        }
        function createMenu(a, b) {
            var c = $(b).addClass("menu");
            c.data("menu") || c.data("menu", {
                options: $.parser.parseOptions(c[0], ["width", "height"])
            }),
            c.hasClass("menu-content") || (c.children("div").each(function () {
                createItem(a, this)
            }), $('<div class="menu-line"></div>').prependTo(c)),
                setMenuSize(a, c),
            c.hasClass("menu-inline") || c.hide(),
                bindMenuEvent(a, c)
        }
        function createItem(target, div, options) {
            var item = $(div),
                itemOpts = $.extend({}, $.parser.parseOptions(item[0], ["id", "name", "iconCls", "href", {
                    separator: "boolean"
                }]), {
                    disabled: !! item.attr("disabled") || void 0,
                    text: $.trim(item.html()),
                    onclick: item[0].onclick
                }, options || {});
            itemOpts.onclick = itemOpts.onclick || itemOpts.handler || null,
                item.data("menuitem", {
                    options: itemOpts
                }),
            itemOpts.separator && item.addClass("menu-sep"),
            item.hasClass("menu-sep") || (item.addClass("menu-item"), item.empty().append($('<div class="menu-text"></div>').html(itemOpts.text)), itemOpts.iconCls && $('<div class="menu-icon"></div>').addClass(itemOpts.iconCls).appendTo(item), itemOpts.id && item.attr("id", itemOpts.id), itemOpts.onclick && ("string" == typeof itemOpts.onclick ? item.attr("onclick", itemOpts.onclick) : item[0].onclick = eval(itemOpts.onclick)), itemOpts.disabled && setDisabled(target, item[0], !0), item[0].submenu && $('<div class="menu-rightarrow"></div>').appendTo(item))
        }
        function setMenuSize(a, b) {
            var c = $.data(a, "menu").options,
                d = b.attr("style") || "",
                e = b.is(":visible");
            b.css({
                display: "block",
                left: -1e4,
                height: "auto",
                overflow: "hidden"
            }),
                b.find(".menu-item").each(function () {
                    $(this)._outerHeight(c.itemHeight),
                        $(this).find(".menu-text").css({
                            height: c.itemHeight - 2 + "px",
                            lineHeight: c.itemHeight - 2 + "px"
                        })
                }),
                b.removeClass("menu-noline").addClass(c.noline ? "menu-noline" : "");
            var f = b.data("menu").options,
                g = f.width,
                h = f.height;
            isNaN(parseInt(g)) && (g = 0, b.find("div.menu-text").each(function () {
                g < $(this).outerWidth() && (g = $(this).outerWidth())
            }), g = g ? g + 40 : "");
            var i = b.outerHeight();
            if (isNaN(parseInt(h))) if (h = i, b.hasClass("menu-top") && c.alignTo) {
                var j = $(c.alignTo),
                    k = j.offset().top - $(document).scrollTop(),
                    l = $(window)._outerHeight() + $(document).scrollTop() - j.offset().top - j._outerHeight();
                h = Math.min(h, Math.max(k, l))
            } else h > $(window)._outerHeight() && (h = $(window).height());
            b.attr("style", d),
                b.show(),
                b._size($.extend({}, f, {
                    width: g,
                    height: h,
                    minWidth: f.minWidth || c.minWidth,
                    maxWidth: f.maxWidth || c.maxWidth
                })),
                b.find(".easyui-fluid").triggerHandler("_resize", [!0]),
                b.css("overflow", b.outerHeight() < i ? "auto" : "hidden"),
                b.children("div.menu-line")._outerHeight(i - 2),
            e || b.hide()
        }
        function bindMenuEvent(a, b) {
            var c = $.data(a, "menu"),
                d = c.options;
            b.unbind(".menu");
            for (var e in d.events) b.bind(e + ".menu", {
                target: a
            }, d.events[e])
        }
        function mouseenterHandler(a) {
            var b = a.data.target,
                c = $.data(b, "menu");
            c.timer && (clearTimeout(c.timer), c.timer = null)
        }
        function mouseleaveHandler(a) {
            var b = a.data.target,
                c = $.data(b, "menu");
            c.options.hideOnUnhover && (c.timer = setTimeout(function () {
                hideAll(b, $(b).hasClass("menu-inline"))
            }, c.options.duration))
        }
        function mouseoverHandler(a) {
            var b = a.data.target,
                c = $(a.target).closest(".menu-item");
            if (c.length) {
                if (c.siblings().each(function () {
                    this.submenu && hideMenu(this.submenu),
                        $(this).removeClass("menu-active")
                }), c.addClass("menu-active"), c.hasClass("menu-item-disabled")) return void c.addClass("menu-active-disabled");
                var d = c[0].submenu;
                d && $(b).menu("show", {
                    menu: d,
                    parent: c
                })
            }
        }
        function mouseoutHandler(a) {
            var b = $(a.target).closest(".menu-item");
            if (b.length) {
                b.removeClass("menu-active menu-active-disabled");
                var c = b[0].submenu;
                c ? a.pageX >= parseInt(c.css("left")) ? b.addClass("menu-active") : hideMenu(c) : b.removeClass("menu-active")
            }
        }
        function clickHandler(a) {
            var b = a.data.target,
                c = $(a.target).closest(".menu-item");
            if (c.length) {
                var d = $(b).data("menu").options,
                    e = c.data("menuitem").options;
                if (e.disabled) return;
                c[0].submenu || (hideAll(b, d.inline), e.href && (location.href = e.href)),
                    c.trigger("mouseenter"),
                    d.onClick.call(b, $(b).menu("getItem", c[0]))
            }
        }
        function hideAll(a, b) {
            var c = $.data(a, "menu");
            return c && $(a).is(":visible") && (hideMenu($(a)), b ? $(a).show() : c.options.onHide.call(a)),
                !1
        }
        function showMenu(a, b) {
            function c(a, b) {
                return a + g.outerHeight() > $(window)._outerHeight() + $(document).scrollTop() && (a = b ? $(b).offset().top - g._outerHeight() : $(window)._outerHeight() + $(document).scrollTop() - g.outerHeight()),
                a < 0 && (a = 0),
                    a
            }
            b = b || {};
            var d, e, f = $.data(a, "menu").options,
                g = $(b.menu || a);
            if ($(a).menu("resize", g[0]), g.hasClass("menu-top")) {
                if ($.extend(f, b), d = f.left, e = f.top, f.alignTo) {
                    var h = $(f.alignTo);
                    d = h.offset().left,
                        e = h.offset().top + h._outerHeight(),
                    "right" == f.align && (d += h.outerWidth() - g.outerWidth())
                }
                d + g.outerWidth() > $(window)._outerWidth() + $(document)._scrollLeft() && (d = $(window)._outerWidth() + $(document).scrollLeft() - g.outerWidth() - 5),
                d < 0 && (d = 0),
                    e = c(e, f.alignTo)
            } else {
                var i = b.parent;
                d = i.offset().left + i.outerWidth() - 2,
                d + g.outerWidth() + 5 > $(window)._outerWidth() + $(document).scrollLeft() && (d = i.offset().left - g.outerWidth() + 2),
                    e = c(i.offset().top - 3)
            }
            g.css(f.position.call(a, g[0], d, e)),
                g.show(0, function () {
                    g[0].shadow || (g[0].shadow = $('<div class="menu-shadow"></div>').insertAfter(g)),
                        g[0].shadow.css({
                            display: g.hasClass("menu-inline") ? "none" : "block",
                            zIndex: $.fn.menu.defaults.zIndex++,
                            left: g.css("left"),
                            top: g.css("top"),
                            width: g.outerWidth(),
                            height: g.outerHeight()
                        }),
                        g.css("z-index", $.fn.menu.defaults.zIndex++),
                    g.hasClass("menu-top") && f.onShow.call(a)
                })
        }
        function hideMenu(a) {
            function b(a) {
                a.stop(!0, !0),
                a[0].shadow && a[0].shadow.hide(),
                    a.hide()
            }
            a && a.length && (b(a), a.find("div.menu-item").each(function () {
                this.submenu && hideMenu(this.submenu),
                    $(this).removeClass("menu-active")
            }))
        }
        function findItem(a, b) {
            function c(f) {
                f.children("div.menu-item").each(function () {
                    var f = $(a).menu("getItem", this),
                        g = e.empty().html(f.text).text();
                    b == $.trim(g) ? d = f : this.submenu && !d && c(this.submenu)
                })
            }
            var d = null,
                e = $("<div></div>");
            return c($(a)),
                e.remove(),
                d
        }
        function setDisabled(a, b, c) {
            var d = $(b);
            if (d.hasClass("menu-item")) {
                var e = d.data("menuitem").options;
                e.disabled = c,
                    c ? (d.addClass("menu-item-disabled"), d[0].onclick = null) : (d.removeClass("menu-item-disabled"), d[0].onclick = e.onclick)
            }
        }
        function appendItem(a, b) {
            var c = ($.data(a, "menu").options, $(a));
            if (b.parent) {
                if (!b.parent.submenu) {
                    var d = $("<div></div>").appendTo("body");
                    b.parent.submenu = d,
                        $('<div class="menu-rightarrow"></div>').appendTo(b.parent),
                        createMenu(a, d)
                }
                c = b.parent.submenu
            }
            var e = $("<div></div>").appendTo(c);
            createItem(a, e, b)
        }
        function removeItem(a, b) {
            function c(a) {
                if (a.submenu) {
                    a.submenu.children("div.menu-item").each(function () {
                        c(this)
                    });
                    var b = a.submenu[0].shadow;
                    b && b.remove(),
                        a.submenu.remove()
                }
                $(a).remove()
            }
            c(b)
        }
        function setVisible(a, b, c) {
            var d = $(b).parent();
            c ? $(b).show() : $(b).hide(),
                setMenuSize(a, d)
        }
        function destroyMenu(a) {
            $(a).children("div.menu-item").each(function () {
                removeItem(a, this)
            }),
            a.shadow && a.shadow.remove(),
                $(a).remove()
        }
        $(function () {
            $(document).unbind(".menu").bind("mousedown.menu", function (a) {
                var b = $(a.target).closest("div.menu,div.combo-p");
                b.length || ($("body>div.menu-top:visible").not(".menu-inline").menu("hide"), hideMenu($("body>div.menu:visible").not(".menu-inline")))
            })
        }),
            $.fn.menu = function (a, b) {
                return "string" == typeof a ? $.fn.menu.methods[a](this, b) : (a = a || {}, this.each(function () {
                    var b = $.data(this, "menu");
                    b ? $.extend(b.options, a) : (b = $.data(this, "menu", {
                        options: $.extend({}, $.fn.menu.defaults, $.fn.menu.parseOptions(this), a)
                    }), init(this)),
                        $(this).css({
                            left: b.options.left,
                            top: b.options.top
                        })
                }))
            },
            $.fn.menu.methods = {
                options: function (a) {
                    return $.data(a[0], "menu").options
                },
                show: function (a, b) {
                    return a.each(function () {
                        showMenu(this, b)
                    })
                },
                hide: function (a) {
                    return a.each(function () {
                        hideAll(this)
                    })
                },
                destroy: function (a) {
                    return a.each(function () {
                        destroyMenu(this)
                    })
                },
                setText: function (a, b) {
                    return a.each(function () {
                        var a = $(b.target).data("menuitem").options;
                        a.text = b.text,
                            $(b.target).children("div.menu-text").html(b.text)
                    })
                },
                setIcon: function (a, b) {
                    return a.each(function () {
                        var a = $(b.target).data("menuitem").options;
                        a.iconCls = b.iconCls,
                            $(b.target).children("div.menu-icon").remove(),
                        b.iconCls && $('<div class="menu-icon"></div>').addClass(b.iconCls).appendTo(b.target)
                    })
                },
                getItem: function (a, b) {
                    var c = $(b).data("menuitem").options;
                    return $.extend({}, c, {
                        target: $(b)[0]
                    })
                },
                findItem: function (a, b) {
                    return findItem(a[0], b)
                },
                appendItem: function (a, b) {
                    return a.each(function () {
                        appendItem(this, b)
                    })
                },
                removeItem: function (a, b) {
                    return a.each(function () {
                        removeItem(this, b)
                    })
                },
                enableItem: function (a, b) {
                    return a.each(function () {
                        setDisabled(this, b, !1)
                    })
                },
                disableItem: function (a, b) {
                    return a.each(function () {
                        setDisabled(this, b, !0)
                    })
                },
                showItem: function (a, b) {
                    return a.each(function () {
                        setVisible(this, b, !0)
                    })
                },
                hideItem: function (a, b) {
                    return a.each(function () {
                        setVisible(this, b, !1)
                    })
                },
                resize: function (a, b) {
                    return a.each(function () {
                        setMenuSize(this, $(b ? b : this))
                    })
                }
            },
            $.fn.menu.parseOptions = function (a) {
                return $.extend({}, $.parser.parseOptions(a, [{
                    minWidth: "number",
                    itemHeight: "number",
                    duration: "number",
                    hideOnUnhover: "boolean"
                },
                    {
                        fit: "boolean",
                        inline: "boolean",
                        noline: "boolean"
                    }]))
            },
            $.fn.menu.defaults = {
                zIndex: 11e4,
                left: 0,
                top: 0,
                alignTo: null,
                align: "left",
                minWidth: 120,
                itemHeight: 22,
                duration: 100,
                hideOnUnhover: !0,
                inline: !1,
                fit: !1,
                noline: !1,
                events: {
                    mouseenter: mouseenterHandler,
                    mouseleave: mouseleaveHandler,
                    mouseover: mouseoverHandler,
                    mouseout: mouseoutHandler,
                    click: clickHandler
                },
                position: function (a, b, c) {
                    return {
                        left: b,
                        top: c
                    }
                },
                onShow: function () {},
                onHide: function () {},
                onClick: function (a) {}
            }
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "menubutton").options,
                d = a(b);
            if (d.linkbutton(c), c.hasDownArrow) {
                d.removeClass(c.cls.btn1 + " " + c.cls.btn2).addClass("m-btn"),
                    d.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-" + c.size);
                var e = d.find(".l-btn-left");
                a("<span></span>").addClass(c.cls.arrow).appendTo(e),
                    a("<span></span>").addClass("m-btn-line").appendTo(e)
            }
            if (a(b).menubutton("resize"), c.menu) {
                a(c.menu).menu({
                    duration: c.duration
                });
                var f = a(c.menu).menu("options"),
                    g = f.onShow,
                    h = f.onHide;
                a.extend(f, {
                    onShow: function () {
                        var b = a(this).menu("options"),
                            c = a(b.alignTo),
                            d = c.menubutton("options");
                        c.addClass(1 == d.plain ? d.cls.btn2 : d.cls.btn1),
                            g.call(this)
                    },
                    onHide: function () {
                        var b = a(this).menu("options"),
                            c = a(b.alignTo),
                            d = c.menubutton("options");
                        c.removeClass(1 == d.plain ? d.cls.btn2 : d.cls.btn1),
                            h.call(this)
                    }
                })
            }
        }
        function c(b) {
            function c() {
                return a(b).linkbutton("options").disabled
            }
            var e = a.data(b, "menubutton").options,
                f = a(b),
                g = f.find("." + e.cls.trigger);
            g.length || (g = f),
                g.unbind(".menubutton");
            var h = null;
            g.bind("click.menubutton", function () {
                if (!c()) return d(b),
                    !1
            }).bind("mouseenter.menubutton", function () {
                if (!c()) return h = setTimeout(function () {
                    d(b)
                }, e.duration),
                    !1
            }).bind("mouseleave.menubutton", function () {
                h && clearTimeout(h),
                    a(e.menu).triggerHandler("mouseleave")
            })
        }
        function d(b) {
            var c = a(b).menubutton("options");
            if (!c.disabled && c.menu) {
                a("body>div.menu-top").menu("hide");
                var d = a(b),
                    e = a(c.menu);
                e.length && (e.menu("options").alignTo = d, e.menu("show", {
                    alignTo: d,
                    align: c.menuAlign
                })),
                    d.blur()
            }
        }
        a.fn.menubutton = function (d, e) {
            if ("string" == typeof d) {
                var f = a.fn.menubutton.methods[d];
                return f ? f(this, e) : this.linkbutton(d, e)
            }
            return d = d || {},
                this.each(function () {
                    var e = a.data(this, "menubutton");
                    e ? a.extend(e.options, d) : (a.data(this, "menubutton", {
                        options: a.extend({}, a.fn.menubutton.defaults, a.fn.menubutton.parseOptions(this), d)
                    }), a(this).removeAttr("disabled")),
                        b(this),
                        c(this)
                })
        },
            a.fn.menubutton.methods = {
                options: function (b) {
                    var c = b.linkbutton("options");
                    return a.extend(a.data(b[0], "menubutton").options, {
                        toggle: c.toggle,
                        selected: c.selected,
                        disabled: c.disabled
                    })
                },
                destroy: function (b) {
                    return b.each(function () {
                        var b = a(this).menubutton("options");
                        b.menu && a(b.menu).menu("destroy"),
                            a(this).remove()
                    })
                }
            },
            a.fn.menubutton.parseOptions = function (b) {
                a(b);
                return a.extend({}, a.fn.linkbutton.parseOptions(b), a.parser.parseOptions(b, ["menu", {
                    plain: "boolean",
                    hasDownArrow: "boolean",
                    duration: "number"
                }]))
            },
            a.fn.menubutton.defaults = a.extend({}, a.fn.linkbutton.defaults, {
                plain: !0,
                hasDownArrow: !0,
                menu: null,
                menuAlign: "left",
                duration: 100,
                cls: {
                    btn1: "m-btn-active",
                    btn2: "m-btn-plain-active",
                    arrow: "m-btn-downarrow",
                    trigger: "m-btn"
                }
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "splitbutton").options;
            a(b).menubutton(c),
                a(b).addClass("s-btn")
        }
        a.fn.splitbutton = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.splitbutton.methods[c];
                return e ? e(this, d) : this.menubutton(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "splitbutton");
                    d ? a.extend(d.options, c) : (a.data(this, "splitbutton", {
                        options: a.extend({}, a.fn.splitbutton.defaults, a.fn.splitbutton.parseOptions(this), c)
                    }), a(this).removeAttr("disabled")),
                        b(this)
                })
        },
            a.fn.splitbutton.methods = {
                options: function (b) {
                    var c = b.menubutton("options"),
                        d = a.data(b[0], "splitbutton").options;
                    return a.extend(d, {
                        disabled: c.disabled,
                        toggle: c.toggle,
                        selected: c.selected
                    }),
                        d
                }
            },
            a.fn.splitbutton.parseOptions = function (b) {
                a(b);
                return a.extend({}, a.fn.linkbutton.parseOptions(b), a.parser.parseOptions(b, ["menu", {
                    plain: "boolean",
                    duration: "number"
                }]))
            },
            a.fn.splitbutton.defaults = a.extend({}, a.fn.linkbutton.defaults, {
                plain: !0,
                menu: null,
                duration: 100,
                cls: {
                    btn1: "m-btn-active s-btn-active",
                    btn2: "m-btn-plain-active s-btn-plain-active",
                    arrow: "m-btn-downarrow",
                    trigger: "m-btn-line"
                }
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var d = a('<span class="switchbutton"><span class="switchbutton-inner"><span class="switchbutton-on"></span><span class="switchbutton-handle"></span><span class="switchbutton-off"></span><input class="switchbutton-value" type="checkbox"></span></span>').insertAfter(b),
                e = a(b);
            e.addClass("switchbutton-f").hide();
            var f = e.attr("name");
            return f && (e.removeAttr("name").attr("switchbuttonName", f), d.find(".switchbutton-value").attr("name", f)),
                d.bind("_resize", function (d, e) {
                    return (a(this).hasClass("easyui-fluid") || e) && c(b),
                        !1
                }),
                d
        }
        function c(b, c) {
            var d = a.data(b, "switchbutton"),
                f = d.options,
                g = d.switchbutton;
            c && a.extend(f, c);
            var h = g.is(":visible");
            h || g.appendTo("body"),
                g._size(f);
            var i = g.width(),
                j = g.height(),
                i = g.outerWidth(),
                j = g.outerHeight(),
                k = parseInt(f.handleWidth) || g.height(),
                l = 2 * i - k;
            g.find(".switchbutton-inner").css({
                width: l + "px",
                height: j + "px",
                lineHeight: j + "px"
            }),
                g.find(".switchbutton-handle")._outerWidth(k)._outerHeight(j).css({
                    marginLeft: -k / 2 + "px"
                }),
                g.find(".switchbutton-on").css({
                    width: i - k / 2 + "px",
                    textIndent: (f.reversed ? "" : "-") + k / 2 + "px"
                }),
                g.find(".switchbutton-off").css({
                    width: i - k / 2 + "px",
                    textIndent: (f.reversed ? "-" : "") + k / 2 + "px"
                }),
                f.marginWidth = i - k,
                e(b, f.checked, !1),
            h || g.insertAfter(b)
        }
        function d(b) {
            var c = a.data(b, "switchbutton"),
                d = c.options,
                f = c.switchbutton,
                h = f.find(".switchbutton-inner"),
                i = h.find(".switchbutton-on").html(d.onText),
                j = h.find(".switchbutton-off").html(d.offText),
                k = h.find(".switchbutton-handle").html(d.handleText);
            d.reversed ? (j.prependTo(h), i.insertAfter(k)) : (i.prependTo(h), j.insertAfter(k)),
                f.find(".switchbutton-value")._propAttr("checked", d.checked),
                f.removeClass("switchbutton-disabled").addClass(d.disabled ? "switchbutton-disabled" : ""),
                f.removeClass("switchbutton-reversed").addClass(d.reversed ? "switchbutton-reversed" : ""),
                e(b, d.checked),
                g(b, d.readonly),
                a(b).switchbutton("setValue", d.value)
        }
        function e(b, c, d) {
            var e = a.data(b, "switchbutton"),
                f = e.options;
            f.checked = c;
            var g = e.switchbutton.find(".switchbutton-inner"),
                h = g.find(".switchbutton-on"),
                i = f.reversed ? f.checked ? f.marginWidth : 0 : f.checked ? 0 : f.marginWidth,
                j = h.css("float").toLowerCase(),
                k = {};
            k["margin-" + j] = -i + "px",
                d ? g.animate(k, 200) : g.css(k);
            var l = g.find(".switchbutton-value"),
                m = l.is(":checked");
            a(b).add(l)._propAttr("checked", f.checked),
            m != f.checked && f.onChange.call(b, f.checked)
        }
        function f(b, c) {
            var d = a.data(b, "switchbutton"),
                e = d.options,
                f = d.switchbutton,
                g = f.find(".switchbutton-value");
            c ? (e.disabled = !0, a(b).add(g).attr("disabled", "disabled"), f.addClass("switchbutton-disabled")) : (e.disabled = !1, a(b).add(g).removeAttr("disabled"), f.removeClass("switchbutton-disabled"))
        }
        function g(b, c) {
            var d = a.data(b, "switchbutton"),
                e = d.options;
            e.readonly = void 0 == c || c,
                d.switchbutton.removeClass("switchbutton-readonly").addClass(e.readonly ? "switchbutton-readonly" : "")
        }
        function h(b) {
            var c = a.data(b, "switchbutton"),
                d = c.options;
            c.switchbutton.unbind(".switchbutton").bind("click.switchbutton", function () {
                d.disabled || d.readonly || e(b, !d.checked, !0)
            })
        }
        a.fn.switchbutton = function (e, f) {
            return "string" == typeof e ? a.fn.switchbutton.methods[e](this, f) : (e = e || {}, this.each(function () {
                var f = a.data(this, "switchbutton");
                f ? a.extend(f.options, e) : f = a.data(this, "switchbutton", {
                    options: a.extend({}, a.fn.switchbutton.defaults, a.fn.switchbutton.parseOptions(this), e),
                    switchbutton: b(this)
                }),
                    f.options.originalChecked = f.options.checked,
                    d(this),
                    c(this),
                    h(this)
            }))
        },
            a.fn.switchbutton.methods = {
                options: function (b) {
                    var c = b.data("switchbutton");
                    return a.extend(c.options, {
                        value: c.switchbutton.find(".switchbutton-value").val()
                    })
                },
                resize: function (a, b) {
                    return a.each(function () {
                        c(this, b)
                    })
                },
                enable: function (a) {
                    return a.each(function () {
                        f(this, !1)
                    })
                },
                disable: function (a) {
                    return a.each(function () {
                        f(this, !0)
                    })
                },
                readonly: function (a, b) {
                    return a.each(function () {
                        g(this, b)
                    })
                },
                check: function (a) {
                    return a.each(function () {
                        e(this, !0)
                    })
                },
                uncheck: function (a) {
                    return a.each(function () {
                        e(this, !1)
                    })
                },
                clear: function (a) {
                    return a.each(function () {
                        e(this, !1)
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        var b = a(this).switchbutton("options");
                        e(this, b.originalChecked)
                    })
                },
                setValue: function (b, c) {
                    return b.each(function () {
                        a(this).val(c),
                            a.data(this, "switchbutton").switchbutton.find(".switchbutton-value").val(c)
                    })
                }
            },
            a.fn.switchbutton.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.parser.parseOptions(b, ["onText", "offText", "handleText", {
                    handleWidth: "number",
                    reversed: "boolean"
                }]), {
                    value: c.val() || void 0,
                    checked: !! c.attr("checked") || void 0,
                    disabled: !! c.attr("disabled") || void 0,
                    readonly: !! c.attr("readonly") || void 0
                })
            },
            a.fn.switchbutton.defaults = {
                handleWidth: "auto",
                width: 60,
                height: 26,
                checked: !1,
                disabled: !1,
                readonly: !1,
                reversed: !1,
                onText: "ON",
                offText: "OFF",
                handleText: "",
                value: "on",
                onChange: function (a) {}
            }
    }(jQuery),


    function ($) {
        function init(a) {
            $(a).addClass("validatebox-text")
        }
        function destroyBox(a) {
            var b = $.data(a, "validatebox");
            b.validating = !1,
            b.vtimer && clearTimeout(b.vtimer),
            b.ftimer && clearTimeout(b.ftimer),
                $(a).tooltip("destroy"),
                $(a).unbind(),
                $(a).remove()
        }
        function bindEvents(a) {
            var b = $.data(a, "validatebox").options;
            if ($(a).unbind(".validatebox"), !b.novalidate && !b.disabled) for (var c in b.events) $(a).bind(c + ".validatebox", {
                target: a
            }, b.events[c])
        }
        function focusEventHandler(a) {
            var b = a.data.target,
                c = $.data(b, "validatebox"),
                d = c.options;
            $(b).attr("readonly") || (c.validating = !0, c.value = d.val(b), function () {
                if ($(b).is(":visible") || (c.validating = !1), c.validating) {
                    var a = d.val(b);
                    c.value != a ? (c.value = a, c.vtimer && clearTimeout(c.vtimer), c.vtimer = setTimeout(function () {
                        $(b).validatebox("validate")
                    }, d.delay)) : c.message && d.err(b, c.message),
                        c.ftimer = setTimeout(arguments.callee, d.interval)
                }
            }())
        }
        function blurEventHandler(a) {
            var b = a.data.target,
                c = $.data(b, "validatebox"),
                d = c.options;
            c.validating = !1,
            c.vtimer && (clearTimeout(c.vtimer), c.vtimer = void 0),
            c.ftimer && (clearTimeout(c.ftimer), c.ftimer = void 0),
            d.validateOnBlur && setTimeout(function () {
                $(b).validatebox("validate")
            }, 0),
                d.err(b, c.message, "hide")
        }
        function mouseenterEventHandler(a) {
            var b = a.data.target,
                c = $.data(b, "validatebox");
            c.options.err(b, c.message, "show")
        }
        function mouseleaveEventHandler(a) {
            var b = a.data.target,
                c = $.data(b, "validatebox");
            c.validating || c.options.err(b, c.message, "hide")
        }
        function handleError(a, b, c) {
            var d = $.data(a, "validatebox"),
                e = d.options,
                f = $(a);
            "hide" != c && b ? (f.is(":focus") && d.validating || "show" == c) && f.tooltip($.extend({}, e.tipOptions, {
                content: b,
                position: e.tipPosition,
                deltaX: e.deltaX,
                deltaY: e.deltaY
            })).tooltip("show") : f.tooltip("hide")
        }
        function validate(target) {
            function setTipMessage(a) {
                state.message = a
            }
            function doValidate(vtype, vparam) {
                var value = opts.val(target),
                    result = /([a-zA-Z_]+)(.*)/.exec(vtype),
                    rule = opts.rules[result[1]];
                if (rule && value) {
                    var param = vparam || opts.validParams || eval(result[2]);
                    if (!rule.validator.call(target, value, param)) {
                        var message = rule.message;
                        if (param) for (var i = 0; i < param.length; i++) message = message.replace(new RegExp("\\{" + i + "\\}", "g"), param[i]);
                        return setTipMessage(opts.invalidMessage || message),
                            !1
                    }
                }
                return !0
            }
            function _validate() {
                if (setTipMessage(""), !opts._validateOnCreate) return setTimeout(function () {
                    opts._validateOnCreate = !0
                }, 0),
                    !0;
                if (opts.novalidate || opts.disabled) return !0;
                if (opts.required && "" == opts.val(target)) return setTipMessage(opts.missingMessage),
                    !1;
                if (opts.validType) if ($.isArray(opts.validType)) {
                    for (var a = 0; a < opts.validType.length; a++) if (!doValidate(opts.validType[a])) return !1
                } else if ("string" == typeof opts.validType) {
                    if (!doValidate(opts.validType)) return !1
                } else for (var b in opts.validType) {
                    var c = opts.validType[b];
                    if (!doValidate(b, c)) return !1
                }
                return !0
            }
            var state = $.data(target, "validatebox"),
                opts = state.options,
                box = $(target);
            opts.onBeforeValidate.call(target);
            var result = _validate();
            return result ? box.removeClass("validatebox-invalid") : box.addClass("validatebox-invalid"),
                opts.err(target, state.message),
                opts.onValidate.call(target, result),
                result
        }
        function setDisabled(a, b) {
            var c = $.data(a, "validatebox").options;
            void 0 != b && (c.disabled = b),
                c.disabled ? $(a).addClass("validatebox-disabled").attr("disabled", "disabled") : $(a).removeClass("validatebox-disabled").removeAttr("disabled")
        }
        function setReadonly(a, b) {
            var c = $.data(a, "validatebox").options;
            c.readonly = void 0 == b || b,
                c.readonly || !c.editable ? ($(a).triggerHandler("blur.validatebox"), $(a).addClass("validatebox-readonly").attr("readonly", "readonly")) : $(a).removeClass("validatebox-readonly").removeAttr("readonly")
        }
        $.fn.validatebox = function (a, b) {
            return "string" == typeof a ? $.fn.validatebox.methods[a](this, b) : (a = a || {}, this.each(function () {
                var b = $.data(this, "validatebox");
                b ? $.extend(b.options, a) : (init(this), b = $.data(this, "validatebox", {
                    options: $.extend({}, $.fn.validatebox.defaults, $.fn.validatebox.parseOptions(this), a)
                })),
                    b.options._validateOnCreate = b.options.validateOnCreate,
                    setDisabled(this, b.options.disabled),
                    setReadonly(this, b.options.readonly),
                    bindEvents(this),
                    validate(this)
            }))
        },
            $.fn.validatebox.methods = {
                options: function (a) {
                    return $.data(a[0], "validatebox").options
                },
                destroy: function (a) {
                    return a.each(function () {
                        destroyBox(this)
                    })
                },
                validate: function (a) {
                    return a.each(function () {
                        validate(this)
                    })
                },
                isValid: function (a) {
                    return validate(a[0])
                },
                enableValidation: function (a) {
                    return a.each(function () {
                        $(this).validatebox("options").novalidate = !1,
                            bindEvents(this),
                            validate(this)
                    })
                },
                disableValidation: function (a) {
                    return a.each(function () {
                        $(this).validatebox("options").novalidate = !0,
                            bindEvents(this),
                            validate(this)
                    })
                },
                resetValidation: function (a) {
                    return a.each(function () {
                        var a = $(this).validatebox("options");
                        a._validateOnCreate = a.validateOnCreate,
                            validate(this)
                    })
                },
                enable: function (a) {
                    return a.each(function () {
                        setDisabled(this, !1),
                            bindEvents(this),
                            validate(this)
                    })
                },
                disable: function (a) {
                    return a.each(function () {
                        setDisabled(this, !0),
                            bindEvents(this),
                            validate(this)
                    })
                },
                readonly: function (a, b) {
                    return a.each(function () {
                        setReadonly(this, b),
                            bindEvents(this),
                            validate(this)
                    })
                }
            },
            $.fn.validatebox.parseOptions = function (a) {
                var b = $(a);
                return $.extend({}, $.parser.parseOptions(a, ["validType", "missingMessage", "invalidMessage", "tipPosition", {
                    delay: "number",
                    interval: "number",
                    deltaX: "number"
                },
                    {
                        editable: "boolean",
                        validateOnCreate: "boolean",
                        validateOnBlur: "boolean"
                    }]), {
                    required: !! b.attr("required") || void 0,
                    disabled: !! b.attr("disabled") || void 0,
                    readonly: !! b.attr("readonly") || void 0,
                    novalidate: void 0 != b.attr("novalidate") || void 0
                })
            },
            $.fn.validatebox.defaults = {
                required: !1,
                validType: null,
                validParams: null,
                delay: 200,
                interval: 200,
                missingMessage: "This field is required.",
                invalidMessage: null,
                tipPosition: "right",
                deltaX: 0,
                deltaY: 0,
                novalidate: !1,
                editable: !0,
                disabled: !1,
                readonly: !1,
                validateOnCreate: !0,
                validateOnBlur: !1,
                events: {
                    focus: focusEventHandler,
                    blur: blurEventHandler,
                    mouseenter: mouseenterEventHandler,
                    mouseleave: mouseleaveEventHandler,
                    click: function (a) {
                        var b = $(a.data.target);
                        "checkbox" != b.attr("type") && "radio" != b.attr("type") || b.focus().validatebox("validate")
                    }
                },
                val: function (a) {
                    return $(a).val()
                },
                err: function (a, b, c) {
                    handleError(a, b, c)
                },
                tipOptions: {
                    showEvent: "none",
                    hideEvent: "none",
                    showDelay: 0,
                    hideDelay: 0,
                    zIndex: "",
                    onShow: function () {
                        $(this).tooltip("tip").css({
                            color: "#000",
                            borderColor: "#CC9933",
                            backgroundColor: "#FFFFCC"
                        })
                    },
                    onHide: function () {
                        $(this).tooltip("destroy")
                    }
                },
                rules: {
                    email: {
                        validator: function (a) {
                            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
                        },
                        message: "Please enter a valid email address."
                    },
                    url: {
                        validator: function (a) {
                            return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
                        },
                        message: "Please enter a valid URL."
                    },
                    length: {
                        validator: function (a, b) {
                            var c = $.trim(a).length;
                            return c >= b[0] && c <= b[1]
                        },
                        message: "Please enter a value between {0} and {1}."
                    },
                    remote: {
                        validator: function (a, b) {
                            var c = {};
                            c[b[1]] = a;
                            var d = $.ajax({
                                url: b[0],
                                dataType: "json",
                                data: c,
                                async: !1,
                                cache: !1,
                                type: "post"
                            }).responseText;
                            return "true" == d
                        },
                        message: "Please fix this field."
                    }
                },
                onBeforeValidate: function () {},
                onValidate: function (a) {}
            }
    }(jQuery),


    function (a) {
        function b(b) {
            a(b).addClass("textbox-f").hide();
            var c = a('<span class="textbox"><input class="textbox-text" autocomplete="off"><input type="hidden" class="textbox-value"></span>').insertAfter(b),
                d = a(b).attr("name");
            return d && (c.find("input.textbox-value").attr("name", d), a(b).removeAttr("name").attr("textboxName", d)),
                c
        }
        function c(b) {
            var c = a.data(b, "textbox"),
                d = c.options,
                e = c.textbox,
                g = "_easyui_textbox_input" + ++j;
            e.addClass(d.cls),
                e.find(".textbox-text").remove(),
                d.multiline ? a('<textarea id="' + g + '" class="textbox-text" autocomplete="off"></textarea>').prependTo(e) : a('<input id="' + g + '" type="' + d.type + '" class="textbox-text" autocomplete="off">').prependTo(e),
                a("#" + g).attr("tabindex", a(b).attr("tabindex") || "").css("text-align", b.style.textAlign || ""),
                e.find(".textbox-addon").remove();
            var k = d.icons ? a.extend(!0, [], d.icons) : [];
            if (d.iconCls && k.push({
                iconCls: d.iconCls,
                disabled: !0
            }), k.length) {
                var l = a('<span class="textbox-addon"></span>').prependTo(e);
                l.addClass("textbox-addon-" + d.iconAlign);
                for (var m = 0; m < k.length; m++) l.append('<a href="javascript:;" class="textbox-icon ' + k[m].iconCls + '" icon-index="' + m + '" tabindex="-1"></a>')
            }
            if (e.find(".textbox-button").remove(), d.buttonText || d.buttonIcon) {
                var n = a('<a href="javascript:;" class="textbox-button"></a>').prependTo(e);
                n.addClass("textbox-button-" + d.buttonAlign).linkbutton({
                    text: d.buttonText,
                    iconCls: d.buttonIcon,
                    onClick: function () {
                        var b = a(this).parent().prev();
                        b.textbox("options").onClickButton.call(b[0])
                    }
                })
            }
            d.label ? "object" == typeof d.label ? (c.label = a(d.label), c.label.attr("for", g)) : (a(c.label).remove(), c.label = a('<label class="textbox-label"></label>').html(d.label), c.label.css("textAlign", d.labelAlign).attr("for", g), "after" == d.labelPosition ? c.label.insertAfter(e) : c.label.insertBefore(b), c.label.removeClass("textbox-label-left textbox-label-right textbox-label-top"), c.label.addClass("textbox-label-" + d.labelPosition)) : a(c.label).remove(),
                f(b),
                h(b, d.disabled),
                i(b, d.readonly)
        }
        function d(b) {
            var c = a.data(b, "textbox"),
                d = c.textbox;
            d.find(".textbox-text").validatebox("destroy"),
                d.remove(),
                a(c.label).remove(),
                a(b).remove()
        }
        function e(b, c) {
            function d(a) {
                return (g.iconAlign == a ? n._outerWidth() : 0) + e(a)
            }
            function e(b) {
                var c = 0;
                return m.filter(".textbox-button-" + b).each(function () {
                    c += "left" == b || "right" == b ? a(this).outerWidth() : a(this).outerHeight()
                }),
                    c
            }
            var f = a.data(b, "textbox"),
                g = f.options,
                h = f.textbox,
                i = h.parent();
            if (c && ("object" == typeof c ? a.extend(g, c) : g.width = c), isNaN(parseInt(g.width))) {
                var j = a(b).clone();
                j.css("visibility", "hidden"),
                    j.insertAfter(b),
                    g.width = j.outerWidth(),
                    j.remove()
            }
            var k = h.is(":visible");
            k || h.appendTo("body");
            var l = h.find(".textbox-text"),
                m = h.find(".textbox-button"),
                n = h.find(".textbox-addon"),
                o = n.find(".textbox-icon");
            "auto" == g.height && l.css({
                margin: "",
                paddingTop: "",
                paddingBottom: "",
                height: "",
                lineHeight: ""
            }),
                h._size(g, i),
            g.label && g.labelPosition && ("top" == g.labelPosition ? (f.label._size({
                width: "auto" == g.labelWidth ? h.outerWidth() : g.labelWidth
            }, h), "auto" != g.height && h._size("height", h.outerHeight() - f.label.outerHeight())) : (f.label._size({
                width: g.labelWidth,
                height: h.outerHeight()
            }, h), g.multiline || f.label.css("lineHeight", f.label.height() + "px"), h._size("width", h.outerWidth() - f.label.outerWidth()))),
                "left" == g.buttonAlign || "right" == g.buttonAlign ? m.linkbutton("resize", {
                    height: h.height()
                }) : m.linkbutton("resize", {
                    width: "100%"
                });
            var p = h.width() - o.length * g.iconWidth - e("left") - e("right"),
                q = "auto" == g.height ? l.outerHeight() : h.height() - e("top") - e("bottom");
            n.css(g.iconAlign, e(g.iconAlign) + "px"),
                n.css("top", e("top") + "px"),
                o.css({
                    width: g.iconWidth + "px",
                    height: q + "px"
                }),
                l.css({
                    paddingLeft: b.style.paddingLeft || "",
                    paddingRight: b.style.paddingRight || "",
                    marginLeft: d("left"),
                    marginRight: d("right"),
                    marginTop: e("top"),
                    marginBottom: e("bottom")
                }),
                g.multiline ? (l.css({
                    paddingTop: b.style.paddingTop || "",
                    paddingBottom: b.style.paddingBottom || ""
                }), l._outerHeight(q)) : l.css({
                    paddingTop: 0,
                    paddingBottom: 0,
                    height: q + "px",
                    lineHeight: q + "px"
                }),
                l._outerWidth(p),
                g.onResizing.call(b, g.width, g.height),
            k || h.insertAfter(b),
                g.onResize.call(b, g.width, g.height)
        }
        function f(b) {
            var c = a(b).textbox("options"),
                d = a(b).textbox("textbox");
            d.validatebox(a.extend({}, c, {
                deltaX: function (c) {
                    return a(b).textbox("getTipX", c)
                },
                deltaY: function (c) {
                    return a(b).textbox("getTipY", c)
                },
                onBeforeValidate: function () {
                    c.onBeforeValidate.call(b);
                    var d = a(this);
                    d.is(":focus") || d.val() !== c.value && (c.oldInputValue = d.val(), d.val(c.value))
                },
                onValidate: function (d) {
                    var e = a(this);
                    void 0 != c.oldInputValue && (e.val(c.oldInputValue), c.oldInputValue = void 0);
                    var f = e.parent();
                    d ? f.removeClass("textbox-invalid") : f.addClass("textbox-invalid"),
                        c.onValidate.call(b, d)
                }
            }))
        }
        function g(b) {
            var c = a.data(b, "textbox"),
                d = c.options,
                f = c.textbox,
                g = f.find(".textbox-text");
            if (g.attr("placeholder", d.prompt), g.unbind(".textbox"), a(c.label).unbind(".textbox"), !d.disabled && !d.readonly) {
                c.label && a(c.label).bind("click.textbox", function (c) {
                    d.hasFocusMe || (g.focus(), a(b).textbox("setSelectionRange", {
                        start: 0,
                        end: g.val().length
                    }))
                }),
                    g.bind("blur.textbox", function (b) {
                        f.hasClass("textbox-focused") && (d.value = a(this).val(), "" == d.value ? a(this).val(d.prompt).addClass("textbox-prompt") : a(this).removeClass("textbox-prompt"), f.removeClass("textbox-focused"))
                    }).bind("focus.textbox", function (b) {
                        d.hasFocusMe = !0,
                        f.hasClass("textbox-focused") || (a(this).val() != d.value && a(this).val(d.value), a(this).removeClass("textbox-prompt"), f.addClass("textbox-focused"))
                    });
                for (var h in d.inputEvents) g.bind(h + ".textbox", {
                    target: b
                }, d.inputEvents[h])
            }
            var i = f.find(".textbox-addon");
            i.unbind().bind("click", {
                target: b
            }, function (c) {
                var e = a(c.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
                if (e.length) {
                    var f = parseInt(e.attr("icon-index")),
                        g = d.icons[f];
                    g && g.handler && g.handler.call(e[0], c),
                        d.onClickIcon.call(b, f)
                }
            }),
                i.find(".textbox-icon").each(function (b) {
                    var c = d.icons[b],
                        e = a(this);
                    !c || c.disabled || d.disabled || d.readonly ? e.addClass("textbox-icon-disabled") : e.removeClass("textbox-icon-disabled")
                });
            var j = f.find(".textbox-button");
            j.linkbutton(d.disabled || d.readonly ? "disable" : "enable"),
                f.unbind(".textbox").bind("_resize.textbox", function (c, d) {
                    return (a(this).hasClass("easyui-fluid") || d) && e(b),
                        !1
                })
        }
        function h(b, c) {
            var d = a.data(b, "textbox"),
                e = d.options,
                f = d.textbox,
                g = f.find(".textbox-text"),
                h = a(b).add(f.find(".textbox-value"));
            e.disabled = c,
                e.disabled ? (g.blur(), g.validatebox("disable"), f.addClass("textbox-disabled"), h.attr("disabled", "disabled"), a(d.label).addClass("textbox-label-disabled")) : (g.validatebox("enable"), f.removeClass("textbox-disabled"), h.removeAttr("disabled"), a(d.label).removeClass("textbox-label-disabled"))
        }
        function i(b, c) {
            var d = a.data(b, "textbox"),
                e = d.options,
                f = d.textbox,
                g = f.find(".textbox-text");
            e.readonly = void 0 == c || c,
            e.readonly && g.triggerHandler("blur.textbox"),
                g.validatebox("readonly", e.readonly),
                f.removeClass("textbox-readonly").addClass(e.readonly ? "textbox-readonly" : "")
        }
        var j = 0;
        a.fn.textbox = function (d, f) {
            if ("string" == typeof d) {
                var h = a.fn.textbox.methods[d];
                return h ? h(this, f) : this.each(function () {
                    var b = a(this).textbox("textbox");
                    b.validatebox(d, f)
                })
            }
            return d = d || {},
                this.each(function () {
                    var f = a.data(this, "textbox");
                    f ? (a.extend(f.options, d), void 0 != d.value && (f.options.originalValue = d.value)) : (f = a.data(this, "textbox", {
                        options: a.extend({}, a.fn.textbox.defaults, a.fn.textbox.parseOptions(this), d),
                        textbox: b(this)
                    }), f.options.originalValue = f.options.value),
                        c(this),
                        g(this),
                    f.options.doSize && e(this);
                    var h = f.options.value;
                    f.options.value = "",
                        a(this).textbox("initValue", h)
                })
        },
            a.fn.textbox.methods = {
                options: function (b) {
                    return a.data(b[0], "textbox").options
                },
                cloneFrom: function (b, c) {
                    return b.each(function () {
                        var b = a(this);
                        if (!b.data("textbox")) {
                            a(c).data("textbox") || a(c).textbox();
                            var d = a.extend(!0, {}, a(c).textbox("options")),
                                e = b.attr("name") || "";
                            b.addClass("textbox-f").hide(),
                                b.removeAttr("name").attr("textboxName", e);
                            var h = a(c).next().clone().insertAfter(b),
                                i = "_easyui_textbox_input" + ++j;
                            h.find(".textbox-value").attr("name", e),
                                h.find(".textbox-text").attr("id", i);
                            var k = a(a(c).textbox("label")).clone();
                            k.length && (k.attr("for", i), "after" == d.labelPosition ? k.insertAfter(b.next()) : k.insertBefore(b)),
                                a.data(this, "textbox", {
                                    options: d,
                                    textbox: h,
                                    label: k.length ? k : void 0
                                });
                            var l = a(c).textbox("button");
                            l.length && b.textbox("button").linkbutton(a.extend(!0, {}, l.linkbutton("options"))),
                                g(this),
                                f(this)
                        }
                    })
                },
                textbox: function (b) {
                    if(a.data(b[0], "textbox")){
                        return a.data(b[0], "textbox").textbox.find(".textbox-text")
                    }

                },
                button: function (b) {
                    return a.data(b[0], "textbox").textbox.find(".textbox-button")
                },
                label: function (b) {
                    return a.data(b[0], "textbox").label
                },
                destroy: function (a) {
                    return a.each(function () {
                        d(this)
                    })
                },
                resize: function (a, b) {
                    return a.each(function () {
                        e(this, b)
                    })
                },
                disable: function (a) {
                    return a.each(function () {
                        h(this, !0),
                            g(this)
                    })
                },
                enable: function (a) {
                    return a.each(function () {
                        h(this, !1),
                            g(this)
                    })
                },
                readonly: function (a, b) {
                    return a.each(function () {
                        i(this, b),
                            g(this)
                    })
                },
                isValid: function (a) {
                    return a.textbox("textbox").validatebox("isValid")
                },
                clear: function (b) {
                    return b.each(function () {
                        a(this).textbox("setValue", "")
                    })
                },
                setText: function (b, c) {
                    return b.each(function () {
                        var b = a(this).textbox("options"),
                            d = a(this).textbox("textbox");
                        c = void 0 == c ? "" : String(c),
                        a(this).textbox("getText") != c && d.val(c),
                            b.value = c,
                        d.is(":focus") || (c ? d.removeClass("textbox-prompt") : d.val(b.prompt).addClass("textbox-prompt")),
                            a(this).textbox("validate")
                    })
                },
                initValue: function (b, c) {
                    return b.each(function () {
                        var b = a.data(this, "textbox");
                        a(this).textbox("setText", c),
                            b.textbox.find(".textbox-value").val(c),
                            a(this).val(c)
                    })
                },
                setValue: function (b, c) {
                    return b.each(function () {
                        if(a.data(this, "textbox")){
                            var b = a.data(this, "textbox").options,
                                d = a(this).textbox("getValue");
                            a(this).textbox("initValue", c),
                            d != c && (b.onChange.call(this, c, d), a(this).closest("form").trigger("_change", [this]))
                        }

                    })
                },
                getText: function (a) {
                    var b = a.textbox("textbox");
                    return b.is(":focus") ? b.val() : a.textbox("options").value
                },
                getValue: function (a) {
                    return a.data("textbox").textbox.find(".textbox-value").val()
                },
                reset: function (b) {
                    return b.each(function () {
                        var b = a(this).textbox("options");
                        a(this).textbox("textbox").val(b.originalValue),
                            a(this).textbox("setValue", b.originalValue)
                    })
                },
                getIcon: function (a, b) {
                    return a.data("textbox").textbox.find(".textbox-icon:eq(" + b + ")")
                },
                getTipX: function (a, b) {
                    var c = a.data("textbox"),
                        d = c.options,
                        e = c.textbox,
                        f = e.find(".textbox-text"),
                        b = b || d.tipPosition,
                        g = e.offset(),
                        h = f.offset(),
                        i = e.outerWidth(),
                        j = f.outerWidth();
                    return "right" == b ? i - j - h.left + g.left : "left" == b ? g.left - h.left : (i - j - h.left + g.left) / 2 - (h.left - g.left) / 2
                },
                getTipY: function (a, b) {
                    var c = a.data("textbox"),
                        d = c.options,
                        e = c.textbox,
                        f = e.find(".textbox-text"),
                        b = b || d.tipPosition,
                        g = e.offset(),
                        h = f.offset(),
                        i = e.outerHeight(),
                        j = f.outerHeight();
                    return "left" == b || "right" == b ? (i - j - h.top + g.top) / 2 - (h.top - g.top) / 2 : "bottom" == b ? i - j - h.top + g.top : g.top - h.top
                },
                getSelectionStart: function (a) {
                    return a.textbox("getSelectionRange").start
                },
                getSelectionRange: function (a) {
                    var b = a.textbox("textbox")[0],
                        c = 0,
                        d = 0;
                    if ("number" == typeof b.selectionStart) c = b.selectionStart,
                        d = b.selectionEnd;
                    else if (b.createTextRange) {
                        var e = document.selection.createRange(),
                            f = b.createTextRange();
                        f.setEndPoint("EndToStart", e),
                            c = f.text.length,
                            d = c + e.text.length
                    }
                    return {
                        start: c,
                        end: d
                    }
                },
                setSelectionRange: function (b, c) {
                    return b.each(function () {
                        var b = a(this).textbox("textbox")[0],
                            d = c.start,
                            e = c.end;
                        if (b.setSelectionRange) b.setSelectionRange(d, e);
                        else if (b.createTextRange) {
                            var f = b.createTextRange();
                            f.collapse(),
                                f.moveEnd("character", e),
                                f.moveStart("character", d),
                                f.select()
                        }
                    })
                }
            },
            a.fn.textbox.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.fn.validatebox.parseOptions(b), a.parser.parseOptions(b, ["prompt", "iconCls", "iconAlign", "buttonText", "buttonIcon", "buttonAlign", "label", "labelPosition", "labelAlign", {
                    multiline: "boolean",
                    iconWidth: "number",
                    labelWidth: "number"
                }]), {
                    value: c.val() || void 0,
                    type: c.attr("type") ? c.attr("type") : void 0
                })
            },
            a.fn.textbox.defaults = a.extend({}, a.fn.validatebox.defaults, {
                doSize: !0,
                width: "auto",
                height: "auto",
                cls: null,
                prompt: "",
                value: "",
                type: "text",
                multiline: !1,
                icons: [],
                iconCls: null,
                iconAlign: "right",
                iconWidth: 18,
                buttonText: "",
                buttonIcon: null,
                buttonAlign: "right",
                label: null,
                labelWidth: "auto",
                labelPosition: "before",
                labelAlign: "left",
                inputEvents: {
                    blur: function (b) {
                        var c = a(b.data.target),
                            d = c.textbox("options");
                        c.textbox("getValue") != d.value && c.textbox("setValue", d.value)
                    },
                    keydown: function (b) {
                        if (13 == b.keyCode) {
                            var c = a(b.data.target);
                            c.textbox("setValue", c.textbox("getText"));
                        }
                    }
                },
                onChange: function (a, b) {},
                onResizing: function (a, b) {},
                onResize: function (a, b) {},
                onClickButton: function () {},
                onClickIcon: function (a) {}
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "passwordbox"),
                e = c.options,
                f = a.extend(!0, [], e.icons);
            e.showEye && f.push({
                iconCls: "passwordbox-open",
                handler: function (a) {
                    e.revealed = !e.revealed,
                        d(b)
                }
            }),
                a(b).addClass("passwordbox-f").textbox(a.extend({}, e, {
                    icons: f
                })),
                d(b)
        }
        function c(b, c, d) {
            var e = a(b),
                f = e.passwordbox("options");
            if (f.revealed) return void e.textbox("setValue", c);
            for (var g = unescape(f.passwordChar), h = c.split(""), i = e.passwordbox("getValue").split(""), j = 0; j < h.length; j++) {
                var k = h[j];
                k != i[j] && k != g && i.splice(j, 0, k)
            }
            var l = e.passwordbox("getSelectionStart");
            h.length < i.length && i.splice(l, i.length - h.length, "");
            for (var j = 0; j < h.length; j++)(d || j != l - 1) && (h[j] = g);
            e.textbox("setValue", i.join("")),
                e.textbox("setText", h.join("")),
                e.textbox("setSelectionRange", {
                    start: l,
                    end: l
                })
        }
        function d(b, c) {
            var d = a(b),
                e = d.passwordbox("options"),
                f = d.next().find(".passwordbox-open"),
                g = unescape(e.passwordChar);
            c = void 0 == c ? d.textbox("getValue") : c,
                d.textbox("setValue", c),
                d.textbox("setText", e.revealed ? c : c.replace(/./gi, g)),
                e.revealed ? f.addClass("passwordbox-close") : f.removeClass("passwordbox-close")
        }
        function e(b) {
            var d = b.data.target,
                e = a(b.data.target),
                f = e.data("passwordbox"),
                g = e.data("passwordbox").options;
            f.checking = !0,
                f.value = e.passwordbox("getText"),


                function () {
                    if (f.checking) {
                        var a = e.passwordbox("getText");
                        f.value != a && (f.value = a, f.lastTimer && (clearTimeout(f.lastTimer), f.lastTimer = void 0), c(d, a), f.lastTimer = setTimeout(function () {
                            c(d, e.passwordbox("getText"), !0),
                                f.lastTimer = void 0
                        }, g.lastDelay)),
                            setTimeout(arguments.callee, g.checkInterval)
                    }
                }()
        }
        function f(b) {
            var c = b.data.target,
                e = a(c).data("passwordbox");
            e.checking = !1,
            e.lastTimer && (clearTimeout(e.lastTimer), e.lastTimer = void 0),
                d(c)
        }
        a.fn.passwordbox = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.passwordbox.methods[c];
                return e ? e(this, d) : this.textbox(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "passwordbox");
                    d ? a.extend(d.options, c) : d = a.data(this, "passwordbox", {
                        options: a.extend({}, a.fn.passwordbox.defaults, a.fn.passwordbox.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.passwordbox.methods = {
                options: function (b) {
                    return a.data(b[0], "passwordbox").options
                },
                setValue: function (a, b) {
                    return a.each(function () {
                        d(this, b)
                    })
                },
                clear: function (a) {
                    return a.each(function () {
                        d(this, "")
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        a(this).textbox("reset"),
                            d(this)
                    })
                },
                showPassword: function (b) {
                    return b.each(function () {
                        var b = a(this).passwordbox("options");
                        b.revealed = !0,
                            d(this)
                    })
                },
                hidePassword: function (b) {
                    return b.each(function () {
                        var b = a(this).passwordbox("options");
                        b.revealed = !1,
                            d(this)
                    })
                }
            },
            a.fn.passwordbox.parseOptions = function (b) {
                return a.extend({}, a.fn.textbox.parseOptions(b), a.parser.parseOptions(b, ["passwordChar", {
                    checkInterval: "number",
                    lastDelay: "number",
                    revealed: "boolean",
                    showEye: "boolean"
                }]))
            },
            a.fn.passwordbox.defaults = a.extend({}, a.fn.textbox.defaults, {
                passwordChar: "%u25CF",
                checkInterval: 200,
                lastDelay: 500,
                revealed: !1,
                showEye: !0,
                inputEvents: {
                    focus: e,
                    blur: f
                },
                val: function (b) {
                    return a(b).parent().prev().passwordbox("getValue")
                }
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var e = a.data(b, "filebox"),
                f = e.options;
            f.fileboxId = "filebox_file_id_" + ++d,
                a(b).addClass("filebox-f").textbox(f),
                a(b).textbox("textbox").attr("readonly", "readonly"),
                e.filebox = a(b).next().addClass("filebox");
            var g = c(b),
                h = a(b).filebox("button");
            h.length && (a('<label class="filebox-label" for="' + f.fileboxId + '"></label>').appendTo(h), h.linkbutton("options").disabled ? g.attr("disabled", "disabled") : g.removeAttr("disabled"))
        }
        function c(b) {
            var c = a.data(b, "filebox"),
                d = c.options;
            c.filebox.find(".textbox-value").remove(),
                d.oldValue = "";
            var e = a('<input type="file" class="textbox-value">').appendTo(c.filebox);
            return e.attr("id", d.fileboxId).attr("name", a(b).attr("textboxName") || ""),
                e.attr("accept", d.accept),
                e.attr("capture", d.capture),
            d.multiple && e.attr("multiple", "multiple"),
                e.change(function () {
                    var c = this.value;
                    this.files && (c = a.map(this.files, function (a) {
                        return a.name
                    }).join(d.separator)),
                        a(b).filebox("setText", c),
                        d.onChange.call(b, c, d.oldValue),
                        d.oldValue = c
                }),
                e
        }
        var d = 0;
        a.fn.filebox = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.filebox.methods[c];
                return e ? e(this, d) : this.textbox(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "filebox");
                    d ? a.extend(d.options, c) : a.data(this, "filebox", {
                        options: a.extend({}, a.fn.filebox.defaults, a.fn.filebox.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.filebox.methods = {
                options: function (b) {
                    var c = b.textbox("options");
                    return a.extend(a.data(b[0], "filebox").options, {
                        width: c.width,
                        value: c.value,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                },
                clear: function (b) {
                    return b.each(function () {
                        a(this).textbox("clear"),
                            c(this)
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        a(this).filebox("clear")
                    })
                },
                setValue: function (a) {
                    return a
                },
                setValues: function (a) {
                    return a
                }
            },
            a.fn.filebox.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.fn.textbox.parseOptions(b), a.parser.parseOptions(b, ["accept", "capture", "separator"]), {
                    multiple: !! c.attr("multiple") || void 0
                })
            },
            a.fn.filebox.defaults = a.extend({}, a.fn.textbox.defaults, {
                buttonIcon: null,
                buttonText: "Choose File",
                buttonAlign: "right",
                inputEvents: {},
                accept: "",
                capture: "",
                separator: ",",
                multiple: !1
            })
    }(jQuery),


    function ($) {
        function buildSearchBox(a) {
            function b() {
                if (f.menu) {
                    e.menu = $(f.menu).menu();
                    var a = e.menu.menu("options"),
                        b = a.onClick;
                    a.onClick = function (a) {
                        d(a),
                            b.call(this, a)
                    }
                } else e.menu && e.menu.menu("destroy"),
                    e.menu = null
            }
            function c() {
                if (e.menu) {
                    var a = e.menu.children("div.menu-item:first");
                    return e.menu.children("div.menu-item").each(function () {
                        var b = $.extend({}, $.parser.parseOptions(this), {
                            selected: !! $(this).attr("selected") || void 0
                        });
                        if (b.selected) return a = $(this),
                            !1
                    }),
                        e.menu.menu("getItem", a[0])
                }
                return null
            }
            function d(b) {
                b && ($(a).textbox("button").menubutton({
                    text: b.text,
                    iconCls: b.iconCls || null,
                    menu: e.menu,
                    menuAlign: f.buttonAlign,
                    plain: !1
                }), e.searchbox.find("input.textbox-value").attr("name", b.name || b.text), $(a).searchbox("resize"))
            }
            var e = $.data(a, "searchbox"),
                f = e.options,
                g = $.extend(!0, [], f.icons);
            g.push({
                iconCls: "searchbox-button",
                handler: function (a) {
                    var b = $(a.data.target),
                        c = b.searchbox("options");
                    c.searcher.call(a.data.target, b.searchbox("getValue"), b.searchbox("getName"))
                }
            }),
                b();
            var h = c();
            $(a).addClass("searchbox-f").textbox($.extend({}, f, {
                icons: g,
                buttonText: h ? h.text : ""
            })),
                $(a).attr("searchboxName", $(a).attr("textboxName")),
                e.searchbox = $(a).next(),
                e.searchbox.addClass("searchbox"),
                d(h)
        }
        $.fn.searchbox = function (a, b) {
            if ("string" == typeof a) {
                var c = $.fn.searchbox.methods[a];
                return c ? c(this, b) : this.textbox(a, b)
            }
            return a = a || {},
                this.each(function () {
                    var b = $.data(this, "searchbox");
                    b ? $.extend(b.options, a) : $.data(this, "searchbox", {
                        options: $.extend({}, $.fn.searchbox.defaults, $.fn.searchbox.parseOptions(this), a)
                    }),
                        buildSearchBox(this)
                })
        },
            $.fn.searchbox.methods = {
                options: function (a) {
                    var b = a.textbox("options");
                    return $.extend($.data(a[0], "searchbox").options, {
                        width: b.width,
                        value: b.value,
                        originalValue: b.originalValue,
                        disabled: b.disabled,
                        readonly: b.readonly
                    })
                },
                menu: function (a) {
                    return $.data(a[0], "searchbox").menu
                },
                getName: function (a) {
                    return $.data(a[0], "searchbox").searchbox.find("input.textbox-value").attr("name")
                },
                selectName: function (a, b) {
                    return a.each(function () {
                        var a = $.data(this, "searchbox").menu;
                        a && a.children("div.menu-item").each(function () {
                            var c = a.menu("getItem", this);
                            if (c.name == b) return $(this).triggerHandler("click"),
                                !1
                        })
                    })
                },
                destroy: function (a) {
                    return a.each(function () {
                        var a = $(this).searchbox("menu");
                        a && a.menu("destroy"),
                            $(this).textbox("destroy")
                    })
                }
            },
            $.fn.searchbox.parseOptions = function (target) {
                var t = $(target);
                return $.extend({}, $.fn.textbox.parseOptions(target), $.parser.parseOptions(target, ["menu"]), {
                    searcher: t.attr("searcher") ? eval(t.attr("searcher")) : void 0
                })
            },
            $.fn.searchbox.defaults = $.extend({}, $.fn.textbox.defaults, {
                inputEvents: $.extend({}, $.fn.textbox.defaults.inputEvents, {
                    keydown: function (a) {
                        if (13 == a.keyCode) {
                            a.preventDefault();
                            var b = $(a.data.target),
                                c = b.searchbox("options");
                            return b.searchbox("setValue", $(this).val()),
                                c.searcher.call(a.data.target, b.searchbox("getValue"), b.searchbox("getName")),
                                !1
                        }
                    }
                }),
                buttonAlign: "left",
                menu: null,
                searcher: function (a, b) {}
            })
    }(jQuery),


    function (a) {
        function b(b, e) {
            var f = a.data(b, "form").options;
            a.extend(f, e || {});
            var g = a.extend({}, f.queryParams);
            if (0 != f.onSubmit.call(b, g)) {
                var h = a(b).find(".textbox-text:focus");
                h.triggerHandler("blur"),
                    h.focus();
                var i = null;
                if (f.dirty) {
                    var j = [];
                    a.map(f.dirtyFields, function (b) {
                        a(b).hasClass("textbox-f") ? a(b).next().find(".textbox-value").each(function () {
                            j.push(this)
                        }) : j.push(b)
                    }),
                        i = a(b).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function () {
                            return a.inArray(this, j) == -1
                        }),
                        i.attr("disabled", "disabled")
                }
                f.ajax ? f.iframe ? c(b, g) : void 0 !== window.FormData ? d(b, g) : c(b, g) : a(b).submit(),
                f.dirty && i.removeAttr("disabled")
            }
        }
        function c(b, c) {
            function d(c) {
                var d = a(b);
                g.url && d.attr("action", g.url);
                var f = d.attr("target"),
                    i = d.attr("action");
                d.attr("target", h);
                var j = a();
                try {
                    for (var k in c) {
                        var l = a('<input type="hidden" name="' + k + '">').val(c[k]).appendTo(d);
                        j = j.add(l)
                    }
                    e(),
                        d[0].submit()
                } finally {
                    d.attr("action", i),
                        f ? d.attr("target", f) : d.removeAttr("target"),
                        j.remove()
                }
            }
            function e() {
                var b = a("#" + h);
                if (b.length) try {
                    var c = b.contents()[0].readyState;
                    c && "uninitialized" == c.toLowerCase() && setTimeout(e, 100)
                } catch (a) {
                    f()
                }
            }
            function f() {
                var c = a("#" + h);
                if (c.length) {
                    c.unbind();
                    var d = "";
                    try {
                        var e = c.contents().find("body");
                        if (d = e.html(), "" == d && --j) return void setTimeout(f, 100);
                        var i = e.find(">textarea");
                        if (i.length) d = i.val();
                        else {
                            var k = e.find(">pre");
                            k.length && (d = k.html())
                        }
                    } catch (a) {}
                    g.success.call(b, d),
                        setTimeout(function () {
                            c.unbind(),
                                c.remove()
                        }, 100)
                }
            }
            var g = a.data(b, "form").options,
                h = "easyui_frame_" + (new Date).getTime(),
                i = a("<iframe id=" + h + " name=" + h + "></iframe>").appendTo("body");
            i.attr("src", window.ActiveXObject ? "javascript:false" : "about:blank"),
                i.css({
                    position: "absolute",
                    top: -1e3,
                    left: -1e3
                }),
                i.bind("load", f),
                d(c);
            var j = 10
        }
        function d(b, c) {
            var d = a.data(b, "form").options,
                e = new FormData(a(b)[0]);
            for (var f in c) e.append(f, c[f]);
            a.ajax({
                url: d.url,
                type: "post",
                xhr: function () {
                    var c = a.ajaxSettings.xhr();
                    return c.upload && c.upload.addEventListener("progress", function (a) {
                        if (a.lengthComputable) {
                            var c = a.total,
                                e = a.loaded || a.position,
                                f = Math.ceil(100 * e / c);
                            d.onProgress.call(b, f)
                        }
                    }, !1),
                        c
                },
                data: e,
                dataType: "html",
                cache: !1,
                contentType: !1,
                processData: !1,
                complete: function (a) {
                    d.success.call(b, a.responseText)
                }
            })
        }
        function e(b, c) {
            function d(c) {
                var d = a(b);
                for (var f in c) {
                    var i = c[f];
                    e(f, i) || g(f, i) || (d.find('input[name="' + f + '"]').val(i), d.find('textarea[name="' + f + '"]').val(i), d.find('select[name="' + f + '"]').val(i))
                }
                h.onLoadSuccess.call(b, c),
                    d.form("validate")
            }
            function e(c, d) {
                var e = a(b).find('[switchbuttonName="' + c + '"]');
                return e.length ? (e.switchbutton("uncheck"), e.each(function () {
                    f(a(this).switchbutton("options").value, d) && a(this).switchbutton("check")
                }), !0) : (e = a(b).find('input[name="' + c + '"][type=radio], input[name="' + c + '"][type=checkbox]'), !! e.length && (e._propAttr("checked", !1), e.each(function () {
                    f(a(this).val(), d) && (a(this).data("lable").click(), a(this)._propAttr("checked", !0))
                }), !0))
            }
            function f(b, c) {
                return b == String(c) || a.inArray(b, a.isArray(c.split(",")) ? c.split(",") : [c]) >= 0
            }
            function g(c, d) {
                var e = a(b).find('[textboxName="' + c + '"],[sliderName="' + c + '"]');
                if (e.length) for (var f = 0; f < h.fieldTypes.length; f++) {
                    var g = h.fieldTypes[f],
                        i = e.data(g);
                    if (i) return i.options.multiple || i.options.range ? e[g]("setValues", d) : e[g]("setValue", d),
                        !0
                }
                return !1
            }
            var h = a.data(b, "form").options;
            if ("string" == typeof c) {
                var i = {};
                if (0 == h.onBeforeLoad.call(b, i)) return;
                a.ajax({
                    url: c,
                    data: i,
                    dataType: "json",
                    success: function (a) {
                        d(a)
                    },
                    error: function () {
                        h.onLoadError.apply(b, arguments)
                    }
                })
            } else d(c)
        }
        function f(b) {
            a("input,select,textarea", b).each(function () {
                if (!a(this).hasClass("textbox-value")) {
                    var b = this.type,
                        c = this.tagName.toLowerCase();
                    if ("text" == b || "hidden" == b || "password" == b || "textarea" == c) this.value = "";
                    else if ("file" == b) {
                        var d = a(this);
                        if (!d.hasClass("textbox-value")) {
                            var e = d.clone().val("");
                            e.insertAfter(d),
                                d.data("validatebox") ? (d.validatebox("destroy"), e.validatebox()) : d.remove()
                        }
                    } else "checkbox" == b || "radio" == b ? this.checked = !1 : "select" == c && (this.selectedIndex = -1)
                }
            });
            for (var c = a(), d = a(b), e = a.data(b, "form").options, f = 0; f < e.fieldTypes.length; f++) {
                var g = e.fieldTypes[f],
                    h = d.find("." + g + "-f").not(c);
                h.length && h[g] && (h[g]("clear"), c = c.add(h))
            }
            d.form("validate")
        }
        function g(b) {
            b.reset();
            for (var c = a(b), d = a.data(b, "form").options, e = d.fieldTypes.length - 1; e >= 0; e--) {
                var f = d.fieldTypes[e],
                    g = c.find("." + f + "-f");
                g.length && g[f] && g[f]("reset")
            }
            c.form("validate")
        }
        function h(c) {
            var d = a.data(c, "form").options;
            a(c).unbind(".form"),
            d.ajax && a(c).bind("submit.form", function () {
                return setTimeout(function () {
                    b(c, d)
                }, 0),
                    !1
            }),
                a(c).bind("_change.form", function (b, c) {
                    a.inArray(c, d.dirtyFields) == -1 && d.dirtyFields.push(c),
                        d.onChange.call(this, c)
                }).bind("change.form", function (b) {
                    var c = b.target;
                    a(c).hasClass("textbox-text") || (a.inArray(c, d.dirtyFields) == -1 && d.dirtyFields.push(c), d.onChange.call(this, c))
                }),
                k(c, d.novalidate)
        }
        function i(b, c) {
            c = c || {};
            var d = a.data(b, "form");
            d ? a.extend(d.options, c) : a.data(b, "form", {
                options: a.extend({}, a.fn.form.defaults, a.fn.form.parseOptions(b), c)
            })
        }
        function j(b) {
            if (a.fn.validatebox) {
                var c = a(b);
                c.find(".validatebox-text:not(:disabled)").validatebox("validate");
                var d = c.find(".validatebox-invalid");
                return d.filter(":not(:disabled):first").focus(),
                0 == d.length
            }
            return !0
        }
        function k(b, c) {
            var d = a.data(b, "form").options;
            d.novalidate = c,
                a(b).find(".validatebox-text:not(:disabled)").validatebox(c ? "disableValidation" : "enableValidation")
        }
        a.fn.form = function (b, c) {
            return "string" == typeof b ? (this.each(function () {
                i(this)
            }), a.fn.form.methods[b](this, c)) : this.each(function () {
                i(this, b),
                    h(this)
            })
        },
            a.fn.form.methods = {
                options: function (b) {
                    return a.data(b[0], "form").options
                },
                submit: function (a, c) {
                    return a.each(function () {
                        b(this, c)
                    })
                },
                load: function (a, b) {
                    return a.each(function () {
                        e(this, b)
                    })
                },
                clear: function (a) {
                    return a.each(function () {
                        f(this)
                    })
                },
                reset: function (a) {
                    return a.each(function () {
                        g(this)
                    })
                },
                validate: function (a) {
                    return j(a[0])
                },
                disableValidation: function (a) {
                    return a.each(function () {
                        k(this, !0)
                    })
                },
                enableValidation: function (a) {
                    return a.each(function () {
                        k(this, !1)
                    })
                },
                resetValidation: function (b) {
                    return b.each(function () {
                        a(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation")
                    })
                },
                resetDirty: function (b) {
                    return b.each(function () {
                        a(this).form("options").dirtyFields = []
                    })
                }
            },
            a.fn.form.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.parser.parseOptions(b, [{
                    ajax: "boolean",
                    dirty: "boolean"
                }]), {
                    url: c.attr("action") ? c.attr("action") : void 0
                })
            },
            a.fn.form.defaults = {
                fieldTypes: ["tagbox", "combobox", "combotree", "combogrid", "combotreegrid", "datetimebox", "datebox", "combo", "datetimespinner", "timespinner", "numberspinner", "spinner", "slider", "searchbox", "numberbox", "passwordbox", "filebox", "textbox", "switchbutton"],
                novalidate: !1,
                ajax: !0,
                iframe: !0,
                dirty: !1,
                dirtyFields: [],
                url: null,
                queryParams: {},
                onSubmit: function (b) {
                    return a(this).form("validate")
                },
                onProgress: function (a) {},
                success: function (a) {},
                onBeforeLoad: function (a) {},
                onLoadSuccess: function (a) {},
                onLoadError: function () {},
                onChange: function (a) {}
            }
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "numberbox"),
                d = c.options;
            a(b).addClass("numberbox-f").textbox(d),
                a(b).textbox("textbox").css({
                    imeMode: "disabled"
                }),
                a(b).attr("numberboxName", a(b).attr("textboxName")),
                c.numberbox = a(b).next(),
                c.numberbox.addClass("numberbox");
            var e = d.parser.call(b, d.value),
                f = d.formatter.call(b, e);
            a(b).numberbox("initValue", e).numberbox("setText", f)
        }
        function c(b, c) {
            var d = a.data(b, "numberbox"),
                e = d.options;
            e.value = parseFloat(c);
            var c = e.parser.call(b, c),
                f = e.formatter.call(b, c);
            e.value = c,
                a(b).textbox("setText", f).textbox("setValue", c),
                f = e.formatter.call(b, a(b).textbox("getValue")),
                a(b).textbox("setText", f)
        }
        a.fn.numberbox = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.numberbox.methods[c];
                return e ? e(this, d) : this.textbox(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "numberbox");
                    d ? a.extend(d.options, c) : d = a.data(this, "numberbox", {
                        options: a.extend({}, a.fn.numberbox.defaults, a.fn.numberbox.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.numberbox.methods = {
                options: function (b) {
                    var c = b.data("textbox") ? b.textbox("options") : {};
                    return a.extend(a.data(b[0], "numberbox").options, {
                        width: c.width,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                },
                fix: function (b) {
                    return b.each(function () {
                        var b = a(this).numberbox("options");
                        b.value = null;
                        var c = b.parser.call(this, a(this).numberbox("getText"));
                        a(this).numberbox("setValue", c)
                    })
                },
                setValue: function (a, b) {
                    return a.each(function () {
                        c(this, b)
                    })
                },
                clear: function (b) {
                    return b.each(function () {
                        a(this).textbox("clear"),
                            a(this).numberbox("options").value = ""
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        a(this).textbox("reset"),
                            a(this).numberbox("setValue", a(this).numberbox("getValue"))
                    })
                }
            },
            a.fn.numberbox.parseOptions = function (b) {
                var c = a(b);
                return a.extend({}, a.fn.textbox.parseOptions(b), a.parser.parseOptions(b, ["decimalSeparator", "groupSeparator", "suffix", {
                    min: "number",
                    max: "number",
                    precision: "number"
                }]), {
                    prefix: c.attr("prefix") ? c.attr("prefix") : void 0
                })
            },
            a.fn.numberbox.defaults = a.extend({}, a.fn.textbox.defaults, {
                inputEvents: {
                    keypress: function (b) {
                        var c = b.data.target,
                            d = a(c).numberbox("options");
                        return d.filter.call(c, b)
                    },
                    blur: function (b) {
                        a(b.data.target).numberbox("fix")
                    },
                    keydown: function (b) {
                        13 == b.keyCode && a(b.data.target).numberbox("fix")
                    }
                },
                min: null,
                max: null,
                precision: 0,
                decimalSeparator: ".",
                groupSeparator: "",
                prefix: "",
                suffix: "",
                filter: function (b) {
                    var c = a(this).numberbox("options"),
                        d = a(this).numberbox("getText");
                    if (b.metaKey || b.ctrlKey) return !0;
                    if (a.inArray(String(b.which), ["46", "8", "13", "0"]) >= 0) return !0;
                    var e = a("<span></span>");
                    e.html(String.fromCharCode(b.which));
                    var f = e.text();
                    return e.remove(),
                    !f || ("-" == f || f == c.decimalSeparator ? d.indexOf(f) == -1 : f == c.groupSeparator || "0123456789".indexOf(f) >= 0)
                },
                formatter: function (b) {
                    if (!b) return b;
                    b += "";
                    var c = a(this).numberbox("options"),
                        d = b,
                        e = "",
                        f = b.indexOf(".");
                    if (f >= 0 && (d = b.substring(0, f), e = b.substring(f + 1, b.length)), c.groupSeparator) for (var g = /(\d+)(\d{3})/; g.test(d);) d = d.replace(g, "$1" + c.groupSeparator + "$2");
                    return e ? c.prefix + d + c.decimalSeparator + e + c.suffix : c.prefix + d + c.suffix
                },
                parser: function (b) {
                    b += "";
                    var c = a(this).numberbox("options");
                    c.prefix && (b = a.trim(b.replace(new RegExp("\\" + a.trim(c.prefix), "g"), ""))),
                    c.suffix && (b = a.trim(b.replace(new RegExp("\\" + a.trim(c.suffix), "g"), ""))),
                    parseFloat(b) != c.value && (c.groupSeparator && (b = a.trim(b.replace(new RegExp("\\" + c.groupSeparator, "g"), ""))), c.decimalSeparator && (b = a.trim(b.replace(new RegExp("\\" + c.decimalSeparator, "g"), "."))), b = b.replace(/\s/g, ""));
                    var d = parseFloat(b).toFixed(c.precision);
                    return isNaN(d) ? d = "" : "number" == typeof c.min && d < c.min ? d = c.min.toFixed(c.precision) : "number" == typeof c.max && d > c.max && (d = c.max.toFixed(c.precision)),
                        d
                }
            })
    }(jQuery),


    function (a) {
        function b(b, c) {
            var d = a.data(b, "calendar").options,
                f = a(b);
            c && a.extend(d, {
                width: c.width,
                height: c.height
            }),
                f._size(d, f.parent()),
                f.find(".calendar-body")._outerHeight(f.height() - f.find(".calendar-header")._outerHeight()),
            f.find(".calendar-menu").is(":visible") && e(b)
        }
        function c(c) {
            a(c).addClass("calendar").html('<div class="calendar-header"><div class="calendar-nav calendar-prevmonth"></div><div class="calendar-nav calendar-nextmonth"></div><div class="calendar-nav calendar-prevyear"></div><div class="calendar-nav calendar-nextyear"></div><div class="calendar-title"><span class="calendar-text"></span></div></div><div class="calendar-body"><div class="calendar-menu"><div class="calendar-menu-year-inner"><span class="calendar-nav calendar-menu-prev"></span><span><input class="calendar-menu-year" type="text"></input></span><span class="calendar-nav calendar-menu-next"></span></div><div class="calendar-menu-month-inner"></div></div></div>'),
                a(c).bind("_resize", function (d, e) {
                    return (a(this).hasClass("easyui-fluid") || e) && b(c),
                        !1
                })
        }
        function d(b) {
            function c(b) {
                var c = a(b).closest(".calendar-day");
                return c.length ? c : a(b)
            }
            function d(c) {
                var d = a(b).find(".calendar-menu"),
                    e = d.find(".calendar-menu-year").val(),
                    f = d.find(".calendar-selected").attr("abbr");
                isNaN(e) || (i.year = parseInt(e), i.month = parseInt(f), g(b)),
                c && d.hide()
            }
            function f(a) {
                i.year += a,
                    g(b),
                    j.find(".calendar-menu-year").val(i.year)
            }
            function h(a) {
                i.month += a,
                    i.month > 12 ? (i.year++, i.month = 1) : i.month < 1 && (i.year--, i.month = 12),
                    g(b),
                    j.find("td.calendar-selected").removeClass("calendar-selected"),
                    j.find("td:eq(" + (i.month - 1) + ")").addClass("calendar-selected")
            }
            var i = a.data(b, "calendar").options,
                j = a(b).find(".calendar-menu");
            j.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar", function (a) {
                13 == a.keyCode && d(!0)
            }),
                a(b).unbind(".calendar").bind("mouseover.calendar", function (a) {
                    var b = c(a.target);
                    (b.hasClass("calendar-nav") || b.hasClass("calendar-text") || b.hasClass("calendar-day") && !b.hasClass("calendar-disabled")) && b.addClass("calendar-nav-hover")
                }).bind("mouseout.calendar", function (a) {
                    var b = c(a.target);
                    (b.hasClass("calendar-nav") || b.hasClass("calendar-text") || b.hasClass("calendar-day") && !b.hasClass("calendar-disabled")) && b.removeClass("calendar-nav-hover")
                }).bind("click.calendar", function (a) {
                    var k = c(a.target);
                    if (k.hasClass("calendar-menu-next") || k.hasClass("calendar-nextyear")) f(1);
                    else if (k.hasClass("calendar-menu-prev") || k.hasClass("calendar-prevyear")) f(-1);
                    else if (k.hasClass("calendar-menu-month")) j.find(".calendar-selected").removeClass("calendar-selected"),
                        k.addClass("calendar-selected"),
                        d(!0);
                    else if (k.hasClass("calendar-prevmonth")) h(-1);
                    else if (k.hasClass("calendar-nextmonth")) h(1);
                    else if (k.hasClass("calendar-text")) j.is(":visible") ? j.hide() : e(b);
                    else if (k.hasClass("calendar-day")) {
                        if (k.hasClass("calendar-disabled")) return;
                        var l = i.current;
                        k.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected"),
                            k.addClass("calendar-selected");
                        var m = k.attr("abbr").split(","),
                            n = parseInt(m[0]),
                            o = parseInt(m[1]),
                            p = parseInt(m[2]);
                        i.current = new Date(n, o - 1, p),
                            i.onSelect.call(b, i.current),
                        l && l.getTime() == i.current.getTime() || i.onChange.call(b, i.current, l),
                        i.year == n && i.month == o || (i.year = n, i.month = o, g(b))
                    }
                })
        }
        function e(b) {
            var c = a.data(b, "calendar").options;
            if (a(b).find(".calendar-menu").show(), a(b).find(".calendar-menu-month-inner").is(":empty")) {
                a(b).find(".calendar-menu-month-inner").empty();
                for (var d = a('<table class="calendar-mtable"></table>').appendTo(a(b).find(".calendar-menu-month-inner")), e = 0, f = 0; f < 3; f++) for (var g = a("<tr></tr>").appendTo(d), h = 0; h < 4; h++) a('<td class="calendar-nav calendar-menu-month"></td>').html(c.months[e++]).attr("abbr", e).appendTo(g)
            }
            var i = a(b).find(".calendar-body"),
                j = a(b).find(".calendar-menu"),
                k = j.find(".calendar-menu-year-inner"),
                l = j.find(".calendar-menu-month-inner");
            k.find("input").val(c.year).focus(),
                l.find("td.calendar-selected").removeClass("calendar-selected"),
                l.find("td:eq(" + (c.month - 1) + ")").addClass("calendar-selected"),
                j._outerWidth(i._outerWidth()),
                j._outerHeight(i._outerHeight()),
                l._outerHeight(j.height() - k._outerHeight())
        }
        function f(b, c, d) {
            for (var e = a.data(b, "calendar").options, f = [], g = new Date(c, d, 0).getDate(), h = 1; h <= g; h++) f.push([c, d, h]);
            for (var i = [], j = [], k = -1; f.length > 0;) {
                var l = f.shift();
                j.push(l);
                var m = new Date(l[0], l[1] - 1, l[2]).getDay();
                k == m ? m = 0 : m == (0 == e.firstDay ? 7 : e.firstDay) - 1 && (i.push(j), j = []),
                    k = m
            }
            j.length && i.push(j);
            var n = i[0];
            if (n.length < 7) for (; n.length < 7;) {
                var o = n[0],
                    l = new Date(o[0], o[1] - 1, o[2] - 1);
                n.unshift([l.getFullYear(), l.getMonth() + 1, l.getDate()])
            } else {
                for (var o = n[0], j = [], h = 1; h <= 7; h++) {
                    var l = new Date(o[0], o[1] - 1, o[2] - h);
                    j.unshift([l.getFullYear(), l.getMonth() + 1, l.getDate()])
                }
                i.unshift(j)
            }
            for (var p = i[i.length - 1]; p.length < 7;) {
                var q = p[p.length - 1],
                    l = new Date(q[0], q[1] - 1, q[2] + 1);
                p.push([l.getFullYear(), l.getMonth() + 1, l.getDate()])
            }
            if (i.length < 6) {
                for (var q = p[p.length - 1], j = [], h = 1; h <= 7; h++) {
                    var l = new Date(q[0], q[1] - 1, q[2] + h);
                    j.push([l.getFullYear(), l.getMonth() + 1, l.getDate()])
                }
                i.push(j)
            }
            return i
        }
        function g(b) {
            var c = a.data(b, "calendar").options;
            c.current && !c.validator.call(b, c.current) && (c.current = null);
            var d = new Date,
                e = d.getFullYear() + "," + (d.getMonth() + 1) + "," + d.getDate(),
                g = c.current ? c.current.getFullYear() + "," + (c.current.getMonth() + 1) + "," + c.current.getDate() : "",
                h = 6 - c.firstDay,
                i = h + 1;
            h >= 7 && (h -= 7),
            i >= 7 && (i -= 7),
                a(b).find(".calendar-title span").html(c.months[c.month - 1] + " " + c.year);
            var j = a(b).find("div.calendar-body");
            j.children("table").remove();
            var k = ['<table class="calendar-dtable" cellspacing="0" cellpadding="0" border="0">'];
            k.push("<thead><tr>"),
            c.showWeek && k.push('<th class="calendar-week">' + c.weekNumberHeader + "</th>");
            for (var l = c.firstDay; l < c.weeks.length; l++) k.push("<th>" + c.weeks[l] + "</th>");
            for (var l = 0; l < c.firstDay; l++) k.push("<th>" + c.weeks[l] + "</th>");
            k.push("</tr></thead>"),
                k.push("<tbody>");
            for (var m = f(b, c.year, c.month), l = 0; l < m.length; l++) {
                var n = m[l],
                    o = "";
                if (0 == l ? o = "calendar-first" : l == m.length - 1 && (o = "calendar-last"), k.push('<tr class="' + o + '">'), c.showWeek) {
                    var p = c.getWeekNumber(new Date(n[0][0], parseInt(n[0][1]) - 1, n[0][2]));
                    k.push('<td class="calendar-week">' + p + "</td>")
                }
                for (var q = 0; q < n.length; q++) {
                    var r = n[q],
                        s = r[0] + "," + r[1] + "," + r[2],
                        t = new Date(r[0], parseInt(r[1]) - 1, r[2]),
                        u = c.formatter.call(b, t),
                        v = c.styler.call(b, t),
                        w = "",
                        x = "";
                    "string" == typeof v ? x = v : v && (w = v.class || "", x = v.style || "");
                    var o = "calendar-day";
                    c.year == r[0] && c.month == r[1] || (o += " calendar-other-month"),
                    s == e && (o += " calendar-today"),
                    s == g && (o += " calendar-selected"),
                        q == h ? o += " calendar-saturday" : q == i && (o += " calendar-sunday"),
                        0 == q ? o += " calendar-first" : q == n.length - 1 && (o += " calendar-last"),
                        o += " " + w,
                    c.validator.call(b, t) || (o += " calendar-disabled"),
                        k.push('<td class="' + o + '" abbr="' + s + '" style="' + x + '">' + u + "</td>")
                }
                k.push("</tr>")
            }
            k.push("</tbody>"),
                k.push("</table>"),
                j.append(k.join("")),
                j.children("table.calendar-dtable").prependTo(j),
                c.onNavigate.call(b, c.year, c.month)
        }
        a.fn.calendar = function (e, f) {
            return "string" == typeof e ? a.fn.calendar.methods[e](this, f) : (e = e || {}, this.each(function () {
                var f = a.data(this, "calendar");
                f ? a.extend(f.options, e) : (f = a.data(this, "calendar", {
                    options: a.extend({}, a.fn.calendar.defaults, a.fn.calendar.parseOptions(this), e)
                }), c(this)),
                0 == f.options.border && a(this).addClass("calendar-noborder"),
                    b(this),
                    d(this),
                    g(this),
                    a(this).find("div.calendar-menu").hide()
            }))
        },
            a.fn.calendar.methods = {
                options: function (b) {
                    return a.data(b[0], "calendar").options
                },
                resize: function (a, c) {
                    return a.each(function () {
                        b(this, c)
                    })
                },
                moveTo: function (b, c) {
                    return b.each(function () {
                        if (!c) {
                            var b = new Date;
                            return void a(this).calendar({
                                year: b.getFullYear(),
                                month: b.getMonth() + 1,
                                current: c
                            })
                        }
                        var d = a(this).calendar("options");
                        if (d.validator.call(this, c)) {
                            var e = d.current;
                            a(this).calendar({
                                year: c.getFullYear(),
                                month: c.getMonth() + 1,
                                current: c
                            }),
                            e && e.getTime() == c.getTime() || d.onChange.call(this, d.current, e)
                        }
                    })
                }
            },
            a.fn.calendar.parseOptions = function (b) {
                a(b);
                return a.extend({}, a.parser.parseOptions(b, ["weekNumberHeader", {
                    firstDay: "number",
                    fit: "boolean",
                    border: "boolean",
                    showWeek: "boolean"
                }]))
            },
            a.fn.calendar.defaults = {
                width: 180,
                height: 180,
                fit: !1,
                border: !0,
                showWeek: !1,
                firstDay: 0,
                weeks: ["S", "M", "T", "W", "T", "F", "S"],
                months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                year: (new Date).getFullYear(),
                month: (new Date).getMonth() + 1,
                current: function () {
                    var a = new Date;
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate())
                }(),
                weekNumberHeader: "",
                getWeekNumber: function (a) {
                    var b = new Date(a.getTime());
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0),
                        b.setDate(1),
                    Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                },
                formatter: function (a) {
                    return a.getDate()
                },
                styler: function (a) {
                    return ""
                },
                validator: function (a) {
                    return !0
                },
                onSelect: function (a) {},
                onChange: function (a, b) {},
                onNavigate: function (a, b) {}
            }
    }(jQuery),


    function (a) {
        function b(b) {
            var d = a.data(b, "spinner"),
                e = d.options,
                f = a.extend(!0, [], e.icons);
            if ("left" == e.spinAlign || "right" == e.spinAlign) {
                e.spinArrow = !0,
                    e.iconAlign = e.spinAlign;
                var g = {
                    iconCls: "spinner-arrow",
                    handler: function (b) {
                        var d = a(b.target).closest(".spinner-arrow-up,.spinner-arrow-down");
                        c(b.data.target, d.hasClass("spinner-arrow-down"))
                    }
                };
                "left" == e.spinAlign ? f.unshift(g) : f.push(g)
            } else e.spinArrow = !1,
                "vertical" == e.spinAlign ? ("top" != e.buttonAlign && (e.buttonAlign = "bottom"), e.clsLeft = "textbox-button-bottom", e.clsRight = "textbox-button-top") : (e.clsLeft = "textbox-button-left", e.clsRight = "textbox-button-right");
            if (a(b).addClass("spinner-f").textbox(a.extend({}, e, {
                icons: f,
                doSize: !1,
                onResize: function (b, c) {
                    if (!e.spinArrow) {
                        var d = a(this).next(),
                            f = d.find(".textbox-button:not(.spinner-button)");
                        if (f.length) {
                            var g = f.outerWidth(),
                                h = f.outerHeight(),
                                i = d.find(".spinner-button." + e.clsLeft),
                                j = d.find(".spinner-button." + e.clsRight);
                            "right" == e.buttonAlign ? j.css("marginRight", g + "px") : "left" == e.buttonAlign ? i.css("marginLeft", g + "px") : "top" == e.buttonAlign ? j.css("marginTop", h + "px") : i.css("marginBottom", h + "px")
                        }
                    }
                    e.onResize.call(this, b, c)
                }
            })), a(b).attr("spinnerName", a(b).attr("textboxName")), d.spinner = a(b).next(), d.spinner.addClass("spinner"), e.spinArrow) {
                var h = d.spinner.find(".spinner-arrow");
                h.append('<a href="javascript:;" class="spinner-arrow-up" tabindex="-1"></a>'),
                    h.append('<a href="javascript:;" class="spinner-arrow-down" tabindex="-1"></a>')
            } else {
                var i = a('<a href="javascript:;" class="textbox-button spinner-button"></a>').addClass(e.clsLeft).appendTo(d.spinner),
                    j = a('<a href="javascript:;" class="textbox-button spinner-button"></a>').addClass(e.clsRight).appendTo(d.spinner);
                i.linkbutton({
                    iconCls: e.reversed ? "spinner-button-up" : "spinner-button-down",
                    onClick: function () {
                        c(b, !e.reversed)
                    }
                }),
                    j.linkbutton({
                        iconCls: e.reversed ? "spinner-button-down" : "spinner-button-up",
                        onClick: function () {
                            c(b, e.reversed)
                        }
                    }),
                e.disabled && a(b).spinner("disable"),
                e.readonly && a(b).spinner("readonly")
            }
            a(b).spinner("resize")
        }
        function c(b, c) {
            var d = a(b).spinner("options");
            d.spin.call(b, c),
                d[c ? "onSpinDown" : "onSpinUp"].call(b),
                a(b).spinner("validate")
        }
        a.fn.spinner = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.spinner.methods[c];
                return e ? e(this, d) : this.textbox(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "spinner");
                    d ? a.extend(d.options, c) : d = a.data(this, "spinner", {
                        options: a.extend({}, a.fn.spinner.defaults, a.fn.spinner.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.spinner.methods = {
                options: function (b) {
                    var c = b.textbox("options");
                    return a.extend(a.data(b[0], "spinner").options, {
                        width: c.width,
                        value: c.value,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                }
            },
            a.fn.spinner.parseOptions = function (b) {
                return a.extend({}, a.fn.textbox.parseOptions(b), a.parser.parseOptions(b, ["min", "max", "spinAlign", {
                    increment: "number",
                    reversed: "boolean"
                }]))
            },
            a.fn.spinner.defaults = a.extend({}, a.fn.textbox.defaults, {
                min: null,
                max: null,
                increment: 1,
                spinAlign: "right",
                reversed: !1,
                spin: function (a) {},
                onSpinUp: function () {},
                onSpinDown: function () {}
            })
    }(jQuery),


    function (a) {
        function b(b) {
            a(b).addClass("numberspinner-f");
            var c = a.data(b, "numberspinner").options;
            a(b).numberbox(a.extend({}, c, {
                doSize: !1
            })).spinner(c),
                a(b).numberbox("setValue", c.value)
        }
        function c(b, c) {
            var d = a.data(b, "numberspinner").options,
                e = parseFloat(a(b).numberbox("getValue") || d.value) || 0;
            c ? e -= d.increment : e += d.increment,
                a(b).numberbox("setValue", e)
        }
        a.fn.numberspinner = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.numberspinner.methods[c];
                return e ? e(this, d) : this.numberbox(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "numberspinner");
                    d ? a.extend(d.options, c) : a.data(this, "numberspinner", {
                        options: a.extend({}, a.fn.numberspinner.defaults, a.fn.numberspinner.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.numberspinner.methods = {
                options: function (b) {
                    var c = b.numberbox("options");
                    return a.extend(a.data(b[0], "numberspinner").options, {
                        width: c.width,
                        value: c.value,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                }
            },
            a.fn.numberspinner.parseOptions = function (b) {
                return a.extend({}, a.fn.spinner.parseOptions(b), a.fn.numberbox.parseOptions(b), {})
            },
            a.fn.numberspinner.defaults = a.extend({}, a.fn.spinner.defaults, a.fn.numberbox.defaults, {
                spin: function (a) {
                    c(this, a)
                }
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "timespinner").options;
            a(b).addClass("timespinner-f").spinner(c);
            var d = c.formatter.call(b, c.parser.call(b, c.value));
            a(b).timespinner("initValue", d)
        }
        function c(b) {
            for (var c = b.data.target, e = a.data(c, "timespinner").options, f = a(c).timespinner("getSelectionStart"), g = 0; g < e.selections.length; g++) {
                var h = e.selections[g];
                if (f >= h[0] && f <= h[1]) return void d(c, g)
            }
        }
        function d(b, c) {
            var d = a.data(b, "timespinner").options;
            void 0 != c && (d.highlight = c);
            var e = d.selections[d.highlight];
            if (e) {
                var f = a(b).timespinner("textbox");
                a(b).timespinner("setSelectionRange", {
                    start: e[0],
                    end: e[1]
                }),
                    f.focus()
            }
        }
        function e(b, c) {
            var d = a.data(b, "timespinner").options,
                c = d.parser.call(b, c),
                e = d.formatter.call(b, c);
            a(b).spinner("setValue", e)
        }
        function f(b, c) {
            var e = a.data(b, "timespinner").options,
                f = a(b).timespinner("getValue"),
                g = e.selections[e.highlight],
                h = f.substring(0, g[0]),
                i = f.substring(g[0], g[1]),
                j = f.substring(g[1]),
                k = h + ((parseInt(i, 10) || 0) + e.increment * (c ? -1 : 1)) + j;
            a(b).timespinner("setValue", k),
                d(b)
        }
        a.fn.timespinner = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.timespinner.methods[c];
                return e ? e(this, d) : this.spinner(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "timespinner");
                    d ? a.extend(d.options, c) : a.data(this, "timespinner", {
                        options: a.extend({}, a.fn.timespinner.defaults, a.fn.timespinner.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.timespinner.methods = {
                options: function (b) {
                    var c = b.data("spinner") ? b.spinner("options") : {};
                    return a.extend(a.data(b[0], "timespinner").options, {
                        width: c.width,
                        value: c.value,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                },
                setValue: function (a, b) {
                    return a.each(function () {
                        e(this, b)
                    })
                },
                getHours: function (b) {
                    var c = a.data(b[0], "timespinner").options,
                        d = b.timespinner("getValue").split(c.separator);
                    return parseInt(d[0], 10)
                },
                getMinutes: function (b) {
                    var c = a.data(b[0], "timespinner").options,
                        d = b.timespinner("getValue").split(c.separator);
                    return parseInt(d[1], 10)
                },
                getSeconds: function (b) {
                    var c = a.data(b[0], "timespinner").options,
                        d = b.timespinner("getValue").split(c.separator);
                    return parseInt(d[2], 10) || 0
                }
            },
            a.fn.timespinner.parseOptions = function (b) {
                return a.extend({}, a.fn.spinner.parseOptions(b), a.parser.parseOptions(b, ["separator", {
                    showSeconds: "boolean",
                    highlight: "number"
                }]))
            },
            a.fn.timespinner.defaults = a.extend({}, a.fn.spinner.defaults, {
                inputEvents: a.extend({}, a.fn.spinner.defaults.inputEvents, {
                    click: function (a) {
                        c.call(this, a)
                    },
                    blur: function (b) {
                        var c = a(b.data.target);
                        c.timespinner("setValue", c.timespinner("getText"))
                    },
                    keydown: function (b) {
                        if (13 == b.keyCode) {
                            var c = a(b.data.target);
                            c.timespinner("setValue", c.timespinner("getText"))
                        }
                    }
                }),
                formatter: function (b) {
                    function c(a) {
                        return (a < 10 ? "0" : "") + a
                    }
                    if (!b) return "";
                    var d = a(this).timespinner("options"),
                        e = [c(b.getHours()), c(b.getMinutes())];
                    return d.showSeconds && e.push(c(b.getSeconds())),
                        e.join(d.separator)
                },
                parser: function (b) {
                    function c(a) {
                        if (!a) return null;
                        var b = a.split(d.separator);
                        return new Date(1900, 0, 0, parseInt(b[0], 10) || 0, parseInt(b[1], 10) || 0, parseInt(b[2], 10) || 0)
                    }
                    var d = a(this).timespinner("options"),
                        e = c(b);
                    if (e) {
                        var f = c(d.min),
                            g = c(d.max);
                        f && f > e && (e = f),
                        g && g < e && (e = g)
                    }
                    return e
                },
                selections: [
                    [0, 2],
                    [3, 5],
                    [6, 8]
                ],
                separator: ":",
                showSeconds: !1,
                highlight: 0,
                spin: function (a) {
                    f(this, a)
                }
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "datetimespinner").options;
            a(b).addClass("datetimespinner-f").timespinner(c)
        }
        a.fn.datetimespinner = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.datetimespinner.methods[c];
                return e ? e(this, d) : this.timespinner(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "datetimespinner");
                    d ? a.extend(d.options, c) : a.data(this, "datetimespinner", {
                        options: a.extend({}, a.fn.datetimespinner.defaults, a.fn.datetimespinner.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.datetimespinner.methods = {
                options: function (b) {
                    var c = b.timespinner("options");
                    return a.extend(a.data(b[0], "datetimespinner").options, {
                        width: c.width,
                        value: c.value,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                }
            },
            a.fn.datetimespinner.parseOptions = function (b) {
                return a.extend({}, a.fn.timespinner.parseOptions(b), a.parser.parseOptions(b, []))
            },
            a.fn.datetimespinner.defaults = a.extend({}, a.fn.timespinner.defaults, {
                formatter: function (b) {
                    return b ? a.fn.datebox.defaults.formatter.call(this, b) + " " + a.fn.timespinner.defaults.formatter.call(this, b) : ""
                },
                parser: function (b) {
                    if (b = a.trim(b), !b) return null;
                    var c = b.split(" "),
                        d = a.fn.datebox.defaults.parser.call(this, c[0]);
                    if (c.length < 2) return d;
                    var e = a.fn.timespinner.defaults.parser.call(this, c[1]);
                    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), e.getHours(), e.getMinutes(), e.getSeconds())
                },
                selections: [
                    [0, 2],
                    [3, 5],
                    [6, 10],
                    [11, 13],
                    [14, 16],
                    [17, 19]
                ]
            })
    }(jQuery),

    function (a) {
        function b(b) {
            var e = (a.data(b, "propertygrid"), a.data(b, "propertygrid").options);
            a(b).datagrid(a.extend({}, e, {
                cls: "propertygrid",
                view: e.showGroup ? e.groupView : e.view,
                onBeforeEdit: function (c, d) {
                    if (0 == e.onBeforeEdit.call(b, c, d)) return !1;
                    var f = a(this),
                        d = f.datagrid("getRows")[c],
                        g = f.datagrid("getColumnOption", "value");
                    g.editor = d.editor
                },
                onClickCell: function (f, g, h) {
                    if (d != this && (c(d), d = this), e.editIndex != f) {
                        c(d),
                            a(this).datagrid("beginEdit", f);
                        var i = a(this).datagrid("getEditor", {
                            index: f,
                            field: g
                        });
                        if (i || (i = a(this).datagrid("getEditor", {
                            index: f,
                            field: "value"
                        })), i) {
                            var j = a(i.target),
                                k = j.data("textbox") ? j.textbox("textbox") : j;
                            k.focus(),
                                e.editIndex = f
                        }
                    }
                    e.onClickCell.call(b, f, g, h)
                },
                loadFilter: function (a) {
                    return c(this),
                        e.loadFilter.call(this, a)
                }
            }))
        }
        function c(b) {
            var c = a(b);
            if (c.length) {
                var d = a.data(b, "propertygrid").options;
                d.finder.getTr(b, null, "editing").each(function () {
                    var b = parseInt(a(this).attr("datagrid-row-index"));
                    c.datagrid("validateRow", b) ? c.datagrid("endEdit", b) : c.datagrid("cancelEdit", b)
                }),
                    d.editIndex = void 0
            }
        }
        var d;
        a(document).unbind(".propertygrid").bind("mousedown.propertygrid", function (b) {
            var e = a(b.target).closest("div.datagrid-view,div.combo-panel");
            e.length || (c(d), d = void 0)
        }),
            a.fn.propertygrid = function (c, d) {
                if ("string" == typeof c) {
                    var e = a.fn.propertygrid.methods[c];
                    return e ? e(this, d) : this.datagrid(c, d)
                }
                return c = c || {},
                    this.each(function () {
                        var d = a.data(this, "propertygrid");
                        if (d) a.extend(d.options, c);
                        else {
                            var e = a.extend({}, a.fn.propertygrid.defaults, a.fn.propertygrid.parseOptions(this), c);
                            e.frozenColumns = a.extend(!0, [], e.frozenColumns),
                                e.columns = a.extend(!0, [], e.columns),
                                a.data(this, "propertygrid", {
                                    options: e
                                })
                        }
                        b(this)
                    })
            },
            a.fn.propertygrid.methods = {
                options: function (b) {
                    return a.data(b[0], "propertygrid").options
                }
            },
            a.fn.propertygrid.parseOptions = function (b) {
                return a.extend({}, a.fn.datagrid.parseOptions(b), a.parser.parseOptions(b, [{
                    showGroup: "boolean"
                }]))
            };
        var e = a.extend({}, a.fn.datagrid.defaults.view, {
            render: function (b, c, d) {
                for (var e = [], f = this.groups, g = 0; g < f.length; g++) e.push(this.renderGroup.call(this, b, g, f[g], d));
                a(c).html(e.join(""))
            },
            renderGroup: function (b, c, d, e) {
                var f = a.data(b, "datagrid"),
                    g = f.options,
                    h = a(b).datagrid("getColumnFields", e),
                    i = [];
                i.push('<div class="datagrid-group" group-index=' + c + ">"),
                (e && (g.rownumbers || g.frozenColumns.length) || !e && !g.rownumbers && !g.frozenColumns.length) && (i.push('<span class="datagrid-group-expander">'), i.push('<span class="datagrid-row-expander datagrid-row-collapse">&nbsp;</span>'), i.push("</span>")),
                e || (i.push('<span class="datagrid-group-title">'), i.push(g.groupFormatter.call(b, d.value, d.rows)), i.push("</span>")),
                    i.push("</div>"),
                    i.push('<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>');
                for (var j = d.startIndex, k = 0; k < d.rows.length; k++) {
                    var l = g.rowStyler ? g.rowStyler.call(b, j, d.rows[k]) : "",
                        m = "",
                        n = "";
                    "string" == typeof l ? n = l : l && (m = l.class || "", n = l.style || "");
                    var o = 'class="datagrid-row ' + (j % 2 && g.striped ? "datagrid-row-alt " : " ") + m + '"',
                        p = n ? 'style="' + n + '"' : "",
                        q = f.rowIdPrefix + "-" + (e ? 1 : 2) + "-" + j;
                    i.push('<tr id="' + q + '" datagrid-row-index="' + j + '" ' + o + " " + p + ">"),
                        i.push(this.renderRow.call(this, b, h, e, j, d.rows[k])),
                        i.push("</tr>"),
                        j++
                }
                return i.push("</tbody></table>"),
                    i.join("")
            },
            bindEvents: function (b) {
                var c = a.data(b, "datagrid"),
                    d = c.dc,
                    e = d.body1.add(d.body2),
                    f = (a.data(e[0], "events") || a._data(e[0], "events")).click[0].handler;
                e.unbind("click").bind("click", function (c) {
                    var d = a(c.target),
                        e = d.closest("span.datagrid-row-expander");
                    if (e.length) {
                        var g = e.closest("div.datagrid-group").attr("group-index");
                        e.hasClass("datagrid-row-collapse") ? a(b).datagrid("collapseGroup", g) : a(b).datagrid("expandGroup", g)
                    } else f(c);
                    c.stopPropagation()
                })
            },
            onBeforeRender: function (b, c) {
                function d(a) {
                    for (var b = 0; b < h.length; b++) {
                        var c = h[b];
                        if (c.value == a) return c
                    }
                    return null
                }
                function e() {
                    a("#datagrid-group-style").length || a("head").append('<style id="datagrid-group-style">.datagrid-group{height:' + g.groupHeight + "px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}.datagrid-group-title,.datagrid-group-expander{display:inline-block;vertical-align:bottom;height:100%;line-height:" + g.groupHeight + "px;padding:0 4px;}.datagrid-group-expander{width:" + g.expanderWidth + "px;text-align:center;padding:0}.datagrid-row-expander{margin:" + Math.floor((g.groupHeight - 16) / 2) + "px 0;display:inline-block;width:16px;height:16px;cursor:pointer}</style>")
                }
                var f = a.data(b, "datagrid"),
                    g = f.options;
                e();
                for (var h = [], i = 0; i < c.length; i++) {
                    var j = c[i],
                        k = d(j[g.groupField]);
                    k ? k.rows.push(j) : (k = {
                        value: j[g.groupField],
                        rows: [j]
                    }, h.push(k))
                }
                for (var l = 0, m = [], i = 0; i < h.length; i++) {
                    var k = h[i];
                    k.startIndex = l,
                        l += k.rows.length,
                        m = m.concat(k.rows)
                }
                f.data.rows = m,
                    this.groups = h;
                var n = this;
                setTimeout(function () {
                    n.bindEvents(b)
                }, 0)
            }
        });
        a.extend(a.fn.datagrid.methods, {
            groups: function (a) {
                return a.datagrid("options").view.groups
            },
            expandGroup: function (b, c) {
                return b.each(function () {
                    var b = a.data(this, "datagrid").dc.view,
                        d = b.find(void 0 != c ? 'div.datagrid-group[group-index="' + c + '"]' : "div.datagrid-group"),
                        e = d.find("span.datagrid-row-expander");
                    e.hasClass("datagrid-row-expand") && (e.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse"), d.next("table").show()),
                        a(this).datagrid("fixRowHeight")
                })
            },
            collapseGroup: function (b, c) {
                return b.each(function () {
                    var b = a.data(this, "datagrid").dc.view,
                        d = b.find(void 0 != c ? 'div.datagrid-group[group-index="' + c + '"]' : "div.datagrid-group"),
                        e = d.find("span.datagrid-row-expander");
                    e.hasClass("datagrid-row-collapse") && (e.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand"), d.next("table").hide()),
                        a(this).datagrid("fixRowHeight")
                })
            }
        }),
            a.extend(e, {
                refreshGroupTitle: function (b, c) {
                    var d = a.data(b, "datagrid"),
                        e = d.options,
                        f = d.dc,
                        g = this.groups[c],
                        h = f.body2.children("div.datagrid-group[group-index=" + c + "]").find("span.datagrid-group-title");
                    h.html(e.groupFormatter.call(b, g.value, g.rows))
                },
                insertRow: function (b, c, d) {
                    function e(a, c) {
                        var d = c ? 1 : 2,
                            e = h.finder.getTr(b, a - 1, "body", d),
                            f = h.finder.getTr(b, a, "body", d);
                        f.insertAfter(e)
                    }
                    var f, g = a.data(b, "datagrid"),
                        h = g.options,
                        i = g.dc,
                        j = null;
                    if (!g.data.rows.length) return void a(b).datagrid("loadData", [d]);
                    for (var k = 0; k < this.groups.length; k++) if (this.groups[k].value == d[h.groupField]) {
                        j = this.groups[k],
                            f = k;
                        break
                    }
                    j ? (void 0 != c && null != c || (c = g.data.rows.length), c < j.startIndex ? c = j.startIndex : c > j.startIndex + j.rows.length && (c = j.startIndex + j.rows.length), a.fn.datagrid.defaults.view.insertRow.call(this, b, c, d), c >= j.startIndex + j.rows.length && (e(c, !0), e(c, !1)), j.rows.splice(c - j.startIndex, 0, d)) : (j = {
                        value: d[h.groupField],
                        rows: [d],
                        startIndex: g.data.rows.length
                    }, f = this.groups.length, i.body1.append(this.renderGroup.call(this, b, f, j, !0)), i.body2.append(this.renderGroup.call(this, b, f, j, !1)), this.groups.push(j), g.data.rows.push(d)),
                        this.refreshGroupTitle(b, f)
                },
                updateRow: function (b, c, d) {
                    var e = a.data(b, "datagrid").options;
                    a.fn.datagrid.defaults.view.updateRow.call(this, b, c, d);
                    var f = e.finder.getTr(b, c, "body", 2).closest("table.datagrid-btable"),
                        g = parseInt(f.prev().attr("group-index"));
                    this.refreshGroupTitle(b, g)
                },
                deleteRow: function (b, c) {
                    var d = a.data(b, "datagrid"),
                        e = d.options,
                        f = d.dc,
                        g = f.body1.add(f.body2),
                        h = e.finder.getTr(b, c, "body", 2).closest("table.datagrid-btable"),
                        i = parseInt(h.prev().attr("group-index"));
                    a.fn.datagrid.defaults.view.deleteRow.call(this, b, c);
                    var j = this.groups[i];
                    if (j.rows.length > 1) j.rows.splice(c - j.startIndex, 1),
                        this.refreshGroupTitle(b, i);
                    else {
                        g.children("div.datagrid-group[group-index=" + i + "]").remove();
                        for (var k = i + 1; k < this.groups.length; k++) g.children("div.datagrid-group[group-index=" + k + "]").attr("group-index", k - 1);
                        this.groups.splice(i, 1)
                    }
                    for (var c = 0, k = 0; k < this.groups.length; k++) {
                        var j = this.groups[k];
                        j.startIndex = c,
                            c += j.rows.length
                    }
                }
            }),
            a.fn.propertygrid.defaults = a.extend({}, a.fn.datagrid.defaults, {
                groupHeight: 21,
                expanderWidth: 16,
                singleSelect: !0,
                remoteSort: !1,
                fitColumns: !0,
                loadMsg: "",
                frozenColumns: [
                    [{
                        field: "f",
                        width: 16,
                        resizable: !1
                    }]
                ],
                columns: [
                    [{
                        field: "name",
                        title: "Name",
                        width: 100,
                        sortable: !0
                    },
                        {
                            field: "value",
                            title: "Value",
                            width: 100,
                            resizable: !1
                        }]
                ],
                showGroup: !1,
                groupView: e,
                groupField: "group",
                groupFormatter: function (a, b) {
                    return a
                }
            })
    }(jQuery),




    function (a) {
        function b(b) {
            function d() {
                a(b).next().find(".tagbox-label").remove();
                var d = a(b).tagbox("textbox");
                a.map(a(b).tagbox("getValues"), function (c, e) {
                    var f = g.finder.getRow(b, c),
                        h = g.tagFormatter.call(b, c, f),
                        i = {},
                        j = g.tagStyler.call(b, c, f) || "";
                    i = "string" == typeof j ? {
                        s: j
                    } : {
                        c: j.class || "",
                        s: j.style || ""
                    };
                    var k = a('<span class="tagbox-label"></span>').insertBefore(d).html(h);
                    k.attr("tagbox-index", e),
                        k.attr("style", i.s).addClass(i.c),
                        a('<a href="javascript:;" class="tagbox-remove"></a>').appendTo(k)
                }),
                    c(b),
                    a(b).combobox("setText", "")
            }
            var f = a.data(b, "tagbox"),
                g = f.options;
            a(b).addClass("tagbox-f").combobox(a.extend({}, g, {
                cls: "tagbox",
                reversed: !0,
                onChange: function (c, e) {
                    d(),
                        a(this).combobox("hidePanel"),
                        g.onChange.call(b, c, e)
                },
                onResizing: function (d, f) {
                    var h = a(this).combobox("textbox"),
                        i = a(this).data("textbox").textbox;
                    i.css({
                        height: "",
                        paddingLeft: h.css("marginLeft"),
                        paddingRight: h.css("marginRight")
                    }),
                        h.css("margin", 0),
                        i._size({
                            width: g.width
                        }, a(this).parent()),
                        e(b),
                        c(this),
                        g.onResizing.call(b, d, f)
                },
                onLoadSuccess: function (a) {
                    d(),
                        g.onLoadSuccess.call(b, a)
                }
            })),
                d(),
                e(b)
        }
        function c(b, c) {
            var d = a(b).next(),
                e = c ? a(c) : d.find(".tagbox-label");
            if (e.length) {
                var f = a(b).tagbox("textbox"),
                    g = a(e[0]),
                    h = g.outerHeight(!0) - g.outerHeight(),
                    i = f.outerHeight() - 2 * h;
                e.css({
                    height: i + "px",
                    lineHeight: i + "px"
                });
                var j = d.find(".textbox-addon").css("height", "100%");
                j.find(".textbox-icon").css("height", "100%"),
                    d.find(".textbox-button").linkbutton("resize", {
                        height: "100%"
                    })
            }
        }
        function d(b) {
            var c = a(b).next();
            c.unbind(".tagbox").bind("click.tagbox", function (c) {
                var d = a(b).tagbox("options");
                if (!d.disabled && !d.readonly) {
                    if (a(c.target).hasClass("tagbox-remove")) {
                        var e = parseInt(a(c.target).parent().attr("tagbox-index")),
                            f = a(b).tagbox("getValues");
                        if (0 == d.onBeforeRemoveTag.call(b, f[e])) return;
                        d.onRemoveTag.call(b, f[e]),
                            f.splice(e, 1),
                            a(b).tagbox("setValues", f)
                    } else {
                        var g = a(c.target).closest(".tagbox-label");
                        if (g.length) {
                            var e = parseInt(g.attr("tagbox-index")),
                                f = a(b).tagbox("getValues");
                            d.onClickTag.call(b, f[e])
                        }
                    }
                    a(this).find(".textbox-text").focus()
                }
            }).bind("keyup.tagbox", function (a) {
                e(b)
            }).bind("mouseover.tagbox", function (b) {
                a(b.target).closest(".textbox-button,.textbox-addon,.tagbox-label").length ? a(this).triggerHandler("mouseleave") : a(this).find(".textbox-text").triggerHandler("mouseenter")
            }).bind("mouseleave.tagbox", function (b) {
                a(this).find(".textbox-text").triggerHandler("mouseleave")
            })
        }
        function e(b) {
            function c(a) {
                var b = a.replace(/&/g, "&amp;").replace(/\s/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                return g.html(b),
                    g.outerWidth()
            }
            var d = a(b).tagbox("options"),
                e = a(b).tagbox("textbox"),
                f = a(b).next(),
                g = a("<span></span>").appendTo("body");
            g.attr("style", e.attr("style")),
                g.css({
                    position: "absolute",
                    top: -9999,
                    left: -9999,
                    width: "auto",
                    fontFamily: e.css("fontFamily"),
                    fontSize: e.css("fontSize"),
                    fontWeight: e.css("fontWeight"),
                    whiteSpace: "nowrap"
                });
            var h = c(e.val()),
                i = c(d.prompt || "");
            g.remove();
            var j = Math.min(Math.max(h, i) + 20, f.width());
            e._outerWidth(j),
                f.find(".textbox-button").linkbutton("resize", {
                    height: "100%"
                })
        }
        function f(b) {
            var c = a(b),
                d = c.tagbox("options");
            if (d.limitToList) {
                var e = c.tagbox("panel"),
                    f = e.children("div.combobox-item-hover");
                if (f.length) {
                    f.removeClass("combobox-item-hover");
                    var g = d.finder.getRow(b, f),
                        h = g[d.valueField];
                    a(b).tagbox(f.hasClass("combobox-item-selected") ? "unselect" : "select", h)
                }
                a(b).tagbox("hidePanel")
            } else {
                var i = a.trim(a(b).tagbox("getText"));
                if ("" !== i) {
                    var j = a(b).tagbox("getValues");
                    j.push(i),
                        a(b).tagbox("setValues", j)
                }
            }
        }
        function g(b, c) {
            a(b).combobox("setText", ""),
                e(b),
                a(b).combobox("setValues", c),
                a(b).combobox("setText", ""),
                a(b).tagbox("validate")
        }
        a.fn.tagbox = function (c, e) {
            if ("string" == typeof c) {
                var f = a.fn.tagbox.methods[c];
                return f ? f(this, e) : this.combobox(c, e)
            }
            return c = c || {},
                this.each(function () {
                    var e = a.data(this, "tagbox");
                    e ? a.extend(e.options, c) : a.data(this, "tagbox", {
                        options: a.extend({}, a.fn.tagbox.defaults, a.fn.tagbox.parseOptions(this), c)
                    }),
                        b(this),
                        d(this)
                })
        },
            a.fn.tagbox.methods = {
                options: function (b) {
                    var c = b.combobox("options");
                    return a.extend(a.data(b[0], "tagbox").options, {
                        width: c.width,
                        height: c.height,
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                },
                setValues: function (a, b) {
                    return a.each(function () {
                        g(this, b)
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        a(this).combobox("reset").combobox("setText", "")
                    })
                }
            },
            a.fn.tagbox.parseOptions = function (b) {
                return a.extend({}, a.fn.combobox.parseOptions(b), a.parser.parseOptions(b, []))
            },
            a.fn.tagbox.defaults = a.extend({}, a.fn.combobox.defaults, {
                hasDownArrow: !1,
                multiple: !0,
                reversed: !0,
                selectOnNavigation: !1,
                tipOptions: a.extend({}, a.fn.textbox.defaults.tipOptions, {
                    showDelay: 200
                }),
                val: function (b) {
                    var c = a(b).parent().prev().tagbox("getValues");
                    return a(b).is(":focus") && c.push(a(b).val()),
                        c.join(",")
                },
                inputEvents: a.extend({}, a.fn.combo.defaults.inputEvents, {
                    blur: function (b) {
                        var c = b.data.target,
                            d = a(c).tagbox("options");
                        d.limitToList && f(c)
                    }
                }),
                keyHandler: a.extend({}, a.fn.combobox.defaults.keyHandler, {
                    enter: function (a) {
                        f(this)
                    },
                    query: function (b, c) {
                        var d = a(this).tagbox("options");
                        d.limitToList ? a.fn.combobox.defaults.keyHandler.query.call(this, b, c) : a(this).combobox("hidePanel")
                    }
                }),
                tagFormatter: function (b, c) {
                    var d = a(this).tagbox("options");
                    return c ? c[d.textField] : b
                },
                tagStyler: function (a, b) {
                    return ""
                },
                onClickTag: function (a) {},
                onBeforeRemoveTag: function (a) {},
                onRemoveTag: function (a) {}
            })
    }(jQuery),


    function (a) {
        function b(b) {
            function c(b) {
                var c = a(b).datebox("options"),
                    d = a(b).combo("panel");
                d.unbind(".datebox").bind("click.datebox", function (d) {
                    if (a(d.target).hasClass("datebox-button-a")) {
                        var e = parseInt(a(d.target).attr("datebox-button-index"));
                        c.buttons[e].handler.call(d.target, b)
                    }
                })
            }
            function d(b) {
                var c = a(b).combo("panel");
                if (!c.children("div.datebox-button").length) {
                    for (var d = a('<div class="datebox-button"><table cellspacing="0" cellpadding="0" style="width:100%"><tr></tr></table></div>').appendTo(c), e = d.find("tr"), f = 0; f < h.buttons.length; f++) {
                        var g = a("<td></td>").appendTo(e),
                            i = h.buttons[f],
                            j = a('<a class="datebox-button-a" href="javascript:;"></a>').html(a.isFunction(i.text) ? i.text(b) : i.text).appendTo(g);
                        j.attr("datebox-button-index", f)
                    }
                    e.find("td").css("width", 100 / h.buttons.length + "%")
                }
            }
            function f(b) {
                var c = a(b).combo("panel"),
                    d = c.children("div.datebox-calendar-inner");
                if (c.children()._outerWidth(c.width()), g.calendar.appendTo(d), g.calendar[0].target = b, "auto" != h.panelHeight) {
                    var e = c.height();
                    c.children().not(d).each(function () {
                        e -= a(this).outerHeight()
                    }),
                        d._outerHeight(e)
                }
                g.calendar.calendar("resize")
            }
            var g = a.data(b, "datebox"),
                h = g.options;
            if (a(b).addClass("datebox-f").combo(a.extend({}, h, {
                onShowPanel: function () {
                    c(this),
                        d(this),
                        f(this),
                        e(this, a(this).datebox("getText"), !0),
                        h.onShowPanel.call(this)
                }
            })), !g.calendar) {
                var i = a(b).combo("panel").css("overflow", "hidden");
                i.panel("options").onBeforeDestroy = function () {
                    var b = a(this).find(".calendar-shared");
                    b.length && b.insertBefore(b[0].pholder)
                };
                var j = a('<div class="datebox-calendar-inner"></div>').prependTo(i);
                if (h.sharedCalendar) {
                    var k = a(h.sharedCalendar);
                    k[0].pholder || (k[0].pholder = a('<div class="calendar-pholder" style="display:none"></div>').insertAfter(k)),
                        k.addClass("calendar-shared").appendTo(j),
                    k.hasClass("calendar") || k.calendar(),
                        g.calendar = k
                } else g.calendar = a("<div></div>").appendTo(j).calendar();
                a.extend(g.calendar.calendar("options"), {
                    fit: !0,
                    border: !1,
                    onSelect: function (b) {
                        var c = this.target,
                            d = a(c).datebox("options");
                        e(c, d.formatter.call(c, b)),
                            a(c).combo("hidePanel"),
                            d.onSelect.call(c, b)
                    }
                })
            }
            a(b).combo("textbox").parent().addClass("datebox"),
                a(b).datebox("initValue", h.value)
        }
        function c(a, b) {
            e(a, b, !0)
        }
        function d(b) {
            var c = a.data(b, "datebox"),
                d = c.options,
                f = c.calendar.calendar("options").current;
            f && (e(b, d.formatter.call(b, f)), a(b).combo("hidePanel"))
        }
        function e(b, c, d) {
            var e = a.data(b, "datebox"),
                f = e.options,
                g = e.calendar;
            g.calendar("moveTo", f.parser.call(b, c)),
                d ? a(b).combo("setValue", c) : (c && (c = f.formatter.call(b, g.calendar("options").current)), a(b).combo("setText", c).combo("setValue", c))
        }
        a.fn.datebox = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.datebox.methods[c];
                return e ? e(this, d) : this.combo(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "datebox");
                    d ? a.extend(d.options, c) : a.data(this, "datebox", {
                        options: a.extend({}, a.fn.datebox.defaults, a.fn.datebox.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.datebox.methods = {
                options: function (b) {
                    var c = b.combo("options");
                    return a.extend(a.data(b[0], "datebox").options, {
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
                            a.data(this, "datebox", {
                                options: a.extend(!0, {}, a(c).datebox("options")),
                                calendar: a(c).datebox("calendar")
                            }),
                            a(this).addClass("datebox-f")
                    })
                },
                calendar: function (b) {
                    return a.data(b[0], "datebox").calendar
                },
                initValue: function (b, c) {
                    return b.each(function () {
                        var b = a(this).datebox("options"),
                            c = b.value;
                        c && (c = b.formatter.call(this, b.parser.call(this, c))),
                            a(this).combo("initValue", c).combo("setText", c)
                    })
                },
                setValue: function (a, b) {
                    return a.each(function () {
                        e(this, b)
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        var b = a(this).datebox("options");
                        a(this).datebox("setValue", b.originalValue)
                    })
                }
            },
            a.fn.datebox.parseOptions = function (b) {
                return a.extend({}, a.fn.combo.parseOptions(b), a.parser.parseOptions(b, ["sharedCalendar"]))
            },
            a.fn.datebox.defaults = a.extend({}, a.fn.combo.defaults, {
                panelWidth: 180,
                panelHeight: "auto",
                sharedCalendar: null,
                keyHandler: {
                    up: function (a) {},
                    down: function (a) {},
                    left: function (a) {},
                    right: function (a) {},
                    enter: function (a) {
                        d(this)
                    },
                    query: function (a, b) {
                        c(this, a)
                    }
                },
                currentText: "Today",
                closeText: "Close",
                okText: "Ok",
                buttons: [{
                    text: function (b) {
                        return a(b).datebox("options").currentText
                    },
                    handler: function (b) {
                        var c = new Date;
                        a(b).datebox("calendar").calendar({
                            year: c.getFullYear(),
                            month: c.getMonth() + 1,
                            current: new Date(c.getFullYear(), c.getMonth(), c.getDate())
                        }),
                            d(b)
                    }
                },
                    {
                        text: function (b) {
                            return a(b).datebox("options").closeText
                        },
                        handler: function (b) {
                            a(this).closest("div.combo-panel").panel("close")
                        }
                    }],
                formatter: function (a) {
                    var b = a.getFullYear(),
                        c = a.getMonth() + 1,
                        d = a.getDate();
                    return (c < 10 ? "0" + c : c) + "/" + (d < 10 ? "0" + d : d) + "/" + b
                },
                parser: function (a) {
                    if (!a) return new Date;
                    var b = a.split("/"),
                        c = parseInt(b[0], 10),
                        d = parseInt(b[1], 10),
                        e = parseInt(b[2], 10);
                    return isNaN(e) || isNaN(c) || isNaN(d) ? new Date : new Date(e, c - 1, d)
                },
                onSelect: function (a) {}
            })
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a.data(b, "datetimebox"),
                d = c.options;
            if (a(b).datebox(a.extend({}, d, {
                onShowPanel: function () {
                    var b = a(this).datetimebox("getValue");
                    f(this, b, !0),
                        d.onShowPanel.call(this)
                },
                formatter: a.fn.datebox.defaults.formatter,
                parser: a.fn.datebox.defaults.parser
            })), a(b).removeClass("datebox-f").addClass("datetimebox-f"), a(b).datebox("calendar").calendar({
                onSelect: function (a) {
                    d.onSelect.call(this.target, a)
                }
            }), !c.spinner) {
                var e = a(b).datebox("panel"),
                    g = a('<div style="padding:2px"><input></div>').insertAfter(e.children("div.datebox-calendar-inner"));
                c.spinner = g.children("input")
            }
            c.spinner.timespinner({
                width: d.spinnerWidth,
                showSeconds: d.showSeconds,
                separator: d.timeSeparator
            }),
                a(b).datetimebox("initValue", d.value)
        }
        function c(b) {
            var c = a(b).datetimebox("calendar"),
                d = a(b).datetimebox("spinner"),
                e = c.calendar("options").current;
            return new Date(e.getFullYear(), e.getMonth(), e.getDate(), d.timespinner("getHours"), d.timespinner("getMinutes"), d.timespinner("getSeconds"))
        }
        function d(a, b) {
            f(a, b, !0)
        }
        function e(b) {
            var d = a.data(b, "datetimebox").options,
                e = c(b);
            f(b, d.formatter.call(b, e)),
                a(b).combo("hidePanel")
        }
        function f(b, c, d) {
            function e(c) {
                function d(a) {
                    return (a < 10 ? "0" : "") + a
                }
                var e = [d(c.getHours()), d(c.getMinutes())];
                return f.showSeconds && e.push(d(c.getSeconds())),
                    e.join(a(b).datetimebox("spinner").timespinner("options").separator)
            }
            var f = a.data(b, "datetimebox").options;
            if (a(b).combo("setValue", c), !d) if (c) {
                var g = f.parser.call(b, c);
                a(b).combo("setText", f.formatter.call(b, g)),
                    a(b).combo("setValue", f.formatter.call(b, g));
            } else a(b).combo("setText", c);
            var g = f.parser.call(b, c);
            a(b).datetimebox("calendar").calendar("moveTo", g),
                a(b).datetimebox("spinner").timespinner("setValue", e(g))
        }
        a.fn.datetimebox = function (c, d) {
            if ("string" == typeof c) {
                var e = a.fn.datetimebox.methods[c];
                return e ? e(this, d) : this.datebox(c, d)
            }
            return c = c || {},
                this.each(function () {
                    var d = a.data(this, "datetimebox");
                    d ? a.extend(d.options, c) : a.data(this, "datetimebox", {
                        options: a.extend({}, a.fn.datetimebox.defaults, a.fn.datetimebox.parseOptions(this), c)
                    }),
                        b(this)
                })
        },
            a.fn.datetimebox.methods = {
                options: function (b) {
                    var c = b.datebox("options");
                    return a.extend(a.data(b[0], "datetimebox").options, {
                        originalValue: c.originalValue,
                        disabled: c.disabled,
                        readonly: c.readonly
                    })
                },
                cloneFrom: function (b, c) {
                    return b.each(function () {
                        a(this).datebox("cloneFrom", c),
                            a.data(this, "datetimebox", {
                                options: a.extend(!0, {}, a(c).datetimebox("options")),
                                spinner: a(c).datetimebox("spinner")
                            }),
                            a(this).removeClass("datebox-f").addClass("datetimebox-f")
                    })
                },
                spinner: function (b) {
                    return a.data(b[0], "datetimebox").spinner
                },
                initValue: function (b, c) {
                    return b.each(function () {
                        var b = a(this).datetimebox("options"),
                            c = b.value;
                        c && (c = b.formatter.call(this, b.parser.call(this, c))),
                            a(this).combo("initValue", c).combo("setText", c)
                    })
                },
                setValue: function (a, b) {
                    return a.each(function () {
                        f(this, b)
                    })
                },
                reset: function (b) {
                    return b.each(function () {
                        var b = a(this).datetimebox("options");
                        a(this).datetimebox("setValue", b.originalValue)
                    })
                }
            },
            a.fn.datetimebox.parseOptions = function (b) {
                a(b);
                return a.extend({}, a.fn.datebox.parseOptions(b), a.parser.parseOptions(b, ["timeSeparator", "spinnerWidth", {
                    showSeconds: "boolean"
                }]))
            },
            a.fn.datetimebox.defaults = a.extend({}, a.fn.datebox.defaults, {
                spinnerWidth: "100%",
                showSeconds: !0,
                timeSeparator: ":",
                keyHandler: {
                    up: function (a) {},
                    down: function (a) {},
                    left: function (a) {},
                    right: function (a) {},
                    enter: function (a) {
                        e(this)
                    },
                    query: function (a, b) {
                        d(this, a)
                    }
                },
                buttons: [{
                    text: function (b) {
                        return a(b).datetimebox("options").currentText
                    },
                    handler: function (b) {
                        var c = a(b).datetimebox("options");
                        f(b, c.formatter.call(b, new Date)),
                            a(b).datetimebox("hidePanel")
                    }
                },
                    {
                        text: function (b) {
                            return a(b).datetimebox("options").okText
                        },
                        handler: function (a) {
                            e(a)

                        }
                    },
                    {
                        text: function (b) {
                            return a(b).datetimebox("options").closeText
                        },
                        handler: function (b) {
                            a(b).datetimebox("hidePanel")
                        }
                    }],
                formatter: function (b) {
                    function c(a) {
                        return (a < 10 ? "0" : "") + a
                    }
                    var d = b.getHours(),
                        e = b.getMinutes(),
                        f = b.getSeconds(),
                        g = a(this).datetimebox("spinner").timespinner("options").separator,
                        h = a.fn.datebox.defaults.formatter(b) + " " + c(d) + g + c(e);
                    return a(this).datetimebox("options").showSeconds && (h += g + c(f)),
                        h
                },
                parser: function (b) {
                    if ("" == a.trim(b)) return new Date;
                    var c = b.split(" "),
                        d = a.fn.datebox.defaults.parser(c[0]);
                    if (c.length < 2) return d;
                    var e = a(this).datetimebox("spinner").timespinner("options").separator,
                        f = c[1].split(e),
                        g = parseInt(f[0], 10) || 0,
                        h = parseInt(f[1], 10) || 0,
                        i = parseInt(f[2], 10) || 0;
                    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), g, h, i)
                }
            })
    }(jQuery),


    function ($) {
        function init(a) {
            var b = $('<div class="slider"><div class="slider-inner"><a href="javascript:;" class="slider-handle"></a><span class="slider-tip"></span></div><div class="slider-rule"></div><div class="slider-rulelabel"></div><div style="clear:both"></div><input type="hidden" class="slider-value"></div>').insertAfter(a),
                c = $(a);
            c.addClass("slider-f").hide();
            var d = c.attr("name");
            return d && (b.find("input.slider-value").attr("name", d), c.removeAttr("name").attr("sliderName", d)),
                b.bind("_resize", function (b, c) {
                    return ($(this).hasClass("easyui-fluid") || c) && setSize(a),
                        !1
                }),
                b
        }
        function setSize(a, b) {
            var c = $.data(a, "slider"),
                d = c.options,
                e = c.slider;
            b && (b.width && (d.width = b.width), b.height && (d.height = b.height)),
                e._size(d),
                "h" == d.mode ? (e.css("height", ""), e.children("div").css("height", "")) : (e.css("width", ""), e.children("div").css("width", ""), e.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(e._outerHeight())),
                initValue(a)
        }
        function showRule(a) {
            function b(a) {
                var b = e.find("div.slider-rule"),
                    c = e.find("div.slider-rulelabel");
                b.empty(),
                    c.empty();
                for (var f = 0; f < a.length; f++) {
                    var g = 100 * f / (a.length - 1) + "%",
                        h = $("<span></span>").appendTo(b);
                    h.css("h" == d.mode ? "left" : "top", g),
                    "|" != a[f] && (h = $("<span></span>").appendTo(c), h.html(a[f]), "h" == d.mode ? h.css({
                        left: g,
                        marginLeft: -Math.round(h.outerWidth() / 2)
                    }) : h.css({
                        top: g,
                        marginTop: -Math.round(h.outerHeight() / 2)
                    }))
                }
            }
            var c = $.data(a, "slider"),
                d = c.options,
                e = c.slider,
                f = "h" == d.mode ? d.rule : d.rule.slice(0).reverse();
            d.reversed && (f = f.slice(0).reverse()),
                b(f)
        }
        function buildSlider(a) {
            function b(b, c) {
                var e = pos2value(a, b),
                    f = Math.abs(e % d.step);
                if (f < d.step / 2 ? e -= f : e = e - f + d.step, d.range) {
                    var g = d.value[0],
                        h = d.value[1],
                        i = parseFloat((g + h) / 2);
                    if (c) {
                        var j = $(c).nextAll(".slider-handle").length > 0;
                        e <= h && j ? g = e : e >= g && !j && (h = e)
                    } else e < g ? g = e : e > h ? h = e : e < i ? g = e : h = e;
                    $(a).slider("setValues", [g, h])
                } else $(a).slider("setValue", e)
            }
            var c = $.data(a, "slider"),
                d = c.options,
                e = c.slider;
            e.removeClass("slider-h slider-v slider-disabled"),
                e.addClass("h" == d.mode ? "slider-h" : "slider-v"),
                e.addClass(d.disabled ? "slider-disabled" : "");
            var f = e.find(".slider-inner");
            f.html('<a href="javascript:;" class="slider-handle"></a><span class="slider-tip"></span>'),
            d.range && f.append('<a href="javascript:;" class="slider-handle"></a><span class="slider-tip"></span>'),
                e.find("a.slider-handle").draggable({
                    axis: d.mode,
                    cursor: "pointer",
                    disabled: d.disabled,
                    onDrag: function (a) {
                        var c = a.data.left,
                            f = e.width();
                        return "h" != d.mode && (c = a.data.top, f = e.height()),
                        !(c < 0 || c > f) && (b(c, this), !1)
                    },
                    onStartDrag: function () {
                        c.isDragging = !0,
                            d.onSlideStart.call(a, d.value)
                    },
                    onStopDrag: function (e) {
                        b("h" == d.mode ? e.data.left : e.data.top, this),
                            d.onSlideEnd.call(a, d.value),
                            d.onComplete.call(a, d.value),
                            c.isDragging = !1
                    }
                }),
                e.find("div.slider-inner").unbind(".slider").bind("mousedown.slider", function (e) {
                    if (!c.isDragging && !d.disabled) {
                        var f = $(this).offset();
                        b("h" == d.mode ? e.pageX - f.left : e.pageY - f.top),
                            d.onComplete.call(a, d.value)
                    }
                })
        }
        function setValues(a, b) {
            var c = $.data(a, "slider"),
                d = c.options,
                e = c.slider,
                f = $.isArray(d.value) ? d.value : [d.value],
                g = [];
            $.isArray(b) || (b = $.map(String(b).split(d.separator), function (a) {
                return parseFloat(a)
            })),
                e.find(".slider-value").remove();
            for (var h = $(a).attr("sliderName") || "", i = 0; i < b.length; i++) {
                var j = b[i];
                j < d.min && (j = d.min),
                j > d.max && (j = d.max);
                var k = $('<input type="hidden" class="slider-value">').appendTo(e);
                k.attr("name", h),
                    k.val(j),
                    g.push(j);
                var l = e.find(".slider-handle:eq(" + i + ")"),
                    m = l.next(),
                    n = value2pos(a, j);
                if (d.showTip ? (m.show(), m.html(d.tipFormatter.call(a, j))) : m.hide(), "h" == d.mode) {
                    var o = "left:" + n + "px;";
                    l.attr("style", o),
                        m.attr("style", o + "margin-left:" + -Math.round(m.outerWidth() / 2) + "px")
                } else {
                    var o = "top:" + n + "px;";
                    l.attr("style", o),
                        m.attr("style", o + "margin-left:" + -Math.round(m.outerWidth()) + "px")
                }
            }
            d.value = d.range ? g : g[0],
                $(a).val(d.range ? g.join(d.separator) : g[0]),
            f.join(",") != g.join(",") && d.onChange.call(a, d.value, d.range ? f : f[0])
        }
        function initValue(a) {
            var b = $.data(a, "slider").options,
                c = b.onChange;
            b.onChange = function () {},
                setValues(a, b.value),
                b.onChange = c
        }
        function value2pos(a, b) {
            var c = $.data(a, "slider"),
                d = c.options,
                e = c.slider,
                f = "h" == d.mode ? e.width() : e.height(),
                g = d.converter.toPosition.call(a, b, f);
            return "v" == d.mode && (g = e.height() - g),
            d.reversed && (g = f - g),
                g.toFixed(0)
        }
        function pos2value(a, b) {
            var c = $.data(a, "slider"),
                d = c.options,
                e = c.slider,
                f = "h" == d.mode ? e.width() : e.height(),
                b = "h" == d.mode ? d.reversed ? f - b : b : d.reversed ? b : f - b,
                g = d.converter.toValue.call(a, b, f);
            return g.toFixed(0)
        }
        $.fn.slider = function (a, b) {
            return "string" == typeof a ? $.fn.slider.methods[a](this, b) : (a = a || {}, this.each(function () {
                var b = $.data(this, "slider");
                b ? $.extend(b.options, a) : (b = $.data(this, "slider", {
                    options: $.extend({}, $.fn.slider.defaults, $.fn.slider.parseOptions(this), a),
                    slider: init(this)
                }), $(this).removeAttr("disabled"));
                var c = b.options;
                c.min = parseFloat(c.min),
                    c.max = parseFloat(c.max),
                    c.range ? ($.isArray(c.value) || (c.value = $.map(String(c.value).split(c.separator), function (a) {
                        return parseFloat(a)
                    })), c.value.length < 2 && c.value.push(c.max)) : c.value = parseFloat(c.value),
                    c.step = parseFloat(c.step),
                    c.originalValue = c.value,
                    buildSlider(this),
                    showRule(this),
                    setSize(this)
            }))
        },
            $.fn.slider.methods = {
                options: function (a) {
                    return $.data(a[0], "slider").options
                },
                destroy: function (a) {
                    return a.each(function () {
                        $.data(this, "slider").slider.remove(),
                            $(this).remove()
                    })
                },
                resize: function (a, b) {
                    return a.each(function () {
                        setSize(this, b)
                    })
                },
                getValue: function (a) {
                    return a.slider("options").value
                },
                getValues: function (a) {
                    return a.slider("options").value
                },
                setValue: function (a, b) {
                    return a.each(function () {
                        setValues(this, [b])
                    })
                },
                setValues: function (a, b) {
                    return a.each(function () {
                        setValues(this, b)
                    })
                },
                clear: function (a) {
                    return a.each(function () {
                        var a = $(this).slider("options");
                        setValues(this, a.range ? [a.min, a.max] : [a.min])
                    })
                },
                reset: function (a) {
                    return a.each(function () {
                        var a = $(this).slider("options");
                        $(this).slider(a.range ? "setValues" : "setValue", a.originalValue)
                    })
                },
                enable: function (a) {
                    return a.each(function () {
                        $.data(this, "slider").options.disabled = !1,
                            buildSlider(this)
                    })
                },
                disable: function (a) {
                    return a.each(function () {
                        $.data(this, "slider").options.disabled = !0,
                            buildSlider(this)
                    })
                }
            },
            $.fn.slider.parseOptions = function (target) {
                var t = $(target);
                return $.extend({}, $.parser.parseOptions(target, ["width", "height", "mode", {
                    reversed: "boolean",
                    showTip: "boolean",
                    range: "boolean",
                    min: "number",
                    max: "number",
                    step: "number"
                }]), {
                    value: t.val() || void 0,
                    disabled: !! t.attr("disabled") || void 0,
                    rule: t.attr("rule") ? eval(t.attr("rule")) : void 0
                })
            },
            $.fn.slider.defaults = {
                width: "auto",
                height: "auto",
                mode: "h",
                reversed: !1,
                showTip: !1,
                disabled: !1,
                range: !1,
                value: 0,
                separator: ",",
                min: 0,
                max: 100,
                step: 1,
                rule: [],
                tipFormatter: function (a) {
                    return a
                },
                converter: {
                    toPosition: function (a, b) {
                        var c = $(this).slider("options");
                        return (a - c.min) / (c.max - c.min) * b
                    },
                    toValue: function (a, b) {
                        var c = $(this).slider("options");
                        return c.min + (c.max - c.min) * (a / b)
                    }
                },
                onChange: function (a, b) {},
                onSlideStart: function (a) {},
                onSlideEnd: function (a) {},
                onComplete: function (a) {}
            }
    }(jQuery);
var _hmt = _hmt || [];
!
    function () {

    }();
var scripts = document.getElementsByTagName("script"),
    lastScript = scripts[scripts.length - 1],
    scriptSrc = lastScript.src,
    _tjp = scriptSrc.substring(0, scriptSrc.lastIndexOf("/")).replace("js", ""),
    _ctx = _tjp.replace("gui/", "");
$.getUrlParam = function (a) {
    var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
        c = window.location.search.substr(1).match(b);
    return null != c ? unescape(c[2]) : null
},
    $.extend({
        getUrlVars: function () {
            for (var a, b = [], c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) a = c[d].split("="),
                b.push(a[0]),
                b[a[0]] = a[1];
            return b
        },
        getUrlVar: function (a) {
            return $.getUrlVars()[a]
        }
    }),
    $.getUrlStrParam = function (a, b) {
        var c = a.substring(a.indexOf("?")),
            d = new RegExp("(^|&)" + b + "=([^&]*)(&|$)"),
            e = c.substr(1).match(d);
        return null != e ? unescape(e[2]) : null
    },
    $.fn.serializeObject = function () {
        var a = {},
            b = this.serializeArray();

        return $.each(b, function () {
            void 0 !== a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]), a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
        }),
            a
    },
    Array.prototype.indexOf = function (a) {
        for (var b = 0; b < this.length; b++) if (this[b] == a) return b;
        return -1
    },
    Array.prototype.remove = function (a) {
        for (var b = this.indexOf(a); b > -1;) this.splice(b, 1),
            b = this.indexOf(a)
    },
    String.prototype.cutStr2Arr = function (a) {
        for (var b = this, c = [], d = Math.ceil(b.length / a), e = 0; e < d; e++) if (b.length >= a) {
            var f = b.substring(0, a);
            c.push(f),
                b = b.substring(a)
        } else b = b,
            c.push(b);
        return c
    },


    function (a) {
        function b(b) {
            return a(b).data("treegrid") ? "treegrid" : "datagrid"
        }
        function c(b, c) {
            function d(b) {
                var c = 0;
                return a(b).children(":visible").each(function () {
                    c += a(this)._outerWidth()
                }),
                    c
            }
            var e = !1,
                f = a(b),
                g = f.datagrid("getPanel").find("div.datagrid-header"),
                h = g.find(".datagrid-header-row:not(.datagrid-filter-row)"),
                i = c ? g.find('.datagrid-filter[name="' + c + '"]') : g.find(".datagrid-filter");
            i.each(function () {
                var b = a(this).attr("name"),
                    c = f.datagrid("getColumnOption", b),
                    g = a(this).closest("div.datagrid-filter-c"),
                    i = g.find("a.datagrid-filter-btn"),
                    j = h.find('td[field="' + b + '"] .datagrid-cell'),
                    k = j._outerWidth();
                k != d(g) && this.filter.resize(this, k - i._outerWidth()),
                g.width() > c.boxWidth + c.deltaWidth - 1 && (c.boxWidth = g.width() - c.deltaWidth + 1, c.width = c.boxWidth + c.deltaWidth, e = !0)
            }),
            e && a(b).datagrid("fixColumnSize")
        }
        function d(b, c) {
            var d = a(b).datagrid("getPanel").find("div.datagrid-header");
            return d.find('tr.datagrid-filter-row td[field="' + c + '"] .datagrid-filter')
        }
        function e(c, d) {
            for (var e = b(c), f = a(c)[e]("options").filterRules, g = 0; g < f.length; g++) if (f[g].field == d) return g;
            return -1
        }
        function f(c, d) {
            var f = b(c),
                g = a(c)[f]("options").filterRules,
                h = e(c, d);
            return h >= 0 ? g[h] : null
        }
        function g(c, f) {
            var g = b(c),
                i = a(c)[g]("options"),
                j = i.filterRules;
            if ("nofilter" == f.op) h(c, f.field);
            else {
                var k = e(c, f.field);
                k >= 0 ? a.extend(j[k], f) : j.push(f)
            }
            var l = d(c, f.field);
            if (l.length) {
                "nofilter" != f.op && l[0].filter.setValue(l, f.value);
                var m = l[0].menu;
                if (m) {
                    m.find("." + i.filterMenuIconCls).removeClass(i.filterMenuIconCls);
                    var n = m.menu("findItem", i.operators[f.op].text);
                    m.menu("setIcon", {
                        target: n.target,
                        iconCls: i.filterMenuIconCls
                    })
                }
            }
        }
        function h(c, f) {
            function g(a) {
                for (var b = 0; b < a.length; b++) {
                    var e = d(c, a[b]);
                    if (e.length) {
                        e[0].filter.setValue(e, "");
                        var f = e[0].menu;
                        f && f.find("." + j.filterMenuIconCls).removeClass(j.filterMenuIconCls)
                    }
                }
            }
            var h = b(c),
                i = a(c),
                j = i[h]("options");
            if (f) {
                var k = e(c, f);
                k >= 0 && j.filterRules.splice(k, 1),
                    g([f])
            } else {
                j.filterRules = [];
                var l = i.datagrid("getColumnFields", !0).concat(i.datagrid("getColumnFields"));
                g(l)
            }
        }
        function i(c) {
            var d = b(c),
                e = a.data(c, d),
                f = e.options;
            f.remoteFilter ? a(c)[d]("load") : (a(c)[d]("getPager").pagination("refresh", {
                pageNumber: 1
            }), a(c)[d]("options").pageNumber = 1, a(c)[d]("loadData", e.filterSource || e.data))
        }
        function j(b, c, d) {
            var e = a(b).treegrid("options");
            if (!c || !c.length) return [];
            var f = [];
            return a.map(c, function (a) {
                a._parentId = d,
                    f.push(a),
                    f = f.concat(j(b, a.children, a[e.idField]))
            }),
                a.map(f, function (a) {
                    a.children = void 0
                }),
                f
        }
        function k(c, d) {
            var e = this,
                f = b(e),
                g = a.data(e, f),
                h = g.options;
            if ("datagrid" == f && a.isArray(c)) c = {
                total: c.length,
                rows: c
            };
            else if ("treegrid" == f && a.isArray(c)) {
                var i = j(e, c, d);
                c = {
                    total: i.length,
                    rows: i
                }
            }
            if (!h.remoteFilter) {
                if (g.filterSource) {
                    if (h.isSorting) h.isSorting = void 0;
                    else if ("datagrid" == f) g.filterSource = c;
                    else if (g.filterSource.total += c.length, g.filterSource.rows = g.filterSource.rows.concat(c.rows), d) return h.filterMatcher.call(e, c)
                } else g.filterSource = c;
                if (!h.remoteSort && h.sortName) {
                    var k = h.sortName.split(","),
                        l = h.sortOrder.split(","),
                        m = a(e);
                    g.filterSource.rows.sort(function (a, b) {
                        for (var c = 0, d = 0; d < k.length; d++) {
                            var e = k[d],
                                f = l[d],
                                g = m.datagrid("getColumnOption", e),
                                h = g.sorter ||
                                    function (a, b) {
                                        return a == b ? 0 : a > b ? 1 : -1
                                    };
                            if (c = h(a[e], b[e]) * ("asc" == f ? 1 : -1), 0 != c) return c
                        }
                        return c
                    })
                }
                if (c = h.filterMatcher.call(e, {
                    total: g.filterSource.total,
                    rows: g.filterSource.rows
                }), h.pagination) {
                    var m = a(e),
                        n = m[f]("getPager");
                    if (n.pagination({
                        onSelectPage: function (a, b) {
                            h.pageNumber = a,
                                h.pageSize = b,
                                n.pagination("refresh", {
                                    pageNumber: a,
                                    pageSize: b
                                }),
                                m[f]("loadData", g.filterSource)
                        },
                        onBeforeRefresh: function () {
                            return m[f]("reload"),
                                !1
                        }
                    }), "datagrid" == f) {
                        var o = (h.pageNumber - 1) * parseInt(h.pageSize),
                            p = o + parseInt(h.pageSize);
                        c.rows = c.rows.slice(o, p)
                    } else {
                        var q = [],
                            r = [];
                        a.map(c.rows, function (a) {
                            a._parentId ? r.push(a) : q.push(a)
                        }),
                            c.total = q.length;
                        var o = (h.pageNumber - 1) * parseInt(h.pageSize),
                            p = o + parseInt(h.pageSize);
                        c.rows = q.slice(o, p).concat(r)
                    }
                }
                a.map(c.rows, function (a) {
                    a.children = void 0
                })
            }
            return c
        }
        function l(d, e) {
            function f() {
                a("#datagrid-filter-style").length || a("head").append('<style id="datagrid-filter-style">a.datagrid-filter-btn{display:inline-block;width:18px;height:22px;margin:8px 0 0 8px;vertical-align:middle;cursor:pointer;opacity:0.6;filter:alpha(opacity=60);}a:hover.datagrid-filter-btn{opacity:1;filter:alpha(opacity=100);}.datagrid-filter-row .textbox,.datagrid-filter-row .textbox .textbox-text{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}.datagrid-filter-row input{margin:0;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}.datagrid-filter-cache{position:absolute;width:10px;height:10px;left:-99999px;}</style>')
            }
            function h(b) {
                var e = n.dc,
                    f = a(d).datagrid("getColumnFields", b);
                b && o.rownumbers && f.unshift("_");
                var g = (b ? e.header1 : e.header2).find("table.datagrid-htable");
                g.find(".datagrid-filter").each(function () {
                    this.filter.destroy && this.filter.destroy(this),
                    this.menu && a(this.menu).menu("destroy")
                }),
                    g.find("tr.datagrid-filter-row").remove();
                var h = a('<tr class="datagrid-header-row datagrid-filter-row"></tr>');
                "bottom" == o.filterPosition ? h.appendTo(g.find("tbody")) : h.prependTo(g.find("tbody")),
                o.showFilterBar || h.hide();
                for (var i = 0; i < f.length; i++) {
                    var k = f[i],
                        p = a(d).datagrid("getColumnOption", k),
                        q = a("<td></td>").attr("field", k).appendTo(h);
                    if (p && p.hidden && q.hide(), "_" != k && (!p || !p.checkbox && !p.expander)) {
                        var r = l(k);
                        r ? a(d)[m]("destroyFilter", k) : r = a.extend({}, {
                            field: k,
                            type: o.defaultFilterType,
                            options: o.defaultFilterOptions
                        });
                        var s = o.filterCache[k];
                        if (s) s.appendTo(q);
                        else {
                            s = a('<div class="datagrid-filter-c"></div>').appendTo(q);
                            var t = o.filters[r.type],
                                u = t.init(s, r.options || {});
                            u.addClass("datagrid-filter").attr("name", k),
                                u[0].filter = t,
                                u[0].menu = j(s, r.op),
                                r.options ? r.options.onInit && r.options.onInit.call(u[0], d) : o.defaultFilterOptions.onInit.call(u[0], d),
                                o.filterCache[k] = s,
                                c(d, k)
                        }
                    }
                }
            }
            function j(b, c) {
                if (!c) return null;
                var e = a('<a class="datagrid-filter-btn">&nbsp;</a>').addClass(o.filterBtnIconCls);
                "right" == o.filterBtnPosition ? e.appendTo(b) : e.prependTo(b);
                var f = a("<div></div>").appendTo("body");
                return a.map(["nofilter"].concat(c), function (b) {
                    var c = o.operators[b];
                    c && a("<div></div>").attr("name", b).html(c.text).appendTo(f)
                }),
                    f.menu({
                        alignTo: e,
                        onClick: function (b) {
                            var c = a(this).menu("options").alignTo,
                                e = c.closest("td[field]"),
                                f = e.attr("field"),
                                h = e.find(".datagrid-filter"),
                                j = h[0].filter.getValue(h);
                            0 != o.onClickMenu.call(d, b, c, f) && (g(d, {
                                field: f,
                                op: b.name,
                                value: j
                            }), i(d))
                        }
                    }),
                    e[0].menu = f,
                    e.bind("click", {
                        menu: f
                    }, function (b) {
                        return a(this.menu).menu("show"),
                            !1
                    }),
                    f
            }
            function l(a) {
                for (var b = 0; b < e.length; b++) {
                    var c = e[b];
                    if (c.field == a) return c
                }
                return null
            }
            e = e || [];
            var m = b(d),
                n = a.data(d, m),
                o = n.options;
            o.filterRules.length || (o.filterRules = []),
                o.filterCache = o.filterCache || {};
            var p = a.data(d, "datagrid").options,
                q = p.onResize;
            p.onResize = function (a, b) {
                c(d),
                    q.call(this, a, b)
            };
            var r = p.onBeforeSortColumn;
            p.onBeforeSortColumn = function (a, b) {
                var c = r.call(this, a, b);
                return 0 != c && (o.isSorting = !0),
                    c
            };
            var s = o.onResizeColumn;
            o.onResizeColumn = function (b, e) {
                var f = a(this).datagrid("getPanel").find(".datagrid-header .datagrid-filter-c");
                f.hide(),
                    a(d).datagrid("fitColumns"),
                    o.fitColumns ? c(d) : c(d, b),
                    f.show(),
                    s.call(d, b, e)
            };
            var t = o.onBeforeLoad;
            o.onBeforeLoad = function (a, b) {
                a && (a.filterRules = o.filterStringify(o.filterRules)),
                b && (b.filterRules = o.filterStringify(o.filterRules));
                var c = t.call(this, a, b);
                if (0 != c) if ("datagrid" == m) n.filterSource = null;
                else if ("treegrid" == m && n.filterSource) if (a) {
                    for (var d = a[o.idField], e = n.filterSource.rows || [], f = 0; f < e.length; f++) if (d == e[f]._parentId) return !1
                } else n.filterSource = null;
                return c
            },
                o.loadFilter = function (a, b) {
                    var c = o.oldLoadFilter.call(this, a, b);
                    return k.call(this, c, b)
                },
                f(),
                h(!0),
                h(),
            o.fitColumns && setTimeout(function () {
                c(d)
            }, 0),
                a.map(o.filterRules, function (a) {
                    g(d, a)
                })
        }
        var m = a.fn.datagrid.methods.autoSizeColumn,
            n = a.fn.datagrid.methods.loadData,
            o = a.fn.datagrid.methods.appendRow,
            p = a.fn.datagrid.methods.deleteRow;
        a.extend(a.fn.datagrid.methods, {
            autoSizeColumn: function (b, d) {
                return b.each(function () {
                    var b = a(this).datagrid("getPanel").find(".datagrid-header .datagrid-filter-c");
                    b.hide(),
                        m.call(a.fn.datagrid.methods, a(this), d),
                        b.show(),
                        c(this, d)
                })
            },
            loadData: function (b, c, page) {
                return b.each(function () {
                    a.data(this, "datagrid").filterSource = null
                }),
                    n.call(a.fn.datagrid.methods, b, c, page)
            },
            appendRow: function (b, c) {
                var d = o.call(a.fn.datagrid.methods, b, c);
                return b.each(function () {
                    var b = a(this).data("datagrid");
                    b.filterSource && (b.filterSource.total++, b.filterSource.rows != b.data.rows && b.filterSource.rows.push(c))
                }),
                    d
            },
            deleteRow: function (b, c) {
                return b.each(function () {
                    var b = a(this).data("datagrid"),
                        d = b.options;
                    if (b.filterSource && d.idField) if (b.filterSource.rows == b.data.rows) b.filterSource.total--;
                    else for (var e = 0; e < b.filterSource.rows.length; e++) {
                            var f = b.filterSource.rows[e];
                            if (f[d.idField] == b.data.rows[c][d.idField]) {
                                b.filterSource.rows.splice(e, 1),
                                    b.filterSource.total--;
                                break
                            }
                        }
                }),
                    p.call(a.fn.datagrid.methods, b, c)
            }
        });
        var q = a.fn.treegrid.methods.loadData,
            r = a.fn.treegrid.methods.append,
            s = a.fn.treegrid.methods.insert,
            t = a.fn.treegrid.methods.remove;
        a.extend(a.fn.treegrid.methods, {
            loadData: function (b, c) {
                return b.each(function () {
                    a.data(this, "treegrid").filterSource = null
                }),
                    q.call(a.fn.treegrid.methods, b, c)
            },
            append: function (b, c) {
                return b.each(function () {
                    var b = a(this).data("treegrid"),
                        d = b.options;
                    if (d.oldLoadFilter) {
                        var e = j(this, c.data, c.parent);
                        b.filterSource.total += e.length,
                            b.filterSource.rows = b.filterSource.rows.concat(e),
                            a(this).treegrid("loadData", b.filterSource)
                    } else r(a(this), c)
                })
            },
            insert: function (b, c) {
                return b.each(function () {
                    function b(a) {
                        for (var b = d.filterSource.rows, c = 0; c < b.length; c++) if (b[c][e.idField] == a) return c;
                        return -1
                    }
                    var d = a(this).data("treegrid"),
                        e = d.options;
                    if (e.oldLoadFilter) {
                        var f = (c.before || c.after, b(c.before || c.after)),
                            g = f >= 0 ? d.filterSource.rows[f]._parentId : null,
                            h = j(this, [c.data], g),
                            i = d.filterSource.rows.splice(0, f >= 0 ? c.before ? f : f + 1 : d.filterSource.rows.length);
                        i = i.concat(h),
                            i = i.concat(d.filterSource.rows),
                            d.filterSource.total += h.length,
                            d.filterSource.rows = i,
                            a(this).treegrid("loadData", d.filterSource)
                    } else s(a(this), c)
                })
            },
            remove: function (b, c) {
                return b.each(function () {
                    var b = a(this).data("treegrid");
                    if (b.filterSource) for (var d = b.options, e = b.filterSource.rows, f = 0; f < e.length; f++) if (e[f][d.idField] == c) {
                        e.splice(f, 1),
                            b.filterSource.total--;
                        break
                    }
                }),
                    t(b, c)
            }
        });
        var u = {
            filterMenuIconCls: "icon-ok",
            filterBtnIconCls: "icon-filter",
            filterBtnPosition: "right",
            filterPosition: "bottom",
            remoteFilter: !1,
            showFilterBar: !0,
            filterDelay: 400,
            filterRules: [],
            filterMatchingType: "all",
            filterMatcher: function (c) {
                function d(a, b) {
                    var c = i.filterRules;
                    if (!c.length) return !0;
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d],
                            f = a[e.field],
                            h = g.datagrid("getColumnOption", e.field);
                        h && h.formatter && (f = h.formatter(a[e.field], a, b)),
                        void 0 == f && (f = "");
                        var j = i.operators[e.op],
                            k = j.isMatch(f, e.value);
                        if ("any" == i.filterMatchingType) {
                            if (k) return !0
                        } else if (!k) return !1
                    }
                    return "all" == i.filterMatchingType
                }
                function e(a, b) {
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        if (d[i.idField] == b) return d
                    }
                    return null
                }
                var f = b(this),
                    g = a(this),
                    h = a.data(this, f),
                    i = h.options;
                if (i.filterRules.length) {
                    var j = [];
                    if ("treegrid" == f) {
                        var k = {};
                        a.map(c.rows, function (a) {
                            if (d(a, a[i.idField])) for (k[a[i.idField]] = a, a = e(c.rows, a._parentId); a;) k[a[i.idField]] = a,
                                a = e(c.rows, a._parentId)
                        });
                        for (var l in k) j.push(k[l])
                    } else for (var m = 0; m < c.rows.length; m++) {
                        var n = c.rows[m];
                        d(n, m) && j.push(n)
                    }
                    c = {
                        total: c.total - (c.rows.length - j.length),
                        rows: j
                    }
                }
                return c
            },
            defaultFilterType: "text",
            defaultFilterOperator: "contains",
            defaultFilterOptions: {
                onInit: function (c) {
                    function d() {
                        var b = a(c)[e]("getFilterRule", g),
                            d = h.val();
                        "" != d ? (b && b.value != d || !b) && (a(c)[e]("addFilterRule", {
                            field: g,
                            op: f.defaultFilterOperator,
                            value: d
                        }), a(c)[e]("doFilter")) : b && (a(c)[e]("removeFilterRule", g), a(c)[e]("doFilter"))
                    }
                    var e = b(c),
                        f = a(c)[e]("options"),
                        g = a(this).attr("name"),
                        h = a(this);
                    h.data("textbox") && (h = h.textbox("textbox")),
                        h.unbind(".filter").bind("keydown.filter", function (b) {
                            a(this);
                            this.timer && clearTimeout(this.timer),
                                13 == b.keyCode ? d() : this.timer = setTimeout(function () {
                                    d()
                                }, f.filterDelay)
                        })
                }
            },
            filterStringify: function (a) {
                return JSON.stringify(a)
            },
            onClickMenu: function (a, b) {}
        };
        a.extend(a.fn.datagrid.defaults, u),
            a.extend(a.fn.treegrid.defaults, u),
            a.fn.datagrid.defaults.filters = a.extend({}, a.fn.datagrid.defaults.editors, {
                label: {
                    init: function (b, c) {
                        return a("<span></span>").appendTo(b)
                    },
                    getValue: function (b) {
                        return a(b).html()
                    },
                    setValue: function (b, c) {
                        a(b).html(c)
                    },
                    resize: function (b, c) {
                        a(b)._outerWidth(c)._outerHeight(22)
                    }
                }
            }),
            a.fn.treegrid.defaults.filters = a.fn.datagrid.defaults.filters,
            a.fn.datagrid.defaults.operators = {
                nofilter: {
                    text: "No Filter"
                },
                contains: {
                    text: "Contains",
                    isMatch: function (a, b) {
                        return a = String(a),
                            b = String(b),
                        a.toLowerCase().indexOf(b.toLowerCase()) >= 0
                    }
                },
                equal: {
                    text: "Equal",
                    isMatch: function (a, b) {
                        return a == b
                    }
                },
                notequal: {
                    text: "Not Equal",
                    isMatch: function (a, b) {
                        return a != b
                    }
                },
                beginwith: {
                    text: "Begin With",
                    isMatch: function (a, b) {
                        return a = String(a),
                            b = String(b),
                        0 == a.toLowerCase().indexOf(b.toLowerCase())
                    }
                },
                endwith: {
                    text: "End With",
                    isMatch: function (a, b) {
                        return a = String(a),
                            b = String(b),
                        a.toLowerCase().indexOf(b.toLowerCase(), a.length - b.length) !== -1
                    }
                },
                less: {
                    text: "Less",
                    isMatch: function (a, b) {
                        return a < b
                    }
                },
                lessorequal: {
                    text: "Less Or Equal",
                    isMatch: function (a, b) {
                        return a <= b
                    }
                },
                greater: {
                    text: "Greater",
                    isMatch: function (a, b) {
                        return a > b
                    }
                },
                greaterorequal: {
                    text: "Greater Or Equal",
                    isMatch: function (a, b) {
                        return a >= b
                    }
                }
            },
            a.fn.treegrid.defaults.operators = a.fn.datagrid.defaults.operators,
            a.extend(a.fn.datagrid.methods, {
                enableFilter: function (c, d) {
                    return c.each(function () {
                        var c = b(this),
                            e = a.data(this, c).options;
                        if (e.oldLoadFilter) {
                            if (!d) return;
                            a(this)[c]("disableFilter")
                        }
                        e.oldLoadFilter = e.loadFilter,
                            l(this, d),
                            a(this)[c]("resize"),
                        e.filterRules.length && (e.remoteFilter ? i(this) : e.data && i(this))
                    })
                },
                disableFilter: function (c) {
                    return c.each(function () {
                        var c = b(this),
                            d = a.data(this, c),
                            e = d.options,
                            f = a(this).data("datagrid").dc,
                            g = f.view.children(".datagrid-filter-cache");
                        g.length || (g = a('<div class="datagrid-filter-cache"></div>').appendTo(f.view));
                        for (var h in e.filterCache) a(e.filterCache[h]).appendTo(g);
                        var i = d.data;
                        d.filterSource && (i = d.filterSource, a.map(i.rows, function (a) {
                            a.children = void 0
                        })),
                            a(this)[c]({
                                data: i,
                                loadFilter: e.oldLoadFilter || void 0,
                                oldLoadFilter: null
                            })
                    })
                },
                destroyFilter: function (c, d) {
                    return c.each(function () {
                        function c(b) {
                            var c = a(g.filterCache[b]),
                                d = c.find(".datagrid-filter");
                            if (d.length) {
                                var e = d[0].filter;
                                e.destroy && e.destroy(d[0])
                            }
                            c.find(".datagrid-filter-btn").each(function () {
                                a(this.menu).menu("destroy")
                            }),
                                c.remove(),
                                g.filterCache[b] = void 0
                        }
                        var e = b(this),
                            f = a.data(this, e),
                            g = f.options;
                        if (d) c(d);
                        else {
                            for (var h in g.filterCache) c(h);
                            a(this).datagrid("getPanel").find(".datagrid-header .datagrid-filter-row").remove(),
                                a(this).data("datagrid").dc.view.children(".datagrid-filter-cache").remove(),
                                g.filterCache = {},
                                a(this)[e]("resize"),
                                a(this)[e]("disableFilter")
                        }
                    })
                },
                getFilterRule: function (a, b) {
                    return f(a[0], b)
                },
                addFilterRule: function (a, b) {
                    return a.each(function () {
                        g(this, b)
                    })
                },
                removeFilterRule: function (a, b) {
                    return a.each(function () {
                        h(this, b)
                    })
                },
                doFilter: function (a) {
                    return a.each(function () {
                        i(this)
                    })
                },
                getFilterComponent: function (a, b) {
                    return d(a[0], b)
                },
                resizeFilter: function (a, b) {
                    return a.each(function () {
                        c(this, b)
                    })
                }
            })
    }(jQuery),


    function (a) {
        function b() {
            h = a.grep(h, function (a) {
                return a.length && a.data("edatagrid")
            })
        }
        function c(c) {
            b(),
                a.map(h, function (b) {
                    b[0] != a(c)[0] && b.edatagrid("saveRow")
                }),
                b()
        }
        function d(c) {
            b();
            for (var d = 0; d < h.length; d++) if (a(h[d])[0] == a(c)[0]) return;
            h.push(a(c))
        }
        function e(c) {
            b(),
                h = a.grep(h, function (b) {
                    return a(b)[0] != a(c)[0]
                })
        }
        function f(b) {
            var c = a.data(b, "edatagrid").options;
            a(b).datagrid(a.extend({}, c, {
                onDblClickCell: function (d, e, f) {
                    c.editing && (a(this).edatagrid("editRow", d), g(b, e)),
                    c.onDblClickCell && c.onDblClickCell.call(b, d, e, f)
                },
                onClickCell: function (d, e, f) {
                    /*点击进入编辑*/
                    /*  c.editing && c.editIndex >= 0 && (a(this).edatagrid("editRow", d), g(b, e)),
                      c.onClickCell && c.onClickCell.call(b, d, e, f)*/

                    c.editing &&(a(this).edatagrid("editRow", d), g(b, e));
                    c.onClickCell && c.onClickCell.call(b, d, e, f)
                },
                onBeforeEdit: function (e, f) {

                    return (!c.onBeforeEdit || 0 != c.onBeforeEdit.call(b, e, f)) && (c.autoSave && d(this), void(c.originalRow = a.extend(!0, [], f)))
                },
                onAfterEdit: function (d, f) {
                    e(this),
                        c.editIndex = -1;
                    var g = f.isNewRecord ? c.saveUrl : c.updateUrl;
                    if (g) {
                        for (var h = !1, i = a(this).edatagrid("getColumnFields", !0).concat(a(this).edatagrid("getColumnFields")), j = 0; j < i.length; j++) {
                            var k = i[j],
                                l = a(this).edatagrid("getColumnOption", k);
                            if (l.editor && c.originalRow[k] != f[k]) {
                                h = !0;
                                break
                            }
                        }
                        h ? a.post(g, f, function (e) {
                            if (e.isError) return a(b).edatagrid("cancelRow", d),
                                a(b).edatagrid("selectRow", d),
                                a(b).edatagrid("editRow", d),
                                void c.onError.call(b, d, e);
                            if (e.isNewRecord = null, a(b).datagrid("updateRow", {
                                index: d,
                                row: e
                            }), c.tree) {
                                var g = f[c.idField || "id"],
                                    h = a(c.tree),
                                    i = h.tree("find", g);
                                if (i) i.text = f[c.treeTextField],
                                    h.tree("update", i);
                                else {
                                    var j = h.tree("find", f[c.treeParentField]);
                                    h.tree("append", {
                                        parent: j ? j.target : null,
                                        data: [{
                                            id: g,
                                            text: f[c.treeTextField]
                                        }]
                                    })
                                }
                            }
                            c.onSuccess.call(b, d, f),
                                c.onSave.call(b, d, f)
                        }, "json") : c.onSave.call(b, d, f)
                    } else c.onSave.call(b, d, f);
                    c.onAfterEdit && c.onAfterEdit.call(b, d, f)
                },
                onCancelEdit: function (d, f) {
                    e(this),
                        c.editIndex = -1,
                    f.isNewRecord && a(this).datagrid("deleteRow", d),
                    c.onCancelEdit && c.onCancelEdit.call(b, d, f)
                },
                onBeforeLoad: function (d) {
                    if (0 == c.onBeforeLoad.call(b, d)) return !1;
                    if (a(this).edatagrid("cancelRow"), c.tree) {
                        var e = a(c.tree).tree("getSelected");
                        d[c.treeParentField] = e ? e.id : void 0
                    }
                }
            })),
            c.tree && a(c.tree).tree({
                url: c.treeUrl,
                onClick: function (c) {
                    a(b).datagrid("load")
                },
                onDrop: function (d, e, f) {
                    var g = a(this).tree("getNode", d).id;
                    a.ajax({
                        url: c.treeDndUrl,
                        type: "post",
                        data: {
                            id: e.id,
                            targetId: g,
                            point: f
                        },
                        dataType: "json",
                        success: function () {
                            a(b).datagrid("load")
                        }
                    })
                }
            })
        }
        function g(b, c) {
            var d, e = a(b).edatagrid("options"),
                f = a(b).datagrid("getEditor", {
                    index: e.editIndex,
                    field: c
                });
            if (f) d = f.target;
            else {
                var g = a(b).datagrid("getEditors", e.editIndex);
                g.length && (d = g[0].target)
            }
            if(c){
                var field=c;
            }
            d && (a(d).hasClass("textbox-f") ? a(d).textbox("textbox").focus() : a(d).focus());

            var inputs=$(e.finder.getTr(b, e.editIndex)[1]).find('td input.datagrid-editable-input');
            var $tr=a(e.finder.getTr(b, e.editIndex)[1]);
            var td=$tr.find('td[field]');
            var index=e.editIndex;
            $.each(inputs,function (i,item) {
                $($(this).next().children('input')[0]).focus(function () {
                    var field=$(this).parents('td[field]').attr('field');
                    $(this).bind('input propertychange', function() {
                        var row={};var changes={};
                        if(td&&td.length>0){
                            $.each(td,function (i,item) {
                                if($(item).find('input').hasClass('textbox-f')){
                                    row[a(item).attr('field')]=a(item).find('input[type=hidden]').val();
                                }else{
                                    row[a(item).attr('field')]=a(item).find('div').text();
                                }
                            })
                        };
                        row[field]=$(this).val();changes[field]=$(this).val();
                        e.onInput.call(a(b),index,row||{},changes,field);
                    })
                })


            })
        }
        var h = [];
        a(function () {
            a(document).unbind(".edatagrid").bind("mousedown.edatagrid", function (b) {
                var d = a(b.target).closest("div.datagrid-view,div.combo-panel,div.window,div.window-mask");
                return d.length ? void(d.hasClass("datagrid-view") && c(d.children("table"))) : void c()
            })
        }),
            a.fn.edatagrid = function (b, c) {
                if ("string" == typeof b) {
                    var d = a.fn.edatagrid.methods[b];
                    return d ? d(this, c) : this.datagrid(b, c)
                }
                return b = b || {},
                    this.each(function () {
                        var c = a.data(this, "edatagrid");
                        c ? a.extend(c.options, b) : a.data(this, "edatagrid", {
                            options: a.extend({}, a.fn.edatagrid.defaults, a.fn.edatagrid.parseOptions(this), b)
                        }),
                            f(this)
                    })
            },
            a.fn.edatagrid.parseOptions = function (b) {
                return a.extend({}, a.fn.datagrid.parseOptions(b), {})
            },
            a.fn.edatagrid.methods = {
                options: function (b) {
                    var c = a.data(b[0], "edatagrid").options;
                    return c
                },
                loadData: function (b, c) {
                    return b.each(function () {
                        a(this).edatagrid("cancelRow"),
                            a(this).datagrid("loadData", c)
                    })
                },
                enableEditing: function (b) {
                    return b.each(function () {
                        var b = a.data(this, "edatagrid").options;
                        b.editing = !0
                    })
                },
                disableEditing: function (b) {
                    return b.each(function () {
                        var b = a.data(this, "edatagrid").options;
                        b.editing = !1
                    })
                },
                isEditing: function (b, c) {
                    var d = a.data(b[0], "edatagrid").options,
                        e = d.finder.getTr(b[0], c);
                    return e.length && e.hasClass("datagrid-row-editing")
                },
                editRow: function (b, c) {
                    return b.each(function () {
                        var b = a(this),
                            d = a.data(this, "edatagrid").options,
                            e = d.editIndex;
                        if (e != c) if (b.datagrid("validateRow", e)) {
                            if (e >= 0 && 0 == d.onBeforeSave.call(this, e)) return void setTimeout(function () {
                                b.datagrid("selectRow", e)
                            }, 0);
                            if (b.datagrid("endEdit", e), b.datagrid("beginEdit", c), !b.edatagrid("isEditing", c)) return;
                            d.editIndex = c,
                                g(this);
                            var f = b.datagrid("getRows");
                            d.onEdit.call(this, c, f[c])
                        } else setTimeout(function () {
                            b.datagrid("selectRow", e)
                        }, 0)
                    })
                },
                addRow: function (b, c) {
                    return b.each(function () {
                        function b(a, b) {
                            void 0 == a ? (d.datagrid("appendRow", b), e.editIndex = f.length - 1) : (d.datagrid("insertRow", {
                                index: a,
                                row: b
                            }), e.editIndex = a)
                        }
                        var d = a(this),
                            e = a.data(this, "edatagrid").options;
                        if (e.editIndex >= 0) {
                            if (!d.datagrid("validateRow", e.editIndex)) return void d.datagrid("selectRow", e.editIndex);
                            if (0 == e.onBeforeSave.call(this, e.editIndex)) return void setTimeout(function () {
                                d.datagrid("selectRow", e.editIndex)
                            }, 0);
                            d.datagrid("endEdit", e.editIndex)
                        }
                        var f = d.datagrid("getRows");
                        if ("object" == typeof c ? b(c.index, a.extend(c.row, {
                            isNewRecord: !0
                        })) : b(c, {
                            isNewRecord: !0
                        }), d.datagrid("beginEdit", e.editIndex), d.datagrid("selectRow", e.editIndex), e.tree) {
                            var g = a(e.tree).tree("getSelected");
                            f[e.editIndex][e.treeParentField] = g ? g.id : 0
                        }
                        e.onAdd.call(this, e.editIndex, f[e.editIndex])
                    })
                },
                saveRow: function (b) {
                    return b.each(function () {
                        var b = a(this),
                            c = a.data(this, "edatagrid").options;
                        if (c.editIndex >= 0) {
                            if (0 == c.onBeforeSave.call(this, c.editIndex)) return void setTimeout(function () {
                                b.datagrid("selectRow", c.editIndex)
                            }, 0);
                            a(this).datagrid("endEdit", c.editIndex)
                        }
                    })
                },
                cancelRow: function (b) {
                    return b.each(function () {
                        var b = a.data(this, "edatagrid").options;
                        b.editIndex >= 0 && a(this).datagrid("cancelEdit", b.editIndex)
                    })
                },
                destroyRow: function (b, c) {
                    return b.each(function () {
                        function b(b) {
                            var c = d.datagrid("getRowIndex", b);
                            if (c != -1) if (b.isNewRecord) d.datagrid("cancelEdit", c);
                            else if (e.destroyUrl) {
                                var f = b[e.idField || "id"];
                                a.post(e.destroyUrl, {
                                    id: f
                                }, function (c) {
                                    var g = d.datagrid("getRowIndex", f);
                                    if (c.isError) return d.datagrid("selectRow", g),
                                        void e.onError.call(d[0], g, c);
                                    if (e.tree) {
                                        d.datagrid("reload");
                                        var h = a(e.tree),
                                            i = h.tree("find", f);
                                        i && h.tree("remove", i.target)
                                    } else d.datagrid("cancelEdit", g),
                                        d.datagrid("deleteRow", g);
                                    e.onDestroy.call(d[0], g, b);
                                    var j = d.datagrid("getPager");
                                    j.length && !d.datagrid("getRows").length && (d.datagrid("options").pageNumber = j.pagination("options").pageNumber, d.datagrid("reload"))
                                }, "json")
                            } else d.datagrid("cancelEdit", c),
                                d.datagrid("deleteRow", c),
                                e.onDestroy.call(d[0], c, b)
                        }
                        var d = a(this),
                            e = a.data(this, "edatagrid").options,
                            f = [];
                        if (void 0 == c) f = d.datagrid("getSelections");
                        else for (var g = a.isArray(c) ? c : [c], h = 0; h < g.length; h++) {
                            var i = e.finder.getRow(this, g[h]);
                            i && f.push(i)
                        }
                        return f.length ? void a.messager.confirm(e.destroyMsg.confirm.title, e.destroyMsg.confirm.msg, function (a) {
                            if (a) {
                                for (var c = 0; c < f.length; c++) b(f[c]);
                                d.datagrid("clearSelections")
                            }
                        }) : void a.messager.show({
                            title: e.destroyMsg.norecord.title,
                            msg: e.destroyMsg.norecord.msg
                        })
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
                },

            },
            a.fn.edatagrid.defaults = a.extend({}, a.fn.datagrid.defaults, {
                singleSelect: !0,
                editing: !0,
                editIndex: -1,
                destroyMsg: {
                    norecord: {
                        title: "Warning",
                        msg: "No record is selected."
                    },
                    confirm: {
                        title: "Confirm",
                        msg: "Are you sure you want to delete?"
                    }
                },
                autoSave: !1,
                url: null,
                saveUrl: null,
                updateUrl: null,
                destroyUrl: null,
                tree: null,
                treeUrl: null,
                treeDndUrl: null,
                treeTextField: "name",
                treeParentField: "parentId",
                onAdd: function (a, b) {},
                onEdit: function (a, b) {},
                onBeforeSave: function (a) {},
                onSave: function (a, b) {},
                onSuccess: function (a, b) {},
                onDestroy: function (a, b) {},
                onError: function (a, b) {},
                onInput:function (a,b) {}
            }),
            a.parser.plugins.push("edatagrid")
    }(jQuery),


    function (a) {
        a.fn.iAccordion = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iAccordion.methods[b];
                return d ? d(this, c) : this.accordion(b, c)
            }
            this.each(function () {
                b = a.fn.iAccordion.parseOptions(this, b),
                    a(this).accordion(b)
            })
        },
            a.fn.iAccordion.methods = {},
            a.fn.iAccordion.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.accordion.parseOptions(b), a.fn.iAccordion.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iAccordion.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iAutocomplete = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iAutocomplete.methods[b];
                return d ? d(this, c) : this.combobox(b, c)
            }
            this.each(function () {
                b = a.fn.iAutocomplete.parseOptions(this, b),
                    b.initUrl = b.url,
                    a(this).combobox(b)
            })
        },
            a.fn.iAutocomplete.methods = {},
            a.fn.iAutocomplete.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.combobox.parseOptions(b), a.fn.iAutocomplete.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iAutocomplete.defaults = {
                id: this.selector,
                url: "",
                width: 450,
                panelHeight: 250,
                fieldId: "userNameId",
                required: !1,
                formatter: "",
                onLoadSuccess: function (a, b) {
                    setTimeout(function () {}, 400)
                },
                onShowPanel: function () {},
                onChange: function (b, c) {
                    var d = a(this).iCombobox("options"),
                        e = a("#" + d.id);
                    null == b && (b = e.iCombobox("getValue"));
                    var f = d.initUrl.match(/{([\s\S]*?)}/g),
                        g = "";
                    if (f.length > 0) for (var h = 0; h < f.length; h++) g = d.initUrl.replace(f[h], encodeURI(encodeURI(b)));
                    e.iCombobox("reload", g)
                },
                onSelect: function (b) {
                    var c = a(this).iCombobox("options");
                    a("#" + c.id);
                    if (a(this).iCombobox("hidePanel"), c.param) {
                        var d = a(this).closest("form"),
                            e = getSelectedRowJson(c.param, b);
                        a("#" + d.attr("id")).form("load", e)
                    }
                    setTimeout(function () {}, 200)
                },
                onUnselect: function (b) {
                    var c = a(this).iCombobox("options");
                    a("#" + c.id);
                    setTimeout(function () {}, 200)
                },
                onHidePanel: function () {
                    var b = a(this).iCombobox("options"),
                        c = a("#" + b.id);
                    if (b.textField != b.valueField) {
                        c.combobox("getText"),
                            c.combobox("getValue")
                    }
                }
            }
    }(jQuery),


    function (a) {
        a.fn.iCalendar = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iCalendar.methods[b];
                return d ? d(this, c) : this.calendar(b, c)
            }
            this.each(function () {
                b = a.fn.iCalendar.parseOptions(this, b),
                    a(this).calendar(b)
            })
        },
            a.fn.iCalendar.methods = {},
            a.fn.iCalendar.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.calendar.parseOptions(b), a.fn.iCalendar.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iCalendar.defaults = {}
    }(jQuery),


    function (a) {
        function b(b) {
            var c = a(b),
                e = c.children("input[type=checkbox]");
            e.each(function () {
                var b = a(this),
                    c = a("<span/>").css(d.span),
                    e = a("<label/>").css(d.label),
                    f = a("<a/>").data("lable", e).css(d.checkbox).text(" "),
                    g = b.data("lable", e).attr("label");
                b.hide(),
                    b.after(e.text(g)),
                    b.wrap(c),
                    b.before(f),
                b.prop("checked") && f.css("background-position", "0 0"),
                    e.click(function () {
                        !
                            function (a, b) {
                                a.prop("checked", !a.prop("checked"));
                                var c = "-32px";
                                a.prop("checked") && (c = "0"),
                                    b.css("background-position", c + " 0")
                            }(b, f)
                    }),
                    f.click(function () {
                        if(a(this).next().attr('readonly')=='readonly'||a(this).next().attr('readonly')==true)return
                        if(a(this).parents('form')){
                            $(a(this).parents('form').find('input[name='+b.attr('name')+']').prev()).each(function(i,item){
                                a(item).data("lable").click()
                            })
                        }else{
                            a(this).data("lable").click()
                        }d
                    })
            })
        }
        function c(b, c, d) {
            var e = b.find("input[value=" + c + "]");
            e.length && e.prop("checked", d).each(function () {
                a(this).data("lable").click()
            })
        }
        var d = {
            checkbox: {
                cursor: "pointer",
                background: "transparent url('" + _tjp + "image/checkbox.png') no-repeat -32px 0",
                verticalAlign: "middle",
                height: "16px",
                width: "16px",
                display: "block"
            },
            span: {
                float: "left",
                display: "block",
                margin: "9px 4px 7px 4px"
            },
            label: {
                marginTop: "9px",
                marginRight: "8px",
                marginBottom: "9px",
                display: "block",
                float: "left",
                fontSize: "12px",
                cursor: "pointer"
            }
        };
        a.fn.iCheckbox = function (c, d) {
            return "string" == typeof c ? a.fn.iCheckbox.methods[c](this, d) : (c = c || {}, this.each(function () {
                if (a.data(this, "checkbox")) {
                    var d = a.data(this, "checkbox").options;
                    a.data(this, "checkbox", {
                        options: a.extend({}, d, c)
                    })
                } else a.data(this, "checkbox", {
                    options: a.extend({}, a.fn.iCheckbox.defaults, c)
                }),
                    b(this)
            }))
        },
            a.fn.iCheckbox.methods = {
                getValue: function (a) {
                    var b = a.find("input:checked"),
                        c = {};
                    return b.each(function () {
                        var a = c[this.name];
                        return a ? (a.sort || (c[this.name] = [a]), void c[this.name].push(this.value)) : void(c[this.name] = this.value)
                    }),
                        c
                },
                check: function (b, d) {
                    d && "object" != typeof d ? c(b, d) : d.sort && a.each(d, function () {
                        c(b, this)
                    })
                },
                unCheck: function (b, d) {
                    d && "object" != typeof d ? c(b, d, !0) : d.sort && a.each(d, function () {
                        c(b, this, !0)
                    })
                },
                checkAll: function (b) {
                    b.find("input").prop("checked", !1).each(function () {
                        a(this).data("lable").click()
                    })
                },
                unCheckAll: function (b) {
                    b.find("input").prop("checked", !0).each(function () {
                        a(this).data("lable").click()
                    })
                }
            },
            a.fn.iCheckbox.defaults = {
                style: d
            },
        a.parser && a.parser.plugins && a.parser.plugins.push("iCheckbox")
    }(jQuery),


    function (a) {
        a.fn.iCombo = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iCombo.methods[b];
                return d ? d(this, c) : this.combo(b, c)
            }
            this.each(function () {
                b = a.fn.iCombo.parseOptions(this, b),
                    a(this).combo(b)
            })
        },
            a.fn.iCombo.methods = {},
            a.fn.iCombo.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.combo.parseOptions(b), a.fn.iCombo.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iCombo.defaults = {}
    }(jQuery),



    function (a) {
        a.fn.iCombogrid = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iCombogrid.methods[b];
                return d ? d(this, c) : this.combogrid(b, c)
            }
            this.each(function () {
                b = a.fn.iCombogrid.parseOptions(this, b),
                    a(this).combogrid(b)
            })
        },
            a.fn.iCombogrid.methods = {},
            a.fn.iCombogrid.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.combogrid.parseOptions(b), a.fn.iCombogrid.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iCombogrid.defaults = {
                id: this.selector,
                width: 153,
                mode: "remote",
                editable: !1,
                onChange: function (b, c) {
                    var d = a(this).iCombogrid("options"),
                        e = a("#" + d.id);
                    e.combogrid("grid").datagrid("load", {
                        q: b
                    }),
                        e.combogrid("grid").datagrid("selectRecord", b)
                },
                onLoadSuccess: function (a) {},
                onSelect: function (b, c) {
                    var d = a(this).iDatagrid("options"),
                        e = a("#" + d.id);
                    if (d.param) {
                        var f = e.closest("form"),
                            g = getSelectedRowJson(d.param, c);
                        a("#" + f.attr("id")).form("load", g),
                            e.iCombogrid("textbox").focus()
                    }
                }
            }
    }(jQuery),


    function (a) {
        function b(b, c) {
            var d = a("#" + c.id),
                e = b.iTree("getSelected"),
                f = {
                    id: d.combotree("getValue")
                };
            if (void 0 == e && "" != f.id) {
                var g;
                a.ajax({
                    type: "POST",
                    url: replaceUrlParamValueByBrace(c.getFatherIdsUrl, f),
                    success: function (a) {
                        var b = a.split(",");
                        for (i = b.length - 1; i >= 0; i--) g = d.combotree("tree").iTree("find", b[i].replace(/'/g, "")),
                        g && d.combotree("tree").iTree("expand", g.target)
                    }
                }),
                void 0 != f.id && d.combotree("setValue", f.id)
            }
        }
        a.fn.iCombotree = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iCombotree.methods[b];
                return d ? d(this, c) : this.combotree(b, c)
            }
            this.each(function () {
                b = a.fn.iCombotree.parseOptions(this, b),
                    a(this).combotree(b)
            })
        },
            a.fn.iCombotree.methods = {},
            a.fn.iCombotree.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.combotree.parseOptions(b), a.fn.iCombotree.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iCombotree.defaults = {
                id: this.selector,
                expandUrl: "",
                getFatherIdsUrl: "",
                width: 153,
                animate: !0,
                expandAll: !1,
                onBeforeExpand: function (b, c) {
                    var d = a(this).iTree("options");
                    a(this).iTree("options").url = replaceUrlParamValueByBrace(d.expandUrl, b)
                },
                onLoadSuccess: function (c, d) {
                    var e = a(this).iTree("options"),
                        f = a("#" + e.id),
                        g = f.combotree("tree");
                    g.iTree("expand", g.iTree("getRoot").target),
                    e.expandAll && g.iTree("expandAll"),
                    e.getFatherIdsUrl && setTimeout(function () {
                        b(g, e)
                    }, 100)
                },
                onSelect: function (b) {
                    var c = a(this).iTree("options"),
                        d = a("#" + c.id),
                        e = d.closest("form");
                    if (c.param) {
                        var f = getSelectedRowJson(c.param, b);
                        a("#" + e.attr("id")).form("load", f)
                    }
                    "object" == typeof c.backfill && a.getJSON(replaceUrlParamValueByBrace(c.backfill.url, b), {}, function (b) {
                        a("#" + e.attr("id")).form("load", b)
                    })
                },
                onShowPanel: function () {},
                onBeforeSelect: function (b) {
                    var c = a(this).iTree("options");
                    if (c.onlyLeafCheck) {
                        var d = a(this).iTree("isLeaf", b.target);
                        if (!d) return a.messager.alert("提示操作！", "请展开选择子节点！", "warning"),
                            !1
                    }
                }
            }
    }(jQuery),


    function (a) {
        a.fn.iCombotreegrid = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iCombotreegrid.methods[b];
                return d ? d(this, c) : this.combotreegrid(b, c)
            }
            this.each(function () {
                b = a.fn.iCombotreegrid.parseOptions(this, b),
                    a(this).combotreegrid(b)
            })
        },
            a.fn.iCombotreegrid.methods = {},
            a.fn.iCombotreegrid.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.combotreegrid.parseOptions(b), a.fn.iCombotreegrid.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iCombotreegrid.defaults = {
                width: 153,
                panelWidth: 450,
                animate: !0,
                onBeforeExpand: function (b, c) {
                    var d = a(this).iTreegrid("options"),
                        e = a("#" + d.id),
                        f = e.combotreegrid("grid");
                    f.treegrid("options").url = replaceUrlParamValueByBrace(d.expandUrl, b)
                },
                onChange: function (a, b) {},
                onLoadSuccess: function (b, c) {
                    var d = a(this).iTreegrid("options"),
                        e = a("#" + d.id),
                        f = e.combotreegrid("grid");
                    f.treegrid("expand", f.treegrid("getRoot").id),
                    d.expandAll && f.treegrid("expandAll"),
                    d.getFatherIdsUrl && setTimeout(function () {
                        var b = f.treegrid("getSelected"),
                            c = {
                                id: e.combotreegrid("getValue")
                            };
                        if (null == b && "" != c.id) {
                            var g;
                            a.ajax({
                                type: "POST",
                                url: replaceUrlParamValueByBrace(d.getFatherIdsUrl, c),
                                success: function (a) {
                                    for (var b = a.split(","), c = b.length - 1; c >= 0; c--) g = f.treegrid("find", b[c].replace(/'/g, "")),
                                    g && f.treegrid("expand", g.id)
                                }
                            }),
                            void 0 != c.id && e.combotreegrid("setValue", c.id)
                        }
                    }, 100)
                },
                onSelect: function (b, c) {
                    var d = a(this).iTreegrid("options"),
                        e = a("#" + d.id);
                    if (d.param) {
                        var f = e.closest("form"),
                            g = getSelectedRowJson(d.param, c);
                        a("#" + f.attr("id")).form("load", g),
                            e.combotreegrid("textbox").focus()
                    }
                }
            }
    }(jQuery);
var openDialog = function (a) {
        var b = $.data(a, "menubutton").options;
        if(b.dialog.messager&&b.dialog.messager()){
            return false;
        }

        if ( !!b.opts &&  typeof b.opts["onPreHandler"] === 'function' ) {
            b.opts["onPreHandler"](b.dialog, getSelectedRowData(b.grid.type, b.grid.id));
        }

        b.dialog.mbId = b.id, $("#" + b.dialog.id).iDialog("createDialog", b.dialog);
        if(b.dialog&&b.dialog.tag){
            $("#" + b.dialog.id).attr('tag',b.dialog.tag);
        }
        var c = b.dialog,
            d = b.parentGrid;
        if ("object" == typeof d) {
            openDialogAndloadDataByParentGrid(b);
        } else if (c.url||b.dialog.tag=='edit'||b.dialog.tag=='copy') {
            openDialogAndloadDataByUrl(b);
        } else {
            "undefined" != c.onBeforeOpen && executeCallBackFun(c.onBeforeOpen, b),
                b.href = appendSourceUrlParam(c.href);
            var e = $("#" + c.id);
            if (b.dialog.tag=='add') {
                var g=b.dialog.href.substring(0,b.dialog.href.length-4)+'add';
                e.iDialog({
                    href: g
                }),  e.iDialog(b.dialog);
                e.iDialog("open")
            } else e.iDialog("open")
        }

    },
    addParentTab = function (a) {
        var b, c, d = $.data(a, "menubutton").options,
            e = d.tab;
        if ("object" == typeof d.grid) {
            var f = d.grid;
            if (1 == f.checkboxSelect) {
                var g = getCheckedRowsData(f.type, f.id);
                if (0 == g.length) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.checkSelfGrid, gui.language.message.icon.warning);
                b = g[0].UUID ? e.href.indexOf("?") >= 0 ? e.href + "&UUID=" + getMultiRowsFieldValue(g, "UUID") : e.href + "?UUID=" + getMultiRowsFieldValue(g, "UUID") : e.href.indexOf("?") >= 0 ? e.href + "&uuid=" + getMultiRowsFieldValue(g, "uuid") : e.href + "?uuid=" + getMultiRowsFieldValue(g, "uuid")
            } else if (isExistBrace(e.href)) {
                var h = getSelectedRowData(f.type, f.id);
                if (!h) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectSelfGrid, gui.language.message.icon.warning);
                b = replaceUrlParamValueByBrace(e.href, h)
            } else b = e.href
        } else b = e.href;
        c = e.title;
        var i = '<iframe src="' + b + '" frameborder="0" style="border:0;width:100%;height:100%;"></iframe>',
            j = parent.$("#index_tabs"),
            k = getSelectedTabOpts(j);
        j.iTabs("add", {
            id: getRandomNumByDef(),
            refererTab: {
                id: k.id
            },
            title: c,
            content: i,
            closable: !0,
            iconCls: d.iconCls
        })
    },
    openWindow = function (a) {
        var b, c = $.data(a, "menubutton").options;
        if ("object" == typeof c.grid) if (1 == c.grid.checkboxSelect) {
            var d = getCheckedRowsData(c.grid.type, c.grid.id);
            if (0 == d.length) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.checkSelfGrid, gui.language.message.icon.warning);
            b = replaceUrlParamValueByBrace(c.href, d, "multiple")
        } else {
            var e = getSelectedRowData(c.grid.type, c.grid.id);
            if (!e) return void $.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectSelfGrid, gui.language.message.icon.warning);
            b = replaceUrlParamValueByBrace(c.href, e)
        } else b = c.href;
        window.open(b)
    };
$.fn.serializeObject = function () {
    var a = {},
        b = this.serializeArray();
    return $.each(b, function () {
        void 0 !== a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]), a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
    }),
        a
};
var defaultConfig = {
    version: "v2.0.0_Release",
    config: {
        pkName: "uuid",
        singleQuotesParam: !1
    },
    language: {
        message: {
            showType: {
                slide: "slide",
                fade: "fade",
                show: "show"
            },
            title: {
                operationTips: "操作提示",
                confirmTips: "确认提示"
            },
            msg: {
                success: "操作成功",
                failed: "操作失败",
                error: "未知错误",
                checkSelfGrid: "请先勾选要操作的数据前的复选框",
                selectSelfGrid: "请先选中要操作的数据",
                selectParentGrid: "请先选中主表中要操作的一条数据",
                permissionDenied: "对不起，你没有操作权限",
                confirmDelete: "你确定要删除所选的数据吗？"
            },
            icon: {
                error: "messager-error",
                question: "messager-question",
                info: "messager-info",
                warning: "messager-warning"
            }
        }
    },
    eventType: {
        initUI: {
            base: "gui.initUI.base",
            dialog: "gui.initUI.dialog",
            base2: "gui.initUI.base2",
            echarts: "gui.initUI.echarts",
            form: "gui.initUI.form",
            advanceSearchForm: "gui.initUI.advanceSearchForm",
            importExcelForm: "gui.initUI.importExcelForm"
        },
        beforeInitUI: "gui.beforeInitUI",
        afterInitUI: "gui.afterInitUI",
        ajaxStatus: "gui.ajaxStatus",
        resizeGrid: "gui.resizeGrid",
        beforeAjaxLoad: "gui.beforeAjaxLoad",
        beforeLoadNavtab: "gui.beforeLoadNavtab",
        beforeLoadDialog: "gui.beforeLoadDialog",
        afterLoadNavtab: "gui.afterLoadNavtab",
        afterLoadDialog: "gui.afterLoadDialog",
        beforeCloseNavtab: "gui.beforeCloseNavtab",
        beforeCloseDialog: "gui.beforeCloseDialog",
        afterCloseNavtab: "gui.afterCloseNavtab",
        afterCloseDialog: "gui.afterCloseDialog"
    },
    tj: {
        u1: "aHR0cDovL2F1d",
        u2: "GguZXdzZC5jbi",
        u3: "9hdXRoL3RvcGp",
        u4: "1aS92ZXJpZnk=",
        l1: "anMvdG9wanVpLm",
        l2: "xpY2Vuc2UuanM="
    }
};
gui = $.extend(!0, defaultConfig, gui),


    function (a) {
        function b(b, c) {
            b.preventDefault();
            var d = a(this),
                e = this.headerContextMenu,
                f = "tree-checkbox1",
                g = "tree-checkbox0";
            if (!e) {
                for (var h = a('<div style="width:150px;"></div>').appendTo("body"), i = d.datagrid("getColumnFields"), j = 0; j < i.length; j++) {
                    var k = d.datagrid("getColumnOption", i[j]);
                    k.hidden ? a('<div iconCls="' + g + '" field="' + i[j] + '"/>').html(k.title).appendTo(h) : a('<div iconCls="' + f + '" field="' + i[j] + '"/>').html(k.title).appendTo(h)
                }
                e = this.headerContextMenu = h.menu({
                    onClick: function (b) {
                        var c = a(b.target).attr("field");
                        b.iconCls == f ? (d.datagrid("hideColumn", c), a(this).menu("setIcon", {
                            target: b.target,
                            iconCls: g
                        })) : (d.datagrid("showColumn", c), a(this).menu("setIcon", {
                            target: b.target,
                            iconCls: f
                        })),
                            e.menu("show")
                    }
                })
            }
            e.menu("show", {
                left: b.pageX,
                top: b.pageY
            })
        }
        a.fn.iDatagrid = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iDatagrid.methods[b];
                return d ? d(this, c) : this.datagrid(b, c)
            }
            this.each(function () {
                b = a.fn.iDatagrid.parseOptions(this, b);
                if(b.id){
                    b.toolbar = "#" + b.id + "-toolbar";
                }else{
                    b.toolbar = a(this).closest('.gui-div').find('.gui-toolbar')
                }
                a(this).datagrid(b)

            })
        },
            a.fn.iDatagrid.methods = {
                createGridHeaderContextMenu: b,
                singleSelectedAjax: function (b, c) {
                    var d = getSelectedRowData(c.grid.type, c.grid.id);
                    var flag=true;
                    if(c.grid&&c.grid.tag=='del'&&typeof(c.grid["editEnable"])=='function'){
                        var  editEnable =c.grid["editEnable"](d);
                        if( editEnable!=null && editEnable==false ){
                            $.messager.alert("提示信息", "非初始状态不允许操作！");
                            flag=false;
                        }
                    }
                    if(!flag){
                        return
                    }
                    return null == d ? void a.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectSelfGrid, gui.language.message.icon.warning) :
                        void a.messager.confirm(gui.language.message.title.confirmTips, c.confirmMsg, function (a) {
                            if (a) {
                                if(c.grid.param==undefined||c.grid.param==''){
                                    if(c.grid.tag=='run'){
                                        c.ajaxData=d;
                                    }else{
                                        c.ajaxData = {master:d}
                                    }
                                }else {
                                    c.ajaxData = convertParamObj2ObjData(param2JsonObj(c.grid.param), d);
                                };
                                var f = doAjax(c);
                                var index= $('#'+c.grid.id)[c.grid.type]('getRowIndex',d);
                                if(  200 == f.statusCode){
                                    if(c.grid.tag=='del'&&c.grid.type=='datagrid'){
                                        $('#'+c.grid.id)[c.grid.type]('deleteRow',index);
                                        var number=$('#'+c.grid.id)[c.grid.type]("getPager").data("pagination").options.total;
                                        if(index==number){
                                            index=number-1;
                                        }
                                        $('#'+c.grid.id)[c.grid.type]('selectRow',index);
                                    }else if(c.grid.tag=='run'&&c.grid.type=='datagrid'){
                                        var row={};
                                        if(typeof (f.queryParms)=='object'){
                                            row=f.queryParms
                                        }else if(typeof (f.queryParms)=='string'){
                                            row=JSON.parse(f.queryParms);
                                        }
                                        row=JSON.parse(c.ajaxData);
                                        if(f.queryParms&&c.module){
                                            var url=c.module+'/query';
                                            HTTP.post(url,row,function(result){
                                                if(result['success']){
                                                    row=result['data']['records'][0];
                                                    $('#'+c.grid.id)[c.grid.type]('updateRow',{
                                                        index:index,
                                                        row:row
                                                    })
                                                    $('#'+c.grid.id)[c.grid.type]('selectRow',index);
                                                }
                                            })
                                        }
                                    }
                                    else{
                                        refreshGrid(c.grid.type, c.grid.id,c)
                                    }
                                }
                                showMessage(f)
                            }
                        })
                },
                multiSelectedAjax: function (b, c) {
                    var d = getSelectedRowsData(c.grid.type, c.grid.id);
                    return 0 == d.length ? void a.messager.alert(gui.language.message.title.operationTips, gui.language.message.msg.selectSelfGrid, gui.language.message.icon.warning) : void a.messager.confirm(gui.language.message.title.confirmTips, c.confirmMsg, function (a) {
                        if (a) {
                            var b;
                            b = void 0 == c.grid.param ? gui.config.pkName + ":" + gui.config.pkName : c.grid.param;
                            var e = param2JsonObj(b);
                            c.ajaxData = convertParamObj2ObjData(e, d);
                            var f = doAjax(c);
                            200 == f.statusCode && refreshGrid(c.grid.type, c.grid.id),
                                showMessage(f)
                        }
                    })
                },
                multiCheckedAjax: function (b, c) {
                    var d = getCheckedRowsData(c.grid.type, c.grid.id);
                    return 0 == d.length ? void a.messager.alert(gui.language.message.title.operationTips, c.grid.uncheckedMsg, gui.language.message.icon.warning) : void a.messager.confirm(gui.language.message.title.confirmTips, c.confirmMsg, function (a) {
                        if (a) {
                            // void 0 == c.grid.param && (c.grid.param = gui.config.pkName + ":" + gui.config.pkName),
                            if(c.grid.param==undefined||c.grid.param==''){
                                c.ajaxData = {master:d[0]}
                            }else{
                                c.ajaxData = convertParamObj2ObjData(param2JsonObj(c.grid.param), d);
                            };
                            var b = doAjax(c);

                            200 == b.statusCode && c.grid.reload &&refreshGrid(c.grid.type, c.grid.id),
                                showMessage(b)
                        }
                    })
                },
                doCellTip: function (b, c) {
                    function d(b, c, d) {
                        "" != a(c).text() && b.tooltip.text(a(c).text()).css({
                            top: d.pageY + 10 + "px",
                            left: d.pageX + 20 + "px",
                            "z-index": a.fn.window.defaults.zIndex,
                            display: "block"
                        })
                    }
                    return b.each(function () {
                        var b = a(this),
                            e = a(this).data("datagrid");
                        if (!e.tooltip) {
                            var f = b.datagrid("getPanel").panel("panel"),
                                g = {
                                    border: "1px solid #333",
                                    padding: "2px",
                                    color: "#333",
                                    background: "#f7f5d1",
                                    position: "absolute",
                                    "max-width": "800px",
                                    "border-radius": "4px",
                                    "-moz-border-radius": "4px",
                                    "-webkit-border-radius": "4px",
                                    display: "none"
                                },
                                h = a('<div id="celltip"></div>').appendTo("body");
                            h.css(a.extend({}, g, c.cls)),
                                e.tooltip = h,
                                f.find(".datagrid-body").each(function () {
                                    var b = a(this).find("> div.datagrid-body-inner").length ? a(this).find("> div.datagrid-body-inner")[0] : this;
                                    a(b).undelegate("td", "mouseover").undelegate("td", "mouseout").undelegate("td", "mousemove").delegate("td", {
                                        mouseover: function (a) {
                                            if (c.delay) {
                                                e.tipDelayTime && clearTimeout(e.tipDelayTime);
                                                var b = this;
                                                e.tipDelayTime = setTimeout(function () {
                                                    d(e, b, a)
                                                }, c.delay)
                                            } else d(e, this, a)
                                        },
                                        mouseout: function (a) {
                                            e.tipDelayTime && clearTimeout(e.tipDelayTime),
                                                e.tooltip.css({
                                                    display: "none"
                                                })
                                        },
                                        mousemove: function (a) {
                                            var b = this;
                                            e.tipDelayTime ? (clearTimeout(e.tipDelayTime), e.tipDelayTime = setTimeout(function () {
                                                d(e, b, a)
                                            }, c.delay)) : d(e, b, a)
                                        }
                                    })
                                })
                        }
                    })
                },
                cancelCellTip: function (b) {
                    return b.each(function () {
                        var b = a(this).data("datagrid");
                        if (b.tooltip) {
                            b.tooltip.remove(),
                                b.tooltip = null;
                            var c = a(this).datagrid("getPanel").panel("panel");
                            c.find(".datagrid-body").undelegate("td", "mouseover").undelegate("td", "mouseout").undelegate("td", "mousemove")
                        }
                        b.tipDelayTime && (clearTimeout(b.tipDelayTime), b.tipDelayTime = null)
                    })
                },

            },
            a.fn.iDatagrid.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.datagrid.parseOptions(b), a.fn.iDatagrid.defaults, a.parser.parseOptions(b, ["id"]), c);

                return setId(b, d)
            },
            a.fn.iDatagrid.defaults = {
                id: this.selector,
                width: "100%",
                height: "100%",
                fit: !0,
                border: !1,
                striped: !0,
                singleSelect: !0,
                toolbar: this.selector + "-toolbar",
                rownumbers: !0,
                pagination: !0,
                pageSize: 20,
                checkOnSelect: !1,
                selectOnCheck: !1,
                kindEditor: [],
                filterBtnIconCls: "fa fa-filter",
                initCreate: !0,
                onBeforeLoad: function (a) {},
                onLoadSuccess: function () {
                    var b = a(this).iDatagrid("options");
                    if (a(this).iDatagrid("doCellTip", {
                        cls: {},
                        delay: 500
                    }), "object" == typeof b.childGrid) for (var c = b.childGrid.grids, d = 0; d < c.length; d++) {
                        var e = c[d].syncReload;
                        if (e) {
                            var f = a("#" + c[d].id);
                            "datagrid" == c[d].type ? f.datagrid("load") : "treegrid" == c[d].type && f.treegrid("load")
                        }
                    }
                },
                onClickRow: function (b, c) {
                    var d = a(this).iDatagrid("options");
                    if ("object" == typeof d.childGrid) {
                        var e = {};
                        e = getSelectedRowJson(d.childGrid.param, c);
                        for (var f = d.childGrid.grids, g = 0; g < f.length; g++)!
                            function (b) {
                                setTimeout(function () {
                                    var c = a("#" + f[b].id);
                                    if ("datagrid" == f[b].type) {
                                        var d = c.datagrid("options").queryParams;
                                        c.datagrid("options").queryParams = a.extend({}, d, e),
                                            c.datagrid("load")
                                    } else if ("treegrid" == f[b].type) {
                                        var d = c.treegrid("options").queryParams;
                                        c.treegrid("options").queryParams = a.extend({}, d, e),
                                            c.treegrid("load")
                                    } else if ("panel" == f[b].type) {
                                        var g = replaceUrlParamValueByBrace(f[b].href, e);
                                        c.panel("refresh", g)
                                    }
                                }, 100 * b)
                            }(g)
                    }
                    if ("object" == typeof d.childTabs) for (var h = d.childTabs, g = 0; g < h.length; g++) {
                        var i = a("#" + h[g].id),
                            j = i.tabs("options"),
                            k = i.tabs("getSelected"),
                            l = k.panel("options");
                        if (null != l.href || null != l.iframeHref) {
                            null != l.href && (l.tempHref = l.href, l.iframeHref = l.href, l.href = null),
                            "object" == typeof j.parentGrid && (l.iframeHref = setPanelQueryParams(l.tempHref, j.parentGrid));
                            var m = '<iframe src="' + l.iframeHref + '" scrolling="auto" frameborder="0" style="width:100%;height:99.5%;"></iframe>';
                            k.panel({
                                content: m
                            })
                        } else "object" == typeof l.dgOpts && ("object" == typeof j.parentGrid && setGridQueryParams(j.parentGrid, "datagrid", l.dgOpts.id), a("#" + l.dgOpts.id).datagrid("reload"))
                    }
                },
                onHeaderContextMenu: b
            }
    }(jQuery),


    function (a) {
        a.fn.iDatebox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iDatebox.methods[b];
                return d ? d(this, c) : this.datebox(b, c)
            }
            this.each(function () {
                b = a.fn.iDatebox.parseOptions(this, b);
                var c = a.extend([], a.fn.datebox.defaults.buttons);
                c.splice(1, 0, {
                    text: "清空",
                    handler: function (b) {
                        a("#" + b.id).datebox("setValue", ""),
                            a("#" + b.id).datebox("hidePanel")
                    }
                }),
                    b.buttons = c,
                    a(this).datebox(b)
            })
        },
            a.fn.iDatebox.methods = {},
            a.fn.iDatebox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.datebox.parseOptions(b), a.fn.iDatebox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iDatebox.defaults = {
                editable: 1,
                value: "",
                width: 153,
                panelWidth: 220,
                panelHeight: 240,
                formatter: function (b) {
                    var c = a(this).iDatebox("options"),
                        d = b.getFullYear(),
                        e = b.getMonth() + 1,
                        f = b.getDate();
                    return "YYYY" == c.pattern ? d : "YYYY-mm" == c.pattern ? d + "-" + convertDateToFullDate(e) : d + "-" + convertDateToFullDate(e) + "-" + convertDateToFullDate(f);
                },
                parser: function (a) {
                    var b = Date.parse(a);
                    return isNaN(b) ? new Date : new Date(b)
                },
                onSelect: function (a) {}
            }
    }(jQuery),


    function (a) {
        a.fn.iDatetimebox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iDatetimebox.methods[b];
                return d ? d(this, c) : this.datetimebox(b, c)
            }
            this.each(function () {
                b = a.fn.iDatetimebox.parseOptions(this, b);
                var c = a.extend([], a.fn.datetimebox.defaults.buttons);
                c.splice(2, 0, {
                    text: "清空",
                    handler: function (b) {
                        a("#" + b.id).datetimebox("setValue", ""),
                            a("#" + b.id).datetimebox("hidePanel")
                    }
                }),
                    b.buttons = c,
                    a(this).datetimebox(b)
            })
        },
            a.fn.iDatetimebox.methods = {},
            a.fn.iDatetimebox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.datetimebox.parseOptions(b), a.fn.iDatetimebox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iDatetimebox.defaults = {
                editable: !1,
                width: 153,
                panelWidth: 220,
                panelHeight: 240,
                formatter: function (b) {
                    var c = a(this).iDatebox("options"),
                        d = b.getFullYear(),
                        e = b.getMonth() + 1,
                        f = b.getDate(),
                        h=b.getHours(),
                        m=b.getMinutes(),
                        s=b.getSeconds();
                    return "YYYY" == c.pattern ? d : "YYYY-mm" == c.pattern ? d + "-" + convertDateToFullDate(e) : d + "-" + convertDateToFullDate(e) + "-" + convertDateToFullDate(f)+
                        " " + convertDateToFullDate(h)+ ":" + convertDateToFullDate(m)+ ":" + convertDateToFullDate(s);
                },
            }
    }(jQuery),


    function (a) {
        a.fn.iDatetimespinner = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iDatetimespinner.methods[b];
                return d ? d(this, c) : this.datetimespinner(b, c)
            }
            this.each(function () {
                b = a.fn.iDatetimespinner.parseOptions(this, b),
                    a(this).datetimespinner(b)
            })
        },
            a.fn.iDatetimespinner.methods = {},
            a.fn.iDatetimespinner.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.datetimespinner.parseOptions(b), a.fn.iDatetimespinner.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iDatetimespinner.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iDialog = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iDialog.methods[b];
                return d ? d(this, c) : this.dialog(b, c)
            }
            this.each(function () {
                b = a.fn.iDialog.parseOptions(this, b),
                b.href && (b.href = b.href + location.search),
                b.toolbar || (b.toolbar = "#" + b.id + "-toolbar"),
                b.buttons || (b.buttons = "#" + b.id + "-buttons"),
                    b.top = .5 * a(document.body).height() - .5 * b.height,
                    b.left = .5 * a(document.body).width() - .5 * b.width,
                    a(this).dialog(b)
            })
        },
            a.fn.iDialog.methods = {
                createDialog: function (b, c) {
                    if (0 == a("#" + c.id).length) {
                        void 0 == c.id && (c.id = getRandomNumByDef());
                        var d = 0 == c.form ? "div" : "form",
                            e = "<" + d + ' id="' + c.id + '"></' + d + ">",
                            f = "",
                            g = [];
                        if ("object" == typeof c.buttonsGroup) {
                            var h = c.buttonsGroup;
                            a.each(h, function (a, b) {
                                b.handler || (b.handler = "ajaxForm"),
                                void 0 == b.id && g.push(getRandomNumByDef()),
                                    f += '<a id="' + g[a] + '" href="#" data-options="mbId:\'' + c.mbId + "',dialogId:'" + c.id + "'\">" + b.text + "</a>"
                            })
                        }

                        if (a("body").append(e + '<div id="' + c.id + '-buttons" style="display:none">' + f + '<a href="#" class="closeDialog" onclick="javascript:$(\'#' + c.id + "').dialog('destroy')\">关闭</a></div>"), "object" == typeof c.buttonsGroup) {
                            var i = c.buttonsGroup;
                            a.each(i, function (b, c) {
                                a("#" + g[b]).iLinkbutton(c)
                            })
                        }
                        a(".closeDialog").iLinkbutton({
                            iconCls: "fa fa-close",
                            btnCls: "gui-btn-danger",
                            text: "关闭"
                        })
                    }
                }
            },
            a.fn.iDialog.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.dialog.parseOptions(b), a.fn.iDialog.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iDialog.defaults = {
                id: this.selector,
                width: 700,
                height: 450,
                title: "新增/编辑",
                modal: !0,
                closed: !0,
                iconCls: "fa",
                collapsible: !0,
                maximizable: !0,
                minimizable: !1,
                maximized: !1,
                resizable: !0,
                openAnimation: "show",
                openDuration: 100,
                closeAnimation: "show",
                closeDuration: 400,
                zIndex: 10,
                postfix: "Edit",
                combotreeFields: "",
                refreshTreeId: "",
                onBeforeLoad: function () {},
                onBeforeOpen: function () {},
                onLoad: function () {
                    var b = a(this).iDialog("options");
                    if (b.mbId) {
                        var c = a("#" + b.id),
                            d = a("#" + b.mbId).iMenubutton("options");
                        if(d.dialog.tag=='add'){
                            c.find('div input[name="flag"]').val('I');
                        }
                        if (a.messager.progress("close"), a(this).trigger(gui.eventType.initUI.form), a(this).dialog("center"), void 0 != b.url) {
                            if(b.edit){
                                var values=b.edit;
                                var inputsHidden=c.find('input[type="hidden"]');
                                if(inputsHidden&&inputsHidden.length>0){
                                    $(inputsHidden).each(function(i,input){
                                        var value='';
                                        if (values!=null && values[$(input).attr('name')]!=null ) {
                                            value = values[$(input).attr('name')];
                                            $(input).val(value);
                                        }

                                    })
                                };
                                var inputPrev=c.find('input[type="text"]');
                                var inputs=[];
                                if(inputPrev&&inputPrev.length>0){
                                    $.each(inputPrev,function(i,item){
                                        if(!$(item).hasClass('textbox-text')){
                                            inputs.push(item);
                                        }
                                    })
                                }

                                if(inputs&&inputs.length>0){
                                    $(inputs).each(function(i,input){
                                        var value=$(input).val()||'';
                                        if (values!=null && values[$(input).attr('name')]!=null ) {
                                            value = values[$(input).attr('name')||$(input).attr('textboxname')];
                                        }
                                        if (values!=null && values[$(input).attr('textboxname')]!=null ) {
                                            value = values[$(input).attr('textboxname')];
                                        }
                                        /*datetimebox*/
                                        if($(input).data('toggle')=="gui-datetimebox"){
                                            if(typeof value =='number'&&(value.toString().length==13)){
                                                if($(input).data('formatter')){
                                                    value=new Date(value).Format($(input).data('formatter'));
                                                }else{
                                                    value=new Date(value).Format('yyyy-MM-dd hh:mm:ss');
                                                }

                                            }
                                        }else if($(input).data('toggle')=="gui-datebox") {
                                            if (typeof value == 'number' && (value.toString().length == 13)) {
                                                value = new Date(value).Format('yyyy-MM-dd');
                                            }
                                        }
                                        /*textbox*/
                                        if($(input).hasClass('combobox-f')){
                                            /* $(input).iCombobox('setValue',value);*/
                                            var name = $(input).attr("comboname");
                                            $(input).iCombobox('setValue',value);
                                        }else{
                                            $(input).iTextbox('setValue',value);
                                            if($(input).data('title')&&$(input).data('title')!=''){
                                                $(input).iTextbox('setText',c.find('input[name="'+$(input).data('title')+'"]').val())
                                            }
                                        }

                                    })
                                };
                                var inputsChecked=c.find('input[type="checkbox"]');
                                if(inputsChecked&&inputsChecked.length>0){
                                    $(inputsChecked).each(function(i,input){
                                        var value='';
                                        if (values!=null && values[$(input).attr('name')]!=null ) {
                                            value = values[$(input).attr('name')];
                                            if(value=="Y"){
                                                $(input).attr('checked',true);

                                                $(input).prev('a').css('background-position','0px 0px')
                                            }
                                            $(input).val(value);
                                        }

                                    })
                                };
                                if(b.init)
                                {b.init( a("#" + b.id))}
                            }
                            if(d.dialog.tag=='copy'){
                                c.find('div.editTable input[name="flag"]').val('I');
                                c.find('div.editTable input[name="id"]').val('');
                            }else if(d.dialog.tag=='edit'){
                                c.find('div.editTable input[name="flag"]').val('U');
                            }else if(d.dialog.tag=='review'){
                                c.find('input.textbox-text').attr('readonly',true);
                            }

                        }
                        if ("object" == typeof d.parentGrid) {
                            var g = getSelectedRowData(d.parentGrid.type, d.parentGrid.id),
                                h = getSelectedRowJson(d.parentGrid.param, g);
                            c.form("load", h)
                        }
                        c.find('input:checkbox').click(function () {
                            if(this.checked){
                                $(this).val('Y');
                            }else{
                                $(this).val('N');
                            }
                        });
                    }
                    /*a(this).iDialog("options").onInit();*/

                },
                onOpen:function (b,c) {},
                onClose: function () {
                    a(this).form("clear")
                },
            }
    }(jQuery),


    function (a) {
        a.fn.iEcharts = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iEcharts.methods[b];
                return d ? d(this, c) : this.validatebox(b, c)
            }
            this.each(function () {
                b = a.fn.iEcharts.parseOptions(this, b);
                var c = document.getElementById(b.id);
                a("#" + b.id).css({
                    width: b.width,
                    height: b.height
                });
                var d = echarts.init(c);
                d.setOption({}),
                    a.ajax({
                        url: b.url,
                        type: "post",
                        dataType: "json",
                        success: function (a, b, c) {
                            d.setOption(a)
                        },
                        error: function (b) {
                            a.iMessager.alert("提示信息", "获取图表数据失败!", "messager-error"),
                                d.hideLoading()
                        }
                    })
            })
        },
            a.fn.iEcharts.methods = {},
            a.fn.iEcharts.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.iEcharts.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iEcharts.defaults = {}
    }(jQuery),


    function (a) {
        function b(b, c) {
            b.preventDefault();
            var d = a(this),
                e = this.headerContextMenu,
                f = "tree-checkbox1",
                g = "tree-checkbox0";
            if (!e) {
                for (var h = a('<div style="width:150px;"></div>').appendTo("body"), i = d.datagrid("getColumnFields"), j = 0; j < i.length; j++) {
                    var k = d.datagrid("getColumnOption", i[j]);
                    k.hidden ? a('<div iconCls="' + g + '" field="' + i[j] + '"/>').html(k.title).appendTo(h) : a('<div iconCls="' + f + '" field="' + i[j] + '"/>').html(k.title).appendTo(h)
                }
                e = this.headerContextMenu = h.menu({
                    onClick: function (b) {
                        var c = a(b.target).attr("field");
                        b.iconCls == f ? (d.datagrid("hideColumn", c), a(this).menu("setIcon", {
                            target: b.target,
                            iconCls: g
                        })) : (d.datagrid("showColumn", c), a(this).menu("setIcon", {
                            target: b.target,
                            iconCls: f
                        })),
                            e.menu("show")
                    }
                })
            }
            e.menu("show", {
                left: b.pageX,
                top: b.pageY
            })
        }
        a.fn.datagrid.defaults.onHeaderContextMenu = b,
            a.fn.treegrid.defaults.onHeaderContextMenu = b,
            a.fn.iEdatagrid = function (b, c) {
                if ("string" == typeof b) {
                    var d = a.fn.iEdatagrid.methods[b];
                    return d ? d(this, c) : this.edatagrid(b, c)
                }
                this.each(function () {
                    b = a.fn.iEdatagrid.parseOptions(this, b),
                        b.url = appendSourceUrlParam(b.url),
                        b.toolbar = "#" + b.id + "-toolbar",
                        a(this).edatagrid(b)
                })
            },
            a.fn.iEdatagrid.methods = {},
            a.fn.iEdatagrid.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.edatagrid.parseOptions(b), a.fn.iEdatagrid.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iEdatagrid.defaults = {
                id: this.selector,
                width: "100%",
                height: "100%",
                fit: !0,
                fitColumns: !1,
                border: !1,
                striped: !0,
                rownumbers: !0,
                pagination: !0,
                pageSize: 20,
                editable: !0,
                checkOnSelect: !1,
                selectOnCheck: !1,
                kindEditor: [],
                filterBtnIconCls: "fa fa-filter",
                remoteFilter: !0,
                onBeforeLoad: function (a) {},
                onLoadSuccess: function () {},
                onClickRow: function (b, c) {
                    var d = a(this).iEdatagrid("options");
                    if ("object" == typeof d.childGrid) {
                        var e = {};
                        e = getSelectedRowJson(d.childGrid.param, c);
                        for (var f = d.childGrid.grid, g = 0; g < f.length; g++)!
                            function (b) {
                                setTimeout(function () {
                                    var c = a("#" + f[b].id);
                                    if ("datagrid" == f[b].type) {
                                        var d = c.datagrid("options").queryParams;
                                        c.datagrid("options").queryParams = a.extend({}, d, e),
                                            c.datagrid("load")
                                    } else if ("treegrid" == f[b].type) {
                                        var d = c.treegrid("options").queryParams;
                                        c.treegrid("options").queryParams = a.extend({}, d, e),
                                            c.treegrid("load")
                                    } else if ("panel" == f[b].type) {
                                        var g = replaceUrlParamValueByBrace(f[b].href, e);
                                        c.panel("refresh", g)
                                    }
                                }, 100 * b)
                            }(g)
                    }
                }
            }
    }(jQuery),
    $.extend($.fn.datagrid.methods, {
        fixRownumber: function (a) {
            return a.each(function () {
                var a = $(this).datagrid("getPanel"),
                    b = $(".datagrid-cell-rownumber", a).last().clone();
                b.css({
                    position: "absolute",
                    left: -1e3
                }).appendTo("body");
                var c = b.width("auto").width();
                c > 25 ? ($(".datagrid-header-rownumber,.datagrid-cell-rownumber", a).width(c + 5), $(this).datagrid("resize"), b.remove(), b = null) : $(".datagrid-header-rownumber,.datagrid-cell-rownumber", a).removeAttr("style")
            })
        },
        addToolbarItem: function (jq, items) {
            return jq.each(function () {
                var dpanel = $(this),
                    toolbar = dpanel.children("div.datagrid-toolbar");
                toolbar.length || (toolbar = $('<div class="datagrid-toolbar"><table cellspacing="0" cellpadding="0"><tr></tr></table></div>').prependTo(dpanel), $(this).datagrid("resize"));
                for (var tr = toolbar.find("tr"), i = 0; i < items.length; i++) {
                    var btn = items[i];
                    if ("-" == btn) $('<td><div class="datagrid-btn-separator"></div></td>').appendTo(tr);
                    else {
                        var td = $("<td></td>").appendTo(tr),
                            b = $('<a href="javascript:void(0)"></a>').appendTo(td);
                        b[0].onclick = eval(btn.handler ||
                            function () {}),
                            b.linkbutton($.extend({}, btn, {
                                plain: !0
                            }))
                    }
                }
            })
        },
        removeToolbarItem: function (a, b) {
            return a.each(function () {
                var a = $(this).datagrid("getPanel"),
                    c = a.children("div.datagrid-toolbar"),
                    d = null;
                "number" == typeof b ? d = c.find("td").eq(b).find("span.l-btn-text") : "string" == typeof b && (d = c.find("span.l-btn-text:contains('" + b + "')")),
                d && d.length > 0 && (d.closest("td").remove(), d = null)
            })
        }
    }),


    function (a) {
        a.fn.iFilebox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iFilebox.methods[b];
                return d ? d(this, c) : this.filebox(b, c)
            }
            this.each(function () {
                b = a.fn.iFilebox.parseOptions(this, b),
                    a(this).filebox(b)
            })
        },
            a.fn.iFilebox.methods = {},
            a.fn.iFilebox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.filebox.parseOptions(b), a.fn.iFilebox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iFilebox.defaults = {
                width: 450,
                buttonText: "选择"
            }
    }(jQuery),


    function (a) {
        a.fn.iForm = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iForm.methods[b];
                return d ? d(this, c) : this.form(b, c)
            }
            this.each(function () {
                b = a.fn.iForm.parseOptions(this, b),
                    a(this).form(b)
            })
        },
            a.fn.iForm.methods = {},
            a.fn.iForm.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.form.parseOptions(b), a.fn.iForm.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iForm.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iLayout = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iLayout.methods[b];
                return d ? d(this, c) : this.layout(b, c)
            }
            this.each(function () {
                b = a.fn.iLayout.parseOptions(this, b),
                    a(this).layout(b)
            })
        },
            a.fn.iLayout.methods = {},
            a.fn.iLayout.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.layout.parseOptions(b), a.fn.iLayout.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iLayout.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iLinkbutton = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iLinkbutton.methods[b];
                return d ? d(this, c) : this.linkbutton(b, c)
            }
            this.each(function () {
                b = a.fn.iLinkbutton.parseOptions(this, b),
                    b.text = "" == b.text ? a(this).text() : b.text,
                    a(this).linkbutton(b)
            })
        },
            a.fn.iLinkbutton.methods = {},
            a.fn.iLinkbutton.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.linkbutton.parseOptions(b), a.fn.iLinkbutton.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iLinkbutton.defaults = {
                iconCls: "fa fa-cog",
                btnCls: "gui-btn",
                onClick: function () {
                    var b = a(this).iLinkbutton("options");
                    if ("object" == typeof b.form) {
                        var c = b.form;
                        "submit" == c.method ? a("#" + c.id).form("submit", {
                            url: c.url,
                            onSubmit: function () {
                                var b = a(this).form("validate");
                                return b || a.messager.progress("close"),
                                    b
                            },
                            success: function (c) {
                                var c = strToJson(c);
                                if (200 == c.statusCode) {
                                    a.messager.progress("close");
                                    var d = parent.$("#tabs"),
                                        e = getSelectedTabOpts(d);
                                    if (b.form.refreshCurrentTab) {
                                        var f = parent.$("#" + e.id),
                                            g = f.find("iframe")[0];
                                        g.contentWindow.location.href = g.src
                                    }
                                    if (b.form.refreshRefererTab) {
                                        var f = parent.$("#" + e.refererTab.id),
                                            g = f.find("iframe")[0];
                                        g.contentWindow.location.href = g.src
                                    }
                                }
                            }
                        }) : "reset" == c.method ? a("#" + c.id).form("reset") : "clear" == c.method && a("#" + c.id).form("clear")
                    }
                    if ("ajaxForm" == b.handler || "multiAjaxForm" == b.handler) {
                        "undefined" != b.handlerBefore && executeCallBackFun(b.handlerBefore);
                        var d = a("#" + b.mbId).menubutton("options"),
                            e = d.grid;
                        d.dialog;
                        if (a("#" + b.dialogId).form("validate")) {
                            if (b.ajaxData = a("#" + b.dialogId).serialize(), void 0 != b.combotreeFields) {
                                var f = "";
                                a.each(options.combotreeFields, function (c, d) {
                                    f += "&" + d.replace(b.postfix, "") + "=" + a("#" + b.dialogId + ' input[textboxname="' + d + '"]').combotree("getValues").join(",") + ", "
                                }),
                                    b.ajaxData += f
                            }
                            function mxQueryParams(form,formUrl,dg,dgId){
                                var $dg=$(dg);
                                var master= DataBind.collectData(form);
                                var previousRecords={};
                                if(master['id']!=''){
                                    HTTP.post(formUrl,{id:master['id']},function (result) {
                                        if(result['success']){
                                            if(result['data']['records']){
                                                previousRecords=result['data']['records'];
                                            }
                                        }
                                    });
                                }
                                var newMaster=$.extend({},previousRecords,master);
                                var _details = [];
                                var eaRows = $dg.datagrid('getRows');
                                $(eaRows).each(function(index,item){
                                    $dg.datagrid('endEdit',index);
                                });
                                var data=$dg.datagrid("getData")["rows"];
                                if($dg.data("mxData")&&$dg.data("mxData").length>0){
                                    $.each($dg.data("mxData"),function (i,item) {
                                        data.push(item);
                                    });
                                }
                                _details.push({
                                    id: dgId,
                                    records: data||[]
                                });
                                var obj={
                                    master:newMaster,details:_details
                                };
                                return  obj;
                            }
                            if(b.queryForm){
                                b.ajaxData=mxQueryParams(a("#" + b.dialogId),b.queryForm[1],b.queryForm[0],b.queryForm[2]);
                            }else if(a("#" + b.dialogId).find('.datagrid-f').length>0){
                                var dg=a("#" + b.dialogId).find('.datagrid-f');
                                var opt=$(dg).datagrid('options');
                                b.ajaxData=mxQueryParams(a("#" + b.dialogId),d.dialog.module,dg,opt.dgid);
                            }else{
                                b.ajaxData= {master:DataBind.collectData(a("#" + b.dialogId)),
                                    details:[]};
                            }
                            var i = doAjax(b);
                            if (200 == i.statusCode) {
                                var row={};
                                if(typeof (i.queryParms)=='object'){
                                    row=i.queryParms
                                }else if(typeof (i.queryParms)=='string'){
                                    row=JSON.parse(i.queryParms);
                                }
                                if(d.dialog&&d.dialog.tag&&(d.dialog.tag=='add'||d.dialog.tag=='copy')){
                                    if(e.type=='treegrid'){
                                        refreshGrid(e.type, e.id,d)
                                    }else{
                                        if(i.queryParms&&b.url){
                                            var url=b.url.substring(0,b.url.length-4)+'/query';
                                            HTTP.post(url,row,function(result){
                                                if(result['success']){
                                                    row=result['data']['records'][0];
                                                }
                                            })
                                        }
                                        a("#" + e.id).datagrid('insertRow',{
                                            index: 0,	// index start with 0
                                            row: row
                                        });
                                        a("#" + e.id).datagrid('selectRow',0);
                                    }
                                    if(b.continue){
                                        a("#" + b.dialogId).form('reset');
                                        // a("#" + b.dialogId).form('clear');
                                    }else{
                                        /* a("#" + b.dialogId).dialog("close");*/
                                        a("#" + b.dialogId).dialog("destroy");
                                    }
                                    /*  refreshGrid(e.type, e.id,d)*/
                                }else{
                                    if(i.queryParms&&b.url){
                                        var selectedRow=a("#" + e.id).datagrid('getSelected');
                                        if(selectedRow&&b.url){
                                            var url=b.url.substring(0,b.url.length-7)+'/query';
                                            HTTP.post(url,{id:selectedRow['id']},function(result){
                                                if(result['success']&&result['data']['records'].length==1){
                                                    row=result['data']['records'][0];
                                                }else{
                                                    $.messager.alert('警告','后台未返回id或者根据id未成功查到数据');
                                                }
                                            })
                                        }
                                    }
                                    if (a("#" + b.dialogId).dialog("destroy"), "object" == typeof e) if ("datagrid" == e.type) /*a("#" + e.id).datagrid("reload")*/;
                                    else if ("treegrid" == e.type) {
                                        var j = getSelectedRowData(e.type, e.id);
                                        null == j ? a("#" + e.id).treegrid("reload") : a("#" + e.id).treegrid("reload", j[e.parentIdField])
                                    }
                                    if(e.type=='treegrid'){
                                        refreshGrid(e.type, e.id,d)
                                    }else{
                                        var index= a("#" + e.id).datagrid('getRowIndex',a("#" + e.id).datagrid('getSelected'));
                                        a("#" + e.id).datagrid('updateRow',{
                                            index:index,
                                            row:row
                                        })
                                    }

                                }
                            }
                            /* refreshGrid(e.type, e.id,d);*/
                            showMessage(i);
                            //msgFn(i)
                        }
                    };
                    if ("parameterForm" == b.handler ) {
                        "undefined" != b.handlerBefore && executeCallBackFun(b.handlerBefore);
                        var d = a("#" + b.mbId).menubutton("options"),
                            e = d.grid;
                        d.dialog;
                        if (a("#" + b.dialogId).form("validate")) {
                            if (b.ajaxData = a("#" + b.dialogId).serialize(), void 0 != b.combotreeFields) {
                                var f = "";
                                a.each(options.combotreeFields, function (c, d) {
                                    f += "&" + d.replace(b.postfix, "") + "=" + a("#" + b.dialogId + ' input[textboxname="' + d + '"]').combotree("getValues").join(",") + ", "
                                }),
                                    b.ajaxData += f
                            }
                            var g = getCheckedRowsData(e.type, e.id);
                            if( 'function'==typeof b.validate&&b.validate()==false){
                                return false;
                            }
                            if('function'==typeof b.callback){
                                b.ajaxData=b.callback().parmas;
                            }
                            var i = doAjax(b);
                            if (200 == i.statusCode) {
                                if(d.dialog&&d.dialog.tag&&(d.dialog.tag=='add'||d.dialog.tag=='copy')){
                                    var row={};
                                    if(typeof (i.queryParms)=='object'){
                                        row=i.queryParms
                                    }else if(typeof (i.queryParms)=='string'){
                                        row=JSON.parse(i.queryParms);
                                    }
                                    if(i.queryParms&&b.url){
                                        var url=b.url.substring(0,b.url.length-4)+'/query';
                                        HTTP.post(url,row,function(result){
                                            if(result['success']){
                                                row=result['data']['records'][0]||{};
                                            }
                                        })
                                    }
                                    a("#" + e.id).datagrid('insertRow',{
                                        index: 0,	// index start with 0
                                        row: row
                                    });
                                    a("#" + e.id).datagrid('selectRow',0);
                                    if(b.continue){
                                        a("#" + b.dialogId).form('reset');
                                    }else{
                                        a("#" + b.dialogId).dialog("destroy");
                                    }
                                    /* var rowLength=a("#" + e.id).datagrid('getRows').length;
                                     var options = a("#" + e.id).datagrid("getPager" ).data("pagination" ).options;
                                     var pageSize= options.pageSize;
                                     if(rowLength>pageSize){
                                         a("#" + e.id).datagrid('deleteRow',rowLength-1);
                                     }*/
                                }else {
                                    var selectedRow=a("#" + e.id).datagrid('getSelected');
                                    if(selectedRow&&b.url){
                                        var url=b.url.substring(0,b.url.length-7)+'/query';
                                        HTTP.post(url,{id:selectedRow['id']},function(result){
                                            if(result['success']&&result['data']['records'].length==1){
                                                row=result['data']['records'][0];
                                            }else{
                                                $.messager.alert('警告','后台未返回id或者根据id未成功查到数据');
                                            }
                                        })
                                    }
                                    if (a("#" + b.dialogId).dialog("destroy"), "object" == typeof e) if ("datagrid" == e.type) /*a("#" + e.id).datagrid("reload")*/;
                                    else if ("treegrid" == e.type) {
                                        var j = getSelectedRowData(e.type, e.id);
                                        null == j ? a("#" + e.id).treegrid("reload") : a("#" + e.id).treegrid("reload", j[e.parentIdField])
                                    }
                                    if(e.type=='treegrid'){
                                        refreshGrid(e.type, e.id,d)
                                    }else{
                                        var index= a("#" + e.id).datagrid('getRowIndex',a("#" + e.id).datagrid('getSelected'));
                                        a("#" + e.id).datagrid('updateRow',{
                                            index:index,
                                            row:row
                                        })
                                    }}

                            }
                            showMessage(i)
                        }
                    };
                    if($.isFunction(b.handler)){
                        var d = a("#" + b.mbId).menubutton("options"),
                            e = d.grid;
                        d.dialog;
                        if (a("#" + b.dialogId).form("validate")) {
                            b.handler();
                            /*   a("#" + b.dialogId).dialog("destroy");*/
                        }
                    }
                }
            }
    }(jQuery),

    function (a) {
        a.fn.iMenu = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iMenu.methods[b];
                return d ? d(this, c) : this.menu(b, c)
            }
            this.each(function () {
                b = a.fn.iMenu.parseOptions(this, b),
                    a(this).menu(b)
            })
        },
            a.fn.iMenu.methods = {},
            a.fn.iMenu.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.menu.parseOptions(b), a.fn.iMenu.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iMenu.defaults = {}
    }(jQuery),


    function (a) {

        a.fn.iMenubutton = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iMenubutton.methods[b];
                return d ? d(this, c) : this.menubutton(b, c)
            }
            this.each(function () {
                b = a.fn.iMenubutton.parseOptions(this, b),
                    b = bindMenuClickEvent(a(this), b),
                    b.text = "" == b.text ? a(this).text() : b.text,
                    a(this).menubutton(b)
            })
        },
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
                custom:function(a){
                    return a.each(function(){
                        customHandler(this)
                    })
                }

            },
            a.fn.iMenubutton.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.menubutton.parseOptions(b), a.fn.iMenubutton.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iMenubutton.defaults = {
                plain: !0,
                iconCls: "fa fa-cog",
                hasDownArrow: !1,
                onClick: function () {
                    var b = a(this).iMenubutton("options");
                    a(this).iMenubutton(b.event)
                },
                onInit:function(){
                    var b = a(this).iMenubutton("options");
                    a(this).iMenubutton(b.event)
                }
            }
    }(jQuery),


    function (a) {
        a.fn.iMessager = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iMessager.methods[b];
                return d ? d(this, c) : this.messager(b, c)
            }
            this.each(function () {
                b = a.fn.iMessager.parseOptions(this, b),
                    a(this).messager(b)
            })
        },
            a.fn.iMessager.methods = {},
            a.iMessager = {
                show: function (b) {
                    return a.messager.show(b)
                },
                alert: function (b, c, d, e) {
                    return a.messager.alert(b, c, d, e)
                },
                confirm: function (b, c, d) {
                    return a.messager.confirm(b, c, d)
                },
                prompt: function (b, c, d) {
                    return a.messager.prompt(b, c, d)
                },
                progress: function (b) {
                    return a.messager.progress(b)
                }
            },
            a.fn.iMessager.parseOptions = function (b, c) {
                return a.extend({}, a.fn.messager.parseOptions(b), a.fn.iMessager.defaults, a.parser.parseOptions(b), setId(b, c))
            },
            a.fn.iMessager.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iNumberbox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iNumberbox.methods[b];
                return d ? d(this, c) : this.numberbox(b, c)
            }
            this.each(function () {
                b = a.fn.iNumberbox.parseOptions(this, b),
                    a(this).numberbox(b)
            })
        },
            a.fn.iNumberbox.methods = {},
            a.fn.iNumberbox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.numberbox.parseOptions(b), a.fn.iNumberbox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iNumberbox.defaults = {
                width: 153,
                groupSeparator: ","

            }
    }(jQuery),


    function (a) {
        a.fn.iNumberspinner = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iNumberspinner.methods[b];
                return d ? d(this, c) : this.numberspinner(b, c)
            }
            this.each(function () {
                b = a.fn.iNumberspinner.parseOptions(this, b),
                    "currentYear" == b.defaultValueType ? (b.value = currentYear, b.min = 1900, b.max = 2200) : "currentSeason" == b.defaultValueType ? (1 == currentMonth || 2 == currentMonth || 3 == currentMonth ? b.value = 1 : 4 == currentMonth || 5 == currentMonth || 6 == currentMonth ? b.value = 2 : 7 == currentMonth || 8 == currentMonth || 9 == currentMonth ? b.value = 3 : 10 != currentMonth && 11 != currentMonth && 12 != currentMonth || (b.value = 4), b.min = 1, b.max = 4) : "currentMonth" == b.defaultValueType ? (b.value = currentMonth, b.min = 1, b.max = 12) : "currentDay" == b.defaultValueType ? (b.value = currentDay, b.min = 1, b.max = 31) : "currentHour" == b.defaultValueType && (b.value = currentHour, b.min = 0, b.max = 24),
                    a(this).numberspinner(b)
            })
        },
            a.fn.iNumberspinner.methods = {},
            a.fn.iNumberspinner.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.numberspinner.parseOptions(b), a.fn.iNumberspinner.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iNumberspinner.defaults = {
                width: 153,
                defaultValueType: ""
            }
    }(jQuery),


    function (a) {
        a.fn.iPanel = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iPanel.methods[b];
                return d ? d(this, c) : this.panel(b, c)
            }
            this.each(function () {
                b = a.fn.iPanel.parseOptions(this, b),
                    a(this).panel(b)
            })
        },
            a.fn.iPanel.methods = {},
            a.fn.iPanel.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.panel.parseOptions(b), a.fn.iPanel.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iPanel.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iPasswordbox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iPasswordbox.methods[b];
                return d ? d(this, c) : this.passwordbox(b, c)
            }
            this.each(function () {
                b = a.fn.iPasswordbox.parseOptions(this, b),
                    a(this).passwordbox(b)
            })
        },
            a.fn.iPasswordbox.methods = {},
            a.fn.iPasswordbox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.passwordbox.parseOptions(b), a.fn.iPasswordbox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iPasswordbox.defaults = {}
    }(jQuery),
    +
        function (a) {
            "use strict";
            a(document).on(gui.eventType.initUI.form, function (b) {
                a('[data-toggle="gui-switchbutton"]').each(function (b) {
                    var c = a(this),
                        d = getOptionsJson(c);
                    c.iSwitchbutton(d)
                }),
                    a('[data-toggle="gui-form"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iForm(d)
                    }),
                    a('[data-toggle="gui-validatebox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        null == d.height && (d.height = 32),
                            c.iValidatebox(d)
                    }),
                    a('[data-toggle="gui-textbox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        null == d.height && (d.height = 32),
                            d.readonly ? d.buttonText = "只读" : d.disabled && (d.buttonText = "禁止"),
                            c.iTextbox(d)
                    }),
                    a('[data-toggle="gui-passwordbox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iPasswordbox(d)
                    }),
                    a('[data-toggle="gui-checkbox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iCheckbox(d)
                    }),
                    a('[data-toggle="gui-radio"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iRadio(d)
                    }),
                    a('[data-toggle="gui-combo"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);

                        c.iCombo(d)
                    }),
                    a('[data-toggle="gui-combobox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        null == d.height && (d.height = 32),
                            c.iCombobox(d)
                    }),
                    a('[data-toggle="gui-tagbox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iTagbox(d)
                    }),
                    a('[data-toggle="gui-numberbox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iNumberbox(d)
                    }),
                    a('[data-toggle="gui-datebox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        if($(c).hasClass('datebox-f'))return;
                        c.iDatebox(d)
                    }),
                    a('[data-toggle="gui-datetimebox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        null == d.height && (d.height = 32);
                        c.iDatetimebox(d)
                    }),
                    a('[data-toggle="gui-datetimespinner"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        null == d.height && (d.height = 32);
                        c.iDatetimespinner(d)
                    }),
                    a('[data-toggle="gui-calendar"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iCalendar(d)
                    }),
                    a('[data-toggle="gui-spinner"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iSpinner(d)
                    }),
                    a('[data-toggle="gui-numberspinner"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iNumberspinner(d)
                    }),
                    a('[data-toggle="gui-timespinner"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iTimespinner(d)
                    }),
                    a('[data-toggle="gui-slider"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iSlider(d)
                    }),
                    a('[data-toggle="gui-filebox"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iFilebox(d)
                    }),
                    a('[data-toggle="gui-textarea"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        d.multiline = !0,
                            //   null == d.width && (d.width = 450),
                            //   null == d.height && (d.height = 66),
                            c.iTextbox(d)
                    }),
                    a('[data-toggle="gui-autocomplete"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iAutocomplete(d)
                    }),
                    a('[data-toggle="gui-ueditor"]').each(function (b) {
                        var c = {
                                height: 300
                            },
                            d = a(this),
                            e = getOptionsJson(d);
                        e = setId(this, e),
                            e = a.extend(c, e),
                            UE.delEditor(e.id);
                        var f = [
                                ["fullscreen", "source", "|", "undo", "redo", "|", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "removeformat", "|", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "lineheight", "|", "horizontal", "spechars", "map", "paragraph", "fontfamily", "fontsize", "insertcode", "|", "indent", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "link", "unlink", "|", "emotion", "attachment", "simpleupload", "insertimage", "|", "preview"]
                            ],
                            g = [
                                ["fullscreen", "source", "undo", "redo", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "insertunorderedlist", "insertorderedlist", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "removeformat", "simpleupload", "snapscreen", "emotion", "attachment", "link", "unlink", "indent", "lineheight", "autotypeset"]
                            ];
                        UE.getEditor(e.id, {
                            toolbars: "simple" == e.mode ? g : f,
                            initialFrameWidth: 700,
                            initialFrameHeight: e.height,
                            autoHeightEnabled: !0,
                            autoFloatEnabled: !0,
                            readonly: !! e.readonly
                        })
                    }),
                    a('[data-toggle="gui-upload-ue"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c),
                            e = {
                                width: 450,
                                buttonText: "选择图片",
                                uploadType: "images",
                                buttonIcon: "fa fa-cloud-upload"
                            },
                            d = a.extend(e, d),
                            f = d.id + "Uploader";
                        a("body").append('<script type="text/plain" id="' + f + '"></script>');
                        var g = UE.getEditor(f, {
                            toolbars: [
                                ["insertimage", "attachment"]
                            ]
                        });
                        g.ready(function () {
                            g.setDisabled(),
                                g.hide();
                            var b = "afterConfirmUploadedFile",
                                e = "url";
                            "image" == d.uploadType && (b = "afterConfirmUploadedImage", e = "src"),
                                g.addListener(b, function (b, c) {
                                    a("#" + d.id).textbox("setText", c[0][e]),
                                        a("#" + d.id).textbox("setValue", c[0][e]),
                                    "src" == e && a("#" + d.previewImageId).attr(e, c[0][e])
                                }),
                                d.onClickButton = function () {
                                    if ("image" == d.uploadType) {
                                        var a = g.getDialog("insertimage");
                                        a.open()
                                    } else {
                                        var b = g.getDialog("attachment");
                                        b.open()
                                    }
                                },
                                c.iTextbox(d)
                        })
                    }),
                    a('[data-toggle="gui-upload-lay"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c),
                            e = {
                                width: 450,
                                buttonText: "选择图片",
                                accept: "images",
                                buttonIcon: "fa fa-cloud-upload"
                            },
                            d = a.extend(e, d);
                        d = setId(c, d),
                        0 == a("#" + d.id + "-btn").length && (a("body").append('<button type="button" class="layui-btn" id="' + d.id + '-btn" style="display: none;">上传图片</button>'), layui.use("upload", function () {
                            var a = layui.jquery,
                                b = layui.upload;
                            b.render({
                                elem: "#" + d.id + "-btn",
                                url: d.uploadUrl,
                                accept: d.accept,
                                before: function (a) {
                                    layer.load()
                                },
                                done: function (b, c, e) {
                                    200 == b.statusCode ? a("#" + d.id).textbox("setValue", b.filePath) : layer.msg(b.msg, {
                                        icon: 5
                                    }),
                                        layer.closeAll("loading")
                                },
                                error: function () {
                                    layer.closeAll("loading")
                                }
                            })
                        })),
                            d.onClickButton = function () {
                                a("#" + d.id + "-btn").trigger("click")
                            },
                            c.iTextbox(d)
                    }),
                    a('[data-toggle="gui-kindeditor"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        d.items && (d.items = d.items.replaceAll("'", "").replaceAll(" ", "").split(",")),
                        d.afterUpload && (d.afterUpload = d.afterUpload.toFunc()),
                        d.afterSelectFile && (d.afterSelectFile = d.afterSelectFile.toFunc()),
                        d.confirmSelect && (d.confirmSelect = d.confirmSelect.toFunc());
                        var e = {
                            font: [],
                            span: [".color", ".background-color", ".font-size", ".font-family"],
                            div: [".margin", ".padding", ".text-align"],
                            table: ["align", "width"],
                            "td,th": ["align", "valign", "width", "height", "colspan", "rowspan"],
                            a: ["href", "target", "name"],
                            embed: ["src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess"],
                            img: ["src", "width", "height", "border", "alt", "title", "align", ".width", ".height", ".border"],
                            "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["class", "align", ".text-align", ".color", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".text-indent", ".margin-left"],
                            pre: ["class"],
                            hr: ["class", ".page-break-after"],
                            "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": []
                        };
                        KindEditor.create(c, {
                            module: d.module ? d.module : "未设置",
                            category: d.category ? d.category : "default",
                            width: d.width ? d.width + "px" : "700px",
                            height: d.height ? d.height + "px" : "600px",
                            pasteType: d.pasteType,
                            minHeight: d.minHeight || 150,
                            autoHeightMode: d.autoHeight || !0,
                            afterCreate: function () {},
                            items: "simple" == d.model ? ["source", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "removeformat", "|", "justifyleft", "justifycenter", "justifyright", "insertorderedlist", "insertunorderedlist", "|", "emoticons", "image", "insertfile", "link"] : KindEditor.options.items,
                            uploadJson: d.uploadJson || "/system/attachment/kindeditorUpload",
                            fileManagerJson: d.fileManagerJson || "/static/kindeditor/4.1.5/jsp/file_manager_json.jsp",
                            allowFileManager: d.allowFileManager || !0,
                            fillDescAfterUploadImage: d.fillDescAfterUploadImage || !0,
                            afterUpload: d.afterUpload,
                            afterSelectFile: d.afterSelectFile,
                            X_afterSelect: d.confirmSelect,
                            htmlTags: e,
                            cssPath: ["/static/kindeditor/4.1.5/editor-content.css", "/static/kindeditor/4.1.5/plugins/code/prettify.css"],
                            afterBlur: function () {
                                this.sync()
                            }
                        })
                    }),
                    a('[data-toggle="gui-upload"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        setTimeout(function () {
                            var b = d.url,
                                e = b;
                            if (d.url.indexOf("{") != -1) {
                                var f = getSelectedRowData(d.grid.type, d.grid.id);
                                e = replaceUrlParamValueByBrace(b, f)
                            }
                            var g = KindEditor.uploadbutton({
                                button: KindEditor(c)[0],
                                fieldName: "imgFile",
                                url: e || "/system/attachment/kindeditorUpload?dir=file&module=article&category=default&puuid=11111111111111111111111111111111",
                                afterUpload: function (b) {
                                    if (0 === b.error) {
                                        console.log(b);
                                        var c = KindEditor.formatUrl(b.url, "absolute");
                                        a("#" + d.fieldId).textbox("setText", c),
                                            a("#" + d.fieldId).textbox("setValue", c),
                                            refreshGrid(d.grid.type, d.grid.id)
                                    } else alert(b.message)
                                },
                                afterError: function (a) {
                                    alert("自定义错误信息: " + a)
                                }
                            });
                            g.fileBox.change(function (a) {
                                g.submit()
                            })
                        }, 500)
                    })
            }),
                a(document).on(gui.eventType.initUI.base, function (b) {
                    a('[data-toggle="gui-timeaxis"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iTimeaxis(d)
                    }),
                        a('[data-toggle="gui-layout"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c);
                            c.iLayout(d)
                        }),
                        a('[data-toggle="gui-accordion"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c);
                            c.iAccordion(d)
                        }),
                        a('[data-toggle="gui-panel"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c);
                            c.iPanel(d)
                        }),
                        a('[data-toggle="gui-treegrid"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c),
                                e = [];
                            c.find("th").each(function (a) {
                                e.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                            }),
                                d.columns = [e],
                                c.attr("id", d.id),
                                a("#" + d.id).iTreegrid(d)
                        }),
                        a('[data-toggle="gui-datagrid"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c),
                                e = {
                                    initCreate: !0
                                };
                            if (d = a.extend(e, d), d.initCreate) {
                                var f = c.find("thead:first")[0];
                                if (a(f).attr("frozen")) {
                                    var f = [];
                                    c.find("thead:first th").each(function (a) {
                                        f.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                                    }),
                                        d.frozenColumns = [f];
                                    var g = [];
                                    c.find("thead:eq(1) th").each(function (a) {
                                        g.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                                    })
                                } else {
                                    var g = [];
                                    c.find("thead th").each(function (a) {
                                        g.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                                    })
                                }
                                d.columns = [g];
                                c.iDatagrid(d)
                            }
                        }),
                        a('[data-toggle="gui-edatagrid"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c),
                                e = c.find("thead:first")[0];
                            if (a(e).attr("frozen")) {
                                var e = [];
                                c.find("thead:first th").each(function (a) {
                                    e.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                                }),
                                    d.frozenColumns = [e];
                                var f = [];
                                c.find("thead:eq(1) th").each(function (a) {
                                    f.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                                })
                            } else {
                                var f = [];
                                c.find("thead th").each(function (a) {
                                    f.push(strToJson("{" + this.getAttribute("data-options") + "}"))
                                })
                            }
                            d.columns = [f];
                            a(this).iEdatagrid(d)
                        }),
                        a('[data-toggle="gui-tabs"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b);
                            b.attr("id", c.id),
                                a("#" + c.id).iTabs(c)
                        }),
                        a('[data-toggle="gui-menu"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b);
                            c.id = getRandomNumByDef(),
                                a(this).attr("id", c.id),
                                a(this).iMenu(c)
                        }),
                        a('[data-toggle="gui-menubutton"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b);
                            c.id = getRandomNumByDef(),
                                a(this).attr("id", c.id),
                                a(this).iMenubutton(c)
                        }),
                        a('[data-toggle="gui-splitbutton"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b);
                            c.id = getRandomNumByDef(),
                                a(this).attr("id", c.id),
                                a(this).iSplitbutton(c)
                        }),
                        a('[data-toggle="gui-uploader"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b);
                            c.hasDownArrow = !1,
                                a(this).menubutton(c);
                            var d, e, f, g = "pending",
                                h = 0,
                                i = !1,
                                j = '<div id="uploaderDialog"><div id="upfileGrid-toolbar" data-options="border:false"><div style="float: left;margin-right:5px;"><div id="chooseFile">选择文件</div></div><a id="startUpload" style="margin-right:5px;">开始上传</a><a id="removeFile">移除文件</a></div><table id="upfileGrid"></table></div>';
                            a("body").append(j + '<div id="uploaderDialog-buttons" style="display:none"><a href="#" id="closeUploaderDialog">关闭</a></div>'),
                                e = a("#upfileGrid").datagrid({
                                    fit: !0,
                                    fitColumns: !0,
                                    rownumbers: !0,
                                    nowrap: !0,
                                    animate: !1,
                                    border: !1,
                                    singleSelect: !1,
                                    idField: "fileId",
                                    pagination: !1,
                                    toolbar: "#upfileGrid-toolbar",
                                    columns: [
                                        [{
                                            field: "ck",
                                            checkbox: !0
                                        },
                                            {
                                                field: "fileId",
                                                title: "fileId",
                                                hidden: !0
                                            },
                                            {
                                                field: "fileName",
                                                title: "文件名称",
                                                width: 100
                                            },
                                            {
                                                field: "fileSize",
                                                title: "文件大小",
                                                width: 30
                                            },
                                            {
                                                field: "validateMd5",
                                                title: "文件验证",
                                                width: 20
                                            },
                                            {
                                                field: "progress",
                                                title: "上传进度",
                                                width: 180,
                                                fixed: !0,
                                                formatter: function (a, b) {
                                                    var c = '<div class="gui-progressbar progressbar" style="width: 170px; height: 20px;" value="' + a + '" text="' + a + '%"><div class="progressbar-text" style="width: 170px; height: 20px; line-height: 20px;">' + a + '%</div><div class="progressbar-value" style="width: ' + a + '%; height: 20px; line-height: 20px;"><div class="progressbar-text" style="width: 170px; height: 20px; line-height: 20px;">' + a + "%</div></div></div>";
                                                    return c
                                                }
                                            },
                                            {
                                                field: "fileState",
                                                title: "上传状态",
                                                width: 20
                                            }]
                                    ]
                                }),
                                WebUploader.Uploader.register({
                                    "before-send-file": "beforeSendFile"
                                }, {
                                    beforeSendFile: function (b) {
                                        var c = new a.Deferred;
                                        return (new WebUploader.Uploader).md5File(b, 0, 10485760).progress(function (a) {
                                            e.datagrid("updateRow", {
                                                index: e.datagrid("getRowIndex", b.id),
                                                row: {
                                                    validateMd5: 100 * a + "%"
                                                }
                                            })
                                        }).then(function (f) {
                                            a.ajax({
                                                type: "POST",
                                                url: "/system/attachment/md5Validate",
                                                data: {
                                                    type: "md5Check",
                                                    md5: f
                                                },
                                                cache: !1,
                                                timeout: 3e3,
                                                dataType: "json"
                                            }).then(function (g, h, i) {
                                                g.isHave ? (c.reject(), d.skipFile(b), e.datagrid("updateRow", {
                                                    index: e.datagrid("getRowIndex", b.id),
                                                    row: {
                                                        fileState: "秒传",
                                                        progress: 100
                                                    }
                                                })) : (a.extend(d.options.formData, {
                                                    md5: f
                                                }), c.resolve())
                                            }, function (a, b, d) {
                                                c.resolve()
                                            })
                                        }),
                                            a.when(c)
                                    }
                                }),
                                d = WebUploader.create({
                                    resize: !1,
                                    swf: _tjp + "/plugins/webuploader/js/Uploader.swf",
                                    server: "/system/attachment/upload",
                                    pick: "#chooseFile",
                                    fileSingleSizeLimit: 104857600,
                                    accept: [{
                                        title: "file",
                                        extensions: "doc,docx,pdf,xls,xlsx,ppt,pptx,gif,jpg,jpeg,bmp,png,rar,zip",
                                        mimeTypes: "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,image/jpg,image/jpeg,image/png,image/gif,application/x-rar,application/zip"
                                    }]
                                }),
                                d.on("fileQueued", function (a) {
                                    var b = bytesToSize(a.size),
                                        c = {
                                            fileId: a.id,
                                            fileName: a.name,
                                            fileSize: b,
                                            validateMd5: "0%",
                                            progress: 0,
                                            fileState: "等待上传"
                                        };
                                    e.datagrid("insertRow", {
                                        index: 0,
                                        row: c
                                    })
                                }),
                                d.on("uploadProgress", function (a, b) {
                                    e.datagrid("updateRow", {
                                        index: e.datagrid("getRowIndex", a.id),
                                        row: {
                                            progress: (100 * b).toFixed(2)
                                        }
                                    })
                                }),
                                d.on("uploadSuccess", function (b) {
                                    for (var c = e.datagrid("getRows"), d = 0; d < c.length; d++) c[d].fileId == b.id && (a('input[type="checkbox"]')[d + 1].disabled = !0);
                                    a("#removeFile").linkbutton("disable"),
                                        e.datagrid("updateRow", {
                                            index: e.datagrid("getRowIndex", b.id),
                                            row: {
                                                fileState: "上传成功"
                                            }
                                        }),
                                        i = !0
                                }),
                                d.on("uploadError", function (a) {
                                    e.datagrid("updateRow", {
                                        index: e.datagrid("getRowIndex", a.id),
                                        row: {
                                            fileState: "上传失败"
                                        }
                                    })
                                }),
                                d.on("uploadComplete", function (a) {}),
                                d.on("uploadFinished", function () {
                                    a("#attachmentDg").datagrid("reload")
                                }),
                                d.on("error", function (a) {
                                    "F_EXCEED_SIZE" == a ? tim.parentAlert("error", "上传的单个文件不能大于" + h + "。<br>操作无法进行,如有需求请联系管理员", "error") : "Q_TYPE_DENIED" == a && tim.parentAlert("error", "不允许上传此类文件!。<br>操作无法进行,如有需求请联系管理员", "error")
                                });
                            var k = function () {
                                    for (var a = e.datagrid("getSelections"), b = [], c = 0; c < a.length; c++) b.push(a[c]);
                                    for (var f = 0; f < b.length; f++) {
                                        var g = e.datagrid("getRowIndex", b[f]);
                                        d.removeFile(b[f].fileId, !0),
                                            e.datagrid("deleteRow", g)
                                    }
                                    e.datagrid("clearSelections")
                                },
                                l = function (b, c) {
                                    return b.getFiles().length <= 0 ? void a.messager.alert("提示", "没有上传的文件!", "error") : void("uploading" === g ? b.stop() : (b.option("formData", {
                                        puuid: c.uuid
                                    }), b.upload()))
                                };
                            b.on("click", function () {
                                if ("object" == typeof c.parentGrid && (f = getSelectedRowData(c.parentGrid.type, c.parentGrid.id), !f)) return void a.messager.alert(gui.language.message.title.operationTips, c.parentGrid.unselectedMsg || gui.language.message.msg.selectParentGrid, gui.language.message.icon.warning);
                                var b = e.datagrid("getRows");
                                b.length > 0 && (e.datagrid("selectAll"), k());
                                var g = a("#uploaderDialog"),
                                    h = {
                                        iconCls: "fa fa-plus",
                                        parentGridUnselectedMsg: "请先选中一条主表数据！",
                                        dialog: {
                                            title: "文件上传",
                                            width: 900,
                                            height: 500,
                                            maximized: !1,
                                            maximizable: !0,
                                            iconCls: "fa fa-cloud-upload",
                                            buttons: "#uploaderDialog-buttons"
                                        }
                                    };
                                c = a.extend(h, c),
                                    g.dialog(c.dialog),
                                    g.dialog("open"),
                                    a("#startUpload").linkbutton({
                                        iconCls: "fa fa-play-circle",
                                        btnCls: "gui-btn",
                                        height: 36,
                                        onClick: function () {
                                            l(d, f)
                                        }
                                    }),
                                    a("#removeFile").linkbutton({
                                        iconCls: "fa fa-remove",
                                        btnCls: "gui-btn-danger",
                                        height: 36,
                                        onClick: k
                                    }),
                                    a("#closeUploaderDialog").linkbutton({
                                        iconCls: "fa fa-remove",
                                        btnCls: "gui-btn-danger",
                                        onClick: function () {
                                            g.dialog("close")
                                        }
                                    })
                            })
                        }),
                        a('[data-toggle="gui-submenubutton"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b);
                            bindMenuClickEvent(b, c),
                                a(this).iSubMenubutton(c)
                        }),
                        a('[data-toggle="gui-dialog"]').each(function () {
                            var b = a(this),
                                c = getOptionsJson(b),
                                d = b.attr("href");
                            void 0 != d && (c.href = d, a("body").append('<div id="' + c.id + '"></div>'), a("#" + c.id).iDialog(c), b.on("click", function () {
                                return a("#" + c.id).dialog("open"),
                                    !1
                            }))
                        }),
                        a('[data-toggle="gui-linkbutton"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c);
                            c.iLinkbutton(d)
                        })
                }),
                a(document).on(gui.eventType.initUI.base2, function (b) {
                    a('[data-toggle="gui-menu"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iMenu(d)
                    }),
                        a('[data-toggle="gui-tree"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c);
                            c.iTree(d)
                        })
                }),
                a(document).on(gui.eventType.initUI.echarts, function (b) {
                    a('[data-toggle="gui-echarts"]').each(function (b) {
                        var c = a(this),
                            d = getOptionsJson(c);
                        c.iEcharts(d)
                    })
                }),
                a(document).on(gui.eventType.initUI.advanceSearchForm, function (b) {
                    for (var c = a.cookie("fieldNameStr").split(","), d = a.cookie("colNameStr").split(","), e = [], f = 0; f < d.length; f++) e.push({
                        value: c[f],
                        text: d[f]
                    });
                    a(".field:last").iCombobox({
                        textField: "text",
                        valueField: "value",
                        data: e,
                        editable: !1,
                        width: 140
                    }),
                        a(".op:last").iCombobox({
                            textField: "text",
                            valueField: "value",
                            data: [{
                                text: "包含",
                                value: "contains",
                                selected: !0
                            },
                                {
                                    text: "等于",
                                    value: "equal"
                                },
                                {
                                    text: "不等于",
                                    value: "notequal"
                                },
                                {
                                    text: "大于",
                                    value: "greater"
                                },
                                {
                                    text: "大于或等于",
                                    value: "greaterorequal"
                                },
                                {
                                    text: "小于",
                                    value: "less"
                                },
                                {
                                    text: "小于或等于",
                                    value: "lessorequal"
                                },
                                {
                                    text: "以...开头",
                                    value: "beginwith"
                                },
                                {
                                    text: "以...结尾",
                                    value: "endwith"
                                }],
                            width: 120,
                            panelHeight: 220,
                            editable: !1
                        }),
                        a(".value:last").iTextbox({}),
                        a(".lb:last").iCombobox({
                            textField: "text",
                            valueField: "value",
                            data: [{
                                text: "无",
                                value: "",
                                selected: !0
                            },
                                {
                                    text: "(",
                                    value: "("
                                }],
                            width: 45,
                            panelHeight: 70,
                            editable: !1
                        }),
                        a(".rb:last").iCombobox({
                            textField: "text",
                            valueField: "value",
                            data: [{
                                text: "无",
                                value: "",
                                selected: !0
                            },
                                {
                                    text: ")",
                                    value: ")"
                                }],
                            width: 45,
                            panelHeight: 70,
                            editable: !1
                        }),
                        a(".join:last").iCombobox({
                            textField: "text",
                            valueField: "value",
                            data: [{
                                text: "并且",
                                value: "and",
                                selected: !0
                            },
                                {
                                    text: "或者",
                                    value: "or"
                                }],
                            width: 70,
                            panelHeight: 70,
                            editable: !1
                        }),
                        a("#addCondition").menubutton({
                            iconCls: "fa fa-plus",
                            hasDownArrow: !1
                        }),
                        a(".deleteCondition:last").menubutton({
                            iconCls: "fa fa-minus",
                            hasDownArrow: !1
                        }),
                        a(".deleteCondition:last").on("click", function () {
                            var b = a(".deleteCondition").index(this) + 2;
                            a("#advanceSearchTable tr:eq(" + b + ")").remove()
                        })
                }),
                a(document).on(gui.eventType.initUI.importExcelForm, function (b) {
                    setTimeout(function () {
                        for (var b = a.cookie("fieldNameStr"), c = b.split(","), d = "", e = 0; e < c.length; e++) d += e == c.length - 1 ? "'{" + e + "}'" : "'{" + e + "}',";
                        var f = "INSERT INTO {table} (" + b + ") VALUES (" + d + ")";
                        a("#importExcelSql").textbox("setValue", f)
                    }, 1e3)
                })
        }(jQuery),
    $(function () {
        $(this).trigger(gui.eventType.initUI.base),
            $(this).trigger(gui.eventType.initUI.base2),
            $(this).trigger(gui.eventType.initUI.form),
            $(this).trigger(gui.eventType.initUI.echarts),
            setTimeout(function () {
                $("#importExcelDialog").dialog({
                    width: 650,
                    height: 200,
                    title: "高级查询",
                    modal: !1,
                    collapsible: !0,
                    minimizable: !1,
                    maximized: !1,
                    resizable: !0,
                    closed: !0,
                    iconCls: "icon-find",
                    href: "/system/excel/excelImport",
                    zIndex: 10,
                    buttons: "#importExcelDialog-buttons",
                    onLoad: function () {
                        $(this).trigger(gui.eventType.initUI.importExcelForm)
                    }
                })
            }, 1e3),
            $("#submitImportExcelForm").on("click", function () {
                var a = $("#importExcelDialog").serializeArray();
                $.ajax({
                    type: "POST",
                    url: getUrl("controller") + "importExcel",
                    data: a,
                    dataType: "json",
                    success: function (a) {
                        showMessage({
                            statusCode: a.statusCode,
                            title: a.title,
                            message: a.message
                        }),
                            $("#importExcelDialog").dialog("close").form("reset"),
                            refreshGrid($.cookie("gridType"), $.cookie("gridId"))
                    },
                    error: function (a) {
                        showMessage({
                            statusCode: 300,
                            title: "操作提示",
                            message: a
                        })
                    }
                })
            })
    }),


    function (a) {
        a.fn.iProgressbar = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iProgressbar.methods[b];
                return d ? d(this, c) : this.progressbar(b, c)
            }
            this.each(function () {
                b = a.fn.iProgressbar.parseOptions(this, b),
                    a(this).progressbar(b)
            })
        },
            a.fn.iProgressbar.methods = {},
            a.fn.iProgressbar.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.progressbar.parseOptions(b), a.fn.iProgressbar.defaults, a.parser.parseOptions(b, ["id", "value"]), c);
                return setId(b, d)
            },
            a.fn.iProgressbar.defaults = {}
    }(jQuery),


    function (a) {
        function b(b) {
            var d = a(b),
                e = d.find("input[type=radio]"),
                f = "";
            e.each(function () {
                var b = a(this),
                    d = a("<span/>").css(c.span),
                    g = a("<label/>").css(c.label),
                    h = a("<a/>").data("lable", g).addClass("RadioA").css(c.radio).text(" "),
                    i = b.data("lable", g).attr("label");

                b.hide(),
                    b.after(g.text(i)),
                    b.wrap(d),
                    b.before(h),
                b.prop("checked") && (f = h),
                    g.click(function () {
                        !
                            function (b) {
                                b.prop("checked", !0),
                                    e.each(function () {
                                        var b = a(this),
                                            c = "-32px";
                                        b.prop("checked") && (c = "0"),
                                            b.prev().css("background-position", c + " 0")
                                    })
                            }(b)
                    }),
                    h.click(function () {
                        a(this).data("lable").click()
                    });
                if(g.parent("a.radio-gruop")){
                    $(g.parent("a.radio-gruop")).find('.label-radio').click(function(e){
                        e.preventDefault();
                        a(h).data("lable").click()
                    })
                }
            });
            if(f!='')f.css("background-position", "0 0")

        }
        var c = {
            radio: {
                cursor: "pointer",
                background: "transparent url('" + _tjp + "image/radiobox.png') no-repeat -32px 0",
                verticalAlign: "middle",
                height: "16px",
                width: "16px",
                display: "block"
            },
            span: {
                float: "left",
                display: "block",
                margin: "9px 4px 7px 4px"
            },
            label: {
                marginTop: "9px",
                marginRight: "8px",
                marginBottom: "9px",
                display: "block",
                float: "left",
                fontSize: "12px",
                cursor: "pointer"
            }
        };
        a.fn.iRadio = function (c, d) {
            return "string" == typeof c ? a.fn.iRadio.methods[c](this, d) : (c = c || {}, this.each(function () {
                if (a.data(this, "radio")) {
                    var d = a.data(this, "radio").options;
                    a.data(this, "radio", {
                        options: a.extend({}, d, c)
                    })
                } else a.data(this, "radio", {
                    options: a.extend({}, a.fn.iRadio.defaults, c)
                }),
                    b(this)
            }))
        },
            a.fn.iRadio.methods = {
                getValue: function (a) {
                    var b = a.find("input:checked"),
                        c = {};
                    return b.length && (c[b[0].name] = b[0].value),
                        c
                },
                check: function (a, b) {
                    if (b && "object" != typeof b) {
                        var c = a.find("input[value=" + b + "]");
                        c.prop("checked", !1).data("lable").click()
                    }
                }
            },
            a.fn.iRadio.defaults = {
                style: c
            },
        a.parser && a.parser.plugins && a.parser.plugins.push("iRadio")
    }(jQuery),


    function (a) {
        a.fn.iSearchbox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iSearchbox.methods[b];
                return d ? d(this, c) : this.searchbox(b, c)
            }
            this.each(function () {
                b = a.fn.iSearchbox.parseOptions(this, b),
                    a(this).searchbox(b)
            })
        },
            a.fn.iSearchbox.methods = {},
            a.fn.iSearchbox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.searchbox.parseOptions(b), a.fn.iSearchbox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iSearchbox.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iSlider = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iSlider.methods[b];
                return d ? d(this, c) : this.slider(b, c)
            }
            this.each(function () {
                b = a.fn.iSlider.parseOptions(this, b),
                    a(this).slider(b)
            })
        },
            a.fn.iSlider.methods = {},
            a.fn.iSlider.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.slider.parseOptions(b), a.fn.iSlider.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iSlider.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iSpinner = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iSpinner.methods[b];
                return d ? d(this, c) : this.spinner(b, c)
            }
            this.each(function () {
                b = a.fn.iSpinner.parseOptions(this, b),
                    a(this).spinner(b)
            })
        },
            a.fn.iSpinner.methods = {},
            a.fn.iSpinner.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.spinner.parseOptions(b), a.fn.iSpinner.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iSpinner.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iSplitbutton = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iSplitbutton.methods[b];
                return d ? d(this, c) : this.splitbutton(b, c)
            }
            this.each(function () {
                b = a.fn.iSplitbutton.parseOptions(this, b),
                    a(this).splitbutton(b)
            })
        },
            a.fn.iSplitbutton.methods = {},
            a.fn.iSplitbutton.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.splitbutton.parseOptions(b), a.fn.iSplitbutton.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iSplitbutton.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iSwitchbutton = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iSwitchbutton.methods[b];
                return d ? d(this, c) : this.switchbutton(b, c)
            }
            this.each(function () {
                b = a.fn.iSwitchbutton.parseOptions(this, b),
                    a(this).switchbutton(b)
            })
        },
            a.fn.iSwitchbutton.methods = {},
            a.fn.iSwitchbutton.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.switchbutton.parseOptions(b), a.fn.iSwitchbutton.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iSwitchbutton.defaults = {
                width: 153,
                value: "1"
            }
    }(jQuery),


    function (a) {
        a.fn.iTabs = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iTabs.methods[b];
                return d ? d(this, c) : this.tabs(b, c)
            }
            this.each(function () {
                b = a.fn.iTabs.parseOptions(this, b),
                    a(this).tabs(b)
            })
        },
            a.extend(a.fn.tabs.methods, {}),
            a.fn.iTabs.methods = {
                myAdd: function (b, c) {
                    return b.each(function () {
                        a(this).tabs("add", c)
                    })
                },
                bindDblclick: function (b, c) {
                    return b.each(function () {
                        var b = this;
                        a(this).children("div.tabs-header").find("ul.tabs").undelegate("li", "dblclick.tabs").delegate("li", "dblclick.tabs", function (d) {
                            if (c && "function" == typeof c) {
                                var e = a(this).text(),
                                    f = a(b).tabs("getTabIndex", a(b).tabs("getTab", e));
                                c(f, e)
                            }
                        })
                    })
                },
                unbindDblclick: function (b) {
                    return b.each(function () {
                        a(this).children("div.tabs-header").find("ul.tabs").undelegate("li", "dblclick.tabs")
                    })
                }
            },
            a.fn.iTabs.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.tabs.parseOptions(b), a.fn.iTabs.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iTabs.defaults = {
                refererTab: "",
                closable: !0,
                border: !0,
                fit: !0,
                initShow: !1,
                onSelect: function (b, c) {
                    var d = a(this).iTabs("options"),
                        e = (d.tab, d.parentGrid),
                        f = a("#" + d.id).tabs("getTab", c),
                        g = f.panel("options");

                    if (null != g.href || null != g.iframeHref) {
                        /*if (null != g.href && (g.tempHref = g.href, g.iframeHref = g.href, g.href = null), "object" == typeof e && (g.iframeHref = setPanelQueryParams(g.tempHref, e)), g.iframeHref.indexOf("{") == -1) {
                            var h = '<iframe src="' + g.iframeHref + '" scrolling="auto" frameborder="0" style="width:100%;height:99.5%;"></iframe>';
                            f.panel({
                                content: h
                            })
                        }*/
                    } else {
                        var i = a("#" + g.id).children('[data-toggle="gui-datagrid"]');
                        i.length > 0 ? a("#" + g.id).children('[data-toggle="gui-datagrid"]').each(function (b) {
                            var c = a(this),
                                d = getOptionsJson(c),
                                f = d.url;
                            d.url = "",
                                a(this).iDatagrid(d);
                            var h = a("#" + d.id);
                            "object" == typeof e && setGridQueryParams(e, "datagrid", d.id),
                                h.datagrid("options").url = f,
                                h.datagrid("load"),
                                g.dgOpts = d
                        }) : "object" == typeof g.dgOpts && ("object" == typeof e && setGridQueryParams(e, "datagrid", g.dgOpts.id), a("#" + g.dgOpts.id).datagrid("reload")),
                            a("#" + g.id).children('[data-toggle="gui-form"]').each(function (b) {
                                a(this).removeClass("hidden"),
                                    a(g.footer).removeClass("hidden")
                            })
                    }
                },
                onLoad: function (a) {},
                onBeforeLoad: function () {},
                onOpen: function () {}
            }
    }(jQuery),


    function (a) {
        a.fn.iTagbox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iTagbox.methods[b];
                return d ? d(this, c) : this.tagbox(b, c)
            }
            this.each(function () {
                b = a.fn.iTagbox.parseOptions(this, b),
                    a(this).tagbox(b)
            })
        },
            a.fn.iTagbox.methods = {},
            a.fn.iTagbox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.tagbox.parseOptions(b), a.fn.iTagbox.defaults, a.parser.parseOptions(b, ["id", "label", "value"]), c);
                return setId(b, d)
            },
            a.fn.iTagbox.defaults = {
                width: 450
            }
    }(jQuery),


    function (a) {
        a.fn.iTextbox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iTextbox.methods[b];
                return d ? d(this, c) : this.textbox(b, c)
            }

            this.each(function () {
                b = a.fn.iTextbox.parseOptions(this, b);
                if(b.height!=null&&b.height==34)
                {
                    b.height=32;
                }               /* null == b.height && (b.height = 32),*/
                a(this).textbox(b)
            })
        },
            a.fn.iTextbox.methods = {},
            a.fn.iTextbox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.textbox.parseOptions(b), a.fn.iTextbox.defaults, a.parser.parseOptions(b, ["id", "value"]), c);
                return setId(b, d)
            },
            a.fn.iTextbox.defaults = {
                width: 153,
                height:32
            }
    }(jQuery),


    function (a) {
        a.fn.iTimeaxis = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iTimeaxis.methods[b];
                return d ? d(this, c) : this.validatebox(b, c)
            }
            this.each(function () {
                b = a.fn.iTimeaxis.parseOptions(this, b),
                    a(this).addClass("gui-timeaxis-container"),
                    a(this).append('<div class="wrapper"><div class="light"><i></i></div><div class="gui-timeaxis-main"><h1 class="title">' + b.title + "</h1></div></div>");
                for (var c = 0; c < b.list.length; c++) {
                    a(".gui-timeaxis-main").append('<div class="year year' + c + '"></div>'),
                        a(".year" + c).append('<h2><a href="#">' + b.list[c].year + "<i></i></a></h2>"),
                        a(".year" + c).append('<div class="list"><ul class="ul' + c + '"></ul></div>');
                    for (var d = 0; d < b.list[c].list.length; d++) {
                        var e = b.list[c].list[d].highlight ? " highlight" : "";
                        a(".year .ul" + c).append('<li class="cls' + e + '"><p class="date">' + b.list[c].list[d].date + '</p><p class="intro">' + b.list[c].list[d].intro + '</p><p class="version">' + b.list[c].list[d].version + '</p><div class="more more' + c + d + '"></div></li>');
                        for (var f = 0; f < b.list[c].list[d].more.length; f++) a("ul .more" + c + d).append("<p>" + b.list[c].list[d].more[f] + "</p>")
                    }
                }
            }),
                a(function () {
                    a(".gui-timeaxis-main .year .list").each(function (b, c) {
                        var d = a(c),
                            e = d.find("ul");
                        d.height(e.outerHeight()),
                            e.css("position", "absolute")
                    }),
                        a(".gui-timeaxis-main .year>h2>a").click(function (b) {
                            b.preventDefault(),
                                a(this).parents(".year").toggleClass("close-year")
                        })
                })
        },
            a.fn.iTimeaxis.methods = {},
            a.fn.iTimeaxis.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.iTimeaxis.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iTimeaxis.defaults = {}
    }(jQuery),


    function (a) {
        a.fn.iTimespinner = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iTimespinner.methods[b];
                return d ? d(this, c) : this.timespinner(b, c)
            }
            this.each(function () {
                b = a.fn.iTimespinner.parseOptions(this, b),
                    a(this).timespinner(b)
            })
        },
            a.fn.iTimespinner.methods = {},
            a.fn.iTimespinner.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.timespinner.parseOptions(b), a.fn.iTimespinner.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iTimespinner.defaults = {}
    }(jQuery),
    $(function () {}),


    function (a) {
        a.fn.iTree = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iTree.methods[b];
                return d ? d(this, c) : this.tree(b, c)
            }
            this.each(function () {
                b = a.fn.iTree.parseOptions(this, b),
                    a(this).tree(b)
            })
        },
            a.fn.iTree.methods = {},
            a.fn.iTree.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.tree.parseOptions(b), a.fn.iTree.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iTree.defaults = {
                id: this.selector,
                expandUrl: "",
                animate: !0,
                onBeforeExpand: function (b, c) {
                    var d = a(this).iTree("options");
                    a(d.id).tree("options").url = d.expandUrl.replace("{pid}", b.id)
                },
                onClick: function (b) {
                    var c = a(this).iTree("options");
                    if ("postCodeItemIdAndRefreshDatagrid" == c.clickEvent) {
                        var d = a(c.refreshDatagridId),
                            e = d.datagrid("options").queryParams,
                            f = c.queryParams;
                        f.codeSetId = b.codesetid,
                            f.codeItemId = b.id,
                            f.pid = b.pid,
                            f.code = b.code,
                            d.datagrid("options").queryParams = a.extend({}, e, f),
                            d.datagrid("reload")
                    } else if ("postTreeParamsAndRefreshDatagrid" == c.clickEvent) {
                        var d = a(c.refreshDatagridId),
                            e = d.datagrid("options").queryParams;
                        f = c.queryParams,
                            f.codeSetId = b.codesetid,
                            f.codeItemId = b.id,
                            f.id = b.id,
                            f.pid = b.pid,
                            f.text = b.text,
                            f.code = b.code,
                            d.datagrid("options").queryParams = a.extend({}, e, f),
                            d.datagrid("reload")
                    } else "closed" == b.state ? a(c.id).tree("expand", b.target) : a(c.id).tree("collapse", b.target)
                },
                onLoadSuccess: function () {
                    var b = a(this).iTree("options");
                    setTimeout(function () {
                        var c = a(b.id).tree("getRoot");
                        a(b.id).tree("expand", c.target)
                    }, 1e3)
                }
            }
    }(jQuery),





    function (a) {
        a.fn.iValidatebox = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iValidatebox.methods[b];
                return d ? d(this, c) : this.validatebox(b, c)
            }
            this.each(function () {
                b = a.fn.iValidatebox.parseOptions(this, b),
                    a(this).validatebox(b)
            })
        },
            a.fn.iValidatebox.methods = {},
            a.fn.iValidatebox.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.validatebox.parseOptions(b), a.fn.iValidatebox.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iValidatebox.defaults = {},
            a.extend(a.fn.validatebox.defaults.rules, {
                equals: {
                    validator: function (b, c) {
                        return b == a(c[0]).val()
                    },
                    message: "两次输入的内容不一致"
                },
                cellphone: {
                    validator: function (a, b) {
                        return /^1[3-8]+\d{9}$/.test(a)
                    },
                    message: "请输入有效的手机号码"
                },
                telephone: {
                    validator: function (a, b) {
                        return /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\d3)|(\d{3}\-))?(1[358]\d{9})$)/.test(a)
                    },
                    message: "请输入有效的电话号码"
                },
                maxLength: {
                    validator: function (a, b) {
                        return a.length < b[0]
                    },
                    message: "输入内容长度必须小于{0}"
                },
                minLength: {
                    validator: function (a, b) {
                        return a.length > b[0]
                    },
                    message: "输入内容长度必须大于{0}"
                },
                idCard: {
                    validator: function (a) {
                        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a)
                    },
                    message: "请输入正确的身份证号"
                },
                postcode: {
                    validator: function (a) {
                        return /^[1-9]\d{5}(?!\d)$/.test(a)
                    },
                    message: "请输入正确的邮政编码"
                },
                date: {
                    validator: function (a) {
                        return /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(a)
                    },
                    message: "请输入正确的日期"
                },
                alphaDash: {
                    validator: function (a) {
                        return /^[\w-]+$/.test(a)
                    },
                    message: "输入内容只能是数字、字母、下划线或横线"
                },
                alphaNum: {
                    validator: function (a) {
                        return /^[a-z0-9]+$/i.test(a)
                    },
                    message: "输入内容只能是数字和字母"
                },
                number: {
                    validator: function (a) {
                        return /^\d+$/.test(a)
                    },
                    message: "输入内容只能是数字"
                },
                integer: {// 验证整数 可正负数
                    validator: function (value) {
                        //return /^[+]?[1-9]+\d*$/i.test(value);

                        return /^([+]?[0-9])|([-]?[0-9])+\d*$/i.test(value);
                    },
                    message: '请输入整数'
                },
            })
    }(jQuery),

    function (a) {
        a.fn.iWindow = function (b, c) {
            if ("string" == typeof b) {
                var d = a.fn.iWindow.methods[b];
                return d ? d(this, c) : this.window(b, c)
            }
            this.each(function () {
                b = a.fn.iWindow.parseOptions(this, b),
                    a(this).window(b)
            })
        },
            a.fn.iWindow.methods = {},
            a.fn.iWindow.parseOptions = function (b, c) {
                var d = a.extend({}, a.fn.window.parseOptions(b), a.fn.iWindow.defaults, a.parser.parseOptions(b, ["id"]), c);
                return setId(b, d)
            },
            a.fn.iWindow.defaults = {}
    }(jQuery);