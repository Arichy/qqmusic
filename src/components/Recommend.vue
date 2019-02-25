<template>
  <div class="recommend_component">
    <scroll :pageSize="5">
      <scroll-head slot="head">
        <div class="title">为你推荐</div>
      </scroll-head>
      <scroll-item class="box" slot="item" v-for="(item,index) of scrollData" :key="index">
        <album-cover :width="'141px'" :height="'141px'" :showplay="true" :img-src="item.imgSrc"></album-cover>
        <div
          v-if="item.comment"
          class="comment"
          @mouseenter="showHoverHandler(index)"
          @mouseleave="hideHoverHandler"
        >
          <span>{{item.comment}}</span>
        </div>
        <transition name="fade">
          <div
            v-if="item.hover"
            v-show="showHover==index"
            @mouseleave="showHover=-1"
            class="hover"
          >{{item.hover}}</div>
        </transition>

        <div class="content">
          <router-link to="./">{{item.content}}</router-link>
        </div>
      </scroll-item>
    </scroll>
  </div>
</template>

<script>
// import album_cover from "./Album_cover.vue";

export default {
  components: {
    // album_cover
  },
  props: ["scrollData"],
  data: () => ({
    showHover: -1
  }),
  methods: {
    showHoverHandler(index) {
      this.timer = setTimeout(() => {
        this.showHover = index;
      }, 1000);
    },
    hideHoverHandler() {
      if (this.timer != null) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recommend_component{
    padding: 0 20px;
}

// .title {
//   letter-spacing: 0.5em;
//   font-size: 14px;
// }

.box {
  position: relative;
  $img_width: 141px;
  .comment {
    box-sizing: border-box;
    width: $img_width;
    height: 25px;
    background-color: #ededed;
    color: #565656;
    font-size: 6px;
    line-height: 25px;
    padding: 0 7px;
    span {
      cursor: text;
    }
  }
  .hover {
    font-size: 10px;
    width: $img_width;
    height: $img_width + 25px;
    position: absolute;
    top: 0;
    text-align: center;
    line-height: $img_width + 25px;
    background-color: rgba(250, 250, 250, 0.95);
  }
  .content {
    width: 135px;
    font-size: 13px;
    margin-top: 10px;
    a:hover {
      color: #2db969;
    }
  }
  // 16px
  &:not(:first-child) {
    margin-left: 16px;
  }
}
</style>
