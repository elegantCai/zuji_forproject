(function(){
	var myChart = echarts.init(document.querySelector('.map'));
	$.get('./data/geo/Cguizhou.json', function (geoJson) {
	
			echarts.registerMap('guizhou', geoJson); // 注册地图
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
				    map: 'guizhou',
				  					//zoom: 1.5,
				  					roam:true,
				  					layoutCenter:['48%','50%'],
				  					layoutSize:'100%',
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
	                  name: '贵州各地级市/自治州少数民族占比',
	                  type: 'map',
	                  map: 'guizhou',
					  zoom:1.2,
	                  label: {
	                    show: false
	                  },
	                  data: [
	                    { name: '黔东南苗族侗族自治州', value: 81.1},
	                    { name: '黔南布依族苗族自治州', value: 55.92 },
	                    { name: '黔西南布依族苗族自治州', value: 39.7 },
	                    { name: '铜仁市', value: 78.29 },
	                    { name: '贵阳市', value: 16.68 },
	                    { name: '安顺市', value: 39 },
	                    { name: '六盘水市', value: 27 },
	                    { name: '毕节市', value: 25.88 },
	                    { name: '遵义市', value: 12.2 },
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
	var myChart = echarts.init(document.querySelector('.table .chart'));
		var option = {
			baseOption: {
			    // 时间进度模块
			    timeline: {
			        axisType: 'category',
			        autoPlay: true,
			        playInterval: '2000',
			        data: ['经济','脱贫','交通',"旅游"],
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
					  text: "贵州省近5年生产总值情况",
					  textStyle: {
					    align: "center",
					    color: "#aa0000",
					    fontSize: 20,
					  },
					  top: "3%",
					  left: "10%",
					},
					legend: {
					  data: ["全省生产总值", "同比增长"],
					  top: "15%",
					  textStyle: {
					    color: "#aa557f",
					  },
					},
					xAxis: {
					  data: [
					    "2016",
					    "2017",
					    "2018",
					    "2019",
					    "2020",
					  ],
					  axisLine: {
					    show: true, //隐藏X轴轴线
					    lineStyle: {
					      color: "#01FCE3",
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
					      color: "#000063",
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
					        color: "#000063",
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
					    data:	  [11.9,15.4,12.8,9.2,6.3],
						tooltip: {
						    valueFormatter: function (value) {
						        return value + ' %';
						        }
						},
					  },
					  {
					    name: "全省生产总值",
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
					    data: [11792.35,13605.42,15353.21,16769.34,17826.56],
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
					    text: "贵州省脱贫攻坚工作",
					    textStyle: {
					      align: "center",
					      color: "#aa0000",
					      fontSize: 20,
					    },
					    top: "3%",
					    left: "10%",
					  },
					legend: {
					    data: ["贫困人口", "贫困发生率"],
					    top: "15%",
					  },
					xAxis: {
					    data: [
					      "2016",
					      "2017",
					      "2018",
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
					      name: "(万人)",
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
					      name: "贫困发生率",
					      nameTextStyle: {
					        color: "#000063",
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
					          color: "#000063",
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
					      name: "贫困发生率",
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
					      data: [10.6,7.75,4.29,0.85,0],
					    },
					    {
					      name: "贫困人口",
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
					      data:  [372,280.32,155.12,30.83,0],
					    },
					  ],
				},
				{
				  title: {
				      text: '贵州省近40年公路、铁路通车里程',
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
				        data: ['1978', '2000', '2005', '2010', '2015', '2020']
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
				          1365,1641,1986,2002,2810,3753
				        ],
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
				          25954,34643,46983,151644,186407,204724
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
				        data: ['2016', '2017', '2018', '2019', '2020']
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
				          53148.42,74417.43,96858.12,113526.6,61781.49
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
				          5027.54,7116.81,9471.03,2318.86,5785.09
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

(function(){
	var myChart = echarts.init(document.querySelector('.down'));
	var option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
				type: 'cross',
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
				data: ['汉族','苗族','布依族','土家族','侗族','彝族','未识别',
				'仡佬族','水族','白族','回族','壮族','蒙古族','瑶族','仫佬族','畲族','毛南族','满族','羌族',],
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
			dataZoom: [{
			      type: 'slider',
			      show: true,
			      xAxisIndex: [0],
			      left: '9%',
			      bottom: -5,
			      start: 0,
			      end: 50 ,//初始化滚动条
				  height:20,
			  }],
			grid: {
			              bottom: '45px',
			          },
			series: [
				{
					data: [24511822,4506912,2710606,1696664,1650871,959302,
					698234,550322,371367,214802,204962,67845,49780,46759,46066,
					41794,29766,26817,2089],
					type: 'bar',
					itemStyle: {
					            normal: {
					　　　　　　　　//这里是重点
					                color: function(params) {
					                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
										var colorList = ['#6d3637','#796f5d', '#646251', '#353950', '#1b1b2b','#213d33', '#2a2a37']; 
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