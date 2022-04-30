(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/xizang.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('xizang', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '拉萨市',
	  left: "4%",
	  top: "4%",
	  textStyle: {
		  color: "rgba(152, 165, 48, 1.0)",
      fontSize: '40',
		  },
        sublink:
          'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
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
        max: 416,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '拉萨市',
          type: 'map',
          map: 'xizang',
          label: {
            show: true
          },
          data: [
            { name: '拉萨市', value: 188 }
          ],
          // 自定义名称映射
          nameMap: {
            '阿里地区': ' ',
            '日喀则市': ' ',
            '那曲地区': ' ',
            '昌都市': ' ',
            '林芝市': ' '
          }
        }
      ]
    })
  );
});
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();