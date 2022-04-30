//饼形图模块:各民族分布比例
(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
var option = {
  //backgroundColor: "#d4d4d4",
  title:{
	  text: "少数民族地区生产总值",
	  left: "1%",
	  top: "1%",
	  textStyle: {
		  color: "rgba(178,34,34,0.7)",
		  }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: "2%",
    right: "6%",
	top:"12%",
    bottom: "5%",
    containLabel: true,
  },
  legend: {
    data: ["第一产业", "第二产业", "第三产业", "生产总值"],
    right: 10,
    top: 12,
    textStyle: {
      color: "rgba(0,0,0,0.6)",
    },
    itemWidth: 12,
    itemHeight: 10,
    // itemGap: 35
  },
  xAxis: {
    type: "category",
    data: ["1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020"],
    axisLine: {
      lineStyle: {
        color: "rgba(0,0,0,0.6)",
      },
    },
    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: "Microsoft YaHei",
      },
    },
  },

  yAxis: {
    type: "value",
    axisLine: {
      show: false,
      lineStyle: {
        color: "rgba(0,0,0,0.6)",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(0,0,0,0.6)",
      },
    },
	name:"单位/亿元",
    axisLabel: {},
  },
  dataZoom: [
    {
      show: true,
      height: 12,
      xAxisIndex: [0],
      bottom: "8%",
      start: 0,
      end: 100,
      handleIcon:
        "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
      handleSize: "110%",
      handleStyle: {
        color: "#d3dee5",
      },
      textStyle: {
        color: "#fff",
      },
      borderColor: "#90979c",
    },
    {
      type: "inside",
      show: true,
      height: 15,
      start: 1,
      end: 35,
    },
  ],
  series: [
    {
      name: "第一产业",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(214, 143, 0, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(208, 69, 0, 0.8)",
            },
          ]),
          barBorderRadius: 12,
        },
      },
      data: [1529, 2022, 3300, 6198, 9937, 10507, 10773, 11254, 12465, 13747],
    },
    {
      name: "第二产业",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(19, 204, 50, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(66, 132, 0, 0.8)",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [1747, 2834, 6419, 18809, 29298, 29737, 30009, 29997, 29102, 29464],
    },
    {
      name: "第三产业",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(52, 185, 221, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(0, 85, 255, 0.8)",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [1526, 2629, 5987, 13982, 27318, 29901, 33153, 35417, 42461, 43714],
    },
    {
      name: "生产总值",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 116, 214, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(123, 0, 185, 0.8)",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [4901, 7486, 15706, 38989, 66553, 70059, 73936, 77568, 84027, 86925],
    },
  ],
};

var app = {
  currentIndex: -1,
};
setInterval(function () {
  var dataLen = option.series[0].data.length;

  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: "downplay",
    seriesIndex: 0,
    dataIndex: app.currentIndex,
  });
  app.currentIndex = (app.currentIndex + 1) % dataLen;
  //console.log(app.currentIndex);
  // 高亮当前图形
  myChart.dispatchAction({
    type: "highlight",
    seriesIndex: 0,
    dataIndex: app.currentIndex,
  });
  // 显示 tooltip
  myChart.dispatchAction({
    type: "showTip",
    seriesIndex: 0,
    dataIndex: app.currentIndex,
  });
}, 1500);

	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
