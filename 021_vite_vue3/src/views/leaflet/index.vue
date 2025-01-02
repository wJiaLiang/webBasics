<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <van-nav-bar title="传单" left-text="返回" :fixed="true" :safe-area-inset-top="true" :placeholder="true" left-arrow
    @click-left="onClickLeft" />
  <div>
    <div id="map" style="width: 100%; height: 100vh"></div>
  </div>
</template>
<script setup>
import L from "leaflet";
console.log("lll", L);
import icon from "leaflet/dist/images/marker-icon-2x.png";
// import "leaflet/dist/leaflet.css";

let map = null;
let imageOverLay = null;
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  ref,
  toRefs,
  watchEffect,
  onMounted,
} from "vue";
let data = reactive({
  center: [120, 175],
  zoom: 1,
  markerUrl: L.icon({
    iconUrl: icon,
    iconSize: [34, 45],
    iconAnchor: [12, 25],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  bgImg:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F18%2F2y%2Ftt.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668067345&t=3e4c53d2df490bff214f54e14747b5f0",
  bounds: [
    [0, 0],
    [240, 350],
  ],
});
onMounted(() => {
  init();
});
let onClickLeft = () => {
  history.back();
};
let init = () => {
  map = L.map("map", {
    center: data.center,
    zoom: data.zoom,
    minZoom: 0.1,
    maxZoom: 5,
    crs: L.CRS.Simple,
    bounds: data.bounds,
  });
  //加载单张图
  imageOverLay = L.imageOverlay(data.bgImg, data.bounds, {
    interactive: true, //允许地图触发事件
  }).addTo(map);
  //   画marker
  drawMarker();
};
let drawMarker = () => {
  //模拟数据
  let arr = [{ point: [50, 219] }, { point: [93, 119] }];
  data.gem = [];
  for (let i = 0; i < arr.length; i++) {
    const marker = L.marker(arr[i].point, { icon: data.markerUrl }).addTo(map);
    data.gem.push(marker);
    //监听marker点击事件
    marker.on("click", (e) => {
      console.log("click the markerText", e);
    });
    // marker绑定气泡框
    marker.bindPopup(`<div><a id='aa' style='color:red'>marker${i}</a></div>`);
  }
};
</script>
<style lang="css">
#map {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
