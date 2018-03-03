var params1 = {
    titleName:'',
    keyWord:'',
    mediaType:'',
    time:'',
};
changeNavTo('农产品舆情','舆情分析');
layui.use(['form','laydate'],function () {
   var form = layui.form();
   // 选择主题名称
   form.on("select(titlename)",function(data){
      console.log(data.value)
      randomEchart();
   });
   // 获取关键字
   $(".title-input").click(function(){
      var titleArr = [],titleStr = "";
      if($(this).hasClass("active")){
        $(this).removeClass("active")
      }else{
         $(this).addClass("active")
      }
      $(".form-item .active").each(function(i,v){
          titleStr+=$(v).val();
          titleArr.push($(v).val())
      })
      console.log(titleStr,titleArr)
      randomEchart();
   })
   // 情感走势-选择媒体类型
   form.on("select(mediatype1)",function(data){
      console.log("情感走势"+data.value)
      emotionMove();
   });
   // 负面信息来源-选择媒体类型
   form.on("select(mediatype2)",function(data){
      console.log("情感分布"+data.value)
      negativeSource()
   });
   // 媒体来源排行-选择媒体类型
   form.on("select(mediatype3)",function(data){
      console.log("媒体来源排行"+data.value)
      mediaSources();
   });
   // 情感走势-单选按钮
   form.on('radio(time1)', function(data){
      //console.log(data.elem); 得到radio原始DOM对象
      //console.log(data.value); 被点击的radio的value值
      if(data.value=="自定义"){
          $("#start1").attr("disabled",false)
          $("#end1").attr("disabled",false)
          limitTime("start1","end1",emotionMove);
      }else{
        emotionMove();
        $("#start1").attr("disabled",true)
        $("#end1").attr("disabled",true)
      }
    });
   //情感走势-单选按钮
   form.on('radio(time2)', function(data){
      //console.log(data.elem); 得到radio原始DOM对象
      //console.log(data.value); 被点击的radio的value值
      if(data.value=="自定义"){
          $("#start2").attr("disabled",false)
          $("#end2").attr("disabled",false)
          limitTime("start2","end2",emotionDistribution);
      }else{
        emotionDistribution();
        $("#start2").attr("disabled",true)
        $("#end2").attr("disabled",true)
      }
      
    });
   //情感走势-单选按钮
   form.on('radio(time3)', function(data){
      //console.log(data.elem); 得到radio原始DOM对象
      //console.log(data.value);被点击的radio的value值
      if(data.value=="自定义"){
          $("#start2").attr("disabled",false)
          $("#end2").attr("disabled",false)
          limitTime("start3","end3",negativeSource);
      }else{
        negativeSource();
        $("#start2").attr("disabled",true)
        $("#end2").attr("disabled",true)
      }
    });
   //情感走势-单选按钮
   form.on('radio(time4)', function(data){
      //console.log(data.elem); 得到radio原始DOM对象
      //console.log(data.value); 被点击的radio的value值
      if(data.value=="自定义"){
          $("#start4").attr("disabled",false)
          $("#end4").attr("disabled",false)
          limitTime("start4","end4",mediaReach);
      }else{
        mediaReach();
        $("#start4").attr("disabled",true)
        $("#end4").attr("disabled",true)
      }
    });
   //情感走势-单选按钮
   form.on('radio(time5)', function(data){
      //console.log(data.elem); 得到radio原始DOM对象
      //console.log(data.value); 被点击的radio的value值
      if(data.value=="自定义"){
          $("#start5").attr("disabled",false)
          $("#end5").attr("disabled",false)
          limitTime("start5","end5",mediaSources);
      }else{
        mediaSources();
        $("#start5").attr("disabled",true)
        $("#end5").attr("disabled",true)
      }
    });

})
// 渲染页面所有图表
randomEchart();
function randomEchart(timeFlag,parentId){
  emotionMove();
  emotionDistribution();
  negativeSource()
  mediaReach();
  mediaSources();
}

function randoms(){
  return Math.floor( Math.random()*100+10 )
}
//情感走势-开始时间和终止时间回调-折线图
function emotionMove(){
  var lineData = {
    id:'myChart2',
    titleData:'',
    legendBorder:true,
    grid:{
      left: '5%',
      right: '5%',
      bottom: '25%',
      top: '10%'
    },
    legendData:  ['正面', '中立', '负面'],
    xAxisData: ['1', '2', '3', '4', '5', '6', '7', '8' ,'9', '10', '11', '12'],
    seriesData:[
      [randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms()],
      [randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms()],
      [randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms()]
    ]
  }
  lineChart(lineData)
}
//情感分布-开始时间和终止时间回调-饼图
function emotionDistribution() {
  var pieData = {
    id:'myChart3',
    seriesData:[randoms(),randoms(),randoms()],
    nameData:['正面','中立','负面'],
  };
  pieRender(pieData)
}
//负面信息来源-开始时间和终止时间回调-饼图
function negativeSource(){
  var pieData = {
    id:'myChart4',
    seriesData:[randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms()],
    nameData:['百度','微信公众号','新浪微博','新浪网','突袭新闻网','浦东新闻网','人民网','南充网','中国网','东方财富网']
  };
  pieRender(pieData)
}
//媒体类型覆盖-开始时间和终止时间回调-饼图
function mediaReach() {
  var pieData = {
    id:'myChart5',
    seriesData:[randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms(),randoms()],
    nameData:['报刊','视频','论坛','博客','微博','微信','新闻','贴吧']
  };
  pieRender(pieData)
}
//媒体来源排行-开始时间和终止时间回调-饼图
function mediaSources() {
  var entData = [
    {name:'百度',value:randoms()},
    {name:'微信公众号',value:randoms()},
    {name:'新浪微博',value:randoms()},
    {name:'新浪网',value:randoms()},
    {name:'突袭新闻网',value:randoms()},
    {name:'浦东新闻网',value:randoms()},
    {name:'人民网',value:randoms()},
    {name:'南充网',value:randoms()},
    {name:'中国网',value:randoms()},
    {name:'东方财富网',value:randoms()}
  ];
  //数据重新排序
  function rankArry(x,y){
    return x.value > y.value ?-1:1
  }
  var xAxis = [];
  var seriesData= [];
  entData.sort(rankArry).forEach(function (v,i) {
    // console.log(v)
    xAxis.push(v.name);
    seriesData.push(v.value);
  });
  var barData = {
    id:'myChart6',
    titleData:'',
    // legendShow:false
    labelShow:false,
    rotate:30,
    margin:20,
    grid:{
      right: '5%',
      left: '15%',
      bottom: '20%',
      top: '20%'
    },
    xAxis:xAxis,
    seriesData:seriesData
  };
  barChart(barData)
}

