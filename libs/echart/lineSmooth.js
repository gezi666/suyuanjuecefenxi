function lineChart(datas){
  var myChart = echarts.init(document.getElementById(datas.id));
  var option = {
    // backgroundColor:'#003e2e',
    title:{
      text:datas.titleData,
      left:25,
      top:20,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    tooltip : {
      trigger: 'axis',
      axisPointer:{
        lineStyle:{
          color:'#ccc'
        }
      },
      // backgroundColor:'rgba(255,255,255,0.9)',
      textStyle:{
        color:'#fff'
      },

    },
    legend: {
      show:false,
      left: 'center',
      bottom:30,
      icon:'roundRect',
      itemGap:30,
      itemWidth:12,
      itemHeight:3,
      textStyle:{
        fontSize:12,
        color:'#fff',
        padding:[5,15],
        borderWidth:1,
        borderRadius:30,
        borderColor:'#bef80a'
      },
      data : datas.legendData
    },
    grid: {
      left: '5%',
      right: '10%',
      bottom: '10%',
      top: '28%',
      containLabel: true
    },
    xAxis : [
      {
        name:'',
        color:'#fff',
        type : 'category',
        boundaryGap : false,
        nameTextStyle:{
          color:'#fff'
        },
        axisTick: {
          alignWithLabel: true,
          show:false
        },
        axisLabel:{
          textStyle:{
            fontSize:12,
            color:'#d9eee7',
            align:'center'
          },
          margin:20
        },
        axisLine:{
          lineStyle:{
            color:'#c7defc'
          }
        },
        splitLine:{
          show: false,
          lineStyle:{
            color:'#c7defc'
          }
        },
        data: datas.xAxisData
      }
    ],
    yAxis : [
      {
        name:'单位：t',
        nameGap:20,
        nameTextStyle:{
          color:'rgba(239,243,250,.8)',
          padding:[0,45,0,0]
        },
        type : 'value',
        interval:20,
        axisTick: {
          alignWithLabel: true,
          show:false
        },
        axisLabel:{
          // show:false,
          formatter: function(value){
            var d =value;
            return d
          },
          textStyle:{
            fontSize:14,
            color:'#d9eee7'
          },
          margin:20
        },
        axisLine:{
          // show:false,
          lineStyle:{
            color:'#c7defc'
          }
        },
        splitLine:{
          show: false,
          lineStyle:{
            color:'#c7defc'
          }
        }
      }
    ],
    color:['#fec619','#21a9fb'],
    series : [
      {
        name:'销售量',
        type:'line',
        symbolSize:8,
        showSymbol:false,
        lineStyle:{
          normal:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#fc9a1a'
            }, {
              offset: 1,
              color: '#fec61a'
            }]),
            shadowColor: 'rgba(0, 24, 18, .9)',
            shadowOffsetY:30,
            shadowOffsetX:3,
            shadowBlur: 30
          }
        },
        data:datas.seriesData[0]
      },
      {
        name:'干鲜果',
        type:'line',
        symbolSize:8, //光点大小
        showSymbol:false, //悬停显示光点
        // itemStyle:{
        //     normal:{
        //         borderColor:'#3f8fff',
        //         borderWidth:2
        //     }
        // },
        lineStyle:{
          normal:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#2897f7'
            }, {
              offset: 1,
              color: '#2abafe'
            }]),
            shadowColor: 'rgba(0, 24, 18, .9)',
            shadowOffsetY:30,
            shadowOffsetX:3,
            shadowBlur: 30
          }
        },
        data:datas.seriesData[1]
      },
      {
        name: '畜产品',
        type: 'line',
        showSymbol:false,
        lineStyle:{
          normal:{
            color:'#2deedd',
            shadowColor: 'rgba(0, 24, 18, .9)',
            shadowOffsetY:30,
            shadowOffsetX:3,
            shadowBlur: 30
          }
        },
        data:datas.seriesData[2]
      },
      {
        name: '食用菌',
        type: 'line',
        showSymbol:false,
        lineStyle:{
          normal:{
            color:'#3fdd1f',
            shadowColor: 'rgba(0, 24, 18, .9)',
            shadowOffsetY:30,
            shadowOffsetX:3,
            shadowBlur: 30
          }
        },
        data:datas.seriesData[3]
      },
      {
        name: '水产品',
        type: 'line',
        showSymbol:false,
        lineStyle:{
          normal:{
            color:'#3fdd1f',
            shadowColor: 'rgba(0, 24, 18, .9)',
            shadowOffsetY:30,
            shadowOffsetX:3,
            shadowBlur: 30
          }
        },
        data:datas.seriesData[4]
      }
    ]

  };
  myChart.setOption(option);
}