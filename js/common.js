//切换导航菜单
function changeNavTo(navTxt, lb1, lb2) {
    $('.header-menu li').each(
        function() {
            if ($(this).children().text() === navTxt) {
                $(this).addClass('active').siblings().removeClass('active');
            }
        }
    );
    if (lb1) {
        $('.nav li').each(function() {

            if ($(this).children().text() === lb1) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    };
}
// 公用ajax
var baseUrl = "http://111.202.159.13:60099/"

function getAjax(url, callBack, data, type) {
    var params = data ? data : {};
    var types = type ? type : "get";
    $.ajax({
        url: baseUrl + url,
        data: params,
        type: types,
        dataType: "json",
        success: function(data) {
            if (callBack) {
                callBack(data.dataList);
            }

        }
    })
}
//开始时间和终止时间
function limitTime(dom1, dom2, callBack) {
    var start = {
        max: '2099-06-16 23:59:59',
        //min: laydate.now(),
        istoday: false,
        choose: function(datas) {
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
            if (callBack) {
                callBack();
            }
        }
    };

    var end = {
        min: laydate.now(),
        max: '2099-06-16 23:59:59',
        istoday: false,
        choose: function(datas) {
            start.max = datas; //结束日选好后，重置开始日的最大日期
            if (callBack) {
                callBack();
            }
        }
    };

    document.getElementById(dom1).onclick = function() {
        start.elem = this;
        laydate(start);
    }
    document.getElementById(dom2).onclick = function() {
        end.elem = this
        laydate(end);
    }
}
// 随机模拟数据
function randomData() {
    return (Math.random() * 100).toFixed(0);

}