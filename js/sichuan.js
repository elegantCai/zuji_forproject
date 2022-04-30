(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/sichuan.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('sichuan', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '西昌',
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
          name: '西昌',
          type: 'map',
          map: 'sichuan',
          label: {
            show: true
          },
          data: [
            { name: '凉山彝族自治州', value: 124 }
          ],
          // 自定义名称映射
          nameMap: {
            '自贡市': ' ',
            '攀枝花市': ' ',
            '成都市': ' ',
            '绵阳市': ' ',
            '广元市': ' ',
            '巴中市': ' ',
            '达州市': ' ',
            '广安市': ' ',
            '南充市': ' ',
            '内江市': ' ',
            '泸州市': ' ',
            '宜宾市': ' ',
            '遂宁市': ' ',
            '资阳市': ' ',
            '眉山市': ' ',
            '乐山市': ' ',
            '德阳市': ' ',
            '雅安市': ' ',
            '甘孜藏族自治州': ' ',
            '阿坝藏族羌族自治州': ' '
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