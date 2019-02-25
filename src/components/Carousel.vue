<template>
  <div class="carousel_component" @mouseenter="enter" @mouseleave="leave">
    <ul class="img_list" ref="img_list">
      <li
        v-for="(imgSrc,index) of imgSrcArr"
        :class="{active:index==activeIndex,img_item:true}"
        :key="index"
      >
        <img :src="imgSrc" width="525" height="210">
      </li>
    </ul>

    <div class="mask">
      <transition name="fade">
        <div
          class="left_wrapper"
          v-show="showArrow"
          ref="left"
          @click="jump((activeIndex-1+length)%length)"
        >
          <div class="left_part">
            <i class="fas fa-angle-left icon"></i>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div
          class="right_wrapper"
          v-show="showArrow"
          ref="right"
          @click="jump((activeIndex+1+length)%length)"
        >
          <div class="right_part">
            <i class="fas fa-angle-right icon"></i>
          </div>
        </div>
      </transition>

      <ul class="dot_list">
        <li
          v-for="(item,index) of imgSrcArr"
          :key="index"
          :class="{dot:true,active:index==activeIndex}"
          @click="jump(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
const classNameArr = ["prev", "next", "active", "remain"];
function changeClassName(dom, className) {
  dom.classList.add(className);

  classNameArr
    .filter(name => name != className)
    .forEach(name => {
      dom.classList.remove(name);
    });
}
export default {
  props: ["imgSrcArr", "autoplayinterval"],
  data: () => ({
    activeIndex: 0,
    length: 0,
    showArrow: false, // 鼠标移入carousel才显示向左向右移动图片的箭头
    timer: null // 自动播放定时器
  }),
  methods: {
    // 初始化carousel
    initCarousel() {
      const length = this.imgSrcArr.length;
      this.length = length;

      const oUl = this.$refs["img_list"];
      // 当前active图片
      const activeLi = oUl.children[this.activeIndex];
      // 前一个图片
      const prevLi = oUl.children[(this.activeIndex - 1 + length) % length];
      // 后一个图片
      const nextLi = oUl.children[(this.activeIndex + 1 + length) % length];

      const remain = Array.from(oUl.children).filter(
        node => ![activeLi, prevLi, nextLi].includes(node)
      );

      changeClassName(prevLi, "prev");
      changeClassName(nextLi, "next");
      remain.forEach(node => changeClassName(node, "remain"));
    },

    // 改变activeIndex
    jump(target) {
      this.activeIndex = target;
      this.$nextTick(() => this.initCarousel());
    },
    // 自动播放
    autoplay() {
      let interval = this.autoplayinterval;
      if (interval != null && interval > 100) {
        this.timer = setInterval(() => {
          this.$refs.right.click();
        }, interval);
      }
    },

    // 鼠标移入carousel
    enter() {
      // 显示左右箭头
      this.showArrow = true;
      // 关闭定时器
      clearInterval(this.timer);
    },
    leave(){
      // 隐藏左右箭头
      this.showArrow = false;
      // 打开定时器
      this.autoplay();
    }
  },
  mounted() {
    // 初始化carousel
    this.initCarousel();
    this.autoplay();
  }
};
</script>

<style lang="scss" scoped>
.carousel_component {
  height: 210px;
  // width: 770px;
  // width:100%;
  margin: 0 20px;

  position: relative;

  .img_list {
    transform-style: preserve-3d;

    perspective: 150;

    .img_item {
      transition: {
        property:transform,opacity;
        duration: 300ms,150ms;
        timing-function: linear;
      }
      position: absolute;
      left: 0;
      right: 0;
      width: 525px;
      margin: auto;
    }

    .img_item.prev {
      transform: translate3d(-230px, 29px, -42px);
      opacity: 1;
    }
    .img_item.next {
      transform: translate3d(230px, 29px, -42px);
      opacity: 1;
    }
    .img_item.remain {
      transform: translate3d(0, 29px, -50px);
      opacity: 0;
    }
  }

  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;

    .left_wrapper,
    .right_wrapper {
      width: 107px;
      height: 164px;
      align-self: center;

      position: absolute;
      display: flex;
      cursor: pointer;
    }

    .left_part,
    .right_part {
      width: 40px;
      height: 75px;
      cursor: pointer;

      align-self: center;
      position: absolute;
      font-size: 50px;
      line-height: 75px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);

      .icon {
        color: #fff;
      }
    }

    .right_wrapper,
    .right_part {
      right: 0;
    }

    .dot_list {
      display: flex;
      position: absolute;
      left: 50%;
      bottom: 12px;
      transform: translateX(-50%);

      .dot {
        width: 6px;
        height: 6px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 6px;
        cursor: pointer;
        &:not(:first-child) {
          margin-left: 8px;
        }

        &.active {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
