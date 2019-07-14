
<#assign pid="modulepage-${mkid}">

<div id="${pid}" class="gui-div">

    <table class="toolbar-table" data-options="id: '${pid}Table', herf:'inspection/gridset/query'"></table>

    <div id="${pid}Table-toolbar" class="gui-toolbar" data-options="grid:{type:'datagrid',id:'${pid}Table'}">
        <form action="" class="query-criteria" style="display: inline-block;margin-top: 4px">
            <ul>
                <li>
                     <#list criterias as criteria>

                     <#assign kjlx = (criteria.kjlx)!'textbox' >

                      <span>
                        <label>${(criteria.zdmc)!(criteria.zdid)}：</label>
                          <#if kjlx == "datebox">
                            <input type="text" name="${criteria.zdid}" data-toggle="gui-datebox">
                          </#if>

                          <#if kjlx != "datebox">
                            <input type="text" name="${criteria.zdid}" data-toggle="gui-textbox" class="gui-textbox">
                          </#if>


                      </span>

                     </#list>

                    <#--<span>-->
                        <#--<label>物料查询：</label>-->
                        <#--<input type="text" name="wlcx" data-toggle="gui-textbox" class="gui-textbox">-->
                    <#--</span>-->
                </li>
            </ul>
        </form>

        <a class="toolbar-reload search-right toolbar"  href="javascript:void(0)" style="display: inline-block">查询</a>
    </div>
</div>
<script>

    <#list criterias as criteria>

        <#assign kjlx = (criteria.kjlx)!'textbox' >
        <#if kjlx == "datebox">
            $("#${pid} input[name='${criteria.zdid}']").iDatebox({value: new Date().Format("yyyy-MM-dd"),width:110});
        </#if>
    </#list>




    $(function () {

        $("#${pid} input[name='start']").iDatebox({value: DateUtils.beginOfMonth().Format("yyyy-MM-dd"),width:110});
        $("#${pid} input[name='end']").iDatebox({value: DateUtils.endOfMonth().Format("yyyy-MM-dd"),width:110});

        var $div=$('#${pid}');
        var options={
            url:'devonline/module/${mkid}',
            columns:[[
                <#list fields as field>
                    {title: "${ (field.zdmc)!(field.zdid)}", index: ${(field.xh)!0}, field: "${field.zdid}", width: ${field.zdkd}, halign:'center', align: '${field.align}',  hidden: false},
                </#list>
            ]]
        };
        $div.Container(options);
    });

</script>