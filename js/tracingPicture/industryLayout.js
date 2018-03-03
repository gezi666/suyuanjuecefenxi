var timeFlag = 2017;
changeNavTo('溯源一张图', '遵化农产品产业布局');
layui.use('form', function() {
    var form = layui.form();
    form.on('select', function(data) {
        time = data.value;
        //遵化农产品产业布局-农产品品种数量监测
        // getAjax("onemap/getData", myChart2, time)
        myChart3();
        myChart2();
        myChart4();
        //遵化农产品产业布局-溯源码扫码次数
        // getAjax("onemap/getCount", myChart3, time)
    })
});
// 渲染页面所有图表
function randomEchart(timeFlag) {
    // var time = timeFlag;
    //遵化农产品产业布局-农产品品种数量监测
    // getAjax("onemap/getData", myChart2, time)
    //遵化农产品产业布局-溯源码扫码次数
    // getAjax("onemap/getCount", myChart3, time)
}
randomEchart(timeFlag);
myChart1();
myChart2();
myChart3();
myChart4();
// 随机模拟数据
function randomData() {
    return (Math.random() * 100).toFixed(0);

}
//仪表盘
function myChart1() {
    var dashBoardChart = libMain.DashBoardChart;
    var chart = new dashBoardChart();
    var titleText = '农产品质量安全综合指数'
    chart.init({
        width: 160,
        height: 160,
        minVal: 0,
        maxVal: 100,
        value: 98.3
    });
    renderTitle();

    function renderTitle() {
        var h3 = '<h3 style="position:absolute;color: #fff;font-size: 14px;left:30px;top:20px;">' + titleText + '</h3>';
        if (h3) {
            $('.myChart1').prepend(h3)
        }
    }
}
//漏斗图
function myChart2(data) {
    // console.log(data)
    var nameData = [],
        valueData = [];
    $.each(data, function(i, v) {
        nameData.push(v.name)
        valueData.push(v.count)
    })
    var funnelData = {
        el: 'myChart2',
        titleData: '农产品品种数量监测',
        nameData: ['全部', '溯源'],
        valueData: [randomData(), randomData()]
    };
    startRender(funnelData);
};
//饼图
function myChart3(data) {
    var barCenter = {
        el: 'myChart3',
        titleData: '溯源码扫码次数',
        valueData: [, randomData()]
    };
    renderChart(barCenter);
}
//遵化地图
function myChart4() {
    /*可以通过require方式引入下面的文件，但是依赖于上面的commonJS文件，也可以通过script标签引入*/
    // require('../../libs/echart/zunhua-map.js');
    $('#myChart4>div').remove();
    var id = 'myChart4'
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