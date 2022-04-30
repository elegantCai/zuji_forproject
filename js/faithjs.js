(function(){
	var myChart = echarts.init(document.querySelector('.faith'));
	
	var faithrootdata=["藏传佛教","大乘佛教","上座部佛教","伊斯兰教","基督教天主教","基督教东正教","道教","萨满教"];
	
	var faithdata=[
		["藏族","蒙古族","门巴族","土族","裕固族","纳西族","怒族","羌族","普米族","锡伯族","鄂伦春族","达斡尔族"],
		["汉族","白族","壮族","仫佬族","满族","朝鲜族"],
		["傣族","德昂族","阿昌族","布朗族","拉祜族","佤族","景颇族"],
		["回族","维吾尔族","哈萨克族","柯尔克孜族","乌孜别克族","塔塔尔族","塔吉克族","东乡族","保安族","撒拉族"],
		["苗族","彝族","景颇族","拉祜族","佤族","傈僳族","怒族","独龙族","朝鲜族","藏族","水族","黎族","布依族"],
		["俄罗斯族","蒙古族","达斡尔族","鄂伦春族","鄂温克族"],
		["白族","瑶族","壮族","侗族","苗族","仫佬族","毛南族","纳西族","羌族"],
		["锡伯族","鄂伦春族","鄂温克族族","满族","赫哲族","达斡尔族"]
	];	
	
	var colors = [
	  {
	    c1: "#f38181",
	    c2: "#f38175",
	  },
	  {
	    c1: "#fce38a",
	    c2: "#fce370",
	  },
	  {
	    c1: "#eaffd0",
	    c2: "#eaffc0",
	  },
	  {
	    c1: "#95e1d3",
	    c2: "#95e1c3",
	  },
	  {
	    c1: "#fcbad3",
	    c2: "#fcbac3",
	  },
	  {
	    c1: "#aa96da",
	    c2: "#aa96ca",
	  },
	  {
	    c1: "#61c0bf",
	    c2: "#61c0cf",
	  },
	  {
	    c1: "#cadefc",
	    c2: "#cadedc",
	  }
	];
	
	function getData() {
	  let data = {
	    name: "民族信仰",
	    value: 0,
	    list: [],
	  };
	  var rootlen = faithrootdata.length;
	  var len = 0;
	  for (let i = 0; i < rootlen; i++) {
	    let obj = {
	      name: faithrootdata[i],
	      value: i,
	      list: [],
	    };
		len = faithdata[i].length;
	    for (let j = 0; j < len; j++) {
		  let name2 =faithdata[i][j];
	      let obj2 = {
	        name: `${i}-${name2}`,
	        value: 1 + "-" + i + "-" + j,
	      };
	      obj.list.push(obj2);
		  
	    }
	
	    data.list.push(obj);
		console.log(obj);
	  }
	  
	  
	  var arr = [];
	  arr.push(data);
	  //   arr=handle(arr,0)
	  console.log(arr);
	  return arr;
	  
	}
		
	var listData = getData();
	var list = [];
	var links = [];
	var legend = [];
	
	var categories = listData[0].list.map((item) => {
	  return {
	    name: item.name,
	  };
	});
	
	var legendColor = colors.map((item) => item.c2);
	
	handle2(JSON.parse(JSON.stringify(listData)), 0);
	handle3(JSON.parse(JSON.stringify(listData)), 0);
	
	//计算list
	function handle2(arr, idx, color, category) {
	  arr.forEach((item, index) => {
	    if (item.name === null) {
	      return false;
	    }
	    // 设置节点大小
	    let symbolSize = 10;
	    switch (idx) {
	      case 0:
	        symbolSize = 70;
	        break;
	      case 1:
	        symbolSize = 50;
	        break;
	      default:
	        symbolSize = 10;
	        break;
	    }
	
	    // 每个节点所对应的文本标签的样式。
	    let label = null;
	    switch (idx) {
	      case 0:
	      case 1:
	        label = {
	          position: "inside",
	          rotate: 0,
	        };
	        break;
	      default:
	        break;
	    }
	
	    //计算出颜色,从第二级开始
	    if (idx === 0) {
	      color = colors[0];
	    }
	    if (idx == 1) {
	      color = colors.find((itemm, eq) => eq == index % 8);
	      legend.push(item.name);
	    }
	    // 设置线条颜色
	    let lineStyle = {
	      color: color.c2,
	    };
	    // 设置节点样式
	    let bgcolor = null;
	    if (idx === 0) {
	      bgcolor = {
	        type: "radial",
	        x: 0.5,
	        y: 0.5,
	        r: 0.5,
	        colorStops: [
	          {
	            offset: 0,
	            color: color.c1, // 0% 处的颜色
	          },
	          {
	            offset: 0.8,
	            color: color.c1, // 80% 处的颜色
	          },
	          {
	            offset: 1,
	            color: "rgba(0, 0, 0, 0.3)", // 100% 处的颜色
	          },
	        ],
	        global: false,
	      };
	    } else {
	      bgcolor = {
	        type: "radial",
	        x: 0.5,
	        y: 0.5,
	        r: 0.5,
	        colorStops: [
	          {
	            offset: 0,
	            color: color.c1, // 0% 处的颜色
	          },
	          {
	            offset: 0.4,
	            color: color.c1, // 0% 处的颜色
	          },
	          {
	            offset: 1,
	            color: color.c2, // 100% 处的颜色
	          },
	        ],
	        global: false,
	      };
	    }
	    let itemStyle = null;
	    if (item.list && item.list.length !== 0) {
	      //非子节点
	      itemStyle = {
	        borderColor: color.c2,
	        color: bgcolor,
	      };
	    } else {
	      //子节点
	      item.isEnd = true;
	      if (item.isdisease == "true") {
	        itemStyle = {
	          color: color.c2,
	          borderColor: color.c2,
	        };
	      } else {
	        itemStyle = {
	          color: "transparent",
	          borderColor: color.c2,
	        };
	      }
	    }
	    //可以改变来实现节点发光效果，但体验不好
	    itemStyle = Object.assign(itemStyle, {
	      shadowColor: "rgba(255, 255, 255, 0.5)",
	      shadowBlur: 10,
	    });
	
	    if (idx == 1) {
	      category = item.name;
	    }
	    let obj = {
	      name: item.name,
	      symbolSize: symbolSize,
	      category: category,
	      label,
	      color: bgcolor,
	      itemStyle,
	      lineStyle,
	    };
	    obj = Object.assign(item, obj);
	    if (idx === 0) {
	      obj = Object.assign(obj, {
	        root: true,
	      });
	    }
	    if (item.list && item.list.length === 0) {
	      obj = Object.assign(obj, {
	        isEnd: true,
	      });
	    }
	    list.push(obj);
	    if (item.list && item.list.length > 0) {
	      handle2(item.list, idx + 1, color, category);
	    }
	  });
	}
	// 计算links
	function handle3(arr, index, color) {
	  arr.forEach((item) => {
	    if (item.list) {
	      item.list.forEach((item2, eq) => {
	        if (index === 0) {
	          color = colors.find((itemm, eq2) => eq2 == eq % 8);
	        }
	        let lineStyle = null;
	        switch (index) {
	          case 0:
	            if (item2.list.length > 0) {
	              lineStyle = {
	                normal: {
	                  color: "target",
	                },
	              };
	            } else {
	              lineStyle = {
	                normal: {
	                  color: color.c2,
	                },
	              };
	            }
	            break;
	          default:
	            lineStyle = {
	              normal: {
	                color: "source",
	              },
	            };
	            break;
	        }
	        let obj = {
	          source: item.name,
	          target: item2.name,
	          lineStyle,
	        };
	        links.push(obj);
	        if (item2.list && item.list.length > 0) {
	          handle3(item.list, index + 1);
	        }
	      });
	    }
	  });
	}

	var option = {
	  toolbox: {
	    show: true,
	    left: "right",
	    right: 20,
	    top: "bottom",
	    bottom: 20,
	  },
	  color: legendColor,
	  legend: {
	    show: true,
	    data: legend,
	    textStyle: {
	      color: "#505050",
	      fontSize: 15,
	    },
	    // inactiveColor: "#fff",
	    icon: "circle",
	    type: "scroll",
	    orient: "vertical",
		x:'left',
		y:'top',
	    padding:[20,0,0,20],
	    // itemWidth: 12,
	    // itemHeight: 12,
	    pageIconColor: "#00f6ff",
	    pageIconInactiveColor: "#fff",
	    pageIconSize: 15,
	    pageTextStyle: {
	      color: "#fff",
	      fontSize: 15,
	    },
	  },
	  selectedMode: "false",
	  bottom: 20,
	  left: 0,
	  right: 0,
	  top: 0,
	  animationDuration: 1500,
	  animationEasingUpdate: "quinticInOut",
	  series: [
	    {
	      name: "知识图谱",
	      type: "graph",
	      hoverAnimation: true,
	      layout: "force",
	      force: {
	        repulsion: 300,
	        edgeLength: 100,
	      },
	      nodeScaleRatio: 0.6,
	      draggable: true,
	      roam: true,
	      symbol: "circle",
	      data: list,
	      links: links,
	      categories: categories,
	      focusNodeAdjacency: true,
	      scaleLimit: {
	        //所属组件的z分层，z值小的图形会被z值大的图形覆盖
	        min: 0.5, //最小的缩放值
	        max: 9, //最大的缩放值
	      },
	      edgeSymbol: ["circle", "arrow"],
	      edgeSymbolSize: [4, 8],
	      label: {
	        normal: {
	          show: true,
	          position: "right",
	          color: "#505050",
	          distance: 5,
	          fontSize: 15
	        },
	      },
	      lineStyle: {
	        normal: {
	          width: 1.5,
	          curveness: 0,
	          type: "solid",
	        },
	      },
	    },
	  ],
	};

	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
		
})();