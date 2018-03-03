changeNavTo('质量安全', '遵化检测检验批次监测');
layui.use(['form','laydate'],function () {
  var form = layui.form(),
  laydate = layui.laydate;
  // 情感走势-单选按钮
  form.on('radio(time1)', function(data){
    //console.log(data.elem); 得到radio原始DOM对象
    //console.log(data.value); 被点击的radio的value值
    if(data.value=="自定义"){
        $("#start1").attr("disabled",false)
        $("#end1").attr("disabled",false)
        limitTime("start1","end1",isQualify);
    }else{
      $("#start1").attr("disabled",true);
      $("#end1").attr("disabled",true);
      isQualify();
    }
  });
  //农产品检测检验批次区域分布-下拉框
  form.on("select(type1)",function(data){
      console.log("媒体来源排行"+data.value)
      hotWord();
  });
  //农产品检测检验项目批次分布-下拉框
  form.on("select(type2)",function(data){
      console.log("媒体来源排行"+data.value)
      myChart3();
  });
  //检测品种批次分布-下拉框
  form.on("select(type3)",function(data){
      console.log("媒体来源排行"+data.value)
      myChart4();
  });
  //检测环节批次分布-下拉框
  form.on("select(type4)",function(data){
      console.log("媒体来源排行"+data.value)
      myChart5();
  });

})

function randomEchart(){
   
}
function randoms(){
  return Math.floor( Math.random()*100+10 )
}
myChart3();
myChart4();
myChart5();
hotWord();
isQualify();
// 合格不合格数量
function isQualify(){
  $("#qualified").text(randoms());
  $("#disqualification").text(randoms());
}
//柱状图
function myChart3() {
  var barData ={
    id:'myChart3',
    titleData:'',
    // legendShow:false
    xAxis:['农残检测', "微生物检测", "水污染检测", "检测项1", "检测项1", "检测项1", "检测项1", "检测项1", "检测项1", "检测项1"],
    seriesData:[randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms()],
    grid:{right: '5%',left: '5%',bottom: '15%',top: '12%'}
  }
  barChart(barData)
}

// 饼图
function myChart4() {
  var pieData = {
    id:'myChart4',
    seriesData:[randoms(),randoms(),randoms()],
    nameData:['香菇','核桃','苹果'],
  }
  pieRender(pieData)
}
function myChart5() {
  var pieData = {
    id:'myChart5',
    seriesData:[randoms(),randoms(),randoms(),randoms()],
    nameData:['加工环节','生产环节','流通环节','销售环节'],
  }
  pieRender(pieData)
}
//气泡图
function hotWord() {
  $("#hotWord").html("");
  var data = [{
    "id": "遵化镇",
    "name":'3938',
    "value": randoms()
  }, {
    "id": "遵化镇",
    "name":'3812',
    "value": randoms()
  }, {
    "id": "遵化镇",
    "name":'6710',
    "value": randoms()
  }]
  var scatter = new scatterChart();

  var height = $("#hotWord").height(),
    width = $("#hotWord").width();

  var minRadius = height*0.1;
    var maxRadius = height*0.16;

  scatter.init({

    "domEle": 'hotWord',
    "width": width,
    "height": height

  });
  scatter.setData({
      data:data,
      minRadius:minRadius,
      maxRadius:maxRadius,
      zoom:1
    });
    scatter.on('click', function (e) {
        console.log(e);
    });
  // scatter.setData(data, 1.5); //0.8是控制半径的倍数
}
    