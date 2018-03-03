function barLine(datas) {
  var url = ['image://../../img/icon2.png','image://../../img/icon3.png'];
  var yName = datas.yName?datas.yName:'';
  var myChart = echarts.init(document.getElementById(datas.id));
  var option = {
    // backgroundColor: '#003e2e',
    color:['#288aef','#287aef'],
    grid:{
      left:'6%',
      right:'6%',
      top:'15%',
      bottom:'18%'
    },
    title:{
      text:datas.titleData,
      top:10,
      left:20,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      textStyle:{
        color:'#fff'
      },
      itemHeight:14,
      itemWidth:14,
      data:[
        {
          name:datas.legendData[0],
          icon:url[0]
        },
        {
          name:datas.legendData[1],
          icon:url[1]
        }
      ],
      left:'center',
      bottom:15
    },
    xAxis: [
      {
        type: 'category',
        data: ['2008','2009','2010','2011','2012','2013','2014'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel:{
          textStyle:{
            color:'#d9eee7',
            fontSize:14
          }
        },
        axisTick:{
          show:false
        },
        axisLine:{
          // show:false,
          lineStyle:{
            color:'#62e2dd'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: yName,
        nameTextStyle:{
          color:'#fff',
          fontSize:14
        },
        axisLabel:{
          textStyle:{
            color:'#d9eee7',
            fontSize:14
          }
        },
        axisTick:{
          show:false
        },
        axisLine:{
          lineStyle:{
            color:'#62e2dd'
          }
        },
        splitLine:{
          show:false
        }

      },
      {
        type: 'value',
        name: '',
        // max:100,
        axisLabel:{
          textStyle:{
            color:'#fff',
            fontSize:14
          },
          formatter: '{value}'
        },
        axisTick:{
          show:false
        },
        axisLine:{
          lineStyle:{
            color:'#62e2dd'
          }
        },
        splitLine:{
          show:false
        }
      }
    ],
    series: [
      {
        name:datas.legendData[0],
        type:'bar',
        barWidth:14,
        itemStyle:{
          normal:{
            color:'#126d33',
            barBorderRadius:[30,30,0,0],
            borderWidth:2,
            borderColor:'#7fff5f',
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              },
              formatter:function(params){
                if(params.value === 0){
                  return '';
                }else{
                  return params.value.toLocaleString();
                }
              }
            }
          },
          emphasis:{
            color:'#49cd27',
            opacity: 1
          }
        },
        data:datas.seriesDatas[0]
      },
      {
        name:datas.legendData[1],
        type:'line',
        // symbolSize:0,
        showSymbol:false,//悬停显示光点
        yAxisIndex: 1,
        symbol:'emptyCircle',
        lineStyle:{
          normal:{
            color:'#f1a103',
            shadowColor: 'rgba(0, 24, 18, .9)',
            shadowOffsetY:30,
            shadowOffsetX:3,
            shadowBlur: 30
          }
        },
        itemStyle:{
          normal:{
            borderColor:'#fff',
            borderWidth:2
          }
        },
        // areaStyle:{
        //     normal:{
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0.7,
        //             color: '#5894ff'
        //         }, {
        //             offset: 1,
        //             color: 'transparent'
        //         }]),
        //         opacity:0.2
        //     }
        // },
        data: datas.seriesDatas[1]
      }
    ]
  };
  myChart.setOption(option);

};