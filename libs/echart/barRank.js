function colBar(datas){
  // console.log(startData.otherDatas)
  var showData = (datas.showData == false) ? datas.showData:true;
/*  // console.log(showData);
  var seriesData = [];
  var yAxisData = [];
  $.each(datas.otherDatas,function(i,v){
    seriesData.push(v.value);
    yAxisData.push(v.name);
  });*/

  // console.log(yAxisData,seriesData)
  var newDatas = {
    el:datas.el,
    titleData:datas.titleData,
    seriesData:datas.seriesData,
    yAxisData:datas.yAxisData
  };
  var myChart = echarts.init(document.getElementById(newDatas.el));
  var echartOpt = {
    fz: '14',
    color: '#d9eee7'
  };
  var option = {
    title:{
      text:newDatas.titleData,
      left:25,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    // backgroundColor:'#003e2e',
    grid: {
      right: '8%',
      left: '25%',
      bottom: '15%',
      top: '10%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0,87, 55, 0.8)'
        }
      },
      formatter: function(params) {
        // console.log(params)
        var str = params[0].name + "<br>";
        params.forEach(function(v, i) {
          str += v.seriesName + ": " + v.value + "万吨" + "<br>";
        });
        return str
      },
      textStyle: {
        align: 'left',
        color: '#e8f0ee',
        fontSize: '16'
      },
      // backgroundColor: 'rgba(0, 87, 55, 0.8)',
      // borderWidth: '1',
      // borderColor: '#5cc1ff',
      // extraCssText: 'box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);'
    },
    legend: {
      show:showData,
      data: [{
        name:'溯源产品量（万吨）',
        icon:'image://../../img/icon2.png'
      }],
      right: 'center',
      top: 'bottom',
      textStyle: {
        color: echartOpt.color,
        fontSize: echartOpt.fz
      },
      itemHeight: 12,
      itemWidth: 12
    },
    calculable: true,
    yAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: echartOpt.color
        }
      },
      axisTick: {
        show: false,
        interval: 0,
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: '0',
        formatter:function(params){
            if(params.length>6){
              return params.substr(0,5)+"...";
            }else{
                return params;
            }
        },
        textStyle: {
          fontSize: 12,
          fontWeight:'normal',
          color: '#d9eee7'
        }
      },
      data: datas.yAxisData,
    },
    xAxis: {
      type: 'value',
      name: '',
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#2f46a1']
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: showData,
        textStyle: {
          fontSize: echartOpt.fz,
          color: echartOpt.color
        }
      },
      axisLine: {
        show:showData,
        lineStyle: {
          color: echartOpt.color,
          fontSize: echartOpt.fz
        }
      }
    },
    series: [{
      name: '溯源产品量（万吨）',
      type: 'bar',
      barMaxWidth: 15,
      itemStyle: {
        normal: {
          color: '#49cd27',
          opacity:0.5,
          barBorderRadius: [0, 30, 30, 0],
          barBorderWidth:2,
          barBorderColor: '#87fa54',
          label: {
            show: true,
            position: 'right',
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
        emphasis: {
          color:'#49cd27',
          opacity: 1
        }
      },
      data: datas.seriesData,
      zlevel: 9
    }]
  };
  myChart.setOption(option);
}