(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/yunnan.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('yunnan', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '德宏傣族景颇族自治州',
	  left: "4%",
	  top: "3%",
	  textStyle: {
		  color: "rgba(136, 161, 96, 1.0)",
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
          name: '德宏傣族景颇族自治州',
          type: 'map',
          map: 'yunnan',
          label: {
            show: true
          },
          data: [
            { name: '西双版纳傣族自治州', value: 416 },
            { name: '临沧市', value: 22 },
            { name: '德宏傣族景颇族自治州', value: 62 },
          ],
          // 自定义名称映射
          nameMap: {
            '大理白族自治州': ' ',
            '怒江傈僳族自治州': ' ',
            '迪庆藏族自治州': ' ',
            '楚雄彝族自治州': ' ',
            '红河哈尼族彝族自治州': ' ',
            '文山壮族苗族自治州': ' ',
            '普洱市': ' ',
            '丽江市': ' ',
            '昆明市': ' ',
            '大理市': ' ',
            '玉溪市': ' ',
            '保山市': ' ',
            '昭通市': ' ',
            '曲靖市': ' '
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