<div id="report_chart_${id}" class="easyui-layout" style="width:100%;height:100%">
    <div data-options="region:'north',title:'North Title',split:true" style="height:60%;">
        <div class="" style="height: 10%;padding: 4px" >
            <label class="gui-form-label">报表：</label>
            <div class="">
                <input type="text" name="id" style="width:400px"/>
                <span style="margin-left: 20px">
			<label >年度：</label>
			<input type="text" name="year" style="width:80px"/>
			</span>
                <span>
				<label class="">月份</label>
				<input type="text" name="month" style="width:60px"/>
			</span>
                <a class="report-chart-${id}-search toolbar l-btn l-btn-small l-btn-plain" href="javascript:void(0)"  style="height: 34px;margin-left: 20px">
				<span class="l-btn-left l-btn-icon-left" style="margin-top: 5px;">
					<span class="l-btn-text">查询</span><span class="l-btn-icon fa fa-search">&nbsp;</span></span></a>
            </div>
        </div>
        <div id="trend_table_${id}" style="height:90%">
        </div>
    </div>
    <div data-options="region:'center',title:'center title'" style="padding:5px;height: 40%;border-top: 1px lightgrey solid;position: relative;">
        <div style="width:100%;height: 100%;">
            <div id="trend_datagrid_${id}" style="height: 100%"></div>
        </div>
    </div>
</div>
<script>
    $(function () {
    
    	var $box = $('#report_chart_${id}');
    	$('#report_chart_${id}').find('input[name=id]').iCombobox({textField:"title",valueField:"id"});
    	
    	HTTP.post("trend/qst/query",{},function (result) {
			if(result["success"]&&result["data"])
				$box.find('input[textboxname="id"]').combobox("loadData",result["data"]["records"]);
			if(result["data"]["records"][0]) 
				$box.find('input[textboxname="id"]').combobox("setValue",result["data"]["records"][0]["id"])
		});

		$box.find('input[name=year]').iCombobox({textField:"text",valueField:"value",
			data:[{value:"2019", text:"2019"}, 
				  {value:"2020", text:"2020"},
				  {value:"2021", text:"2021"},
				  {value:"2022", text:"2022"},
				  {value:"2023", text:"2023"},
				  {value:"2024", text:"2024"},
				  {value:"2025", text:"2025"},
				  {value:"2026", text:"2026"},
				  {value:"2027", text:"2027"},
				  {value:"2028", text:"2028"},
				  {value:"2029", text:"2029"},
				  {value:"2030", text:"2030"}
			     ]
	          });
	          
	     $box.find('input[name=month]').iCombobox({textField:"text",valueField:"value",
			data:[{value:"1", text:"1"}, 
				  {value:"2", text:"2"},
				  {value:"3", text:"3"},
				  {value:"4", text:"4"},
				  {value:"5", text:"5"},
				  {value:"6", text:"6"},
				  {value:"7", text:"7"},
				  {value:"8", text:"8"},
				  {value:"9", text:"9"},
				  {value:"10", text:"10"},
				  {value:"11", text:"11"},
				  {value:"12", text:"12"}
			     ]
	          });
		var date=new Date();
		HTTP.post('common/datetime',{},function (result) {
			if(result['success']&&result['data']['data']){
				date=result["data"]["data"];
				$box.find('input[textboxname=year]').combobox("setValue",new Date(date).getFullYear());
				$box.find('input[textboxname=month]').combobox("setValue",new Date(date).getMonth()+1);
			}
		});
    	$box.find('.report-chart-${id}-search ').unbind().bind("click",function () {
			reportTimeRer(chart,"report/chart/loaddata/${id}",
		             {  id:$box.find('input[name="id"]').val(),
						year:$box.find('input[name="year"]').val(),
						month:$box.find('input[name="month"]').val()
					});
		});

        var chart = echarts.init($('#trend_table_${id}')[0], 'macarons');
        HTTP.post('report/chart/config/${id}',{},function (result) {
            if(result["success"]){
                var config=result["data"]["config"];
                var option = {
                    title: {
                        text: config.name,
                        left:'center',
                        y:10
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : []
						}
					],
                    yAxis : [
                        {
                            type : 'value',
                            scale:true
                        }
                    ],
                    series : []
                };
                chart.setOption(option);
                var columns=[];
                columns.push({
                    field:"time",title:"日期",width:120,align:"center",
                });

                $.each(config.items,function (i,item) {
                    columns.push(
                        {title: item.name, field:item.id,align:"center", width:100/(config.items.length+1)+"%"},
                    )
                });
                $('#trend_datagrid_${id}').datagrid({
                    columns:[columns],
                    singleSelect:true,
                    pagination:true
                });

				reportTimeRer(chart,"report/chart/loaddata/${id}",
		             {
						id:$box.find('input[name="id"]').val(),
						year:$box.find('input[name="year"]').val(),
						month:$box.find('input[name="month"]').val()
					})

            }
        },null,true);


        function reportTimeRer(chart,url,params){
            if(!chart){
                return;
            }
            HTTP.post(url,params||{year:2019, month:6},function (result) {
                if(result['success']){
                    var records=result['data']['trenddata'];
                    var datas=records['datas'];
                    var legend=[];var series=[];var datagrid_data=[];var map={}
                    $.each(records["items"],function (i,te) {
                         map[te.id]=te.name
                    });
                    var option = chart.getOption();

                    $.each(datas,function (n,dat) {
                        legend.push(map[n]);
                        series.push({
                            data:dat,type:"line",name:map[n]
                        });
                    });
                    option.legend={
                        orient:"vertical",
                        x:"right",
                        padding:10,
                        show:true,
                        data:legend
                    };
                    option.xAxis[0]["data"]=records["xaxis"];
                    option.series =series;
                    chart.setOption(option);

                   var length=records["xaxis"].length;

                    for(var i=0;i<length;i++){
                       var item={time:records["xaxis"][i]};
                       $.each(records.items,function (j,n) {
                           item[n.id]=datas[n.id][i];
                       });
                       datagrid_data.push(item);
                   }
                   
                    $("#trend_datagrid_${id}").datagrid("clientPaging",{data:datagrid_data});

                }else{
                    $.messager.alert("提示",result["message"]||"返回数据错误,请重新打开页面");
                    window.clearInterval(TimerCustom.getTrend());
                }
            },null,true);
        }
    });

</script>