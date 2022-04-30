
(function(){
	var myChart = echarts.init(document.querySelector('.b .pic'));
var myColor = [
  "#86c1ce",
  "#7cc5b9",
  "#8fc88e",
  "#9dc58d",
  "#a4c781",
  "#a6c676",
  "#b0cf72",
  "#bfd03d",
  "rgba(203, 179, 43, 1.0)",
  "#d83900",
];
option = {
  //backgroundColor: "#0e2147",
  grid: {
    left: "10%",
    top: "0%",
    right: "5%",
    bottom: "8%",
    containLabel: true,
  },
  xAxis: [
    {
      show: false,
    },
  ],
  yAxis: [
    {
      axisTick: "none",
      axisLine: "none",
      offset: "27",
      axisLabel: {
        textStyle: {
          color: "#000000",
          fontSize: "16",
        },
      },
      data: [
        "临沧",
        "凯里",
        "德宏",
        "呼伦贝尔",
        "延边",
        "喀什",
        "西昌",
        "恩施",
        "拉萨",
        "西双版纳",
      ],
    },
    {
      axisTick: "none",
      axisLine: "none",
      axisLabel: {
        textStyle: {
          color: "#000000",
          fontSize: "16",
        },
      },
      data: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
    },
    {
      name: "2022年1月1日起每日旅游平均指数",
      nameGap: "50",
      nameTextStyle: {
        color: "#000000",
        fontSize: "16",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(0,0,0,0)",
        },
      },
      data: [],
    },
  ],
  series: [
    {
      name: "条",
      type: "bar",
      yAxisIndex: 0,
      data: [22, 24, 62, 90, 104, 114, 124, 179, 188, 416],
      label: {
        normal: {
          show: true,
          position: "right",
          textStyle: {
            color: "#000000",
            fontSize: "16",
          },
        },
      },
      barWidth: 12,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num];
          },
        },
      },
      z: 2,
    },
    {
      name: "白框",
      type: "bar",
      yAxisIndex: 1,
      barGap: "-100%",
      data: [467, 467, 467, 467, 467, 467, 467, 467, 467, 467],
      barWidth: 20,
      itemStyle: {
        normal: {
          color: "rgba(255, 255, 255, 0.3)",
          barBorderRadius: 5,
        },
      },
      z: 1,
    },
    {
      name: "外框",
      type: "bar",
      yAxisIndex: 2,
      barGap: "-100%",
      data: [470, 470, 470, 470, 470, 470, 470, 470, 470, 470],
      barWidth: 24,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num];
          },
          barBorderRadius: 5,
        },
      },
      z: 0,
    },
    {
      name: "外圆",
      type: "scatter",
      hoverAnimation: false,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      yAxisIndex: 2,
      symbolSize: 35,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num];
          },
          opacity: 1,
        },
      },
      z: 2,
    },
  ],
};
	

	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();