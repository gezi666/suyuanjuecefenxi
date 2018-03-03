function stackBar(datas){
  var url = ['image://../../img/icon1.png','image://../../img/icon2.png'];
  var myChart = echarts.init(document.getElementById(datas.id));
  var option= {
    title:{
      text:datas.titleData,
      left:25,
      top:10,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      top:'10%',
      bottom: '26%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      formatter:function(param){
        var html = '';
        html+='<p>'+param[0].name+'</p>'
          +'<p><span>溯源面积：</span><span>'+param[0].data.value1+'</span></p>'
          +'<p><span>溯源面积总占比：</span><span>'+param[0].data.value+'%</span></p>'
          +'<p><span>非溯源面积：</span><span>'+param[1].data.value1+'</span></p>'
          +'<p><span>非溯源面积总占比：</span><span>'+param[1].data.value+'%</span></p>'
        return html
      },
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0,87, 55, 0.8)'
        }
      }
    },
    dataZoom: [ {
      start: 20,
      end: 80,
      height: 10,
      borderRadius:100,
      fillerColor: '#008c59',
      borderColor:'#00794f',
      backgroundColor: 'rgba(255,255,255,0)',
      handleStyle:{color:'#008c59'},
      handleSize:'100%',
      handleIcon:'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      textStyle: {color: '#fff'},
      showDataShadow: false,

    }],
    legend: {
      bottom:45,
      itemWidth:12,
      itemHeight:12,
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
      offset:20,
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
      data: datas.xData
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
        formatter:'{value}%',
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
      stack: '总量',
      itemStyle:{
        normal:{
          color:'rgba(0,204,255,.3)',
          borderWidth:2,
          borderColor:'#00ccff',
          barBorderRadius:[0,0,30,30],
          label: {
            show: true,
            position: 'bottom',
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
        stack: '总量',
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
                }else{
                  return params.value.toLocaleString();
                }
              }
            }
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