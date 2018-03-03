function pieRender(datas) {
  var showData = datas.showData?datas.showData:false;
  var myChart = echarts.init(document.getElementById(datas.id));
  var dataColor = ['#00d2ff','#018afe','#4af81b','#a6e412','#fdbf00','#fd9500','#00ffd9','#eb7903','#e4b305','#21c77a'];
  var dataValue = [];
  datas.nameData.forEach(function(v,i){
    dataValue.push({
      value:datas.seriesData[i],
      name:v,
      itemStyle:{
        normal:{
          borderColor:dataColor[i]
        }
      },
      label:{
        normal:{
          textStyle:{
            color:dataColor[i]
          }
        }
      }
    })
  });
  var option = {
    title:{
      show:showData,
      text:datas.titleData,
      left:25,
      top:20,
      textStyle:{
        fontSize:14,
        color:'#fff',
        fontWeight:'normal'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params){
        var html = '';
        // console.log(params)
        html += '<div style="text-align:center;"><span style="margin:0;padding:0;">'+params.name+'：</span><span>'+params.percent+'%</span></div>';
        return html
      },
      // backgroundColor:'transparent',
      // position: ['42%', '40%'],
      // textStyle:{
      //   fontSize:20
      // }
    },
    series: [
      {
        name:'分布',
        type:'pie',
        radius: ['35%', '50%'],
        color:['#1ea9f9','#fbd657'],
        labelLine: {
          normal: {
            show:true,
            length: 10,
            length2: 15,
            lineStyle:{
              width:1
            }
          }
        },
        itemStyle: {
          normal: {
            color: function(params) {
              // build a color map as your need.
              var colorList = [
                'rgba(0,210,255,.4)','rgba(1,134,254,.3)','rgba(74,248,27,.3)','rgba(166,228,18,.3)','rgba(253,191,0,.5)',
                'rgba(253,149,0,.5)','rgba(50,255,224,1)','#7f5c1a','#7f8219','#00814d'
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
            // show: false,
          }
        },
        data:dataValue
      }
    ]
  };
  myChart.setOption(option)
}