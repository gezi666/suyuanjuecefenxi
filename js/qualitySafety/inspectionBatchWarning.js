var timeFlag = "近一年";
var parentId = "";
changeNavTo('质量安全', '检测检验批次预警');
layui.use(['form','laydate'],function () {
 var form = layui.form();
 form.on("select(type)",function(data){
      parentId = data.value;
      randomEchart(timeFlag,parentId);
   });
   form.on("select(time)",function(data){
      timeFlag = data.value;
      randomEchart(timeFlag,parentId);
   });
});
// 渲染页面所有图表
function randomEchart(timeFlag,parentId){
    myChart2();
    myChart3();
    myChart4();
    chart1();
    chart2();
    chart3();
    treeLine();
    gauge();
}
randomEchart(timeFlag,parentId);
// 随机数模仿数据
function randoms(){
  return Math.floor( Math.random()*90+10 )
}
//预警级别折线图
function myChart2() {
  var markData = {
    id:'myChart2',
    xAxisData:['17-06-25', '17-06-25', '17-06-25', '17-06-25', '17-06-25', '17-06-25', '17-06-25','17-06-25','17-06-25','17-06-25'],
    seriesData:[randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms()]
  };
  markLine(markData)
}
// 饼图
function myChart3() {
  var pieData = {
    id:'myChart3',
    showData:true,
    titleData:'不合格检测项目分布',
    nameData:['农残检测','土壤检测','水质常规检测','非法添加检测','其他'],
    seriesData:[randoms(),randoms(),randoms(),randoms(),randoms()]
  }
  pieRender(pieData)
}
function myChart4() {
  var pieData = {
    id:'myChart4',
    showData:true,
    titleData:'不合格原因分布',
    nameData:['不合格原因A','不合格原因B','不合格原因C','不合格原因D','不合格原因E','不合格原因F','其他'],
    seriesData:[randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms()]
  }
  pieRender(pieData)
}
//水泡图
function chart(){
  var datas = {
    titleData:'企业1',
    dom:'chart',
    setColor:["#3cae53","#089831"],
    value:[randoms()/100,randoms()/100],
    fontColor:"#fff",
    opacity:0.7
  };
  Liquidfill(datas);
  // 渲染标题
  if(datas.titleData){
    var h3 = '<h3 style="position:absolute;font-size:14px;bottom:5px;width:213px;text-align:center;color:#d9eee7;">'+datas.titleData+'</h3>';
    $('#chart').prepend(h3);
  }else{
    return ;
  }
}
function chart1(){
  var datas = {
    titleData:'企业1',
    dom:'chart1',
    setColor:["#3cae53","#089831"],
    value:[randoms()/100,randoms()/100],
    fontColor:"#fff",
    opacity:0.7
  };
  Liquidfill(datas);
  // 渲染标题
  if(datas.titleData){
    var h3 = '<h3 style="position:absolute;font-size:14px;bottom:5px;width:213px;text-align:center;color:#d9eee7;">'+datas.titleData+'</h3>';
    $('#chart1').prepend(h3);
  }else{
    return ;
  }
}
function chart2(){
  var datas = {
    titleData:'企业2',
    dom:'chart2',
    setColor:["#3cae53","#089831"],
    value:[randoms()/100,randoms()/100],
    fontColor:"#fff",
    opacity:0.7
  };
  Liquidfill(datas);
  // 渲染标题
  if(datas.titleData){
    var h3 = '<h3 style="position:absolute;font-size:14px;bottom:5px;width:213px;text-align:center;color:#d9eee7;">'+datas.titleData+'</h3>';
    $('#chart2').prepend(h3);
  }
}
function chart3(){
  var datas = {
    titleData:'企业3',
    dom:'chart3',
    setColor:["#3cae53","#089831"],
    value:[randoms()/100,randoms()/100],
    fontColor:"#fff",
    opacity:0.7
  };
  Liquidfill(datas);
  // 渲染标题
  if(datas.titleData){
    var h3 = '<h3 style="position:absolute;font-size:14px;bottom:5px;width:213px;text-align:center;color:#d9eee7;">'+datas.titleData+'</h3>';
    $('#chart3').prepend(h3);
  }
}
// 
function treeLine(){
    $("#mapTree").html("");
  var treeData={
        "name": "栗源包装50吨",
        "children": [
        {
            "name": "批发市场1批发市场",
            "value": randoms(),
            "state": "red",
            "children": [{
                "name": "经销商1",
                "value": randoms(),
                "state": "yellow"
            }, {
                "name": "经销商2",
                "value": randoms(),
                "state": "green"
            }, {
                "name": "经销商3",
                "value": randoms(),
                "state": "green"
            }]
        },
        {
            "name": "批发市场2",
            "value": randoms(),
            "state":"green",
            "children": [{
                "name": "经销商4",
                "value": randoms(),
                "state": "green"
            }, {
                "name": "经销商5",
                "value": randoms(),
                "state": "green",
                "children": [{
                    "name": "经销商4",
                    "value": randoms(),
                    "state": "green"
                }, {
                    "name": "经销商5",
                    "value": randoms(),
                    "state": "green"
                }]
            }]
        },
        {
            "name": "批发市场2",
            "value": randoms(),
            "state":"green",
            "children": [{
                "name": "经销商4",
                "value": randoms(),
                "state": "green"
            }, {
                "name": "经销商5",
                "value": randoms(),
                "state": "green",
                "children": [{
                    "name": "经销商4",
                    "value": randoms(),
                    "state": "green"
                }, {
                    "name": "经销商5",
                    "value": randoms(),
                    "state": "green"
                }]
            }]
        },
        {
            "name": "批发市场2",
            "value": randoms(),
            "state":"green",
            "children": [{
                "name": "经销商4",
                "value": randoms(),
                "state": "green"
            }, {
                "name": "经销商5",
                "value": randoms(),
                "state": "green",
                "children": [{
                    "name": "经销商4",
                    "value": randoms(),
                    "state": "green"
                }, {
                    "name": "经销商5",
                    "value": randoms(),
                    "state": "green"
                }]
            }]
        },
        {
            "name": "批发市场2",
            "value": 20,
            "state":"green",
            "children": [{
                "name": "经销商4",
                "value": 10,
                "state": "green"
            }, {
                "name": "经销商5",
                "value": 10,
                "state": "green",
                "children": [{
                    "name": "经销商4",
                    "value": 10,
                    "state": "green"
                }, {
                    "name": "经销商5",
                    "value": 10,
                    "state": "green"
                }]
            }]
        },
        {
            "name": "批发市场2",
            "value": 20,
            "state":"green",
            "children": [{
                "name": "经销商4",
                "value": 10,
                "state": "green"
            }, {
                "name": "经销商5",
                "value": 10,
                "state": "green",
                "children": [{
                    "name": "经销商4",
                    "value": 10,
                    "state": "green"
                }, {
                    "name": "经销商5",
                    "value": 10,
                    "state": "green"
                }]
            }]
        },
        {
            "name": "批发市场2",
            "value": 20,
            "state":"green",
            "children": [{
                "name": "经销商4",
                "value": 10,
                "state": "green"
            }, {
                "name": "经销商5",
                "value": 10,
                "state": "green",
                "children": [{
                    "name": "经销商4",
                    "value": 10,
                    "state": "green"
                }, {
                    "name": "经销商5",
                    "value": 10,
                    "state": "green"
                }]
            }]
        }]
    };
    option={
        width:1280,
        height:450,
        red:'../../img/red.png',
        yellow:'../../img/yellow.png',
        green:'../../img/green.png'
    };
    var treenline=treeLib.createtree;
    var treeLine=new treenline();
    treeLine.setLine(treeData,option);
}
//仪表盘
function gauge(){
    $("#gauge").html("");
  var dashBoardChart = libMain.DashBoardChart;
  var chart = new dashBoardChart();
  var titleText = '农产品质量安全综合指数'
  chart.init({
    width:130,
    height:130,
    minVal:0,
    maxVal:100,
    value:randoms()/100
  });
}