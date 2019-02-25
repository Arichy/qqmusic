<template>
  <div class="recommend_component">
    <div class="head">
      <div class="title">为你推荐</div>
      <div class="arrow_btn_group">
        <div :class="{left:true,disabled:left_disabled}" @click="scroll('left')">
          <i class="fas fa-angle-left icon"></i>
        </div>
        <div :class="{right:true,disabled:right_disabled}" @click="scroll('right')">
          <i class="fas fa-angle-right icon"></i>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="recommend_wrapper">
        <div class="recommend_list" ref="recommend_list">
          <div class="box" v-for="(recommend,index) of recommendData" :key="index">
            <album_cover
              :width="'141px'"
              :height="'141px'"
              :showplay="recommend.showplay"
              :img-src="recommend.imgSrc"
            ></album_cover>
            <div
              v-if="recommend.comment"
              class="comment"
              @mouseenter="showHoverHandler(index)"
              @mouseleave="hideHoverHandler"
            >
              <span>{{recommend.comment}}</span>
            </div>
            <transition name="fade">
              <div
                v-if="recommend.hover"
                v-show="showHover==index"
                @mouseleave="showHover=-1"
                class="hover"
              >{{recommend.hover}}</div>
            </transition>

            <div class="content">
              <router-link to="./">{{recommend.content}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import album_cover from "./Album_cover.vue";
export default {
  components: { album_cover },
  props: ["recommendData"],
  data: () => ({
    totalPage: 0,
    nowPage: 0,
    recommndList: null,
    recommenWrapperWidth: 0,
    showHover: -1,
    timer: null
  }),
  computed: {
    left_disabled: function() {
      return this.nowPage == 0;
    },
    right_disabled: function() {
      return this.nowPage == this.totalPage;
    }
  },
  methods: {
    scroll(direction) {
      if (
        (direction == "left" && this.left_disabled) ||
        (direction == "right" && this.right_disabled)
      ) {
        return false;
      }
      let left = 0;

      if (direction == "left") {
        this.nowPage--;
      } else {
        this.nowPage++;
      }
      left = -this.nowPage * (this.recommenWrapperWidth + 12);
      this.recommndList.style.left = `${left}px`;
    },
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
  },
  mounted() {
    this.totalPage = this.recommendData.length % 5;
    this.recommndList = this.$refs.recommend_list;
    this.recommenWrapperWidth = this.recommndList.parentNode.offsetWidth;
  }
};
</script>

<style lang="scss" scoped>
.recommend_component {
  padding: 0 20px;
  .head {
    display: flex;
    justify-content: space-between;
    .title {
      letter-spacing: 0.5em;
      font-size: 14px;
      // margin-left: 20px;
    }
    .arrow_btn_group {
      display: flex;

      .left,
      .right {
        width: 15px;
        height: 15px;
        border: 1px solid #b1b2b1;
        text-align: center;
        line-height: 15px;
        border-radius: 15px;

        &.disabled {
          cursor: auto;
          border-color: #ccc;
          .icon {
            color: #ccc;
          }
        }

        &:not(.disabled) {
          cursor: pointer;
          .icon {
            color: #b1b2b1;
            cursor: pointer;
          }
        }
      }

      .left {
        margin-right: 6px;
      }
    }
  }

  .body {
    margin-top: 20px;

    height: 232px;
    // background-color: #f9f9f9;
    // background: linear-gradient(#fff, #f9f9f9);

    .recommend_wrapper {
      overflow-x: hidden;
      position: relative;
      width: 100%;
      height: 226px;
      .recommend_list {
        display: flex;
        left: 0;
        position: absolute;
        .box {
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
            width: $img_width;
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

        transition: left 1.3s ease;
      }
    }
  }
}
</style>
