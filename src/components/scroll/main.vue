<template>
  <!-- <div class="scroll"> -->
  <div class="scroll_wrapper">
    <!-- head部分 -->
    <div class="head">
      <slot name="head"></slot>
      <!-- 左右按钮组 -->
      <div class="arrow_btn_group">
        <div :class="{left:true,disabled:left_disabled}" @click="scroll('left')">
          <i class="fas fa-angle-left icon"></i>
        </div>
        <div :class="{right:true,disabled:right_disabled}" @click="scroll('right')">
          <i class="fas fa-angle-right icon"></i>
        </div>
      </div>
    </div>

    <div class="scroll_list" ref="scroll_list">
      <!-- item部分 -->
      <slot name="item"></slot>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import item from "./item.vue";
export default {
  name: "scroll",
  components: {
    item
  },
  props: {
    // 每一页的item数量
    pageSize: {
      type: Number,
      required: true
    },
    // 为true表示按照网格排列，为false表示一行排列
    grid: {
      type: Boolean,
      default: false
    },
    // 整个scroll组件的高度，由于scroll_list使用绝对定位所以需要手动设置高度
    height: {
      type: Number,
      default: 272
    }
  },
  data: () => ({
    totalPage: 0, // 页面总数
    nowPage: 0,
    scrollWrapperWidth: 0
  }),
  watch: {
    
    nowPage(newVal) {
      console.log(this.scrollWrapperWidth);
      
      let left = -newVal * (this.scrollWrapperWidth + 12);
      console.log(left);
      
      this.scroll_list.style.left = `${left}px`;
    }
  },
  computed: {
    left_disabled: function() {
      return this.nowPage == 0;
    },
    right_disabled: function() {
      return this.nowPage == this.totalPage;
    }
  },
  methods: {
    // 朝左边或者右边滚动
    scroll(direction) {
      if (direction == "left") {
        if (this.left_disabled) {
          return false;
        } else {
          this.nowPage--;
        }
      } else {
        if (this.right_disabled) {
          return false;
        } else {
          this.nowPage++;
        }
      }
    },

    setTotalPage() {
      // 获得item总数
      this.itemNum = this.$children.filter(component =>
        component.$el.className.includes("scroll_item")
      ).length;
      // 初始化totalPage
      this.totalPage = Math.floor(this.itemNum / this.pageSize);
    }
  },
  mounted() {
    this.setTotalPage();

    const oScrollList = this.$refs["scroll_list"];

    this.scroll_list = oScrollList;
    this.scrollWrapperWidth = oScrollList.parentNode.offsetWidth;

    // 设置整个scroll组件高度
    oScrollList.parentNode.style.height = `${this.height}px`;

    // 设置scroll_list的display-direction
    if (this.grid) {
      // oScrollList.style["flex-direction"] = "column";
      // oScrollList.style["flex-wrap"] = "wrap";
      oScrollList.style["flex-flow"] = "column wrap";

      oScrollList.style["height"] = `${this.height -
        oScrollList.previousSibling.offsetHeight}px`;

      // 清除list的margin-top
      oScrollList.style["margin-top"] = "0px";

      oScrollList.style["box-sizing"] = "border-box";
    }
  },

  updated() {
    this.setTotalPage();
  }
};
</script>

<style lang="scss" scoped>
.scroll_wrapper {
  // padding: 0 20px;
  overflow-x: hidden;
  position: relative;
  height: 272px;
  .head {
    display: flex;
    justify-content: space-between;
    // 按钮组部分
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

        &:not(.disabled):hover {
          border-color: #2db969;
          .icon {
            color: #2db969 !important;
          }
        }

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

  // list
  .scroll_list {
    display: flex;
    margin-top: 20px;
    left: 0;
    position: absolute;
    transition: left 1.3s ease;
  }
}
</style>
