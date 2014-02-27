var chart;
		var graph;
		var chartCursor;
            var chartData=[];
		var chartData2=[];
		         
		$.getJSON("js/teach.json",function(data){
			chartData2=data;
			$.each(data,function(key,val){
		if(val.year==2011){
		chartData.push(val);
		}		
		});
				
		});
		
		/*for(var i=0;i<chartData.length;i++)
		if(chartData[i].year==2008){
			chartData1.push(chartData[i]);
		}*/
		
		
		
            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "district";
                chart.startDuration = 1;

                // AXES
                // category
               /*var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
                categoryAxis.gridPosition = "start";
*/
                // value
                // in case you don't want to change default settings of value axis,
                // you don't need to create it, as one value axis is created automatically.

                // GRAPH
                graph = new AmCharts.AmGraph();
                graph.valueField = "total";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.9;
		
                chart.addGraph(graph);
		
                // CURSOR
                chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("chartdiv");
            });
$("#div1").click(function(){
	$.getJSON("js/teach.json",function(data){
		chartData.length=0;
		$.each(data,function(key,val){
		if(val.year==2008){
		chartData.push(val);
		}
		});
		});
	/*chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "district";
                chart.startDuration = 1;	
	graph = new AmCharts.AmGraph();
                graph.valueField = "total";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.9;
		chart.addGraph(graph);
		
                // CURSOR
                chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";
		
chart.write("chartdiv");*/
		chart.dataProvider = chartData;
		chart.validateData();
		chart.validateNow();
                
	});
$("document").ready(function(){});
