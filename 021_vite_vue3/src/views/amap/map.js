export let pointFn = (AMap, index) => {
  let mark1 = `
  <div class="amap-marker-content" style= "opacity:1;">
     <div class="poi-content-icon" style="text-align:center;">
         <div class="poi-marker"> 15 </div>
         <div class="poi-marker-triangle"></div>
         <span class="content"> 沙湾古镇等 </span>
     </div>
   </div>`;
  // 缩小后显示的级别;
  var marker1 = new AMap.Marker({
    content: mark1, // 自定义点标记覆盖物内容
    position: [113.338339, 22.899479], // 基点位置
    offset: new AMap.Pixel(0, 0),
  });

  let icons = []; //1:讲解,2:美食,3:住宿，4：商店，5：卫生间，6：停车场，7:游客服务
  for (let i = 1; i <= 7; i++) {
    icons.push(
      new AMap.Icon({
        size: new AMap.Size(28, 36), // 图标尺寸
        image: `../../icons/${i}.png`, // Icon的图像
        imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(28, 36), // 根据所设置的大小拉伸或压缩图片
      })
    );
  }
  // 1.讲解地址
  let arrPoint = [
    { name: "番禺区区政府", longitude: 113.384171, latitude: 22.936205 },
    { name: "番禺区节能科技园", longitude: 113.364365, latitude: 22.976973 },
    { name: "长隆欢乐世界", longitude: 113.328587, latitude: 22.994457 },
    { name: "番禺儿童公园", longitude: 113.365419, latitude: 22.963803 },
    { name: "余荫山房", longitude: 113.395615, latitude: 23.011411 },
  ];
  let arr1 = [
    { name: "大学城", longitude: 113.398774, latitude: 23.045407 },
    { name: "番禺儿童公园", longitude: 113.365419, latitude: 22.963803 },
  ];
  let arr2 = [
    { name: "海鸥岛", longitude: 113.522371, latitude: 22.946329 },
    { name: "余荫山房", longitude: 113.395615, latitude: 23.011411 },
  ];
  let arr3 = [
    { name: "停车场", longitude: 113.308544, latitude: 23.079066 },
    { name: "长隆欢乐世界", longitude: 113.328587, latitude: 22.994457 },
  ];
  let arr4 = [
    { name: "游客中心", longitude: 113.309059, latitude: 23.110015 },
    { name: "番禺区节能科技园", longitude: 113.364365, latitude: 22.976973 },
  ];
  let arr5 = [
    { name: "番禺区区政府", longitude: 113.384171, latitude: 22.936205 },
    { name: "番禺区节能科技园", longitude: 113.364365, latitude: 22.976973 },
  ];
  let arr6 = [
    { name: "美林海岸", longitude: 113.373294, latitude: 23.11281 },
    { name: "番禺区节能科技园", longitude: 113.364365, latitude: 22.976973 },
  ];
  switch (index) {
    case 1:
      arrPoint = arr1;
      break;
    case 2:
      arrPoint = arr2;
      break;
    case 3:
      arrPoint = arr3;
      break;
    case 4:
      arrPoint = arr4;
      break;
    case 5:
      arrPoint = arr5;
      break;
    case 6:
      arrPoint = arr6;
      break;
  }

  let markers = [];
  for (let i = 0; i < arrPoint.length; i++) {
    let item = arrPoint[i];
    markers.push(
      new AMap.Marker({
        position: new AMap.LngLat(item.longitude, item.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        offset: new AMap.Pixel(0, 0),
        icon: icons[index], //图标类型
        // icon: // 添加 Icon 图标 URL
        // icon:"https://images.vjingkeji.com/maps/icons/714e2c46ae504c22ab907382ff5d06de.png", // 添加 Icon 图标 URL
        title: item.name,
      })
    );
  }
  return [marker1, ...markers];
};
export let getLoaclfn = (AMap) => {
  var local = {};
  var result = {};
  return new Promise((resolve, reject) => {
    AMap.plugin("AMap.Geolocation", async function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量
        offset: [10, 20],
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        position: "RB",
      });
      geolocation.getCurrentPosition(
        await function (status, result) {
          if (status == "complete") {
            console.log("获取定位", result);
            local = result;
            resolve(local);
          } else {
            console.log("定位错误", result);
            local = result;
            reject({});
          }
        }
      );
    });
    //  AMap.plugin('AMap.CitySearch', function () {
    //   var citySearch = new AMap.CitySearch();
    //   citySearch.getLocalCity(function (status, result) {
    //     if (status === 'complete' && result.info === 'OK') {
    //       // 查询成功，result即为当前所在城市信息
    //       console.log("当前城市",result);
    //     }else{
    //       console.log("获取城市",status,result);
    //     }
    //   })
    // })
  });
};
