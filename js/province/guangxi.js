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
			data: ['人口数量(万人)']
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
				data: [3486.69]
			},
			{
			  name: '壮族',
			  type: 'bar',
			  stack: 'total',
			  label: {
			    show: true
			  },
			  emphasis: {
			    focus: 'series'
			  },
			  data: [2231.07]
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
			  data: [373.35]
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
					  text: "广西近10年生产总值情况",
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
					    color: "#ff5500",
					  },
					},
					xAxis: {
					  data: [
					   '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
					  ],
					  axisLine: {
					    show: true, //隐藏X轴轴线
					    lineStyle: {
					      color: "#50d6f0",
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
					        color: "#FFFFFF",
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
					    data:	  [111.7, 111.5, 110.1, 110, 108.3, 107.9, 107, 107.1, 106.8, 106, 103.7],
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
					    data: [8552.44, 10299.94, 11303.55, 12448.36, 13587.82, 14797.8, 16116.55, 17790.68, 
						19627.81, 21237.14, 22156.69],
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
				      text: '广西近20年公路、铁路通车里程',
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
				        data: ['2000', '2005', '2010', '2015', '2017', '2018', '2019', '2020']
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
				          3109, 3097, 3174.1, 5086, 5191, 5202, 5206, 5206
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
				           812, 1411, 2574, 4288, 5259, 5563.1, 6026, 6803.41
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
				      text: '广西近20年旅游产业相关统计图',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['接待入境旅游者人数', '旅游总收入(亿元)']
				    },
				    calculable: true,
					
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['2000', '2005', '2010', '2015', '2017', '2018', '2019', '2020']
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
				        name: '接待入境旅游者人数',
				        type: 'bar',
				        data: [
							124.0265, 146.1605, 250.2363, 450.0562, 512.4381, 562.3253, 623.9568, 24.6815
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
				        name: '旅游总收入(亿元)',
				        type: 'bar',
				        data: [
				          168.6, 303.7, 952.9, 3254.2, 5580.4, 7619.9, 10241.4, 7267.5
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