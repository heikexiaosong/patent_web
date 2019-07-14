<head>
<link rel="stylesheet" media="screen" href="../../../thirdparty/handsontable/handsontable.full.css" />


    <style>
        /*! CSS Used from: https://docs.google.com/static/spreadsheets2/client/css/1044422278-waffle_k_ltr.css */
        .goog-inline-block{position:relative;display:-moz-inline-box;display:inline-block;}
        ::-webkit-scrollbar{height:16px;overflow:visible;width:16px;}
        ::-webkit-scrollbar-button{height:0;width:0;}
        ::-webkit-scrollbar-track{background-clip:padding-box;border:solid transparent;border-width:0 0 0 4px;}
        ::-webkit-scrollbar-track:hover{background-color:rgba(0,0,0,.05);box-shadow:inset 1px 0 0 rgba(0,0,0,.1);}
        ::-webkit-scrollbar-track:active{background-color:rgba(0,0,0,.05);box-shadow:inset 1px 0 0 rgba(0,0,0,.14),inset -1px 0 0 rgba(0,0,0,.07);}
        ::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:solid transparent;border-width:1px 1px 1px 6px;min-height:28px;padding:100px 0 0;box-shadow:inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);}
        ::-webkit-scrollbar-thumb:hover{background-color:rgba(0,0,0,.4);box-shadow:inset 1px 1px 1px rgba(0,0,0,.25);}
        ::-webkit-scrollbar-thumb:active{background-color:rgba(0,0,0,0.5);box-shadow:inset 1px 1px 3px rgba(0,0,0,0.35);}
        ::-webkit-scrollbar-corner{background:transparent;}
        .docs-material .docs-icon{height:18px;width:18px;margin:1px 2px 2px 1px;}
        .docs-material .docs-icon-img:before{content:url(//ssl.gstatic.com/docs/common/material_common_sprite96.svg);}
        .docs-gm .docs-material .docs-icon-img:before{content:url(//ssl.gstatic.com/docs/common/material_common_sprite96_grey_medium.svg);}
        .docs-material .docs-icon-img{content:url(//ssl.gstatic.com/docs/common/material_common_sprite96.svg);}
        .docs-gm .docs-material .docs-icon-img{content:url(//ssl.gstatic.com/docs/common/material_common_sprite96_grey_medium.svg);}
        .docs-material .docs-icon-img-container{height:2146px;position:absolute;width:118px;}
        .docs-material .docs-icon-insert-formula{left:-36px;top:-1860px;}
        .jfk-progressBar-blocking .progress-bar-thumb{background-color:#6188f5;height:5px;}
        .jfk-progressBar-blocking .progress-bar-thumb{-webkit-animation:jfk-progressBar-bg 0.8s linear 0s infinite;-moz-animation:jfk-progressBar-bg 0.8s linear 0s infinite;-o-animation:jfk-progressBar-bg 0.8s linear 0s infinite;animation:jfk-progressBar-bg 0.8s linear 0s infinite;background-position:0 0;background-repeat:repeat-x;background-size:16px 8px;background-color:#6188f5;background-image:-webkit-linear-gradient(315deg,transparent,transparent 33%,rgba(0,0,0,.12) 33%,rgba(0,0,0,.12) 66%,transparent 66%,transparent);background-image:-moz-linear-gradient(315deg,transparent,transparent 33%,rgba(0,0,0,.12) 33%,rgba(0,0,0,.12) 66%,transparent 66%,transparent);background-image:-ms-linear-gradient(315deg,transparent,transparent 33%,rgba(0,0,0,.12) 33%,rgba(0,0,0,.12) 66%,transparent 66%,transparent);background-image:-o-linear-gradient(315deg,transparent,transparent 33%,rgba(0,0,0,.12) 33%,rgba(0,0,0,.12) 66%,transparent 66%,transparent);background-image:linear-gradient(315deg,transparent,transparent 33%,rgba(0,0,0,.12) 33%,rgba(0,0,0,.12) 66%,transparent 66%,transparent);}
        .docs-icon{direction:ltr;text-align:left;height:21px;overflow:hidden;vertical-align:middle;width:21px;}
        .docs-icon-img:before{content:url(//ssl.gstatic.com/docs/common/jfk_sprite186.png);}
        .docs-icon-img{*background:url(//ssl.gstatic.com/docs/common/jfk_sprite186.png);}
        .docs-icon-img-container{height:4167px;position:absolute;width:42px;}
        .docs-icon-insert-formula{left:0;top:-738px;}
        @media screen and (-webkit-min-device-pixel-ratio:2){
            .docs-icon-img{content:url(//ssl.gstatic.com/docs/common/jfk_sprite_hdpi124.png);}
            .docs-icon-img-container{height:4380px;position:absolute;width:42px;}
            .docs-icon-insert-formula{left:0;top:-3681px;}
        }
        .docs-gm-sidebars ::-webkit-scrollbar-track{box-shadow:none;margin:0 4px;}
        .docs-gm-sidebars ::-webkit-scrollbar-track:hover{box-shadow:none;background:none;}
        .docs-gm-sidebars ::-webkit-scrollbar-thumb{border-style:solid;border-color:transparent;border-width:4px;background-color:#dadce0;border-radius:8px;box-shadow:none;}
        .docs-gm-sidebars ::-webkit-scrollbar-thumb:hover{background-color:#80868b;}
        .docs-gm-sidebars ::-webkit-scrollbar-thumb:active{background-color:#5f6368;}
        .cell-input{width:100%;height:100%;margin:0;outline:none;cursor:text;-webkit-user-modify:read-write-plaintext-only;white-space:pre-wrap;-webkit-transform:translateZ(0);background-color:white;}
        ::-ms-clear,::-ms-reveal{display:none;}
        #formula-bar{padding:4px 0;background:#e5e5e5;margin-right:auto;}
        #t-formula-bar-label{vertical-align:middle;color:#444;padding:0 8px;}
        #t-formula-bar-input-container{width:100%;padding:0;}
        #t-formula-bar-input{resize:none;border:1px #7f9db9 solid;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-family:var(--docs-material-font-family,Roboto,RobotoDraft,Helvetica,Arial,sans-serif);font-size:13px;background-color:#ffffff;}
        #t-formula-bar-input .cell-input{word-wrap:break-word;-webkit-nbsp-mode:space;-webkit-line-break:after-white-space;}
        #formula-bar{background:#fff;border-bottom:1px solid #c0c0c0;height:23px;padding:0;position:relative;}
        #t-formula-bar-input{border:none;bottom:4px;left:0;line-height:13px;position:absolute;right:0;top:4px;}
        #t-formula-bar-label{float:left;opacity:.55;padding:0;position:relative;text-align:center;top:50%;transform:translateY(-50%);width:45px;}
        .docs-icon-insert-formula{margin-top:-1px;}
        .docs-material .docs-icon-insert-formula{margin-top:0;opacity:.70;}
        #t-formula-bar-input-container{height:100%;padding:0 10px;overflow:hidden;width:auto;}
        #t-formula-bar-input-container>div{height:100%;overflow-x:hidden;overflow-y:auto;position:relative;}
        #t-formula-bar-progress-bar{float:right;margin-top:7px;padding:0;width:161px;}
        #t-formula-bar-progress-bar .progress-bar-horizontal{width:146px;height:5px;border:1px solid #999;padding:1px;background-color:#fff;}
        #t-formula-bar-progress-bar .progress-bar-thumb{background-color:#ccc;}
        .formula-bar-separator{float:left;width:1px;height:100%;position:relative;}
        .formula-bar-separator>div{background-color:#ccc;bottom:3px;left:0;position:absolute;right:0;top:3px;width:1px;}
        /*! CSS Used keyframes */
        @-webkit-keyframes jfk-progressBar-bg{0%{background-position:0 0;}100%{background-position:-16px 0;}}
        @-moz-keyframes jfk-progressBar-bg{0%{background-position:0 0;}100%{background-position:-16px 0;}}
        @-o-keyframes jfk-progressBar-bg{0%{background-position:0 0;}100%{background-position:-16px 0;}}
        @keyframes jfk-progressBar-bg{0%{background-position:0 0;}100%{background-position:-16px 0;}}
    </style>

</head>


<div id="formula-bar"><div id="t-formula-bar-label"><div class="docs-icon goog-inline-block"><div class="docs-icon-img-container docs-icon-img docs-icon-insert-formula"></div></div></div><div class="formula-bar-separator"><div></div></div><div id="t-formula-bar-progress-bar" style="display:none;"><div id="t-formula-bar-progress-bar-inner" class="jfk-progressBar-blocking progress-bar-horizontal" role="progressbar" aria-live="polite" aria-valuenow="100"><div class="progress-bar-thumb" style="width: 100%;"></div></div></div><div id="t-formula-bar-input-container"><div dir="ltr"><div spellcheck="false" aria-hidden="false" id="t-formula-bar-input"><div class="cell-input" tabindex="0" role="combobox" contenteditable="true" docs-unhandledkeys="" dir="ltr" aria-autocomplete="list">L_ITEM<br></div></div></div></div></div>

<div  id="handsontable" style="height: 300px"></div>

<div  id="append" style="height: 300px"></div>


<a href="javascript: (0);" onclick="aa()">dddd</a>

<script language="JavaScript" type="text/javascript" src="../../../easyui/jquery.min.js" charset="utf-8"></script>
<script language="JavaScript" type="text/javascript" src="../../../js/common/http.js" charset="utf-8"></script>
<script language="JavaScript" type="text/javascript" src="../../../thirdparty/handsontable/handsontable.full.js"></script>
<script language="JavaScript" type="text/javascript" src="../../../thirdparty/handsontable/languages/all.js"></script>
<script>

    var bootstrapData = {"structure":{"lmt":1552380392294,"lma":false,"lms":false},"gridId":0,"changes":{"firstchunkid":"0","firstchunk":[[25813757,[null,[null,"0",0,17,0,10],{"2":[{"1":67108350,"2":513,"3":{"1":0},"12":0}]},null,[{"2":3,"3":[null,2,"ERP"],"6":0},{},{"2":3,"3":[null,2,"SJZX"],"6":0},{},{},{},{"2":3,"3":[null,2,"JHY"],"6":0},{},{"25":1},{},{"2":3,"3":[null,2,"L_SAMPLING_DETAIL"],"6":0},{"2":3,"3":{"1":3,"3":1146803.0},"6":0},{"25":4},{"25":5},{},{},{"2":3,"3":[null,2,"t_erp_khsj"],"6":0},{"2":3,"3":{"1":3,"3":1393.0},"6":0},{"25":8},{"25":9},{"2":3,"3":[null,2,"ITEM"],"6":0},{"2":3,"3":{"1":3,"3":117188.0},"6":0},{"25":12},{"25":13},{},{},{"2":3,"3":[null,2,"t_erp_fgsj"],"6":0},{"2":3,"3":{"1":3,"3":503.0},"6":0},{"25":16},{"25":17},{"2":3,"3":[null,2,"ITEM_CLASS"],"6":0},{"2":3,"3":{"1":3,"3":12908.0},"6":0},{"25":20},{"25":21},{},{},{"2":3,"3":[null,2,"t_erp_jmsj"],"6":0},{"2":3,"3":{"1":3,"3":678.0},"6":0},{"25":24},{"25":25},{"2":3,"3":[null,2,"L_CODE_DETAIL"],"6":0},{"2":3,"3":{"1":3,"3":2536.0},"6":0},{"25":28},{"25":29},{},{},{"2":3,"3":[null,2,"t_erp_jtsj"],"6":0},{"2":3,"3":{"1":3,"3":1600.0},"6":0},{"25":32},{"25":33},{"2":3,"3":[null,2,"L_ITEM"],"6":0},{"2":3,"3":{"1":3,"3":45592.0},"6":0},{"25":36},{"25":37},{},{},{"2":3,"3":[null,2,"t_erp_jlsj"],"6":0},{"2":3,"3":{"1":3,"3":0.0},"6":0},{"25":40},{"25":41},{"2":3,"3":[null,2,"L_ITEMCLASS_CAQ"],"6":0},{"2":3,"3":{"1":3,"3":340.0},"6":0},{"25":44},{"25":45},{},{},{"2":3,"3":[null,2,"t_erp_msj"],"6":0},{"2":3,"3":{"1":3,"3":1272.0},"6":0},{"25":48},{"25":49},{"2":3,"3":[null,2,"SAL_ZBDB_ACCTZ"],"6":0},{"2":3,"3":{"1":3,"3":528514.0},"6":0},{"25":52},{"25":53},{},{},{"2":3,"3":[null,2,"t_erp_sshsj"],"6":0},{"2":3,"3":{"1":3,"3":111.0},"6":0},{"25":56},{"25":57},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_stsj"],"6":0},{"2":3,"3":{"1":3,"3":170.0},"6":0},{"25":60},{"25":61},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_shssj"],"6":0},{"2":3,"3":{"1":3,"3":531.0},"6":0},{"25":64},{"25":65},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_klsj"],"6":0},{"2":3,"3":{"1":3,"3":2770.0},"6":0},{"25":68},{"25":69},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_ys"],"6":0},{"25":41},{"25":72},{"25":41},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_thjsj"],"6":0},{"2":3,"3":{"1":3,"3":194.0},"6":0},{"25":76},{"25":77},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_mksj"],"6":0},{"25":41},{"25":80},{"25":41},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_erp_gmhsj"],"6":0},{"2":3,"3":{"1":3,"3":2304.0},"6":0},{"25":84},{"25":85},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_zpy_stz"],"6":0},{"2":3,"3":{"1":3,"3":683.0},"6":0},{"25":88},{"25":89},{},{},{},{},{},{},{"2":3,"3":[null,2,"t_zpy_gpz"],"6":0},{"2":3,"3":{"1":3,"3":4057.0},"6":0},{"25":92},{"25":93}]]],[29921628,[null,"0",1,[[null,0,1]],{"1":[[null,0,0,189]]}]],[29921628,[null,"0",1,[[null,1,2]],{"1":[[null,0,0,146]]}]],[29921628,[null,"0",1,[[null,2,3]],{"1":[[null,0,0,173]]}]],[29921628,[null,"0",1,[[null,3,4]],{"1":[[null,0,0,129]]}]],[25104121,[null,0,1,{},null,null,1,{},1,{},1,{},1,{}]],[25104121,[null,2,1,{},null,null,1,{},1,{},1,{},1,{}]],[25104121,[null,1,1,{},null,null,1,{},1,{},1,{},1,{}]]],"topsnapshot":[[21350203,[null,0,0,"0",{"1":[[null,0,0,"Sheet1"],{"1":6,"2":0,"9":0},{"1":2,"2":0,"5":0},{"1":3,"2":0,"6":0},{"1":4,"2":0,"7":0},{"1":5,"2":0,"8":0},{"1":7,"2":0,"10":{"1":0}}]},1000,26]],[25104121,[null,0,1,{},null,null,1,{},1,{},1,{},1,{}]],[25104121,[null,2,1,{},null,null,1,{},1,{},1,{},1,{}]],[25104121,[null,1,1,{},null,null,1,{},1,{},1,{},1,{}]],[28950036,{"1":{"1":[[null,3,0,null,"Asia/Shanghai"],[null,2,0,"en_US"],{"1":4,"2":0,"5":1},{"1":10,"2":0,"11":21},{"1":11,"2":0,"12":100},{"1":9,"2":0,"10":{"2":256,"11":0}}]}}],[34070425,[null,"dt479678297",[null,"0",0,8,0,4],9,{"2":128,"10":[null,1.0,1,"V4",[null,null,[null,"0",0,1,0,4],[[null,"ERP",null,11,1],[null,"",null,9,1],[null,"SJZX",null,11,1],[null,"",null,9,1]],[[null,0,null,1,7]]]]}]],[34070425,[null,"dt1976176928",[null,"0",0,17,6,10],9,{"2":128,"10":[null,1.0,1,"V4",[null,null,[null,"0",0,1,6,10],[[null,"JHY",null,11,1],[null,"",null,9,1],[null,"SJZX",null,11,1],[null,"",null,9,1]],[[null,0,null,1,16]]]]}]],[38362570,[null,"dbExecutionInfo",{"2":{"1":0.0,"4":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"},"3":{}},null,0]]],"revision":47,"modelVersion":17,"featureVersion":17,"sid":"4165ba2c92f9bf54","revisionhmac":"wDkM4JJ2PifvNQ"}}; var mergedConfig = {"id":"4165ba2c92f9bf54","appConfig":{"pathPrefix":"/spreadsheets/d/1eD1Te0SVxew-YHFR6vCgx0QHF8B3jtd9wzAkG4uRJo0","staticResourcePathPrefix":"","cosmoId":"1eD1Te0SVxew-YHFR6vCgx0QHF8B3jtd9wzAkG4uRJo0","backingCosmoId":"1eD1Te0SVxew-YHFR6vCgx0QHF8B3jtd9wzAkG4uRJo0","oui":"00157426215865940999","editable":true,"commentable":true,"readComments":true,"accessCapabilitiesJspbFormat":"[\"docs.security.access_capabilities\",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]\n","objectImageUrlPath":"embed/oimg","syncMap":"[{\"data\":{\"value\":[]},\"keyPath\":[\"syncMap\",\"applicationFonts\",\"5\"],\"state\":{\"hashValue\":\"00000000\"}},{\"data\":{\"value\":[]},\"keyPath\":[\"syncMap\",\"domainFonts\",\"0\"],\"state\":{\"hashValue\":\"00000000\"}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_instant_mentions\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"familyList\":[\"Alegreya\",\"Amatic SC\",\"Bree Serif\",\"Calibri\",\"Cambria\",\"Merriweather\",\"Permanent Marker\",\"Pinyon Script\",\"Playfair Display\",\"Proxima Nova\",\"Roboto\",\"Roboto Mono\",\"Ultra\",\"Varela Round\"],\"recentlyUsedFamilyList\":[],\"transitionedFamilyList\":[],\"hasTransitioned\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-fonts\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-hats_dc\"],\"state\":{\"timestamp\":1531382023795895}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-hats_st\"],\"state\":{\"timestamp\":1531382023795895}},{\"data\":{\"value\":[]},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-hats_sth\"],\"state\":{\"timestamp\":1531382023795895}},{\"data\":{},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-global_promos\",\"0\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"mae-show_addons_menu_promo\"],\"state\":{\"timestamp\":1395766150494959}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-aips\"],\"state\":{\"timestamp\":1444355002890177}},{\"data\":{},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-asp\",\"5\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-ftbdct\"],\"state\":{\"timestamp\":1444355002890177}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-dbs\"],\"state\":{\"timestamp\":1444355002890177}},{\"data\":{\"view\":2},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-dv\",\"1\"],\"state\":{\"timestamp\":1444355002890177}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-ht\"],\"state\":{\"timestamp\":1444355002890177}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-wws\"],\"state\":{\"timestamp\":1444355002890177}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-etg-lvt\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"viewMode\":2},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-chrome\",\"1\"],\"state\":{\"timestamp\":1551404352090062}},{\"data\":{\"viewMode\":2},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-chrome\",\"5\"],\"state\":{\"timestamp\":1551404352090062}},{\"data\":{\"wordList\":[]},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-user_dictionary\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_screen_magnifier\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-screenreader\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_braille\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-mute_collaborators\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"openStatus\":1,\"lastOpenedGuestAppId\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-companion\",\"5\"],\"state\":{\"timestamp\":1535430283729701}},{\"data\":{\"openStatus\":1,\"lastOpenedGuestAppId\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-companion\",\"1\"],\"state\":{\"timestamp\":1535430283729701}},{\"data\":{},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ap\",\"5\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-EnableAutosuggest\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayFormulaBar\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayFunctionHelp\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayFilterViewPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayLocalFilterViewPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-EnableFormulaPreview\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-AlwaysDisplayEnglishFunctionNames\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ViewedNewUserLocalizedFunctionNamesPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-NeedsExistingUserLocalizedFunctionNamesPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayAutovisPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayExploreV2Promo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayShortcutOverridePromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayChartEditorPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayExplorePivotPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayExplorePivotPromoV2\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayBigQueryWelcomeDialog\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayApril2018Promo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-DisplayLegacyShortcutsPromo\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-EnableLegacyShortcutsV2\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"proto\":\"[]\\n\"},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-MRUNumberFormats\"],\"state\":{\"timestamp\":1552380491418000}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ClickCountDataConnectors\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ClickCountTrimWhitespace\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ClickCountRemoveDuplicates\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ClickCountInsertSlicer\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"ritz-ClickCountThemeMenu\"],\"state\":{\"timestamp\":1535353679001390}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-display_density\"],\"state\":{\"timestamp\":1552380491418000}}]","downloadable":true,"isSaved":true,"docName":"Untitled spreadsheet","isDevelopmentCopy":false,"email":"heikexiaosong@gmail.com","userDashDom":"","userPathPrefix":"","forceBidiControls":false,"uiLocale":"en","gaiaSessionId":"0","authKey":"","imgPath":"https://ssl.gstatic.com/docs/spreadsheets/","isRtlShell":false,"hasRevisionsAccess":true,"userCapabilities":{"CAN_COPY":true,"CAN_RENAME":true,"CAN_TRASH":true},"isShadowDocument":false,"fileLockedReason":0,"isNonGoogleCollaborator":false,"gvizChartsTemplateUrl":"//about:blank","jsCompileModeIsRaw":false,"moduleUris":{"core":["/static/spreadsheets2/client/js/4131586888-waffle_js_prod_core.js"],"answers":["/static/spreadsheets2/client/js/1840628502-waffle_js_prod_answers.js"],"impressions":["/static/spreadsheets2/client/js/3175449554-waffle_js_prod_impressions.js"],"shell":["/static/spreadsheets2/client/js/3493406017-waffle_js_prod_shell.js"],"slicereditor":["/static/spreadsheets2/client/js/3331733509-waffle_js_prod_slicereditor.js"],"slicers":["/static/spreadsheets2/client/js/3594346434-waffle_js_prod_slicers.js"],"workbookthemeeditor":["/static/spreadsheets2/client/js/535325909-waffle_js_prod_workbookthemeeditor.js"],"inputtools":["/static/spreadsheets2/client/js/992069605-waffle_js_prod_inputtools.js"],"postshellbase":["/static/spreadsheets2/client/js/2771809216-waffle_js_prod_postshellbase.js"],"analytics":["/static/spreadsheets2/client/js/3673454871-waffle_js_prod_analytics.js"],"approvals":["/static/spreadsheets2/client/js/2946680759-waffle_js_prod_approvals.js"],"assistant":["/static/spreadsheets2/client/js/623799711-waffle_js_prod_assistant.js"],"banding":["/static/spreadsheets2/client/js/2069540363-waffle_js_prod_banding.js"],"charteditor":["/static/spreadsheets2/client/js/2725284538-waffle_js_prod_charteditor.js"],"charts":["/static/spreadsheets2/client/js/4234085860-waffle_js_prod_charts.js"],"companion":["/static/spreadsheets2/client/js/724538779-waffle_js_prod_companion.js"],"conditionalformat":["/static/spreadsheets2/client/js/2500563221-waffle_js_prod_conditionalformat.js"],"dataconnector":["/static/spreadsheets2/client/js/1830244391-waffle_js_prod_dataconnector.js"],"datepicker":["/static/spreadsheets2/client/js/1907959544-waffle_js_prod_datepicker.js"],"dbrecord":["/static/spreadsheets2/client/js/3254320577-waffle_js_prod_dbrecord.js"],"dbsource":["/static/spreadsheets2/client/js/331371904-waffle_js_prod_dbsource.js"],"dialogs":["/static/spreadsheets2/client/js/2301846154-waffle_js_prod_dialogs.js"],"docos":["/static/spreadsheets2/client/js/2211566870-waffle_js_prod_docos.js"],"drawings":["/static/spreadsheets2/client/js/2452787040-waffle_js_prod_drawings.js"],"filterbar":["/static/spreadsheets2/client/js/3944425518-waffle_js_prod_filterbar.js"],"findreplace":["/static/spreadsheets2/client/js/4078068998-waffle_js_prod_findreplace.js"],"formbar":["/static/spreadsheets2/client/js/653494561-waffle_js_prod_formbar.js"],"functionhelpcontent":["/static/spreadsheets2/client/js/3699827142-waffle_js_prod_functionhelpcontent.js"],"goto":["/static/spreadsheets2/client/js/3721981662-waffle_js_prod_goto.js"],"hats":["/static/spreadsheets2/client/js/27199271-waffle_js_prod_hats.js"],"links":["/static/spreadsheets2/client/js/4108057264-waffle_js_prod_links.js"],"namedrangespane":["/static/spreadsheets2/client/js/2763114634-waffle_js_prod_namedrangespane.js"],"offline":["/static/spreadsheets2/client/js/2698046654-waffle_js_prod_offline.js"],"organize":["/static/spreadsheets2/client/js/3581787535-waffle_js_prod_organize.js"],"pickerbase":["/static/spreadsheets2/client/js/1669531529-waffle_js_prod_pickerbase.js"],"printing":["/static/spreadsheets2/client/js/2814362097-waffle_js_prod_printing.js"],"rangeprotection":["/static/spreadsheets2/client/js/3006728115-waffle_js_prod_rangeprotection.js"],"revisions":["/static/spreadsheets2/client/js/4137418806-waffle_js_prod_revisions.js"],"ritzfilter":["/static/spreadsheets2/client/js/1735515488-waffle_js_prod_ritzfilter.js"],"ritzmaestro":["/static/spreadsheets2/client/js/1912852436-waffle_js_prod_ritzmaestro.js"],"ritzprotectionpane":["/static/spreadsheets2/client/js/2753690945-waffle_js_prod_ritzprotectionpane.js"],"screenmagnifier":["/static/spreadsheets2/client/js/1364057649-waffle_js_prod_screenmagnifier.js"],"screenreader":["/static/spreadsheets2/client/js/2281334619-waffle_js_prod_screenreader.js"],"spellcheck":["/static/spreadsheets2/client/js/1139306330-waffle_js_prod_spellcheck.js"],"braille":["/static/spreadsheets2/client/js/1747806470-waffle_js_prod_braille.js"],"images":["/static/spreadsheets2/client/js/1792925305-waffle_js_prod_images.js"],"onepick":["/static/spreadsheets2/client/js/4020901047-waffle_js_prod_onepick.js"],"queryeditor":["/static/spreadsheets2/client/js/2680778865-waffle_js_prod_queryeditor.js"],"ritzpivottables":["/static/spreadsheets2/client/js/1071229564-waffle_js_prod_ritzpivottables.js"],"viewer":["/static/spreadsheets2/client/js/3931289826-waffle_js_prod_viewer.js"]},"moduleDeps":{"core":[],"answers":["core"],"impressions":["core"],"shell":["core"],"slicereditor":["core"],"slicers":["core"],"workbookthemeeditor":["core"],"inputtools":["shell"],"postshellbase":["shell"],"analytics":["postshellbase"],"approvals":["postshellbase"],"assistant":["postshellbase"],"banding":["postshellbase"],"charteditor":["postshellbase"],"charts":["postshellbase"],"companion":["postshellbase"],"conditionalformat":["postshellbase"],"dataconnector":["postshellbase"],"datepicker":["postshellbase"],"dbrecord":["postshellbase"],"dbsource":["postshellbase"],"dialogs":["postshellbase"],"docos":["postshellbase"],"drawings":["postshellbase"],"filterbar":["postshellbase"],"findreplace":["postshellbase"],"formbar":["postshellbase"],"functionhelpcontent":["postshellbase"],"goto":["postshellbase"],"hats":["postshellbase"],"links":["postshellbase"],"namedrangespane":["postshellbase"],"offline":["postshellbase"],"organize":["postshellbase"],"pickerbase":["postshellbase"],"printing":["postshellbase"],"rangeprotection":["postshellbase"],"revisions":["postshellbase"],"ritzfilter":["postshellbase"],"ritzmaestro":["postshellbase"],"ritzprotectionpane":["postshellbase"],"screenmagnifier":["postshellbase"],"screenreader":["postshellbase"],"spellcheck":["postshellbase"],"braille":["screenreader"],"images":["pickerbase"],"onepick":["pickerbase"],"queryeditor":["dataconnector"],"ritzpivottables":["dialogs"],"viewer":["organize","ritzmaestro"]},"codeMirrorUris":["/static/spreadsheets2/client/js/3599575903-codemirror.js"],"codeMirrorCssUri":"/static/spreadsheets2/client/css/2045442798-codemirror_css_ltr.css","onePickSheetPickerUrl":"https://docs.google.com/picker?protocol\u003dgadgets\u0026relayUrl\u003dhttps://docs.google.com/relay.html\u0026hostId\u003dtrix-copy-sheet\u0026title\u003dSelect+a+spreadsheet+to+copy+this+worksheet+into\u0026hl\u003den\u0026authuser\u003d0\u0026newDriveView\u003dtrue\u0026origin\u003dhttps://docs.google.com\u0026st\u003d000770F2036C9DCBC28CD9B4106F9AEA4BE8CD28D38F7991D5::1552380491685\u0026urlInputVisible\u003dtrue\u0026nav\u003d((%22all%22,null,%7B%22mimeTypes%22:%22application/vnd.google-apps.spreadsheet,application/vnd.google-apps.ritz%22,%22includeFolders%22:true,%22ownedByMe%22:true%7D),(%22all%22,null,%7B%22mimeTypes%22:%22application/vnd.google-apps.spreadsheet,application/vnd.google-apps.ritz%22,%22includeFolders%22:true,%22ownedByMe%22:false%7D),(%22all%22,null,%7B%22td%22:true,%22mimeTypes%22:%22application/vnd.google-apps.spreadsheet,application/vnd.google-apps.ritz%22,%22includeFolders%22:true%7D),(%22all%22,%22Recent%22,%7B%22mimeTypes%22:%22application/vnd.google-apps.spreadsheet,application/vnd.google-apps.ritz%22%7D))","onePickFontPickerUrl":"https://docs.google.com/picker?protocol\u003dgadgets\u0026relayUrl\u003dhttps://docs.google.com/relay.html\u0026hostId\u003dritz-fonts\u0026title\u003dFonts\u0026hl\u003den\u0026authuser\u003d0\u0026newDriveView\u003dtrue\u0026origin\u003dhttps://docs.google.com\u0026st\u003d000770F2036C9DCBC28CD9B4106F9AEA4BE8CD28D38F7991D5::1552380491685\u0026navHidden\u003dtrue\u0026multiselectEnabled\u003dtrue\u0026selectButtonLabel\u003dOK\u0026nav\u003d((%22fonts%22))","onePickImportPickerUrl":"https://docs.google.com/picker?protocol\u003dgadgets\u0026relayUrl\u003dhttps://docs.google.com/relay.html\u0026hostId\u003dtrix-import\u0026title\u003dImport+file\u0026hl\u003den\u0026authuser\u003d0\u0026newDriveView\u003dtrue\u0026origin\u003dhttps://docs.google.com\u0026st\u003d000770F2036C9DCBC28CD9B4106F9AEA4BE8CD28D38F7991D5::1552380491685\u0026nav\u003d((%22all%22,null,%7B%22mimeTypes%22:%22application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/tab-separated-values,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.ms-excel.sheet.macroEnabled.12,text/csv,application/vnd.oasis.opendocument.spreadsheet,text/plain,text/html%22,%22includeFolders%22:true,%22ownedByMe%22:true%7D),(%22all%22,null,%7B%22mimeTypes%22:%22application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/tab-separated-values,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.ms-excel.sheet.macroEnabled.12,text/csv,application/vnd.oasis.opendocument.spreadsheet,text/plain,text/html%22,%22includeFolders%22:true,%22ownedByMe%22:false%7D),(%22all%22,null,%7B%22td%22:true,%22mimeTypes%22:%22application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/tab-separated-values,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.ms-excel.sheet.macroEnabled.12,text/csv,application/vnd.oasis.opendocument.spreadsheet,text/plain,text/html%22,%22includeFolders%22:true%7D),(%22all%22,%22Recent%22,%7B%22mimeTypes%22:%22application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/tab-separated-values,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.ms-excel.sheet.macroEnabled.12,text/csv,application/vnd.oasis.opendocument.spreadsheet,text/plain,text/html%22%7D),(%22upload%22,null,%7B%22query%22:%22docs%22%7D))","ritzDumbClient":false,"webFonts":"{\"fontMetadataMap\":{},\"unrecognizedFontFamilies\":[],\"weightedFontFamilyMap\":{}}","dlpDetectorIds":"[]","isTdOrganizer":false,"showAnswersLoggingOptOut":true}}; mergedConfig['ecso'] =  true ;


    var data = ${content};

    var container = document.getElementById('handsontable');
    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true,
        language:'zh-CN',
        contextMenu: true,
        colWidths: [100, 200, 50],
        mergeCells: [ {row: 3, col: 2, rowspan: 1, colspan: 2} ]
    });

    function sumbitData(table) {
        var config ={
            rowNum:table.getRowHeader().length, colNum:table.getColHeader().length,
            rowHeader:table.getRowHeader(),colHeader:table.getColHeader()
        };
        var mergeCells=[],jsonData=[];
        for(var i=0;i<config.rowNum;i++){
            for(var j=0;j<config.colNum;j++){
                var cellPro=table.getCellMeta(i,j);
                var cellTarget=$(table.getCell(i,j));

                jsonData.push({
                    name:cellPro.name,
                    value:cellTarget.text(),
                    /*    row:cellPro.row,
                        col:cellPro.col,*/
                    coordinate:''+cellPro.row+cellPro.col
                });
                if(cellPro.spanned&&cellTarget.attr('colspan')){
                    mergeCells.push({
                        row:cellPro.row,
                        col:cellPro.col,
                        rowspan: parseInt(cellTarget.attr('rowspan')),
                        colspan: parseInt(cellTarget.attr('colspan'))
                    })
                }
            }
        }
        return {
            rowHeader:table.getRowHeader(),
            colHeader:table.getColHeader(),
            data:table.getData(),
            mergeCells:mergeCells,
            jsonData:jsonData
        };
    };

function aa(){

       var json =  sumbitData(hot);

       console.log(json);


        HTTP.post('../update/${bbbm}', json,function (result) {
            console.log(result.data);
            if ( result.success ){
                alert('报表模板[${bbbm}]更新成功');
            } else {
                alert(result.message || ('报表模板[${bbbm}]更新失败'));
            }
        });

        var $div = $("#append").append("<div> hello </div>");


    new Handsontable($div[0], {
        data: json.data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true,
        language:'zh-CN',
        contextMenu: true,
        colWidths: [100, 200, 50],
        mergeCells: json.mergeCells
    });


    }

  $(function () {


      hot.render();



         setHotAttr(hot,hot.getRowHeader(),hot.getColHeader());

//自定义cell attribute
      function setHotAttr(hotObj,rowHeader,colHeader){// 给handsongtable绑定行列属性
          var count_col = Number(hotObj.countCols());//获取列数
          var count_row = Number(hotObj.countRows());//获取行数
          for (var i=0;i<count_row;i++){
              for (var j=0;j<count_col;j++){
                  hotObj.setCellMeta(i,j,'rowId',rowHeader[i]);
                  hotObj.setCellMeta(i,j,'colId',colHeader[j]);
                  hotObj.setCellMeta(i,j,'name',colHeader[j]+rowHeader[i]);
//            console.log(hotObj.getCellMeta(i,j)['rowId']);
//            console.log(hotObj.getCellMeta(i,j)['colId']);
              }
          }
      }
//提交data

//解析返回的data
      function loadData(json) {
          var jsonData=json.jsonData;
          var newData=[];var mapObject={};
          $.each(jsonData,function (n,data) {
              mapObject[data.coordinate]=data.value;
          });
          $.each(json.rowHeader,function (i,row) {
              var aa=[];
              $.each(json.colHeader,function (j,col) {
                  aa.push(mapObject[''+i+j]);
              });
              newData.push(aa);
          });
          json.data=newData;
          return json
      }
  });
</script>