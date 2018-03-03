var emottype='',time = '',curr='';
changeNavTo('农产品舆情','舆情检索');
$('.small-title-icon span:last-child').click(function () {
  if($(this).hasClass('icon-shoucang')){
    $(this).addClass('icon-collection').removeClass('icon-shoucang').css('color','#f00')
  }else{
    $(this).addClass('icon-shoucang').removeClass('icon-collection').css('color','#98fdcb')
  }
})
layui.use(['form','laydate','laypage'],function () {
  var laypage = layui.laypage;
  laypage({
    cont: 'page',
    pages: 100,
    groups:5,
    skin: '#26A0FE',
    skip: true,
    // 触发分页后的回调，函数返回两个参数。
    //obj是一个object类型。包括了分页的所有配置信息。
    //first一个Boolean类，检测页面是否初始加载。非常有用，可避免无限刷新。
    jump: function(obj, first){
      //得到了当前页，用于向服务端请求对应数据
       curr = obj.curr;
    }
  });
  var form = layui.form();
   // 选择情感类型
   form.on("select(emottype)",function(data){
      console.log(data.value)
      emottype = data.value;
   });

   //单选按钮
   form.on('radio(time1)', function(data){
      //console.log(data.elem); 得到radio原始DOM对象
      //console.log(data.value); 被点击的radio的value值
      if(data.value=="自定义"){
          $("#start1").attr("disabled",false)
          $("#end1").attr("disabled",false)
          limitTime("start1","end1");
      }else{
        $("#start1").attr("disabled",true)
        $("#end1").attr("disabled",true)
      }
    });
})
$('.search-word').click(function () {
  $(this).addClass('active').siblings().removeClass("active");
})
// 搜索功能
$(".search-btn").click(function(){
  var keyWords = $("#keyWords").val()
  var artsort = $(".article-sort .active").text();
  var choose = $(".layui-form-checkbox").hasClass("layui-form-checked")

  console.log(keyWords,choose,emottype,artsort,curr)

});
// 收藏
$(".collect").click(function(){
  if( $(this).hasClass("icon-shoucang") ){
      alert("取消收藏")
  }else{
    alert("收藏成功")
  }
})