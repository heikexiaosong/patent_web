// 首页加载完后，取消加载中状态
$(window).load(function () {
    $("#loading").fadeOut();
});

$(function () {
    $(".collapseMenu").on("click", function () {
        var p = $("#index_layout").iLayout("panel", "west")[0].clientWidth;
        if (p > 0) {
            $('#index_layout').iLayout('collapse', 'west');
            //$(this).children('span').removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
        } else {
            $('#index_layout').iLayout('expand', 'west');
            $(this).children('span').removeClass('fa-chevron-circle-right').addClass('fa-chevron-circle-left');
        }
    });

    //tab右键菜单
    $("#mm").iMenu({
        onClick: function (item) {
            tabMenuOprate(this, item.name);
        }
    });

    // 初始化accordion
    $("#RightAccordion").iAccordion({
        fit: true,
        border: false
    });


    $("#setThemes").unbind().bind('click',function () {
        $("#themeStyle").dialog({
            title: '设置主题风格',
        }).dialog('open');
    });

    // 保存主题
    $(".guiTheme").unbind().bind("click", function () {
        var theme = $('input[name="themes"]:checked').val();
        var menu = $('input[name="menustyle"]:checked').val();
        var topmenu = $('input[name="topmenu"]').is(':checked');
        $.post("/json/response/success.json", {
            theme: theme,
            menu: menu,
            topmenu: topmenu
        }, function (data) {
            changeTheme(theme);
            //window.location.reload();
        }, "json");
    });
    // 修改密码窗口
    $('#pwdDialog').iDialog({
        buttons: [{
            text: '确定',
            iconCls: 'fa fa-save',
            btnCls: 'gui-btn',
            handler: function () {
                if ($('#pwdDialog').form('validate')) {

                    if ($("#newPassword").val().length < 6) {
                        $.iMessager.alert('警告', '新密码长度不能小于6位', 'messager-warning');
                    } else {
                        var formData = DataBind.collectData($('#pwdDialog'));
                        if( formData["newPassword"]!=formData["newPasswordConfirm"] ){
                            $.iMessager.alert("提示信息", "两次密码输入不一致");
                            return false;
                        }
                        $.ajax({
                            url: 'kzzx/user/password/update',
                            type: 'post',
                            cache: false,
                            data: JSON.stringify(formData),
                            dataType: "json",
                            contentType:'application/json;charset=utf-8',
                            beforeSend: function () {
                                $.iMessager.progress({
                                    text: '正在操作...'
                                });
                            },
                            success: function (data, response, status) {
                                $.iMessager.progress('close');
                                if (data['success']) {
                                    $.iMessager.show({
                                        title: '提示',
                                        msg: '操作成功'
                                    });
                                    $("#pwdDialog").iDialog('close').form('reset');
                                    window.location.href ="logout";

                                } else {
                                    $.iMessager.alert('操作失败！', data['message']||'未知错误或没有任何修改，请重试！', 'messager-error');
                                }
                            }
                        });
                    }
                }
            }
        }],
        onOpen: function () {
            $(this).panel('refresh');
        }
    });


    // 修改登录背景图片

    
});

// Tab菜单操作
function tabMenuOprate(menu, type) {
    var allTabs = $('#tabs').iTabs('tabs');
    var allTabtitle = [];
    $.each(allTabs, function (i, n) {
        var opt = $(n).iPanel('options');
        if (opt.closable)
            allTabtitle.push(opt.title);
    });
    var curTabTitle = $(menu).data("tabTitle");
    var curTabIndex = $('#tabs').iTabs("getTabIndex", $('#tabs').iTabs("getTab", curTabTitle));
    switch (type) {
        case "1"://关闭当前
            if (curTabIndex > 0) {
                $('#tabs').iTabs("close", curTabTitle);
                return false;
                break;
            } else {
                $.iMessager.show({
                    title: '操作提示',
                    msg: '首页不允许关闭！'
                });
                break;
            }
        case "2"://全部关闭
            for (var i = 0; i < allTabtitle.length; i++) {
                $('#tabs').iTabs('close', allTabtitle[i]);
            }
            break;
        case "3"://除此之外全部关闭
            for (var i = 0; i < allTabtitle.length; i++) {
                if (curTabTitle != allTabtitle[i])
                    $('#tabs').iTabs('close', allTabtitle[i]);
            }
            $('#tabs').iTabs('select', curTabTitle);
            break;
        case "4"://当前侧面右边
            for (var i = curTabIndex; i < allTabtitle.length; i++) {
                $('#tabs').iTabs('close', allTabtitle[i]);
            }
            $('#tabs').iTabs('select', curTabTitle);
            break;
        case "5": //当前侧面左边
            for (var i = 0; i < curTabIndex - 1; i++) {
                $('#tabs').iTabs('close', allTabtitle[i]);
            }
            $('#tabs').iTabs('select', curTabTitle);
            break;
        case "6": //刷新
            var refresh_tab = $('#tabs').iTabs('getSelected');
            var refresh_iframe = refresh_tab.find('iframe')[0];
            refresh_iframe.contentWindow.location.href = refresh_iframe.src;
            //$('#tabs').trigger(gui.eventType.initUI.base);
            break;
    }

}

/**
 * 更换页面风格
 * @param guiThemeName
 */
function changeTheme(themeName) {/* 更换主题 */
    var $dynamicTheme = $('#dynamicTheme');
    var themeHref = $dynamicTheme.attr('href');
    var themeHrefNew = themeHref.substring(0, themeHref.indexOf('themes')) + 'themes/default/gui.' + themeName + '.css';
    // 更换主页面风格
    $dynamicTheme.attr('href', themeHrefNew);

    // 更换iframe页面风格
    /*var $iframe = $('iframe');
    if ($iframe.length > 0) {
        for (var i = 1; i < $iframe.length; i++) {
            var ifr = $iframe[i];
            var $iframeDynamicTheme = $(ifr).contents().find('#dynamicTheme');
            var iframeThemeHref = $iframeDynamicTheme.attr('href');
            var iframeThemeHrefNew = iframeThemeHref.substring(0, iframeThemeHref.indexOf('themes')) + 'themes/default/gui.' + themeName + '.css';
            $iframeDynamicTheme.attr('href', iframeThemeHrefNew);
        }
    }*/

    $.cookie('guiThemeName', themeName, {
        expires: 7,
        path: '/'
    });
}
if ($.cookie('guiThemeName')) {
    changeTheme($.cookie('guiThemeName'));
}

// 退出系统
function logout() {
    $.iMessager.confirm('提示', '确定要退出吗?', function (r) {
        if (r) {
            $.iMessager.progress({
                text: '正在退出中...'
            });
            window.location.href ="logout";
        }
    });
}

// 生成左侧导航菜单
function generateMenu(menuId, systemName) {
    if (menuId == "") {
        $.iMessager.show({title: '操作提示', msg: '还未设置该系统对应的菜单ID！'});
    } else {
        $(".panel-header .panel-title:first").html(systemName);
        var allPanel = $("#RightAccordion").iAccordion('panels');
        var size = allPanel.length;
        if (size > 0) {
            for (i = 0; i < size; i++) {
                var index = $("#RightAccordion").iAccordion('getPanelIndex', allPanel[i]);
                $("#RightAccordion").iAccordion('remove', 0);
            }
        }

        var url = "./json/menu/menu_" + menuId + ".json";
        $.get(
            url, {"levelId": "2"}, // 获取第一层目录
            function (data) {
                if (data == "0") {
                    window.location = "/Account";
                }
                $.each(data, function (i, e) {// 循环创建手风琴的项
                    var pid = e.pid;
                    var isSelected = i == 0 ? true : false;
                    $('#RightAccordion').iAccordion('add', {
                        fit: false,
                        title: e.text,
                        content: "<ul id='tree" + e.id + "' ></ul>",
                        border: false,
                        selected: isSelected,
                        iconCls: e.iconCls
                    });
                    $.parser.parse();
                    $.get("./json/menu/menu_" + e.id + ".json", function (data) {// 循环创建树的项
                        $("#tree" + e.id).tree({
                            data: data,
                            lines: false,
                            animate: true,
                            onBeforeExpand: function (node, param) {
                                $("#tree" + e.id).tree('options').url = "./json/menu/menu_" + node.id + ".json";
                            },
                            onClick: function (node) {
                                if (node.url) {
                                    /*if(typeof node.attributes != "object") {
                                     node.attributes = $.parseJSON(node.attributes);
                                     }*/
                                    addTab(node);
                                } else {
                                    if (node.state == "closed") {
                                        $("#tree" + e.id).tree('expand', node.target);
                                    } else if (node.state == 'open') {
                                        $("#tree" + e.id).tree('collapse', node.target);
                                    }
                                }
                            }
                        });
                    }, 'json');
                });
            }, "json"
        );
    }
}

//打开Tab窗口
function addTab(params) {
    var iframe = '<iframe src="' + params.url + '" scrolling="auto" frameborder="0" style="width:100%;height:100%;"></iframe>';
    var t = $('#tabs');
    var $selectedTab = t.iTabs('getSelected');
    var selectedTabOpts = $selectedTab.iPanel('options');
    var opts = {
        id: getRandomNumByDef(),
        refererTab: {},
        title: params.text,
        closable: typeof(params.closable) != "undefined" ? params.closable : true,
        iconCls: params.iconCls ? params.iconCls : 'fa fa-file-text-o',
        content: iframe,
        //href: params.url,
        border: params.border || true,
        fit: true
        //cls: 'leftBottomBorder'
    };
    if (t.iTabs('exists', opts.title)) {
        t.iTabs('select', opts.title);
    } else {
        var lastMenuClickTime = $.cookie("menuClickTime");
        var nowTime = new Date().getTime();
        if ((nowTime - lastMenuClickTime) >= 500) {
            $.cookie("menuClickTime", new Date().getTime());
            t.iTabs('add', opts);
        } else {
            $.iMessager.show({
                title: '温馨提示',
                msg: '操作过快，请稍后重试！'
            });
        }
    }
}

function addParentTab(options) {
    var src, title;
    src = options.href;
    title = options.title;

    var iframe = '<iframe src="' + src + '" frameborder="0" style="border:0;width:100%;height:100%;"></iframe>';
    parent.$('#tabs').iTabs("add", {
        title: title,
        content: iframe,
        closable: true,
        iconCls: 'fa fa-th',
        border: true
    });
}

function modifyPwd() {
    $("#pwdDialog").iDialog('open');
}

function loginBgSetting() {
    $('<div id="loginBgSettingDlg" style="position:relative">').iDialog({
        width:800,
        height:600,
        title:'设置登录背景图片',
        buttons: [{
            text: '确定',
            iconCls: 'fa fa-save',
            btnCls: 'gui-btn',
            handler: function () {
                $.ajax({
                    url: 'public/login/bgimage/upload',
                    type: 'POST',
                    cache: false,
                    data: new FormData($('#loginBgSettingDlg')[0]),
                    processData: false,
                    contentType: false
                }).done(function(res) {
                }).fail(function(res) {});

            }
        }],
        onOpen: function () {
           /*  $(this).panel('refresh');*/
            var div=$(' <form class="loginBgSettingDlg" class="hidden" enctype="multipart/form-data"\n' +
                '          data-options="title: \'设置登录背景图片\',\n' +
                '      iconCls:\'fa \',\n' +
                '      width: 800,\n' +
                '      height: 600">\n' +
                '        <div class="gui-fluid editTable">\n' +
                '            <div class="gui-row">\n' +
                '                <div class="gui-col-sm12">\n' +
                '                    <img src="public/login/bgimage" height="400" width="760">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="gui-row">\n' +
                '                <div class="gui-col-sm12">\n' +
                '                    <label class="gui-form-label">背景图片：</label>\n' +
                '                    <div class="gui-input-block">\n' +
                '                        <input type="text" name="bgImageFile" id="bgImageFile" data-toggle="gui-filebox" data-options="required:true" style="width: 100%">\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </form>');
            $('#loginBgSettingDlg').append(div);
            div.find("#bgImageFile").iFilebox();
        },
        onClose: function () {
            $(this).form("clear");
            $(this).iDialog('destroy');
        }

    });
    $('#loginBgSettingDlg').iDialog('open');
}

function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}
//退出全屏方法
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExiFullscreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();

    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

