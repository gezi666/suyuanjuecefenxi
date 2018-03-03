function pieHover(datas){
  var emphasis = datas.emphasis?datas.emphasis:false;
  var radiusData = datas.radiusData?datas.radiusData:['35%', '50%'];
  var myChart = echarts.init(document.getElementById(datas.id));
  var option = {
    // backgroundColor:'#003e2e',
    title:{
      text:datas.titleData,
      left:25,
      top:20,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:"normal"
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params){
        var html = '';
        // console.log(params)
        html += '<div style="text-align:center;"><span>'+params.percent+'%</span><br><span style="margin:0;padding:0;">'+params.name+'</span></div>';
        return html
      },
      backgroundColor:'transparent',
      position: ['40%', '40%'],
      textStyle:{
        fontSize:18
      }
    },
    series: [
      {
        name:'转化率',
        type:'pie',
        radius: radiusData,
        color:['#1ea9f9','#fbd657'],
        labelLine: {
          normal: {
            show:true,
            length: 15,
            length2: 25,
            lineStyle:{
              width:2
            }
          }
        },
        itemStyle: {
          normal: {
            color: function(params) {
              // build a color map as your need.
              var colorList = [
                'rgba(0,210,255,.4)','rgba(1,134,254,.3)','rgba(74,248,27,.3)','rgba(166,228,18,.3)','rgba(253,191,0,.5)',
                'rgba(253,149,0,.5)','rgba(50,255,224,1)'
              ];
              return colorList[params.dataIndex]
            },
            borderWidth:2,
          }
        },
        label:{
          normal:{
            show: true,
            formatter: '{b}\n{d}%',
            textStyle:{
              fontSize: 12,
            }
          },
          emphasis:{
            show: emphasis,
          }
        },
        data:[
          {
            value:datas.seriesData[0],
            name:datas.nameData[0],
            itemStyle:{
              normal:{
                borderColor:'#00d2ff'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#00d2ff'
                }
              }
            },
          },
          {
            value:datas.seriesData[1],
            name:datas.nameData[1],
            itemStyle:{
              normal:{
                borderColor:'#018afe'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#018afe'
                }
              }
            },
          },
          {
            value:datas.seriesData[2],
            name:datas.nameData[2],
            itemStyle:{
              normal:{
                // borderWidth:2,
                borderColor:'#4af81b'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#4af81b'
                }
              }
            },
          },
          {
            value:datas.seriesData[3],
            name:datas.nameData[3],
            itemStyle:{
              normal:{
                // borderWidth:2,
                borderColor:'#a6e412'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#a6e412'
                }
              }
            },
          },
          {
            value:datas.seriesData[4],
            name:datas.nameData[4],
            itemStyle:{
              normal:{
                // borderWidth:2,
                borderColor:'#fdbf00'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#fdbf00'
                }
              }
            },
          },
          {
            value:datas.seriesData[5],
            name:datas.nameData[5],
            itemStyle:{
              normal:{
                // borderWidth:2,
                borderColor:'#fd9500'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#fd9500'
                }
              }
            },
          },
          {
            value:datas.seriesData[6],
            name:datas.nameData[6],
            itemStyle:{
              normal:{
                // borderWidth:2,
                borderColor:'#00ffd9'
              }
            },
            label:{
              normal:{
                textStyle:{
                  color:'#00ffd9'
                }
              }
            },
          }
        ]
      }
    ]
  };
  myChart.setOption(option)
}