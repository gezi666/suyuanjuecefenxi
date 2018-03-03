function barChart(datas){
  var labelShow = (datas.labelShow == false)?datas.labelShow:true; //x轴是否显示
  var legendShow = datas.legendShow?datas.legendShow:false;  // 各项图例是否显示
  var rotate = datas.rotate?datas.rotate:0; //x轴标签旋转角度
  var margin = datas.margin?datas.margin:''; //x轴标签与坐标轴距离
  var grid = datas.grid?datas.grid:{right: '5%',left: '15%',bottom: '15%',top: '16%'};
  var myChart = echarts.init(document.getElementById(datas.id));
  var echartOpt = {
    fz: '14',
    color: '#d9eee7'
  };
  var option = {
    title:{
      text: datas.titleData,
      left:25,
      top:5,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    // backgroundColor:'#003e2e',
    grid: grid,
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
      show: legendShow,
      data: [{
        name:'溯源产品量（万吨）',
        icon:'circle'
      }],
      right: 'center',
      top: 'bottom',
      textStyle: {
        color: echartOpt.color,
        fontSize: echartOpt.fz
      },
      itemHeight: 20,
      itemWidth: 15
    },
    calculable: true,
    xAxis: {
      type: 'category',
      offset:10,
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
        rotate: rotate,
        margin:margin,
        align:'center',
        textStyle: {
          fontSize: echartOpt.fz,
          color: echartOpt.color
        }
      },
      // splitLine: {
      //     show: true,
      //     lineStyle: {
      //         color: ['#2f46a1']
      //     }
      // },
      data:datas.xAxis,
    },
    yAxis: {
      type: 'value',
      name: '',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: echartOpt.fz,
          color: echartOpt.color
        }
      },
      axisLine: {
        lineStyle: {
          color: echartOpt.color,
          fontSize: echartOpt.fz
        }
      }
    },
    series: [{
      name: '溯源产品量（万吨）',
      type: 'bar',
      barMaxWidth: 20,
      // label: {
      //   normal: {
      //     show: true,
      //     position: 'top'
      //   }
      // },
      itemStyle: {
        normal: {
          color: /*new echarts.graphic.LinearGradient(
           0, 0, 0, 1, [{
           offset: 0,
           color: '#00b8fe'
           }, {
           offset: 1,
           color: '#1846a3'
           }]
           ),*/function(params) {
            // build a color map as your need.
            var colorList = [
              '#006f6d','#126029','#FCCE10','#E87C25','#27727B',
              '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
              '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
            ];
            return colorList[params.dataIndex]
          },
          opacity:0.5,
          barBorderRadius: [30,30,0,0],
          barBorderWidth:2,
          barBorderColor: '#87fa54',
          label: {
            show: labelShow,
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