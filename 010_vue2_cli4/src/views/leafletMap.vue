<template>
  <div id="map"></div>
</template>
<script>
import L from 'leaflet'
import icon from "leaflet/dist/images/marker-icon-2x.png"
export default {
  components: {},
  data() {
    return {
      map: null,
      center: [251.65,179],
      zoom: .8,
      markerUrl: L.icon({
        iconUrl: icon,
        iconSize: [34, 45],
        iconAnchor: [12, 25],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
      bgImg:"https://devfile.sou96.com/tour/2023/11/24/2c73e966079a40c08e84f11b1fec75ad.jpg",
    //   bgImg:
    //     "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F18%2F2y%2Ftt.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668067345&t=3e4c53d2df490bff214f54e14747b5f0",
      bounds: [
        [0, 0],
        [503.3,358],
      ],
      imageOverLay: null,
    };
  },
  mounted() {
    this.init();
  },
  methods:{
    init() {
      this.map = L.map("map", {
        center: this.center,
        zoom: this.zoom,
        crs: L.CRS.Simple,
        bounds: this.bounds,
        minZoom: .5,
      });
      //加载单张图
      this.imageOverLay = L.imageOverlay(this.bgImg, this.bounds, {
        interactive: true, //允许地图触发事件
      }).addTo(this.map);
      //   画marker
      this.drawMarker();
    },
    drawMarker() {
      //模拟数据
      let arr = [{ point: [0, 0] }, { point: [55, 119] }];
      this.gem = [];
      for (let i = 0; i < arr.length; i++) {
        const marker = L.marker(arr[i].point, { icon: this.markerUrl }).addTo(
          this.map
        );
        this.gem.push(marker);
        //监听marker点击事件
        marker.on("click", () => {});
        // marker绑定气泡框
        marker.bindPopup(
          `<div><a id='aa' style='color:red'>marker${i}</a></div>`
        );
      }
    },
  }
};
</script> 
<style lang="less" scoped>
#map {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
::v-deep{
    .leaflet-control-attribution.leaflet-control{
        display: none;
    }
} 

</style>