<template>
  <div class="feature">
    <!-- 精选图片轮播 -->
    <div class="carousel">
      <carousel :imgSrcArr="staticData.carouselImgSrcArr" :autoplayinterval="4000"></carousel>
    </div>

    <!-- 为你推荐 -->
    <!-- <div class="recommend">
      <recommend :recommendData="staticData.recommendDataArr"></recommend>
    </div>-->
    <!-- 为你推荐 -->
    <div class="recommend">
      <recommend :scrollData="staticData.recommendDataArr"></recommend>
    </div>

    <!-- 新歌速递 -->
    <div class="newsong">
      <newsong :scrollData="staticData.newsongDataArrPromise"></newsong>
    </div>

    <!-- 专辑首发 -->
    <div class="newalbum">
      <newalbum :scrollData="staticData.newalbumDataArr"></newalbum>
    </div>
  </div>
</template>

<script>
// 图片轮播
import carousel from "@/components/Carousel.vue";
// 为你推荐
import recommend from "@/components/Recommend.vue";
// 新歌速递
import newsong from "@/components/Newsong.vue";
// 专辑首发
import newalbum from "@/components/Newalbum.vue";

// 测试用
// import recommend4 from "@/components/Recommend4.vue";

// 静态数据
import carouselImgSrcArr from "@/static_data/feature/carousel";
import recommendDataArr from "@/static_data/feature/recommend";
import newsongDataArrPromise from "@/static_data/feature/newsong";
import newalbumDataArr from "@/static_data/feature/newalbum";

export default {
  components: { carousel, recommend, newsong, newalbum },
  data: () => ({
    staticData: {
      carouselImgSrcArr,
      recommendDataArr,
      newsongDataArrPromise,
      newalbumDataArr
    }
  })
};
</script>

<style lang="scss" scoped>
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel {
    margin-top: 30px;
    width: 100%;
  }
  .recommend {
    // width: calc(100% - 20px - 18px);
    width: 100%;
    margin-top: 20px;
    background: linear-gradient(#fff, #f9f9f9);
  }

  .newsong {
    width: calc(100% - 20px - 20px);
  }

  .newalbum {
    width: 100%;
    margin-top: 20px;
    background: linear-gradient(#fff, #fdfdfd);
  }
}
</style>

<style lang="scss">
.feature {
  .title {
    letter-spacing: 0.5em;
    font-size: 14px;
  }
}
</style>
