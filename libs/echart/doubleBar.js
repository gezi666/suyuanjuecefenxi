function doubleBar(datas){
  var url = ['image://../../img/icon1.png','image://../../img/icon2.png'];
  var top = datas.top?datas.top:10;
  var myChart = echarts.init(document.getElementById(datas.id));
  var option= {
    // backgroundColor: '#003e2e',
    title:{
      text:datas.titleData,
      left:25,
      top:top,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      top:'20%',
      bottom: '15%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0,87, 55, 0.8)'
        }
      }
    },
    legend: {
      // top:'bottom',
      bottom:10,
      itemWidth:12,
      itemHeight:12,
      // icon: url,
      data: [
        {
          name:datas.legendData[0],
          icon:url[0]
        },
        {
          name:datas.legendData[1],
          icon:url[1]
        }
      ],
      textStyle: {
        color: "#fff"
      }
    },
    // calculable: true,
    color:['#eb5fc0','#ff6000'],
    xAxis: {
      type : 'category',
      splitLine: {show:false},
      axisLine:{
        lineStyle:{
          color:'#62e2dd'
        }
      },
      axisLabel:{
        textStyle:{
          fontSize:14,
          color:'#d9eee7'
        }
      },
      axisTick:{
        show:false
      },
      data: datas.xData,
    },
    yAxis: {
      type : 'value',
      nameTextStyle: {
        color:'#94c1f9'
      },
      axisLine:{
        lineStyle:{
          color:'#62e2dd'
        }
      },
      splitLine: {
        show:false
      },
      axisLabel:{
        textStyle:{
          fontSize:14,
          color:'#d9eee7'
        }
      },
      axisTick:{
        show:false
      }
    },
    series: [{
      name: datas.legendData[0],
      type: 'bar',
      barWidth:14,
      itemStyle:{
        normal:{
          color:'rgba(0,204,255,.3)',
          borderWidth:2,
          borderColor:'#00ccff',
          barBorderRadius:[30,30,0,0],
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
          color:'#00ccff',
          borderColor:'#33ffff'
        }
      },
      zlevel: 9,
      data: datas.seriesData[0]
    },
      {
        name: datas.legendData[1],
        type: 'bar',
        barWidth:14,
        itemStyle:{
          normal:{
            color:'rgba(61,175,31,.3)',
            borderWidth:2,
            borderColor:'#3daf1f',
            barBorderRadius:[30,30,0,0],
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              },
              formatter:function(params){
                if(params.value === 0){
                  return '';
                }else
                {
                  return params.value.toLocaleString();
                }
              }
            },
          },
          emphasis:{
            color:'#49cd27',
            borderColor:'#7fff5f'
          }
        },
        zlevel: 9,
        barCategoryGap:'40%',
        data: datas.seriesData[1]
      }]
  };
  myChart.setOption(option);

}