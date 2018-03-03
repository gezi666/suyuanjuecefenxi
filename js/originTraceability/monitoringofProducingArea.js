var createDate = 2017;
changeNavTo('产地追溯', '遵化产地监测');
layui.use('form', function() {
    var form = layui.form();
    // 监听select变化重新渲染图表
    form.on("select(time1)", function(data) {
        myChart1()
        var params = {
            createDate: data.value
        };
        // console.log(params.createDate)
        //产地追溯--遵化产业监测--饼图--进10年产地认证面积及增长率变化趋势
        getAjax("farmProSalesAnalysis/searchProByType", myChart1, params);
    });
    form.on("select(time2)", function(data) {
        var params = {
            createDate: data.value
        };
        // console.log(params.createDate);
        myChart2()
            //产地追溯--遵化产业监测--柱状图--产地认证品种数及增长率历史变化趋势
        getAjax("farmProSalesAnalysis/searchProByType", myChart2, params);
    });
    form.on("select(time3)", function(data) {
        var params = {
            createDate: data.value
        };
        myChart3()
            //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
        getAjax("farmProSalesAnalysis/searchProByType", myChart3, params);
    });
});
//初始化
initAll(createDate);

function initAll(createDate) {
    var params = {
        createDate: createDate
    };
    //产地追溯--遵化产业监测--饼图--进10年产地认证面积及增长率变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart1, params);
    //产地追溯--遵化产业监测--柱状图--产地认证品种数及增长率历史变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart2, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart3, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    // getAjax("produAreaMonitor/getNuisanAreaPie", myChart8, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart9, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    getAjax("produAreaMonitor/getGreenAreaPie", myChart10, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart11, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart12, params);
    //产地追溯--遵化产业监测--柱状图--产地认证企业数量及增长率历史变化趋势
    getAjax("farmProSalesAnalysis/searchProByType", myChart13, params);
}

//折线柱状图tab条件筛选
$('.area-tab li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    //重新渲染图表
    if ($(this).parent().next().children().attr('class') === 'myChart1 fl') {
        myChart1();
    } else if ($(this).parent().next().children().attr('class') === 'myChart2 fl') {
        myChart2();
    } else if ($(this).parent().next().children().attr('class') === 'myChart3 fl') {
        myChart3();
    }
});
//农产品品种无公害认证面积table条件筛选
$('.myChart-box .first-type').click(function() {
    $(this).addClass('active').siblings('.first-type').removeClass('active');
    //重新渲染图表
    if ($(this).parent().parent().parent('table').next().attr('class') === 'myChart13') {
        myChart13();
    } else if ($(this).parent().parent().parent('table').next().attr('class') === 'myChart11') {
        myChart11();
    } else if ($(this).parent().parent().parent('table').next().attr('class') === 'myChart9') {
        myChart9();
    }
});
$('.myChart-box .top-type').click(function() {
    $(this).addClass('active').parent().parent('tbody').find('td.top-type').not($(this)).removeClass('active');
    //重新渲染图表
    if ($(this).parent().parent().parent('table').next().attr('class') === 'myChart13') {
        myChart13();
    } else if ($(this).parent().parent().parent('table').next().attr('class') === 'myChart11') {
        myChart11();
    } else if ($(this).parent().parent().parent('table').next().attr('class') === 'myChart9') {
        myChart9();
    }
});
myChart1();
myChart2();
myChart3();
myChart10();
myChart12();
myChart9();
myChart11();
myChart13();

//折线图
function myChart1(data) {
    var barLineData = {
        id: 'myChart1',
        titleData: '进10年产地认证面积及增长率变化趋势',
        legendData: ['认证面积（万亩）', '增长率'],
        seriesDatas: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
        ]
    };
    barLine(barLineData)
}

function myChart2() {
    var barLineData = {
        id: 'myChart2',
        titleData: '产地认证品种数及增长率历史变化趋势',
        legendData: ['认证品种数量', '增长率'],
        seriesDatas: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
        ]
    };
    barLine(barLineData)
}

function myChart3() {
    var barLineData = {
        id: 'myChart3',
        titleData: '产地认证企业数量及增长率历史变化趋势',
        legendData: ['认证企业数量', '增长率'],
        seriesDatas: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
        ]
    };
    barLine(barLineData)
}
//饼图
myChart8();

function myChart8(data) {
    console.log(data)
    var pieData = {
        id: 'myChart8',
        seriesData: [randomData(), randomData()],
        nameData: ['非溯源面积', '溯源面积']
    };
    pieRender(pieData)
}

function myChart10() {
    var pieData = {
        id: 'myChart10',
        seriesData: [randomData(), randomData(), randomData()],
        nameData: ['香菇', '核桃', '苹果']
    };
    pieRender(pieData)
}

function myChart12() {
    var pieData = {
        id: 'myChart12',
        seriesData: [randomData(), randomData(), randomData()],
        nameData: ['香菇', '核桃', '苹果']
    };
    pieRender(pieData)
}
//柱状比例图
function myChart9() {
    var data = [
        [{ value: 40, value1: 2345 }, { value: 30, value1: 5355 }, { value: 50, value1: 4572 }, { value: 60, value1: 6795 }, { value: 70, value1: 5343 }, { value: 80, value1: 8779 }, { value: 80, value1: 8779 }],
        [{ value: 60, value1: 2345 }, { value: 70, value1: 2345 }, { value: 50, value1: 2345 }, { value: 40, value1: 8684 }, { value: 30, value1: 2377 }, { value: 20, value1: 7664 }, { value: 20, value1: 7664 }]
    ];
    var seriesData = [
        [],
        []
    ];
    // 以下两行随机模拟数据
    var numData = [];
    var randomNum = '';
    data[0].forEach(function(v, i) {
        // 以下两行随机模拟数据
        randomNum = randomData();
        numData.push(randomNum);
        v.label = {
            normal: {
                show: true,
                position: 'bottom',
                formatter: function(d) {
                    return d.data.value1
                }
            }
        }
        seriesData[0].push(numData[i])

    });
    data[1].forEach(function(v, i) {
        v.label = {
            normal: {
                show: true,
                position: 'top',
                formatter: function(d) {
                    return d.data.value1
                }
            }
        }
        seriesData[1].push(100 - numData[i])

    });
    var stackBarData = {
        id: 'myChart9',
        titleData: '',
        legendData: ['溯源面积（亩）', '非溯源面积（亩）'],
        xData: ['板栗', "苹果", "核桃", "香白杏", "山楂", "酸枣", "其他"],
        seriesData: seriesData
    }
    stackBar(stackBarData)
}

function myChart11() {
    var data = [
        [{ value: 40, value1: 2345 }, { value: 30, value1: 5355 }, { value: 50, value1: 4572 }, { value: 60, value1: 6795 }, { value: 70, value1: 5343 }, { value: 80, value1: 8779 }, { value: 80, value1: 8779 }],
        [{ value: 60, value1: 2345 }, { value: 70, value1: 2345 }, { value: 50, value1: 2345 }, { value: 40, value1: 8684 }, { value: 30, value1: 2377 }, { value: 20, value1: 7664 }, { value: 20, value1: 7664 }]
    ];
    var seriesData = [
        [],
        []
    ];
    // 以下两行随机模拟数据
    var numData = [];
    var randomNum = '';
    data[0].forEach(function(v, i) {
        // 以下两行随机模拟数据
        randomNum = randomData();
        numData.push(randomNum);
        v.label = {
            normal: {
                show: true,
                position: 'bottom',
                formatter: function(d) {
                    return d.data.value1
                }
            }
        }
        seriesData[0].push(numData[i])
    });
    data[1].forEach(function(v, i) {
        v.label = {
            normal: {
                show: true,
                position: 'top',
                formatter: function(d) {
                    return d.data.value1
                }
            }
        }
        seriesData[1].push(100 - numData[i])

    });
    var stackBarData = {
        id: 'myChart11',
        titleData: '',
        legendData: ['溯源面积（亩）', '非溯源面积（亩）'],
        xData: ['板栗', "苹果", "核桃", "香白杏", "山楂", "酸枣", "其他"],
        seriesData: seriesData

    }
    stackBar(stackBarData)
}

function myChart13() {
    var data = [
        [{ value: 40, value1: 2345 }, { value: 30, value1: 5355 }, { value: 50, value1: 4572 }, { value: 60, value1: 6795 }, { value: 70, value1: 5343 }, { value: 80, value1: 8779 }, { value: 80, value1: 8779 }],
        [{ value: 60, value1: 2345 }, { value: 70, value1: 2345 }, { value: 50, value1: 2345 }, { value: 40, value1: 8684 }, { value: 30, value1: 2377 }, { value: 20, value1: 7664 }, { value: 20, value1: 7664 }]
    ];
    var seriesData = [
        [],
        []
    ];
    // 以下两行随机模拟数据
    var numData = [];
    var randomNum = '';
    data[0].forEach(function(v, i) {
        // 以下两行随机模拟数据
        randomNum = randomData();
        numData.push(randomNum);
        v.label = {
            normal: {
                show: true,
                position: 'bottom',
                formatter: function(d) {
                    return d.data.value1
                }
            }
        }
        seriesData[0].push(numData[i])

    });
    data[1].forEach(function(v, i) {
        v.label = {
            normal: {
                show: true,
                position: 'top',
                formatter: function(d) {
                    return d.data.value1
                }
            }
        }
        seriesData[1].push(100 - numData[i])

    });
    var stackBarData = {
        id: 'myChart13',
        titleData: '',
        legendData: ['溯源面积（亩）', '非溯源面积（亩）'],
        xData: ['板栗', "苹果", "核桃", "香白杏", "山楂", "酸枣", "其他"],
        seriesData: seriesData

    }
    stackBar(stackBarData)
}