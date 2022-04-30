//柱形图模块:各民族分布比例
(function(){
	var myChart = echarts.init(document.querySelector('.forchart2'));
var option = {
  normal: {
    top: 200,
    left: 300,
    width: 500,
    height: 400,
    zIndex: 6,
    backgroundColor: "",
  },
  color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
  title: {
      text: "少数民族相关国家级非遗占比",
      textStyle: {
        align: "center",
        color: "#760000",
        fontSize: 20,
      },
      bottom: "-2%",
      left: "25%",
    },
  tooltip: {
    show: true,
    trigger: "item",
	borderColor: "#00a7a7",
  },
  legend: {
    show: false,
    icon: "circle",
    left: "35%",
    top: "90%",
    orient: "horizontal",
    textStyle: {
      fontSize: 14,
      color: "#fff",
    },
    data: ["少数民族相关非遗占比（%）"],
  },
  radar: {
    center: ["50%", "50%"],
    radius: "70%",
    startAngle: 90,
    splitNumber: 4,
    shape: "circle",
    splitArea: {
      areaStyle: {
        color: ["transparent"],
      },
    },
    axisLabel: {
      show: false,
      fontSize: 18,
      color: "#fff",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "grey", //
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "grey", //
      },
    },
	
    indicator: [
      {
        name: "民间文学",
        max: 34,
      },
      {
        name: "传统音乐",
        max: 34,
      },
      {
        name: "传统舞蹈",
        max: 34,
      },
	  {
	    name: "传统戏剧",
	    max: 34,
	  },
      {
        name: "曲艺",
        max: 34,
      },
      {
        name: "传统体育、游艺与杂技",
        max: 34,
      },
      {
        name: "传统美术",
        max: 34,
      },
      {
        name: "传统技艺",
        max: 34,
      },
      {
        name: "传统医药",
        max: 34,
      },
      {
        name: "民俗",
        max: 34,
      },
    ],
  },
  series: [
    {
      name: "少数民族相关非遗占比（%）",
      type: "radar",
      symbol: "circle",
      symbolSize: 10,
      areaStyle: {
        normal: {
          color: "rgba(245, 166, 35, 0.4)",
        },
      },
      itemStyle: {
        color: "rgba(245, 166, 35, 1)",
        borderColor: "rgba(245, 166, 35, 0.3)",
        borderWidth: 10,
      },
      lineStyle: {
        normal: {
          type: "dashed",

          color: "rgba(245, 166, 35, 1)",
          width: 2,
        },
      },
      data: [[22.69, 24.48, 26.96, 4.64, 11.56, 17.5,14.66, 16.35, 32.5, 33.91]],
    },
  ],
};
myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function(){
	var myChart = echarts.init(document.querySelector('.forchart1'));
	var colorList = [
	  {
	    type: "linear",
	    x: 0,
	    y: 0,
	    x2: 1,
	    y2: 1,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(51,192,205,0.57)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 1,
	    y: 0,
	    x2: 0,
	    y2: 1,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(115,172,255,0.67)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 1,
	    y: 0,
	    x2: 0,
	    y2: 0,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(158,135,255,0.57)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 0,
	    y: 1,
	    x2: 0,
	    y2: 0,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(252,75,75,0.57)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 1,
	    y: 1,
	    x2: 1,
	    y2: 0,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "#FDB36ac2", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 0,
	    y: 0,
	    x2: 1,
	    y2: 0,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "#FECE4391", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 0,
	    y: 0,
	    x2: 1,
	    y2: 1,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(51,192,205,0.57)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 1,
	    y: 0,
	    x2: 0,
	    y2: 1,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(115,172,255,0.67)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 0,
	    y: 1,
	    x2: 0,
	    y2: 0,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "rgba(252,75,75,0.57)", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	  {
	    type: "linear",
	    x: 1,
	    y: 1,
	    x2: 1,
	    y2: 0,
	    colorStops: [
	      {
	        offset: 0,
	        color: "rgba(226, 225, 214, 1.0)", // 0% 处的颜色
	      },
	      {
	        offset: 1,
	        color: "#FDB36ac2", // 100% 处的颜色
	      },
	    ],
	    globalCoord: false, // 缺省为 false
	  },
	];
	var colorLine = [
	  "#33C0CD",
	  "#73ACFF",
	  "#9E87FF",
	  "#FE6969",
	  "#FDB36A",
	  "#FECE43",
	  "#33C0CD",
	  "#73ACFF",
	  "#FDB36A",
	  "#FECE43",
	];
	
	function getRich() {
	  let result = {};
	  colorLine.forEach((v, i) => {
	    result[`hr${i}`] = {
	      backgroundColor: colorLine[i],
	      borderRadius: 3,
	      width: 3,
	      height: 3,
	      padding: [3, 3, 0, -12],
	    };
	    result[`a${i}`] = {
	      padding: [-11, 6, -20, 6],
	      color: colorLine[i],
	      backgroundColor: "transparent",
	      fontSize: 12,
	    };
	  });
	  return result;
	}
	data = [
	  {
	    name: "民间文学",
	    value: 49,
	  },
	  {
	    name: "传统音乐",
	    value: 70,
	  },
	  {
	    name: "传统舞蹈",
	    value: 55,
	  },
	  {
	    name: "传统戏剧",
	    value: 14,
	  },
	  {
	    name: "曲艺",
	    value: 20,
	  },
	  {
	    name: "传统体育、游艺与杂技",
	    value: 21,
	  },
	  {
	    name: "传统美术",
	    value: 34,
	  },
	  {
	    name: "传统技艺",
	    value: 68,
	  },
	  {
	    name: "传统医药",
	    value: 13,
	  },
	  {
	    name: "民俗",
	    value: 98,
	  },
	].sort((a, b) => {
	  return b.value - a.value;
	});
	data.forEach((v, i) => {
	  v.labelLine = {
	    lineStyle: {
	      width: 1,
	      color: colorLine[i],
	    },
	  };
	});
	option = {
		title: {
		    text: "少数民族相关国家级非遗个数",
		    textStyle: {
		      align: "center",
		      color: "#760000",
		      fontSize: 20,
		    },
			top: "2%",
		    left: "30%",
		  },
		legend:{
			show:true,
			left:0,
			top:40,
			orient: "vertical",
		},
		tooltip: {
		  show: true,
		  trigger: "item",
		    borderColor: "#C3CBD6",
			
		},
	  series: [
	    {
	      type: "pie",
	      radius: "80%",
	      center: ["50%", "60%"],
	      clockwise: true,
	      avoidLabelOverlap: true,
	      label: {
	        show: false,
	        position: "outside",
	        formatter: function (params) {
	          const name = params.name;
	          const percent = params.percent ;
	          const index = params.dataIndex;
	          return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join(
	            "\n"
	          );
	        },
	        rich: getRich(),
	      },
	      itemStyle: {
	        normal: {
	          color: function (params) {
	            return colorList[params.dataIndex];
	          },
	        },
	      },
	      data,
	      roseType: "radius",
	    },
	  ],
	};
myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function(){
	var myChart = echarts.init(document.querySelector('.forchart3'));
	option = {
	  title: {
	    text: "位于少数民族自治地区的国家级文化生态保护区",
		textStyle: {
		  align: "center",
		  color: "#760000",
		  fontSize: 20,
		},
		left:30,
	  },
	  tooltip: {
	    trigger: "axis",
	    axisPointer: {
	      // 坐标轴指示器，坐标轴触发有效
	      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
	    },
	  },
	  legend: {
	    data: ["县级单位数", "国家级项目数"],
	    align: "right",
		top:20,
	    right: 10,
	  },
	  grid: {
	    left: "3%",
	    right: "4%",
	    bottom: "3%",
	    containLabel: true,
	  },
	  xAxis: [
	    {
	      type: "category",
	      data: ["热贡文化生态保护区", "羌族文化生态保护区", "武陵山区（湘西）土家族苗族文化生态保护区", 
		  "羌族文化生态保护实验区", "客家文化（梅州）生态保护实验区","迪庆民族文化生态保护实验区","大理文化生态保护实验区",
		  "黔东南民族文化生态保护实验区","客家文化（赣南）生态保护实验区","格萨尔文化（果洛）生态保护实验区",
		  "武陵山区（鄂西南）土家族苗族文化生态保护实验区","武陵山区（渝东南）土家族苗族文化生态保护实验区",
		  "客家文化（闽西）生态保护实验区","藏族文化（玉树）生态保护实验区",],
	    },
	  ],
	  
	  yAxis: [
	    {
	      type: "value",
	      name: "个",
	      axisLabel: {
	        formatter: "{value}",
	      },
	    },
	  ],
	  series: [
	    {
	      name: "县级单位数",
	      type: "bar",
	      data: [3,7,8,2.8,3,12,16,18,6,10,6,8,6],
		  itemStyle: {
		    normal: {
		      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		        {
		          offset: 0,
		          color: "#ff6c22",
		        },
		        {
		          offset: 1,
		          color: "#ec251e",
		        },
		      ]),
		    },
		  },
	    },
	    {
	      name: "国家级项目数",
	      type: "bar",
		  itemStyle: {
		    normal: {
		      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		        {
		          offset: 0,
		          color: "#ffcd17",
		        },
		        {
		          offset: 1,
		          color: "#f7ba1f",
		        },
		      ]),
		    },
		  },
	      data: [6,31,26,6,8,16,72,10,4,22,11,8,11],
	    },
	  ],
	};
	myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	})();


