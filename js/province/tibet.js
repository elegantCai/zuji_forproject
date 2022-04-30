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
				name: '藏族',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [3137901]
			},
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
			  data: [443370]
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
			  data: [66829]
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
		        playInterval: '1000',
		        data: ['经济','交通','旅游'],
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
				  text: "西藏自治区近8年全区生产总值情况",
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
				    "2013",
				    "2014",
				    "2015",
				    "2016",
				    "2017",
				    "2018",
				    "2019",
				    "2020",
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
				        color: "#00003e",
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
				    data:	  [12.1,10.8,11,10.1,10,8.9,8.1,7.8],
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
				    data: [828.2,939.74,1043,1173,1349,1548.39,1697.82,1902.74],
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
				    text: "近8年西藏自治区公路通车里程变化",
				    textStyle: {
				      align: "center",
				      fontSize: 20,
				    },
				    top: "3%",
				    left: "10%",
				  },
				legend: {
				    data: ["公路通车旅程", "同比增长"],
				    top: "15%",
				    textStyle: {
				      //color: "#ffffff",
				    },
				  },
				xAxis: {
				    data: [
				      "2013",
				      "2014",
				      "2015",
				      "2016",
				      "2017",
				      "2018",
				      "2019",
				      "2020",
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
				        color: "#5b5b5b", //X轴文字颜色
				      },
				    },
				  },
				yAxis: [
				    {
				      type: "value",
				      name: "公里",
				      nameTextStyle: {
				        color: "#5b5b5b",
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
				          color: "#5b5b5b",
				        },
				      },
				      axisLabel: {
				        show: true,
				        textStyle: {
				          color: "#5b5b5b",
				        },
				      },
				    },
				    {
				      type: "value",
				      name: "同比",
				      nameTextStyle: {
				        color: "#00004a",
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
				          color: "#00004a",
				        },
				      },
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
				      data: [8.3,6.9,3.8,5.3,8.8,9.4,6.3,14.3],
				    },
				    {
				      name: "公路通车旅程",
				      type: "bar",
				      barWidth: 15,
				      data:  [70591,75740,78348,82096,89343,97784,103951,118831],
				    },
				  ],
			},
			{
			  title: {
			      text: '西藏自治区近8年旅游产业相关统计图',
			    },
			    tooltip: {
			      trigger: 'axis'
			    },
			    legend: {
			      data: ['接待旅游者人数', '旅游总收入(亿元)']
			    },
			    calculable: true,
			    xAxis: [
			      {
			        type: 'category',
			        // prettier-ignore
			        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
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
			          1291.06,1553.14,2017.53,2315.94,2561.43,3368.73,4012.15,3505.01
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
			          165.18,204,281.92,330.75,379.37,490.14,559.28,366.42
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