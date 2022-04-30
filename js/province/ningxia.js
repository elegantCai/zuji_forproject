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
				data: [4617207]
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
			  data: [2525952]
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
			  data: [66160]
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
			        data: ['经济','交通',"生态"],
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
					  text: "宁夏近10年生产总值情况",
					  textStyle: {
					    align: "center",
					    color: "#aa0000",
					    fontSize: 20,
					  },
					  top: "3%",
					  left: "10%",
					},
					legend: {
					  data: ["全区生产总值", "同比增长"],
					  top: "15%",
					  textStyle: {
					    color: "#aa5500",
					  },
					},
					xAxis: {
					  data: [
					   '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
					  ],
					  axisLine: {
					    show: true, //隐藏X轴轴线
					    lineStyle: {
					      color: "#55557f",
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
					    name: "同比增长",
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
					        color: "#000059",
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
					    name: "同比增长",
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
					    data:	  [112.5, 112.1, 110.5, 109.8, 108, 108, 107.4, 107.3, 106.8, 106.5, 103.9],
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
					    data: [1571.68, 1931.83, 2131, 2327.68, 2473.94, 2579.38,
						 2781.39, 3200.28, 3510.21, 3748.48, 3920.55],
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
				      text: '宁夏近10年公路、铁路通车里程',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['铁路营业旅程', '高速公路线路里程']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
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
				          1032, 1029, 1029, 1029, 1029, 1029, 1060, 1060, 1060, 1240, 1350
				        ],
				        markPoint: {
				          data: [
				            { type: 'max', name: 'Max' },
				          ]
				        },
				        markLine: {
				          data: [{ type: 'average', name: 'Avg' }]
				        }
				      },
				      {
				        name: '高速公路线路里程',
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
				           22518, 24506, 26522, 28554, 31276, 33240, 33940, 34561, 35405, 36576, 36901
				        ],
						markPoint: {
						  data: [
						    { type: 'max', name: 'Max' },
						  ]
						},
				        markLine: {
				          data: [{ type: 'average', name: 'Avg' }]
				        }
				      },
				    ]
				},
				{
				  title: {
				      text: '宁夏近10年植树造林情况',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['人工造林', '新封山育林']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
				      }
				    ],
				    yAxis: [
				      {
				        type: 'value',
						name:"公顷"
				      },
					  {
						show:false
					  }
				    ],
				    series: [
				      {
				        name: '人工造林',
				        type: 'bar',
				        data: [
							71001, 59810, 53430, 60695, 49723, 37895, 58960, 45531, 44828, 63057, 52857
				        ],
				        markPoint: {
				          data: [
				            { type: 'max', name: 'Max' },
				          ]
				        },
				        markLine: {
				          data: [{ type: 'average', name: 'Avg' }]
				        }
				      },
				      {
				        name: '新封山育林',
				        type: 'bar',
				        data: [
				          23931, 30668, 41384, 40450, 34468, 36743, 22938, 19062, 14939, 12401, 5500
				        ],
						markPoint: {
						  data: [
						    { type: 'max', name: 'Max' },
						  ]
						},
				        markLine: {
				          data: [{ type: 'average', name: 'Avg' }]
				        }
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