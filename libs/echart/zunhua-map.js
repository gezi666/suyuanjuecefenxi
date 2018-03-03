function smallMap(id,datas) {
  // var ChartLib = require('../../libs/echart/chart-library.min.js');
// var $ = require('../../libs/echart/jquery-1.12.3.min.js');

  var Zunhua = ChartLib.Zunhua;

  var zunhua = new Zunhua({
    title:'遵化农产品产业布局',
    backgroundColor:'rgba(255,255,255,0)',
    markFruit:'../../img/fruit.png',
    markAnimal:'../../img/animal.png',
    markEat:'../../img/eat.png',
    markVegetable:'../../img/vegetable.png'
  });
//这是往组件传递数据的格式
  zunhua.data = datas;
//下面是获取到页面上要放置组件的盒子，然后把已经布局好的盒子的宽高传递给图表
  var mapBox = document.getElementById(id);
  zunhua.width = mapBox.clientWidth;
  zunhua.height = mapBox.clientHeight;
//document.body.appendChild(smallChina.domElement);
  mapBox.appendChild(zunhua.domElement);
//轮播的数据
//如下是定时器运行时候渲染数据的数据格式（三维数组）

}



//上面选项卡
// var tabLi = $('#map ul li');
// $('#map ul').on('click','li',function(){
//   var index = $(this).index();
//   tabLi.removeClass('active');
//   tabLi.eq(index).addClass('active');
// });



