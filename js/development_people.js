(function(){
	var myChart = echarts.init(document.querySelector('.b .pic'));
		option = {
		  //backgroundColor: "#38445E",
		  grid: {
			top:"8%",
		    left: "1%",
		    bottom: "2%",
		    right: "2%",
			containLabel: true,
		  },
		  xAxis: {
		    data: ["1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020"],
		    axisTick: {
		      show: false,
		    },
		    axisLine: {
		      lineStyle: {
		        color: "rgba(255, 129, 109, 0.1)",
		        width: 1, //这里是为了突出显示加上的
		      },
		    },
		    axisLabel: {
		      textStyle: {
		        color: "#919191",
		        fontSize: 12,
		      },
		    },
		  },
		  yAxis:
		    {
			  type: "value",
		      splitNumber: 2,
		      axisTick: {
		        show: false,
		      },
			  name:"单位/亿元",
		      axisLine: {
		        lineStyle: {
		          color: "rgba(178,34,34,0.7)",
		          width: 1, //这里是为了突出显示加上的
		        },
		      },
		      axisLabel: {
		        textStyle: {
		          color: "#919191",
		        },
		      },
		      splitArea: {
		        areaStyle: {
		          color: "rgba(255,255,255,0.8)",
		        },
		      },
		      splitLine: {
		        show: true,
		        lineStyle: {
		          color: "rgba(178,34,34,0.7)",
		          width: 0.5,
		          type: "dashed",
		        },
		      },
		    },
		  series: [
		    {
		      name: "hill",
		      type: "pictorialBar",
		      barCategoryGap: "0%",
		      symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
		      label: {
		        show: true,
		        position: "top",
		        distance: 1,
		        color: "rgba(178,34,34,0.7)",
		        fontWeight: "bolder",
		        fontSize: 14,
		      },
		      itemStyle: {
		        normal: {
		          color: {
		            type: "linear",
		            x: 0,
		            y: 0,
		            x2: 0,
		            y2: 1,
		            colorStops: [
		              {
		                offset: 0,
		                color: "rgba(232, 94, 106, .8)", //  0%  处的颜色
		              },
		              {
		                offset: 1,
		                color: "rgba(232, 94, 106, .1)", //  100%  处的颜色
		              },
		            ],
		            global: false, //  缺省为  false
		          },
		        },
		        emphasis: {
		          opacity: 1,
		        },
		      },
		      data: [3055, 4451, 8991, 22060, 35181, 39796, 40680, 42409, 45733, 47531],
		      z: 10,
		    },
		  ],
		};
	
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
