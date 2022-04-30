(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/hubei.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('hubei', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '恩施土家族苗族自治州',
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
        max: 500,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '恩施土家族苗族自治州',
          type: 'map',
          map: 'hubei',
          label: {
            show: true
          },
          data: [
            { name: '恩施土家族苗族自治州', value: 179 }
          ],
          // 自定义名称映射
          nameMap: {
            '襄阳市': ' ',
            '武汉市': ' ',
            '十堰市': ' ',
            '荆州市': ' ',
            '荆门市': ' ',
            '神农架林区': ' ',
            '孝感市': ' ',
            '咸宁市': ' ',
            '仙桃市': ' ',
            '天门市': ' ',
            '黄冈市': ' ',
            '鄂州市': ' ',
            '黄石市': ' ',
            '宜昌市': ' ',
            '随州市': ' ',
            '潜江市': ' '
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