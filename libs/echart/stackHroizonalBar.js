function stackBar(datas){
  var url = ['image://../../img/icon2.png','image://../../img/icon1.png','image://../../img/icon4.png'];
  var myChart = echarts.init(document.getElementById(datas.id));
  var option = {
    // backgroundColor:'#003a2b',
    title:{
      text:datas.titleData,
      left:25,
      top:22,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: [
        {
          name:datas.legendData[0],
          icon:url[0]
        },
        {
          name:datas.legendData[1],
          icon:url[1]
        },
        {
          name:datas.legendData[2],
          icon:url[2]
        }
      ],
      itemWidth:12,
      itemHeight:12,
      itemGap: 30,
      textStyle:{
        color:'#d9eee7'
      },
      bottom:'3%'
      // itemWidth:'80px',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top:'18%',
      containLabel: true
    },
    xAxis:  {
      type: 'value',
      axisTick:{
        show:false
      },
      splitLine:{
        show:false
      },
      axisLine:{
        lineStyle:{
          color:'#62e2dd'
        }
      },
      axisLabel:{
        textStyle:{
          color:'#d9eee7'
        }
      }
    },
    yAxis: {
      type: 'category',
      inverse:true,
      data: datas.yAxisData,
      axisTick:{
        show:false
      },
      axisLine:{
        lineStyle:{
          color:'#62e2dd'
        }
      },
      axisLabel:{
        textStyle:{
          color:'#d9eee7'
        }
      }
    },
    series: [
      {
        name: '板栗',
        type: 'bar',
        stack: '总量',
        barWidth:16,
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          }
        },
        itemStyle:{
          normal:{
            color:"rgba(61,175,31,.3)",
            borderColor:'rgba(127,255,95,.5)'
          }
        },
        data: datas.seriesData[0]
      },
      {
        name: '苹果',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        itemStyle:{
          normal:{
            color:"rgba(1,138,254,.3)",
            borderColor:'rgba(34,154,255,.7)'
          }
        },
        data:datas.seriesData[0]
      },
      {
        name: '杏子',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: datas.seriesData[0],
        itemStyle:{
          normal:{
            color:"rgba(99,253,191,.3)",
            borderColor:'rgba(99,253,191,.5)'
          }
        },
      }
    ]
  };
  myChart.setOption(option)
}