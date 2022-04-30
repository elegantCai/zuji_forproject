(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/jilin.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('jilin', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '延边朝鲜族自治州',
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
          name: '延边朝鲜族自治州',
          type: 'map',
          map: 'jilin',
          label: {
            show: true
          },
          data: [
            { name: '延边朝鲜族自治州', value: 104 }
          ],
          // 自定义名称映射
          nameMap: {
            '吉林市': ' ',
            '长春市': ' ',
            '通化市': ' ',
            '四平市': ' ',
            '辽源市': ' ',
            '松原市': ' ',
            '白城市': ' ',
            '白山市': ' '
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