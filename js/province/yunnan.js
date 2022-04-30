(function(){
	var myChart = echarts.init(document.querySelector('.map'));
	$.get('./data/geo/Cyunnan.json', function (geoJson) {
	
			echarts.registerMap('yunnan', geoJson); // 注册地图
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
				    map: 'yunnan',
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
	                  name: '云南各地级市/自治州少数民族占比',
	                  type: 'map',
	                  map: 'yunnan',
					  zoom:1.25,
	                  label: {
	                    show: false
	                  },
	                  data: [
	                    { name: '怒江傈僳族自治州', value: 92.2},
	                    { name: '大理白族自治州', value: 51.48 },
	                    { name: '西双版纳傣族自治州', value: 77.9 },
	                    { name: '红河哈尼族彝族自治州', value: 61.3 },
	                    { name: '文山壮族苗族自治州', value: 58.0 },
	                    { name: '楚雄彝族自治州', value: 36.74 },
	                    { name: '迪庆藏族自治州', value: 89.08 },
	                    { name: '德宏傣族景颇族自治州', value: 52 },
	                    { name: '丽江市', value: 58.1 },
						{ name: '昆明市', value: 13.84 },
						{ name: '曲靖市', value: 8.15 },
						{ name: '保山市', value: 11.12 },
						{ name: '临沧市', value: 36.98 },
						{ name: '普洱市', value: 61 },
						{ name: '玉溪市', value: 34.4 },
						{ name: '昭通市', value: 10.17 },
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
				data: ['汉  族','彝  族','哈尼族','白  族','傣  族','苗  族','壮  族','回  族','傈僳族',
				'拉祜族','佤  族','纳西族','瑶  族','藏  族','景颇族','布朗族','其  他','布依族','普米族',
				'阿昌族','怒  族','基诺族','蒙古族','德昂族','满  族','水  族','独龙族',],
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
					data: [31580400,5072200,1633400,1604100,1259700,1253600,1210100,737700,
					705400,469400,383700,304300,218900,148000,146400,119800,80100,68200,
					43100,40000,34300,25300,25200,20800,19600,9800,6700,],
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
	var option = 
		{	
			tooltip: {
				formatter: '{b}:<br/>{c} 亿元'
			},
			title: {
			  text: "云南省各地区生产总值",
			  textStyle: {
			    align: "center",
			    color: "#aa0000",
			    fontSize: 15,
			  },
			  top: "3%",
			  left: "10%",
			},
			series: [
			  {
			    type: 'treemap',
				  leafDepth: 1,   //一次下钻深度
				  roam:'false',  //不能缩放平移
			    data: [
			      {
			        name: '非民族自治地方',
			        value: 20090.82,
					itemStyle: {   // 这里配置每个块的颜色
					                    color:'#72d855' 
					                  },
			      },
			      {
			        name: '民族自治地方',
			        value: 8116.19,
					itemStyle: {   // 这里配置每个块的颜色
					                    color:'#ffa39c' 
					                  },
			        children: [
			          {
			            name: '自治州合计',
			            value: 8116.19,
						itemStyle: {   // 这里配置每个块的颜色
						                    color:'#ffb078' 
						                  },
						  children:[
							  {
							      name:'楚雄彝族自治州',
							      value:372.16,
							      itemStyle:{ color:'#61a0a8'},
							      children:[
							      {
							              name: '第一产业',
							              value:261.93,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:545.89,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:564.34,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'红河哈尼族彝族自治州',
							      value:2417.48,
							      itemStyle:{ color:'#d48265'},
							      children:[
							      {
							              name: '第一产业',
							              value:344.78,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:940.44,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:1132.26,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'文山壮族苗族自治州',
							      value:1185.12,
							      itemStyle:{ color:'#91c7ae'},
							      children:[
							      {
							              name: '第一产业',
							              value:241.28,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:396.78,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:547.06,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'西双版纳傣族自治州',
							      value:604.18,
							      itemStyle:{ color:'#749f83'},
							      children:[
							      {
							              name: '第一产业',
							              value:138.26,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:151.56,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:314.36,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'大理白族自治州',
							      value:1484.04,
							      itemStyle:{ color:'#ca8622'},
							      children:[
							      {
							              name: '第一产业',
							              value:338.96,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:405.94,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:739.14,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'德宏傣族景颇族自治州',
							      value:575.54,
							      itemStyle:{ color:'#c23531'},
							      children:[
							      {
							              name: '第一产业',
							              value:120.41,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:121.52,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:333.61,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'怒江傈僳族自治州',
							      value:210.73,
							      itemStyle:{ color:'#2f4554'},
							      children:[
							      {
							              name: '第一产业',
							              value:30.63,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:74.01,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:106.09,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'迪庆藏族自治州',
							      value:266.94,
							      itemStyle:{ color:'#61a0a8'},
							      children:[
							      {
							              name: '第一产业',
							              value:18.47,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:102.67,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:145.8,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
							  {
							      name:'自治州以外的自治县合计',
							      value:1974.63,
							      itemStyle:{ color:'#d48265'},
							      children:[
							      {
							              name: '第一产业',
							              value:511.25,
							              itemStyle:{ color:'#61a0a8'},
							          },
							      {
							              name: '第二产业',
							              value:488.57,
							              itemStyle:{ color:'#d48265'},
							          },
							      {
							              name: '第三产业',
							              value:974.81,
							              itemStyle:{ color:'#91c7ae'},
							          },
							      ]
							  },
						  ]
			          },
						{
						  name: '自治县合计(自治州以外)',
						  value: 1974.63,
						  children:[
										{
										    name:'禄劝彝族苗族自治县',
										    value:146.5,
										    itemStyle:{ color:'#749f83'},
										    children:[
										    {
										            name: '第一产业',
										            value:41.64,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:22.04,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:82.82,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'寻甸回族彝族自治县',
										    value:143.77,
										    itemStyle:{ color:'#ca8622'},
										    children:[
										    {
										            name: '第一产业',
										            value:38.35,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:24.32,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:81.1,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'峨山彝族自治县',
										    value:117.62,
										    itemStyle:{ color:'#c23531'},
										    children:[
										    {
										            name: '第一产业',
										            value:17.59,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:31.97,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:68.06,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'新平彝族傣族自治县',
										    value:213.86,
										    itemStyle:{ color:'#2f4554'},
										    children:[
										    {
										            name: '第一产业',
										            value:29.53,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:87.93,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:96.4,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'元江哈尼族彝族傣族自治县',
										    value:124.26,
										    itemStyle:{ color:'#61a0a8'},
										    children:[
										    {
										            name: '第一产业',
										            value:31.3,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:33.6,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:59.36,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'玉龙纳西族自治县',
										    value:90.15,
										    itemStyle:{ color:'#d48265'},
										    children:[
										    {
										            name: '第一产业',
										            value:18.49,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:32.27,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:39.39,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'宁蒗彝族自治县',
										    value:67.3,
										    itemStyle:{ color:'#91c7ae'},
										    children:[
										    {
										            name: '第一产业',
										            value:12.2,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:20.05,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:35.05,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'宁洱哈尼族彝族自治县',
										    value:67.24,
										    itemStyle:{ color:'#749f83'},
										    children:[
										    {
										            name: '第一产业',
										            value:17.41,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:17.79,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:32.04,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'墨江哈尼族自治县',
										    value:85.45,
										    itemStyle:{ color:'#ca8622'},
										    children:[
										    {
										            name: '第一产业',
										            value:24.42,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:17.37,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:43.66,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'景东彝族自治县',
										    value:109.99,
										    itemStyle:{ color:'#c23531'},
										    children:[
										    {
										            name: '第一产业',
										            value:36.46,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:18.06,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:55.47,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'景谷傣族彝族自治县',
										    value:121.87,
										    itemStyle:{ color:'#2f4554'},
										    children:[
										    {
										            name: '第一产业',
										            value:40.35,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:29.09,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:52.43,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'镇沅彝族哈尼族拉祜族自治县',
										    value:88.61,
										    itemStyle:{ color:'#61a0a8'},
										    children:[
										    {
										            name: '第一产业',
										            value:29.07,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:22.75,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:36.79,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'江城哈尼族彝族自治县',
										    value:50.38,
										    itemStyle:{ color:'#d48265'},
										    children:[
										    {
										            name: '第一产业',
										            value:13.61,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:11.11,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:25.66,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'孟连傣族拉祜族佤族自治县',
										    value:51.68,
										    itemStyle:{ color:'#91c7ae'},
										    children:[
										    {
										            name: '第一产业',
										            value:17.26,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:6.35,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:28.07,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'澜沧拉祜族自治县',
										    value:120.07,
										    itemStyle:{ color:'#749f83'},
										    children:[
										    {
										            name: '第一产业',
										            value:30.52,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:34.3,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:55.25,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'西盟佤族自治县',
										    value:26.03,
										    itemStyle:{ color:'#ca8622'},
										    children:[
										    {
										            name: '第一产业',
										            value:5.12,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:4.72,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:16.19,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'双江拉祜族佤族布朗族傣族自治县',
										    value:59.74,
										    itemStyle:{ color:'#c23531'},
										    children:[
										    {
										            name: '第一产业',
										            value:16.8,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:14.09,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:28.85,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'耿马傣族佤族自治县',
										    value:121.47,
										    itemStyle:{ color:'#2f4554'},
										    children:[
										    {
										            name: '第一产业',
										            value:45.19,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:31.35,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:44.93,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
										{
										    name:'沧源佤族自治县',
										    value:51.57,
										    itemStyle:{ color:'#61a0a8'},
										    children:[
										    {
										            name: '第一产业',
										            value:15.21,
										            itemStyle:{ color:'#61a0a8'},
										        },
										    {
										            name: '第二产业',
										            value:13.24,
										            itemStyle:{ color:'#d48265'},
										        },
										    {
										            name: '第三产业',
										            value:23.12,
										            itemStyle:{ color:'#91c7ae'},
										        },
										    ]
										},
							      ]
							  },
						  ]
						}
			        ],
				breadcrumb:{
					height:15,
					bottom:'auto',
					itemStyle: {   // 这里配置每个块的颜色
					                    color:'#aa0000' 
					                  },
				}
			      }
			    ]
			  }	;
myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();