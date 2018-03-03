changeNavTo('溯源一张图', '遵化溯源码动态视窗');
layui.use('form', function() {
    var form = layui.form();
    form.on("select(type)", function(data) {
        myChart1();
    });
    form.on("select(time)", function(data) {
        myChart1();
        myChart2();
        myChart3();
    });
})
myChart1();
myChart2();
//折线图
function myChart1(data) {
    var lineData = {
        id: 'myChart1',
        titleData: '区域农产品溯源产量检测',
        legendData: ['溯源总量', '蔬菜', '干鲜果', '畜产品', '食用菌', '水产品'],
        xAxisData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        xAxisName: '月份',
        seriesData: [
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
            [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
        ]
    }
    lineChart(lineData)
}
// 柱状图
function myChart2() {
    var barData = {
        id: 'myChart2',
        titleData: '溯源码使用实时监测',
        // legendShow:false
        xAxis: ['生产总量', '打印总量', '扫码总量'],
        seriesData: [randomData(), randomData(), randomData()]
    }
    barChart(barData)
}
// 地图
myChart3();

function myChart3() {
    $('#myChart3>div').remove();
    var Zunhua = ChartLib.Zunhua;

    var mapData = {
        '种植户/生产企业': [{
                name: 'vip',
                coord: [117.680694, 40.145656]
            },
            {
                name: 'common',
                coord: [118.168257, 40.152715]
            }
        ],
        '加工包装企业': [{
                name: 'vip',
                coord: [117.869301, 40.144773]
            },
            {
                name: 'common',
                coord: [117.969301, 40.044773]
            }
        ],
        '批发市场': [{
                name: 'vip',
                coord: [118.024528, 40.234474]
            },
            {
                name: 'common',
                coord: [117.844005, 40.1096384]
            },
            {
                name: 'vip',
                coord: [117.710624, 40.220534]
            },
            {
                name: 'common',
                coord: [118.115365, 39.992821]
            }
        ],
        '销售企业': [{
                name: 'vip',
                coord: [117.930242, 40.042331]
            },
            {
                name: 'common',
                coord: [118.04871, 40.1296384]
            }
        ]
    };


    var zunhua = new Zunhua({
        title: '农产品涉农主体分布图',
        backgroundColor: 'rgba(255,255,255,0)',
        vipProduce: '../../img/big-pro.png',
        produce: '../../img/produce.png',
        vipMarket: '../../img/big-mark.png',
        market: '../../img/market.png',
        vipPacakage: '../../img/big-pack.png',
        commonPackage: '../../img/package.png',
        vipSale: '../../img/on-sale.png',
        sale: '../../img/sale.png',
        imgSrc: '../../img/back.png'

    });
    //这是往组件传递数据的格式
    zunhua.data = mapData;
    //下面是获取到页面上要放置组件的盒子，然后把已经布局好的盒子的宽高传递给图表
    var mapBox = document.getElementById('myChart3');
    zunhua.width = mapBox.clientWidth;
    zunhua.height = mapBox.clientHeight;
    //document.body.appendChild(smallChina.domElement);
    mapBox.appendChild(zunhua.domElement);
    //轮播的数据
    //如下是定时器运行时候渲染数据的数据格式（三维数组）

}