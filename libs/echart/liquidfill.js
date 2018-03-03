function Liquidfill(datas){
		var containers = document.getElementById(datas.dom);
        var options = {
            series: [{
                type: 'liquidFill',
                data: [ 
                        {
                            value: datas.value[0],
                            direction: 'right',
                            itemStyle: {
                                normal: {
                                    color: datas.setColor[0],
                                    borderColor:'#4af81b',
                                    borderWidth:2,
                                    opacity: datas.opacity
                                }
                            }
                        }, 
                        {
                            value: datas.value[1],
                            direction: 'right',
                            itemStyle: {
                                normal: {
                                    color: datas.setColor[1],
                                    borderColor:'#4af81b',
                                    borderWidth:2,
                                    opacity: 0.2
                                }
                            }
                        }],
                radius: '70%',
                center:["50%","50%"],
                outline: {
                    show: false
                },
                backgroundStyle: {
                    borderColor: '#14c51c',
                    color:'transparent',
                    borderWidth: 2,
                },
                label: {
		            normal: {
		                textStyle: {
		                    fontSize: 48,
		                    color:datas.fontColor
		                }
		            }
		        }
            }]
        };

        var chart = echarts.init(containers);
            chart.setOption({
                baseOption: options
            });

        window.onresize = function () {
                chart.resize();
        };
}