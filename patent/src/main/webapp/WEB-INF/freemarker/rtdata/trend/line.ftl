<div id="box_${id}" class="easyui-layout" style="width:100%;height:100%">
    <div data-options="region:'north',title:'North Title',split:true" style="height:50%;">
        <div id="trend_table_${id}" style="height:100%">
        </div>
    </div>
    <div data-options="region:'center',title:'center title'"
         style="padding:5px;height: 50%;border-top: 1px lightgrey solid;position: relative;">
        <div style="width: 70%;height: 100%;display: inline-block">
            <div id="trend_datagrid_${id}" style="height: 100%"></div>
        </div>
        <div style="width: 30%;height:100%;display: inline-block;float: right;">
            <div id="trend_datalist_${id}" style="height: 100%;"></div>
        </div>

    </div>
</div>
<script>

    $(function () {

        var selectedTab = $('#tabs').tabs('getSelected');
        $('#tabs').tabs('update', {
            tab: selectedTab,
            options: {
                type: 'N'
            }
        });

        var chart = echarts.init($('#trend_table_${id}')[0], 'macarons');
        HTTP.post('trend/qsztfx/config/${id}', {}, function (result) {
            if (result["success"]) {
                var config = result["data"]["config"];
                var option = {
                    title: {
                        text: config.name,
                        left: 'center',
                        y: 10
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (params) {

                            var text = new Date(params[0]["value"][0]).Format("yyyy-MM-dd hh:mm:ss") + "<br />";

                            $.each(params, function (i, param) {
                                var line = '';
                                line = param["seriesName"] + ": ";
                                line += param["value"][1];

                                text +=  line + "<br/>";
                            });
                            return text;
                        }
                    },

                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: []
                };
                chart.setOption(option);


                var listColumns = [
                    {field: "name", title: "指标", width: "50%", align: "center"},
                    {field: "value", title: "值", width: "50%", align: "center"}
                ];
                $('#trend_datalist_${id}').datagrid({
                    columns: [listColumns],
                    singleSelect: true
                });


                var columns = [
                    {title: "时间", field: "time", width: 180, align: "center"}
                ];
                $.each(config.items, function (i, item) {
                    columns.push(
                            {
                                title: item.name,
                                field: item.id,
                                align: "center",
                                width: 100 / (config.items.length + 1) + "%"
                            },
                    )
                });
                $('#trend_datagrid_${id}').datagrid({
                    columns: [columns],
                    singleSelect: true,
                    pagination: true
                });

                timeRer(chart, "trend/qsztfx/searchdata/${id}")

                window.clearInterval(TimerCustom.getTrend());

                var int = self.setInterval(function () {
                    timeRer(chart, "trend/qsztfx/searchdata/${id}")
                }, config["interval"]||5000);
                TimerCustom.setTrend(int);


            }

        }, null, true);


        function timeRer(chart, url, params) {
            if (!chart) {
                return;
            }

            console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));

            HTTP.post(url, params || {}, function (result) {
                if (result['success']) {
                    var records = result['data']['trenddata'];
                    var datas = records['datas'];

                    var legend = [];
                    var series = [];
                    var list = [];
                    var timeGroup = {};
                    $.each(datas, function (i, data) {
                        legend.push(data["name"]);

                        series.push({
                            name: data["name"],
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: data["points"]
                        });

                        var last =  data["points"][data["points"].length - 1] || [0, 0];

                        list.push({
                            name: data["name"],
                            value: last[1]
                        });


                        var metric = data["metric"];

                        $.each(data["points"], function (i, point) {
                            var key = point[0];
                            var obj = timeGroup[key] || {};
                            obj["time"] = new Date(key).Format("yyyy-MM-dd hh:mm:ss");
                            obj[metric] = point[1];

                            timeGroup[key] = obj;
                        });
                    });


                   // datagrid_data.push({time:"", id1: 11, id2: 3});


                    var option = chart.getOption();
                    option.legend = {
                        orient: "vertical",
                        x: "right",
                        padding: 10,
                        show: true,
                        data: legend
                    };
                    option.series = series;

                    chart.setOption(option);

                   // var length = records["xaxis"].length;

                    <#--for (var i = 0; i < length; i++) {-->
                        <#--var item = {time: new Date(Number(records["xaxis"][i])).Format("MM-dd  hh:mm")};-->
                        <#--$.each(records.items, function (j, n) {-->
                            <#--item[n.id] = datas[n.id][i];-->
                        <#--});-->
                            <#--datagrid_data.push(item);-->
                    <#--}-->
                    <#--datagrid_data.reverse();-->
                    $("#trend_datagrid_${id}").datagrid("clientPaging", {data: Object.values(timeGroup).reverse()});


                    $("#trend_datalist_${id}").datagrid( {data: list});

                } else {
                    $.messager.alert("提示", result["message"] || "返回数据错误,请重新打开页面");
                    window.clearInterval(TimerCustom.getTrend());
                }
            }, null, true);
        }
    });

</script>