(function(){
	var myChart = echarts.init(document.querySelector('.d .pic'));
	option = {
	  //backgroundColor: "#79b068",
	  color: ["rgba(175, 170, 12, 1.0)", "rgba(211, 97, 30, 1.0)", "#ec4863"],
	
	  title: [
	    {
	      text: "少数民族地区运输里程",
	      left: "1%",
	      top: "6%",
	      textStyle: {
	        color: "rgba(0, 85, 0, 1.0)",
	      },
	    },
	    {
	      text: "全国占比",
	      left: "83%",
	      top: "6%",
	      textAlign: "center",
	      textStyle: {
	        color: "rgba(0, 85, 0, 1.0)",
	      },
	    },
	  ],
	  tooltip: {
	    trigger: "axis",
	  },
	  legend: {
	    x: 300,
	    top: "7%",
	    textStyle: {
	      color: "rgba(0, 85, 0, 1.0)",
	    },
	    data: ["铁路营业里程", "公路通车里程"],
	  },
	  grid: {
	    left: "1%",
	    right: "35%",
	    top: "16%",
	    bottom: "6%",
	    containLabel: true,
	  },
	  toolbox: {
	    show: false,
	    feature: {
	      saveAsImage: {},
	    },
	  },
	  xAxis: {
	    type: "category",
	    axisLine: {
	      lineStyle: {
	        color: "rgba(0, 85, 0, 1.0)",
	      },
	    },
	    axisTick: {
	      show: false,
	    },
	    axisLabel: {
	      textStyle: {
	        color: "rgba(0, 85, 0, 1.0)",
	      },
	    },
	    boundaryGap: false,
	    data: ["1995", "2000", "2005", "2010", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
	  },
	  yAxis: [
		  {
		    axisLine: {
		      lineStyle: {
		        color: "rgba(0, 85, 0, 1.0)",
		      },
		    },
		    splitLine: {
		      show: true,
		      lineStyle: {
		        color: "rgba(0, 85, 0, 1.0)",
		      },
		    },
		    axisTick: {
		      show: false,
		    },
		    axisLabel: {
		      textStyle: {
		        color: "rgba(0, 85, 0, 1.0)",
		      },
		    },
		    type: "value",
		  },
		  {
			  max:5,
		    axisLine: {
		      lineStyle: {
		        color: "rgba(0, 85, 0, 1.0)",
		      },
		    },
		    splitLine: {
		      show: true,
		      lineStyle: {
		        color: "rgba(0, 85, 0, 1.0)",
		      },
		    },
		    axisTick: {
		      show: false,
		    },
		    axisLabel: {
		      textStyle: {
		        color: "rgba(0, 85, 0, 1.0)",
		      },
		    },
		    type: "value",
		  },
	  ],
	  series: [
	    {
	      name: "铁路营业里程",
	      smooth: true,
      yAxisIndex: 1,
	      type: "line",
	      symbolSize: 8,
	      symbol: "circle",
	      data: [1.7, 1.43, 1.69, 2.12, 3.02, 3.04, 3.17, 3.18, 3.4, 3.6, 4.1],
	    },
	    {
	      name: "公路通车里程",
	      smooth: true,
	      type: "line",
	      symbolSize: 8,
	      symbol: "circle",
	      data: [33, 42.4, 59, 91.2, 116, 119, 123, 126, 129.6, 140.6],
	    },
	    {
	      type: "pie",
	      center: ["83%", "33%"],
	      radius: ["25%", "30%"],
	      label: {
	        normal: {
	          position: "center",
	        },
	      },
	      data: [
	        {
	          value: 4.1,
	          name: "铁路营业里程",
	          itemStyle: {
	            normal: {
	              color: "rgba(175, 170, 12, 1.0)",
	            },
	          },
	          label: {
	            normal: {
	              formatter: "{d} %",
	              textStyle: {
	                color: "rgba(175, 170, 12, 1.0)",
	                fontSize: 20,
	              },
	            },
	          },
	        },
	        {
	          value: 10.53,
	          name: "占位",
	          tooltip: {
	            show: false,
	          },
	          itemStyle: {
	            normal: {
	              color: "rgba(0, 85, 0, 0.6)",
	            },
	          },
	          label: {
	            normal: {
	              textStyle: {
	                color: "rgba(0, 85, 0, 1.0)",
	              },
	              formatter: "\n少数民族地区\n铁路营业里程占比",
	            },
	          },
	        },
	      ],
	    },
	
	    {
	      type: "pie",
	      center: ["83%", "72%"],
	      radius: ["25%", "30%"],
	      label: {
	        normal: {
	          position: "center",
	        },
	      },
	      data: [
	        {
	          value: 140.6,
	          name: "公路通车里程",
	          itemStyle: {
	            normal: {
	              color: "rgba(211, 97, 30, 1.0)",
	            },
	          },
	          label: {
	            normal: {
	              formatter: "{d} %",
	              textStyle: {
	                color: "rgba(211, 97, 30, 1.0)",
	                fontSize: 20,
	              },
	            },
	          },
	        },
	        {
	          value: 369.4,
	          name: "占位",
	          tooltip: {
	            show: false,
	          },
	          itemStyle: {
	            normal: {
	              color: "rgba(0, 85, 0, 0.6)",
	            },
	          },
	          label: {
	            normal: {
	              textStyle: {
	                color: "rgba(0, 85, 0, 1.0)",
	              },
	              formatter: "\n少数民族地区\n公路通车里程占比",
	            },
	          },
	        },
	      ],
	    },
	  ],
	};

	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();