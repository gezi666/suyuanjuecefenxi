var createDate = 2017;
var productId = 2;
changeNavTo('产地追溯', '遵化产业结构');
layui.use('form', function() {
    var form = layui.form();
    // 监听select变化重新渲染图表
    form.on("select(time1)", function(data) {
        var params = {
            createDate: data.value,
            productId: productId
        };
        // 顶部标题种植面积渲染
        titleDataRender();
        myChart1();
        myChart2();
        myChart3();
        myChart4();
        myChart5();
        myChart6();
        myChart7();
        // getAjax("industrialStructure/getAreasData", titleDataRender, params);
        //产地追溯--遵化产业结构--饼图--农产品种植养殖面积结构
        // getAjax("industrialStructure/getAreasTructure", myChart1, params);
        //产地追溯--遵化产业结构--饼图--溯源农产品种养殖面积结构占比
        // getAjax("industrialStructure/getProportion", myChart2, params);
        //产地追溯--遵化产业结构--饼图--溯源农产品种养殖结构
        // getAjax("farmProSalesAnalysis/searchProByType", myChart3, params);
        // //产地追溯--遵化产业结构--柱状图--农产品品种结构分析
        // getAjax("industrialStructure/getRegionStructure", myChart4, params);
        // //产地追溯--遵化产业结构--饼图--溯源品种结构分析
        // getAjax("industrialStructure/getTraceAnaly", myChart6, params);
        // //散点图
        // getAjax("industrialStructure/getTraceProgress", myChart5, params);
    });
    form.on("select(time2)", function(data) {
        var params = {
            createDate: data.value
        };
        myChart6();
    });
})

//类型tab渲染
tabRender(createDate)

function tabType(data) {
    var listData = data.nameData;
    var html = '';
    listData.forEach(function(v, i) {
        if (i == 0) {
            html += '<li class="active">' + v + '</li>'
        } else {
            html += '<li>' + v + '</li>'
        }
    })
    $(".area-tab1").html(html);
}

function tabRender(createDate) {
    var params = {
        createDate: createDate,
        productId: 1
    };
    //tab渲染
    getAjax("industrialStructure/getAreasTructure", tabType, params);
}
// 初始化渲染页面所有图表
initEchart(createDate, productId);

function initEchart(createDate, productId) {
    var params = {
        createDate: createDate,
        productId: productId
    };
    // 顶部标题种植面积渲染
    // getAjax("industrialStructure/getAreasData", titleDataRender, params);
    //产地追溯--遵化产业结构--饼图--农产品种植养殖面积结构
    // getAjax("industrialStructure/getAreasTructure", myChart1, params);
    //产地追溯--遵化产业结构--柱状图--溯源农产品种养殖面积结构占比
    // getAjax("industrialStructure/getProportion", myChart2, params);
    //产地追溯--遵化产业结构--饼图--溯源农产品种养殖结构
    // getAjax("farmProSalesAnalysis/searchProByType", myChart3, params);
    //产地追溯--遵化产业结构--柱状图--农产品品种结构分析
    // getAjax("industrialStructure/getRegionStructure", myChart4, params);
    //产地追溯--遵化产业结构--饼图--溯源品种结构分析
    // getAjax("industrialStructure/getTraceAnaly", myChart6, params);
    //散点图
    // getAjax("industrialStructure/getTraceProgress", myChart5, params);
}

//区域农产品种养殖结构tab条件切换
var textData = '干鲜果';
$('.area-tab1').on('click', 'li', function() {
    textData = $(this).text();
    $(this).addClass('active').siblings().removeClass('active')
    var params = {
        createDate: createDate,
        productId: productId
    };
    // 顶部标题种植面积渲染
    // getAjax("industrialStructure/getAreasData", titleDataRender, params);
    titleDataRender();
    myChart1();
    myChart2();
    myChart3();
    //产地追溯--遵化产业结构--饼图--农产品种植养殖面积结构
    // getAjax("industrialStructure/getAreasTructure", myChart1, params);
    //产地追溯--遵化产业结构--柱状图--溯源农产品种养殖面积结构占比
    // getAjax("industrialStructure/getProportion", myChart2, params);
    //产地追溯--遵化产业结构--饼图--溯源农产品种养殖结构
    // getAjax("farmProSalesAnalysis/searchProByType", myChart3, params);
    //产地追溯--遵化产业结构--柱状图--农产品品种结构分析
    // getAjax("industrialStructure/getRegionStructure", myChart4, params);
    //产地追溯--遵化产业结构--饼图--溯源品种结构分析
    // getAjax("industrialStructure/getTraceAnaly", myChart6, params);
    //散点图
    // getAjax("industrialStructure/getTraceProgress", myChart5, params);
});
//顶部面积小标题渲染
function titleDataRender(data) {
    // console.log(data)
    var html = '<h2>2017年遵化区域' + textData + '种植面积为<span>' + randomData() + '</span>万亩</h2>';
    html += '<h2>其中加入溯源体系的为<span>' + randomData() + '</span>万亩</h2>';
    $('.title-detail').html(html);
}
myChart7();
//iframe页面

// function myChart5() {
// seriesData.push(data.trace)
// seriesData.push(data.untrace)
// var keyData = {
//   id:'myChart',
//   titleData:'主要农产品品种溯源进度',
//   seriesData:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
// }
// myFrame.window.keyWords(keyData)
// myFrame.onload = function() {
//     var keyData = {
//         id: 'myChart',
//         titleData: '主要农产品品种溯源进度',
//         seriesData: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
//     }
//     myFrame.window.keyWords(keyData)
//         // }
// }
// 初始化iframe页面散点图

// 饼图
myChart1();

function myChart1(data) {
    var renderData = {
        id: 'myChart1',
        titleData: '农产品种养殖面积结构',
        nameData: ['苹果', '板栗'],
        seriesData: [randomData(), randomData()]
    };
    pieHover(renderData)
}
// 饼图
myChart5();

function myChart5(data) {
    var renderData = {
        id: 'myChart5',
        titleData: '农产品种养殖面积结构',
        nameData: ['苹果', '板栗'],
        seriesData: [randomData(), randomData()]
    };
    pieHover(renderData)
}
// 柱状图
myChart2();

function myChart2(data) {
    var renderData = {
        id: 'myChart2',
        titleData: '溯源农产品种养殖面积结构占比',
        legendData: ['种植总面积', '溯源总面积'],
        xData: [1, 3, 5, 7, 9, 11],
        top: 20,
        seriesData: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
        ]
    }
    doubleBar(renderData)
}


myChart3();

function myChart3(data) {
    var renderData = {
        id: 'myChart3',
        titleData: '溯源农产品种养殖面积结构',
        nameData: ['香白杏', '核桃', '苹果', '板栗', '酸枣', '山楂', '其他'],
        // seriesData:[200,500,300,120,400,380,240]
        seriesData: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
    };
    pieHover(renderData)
}

myChart4();

function myChart4(data) {
    var renderData = {
        id: 'myChart4',
        titleData: '农产品品种结构分析',
        top: 20,
        legendData: ['非溯源品种总数', '溯源品种总数'],
        xData: [1, 3, 5, 7, 9, 11],
        seriesData: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
        ]

    }
    doubleBar(renderData)
}

myChart6();

function myChart6(data) {
    var renderData = {
        id: 'myChart6',
        titleData: '溯源品种结构分析',
        nameData: ['板栗', '西红柿', '橙子', '红提', '蓝莓', '香蕉'],
        seriesData: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
    };
    pieHover(renderData)
}
//遵化地图
$('.area-tab').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    myChart7()
})

function myChart7() {
    $('#myChart7>div').remove();
    /*可以通过require方式引入下面的文件，但是依赖于上面的commonJS文件，也可以通过script标签引入*/
    // require('../../libs/echart/zunhua-map.js');
    var id = 'myChart7'
    var mapData = {
        '蔬菜产区': [{
                name: '蔬菜产区',
                value: 400,
                coord: [117.680694, 40.145656]
            },
            {
                name: '蔬菜产区',
                value: 400,
                coord: [118.168257, 40.152715]
            }
        ],
        '干鲜果产区': [{
            name: '干鲜果产区',
            value: 400,
            coord: [117.869301, 40.144773]
        }],
        '食用菌产区': [{
                name: '食用菌产区',
                value: 400,
                coord: [118.024528, 40.034474]
            },
            {
                name: '食用菌产区',
                value: 400,
                coord: [117.844005, 40.096384]
            },
            {
                name: '食用菌产区',
                value: 400,
                coord: [118.010624, 40.080534]
            },
            {
                name: '食用菌产区',
                value: 400,
                coord: [118.115365, 40.292821]
            }
        ],
        '畜牧产区': [{
                name: '畜牧产区',
                value: 30000,
                coord: [117.930242, 40.042331]
            },
            {
                name: '畜牧产区',
                value: 30000,
                coord: [118.04871, 40.296384]
            }
        ]
    };
    smallMap(id, mapData)
}