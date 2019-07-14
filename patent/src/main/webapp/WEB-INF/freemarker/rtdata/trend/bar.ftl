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
                var x_data = [];
                var legend = [];
                var w = [];
                $.each(config.items, function (i, item) {
                    if (x_data.indexOf(item.name) <= -1) {
                        x_data.push(item.name);
                    }
                });
                $.each(config.groups, function (n, itemr) {
                    legend.push(itemr.name);
                });
                var option = {
                    title: {
                        text: config.name,
                        left: "center",
                        y: 10

                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        orient: "vertical",
                        x: "right",
                        show: true,
                        data: legend
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: x_data
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: []
                };
                chart.setOption(option);


                var listColumns = [
                    {field: "name", title: "指标", width: "45%", align: "center"},
                    {field: "value", title: "值", align: "center"}];

                $('#trend_datalist_${id}').datagrid({
                    singleSelect: true,
                    columns: [listColumns]
                });

                var columns = [
                    {field: "time", title: "时间", width: 160, align: "center"}
                ];
                $.each(config.items, function (i, item) {
                    columns.push(
                            {title: item.name, field: item.id, align: "center", width: 120},
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
            HTTP.post(url, params || {}, function (result) {
                if (result['success']) {
                    var records = result['data']['trenddata'];
                    //var groups = records['groups'];
                    var datas = records['datas'];

                    var legends = [];
                    var series = {};
                    var list = [];
                    var timeGroup = {};
                    var xAxis = {};

                    var group = {};

                    $.each(datas, function (i, data) {

                        console.log(data);

                        legends.push(data["group"] || data["name"]);
                        xAxis[data["tag"] || data["name"]] = "";


                        series[data["tag"] || data["name"]] = {
                            name: data["name"],
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: data["points"]
                        };

                        var last =  data["points"][data["points"].length - 1];

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

                        var obj = group[data["group"] || data["name"]] ||  {
                            name: data["group"] || data["name"],  // group
                            type: 'bar',
                            barGap: 0,
                            data: []
                        };



                        var last =  data["points"][data["points"].length - 1];
                        obj["data"].push(last[1]);

                        group[data["group"] || data["name"]] = obj;

                    });

                    var option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            },
                            formatter: function (args) {
                                debugger;
                            }
                        },
                        legend: {
                            data: legends
                        },
                        xAxis: [
                            {
                                type: 'category',
                                axisTick: {show: false},
                                data: Object.keys(xAxis)   // tag
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: Object.values(group)
                    };

                    chart.setOption(option);


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