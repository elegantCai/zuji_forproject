(function(){
var myChart = echarts.init(document.querySelector('.c .pic'));
// Generate data
var category = ["1990","1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020"];
var barData = [1.06,1.23,1.25,1.18,1.2,1.27,4.72,4.87,5.45,5.53,5.7];
var lineData =[33.2,35.7,36.1,38.4,55.7,82.5,86.5,93.7,104.8,109.8,112.6];
var rateData = [];//平均一个几个有多少张床位
for (var i = 0; i < 11; i++) {
  var rate = lineData[i]/barData[i] ;
  rateData[i] = rate;
}

 var option = {
  /*  grid: {
    top: "20%",
    bottom: "12%"
  },*/

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      label: {
        show: true,
      },
    },
  },
  legend: {
    data: ["平均床位数", "总医疗床位(万张)", "医疗机构数(万个)"],
    top: "2%",
    right: "10",
    textStyle: {     
      fontSize: 16,
    },
  },
  
  xAxis: {
    data: ["1990","1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020"],
    axisLine: {
      show: true, //隐藏X轴轴线
      lineStyle: {   
        width: 2,
      },
    },
    axisTick: {
      show: true, //隐藏X轴刻度
    },
    axisLabel: {
      show: true,
      textStyle: {      
        fontSize: 16,
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"],
      },
    },
  },
  yAxis: [
    {
      type: "value",
      /*name: "亿元",*/
      nameTextStyle: {  
        fontSize: 16,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
        lineStyle: {  
          width: 2,
        },
      },
      axisLabel: {
        show: true,
        textStyle: {      
          fontSize: 16,
        },
      },
    },
    {
      type: "value",
      /*name: "同比",*/
      nameTextStyle: {        
        fontSize: 16,
      },
      position: "right",
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        formatter: "{value}张", //右侧Y轴文字显示
        textStyle: {        
          fontSize: 16,
        },
      },
    },
  ],
  series: [
    {
      name: "平均床位数",
      type: "line",
      yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      smooth: true, //平滑曲线显示
      showAllSymbol: true, //显示所有图形。
      symbol: "circle", //标记的图形为实心圆
      symbolSize: 8, //标记的大小
      itemStyle: {
        //折线拐点标志的样式     
        width: 2,   
        shadowBlur: 4,
      },
      lineStyle: {    
        width: 2, 
        shadowBlur: 4,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(235, 120, 137, 0.5)",
          },
          {
            offset: 1,
            color: "rgba(235, 120, 137, 0)",
          },
        ]),
      },
      data: rateData,
    },
    
	{
      name: "总医疗床位(万张)",
      type: "bar",
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(173, 235, 226, 1.0)",
            },
            {
              offset: 1,
              color: "rgba(173, 235, 226, 0)",
            },
          ]),
          borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(173, 200, 200, 1)",
            },
            {
              offset: 1,
              color: "rgba(173, 200, 200, 1)",
            },
          ]),
          borderWidth: 2,
        },
      },
      data: [33.2,35.7,36.1,38.4,55.7,82.5,86.5,93.7,104.8,109.8,112.6],
    },

    
	{
      name: "医疗机构数(万个)",
      type: "bar",
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(243, 191, 128, 1.0)" },
            { offset: 1, color: "rgba(243, 191, 128,0)" },
          ]),
          borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(243, 191, 128,1)" },
            { offset: 1, color: "rgba(243, 191, 128,0)" },
          ]),
          borderWidth: 2,
        },
      },
      data: [1.06,1.23,1.25,1.18,1.2,1.27,4.72,4.87,5.45,5.53,5.7],
    },
  ],
};


	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
