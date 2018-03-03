function lineRender(datas){
  var myChart = echarts.init(document.getElementById(datas.id));
  var legendData = [];
  var colorData = ['#a6e412','#2299fd','#2deccf','#3fdc1e','#4e713e'];
  datas.legendData.forEach(function(v,i){
    legendData.push( {
      name:datas.legendData[i],
      textStyle:{
        fontSize:12,
        color:'#fff',
        padding:[5,15],
        borderWidth:1,
        borderRadius:30,
        borderColor:colorData[i]
      }
    })
  });
  // console.log(legendData);
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
      left: 'center',
      bottom:10,
      icon:'roundRect',
      itemGap:30,
      itemWidth:15,
      itemHeight:3,
      data: legendData
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '12%',
      top: '10%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        nameTextStyle:{
          color:'#666'
        },
        axisTick: {
          alignWithLabel: true,
          show:false
        },
        axisLabel:{
          textStyle:{
            fontSize:14,
            color:'#d9eee7',
            align:'center'
          },
          margin:10
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
        data: datas.xAxisData,
      }
    ],
    yAxis : [
      {
        type : 'value',
        interval:20,
        axisTick: {
          alignWithLabel: true,
          show:false
        },
        axisLabel:{
          show:false,
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
          show:false,
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
        name:'蔬菜',
        type:'line',
        symbolSize:8, //光点大小
        showSymbol:false, //悬停显示光点
        // itemStyle:{
        //     normal:{
        //         borderColor:'#fea723',
        //         borderWidth:2
        //     }
        // },
        smooth:true,
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
        smooth:true,
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
        symbolSize:8, //光点大小
        showSymbol:false, //悬停显示光点
        smooth:true,
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
        symbolSize:8, //光点大小
        showSymbol:false, //悬停显示光点
        smooth:true,
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
        symbolSize:8, //光点大小
        showSymbol:false, //悬停显示光点
        smooth:true,
        lineStyle:{
          normal:{
            color:'#4e713e',
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