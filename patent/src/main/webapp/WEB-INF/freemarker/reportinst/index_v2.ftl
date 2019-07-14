<!DOCTYPE html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${reportinst.bbmc}</title>
    <meta  name = "viewport" content = "initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no">

    <script src="../../../../thirdparty/codebase/webix/webix.js?v=6.3.1" type="text/javascript"></script>
    <script src="../../../../thirdparty/codebase/spreadsheet.js?v=6.3.1" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="../../../../thirdparty/codebase/webix/webix.css?v=6.3.1">
    <link rel="stylesheet" type="text/css" href="../../../../thirdparty/codebase/spreadsheet.css?v=6.3.1">

    <script src="../../../../thirdparty/codebase/data.js?v=6.3.1"></script>

  <#--  <script language="JavaScript" type="text/javascript" src="../../../../thirdparty/layer-v3.0.3/layer.js"></script>-->

    <style>
        .webix_ss_center {
            margin-left: 20px;
            margin-top: 13px;
        }
        .webix_vscroll_x{
            position: fixed;
        }
    </style>

</head>
<body>
<script type="text/javascript">

    webix.ready(function(){
        var elements = [
            { view:"label", label:"<span style='margin-left: 20px;'>${reportinst.bbmc}</span>", align:"left" },
            {},
<#--            { view:"button", value:"导出Excel", width:100, click: function () {
                    //webix.print("ssheet", {footer: false, borderless: true, sheetnames: false, footer: false});
                    webix.toExcel("ssheet", {filename: "${reportinst.bbmc}"});
                }
            },-->
           /* {
                view: "button", value: "关闭", width: 100, click: function () {
                    var iid = self.frameElement.getAttribute('id');
                    parent.layerClose(parseInt(iid.substring(18)));
                }
            }*/
        ];
        webix.ui({
            view:"spreadsheet",
            id:"ssheet",
            toolbar: false,
            readonly:true,
         /*   subbar:{
                view:"toolbar", css:"webix_ssheet_toolbar", elements:elements
            },*/
            url: "../../query/v2/${id}",
            columnCount: 13,
            rowCount:13,
            resizeCell:false
        });
    });
</script>
</body>
</html>