function startRender(datas){
  var myChart = echarts.init(document.getElementById(datas.el));
  var option = {
//      backgroundColor:'#003e2e',
    title: {
      text: datas.titleData,
      left:25,
      top:5,
      textStyle:{
        color: '#fff',
        fontSize:14,
        fontWeight:'normal'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c}"
    },
    calculable: true,
    series: [
      {
        name: datas.titleData,
        type:'funnel',
        left: '30%',
        top: 80,
        bottom: 80,
        width: '36%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'ascending',
        gap: 2,
        label: {
          normal: {
            show: true,
            position: 'inside'
          },
          emphasis: {
            textStyle: {
              fontSize: 20,
              padding:0
            }
          }
        },
        labelLine: {
          normal: {
            show: false,
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          }
        },
        itemStyle: {
          normal: {
            color: function(params) {
              // build a color map as your need.
              var colorList = [
                '#126029','#006f6d','#FCCE10','#E87C25','#27727B',
                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
              ];
              return colorList[params.dataIndex]
            }
          }
        },
        data: [
          {
            value: datas.valueData[0],
            name: datas.nameData[0],
            itemStyle:{
              normal:{
                borderWidth: 2,
                borderColor: '#93fe79'
              }
            },
            label:{
              normal:{
                show: true,
                position: 'right',
                formatter: '{b}{c}'+'种',
                textStyle:{
                  fontSize: 16,
                  padding:[0,0,0,15],
                  color:'#93fe79'
                }
              }
            }
          },
          {
            value: datas.valueData[1],
            name: datas.nameData[1],
            itemStyle:{
              normal:{
                borderWidth: 2,
                borderColor: '#00ccff'
              }
            },
            label:{
              normal:{
                show: true,
                position: 'right',
                formatter: '{b}{c}'+'种',
                textStyle:{
                  fontSize: 16,
                  padding:[0,0,0,15],
                  color:'#00ccff'
                }
              }
            }
          }
        ]
      }
    ]
  };
  myChart.setOption(option);
}