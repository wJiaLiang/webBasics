<template>
    <div style="font-size:18px;">
        <section>
            <p> vue-cli4.xxx 的一些配置 测试项目 </p>
            <p> 主要测试 vue-cli 的 多环境配置,多页面配置,proxy 代理跨域设置</p>
            <br>
            <a href="https://zhuanlan.zhihu.com/p/109952157"> 参考资料 </a>
            <br>
            <a href="https://github.com/staven630/vue-cli4-config"> github 地址 </a>
            <br>
            <router-link to="/list"> list 页面 </router-link>
        </section>
        <div>
        </div>
        <!-- ********************************************************************************************* -->

        <div v-if="false" style="width:600px;border:1px solid pink;" class="mauto">
            <section>
                <div style="width: 600px; height: 500px" class="over_h">
                    <swiper @slideChange="slideChange" class="swiper gallery-top" :options="swiperOptionTop" ref="mySwiper">
                        <swiper-slide v-for="(i,index) in imgList" :key="index">
                            <img style="object-fit: cover;" :src="i" alt="" />
                            <!--  <img v-else style="width: 100%; height: 100%"-->
                            <!--     src="@/assets/images/picture_default.png"-->
                            <!--     alt=""/>-->
                        </swiper-slide>
                    </swiper>
                    <div class="posr swiper-pagination-custom">
                        <div style="width:500px;height:80px;overflow:hidden;" class="mauto">
                            <ul class="flex_r f_ai_c f_jc_s mt10" style="">
                                <li  v-for="(i, index) in imgList" @click="clickItem(index)" style="margin-right:10px;"
                                    :key="index">
                                    <img style="width:90px;height:80px" :src="i" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div class="swiper-button-next swiper-button-white bgbtn" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white bgbtn" slot="button-prev"></div>
                    </div>
                </div>
            </section>
        </div>


    </div>
</template>
<script>

import axios from 'axios'
export default {
    name: "Index",
    data() {
        return {
            activeIndex:0,
            imgList: [
                "https://swiperjs.com/demos/images/nature-5.jpg",
                "https://swiperjs.com/demos/images/nature-6.jpg",
                "https://swiperjs.com/demos/images/nature-7.jpg",
                "https://swiperjs.com/demos/images/nature-8.jpg",
                "https://swiperjs.com/demos/images/nature-9.jpg",
                "https://swiperjs.com/demos/images/nature-10.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-2.jpg",
            ],
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5,
                // spaceBetween: 10,
                // 分页器
                // pagination: {
                //     el: ".swiper-pagination-custom",
                //     clickable: true
                // },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },

            // swiperOptionThumbs: {
            //     loop: true,
            //     // slidesPerView: "auto",
            //     slidesPerView: 3,
            //     loopedSlides: 5,
            //     spaceBetween: 10,
            //     // centeredSlides:true,
            //     touchRatio: 0.2,
            //     slideToClickedSlide: true,
            //     watchSlidesVisibility: true,
            //     on: {
            //         click: function () {
            //             _this.swiper1.slideTo(this.clickedIndex);
            //             this.slideTo(
            //                 this.clickedIndex >= 1 ? this.clickedIndex - 1 : this.clickedIndex
            //             );
            //         }
            //     }
            // },
        }
    },
    // 计算属性
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        }
    },
    mounted() {

    },
    // 方法;
    methods: {
        slideChange() {
            // realIndex
            console.log(this.swiper.realIndex);
            this.activeIndex = this.swiper.realIndex;
        },
        clickItem(index) {
            this.swiper.slideTo(index);
        },
    },
    // 在实例创建完成后被立即调用。
    created() {
        console.log('.envAll', process.env);
        console.log('process', process.env.abc);
        console.log('baseUrl', process.env.BASE_URL);
        console.log('vue_app_api', process.env.VUE_APP_API);

        // 根据时间戳返回该时间点前或后的笑话列表
        // this.appfunc.ajax('/api/content/list.php','get')
        // .then(res=>{
        //     console.log('list result',res);
        // })

        // 随机获取笑话
        this.appfunc.ajax('/api/randJoke.php', 'post')
            .then(res => {
                console.log('rand result', res)
            })

        // 获取最新的笑话
        axios.get("/api/content/text.php",
            {
                baseURL: process.env.NODE_ENV == "development" ? '/' : process.env.VUE_APP_API,
                params: { key: '19a578542216aeb8a23ccf5b05a61449' },
                headers: { 'Content-Type': 'application/json;charset=UTF-8' }
            })
            .then(res => {
                console.log('text result', res);
            })

    },
}
</script>
<style lang="less" scoped>
.my_swiper_pagination {
    & ul>li {
        height: 60px;
        ;

        & img {
            width: 90px;
            height: 60px;
        }
    }
}

.bgbtn {
    background-color: #e63a3a;
    font-size: 12px;
    z-index: 6000;

    &:after {
        font-size: 12px;
    }
}

.swiper {
    .swiper-slide {
        background-size: cover;
        background-position: center;
    }

    &.gallery-top {
        height: 80%;
        width: 100%;
    }

    &.gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
    }

    &.gallery-thumbs .swiper-slide {
        width: 150px;
        height: 100%;
        opacity: 0.4;
    }

    &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
        //border: 1px solid red;
    }
}
</style>