function markLine(datas){
		var myChart = echarts.init(document.getElementById(datas.id));
		var option = {
				    tooltip: {
				        trigger: 'item',
				        formatter: "{c}"
				    },
				    toolbox:{
				        show:false
				    },
				    grid: {
				    	top:'1%',
				        left: '3%',
				        right: '8%',
				        bottom: '10%',
				        containLabel: true
				    },
				    xAxis: [{
				        type: 'category',
				        boundaryGap: false,
				        axisLine: {
				            lineStyle: {
				                color: "#00ff66",
				                opacity:1,
				            }
				        },
				        axisLabel: {
				            textStyle: {
				                color: "#d9eee7"
				            }
				        },
				         axisTick:{
				            show:false,
				            color:'#fff'
				        },
				        splitLine: {
				            show: false
				        },
				        data: datas.xAxisData
				    }],
				    yAxis: [
				        {
				            data:['0%','10%','','30%','','50%','','','','','100%'],
				            axisLabel: {
				                textStyle: {
				                    color: "#d9eee7"
				                }
				            },
				            axisTick:{
				                show:false
				            },
				            axisLine: {
				                show:true,
				                lineStyle: {
				                    color: "#00ff66"
				                }
				            },
				            splitLine: {
				                show:false
				            }
				        },
				        {
				            show:false,
				            splitLine: {
				                show:false
				            },
				            min:0,
				            max:100
				            
				        }
				    ],
				    series: [{
				        name: '企业当期平均死亡率',
				        type: 'line',
				        stack: '总量',
				        symbolSize: 0,
				        yAxisIndex:1,
				        lineStyle: {
				            normal: {
				                color: "#rgba(0,255,138,.8)"
				            }
				        },
				        areaStyle: {
				            normal: {
				                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                    offset: 0,
				                    color: 'rgba(153,255,204,.5)'
				                }, {
				                    offset: 1,
				                    color: 'rgba(0,0,0,0)'
				                }])
				            }
				        },
				        markLine:{
				            data: [
				                    {
				                        name:'',
				                        yAxis:10,
				                        symbolSize:1,
				                        label:{
				                            normal:{
				                                formatter:'黄色预警'
				                            }
				                        },
				                        lineStyle:{
				                            normal:{
				                                color:'#b3c80f'
				                            }
				                        }
				                    },
				                    {
				                        name:'',
				                        yAxis:30,
				                        symbolSize:1,
				                        label:{
				                            normal:{
				                                formatter:'橙色预警'
				                            }
				                        },
				                        lineStyle:{
				                            normal:{
				                                color:'#a4822d'
				                            }
				                        }
				                    },
				                    {
				                        name:'',
				                        yAxis:50,
				                        symbolSize:1,
				                        label:{
				                            normal:{
				                                formatter:'红色预警'
				                            }
				                        },
				                        lineStyle:{
				                            normal:{
				                                color:'#b32d0f'
				                            }
				                        }
				                    }
				                    
				                ]
				        },
				        smooth: false,
				        data: datas.seriesData
				    }]
				};

		myChart.setOption(option)
}