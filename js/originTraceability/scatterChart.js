/*
 * author:ldd
 * 
 * var data = [
 {"id": "食品", "value": 3938},
 {"id": "纺织品", "value": 3812},
 {"id": "家电", "value": 6714},
 {"id": "1家电", "value": 6714},
 {"id": "2家电", "value": 6714},
 {"id": "奶粉", "value": 6714},
 {"id": "化妆品", "value": 6714},
 {"id": "电梯", "value": 7480}
 ]
 var scatter = new scatterChart();
 scatter.init({
 "domEle":document.querySelector('.scatter'),
 "width":500,
 "height":500
 });
 scatter.setData(data,0.8);//0.8是控制半径的倍数
 * 
 * */


var scatterChart = function () {
    return {
        init: function (initData) {
            var me = this;
            me._dom = initData.domEle;
            me._width = initData.width;
            me._height = initData.height;
            me._svg = d3.select("#" + me._dom).append("svg")
                .style("width", me._width)
                .style("height", me._height)
        },
        setData: function (myData) {
            var me = this;
            me._data = myData.data;
            
            zoom = myData.zoom || 1;
            maxRadius = myData.maxRadius || 100;
            minRadius = myData.minRadius || 40;
            me._radius = zoom;
            data = myData.data;

            var colors = ["#FF12FE", "#FAD100", "#0194D7", "#CDCD56", "#00BCFF", "#AA2AFF"];
            var colorsD = ["#FF0176", "#F88400", "#0141DB", "#CDBA0D", "#0086FF", "#8A0EFF"];
            var colord = d3.scaleOrdinal(colorsD);
            var color = d3.scaleOrdinal(colors);

            var pack = d3.pack()
                .size([me._width-10, me._height-10])
                .padding(1.5);
            
            data.sort(function(a,b){
            	return a.value -b.value
            })
            var max = data[data.length-1].value , min = data[0].value ; 

            var root = d3.hierarchy({children: me._data})
                .sum(function (d) {
                    return d.value;
                })
                .each(function (d) {
                    if (id = d.data.id) {
                        var id, i = id.lastIndexOf(".");
                        d.id = id;
                        d.package = id.slice(0, i);
                        d.class = id.slice(i + 1);
                    }
                });

            var node = me._svg.selectAll(".node")
                .data(pack(root).leaves())
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    console.log(d)
                    return "translate(" + d.x + "," + d.y + ")";
                });

            me._node = node;
            

            node.append("text")
                .selectAll("tspan")
                .data(function (d) {
                    return d.class.split(/(?=[A-Z][^A-Z])/g);
                })
                .enter().append("tspan")
                .attr("x", function (d) {
                    return -d.length * 12 / 2;
                })
                .attr("y", function (d, i, nodes) {
                    return 13 + (i - nodes.length / 2 - 0.5) * 10;
                })
                .style("fill", "#f00")
                .style("font-size", "12px")
                .style("cursor", 'pointer')
                .style("font-family", "微软雅黑")
                .text(function (d) {
                    return d;
                });
                
              
            function radiusRange(value){
            	var newRadius = 0;
            	if(max == min) {
	                newRadius = maxRadius;
	            } else {
	                newRadius = minRadius + (maxRadius - minRadius) * (value - min) / (max - min);
	            }
            	return newRadius;
            }   
                
            function getColor(c, cd, m) {
                me._linear = me._svg.append("defs")
                    .append("linearGradient")
                    .attr("id", "linearColor" + m)
                    .attr("x1", 0)
                    .attr("y1", 0)
                    .attr("x2", 0)
                    .attr("y2", "100%")
                me._linear.append("stop")
                    .attr("offset", 0)
                    .style("stop-color", c)
                me._linear.append("stop")
                    .attr("offset", "100%")
                    .style("stop-color", cd)
                return "url(#linearColor" + m + ")";
            }    
                
        },
        on: function (type, fn) {
            var self = this;
            if (type == 'click') {
                self._node.on('click', fn);
            } else {
                throw new Error('请注册点击事件===Click');
            }
        }
    }
};
