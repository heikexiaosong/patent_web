<!DOCTYPE html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title> 系统注册 - 数据中心管理平台 </title>
    <link rel="SHORTCUT ICON" href="img/gavel.ico"/>

    <link rel="stylesheet" type="text/css" href="easyui/themes/material/easyui.css" />   <!--引入CSS样式-->
    <link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />   <!--Icon引入-->
    <link rel="stylesheet" type="text/css" href="css/icon.css" />   <!--Icon引入-->
    <link rel="stylesheet" type="text/css" href="css/common.css" />   <!--Icon引入-->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="goolflow/codebase/GooFlow.css"/>
    <link rel="stylesheet" type="text/css" href="layui/css/layui.css"/>

    <link rel="stylesheet" type="text/css" href="css/sidebar-menu/font-awesome.min.css" />

</head>
<body style="padding: 20px">
<p>系统注册</p>
<hr />
<div style="padding-bottom: 10px">
    序列号: <input name="serial" disabled="disabled" style="padding: 1px 1px 1px 8px ">
</div>
<span>注册码: </span>

<input name="textfield1" type="text" id="code1" next="code2" size="4" maxlength="4" />
-
<input name="textfield2" type="text" id="code2" next="code3" size="4" maxlength="4" />
-
<input name="textfield3" type="text" id="code3" next="code4" size="4" maxlength="4" />
-
<input name="textfield4" type="text" id="code4" next="code5" size="4" maxlength="4" />
-
<input name="textfield4" type="text" id="code5" size="4" maxlength="4" />

<br />

<div style="padding-top: 20px; margin-left: 30px">
    <button id="registered" type="button"  onclick="registered()">注 册</button>
</div>

</body>

<!-- data-main attribute tells require.js to load scriinit.jsn.js after require.js loads. -->

<script type="text/javascript" src="js/common/json2.js"></script>
<script language="JavaScript" type="text/javascript" src="easyui/jquery.min.js" charset="utf-8"></script>
<script language="JavaScript" type="text/javascript" src="easyui/jquery.easyui.min.js" charset="utf-8"></script>
<script language="JavaScript" type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>

<script language="JavaScript" type="text/javascript" src="js/common/common.js"></script>
<script language="JavaScript" type="text/javascript" src="js/common/tools.js"></script>
<script language="JavaScript" type="text/javascript" src="js/common/http.js"></script>
<script language="JavaScript" type="text/javascript" src="js/common/databind.js"></script>
<script language="JavaScript" type="text/javascript" src="js/common/formBuilder.js"></script>


<script>

    function registered(){
        var register_code =$("#code1").val() + $("#code2").val() + $("#code3").val() + $("#code4").val() + $("#code5").val();
        HTTP.post("license", {code: register_code},  function (result) {
            if ( result["success"]==true ) {

                $.messager.confirm('系统注册成功', '系统注册成功, 系统已激活.', function(r){
                    if (r){
                        window.location.href = "index";
                    }
                });
            } else {
                $.messager.alert("提示信息", result["message"] || "系统注册失败");
            }
        });
    }


    function keyupHandleAddr(e){
        var current = this;
        current.value = current.value.replace(/[^0-9a-fA-F]/g, "");

        if ( current.value.length >= 4 ){
            var next = $(current).attr("next") || "registered" ;

            $("#" + next).focus();
        }
    }

    function pasteHandle(e){
        debugger;
        var current = this;

        var key = e.originalEvent.clipboardData.getData('Text')||"";

        key = key.replace(/[^0-9a-fA-F]/g, "").toUpperCase();

        var fields = splitLength(key, 4);

        for(j = 0,len=fields.length; j < len; j++) {
            current.value = fields[j];
            var next = $(current).attr("next");
            if ( !!!next ){
                break;
            }
            current = $("#" + next)[0];
            $("#" + next).focus();
        }
    }

    //按多长间隔截取字符串，n为长度，返回按长度分割成的字符串数组；
    function splitLength(str, n){
        var arr=[];
        var len=Math.ceil(str.length/n);
        for(var i=0;i < len;i++){
            if(str.length >= n){
                var strCut=str.substring(0,n);
                arr.push(strCut);
                str=str.substring(n);
            }else{
                str=str;
                arr.push(str);
            }
        }
        return arr;
    }


    $(function () {
        HTTP.post("systeminfo", {},  function (result) {
            debugger;
            if ( result["success"]==true ) {

                $("input[name='serial']").val(result["data"]["data"]);
            } else {
                alert(result["message"] || "获取系统信息失败");
            }
        });

        $(":input[id^='code']").bind('keyup', keyupHandleAddr);

        $(":input[id^='code']").bind('paste', pasteHandle);

    })


</script>


</html>
