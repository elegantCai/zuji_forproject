(function(){
	var myChart = echarts.init(document.querySelector('.partation'));
	var option =  {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
			// Use axis to trigger tooltip
			type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
				}
			},
		legend: {
			"show":false
			},
		grid: {
			left: '2%',
			right: '2%',
			top:'2%',
			containLabel: true
			},
		xAxis: {
			type: 'value',
			"show":false
			},
		yAxis: {
			type: 'category',
			data: ['人口占比']
			},
		series: [
			{
				name: '汉族',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [40.57]
			},
			{
			  name: '维吾尔族',
			  type: 'bar',
			  stack: 'total',
			  label: {
			    show: true
			  },
			  emphasis: {
			    focus: 'series'
			  },
			  data: [45.21]
			},
			{
			  name: '回族',
			  type: 'bar',
			  stack: 'total',
			  label: {
			    show: true
			  },
			  emphasis: {
			    focus: 'series'
			  },
			  data: [4.55]
			},
			{
			  name: '哈萨克族',
			  type: 'bar',
			  stack: 'total',
			  label: {
			    show: true
			  },
			  emphasis: {
			    focus: 'series'
			  },
			  data: [6.74]
			},
			{
			  name: '其他民族',
			  type: 'bar',
			  stack: 'total',
			  label: {
			    show: true
			  },
			  emphasis: {
			    focus: 'series'
			  },
			  data: [2.93]
			},
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function(){
	var myChart = echarts.init(document.querySelector('.table .chart'));
		var option = {
			baseOption: {
			    // 时间进度模块
			    timeline: {
			        axisType: 'category',
			        autoPlay: true,
			        playInterval: '2000',
			        data: ['经济','交通',"旅游"],
			    },
			  
			    calculable : true,
			    grid: {
			        top: 80,
			        bottom: 100,
			    },
				tooltip: {
				    trigger: "axis",
				    axisPointer: {
				      type: "shadow",
				      label: {
				        show: true,
				      },
				    },
				  },
				toolbox: {
				  show: true,
				  feature: {
				    dataView: { show: true, readOnly: false },
				    magicType: { show: true, type: ['line', 'bar'] },
				    restore: { show: true },
				    saveAsImage: { show: true }
				  }
				},
			},
			options:[
				{
					title: {
					  text: "新疆重要年份生产总值",
					  textStyle: {
					    align: "center",
					    color: "#aa0000",
					    fontSize: 20,
					  },
					  top: "3%",
					  left: "10%",
					},
					legend: {
					  data: ["全区生产总值", "指数(2020年比以下各年)"],
					  top: "15%",
					  textStyle: {
					    color: "#ff5500",
					  },
					},
					xAxis: {
					  data: [
					    "1978",
					    "2000",
					    "2010",
						"2015",
					    "2019",
					    "2020",
					  ],
					  axisLine: {
					    show: true, //隐藏X轴轴线
					    lineStyle: {
					      color: "#5B5B5B",
					    },
					  },
					  axisTick: {
					    show: true, //隐藏X轴刻度
					  },
					  axisLabel: {
					    show: true,
					    textStyle: {
					      color: "#5B5B5B", //X轴文字颜色
					    },
					  },
					},
					yAxis: [
					  {
					    type: "value",
					    name: "亿元",
					    nameTextStyle: {
					      color: "#5B5B5B",
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
					        color: "#5B5B5B",
					      },
					    },
					    axisLabel: {
					      show: true,
					      textStyle: {
					        color: "#5B5B5B",
					      },
					    },
					  },
					  {
					    type: "value",
					    name: "指数",
					    nameTextStyle: {
					      color: "#5B5B5B",
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
					      formatter: "{value} %", //右侧Y轴文字显示
					      textStyle: {
					        color: "#220268",
					      },
					    },
						show:true
					  },
					  {
					    type: "value",
					    gridIndex: 0,
					    min: 50,
					    max: 100,
					    splitNumber: 8,
					    splitLine: {
					      show: false,
					    },
					    axisLine: {
					      show: false,
					    },
					    axisTick: {
					      show: false,
					    },
					    axisLabel: {
					      show: false,
					    },
					    splitArea: {
					      show: true,
					      areaStyle: {
					        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
					      },
					    },
					  },
					],
					series: [
					  {
					    name: "指数(2020年比以下各年)",
					    type: "line",
					    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
					    smooth: true, //平滑曲线显示
					    showAllSymbol: true, //显示所有图形。
					    symbol: "circle", //标记的图形为实心圆
					    symbolSize: 10, //标记的大小
					    itemStyle: {
					      //折线拐点标志的样式
					      color: "#ffad39",
					    },
					    lineStyle: {
					      color: "#e59539",
					    },
					    areaStyle: {
					      color: "rgba(255, 177, 121, 0.2)",
					    },
					    data:	  [4979,595.4,223.2,134.8,103.4,100],
						tooltip: {
						    valueFormatter: function (value) {
						        return value + ' %';
						        }
						},
					  },
					  {
					    name: "全区生产总值",
					    type: "bar",
					    barWidth: 15,
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
					    data: [39.07,1363.56,5360.18,9306.88,13597.11,13797.58],
						tooltip: {
						    valueFormatter: function (value) {
						        return value + ' 亿元';
						        }
						},
					  },
					],
				},
				{
				  title: {
				      text: '新疆近40年公路、铁路通车里程',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['铁路营业旅程', '公路线路里程']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['1978', '2000', '2010', '2015', '2019', '2020']
				      }
				    ],
				    yAxis: [
				      {
				        type: 'value',
						name:"公里",
						position:'left',
				      },
					  {
						show:false,
					  }
				    ],
				    series: [
				      {
				        name: '铁路营业旅程',
				        type: 'bar',
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
				        data: [
				           923,4199,6853,6234,15188,17476
				        ],
				      },
				      {
				        name: '公路线路里程',
				        type: 'bar',
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
				        data: [
				          4843,27048,50448,64505,69290,40305
				        ],
				      }
				    ]
				},
				{
				  title: {
				      text: '新疆近10年旅游产业相关统计图',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['接待旅游者人数', '旅行社个数']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['2010', '2015', '2019', '2020']
				      }
				    ],
				    yAxis: [
				      {
				        type: 'value',
						name:"万人次"
				      },
					  {
						show:false
					  }
				    ],
				    series: [
				      {
				        name: '接待旅游者人数',
				        type: 'bar',
				        data: [
				          3038,
				          5929,
				          21151,
				          15805,
				        ],
				      },
				      {
				        name: '旅行社个数',
				        type: 'bar',
				        data: [
				          462,
				          339,
				          611,
				          657,
				        ],
				      }
				    ]
				},
			]
	  
	};
	myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
})();