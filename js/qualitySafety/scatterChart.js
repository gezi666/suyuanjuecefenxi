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

            var colors = ["#12b0e4", "#7fff5f", "#fdbf00", "#23aaff", "#72c312", "#5be93f"];
            var colorsD = ["rgba(9,174,255,.3)", "rgba(61,175,31,.3)", "rgba(99,253,191,.3)", "#4070db", "#7ddf08", "#008934"];
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
			var dx = Math.round(me._width/data.length);
//			var dy = me._height/2;
            var node = me._svg.selectAll(".node")
                .data(pack(root).leaves())
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d,i) {
                    if(i==0){
                        return "translate(" + (dx*i+150) + "," + (110*(i%2)+220) + ")";  
                    }else if(i==1){
                        return "translate(" + (dx*i+80) + "," + (110*(i%2)+100) + ")";
                    }else if(i==2){
                         return "translate(" + (dx*i) + "," + (110*(i%2)+100) + ")"; 
                    }

                    // return "translate(" + (dx*i+50) + "," + (110*(i%2)+100) + ")";
                });

            me._node = node;
            node.append("circle")
                .attr("id", function (d) {
                    return d.id;
                })
                .attr("class", "circles")
                .attr("r", function (d) {
                    var newR = me._radius * radiusRange(d.value);
                    return newR;
                })
                .style("cursor", 'pointer')
                .style("fill", function (d, i) {
                    // return getColor(color(d.package), colord(d.package), i)
                    return colorsD[i]
                })
                .style("stroke", function (d, i) {
                	return colors[i]
                })
                .style("stroke-opacity", 0.6)
				.on("mouseover",function(d){
                    d3.select(this)
                        .attr("r",function(d){
                            var newR = me._radius * radiusRange(d.value);
                            return newR+5;
                        })
                        .style("opacity", 0.7)

                })
                .on("mouseout",function(d){
                    d3.select(this)
                        .attr("r",function(d){
                        	var newR = me._radius * radiusRange(d.value);
                            return newR;
                        })
                        .style("opacity", 1)
                })

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
                .style("fill", "#fff")
                .style("font-size", "12px")
                .style("cursor", 'pointer')
                .style("font-family", "微软雅黑")
                .text(function (d) {
                    console.log(d)
                    return d;
                });
               node.append("text")
                .selectAll("tspan")
                .data(function (d,i) {

                    return d.value.toString().split(/(?=[A-Z][^A-Z])/g);
                })
                .enter().append("tspan")
                .attr("x", function (d) {
                    return -d.length * 12 / 2+15;
                })
                .attr("y", function (d, i, nodes) {
                    return 13 + (i - nodes.length / 2 - 0.5) * 10+15;
                })
                .style("fill", "#fff")
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
