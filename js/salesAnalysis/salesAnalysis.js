//声明请求参数默认值
// dom完成加载layui
$(function() {
    //导航事件
    changeNavTo('农产品销售分析');
});

//使用layui
layui.use(['form'], function() {
    var form = layui.form();
    //切换产品类型
    // form.on("select(type)", function(data) {
    //     parentId = data.value;
    //     randomEchart();
    // });
    //切换时间
    form.on("select(time)", function(data) {
        // 渲染页面所有图表
        // console.log(data)
        randomEchart();
    });
});
// 请求下拉框数据
// getAjax("farmProSalesAnalysis/searchProType", randomSelect);
// 渲染页面所有图表
function randomEchart() {
    myChart1();
    myChart2();
    myChart3();
    myChart6();
    myChart7();
    myChart8();
    map1();
    map2();
    //农产品销售分析-不同产品销售量占比
    // getAjax("farmProSalesAnalysis/searchProByType",myChart1,params);
    //农产品销售分析-不同主体销售量占比
    // getAjax("farmProSalesAnalysis/searchSubjectByType", myChart2, params);
    //地图-农产品销售分析-销售量全国流向
    // getAjax("farmProSalesAnalysis/searchSalesFlow", map1, params);
    //农产品销售分析-客户支付偏好
    // getAjax("farmProSalesAnalysis/searchCustomerPay", myChart7, params);
    //农产品销售分析-企业销售额排行榜TOP5
    // getAjax("farmProSalesAnalysis/searchSalesRank", myChart8, params);
    //农产品销售分析-不同产品渠道销售量（分类型）
    // getAjax("farmProSalesAnalysis/searchChannelSaleType", myChart3, params);
    //农产品销售分析-不同产品渠道销售量
    // getAjax("farmProSalesAnalysis/getSaleTrend", myChart6, params);
    //农产品销售分析-流向全国以及河北的销售总量
    // getAjax("farmProSalesAnalysis/searchToHeBei", map2, params);
}
// 渲染页面所有图表
randomEchart();
// 请求下拉框数据
function randomSelect(data) {
    var listData = data;
    var html = '<option value="">全部</option>';
    html += '<option value="">全部</option>';
    listData.forEach(function(v, i) {
        html += '<option value="' + v.id + '">' + v.name + '</option>'
    })
    $("#selectType").html(html);
    layui.use(['form'], function() {
        var form = layui.form();
        form.render("select");
    })
}
//农产品销售分析-不同产品销售量占比

function myChart1(data) {
    var pieData = {
        id: 'myChart1',
        titleData: '不同产品销售量占比', //标题
        radiusData: ['32%', '44%'],
        nameData: ['苹果', '板栗'], //各项名称
        seriesData: [randomData(), randomData()], //各项数据
        emphasis: true
    };
    pieHover(pieData)
}
//农产品销售分析-不同主体销售量占比

function myChart2(data) {
    var pieData = {
        id: 'myChart2',
        titleData: '不同主体销售量占比',
        radiusData: ['32%', '44%'],
        nameData: ['西红柿', '板栗', '草莓'], //各项名称
        seriesData: [randomData(), randomData(), randomData()], //各项数据
        emphasis: true
    };
    pieHover(pieData)
}
//农产品销售分析-不同产品渠道销售量（分类型）
function myChart3(data) {
    var barData = {
        id: 'myChart3',
        titleData: '不同产品渠道销售量',
        top: 5,
        legendData: ['线上', '线下'],
        xData: [1, 3, 5, 7, 9, 11],
        seriesData: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
        ]
    };
    doubleBar(barData)
}
//农产品销售分析-不同产品渠道销售量
function myChart6(data) {
    var lineData = {
        id: 'myChart6',
        titleData: '销售量走势',
        legendData: ['销售量'],
        xAxisData: [1, 3, 5, 7, 9, 11],
        seriesData: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
        ]
    }
    lineChart(lineData)
}
//农产品销售分析-客户支付偏好
function myChart7(data) {
    var pieData = {
        id: 'myChart7',
        titleData: '客户支付偏好',
        radiusData: ['32%', '44%'],
        nameData: ['网银支付', '支付宝', '微信', '现金支付'],
        seriesData: [randomData(), randomData(), randomData(), randomData()],
        emphasis: true
    };
    // var pieData = {
    //     id: 'myChart7',
    //     titleData: '客户支付偏好',
    //     radiusData: ['32%', '44%'],
    //     nameData: data.nameData,
    //     seriesData: data.seriesData,
    //     emphasis: true
    // };
    pieHover(pieData)
}
//农产品销售分析-企业销售额排行榜TOP5
function myChart8(data) {
    var startData = {
        el: 'myChart8',
        titleData: '企业销售额排行榜TOP5',
        showData: false,
        seriesData: [randomData(), randomData(), randomData(), randomData(), randomData()],
        yAxisData: ['企业1', '企业2', '企业3', '企业4', '企业5']
    };
    startData.seriesData.sort(function(x, y) {
        return x - y
    })
    colBar(startData);
}
//地图-农产品销售分析-销售量全国流向
function map1(data) {
    // console.log(data)
    var SmallMap = ChartLib.SmallMap;
    var smallChina = new SmallMap({
        title: '销售量全国流向'
    });

    smallChina.data = {
        center: {
            name: '遵化',
            coord: [117.9728, 40.1953]
        },
        toCity: [{
                name: '北京',
                value: 25,
                coord: [116.4551, 40.2539]
            },
            {
                name: '天津',
                value: 38,
                coord: [117.4219, 39.4189]
            },
            {
                name: '德州',
                value: 40,
                coord: [116.6858, 37.2107]
            },
            {
                name: '赤峰',
                value: 80,
                coord: [118.8971, 42.2619]
            },
            {
                name: '哈尔滨',
                value: 90,
                coord: [127.9688, 45.368]
            },
            {
                name: '太原',
                value: 50,
                coord: [112.3352, 37.9413]
            },
            {
                name: '郑州',
                value: 40,
                coord: [113.4668, 34.6234]
            },
            {
                name: '沈阳',
                value: 30,
                coord: [123.1238, 42.1216]
            },
            {
                name: '成都',
                value: 95,
                coord: [103.9526, 30.7617]
            },
            {
                name: '拉萨',
                value: 85,
                coord: [91.1865, 30.1465]
            }
        ]
    };
    var mapBox = document.getElementById('myChart4');
    mapBox.innerHTML = '';
    var className = "";
    if (randomData() == "0") {
        className = 'icon-shangsheng';
    } else if (randomData() == "2") {
        className = 'icon-xiajiang';
    } else {
        className = "";
    }
    var html = '<div class="map-detiles">' +
        '<p class="detiles-num">' +
        '<span class="all-num">' + randomData() + '</span>' +
        '<span class="danwen">t</span>' +
        '<i class="iconfont ' + className + '"></i>' +
        '<span class="rate">' + '' + '</span>' +
        '</p>' +
        '<p class="detiles-info">流向全国销售总量</p>' +
        '</div>';
    $("#myChart4").append(html);
    smallChina.width = mapBox.clientWidth;
    smallChina.height = mapBox.clientHeight;
    mapBox.appendChild(smallChina.domElement);
}
//农产品销售分析-流向全国以及河北的销售总量
function map2(data) {
    //console.log(data)
    var SmallMap = ChartLib.SmallMap;
    var smallHB = new SmallMap({
        title: '销售量河北流向'
    });
    smallHB.data = {
        center: {
            name: '遵化',
            coord: [117.9728, 40.1953]
        },
        toCity: [{
                name: '张家口',
                value: 25,
                coord: [114.884635, 40.775685]
            },
            {
                name: '承德',
                value: 38,
                coord: [117.964234, 40.960739]
            },
            {
                name: '秦皇岛',
                value: 40,
                coord: [119.610404, 39.943697]
            },
            {
                name: '保定',
                value: 80,
                coord: [115.473966, 38.885185]
            },
            {
                name: '石家庄',
                value: 90,
                coord: [114.518979, 38.047618]
            },
            {
                name: '邢台',
                value: 50,
                coord: [114.502688, 37.079188]
            },
            {
                name: '邯郸',
                value: 40,
                coord: [114.553708, 36.63058]
            },
            {
                name: '沧州',
                value: 30,
                coord: [116.855695, 38.311351]
            },
            {
                name: '衡水',
                value: 95,
                coord: [115.677706, 37.744954]
            },
            {
                name: '安平县',
                value: 85,
                coord: [115.52276, 38.240252]
            }
        ]
    };
    var mapBox = document.getElementById('myChart5');
    mapBox.innerHTML = "";
    var className = "";
    if (randomData() == "0") {
        className = 'icon-shangsheng';
    } else if (randomData() == "2") {
        className = 'icon-xiajiang';
    } else {
        className = "";
    }
    var html = '<div class="map-detiles">' +
        '<p class="detiles-num">' +
        '<span class="all-num">' + randomData() + '</span>' +
        '<span class="danwen">t</span>' +
        '<i class="iconfont ' + className + '"></i>' +
        '<span class="rate">' + '' + '</span>' +
        '</p>' +
        '<p class="detiles-info">流向全国销售总量</p>' +
        '</div>';
    $("#myChart5").append(html);
    smallHB.width = mapBox.clientWidth;
    smallHB.height = mapBox.clientHeight;
    //document.body.appendChild(smallChina.domElement);
    mapBox.appendChild(smallHB.domElement);
}