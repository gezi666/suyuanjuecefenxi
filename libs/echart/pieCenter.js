function renderChart(datas) {
  var myChart = echarts.init(document.getElementById('myChart3'));
  var option = {
//      backgroundColor:'#003e2e',
    title:{
      text:datas.titleData,
      // subtext:'环境污染治理\n 投资总额占\n  比GDP比',
      left:25,
      top:5,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:"normal"
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
      {
        name:'转化率',
        type:'pie',
        radius: ['40%', '55%'],
        color:['#1ea9f9','#fbd657'],
        labelLine: {
          normal: {
            show:false
          }
        },
        itemStyle: {
          normal: {
            color: function(params) {
              // build a color map as your need.
              var colorList = [
                '#006f6d','#126029','#FCCE10','#E87C25','#27727B',
                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
              ];
              return colorList[params.dataIndex]
            }
          }
        },
        label: {
          normal: {
            show: true,
            position:'center',
            padding:[25,0,0,0],
            formatter:function(obj){
              if( obj.name == '已转化'){
                if(obj.value < 10000){
                  // console.log(obj.value)
                  return obj.value+'次'
                }else if(obj.value >= 10000){
                  // console.log(obj.value.toString().slice(0,obj.value.toString().length - 4));
                  return obj.value.toString().slice(0,obj.value.toString().length - 4) + '\n万余次'
                }
              }else{
                return ''
              }
            },
            textStyle:{
              fontSize: 20,
              color:'#7fff5f'
            }
          }
        },
        data:[
          {
            value: datas.valueData[1],
            name: '已转化',
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: '#00ccff'
              }
            }
          },
          {
            value:datas.valueData[0],
            name:'未转化',
            itemStyle:{
              normal:{
                borderWidth:3,
                borderColor:'#7fff5f'
              }
            }
            // label:{
            //   normal:{
            //     show: false,
            //   }
            // },
          }
        ]
      }
    ]
  };
  myChart.setOption(option)
}