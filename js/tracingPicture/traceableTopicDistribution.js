var timeFlag = "2017年";
// var parentId = "";
changeNavTo('溯源一张图', '遵化溯源主体分布');
layui.use('form', function() {
        var form = layui.form();
        form.on("select", function(data) {
            timeFlag = data.value;
            randomEchart(timeFlag)
        });
    })
    // 渲染页面所有图表
function randomEchart(timeFlag) {
    var params = {
        timeFlag: timeFlag
    };
    //遵化溯源主题分布-农产品溯源量
    // getAjax("onemap/getEnterpriseRank", myChart2, params)
} // 随机模拟数据
function randomData() {
    return Math.floor(Math.random() * 100 + 10)
}
myChart1();

function myChart1(data) {
    // console.log(data)
    var html = '<li><span>全市涉农企业</span><span class="num-home"><strong>' +
        randomData() + '</strong>家；</span></li><li><span>其中溯源</span><span class="num-home"><strong>' +
        randomData() + '</strong>家</span></li><li><span>龙头企业</span><span class="num-home"><strong>' +
        randomData() + '</strong>家；</span></li><li><span>其中溯源</span><span class="num-home"><strong>' +
        randomData() + '</strong>家</span></li><li><span>种植企业</span><span class="num-home"><strong>' +
        randomData() + '</strong>家；</span></li><li><span>其中溯源</span><span class="num-home"><strong>' +
        randomData() + '</strong>家</span></li><li><span>养殖企业</span><span class="num-home"><strong>' +
        randomData() + '</strong>家；</span></li><li><span>其中溯源</span><span class="num-home"><strong>' +
        randomData() + '</strong>家</span></li>';
    $('.ulList').html(html);
}
randomEchart(timeFlag);
myChart3();
//柱状排行榜
myChart2();

function myChart2(data) {
    // console.log(data)
    var seriesData = [randomData(), randomData(), randomData(), randomData()],
        yAxisData = ["地北头镇", "遵化镇", "刘备寨乡", "西留村乡"];
    // data.forEach(function(v, i) {
    //         seriesData.push(v.amount);
    //         yAxisData.push(v.entName)
    //     })
    // console.log(seriesData,yAxisData)
    seriesData.sort(function(x, y) {
        return x - y
    })
    var startData = {
        el: 'myChart2',
        titleData: '农产品溯源量企业排名',
        seriesData: seriesData.reverse(),
        yAxisData: yAxisData.reverse()
    };
    colBar(startData);
}
// 地图
function myChart3() {
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