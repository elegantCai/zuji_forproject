(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/xinjiang.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('xinjiang', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '喀什',
	  left: "4%",
	  top: "4%",
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
          name: '喀什',
          type: 'map',
          map: 'xinjiang',
          label: {
            show: true
          },
          data: [
            { name: '喀什地区', value: 114 }
          ],
          // 自定义名称映射
          nameMap: {
            '克拉玛依市': ' ',
            '北屯市': ' ',
            '石河子市': ' ',
            '阿勒泰地区': ' ',
            '塔城地区': ' ',
            '吐鲁番市': ' ',
            '乌鲁木齐市': ' ',
            '五家渠市': ' ',
            '昌吉回族自治州': ' ',
            '阿拉尔市': ' ',
            '阿克苏地区': ' ',
            '可克达拉市': ' ',
            '伊犁哈萨克自治州': ' ',
            '克孜勒苏柯尔克孜自治州': ' ',
            '和田地区': ' ',
            '巴音郭楞蒙古自治州': ' ',
            '博尔塔拉蒙古自治州': ' ',
            '双河市': ' ',
            '铁门关市': ' ',
            '图木舒克市': ' '
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