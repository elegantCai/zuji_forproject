(function(){
	var myChart = echarts.init(document.querySelector('.map'));
	$.get('./data/geo/Cqinghai.json', function (geoJson) {
			echarts.registerMap('qinghai', geoJson); // 注册地图
	        option = {
	              tooltip: {
	                trigger: 'item',
	                formatter: '{b}<br/> 少数民族占比:{c} %'
	              },
	              toolbox: {
	                show: true,
	                orient: 'vertical',
	                left: 'right',
	                top: 'center',
	                feature: {
	                  dataView: { readOnly: false },
	                  restore: {},
	                  saveAsImage: {}
	                }
	              },
				  visualMap: {
				          min: 0,
				          max: 100,
				          text: ['High', 'Low'],
				          realtime: false,
				          calculable: true,
				          inRange: {
				            color: ['#d0ff99', '#ffccb4', '#ffc61a'],
				          },
				  		show:false,
				        },
				  geo: {
				    map: 'qinghai',
					//zoom: 1.5,
					roam:true,
					layoutCenter:['48%','50%'],
					layoutSize:'120%',
				    itemStyle: {					// 定义样式
				        normal: {					// 普通状态下的样式
				            areaColor: '#ffaa7f',    //省份颜色
				            borderColor: '#336666',
				            },
				        emphasis: {		areaColor: '#ff7130'    }			// 高亮状态下的样式
				        }
				    },		
	              series: [
	                {
	                  name: '青海各地级市/自治州少数民族占比',
	                  type: 'map',
	                  map: 'qinghai',
					  zoom:1.25,
	                  label: {
	                    show: false
	                  },
	                  data: [
	                    { name: '海西蒙古族藏族自治州', value: 40.6},
	                    { name: '玉树藏族自治州', value:98.9 },
	                    { name: '果洛藏族自治州', value: 91.80 },
	                    { name: '海北藏族自治州', value: 66.95 },
	                    { name: '海南藏族自治州', value: 77.76 },
	                    { name: '黄南藏族自治州', value: 93.84 },
	                    { name: '西宁市', value: 25.79 },
	                    { name: '海东市', value: 44.28 },
	                  ],
					  geoIndex: 0,
	                }
	              ]
	            }
	 		 	myChart.setOption(option);
				window.addEventListener("resize", function() {
					myChart.resize();
				});
	
	  	});
})();

(function(){
	var myChart = echarts.init(document.querySelector('.down'));
	var option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
				type: 'shadow',
				label: {
					backgroundColor: '#6a7985'
					}
				}
			},
			grid: {
			  top: "10%",
			  left: "12%",
			  bottom: "10%"
			  // containLabel: true
			},
			xAxis: {
				type: 'category',
				data: ['汉族','藏族','回族','土族','撒拉族','蒙古族','其他民族',],
				axisLabel:{
					interval:0,
				}
			},
			yAxis: {
				type: 'value',
				axisLabel: {
				  show: true,
				  formatter: function(value){
					  return value/10000 + "万"
				  }, //右侧Y轴文字显示
				  textStyle: {
				    color: "#ff5500",
				  },
				},
			},
			grid: {
			              bottom: '45px',
			          },
			series: [
				{
					data: [3178280,1533500,898400,215800,117300,109400,25500],
					type: 'bar',
					itemStyle: {
					            normal: {
					　　　　　　　　//这里是重点
					                color: function(params) {
					                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
										var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622']; 
										    return colorList[params.dataIndex % colorList.length];
					                }
					            }
					        },
					tooltip: {
					        valueFormatter: function (value) {
					          return value + ' 人';
					        }
					      },
				},
			],
	  
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
					  text: "青海近10年生产总值情况",
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
					      color: "#ac3c3c",
					    },
					    lineStyle: {
					      color: "#d99f82",
					    },
					    areaStyle: {
					      color: "rgba(255, 195, 167, 0.2)",
					    },
					    data:	  [113.3, 112.45, 111.2, 110.8, 109.2, 108.17, 107.84, 107.24, 107.14, 106.05, 101.52],
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
					            color: "#a54e52",
					          },
					          {
					            offset: 1,
					            color: "#7e4a49",
					          },
					        ]),
					      },
					    },
					    data: [1144.17, 1370.40, 1528.48, 1713.31, 1847.72, 
						2011.02, 2258.19, 2465.11, 2748, 2941.07, 3005.92],
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
				      text: '青海近10年公路、铁路通车里程',
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
						        color: "#a54e52",
						      },
						      {
						        offset: 1,
						        color: "#7e4a49",
						      },
						    ]),
						  },
						},
				        data: [
				          1651, 1856, 1856, 1856, 2074, 2274, 2299.4, 2299.4, 2299, 2354, 2854
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
						        color: "#cac1ac",
						      },
						      {
						        offset: 1,
						        color: "#afa698",
						      },
						    ]),
						  },
						},
				        data: [
				           235, 1133, 1148, 1228, 1718.76, 2662, 2878, 3223.06, 3328, 3450.93, 3450.93
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
				      text: '2020年进入青海省自驾车情况',
				    },
				    tooltip: {
				      trigger: 'axis'
				    },
				    legend: {
				      data: ['自驾车数量', '比重']
				    },
				    calculable: true,
				    xAxis: [
				      {
				        type: 'category',
				        // prettier-ignore
				        data: ['甘  肃', '河  南', '四  川', '山  东', '河  北', '陕  西', '宁  夏', '山  西', '江  苏', '安  徽', '其  他']
				      }
				    ],
				    yAxis: [
				      {
				        type: 'value',
						name:"万辆"
				      },
					  {
						show:false
					  }
				    ],
				    series: [
				      {
				        name: '自驾车数量',
				        type: 'bar',
				        data: [
							155.15, 50.05, 35.66, 31.35, 31.2, 29.91, 24.85, 21.38, 16.96, 12.75, 86.75
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
				        name: '比重',
				        type: 'bar',
				        data: [
				          31.28, 10.09, 7.19, 6.32, 6.29, 6.03, 5.01, 4.31, 3.42, 2.5705126912763854, 17.49
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