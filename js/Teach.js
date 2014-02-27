	var stotal=[];
	var dis=[];
	var addd;
	var ptotal=[];	
	var options={
            chart: {
                type: 'column'
            },
            title: {
                text: 'Teach Nepal'
            },
            subtitle: {
                text: 'Source: data.opennepal.net'
            },
            xAxis: {
                categories: [],
		labels:{
                            enabled: false
                        }

            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (mm)'
                },
		            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.0f}<! mm--></b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
			dataLabels: {
                                enabled: false
                            },		
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series:[{data:[]
	}]        
	};
	$.getJSON("js/teach.json",function(data){
			addd=data;
		$.each(data,function(key,val){
			
			console.log(val.total,val.district);
			if(val.year==2011){
			stotal.push(parseInt(val.total));
			dis.push(val.district);
			}else{
			if(val.year==2010){
				ptotal.push(parseInt(val.total));
				}}
				});	
	}); 
	console.log(options.series[0]);
	options.series.push({name:2010,data:ptotal});	
	options.xAxis.categories=dis;
	console.log("cat ",options.xAxis.categories);
	options.series[0].name="2011";
	options.series[0].data=stotal;
	console.log("data ",options.series[0].data);
	$(function () {        
	$('#container').highcharts(options);
	console.log("ptotal",ptotal);
    });
    

