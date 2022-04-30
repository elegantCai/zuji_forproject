(function(){
	var myChart = echarts.init(document.querySelector('.a .pic'));
myChart.showLoading();
$.get('./data/geo/china.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('China', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '中国十大少数民族风情旅游地区所在省',
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
          name: '中国十大少数民族风情旅游城市',
          type: 'map',
          map: 'China',
          label: {
            show: true
          },
          data: [
            { name: '吉林省', value: 104 },
            { name: '新疆维吾尔自治区', value: 114 },
            { name: '西藏自治区', value: 188 },
            { name: '云南省', value: 416 },
            { name: '湖北省', value: 179 },
            { name: '四川省', value: 124 },
            { name: '云南省', value: 22 },
            { name: '云南省', value: 62 },
            { name: '内蒙古自治区', value: 90 },
            { name: '贵州省', value: 24 }
          ],
          // 自定义名称映射
          nameMap: {
            '重庆市': ' ',
            '青海省': ' ',
            '甘肃省': ' ',
            '河南省': ' ',
            '陕西省': ' ',
            '山西省': ' ',
            '浙江省': ' ',
            '江苏省': ' ',
            '上海市': ' ',
            '北京市': ' ',
            '辽宁省': ' ',
            '黑龙江省': ' ',
            '山东省': ' ',
            '河北省': ' ',
            '安徽省': ' ',
            '江西省': ' ',
            '福建省': ' ',
            '天津市': ' ',
            '台湾省': ' ',
            '海南省': ' ',
            '湖南省': ' ',
            '宁夏回族自治区': ' ',
            '广西壮族自治区': ' ',
            '广东省': ' ',
            '香港特别行政区': ' ',
            '澳门特别行政区': ' ',
          }
        }
      ]
    })
  );
});
	myChart.setOption(option);
})();
