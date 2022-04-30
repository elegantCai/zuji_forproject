//饼形图模块:各民族分布比例
(function(){
	var myChart = echarts.init(document.querySelector('.c .pic'));
// Generate data
var category = ["1990", "1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020"];


// option
option = {
  title: {
    text: "少数民族学校及专职教师数量",
	top:"1.5%",
    x: "center",
    y: 0,
    textStyle: {
      color: "black",
      fontSize: 20,
      fontWeight: "normal",
    },
  },
  //backgroundColor: "#ebdedd",
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(102, 102, 102, 0.6)",
    axisPointer: {
      type: "shadow",
      label: {
        show: true,
        backgroundColor: "#dc8227",
      },
    },
  },
  legend: {
    data: ["普通小学", "普通中学", "普通高等学校"],
    textStyle: {
      color: "#000000",
    },
    top: "7%",
  },
  grid: {
    x: "10%",
    width: "82%",
    y: "15%",
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: "#000000",
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
		name:"学校/万所",
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#000000",
        },
      },

      axisLabel: {
        formatter: "{value} ",
      },
    },
    {
		//min:0.34,
		//max:0.44,
		name:"专职教师/万人",
        splitLine: { show: false },
        axisLine: {
        lineStyle: {
          color: "#000000",
        },
      },
      axisLabel: {
        formatter: "{value} ",
      },
    },
  ],

  series: [

    {
      name: "普通小学",
      type: "bar",
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(0, 85, 255, 1)" },
            { offset: 1, color: "rgba(0, 85, 255, 0.3)" },
          ]),
        },
      },
      data: [1853, 1889, 1886, 1668, 1536, 1464, 1479, 1535, 1573, 1587, 1621.5],
    },
	
	  {
	    name: "普通小学",
	    type: "line",
	    smooth: true,
	    showAllSymbol: true,
	    symbol: "emptyCircle",
	    symbolSize: 8,
	    yAxisIndex: 1,
	    itemStyle: {
	      normal: {
	        color: "rgba(0, 46, 138, 1.0)",
	      },
	    },
	    data: [84.8, 85.8, 89.9, 88.1, 90.7, 88.3, 89, 93.9, 94.7, 96.1, 98.7],
	  },

    {
      name: "普通中学",
      type: "bar",
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(0, 170, 0, 1.0)" },
            { offset: 1, color: "rgba(0, 170, 0, 0.3)" },
          ]),
        },
      },

      data: [610, 632, 873, 1082, 1050, 1050, 991, 1037, 1074, 986, 1108.2],
    },
	
	  {
	    name: "普通中学",
	    type: "line",
	    smooth: true,
	    showAllSymbol: true,
	    symbol: "emptyCircle",
	    symbolSize: 8,
	    yAxisIndex: 1,
	    itemStyle: {
	      normal: {
	        color: "rgba(0, 116, 0, 1.0)",
	      },
	    },
	
		data: [41.5, 41.5, 47.9, 61.1, 67.4, 80.3, 73, 76.3, 78.2, 73.8, 81],
	  },
		
    {
      name: "普通高等学校",
      type: "bar",
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(211, 122, 123,1)" },
            { offset: 1, color: "rgba(211, 122, 123,0.3)" },
          ]),
        },
      },
      data: [13.6, 18.6, 34.2, 100, 161.9, 200.8, 206.8, 217.8, 231.1, 252.9, 279.8],
    },
	
	  {
	    name: "普通高等学校",
	    type: "line",
	    smooth: true,
	    showAllSymbol: true,
	    symbol: "emptyCircle",
	    symbolSize: 8,
	    yAxisIndex: 1,
	    itemStyle: {
	      normal: {
	        color: "rgba(134, 78, 79, 1.0)",
	      },
	    },
		data: [2.8, 3.7, 3.6, 6.3, 9.5, 10.9, 11.4, 11.9, 12.2, 12.6, 13.7],
	  },
  ],
};


	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
