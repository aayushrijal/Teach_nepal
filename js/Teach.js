var chart;
		var graph;
		var chartCursor;
            var chartData;
		var chartData1;
		         
		$.getJSON("js/data2011.json",function(data){
		chartData=data;		
		});
		/*for(var i=0;i<chartData.length;i++)
		if(chartData[i].year==2008){
			chartData1.push(chartData[i]);
		}*/
		
		
		
            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "District";
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
                graph.valueField = "Total";
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
	$.getJSON("js/data2010.json",function(data){
		chartData=data;		
		});
	graph = new AmCharts.AmGraph();
                graph.valueField = "Total";
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
$("document").ready(function(){});
