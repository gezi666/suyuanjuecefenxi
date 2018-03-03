function lineChart(datas){
  var showData = (datas.showData == false)?datas.showData:true;
  var xAxisName = datas.xAxisName?datas.xAxisName:'';
  var grid = datas.grid?datas.grid:{left: '15%', right: '12%',bottom: '30%',top: '12%'};
  var myChart = echarts.init(document.getElementById(datas.id));
  var legendData = [];
  var colorData = ['#a6e412','#2299fd','#2deccf','#3fdc1e','#4e713e'];
  datas.legendData.forEach(function(v,i){
    if(datas.legendBorder) {
      legendData.push({
        name: datas.legendData[i],
        textStyle: {
          fontSize: 12,
          color: '#fff',
          padding: [5, 15]
        }
      })
    }else{
      legendData.push({
        name: datas.legendData[i],
        textStyle: {
          fontSize: 12,
          color: '#fff',
          padding: [5, 15],
          borderWidth: 1,
          borderRadius: 30,
          borderColor: colorData[i]
        }
      })
    }
  });
  // console.log(legendData);
  var option = {
    // backgroundColor:'#003e2e',
    title:{
      text:datas.titleData,
      left:25,
      top:5,
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
      show:showData,
      left: 'center',
      bottom:30,
      icon:'roundRect',
      itemGap:30,
      itemWidth:15,
      itemHeight:2,
      // textStyle:{
      //   fontSize:12,
      //   color:'#fff',
      //   padding:[5,15],
      //   borderWidth:1,
      //   borderRadius:30,
      //   borderColor:['#bef80a']
      // },
      data : legendData
    },
    grid: grid,
    xAxis : [
      {
        name:xAxisName,
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
            fontSize:14,
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
    color:colorData,
    series : [
      {
        name:datas.legendData[0],
        type:'line',
        symbolSize:8,
        showSymbol:false,
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
        name:datas.legendData[1],
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
        name: datas.legendData[2],
        type: 'line',
        smooth:true,
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
        name: datas.legendData[3],
        type: 'line',
        smooth:true,
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
        name: datas.legendData[4],
        type: 'line',
        smooth:true,
        showSymbol:false,
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