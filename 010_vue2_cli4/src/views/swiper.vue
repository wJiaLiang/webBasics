
<template>
    <div class="mauto" style="width:600px">
        <div class="thumb-example">
            <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                <template v-for="(i, index) in imgList">
                    <swiper-slide :key="index">
                        <img style="object-fit: cover;" :src="i" alt="" />
                        <!--  <img v-else style="width: 100%; height: 100%"-->
                        <!--     src="@/assets/images/picture_default.png"-->
                        <!--     alt=""/>-->
                    </swiper-slide>
                </template>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <!-- <div style="width:500px;height:80px;overflow:hidden;" class="mauto">
                <ul class="flex_r f_ai_c f_jc_s mt10" style="">
                    <li v-for="(i, index) in imgList" style="margin-right:10px;" :key="index">
                        <img style="width:90px;height:80px" :src="i" alt="" />
                    </li>
                </ul>
                </div> -->
                <swiper-slide v-for="(i, index) in imgList" :key="index">
                    <img style="width:90px;height:80px" :src="i" alt="" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
  
<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

export default {
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
    components: {
        // Swiper,
        // SwiperSlide
    },
    data() {
        return {
            imgList: [
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-2.jpg",
                "https://swiperjs.com/demos/images/nature-3.jpg",
                "https://swiperjs.com/demos/images/nature-4.jpg",
                "https://swiperjs.com/demos/images/nature-5.jpg",
                "https://swiperjs.com/demos/images/nature-6.jpg",
                "https://swiperjs.com/demos/images/nature-7.jpg",
                "https://swiperjs.com/demos/images/nature-8.jpg",
                "https://swiperjs.com/demos/images/nature-9.jpg",
                "https://swiperjs.com/demos/images/nature-10.jpg",
            ],
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                centeredSlides: true, //缩率图居中显示; 如果关闭就会有bug,对不上;
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper
            const swiperThumbs = this.$refs.swiperThumbs.$swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    }
}
</script>
  
<style lang="less" scoped>
.thumb-example {
    height: 480px;
    background-color: pink;
}

.swiper {
    .swiper-slide {
        background-size: cover;
        background-position: center;

        &.slide-1 {
            background-image: url('/images/example/1.jpg');
        }

        &.slide-2 {
            background-image: url('/images/example/2.jpg');
        }

        &.slide-3 {
            background-image: url('/images/example/4.jpg');
        }

        &.slide-4 {
            background-image: url('/images/example/5.jpg');
        }

        &.slide-5 {
            background-image: url('/images/example/6.jpg');
        }
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
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }

    &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
}
</style>