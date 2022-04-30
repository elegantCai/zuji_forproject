//饼形图模块:各民族分布比例
(function(){
	var myChart = echarts.init(document.querySelector('.c .pic'));
// Generate data
var category = ["1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020"];
var barData = [1529, 2022, 3300, 6198, 9937, 10507, 10773, 11254, 12465, 13747];
var lineData = [2537, 3200, 5349, 10374, 16881, 17528, 18883, 19693, 21727, 24218];
var rateData = [];
for (var i = 0; i < 10; i++) {
  var rate = 1 - barData[i] / lineData[i];
  rateData[i] = rate.toFixed(2);
}

// option
option = {
  title: {
    text: "少数民族地区农牧林渔业",
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
    data: ["农牧林渔业总产值", "第一产业", "服务业占比"],
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
		name:"总产值/亿元",
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
		min:0.34,
		max:0.44,
		name:"所占百分比",
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
      name: "服务业占比",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: "rgba(178,34,34,1)",
        },
      },
      data: rateData,
    },

    {
      name: "农牧林渔业总产值",
      type: "bar",
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(211, 129, 35, 0.8)" },
            { offset: 1, color: "rgba(211, 165, 27, 0.8)" },
          ]),
        },
      },
      data: barData,
    },

    {
      name: "第一产业",
      type: "bar",
      barGap: "-100%",
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(211, 122, 123,0.6)" },
            { offset: 0.2, color: "rgba(211, 122, 123, 0.3)" },
            { offset: 1, color: "rgba(156,107,211,0)" },
          ]),
        },
      },
      z: -12,

      data: lineData,
    },
  ],
};


	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
