<template>
  <div>
    <div class="w100 posf bg_fff" style="left: 0px; top: 0px; z-index: 100">
      <div v-if="false" class="pt13 pb13 pl20 pr20 flex_r f_ai_c f_jc_b" style="border-bottom: 1px solid #f0f0f0">
        <left-outlined @click="$router.go(-1)" />
        <setting-outlined @click="openMenu" style="font-size: 16px" />
      </div>

      <van-nav-bar title="高德" left-text="返回" :fixed="true" :safe-area-inset-top="true" :placeholder="true" left-arrow
        @click-left="onClickLeft" />

      <!-- 顶部筛选分栏 -->
      <header class="fs12 flex_r f_jc_b f_ai_c p110 pr10 header">
        <div style="height: 60px" class="flex_c f_ai_c f_jc_c" :class="{ tc: true, active: item.isactive }"
          @click="changeTitile(index)" v-for="(item, index) in titleList" :key="index">
          <div style="margin-bottom: 5px">
            <!--  <star-outlined style="fontSize:18px" />  -->
            <a-image v-if="item.isactive" width="24px" height="20px" :src="item.imgPathHot"></a-image>
            <a-image v-else width="24px" height="20px" :src="item.imgPath"></a-image>
          </div>
          <span> {{ item.name }}</span>
        </div>
      </header>
    </div>
    <!--    地图容器 start -->
    <div id="container"></div>
    <!--    地图容器 end -->

    <!--    侧边栏start -->
    <ul class="side">
      <li class="side-btn" @click="infoHand(1)" :style="'background:url(' +
        getImg('silde1') +
        ') 50% 7px / 18px 18px no-repeat rgb(255, 255, 255)'
        ">
        活动
      </li>
      <li class="side-btn" @click="infoHand(2)" :style="'background:url(' +
        getImg('silde2') +
        ') 50% 7px / 18px 18px no-repeat rgb(255, 255, 255)'
        ">
        路线
      </li>
    </ul>
    <!--    侧边栏end -->

    <!--   弹出窗 start -->
    <div @click.self="openMenu" class="posf maskBox flex_r f_jc_e" :style="{
      width: '100%',
      height: '100%',
      top: '0px',
      left: isOpen ? '0px' : '100%',
      zIndex: 500,
    }">
      <div class="bg_fff pl15 pr15" style="width: 50%; height: 100%">
        <div style="border-bottom: 1px solid #f0f0f0">
          <span class="pt10 pb10 dis_i" @click="openMenu">
            <arrow-right-outlined style="font-size: 16px; color: rgba(0, 0, 0, 0.45)" />
          </span>
        </div>
        <ul>
          <li class="flex_r pt10 pb10">
            <div style="color: #6a5848">语言</div>
            <div class="flex_r f_jc_c flex1">
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link flex_r f_ai_c f_jc_c" style="color: rgba(0, 0, 0, 0.85)" @click.prevent>
                  <span class="pr50"> 中文 </span>
                  <DownOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a href="javascript:;">中文</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;"> 英文 </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;"> 中文繁体 </a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </li>
          <li class="flex_r pt10 pb10">
            <div style="color: #6a5848">手绘</div>
            <div class="flex_r f_jc_c flex1">
              <a-switch v-model:checked="checked" style="background-color: #ff6138" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--   弹出窗 end -->
    <a-drawer :height="heigth" placement="top" :visible="visible1" :closable="false" :title="'活动'">
      <template #extra>
        <div class="flex_r f_ai_c f_jc_b fs16">
          <span @click="visible1 = false"> <close-outlined /> </span>
        </div>
      </template>
      <p class="tc fs16">活动正在开发中，敬请期待哦 ...</p>
    </a-drawer>
    <a-drawer :height="heigth" placement="top" :visible="visible2" :closable="false" :title="'线路'">
      <template #extra>
        <div class="flex_r f_ai_c f_jc_b fs16">
          <span @click="visible2 = false"> <close-outlined /> </span>
        </div>
      </template>
      <p class="tc fs16">线路正在开发中，敬请期待哦 ...</p>
    </a-drawer>
    <!--  loading 状态 start-->
    <div v-if="isLoading" class="posf bg_fff" style="width: 100%; height: 100%; top: 0; left: 0; z-index: 200">
      <div class="tc all_center">
        <img style="width: 60px" src="@/assets/images/loading.gif" alt="" />
        <p class="fs14 mt20">地图绘制中请稍等...</p>
      </div>
    </div>
    <!--  loading 状态 end-->
    <!-- 点击标注点 start -->
    <a-modal v-model:visible="fvisible" title="提示" :footer="null">
      <p>名称:{{ currentPointInfo.name }}</p>
      <p>
        坐标:{{
          "经度:" + currentPointInfo.lng + "," + "纬度:" + currentPointInfo.lat
        }}
      </p>
      <p>
        距离您:{{ currentPointInfo.distance }} 公里
        <a-button class="pl30" size="small" @click="visible3 = true">到这里去</a-button>
      </p>
    </a-modal>
    <!-- 点击标注点 end -->
    <a-drawer :height="220" placement="bottom" :visible="visible3" :closable="false" title="请选择">
      <template #extra>
        <div class="flex_r f_ai_c f_jc_b fs16">
          <span @click="visible3 = false"> <close-outlined /> </span>
        </div>
      </template>
      <p @click="goNav(1)" class="tc fs16 pt10 pb10" style="border-bottom: 1px solid #eee">
        高度导航
      </p>
      <p @click="goNav(2)" class="tc fs16 pt10 pb10" style="border-bottom: 1px solid #eee">
        百度导航
      </p>
      <p @click="goNav(3)" class="tc fs16 pt10 pb10">腾讯导航</p>
    </a-drawer>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  watchEffect,
  onMounted,
  getCurrentInstance,
} from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "vue";
import { pointFn, getLoaclfn } from "../map";

export default defineComponent({
  name: "mapsBox",
  props: {},
  components: {},
  data() {
    return {
      currentActive: 0,
      markList: [],
      AMap: null,
      visible1: false,
      visible2: false,
      visible3: false,
      fvisible: false,
      currentPointInfo: {}, // 目标位置
      getLoaction: null, // 定位位置
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    goNav(type) {
      let lng = this.currentPointInfo.lng;
      let lat = this.currentPointInfo.lat;
      let name = this.currentPointInfo.name;
      console.log(lng, lat);
      let url = "";
      if (type === 1) {
        url = `https://uri.amap.com/marker?position=${lng},${lat}&name=${name}&src=mypage&coordinate=gaode&callnative=0`;
      }
      if (type === 2) {
        url = `http://api.map.baidu.com/marker?location=${lng},${lat}&title=${name}&content=${name}&output=html&src=webapp.baidu.openAPIdemo`;
      }
      if (type === 3) {
        url = `https://apis.map.qq.com/uri/v1/search?keyword=${name}&center=${(lng, lat)
          }&radius=9000&referer=XP2BZ-TQHEX-ZPX4Q-TIQKM-4U2X2-V5F7E
`;
      }
      window.open(url);
    },
    infoHand(type) {
      if (type == 1) {
        this.visible1 = true;
      }
      if (type == 2) {
        this.visible2 = true;
      }
    },
    getImg(name) {
      return new URL(`../../../assets/icons/${name}.png`, import.meta.url).href;
    },
    // 标记点 点击后触发此函数
    clickHandler(e) {
      // 标注的位置和名称;
      console.log(e.target._originOpts.title);
      console.log(e.target._position.lng, e.target._position.lat);
      // 点击的实际位置
      console.log(e.lnglat.lng, e.lnglat.lat);
      this.currentPointInfo = {
        name: e.target._originOpts.title,
        lng: e.target._position.lng,
        lat: e.target._position.lat,
        distance: 0,
      };
      this.fvisible = true;
      if (this.getLoaction.position.lng) {
        let p0 = [this.currentPointInfo.lng, this.currentPointInfo.lat];
        let p1 = [this.getLoaction.position.lng, this.getLoaction.position.lat];
        let result = this.AMap.GeometryUtil.distanceOfLine([p0, p1]);
        console.log("距离", result / 1000);
        this.currentPointInfo.distance = result / 1000;
      }
    },
    //初始化地图
    initMap() {
      console.log("==>this", this);
      AMapLoader.load({
        key: "0c7af8c2387cb70ee8adc2d9650b15d7", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.isLoading = false;
          this.AMap = AMap;
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 10, //初始化地图级别
            center: [113.280637, 23.125178], //初始化地图中心点位置
          });
          // 活动定位信息
          getLoaclfn(AMap).then((res) => {
            this.getLoaction = res;
            console.log("ddd", this.getLoaction);
          });
          // 获取标记点
          this.markList = pointFn(AMap, this.currentActive);
          // 给标记物绑定touch事件;
          this.markList.forEach((item) => {
            item.on("touchstart", this.clickHandler);
          });
          var googleLayer = new AMap.TileLayer({
            zIndex: 2,
            getTileUrl: function (x, y, z) {
              return (
                "http://localhost:3005/tiles/lyrs=m@142&hl=zh-CN&gl=cn&x=" +
                x +
                "&y=" +
                y +
                "&z=" +
                z +
                "&s=Galil"
              );
            },
          });
          googleLayer.setMap(this.map);

          this.map.add(this.markList);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    clearMarkHand() {
      this.map.remove(this.markList);
      this.markList = pointFn(this.AMap, this.currentActive);
      // 给标记物绑定touch事件;
      this.markList.forEach((item) => {
        item.on("touchstart", this.clickHandler);
      });
      this.map.add(this.markList);
    },
  },
  watch: {
    currentActive: function (n, o) {
      console.log("aaa", n, o, this);
      this.clearMarkHand();
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  setup(props) {
    const map = shallowRef(null);
    let that = getCurrentInstance(); //实例
    let checked = ref(true);
    let isOpen = ref(false);
    let isLoading = ref(true);
    let currentActive = ref(0);
    let titleList = reactive([
      {
        name: "讲解",
        imgPath: "/images/1.png",
        imgPathHot: "/images/1hot.png",
        isactive: true,
      },
      {
        name: "美食",
        imgPath: "/images/2.png",
        imgPathHot: "/images/2hot.png",
        isactive: false,
      },
      {
        name: "住宿",
        imgPath: "/images/3.png",
        imgPathHot: "/images/3hot.png",
        isactive: false,
      },
      {
        name: "商店",
        imgPath: "/images/4.png",
        imgPathHot: "/images/4hot.png",
        isactive: false,
      },
      {
        name: "卫生间",
        imgPath: "/images/5.png",
        imgPathHot: "/images/5hot.png",
        isactive: false,
      },
      {
        name: "停车场",
        imgPath: "/images/6.png",
        imgPathHot: "/images/6hot.png",
        isactive: false,
      },
      {
        name: "游客客服",
        imgPath: "/images/7.png",
        imgPathHot: "/images/7hot.png",
        isactive: false,
      },
    ]);
    let changeTitile = (index) => {
      let list = titleList;
      list.forEach((opt, i) => {
        if (i === index) {
          opt.isactive = true;
          that.proxy.currentActive = index;
        } else {
          opt.isactive = false;
        }
      });
      titleList = list;
    };
    let heigth = window.document.body.clientHeight;
    let openMenu = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      checked,
      isLoading,
      titleList,
      openMenu,
      changeTitile,
      map,
      heigth,
    };
  },
});
</script>
<style lang="scss" scoped>
:global(.ant-drawer-body) {
  padding: 10px;
}

:global(.ant-drawer-body p) {
  margin-bottom: 0px;
}

:global(.ant-modal-header, .ant-drawer-header) {
  padding: 10px 10px;
}

:global(.ant-drawer-header) {
  padding: 10px 10px;
}

:global(.ant-modal-body) {
  padding: 10px 10px;
}

:deep(.ant-switch-handle::before) {
  background-color: white;
}

:global(.ant-modal-close-x) {
  height: 43px;
  line-height: 43px;
}

.header {
  &>div {
    color: #c6c6c6;
    padding: 0 12px;
    margin-top: 5px;

    &.active {
      color: #ff6138;
      border-bottom: 3px solid #ff6138;
      color: #ff6138 !important;
    }
  }

  border-bottom: 1px solid #f0f0f0;
  //box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px 0px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 20%);
}

.side {
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 180px;

  .side-btn {
    border: 1px solid #353535;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: #888;
    cursor: pointer;
    display: block;
    font-size: 12px;
    height: 48px;
    line-height: 20px;
    margin-bottom: 10px;
    min-width: 36px;
    padding: 27px 5px 3px;
    text-align: center;
    // css lim 使用相当路径
    background: url("../../../assets/icons/silde1.png") 50% 7px / 18px 18px no-repeat rgb(255, 255, 255);
  }
}

.maskBox {
  /*box-shadow: 0px 0px 5px #999999;*/
  background: rgba(0, 0, 0, 0.5);
  transition: left 300ms;
}

#container {
  position: fixed;
  padding: 0px;
  margin: 0px;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

:deep(.amap-marker-content) {
  position: relative;

  & .poi-content-icon {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    & .poi-marker {
      background-color: #ff8160;
      border: 2px solid #fff;
      border-radius: 15px;
      box-shadow: 0 0 5px #ff7000;
      color: #fff;
      font-size: 14px;
      height: 30px;
      line-height: 27px;
      text-align: center;
      width: 30px;
    }

    & .poi-marker-triangle {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid #fff;
      height: 0;
      margin-top: -2px;
      width: 0;
    }

    & .content {
      background: #fff;
      border-radius: 10px;
      bottom: -22px;
      box-shadow: 0 0 5px #bebebe;
      color: #2e425d;
      display: inline-block;
      font-size: 12px;
      font-weight: 400;
      padding: 0 5px;
      position: absolute;
      white-space: nowrap;
    }
  }
}
</style>
