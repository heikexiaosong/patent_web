requirejs.config({
    paths: {
        jquery: '../easyui/jquery.min',
        easyui: '../easyui/jquery.easyui.min',
        zhCN: '../easyui/locale/easyui-lang-zh_CN',
        http: 'tools/http'
    }
});

requirejs(['jquery', 'zhCN',  'easyui'], function($, zhCN, easyui ) {
    console.log( $ ); // OK
    $.messager.alert('提示','hello,world!');
});
