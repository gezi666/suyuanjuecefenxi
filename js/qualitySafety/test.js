/**
 * Created by mengshaohua on 2017/3/24.
 */

function setChart(op) {
    if (typeof op !== 'object') {
        throw new Error('数据类型错误 --- 参数 => ' + typeof op);
    } else {
        if (op == null) throw new Error('数据类型错误 --- 参数 => null');
        if (op instanceof Array) throw new Error('数据类型错误 --- 参数 => Array');
        if (isEmptyObject(op)) throw new Error(op + ' 为 {} ');
    }

    var dataObj = {}, maxLen = 0, item = null, dItem = null;
    for (item in op) {
        if (op[item].length > 1) {
            dataObj[item] = op[item].length;
        }
        if (op[item].value) {
            var itemLen = op[item].value.length;
            dataObj[item] = itemLen;
            if (itemLen > maxLen) {
                dataObj[item] = maxLen = op[item].value.length;
            }
        }
    }

    var isLineFlag = op.isLine || false;
    // for (dItem in dataObj) {
    //     console.log(dItem + ' 的数据长度为 ' + dataObj[dItem]);
    // }

    var _dom = op.dom.length ? op.dom[0] : op.dom;
    var chart = echarts.init(_dom);

    var barWidth = ((_dom.offsetWidth - 50) / maxLen - 20 ) / 2 - 1;
    barWidth < 6 ? barWidth = 6 : barWidth;

    var chartOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (param) {
                var str = '';
                if (!(param instanceof Array)) return '';
                for (var i = 0; i < param.length; i++) {
                    var date = '', name = '', value = '';
                    if (param[i].name) date = param[i].name;
                    name = param[i].seriesName || '';
                    value = param[i].data || '';
                    str += name + ' : ' + value + '<br>'
                }
                return date + '<br>' + str;
            }
        },
        legend: {
            left: 0,
            textStyle: {
                color: '#fff'
            },
            selected: {},
            data: [
                {
                    name: op.severityData.name,
                    icon: 'circle'
                }, {
                    name: op.warningData.name,
                    icon: 'circle'
                }
            ]
        },
        grid: {
            top: 40,
            right: 0,
            bottom: 0,
            left: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: op.dateData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0066eb'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0066eb'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#022369'
                    }
                }
            },
            {
                type: 'value',
                scale: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0066eb'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#022369'
                    }
                }
            }
        ],
        series: [
            {
                name: op.severityData.name,
                type: 'bar',
                data: op.severityData.value,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#00CEC7'
                        }, {
                            offset: 1, color: '#023B89'
                        }], false),
                        barBorderRadius: [barWidth / 2, barWidth / 2, 0, 0],
                        opacity: 0.5,
                        borderWidth: 1,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#07D9F4'
                        }, {
                            offset: 1, color: '#006BF6'
                        }], false)
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#00D5C8'
                        }, {
                            offset: 1, color: '#0063EA'
                        }], false),
                        barBorderRadius: [barWidth / 2, barWidth / 2, 0, 0],
                        opacity: 0.9,
                        borderWidth: 1,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#07D9F4'
                        }, {
                            offset: 1, color: '#006AF6'
                        }], false)
                    }
                },
                barWidth: barWidth,
                yAxisIndex: 0
            },
            {
                name: op.warningData.name,
                type: 'bar',
                data: op.warningData.value,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#742E47'
                        }, {
                            offset: 1, color: '#46187C'
                        }], false),
                        barBorderRadius: [barWidth / 2, barWidth / 2, 0, 0],
                        borderWidth: 1,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#EE375D'
                        }, {
                            offset: 1, color: '#971DDA'
                        }], false)
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#FF0076'
                        }, {
                            offset: 1, color: '#FF12FB'
                        }], false),
                        barBorderRadius: [barWidth / 2, barWidth / 2, 0, 0],
                        borderWidth: 1,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#ff395e'
                        }, {
                            offset: 1, color: '#951cdb'
                        }], false)
                    }
                },
                barWidth: barWidth,
                yAxisIndex: 0
            },
            {
                name: op.warningSequentialData.name,
                type: 'line',
                data: op.warningSequentialData.value,
                symbol: 'circle',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0, color: '#FF0908'
                        }, {
                            offset: 0.5, color: '#FFD400'
                        }, {
                            offset: 1, color: '#FFF59E'
                        }], false),
                        width: 3
                    }
                },
                yAxisIndex: 1
            },
            {
                name: op.severitySequentialData.name,
                type: 'line',
                data: op.severitySequentialData.value,
                symbol: 'circle',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0, color: '#384bff'
                        }, {
                            offset: 1, color: '#00eaff'
                        }], false),
                        width: 3
                    }
                },
                yAxisIndex: 1
            }
        ]
    };

    var wnOp, stOp, wnsOp, stsOp, selected = {};
    stOp = chartOption.series[0];
    wnOp = chartOption.series[1];
    wnsOp = chartOption.series[2];
    stsOp = chartOption.series[3];

    selected[wnOp.name] = true;
    selected[stOp.name] = true;

    if (isLineFlag) {
        selected[wnsOp.name] = true;
        selected[stsOp.name] = true;
    } else {
        selected[wnsOp.name] = false;
        selected[stsOp.name] = false;
    }
    
    chartOption.legend.selected = selected;
    chart.setOption(chartOption);

    var wnFlag = true, stFlag = true;
    chart.on('legendselectchanged', function (param) {
        if (param.name == wnOp.name) {
            if (isLineFlag) {
                if (wnFlag) {
                    selected[wnOp.name] = false;
                    selected[wnsOp.name] = false;
                    wnFlag = !wnFlag;
                } else {
                    selected[wnOp.name] = true;
                    selected[wnsOp.name] = true;
                    wnFlag = !wnFlag;
                }
            } else {
                if (wnFlag) {
                    selected[wnOp.name] = false;
                    wnFlag = !wnFlag;
                } else {
                    selected[wnOp.name] = true;
                    wnFlag = !wnFlag;
                }
            }
        }
        if (param.name == stOp.name) {
            if (isLineFlag) {
                if (stFlag) {
                    selected[stOp.name] = false;
                    selected[stsOp.name] = false;
                    stFlag = !stFlag;
                } else {
                    selected[stOp.name] = true;
                    selected[stsOp.name] = true;
                    stFlag = !stFlag;
                }
            } else {
                if (stFlag) {
                    selected[stOp.name] = false;
                    stFlag = !stFlag;
                } else {
                    selected[stOp.name] = true;
                    stFlag = !stFlag;
                }
            }
        }
        chartOption.legend.selected = selected;
        chart.setOption(chartOption);
    });

    //  判断对象是否为 {}
    function isEmptyObject(e) {
        var t = null;
        for (t in e) {
            return !1;
        }
        return !0;
    }
}