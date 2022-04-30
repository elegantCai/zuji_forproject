(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/neimenggu.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('neimenggu', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '呼伦贝尔',
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
          name: '呼伦贝尔',
          type: 'map',
          map: 'neimenggu',
          label: {
            show: true
          },
          data: [
            { name: '呼伦贝尔市', value: 90 }
          ],
          // 自定义名称映射
          nameMap: {
            '呼和浩特市': ' ',
            '包头市': ' ',
            '乌海市': ' ',
            '赤峰市': ' ',
            '通辽市': ' ',
            '巴彦淖尔市': ' ',
            '鄂尔多斯市': ' ',
            '锡林郭勒盟': ' ',
            '呼和浩特市': ' ',
            '兴安盟': ' ',
            '乌兰察布市': ' ',
            '阿拉善盟': ' '
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