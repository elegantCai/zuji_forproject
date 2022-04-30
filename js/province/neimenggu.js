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
			{ name:'汉族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[18667823]
			},
			{ name:'蒙古族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[4701544]
			},
			{ name:'回族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[216873]
			},
			{ name:'满族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[563602]
			},
			{ name:'朝鲜族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[22469]
			},
			{ name:'达斡尔族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[86805]
			},
			{ name:'鄂温克族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[33198]
			},
			{ name:'其他民族',
			type:'bar',
			stack:'total',
			emphasis: {focus: 'series'},
			data:[34133]
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
			        data: ['经济','农牧业','交通',"旅游"],
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
					  text: "内蒙古近10年生产总值情况",
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
					        color: "#000054",
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
					    data:	  [114.1, 113.6, 110.7, 108.7, 107.8, 107.7, 107, 104, 105.2, 105.2, 100.2],
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
					    data: [8199.86, 9458.12, 10470.14, 11392.42, 12158.22, 
						12948.99, 13789.26, 14898.05, 16140.76, 17212.53, 17359.82],
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
				      text: '内蒙古近10年林业、畜牧业情况',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['林业总产值(万元)', '畜牧业总产值(万元)']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: [ '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
				      }
				    ],
				    yAxis: [
				      {
				        type: 'value',
						name:"万元",
						position:'left',
				      },
					  {
						show:false,
					  }
				    ],
				    series: [
				      {
				        name: '林业总产值',
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
				          765727, 931636, 977552, 961409, 964358, 994184, 986357, 999140, 1003117, 1008945, 897800
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
				        name: '畜牧业总产值',
				        type: 'bar',
				        data: [
				          8076660, 9759935, 10889659, 11708651, 11628846, 11146265, 11497481, 12005587, 12943050, 13904597, 16033558
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
				{
				  title: {
				      text: '内蒙古近10年公路、铁路通车里程',
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
				        data: [
				          9175, 8745, 9788, 10411, 10423, 11890, 12164, 12395, 12486, 13016, 14190
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
				        name: '公路线路里程',
				        type: 'bar',
				        data: [
				          157994, 160995, 163763, 167515, 172167, 175374, 196061, 199423, 202641, 206089, 210217
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
				{
				  title: {
				      text: '内蒙古近20年旅游产业相关统计图',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['国内旅游人数', '旅游总收入(亿元)']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['2000', '2005', '2010', '2015', '2020']
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
				        name: '国内旅游人数',
				        type: 'bar',
				        data: [
							735, 2062, 4478, 8352, 12494
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
				          42.72, 208.09, 732.7, 2257.1, 2406,
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

