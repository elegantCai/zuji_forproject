(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/guizhou.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('guizhou', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '凯里',
	  left: "4%",
	  top: "3%",
	  textStyle: {
		  color: "rgba(129, 183, 194, 1.0)",
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
          name: '凯里',
          type: 'map',
          map: 'guizhou',
          label: {
            show: true
          },
          data: [
            { name: '黔东南苗族侗族自治州', value: 24 }
          ],
          // 自定义名称映射
          nameMap: {
            '遵义市': ' ',
            '铜仁市': ' ',
            '六盘水市': ' ',
            '毕节市': ' ',
            '贵阳市': ' ',
            '安顺市': ' ',
            '黔西南布依族苗族自治州': ' ',
            '黔南布依族苗族自治州': ' '
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