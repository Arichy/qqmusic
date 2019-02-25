<template>
  <div
    class="cover"
    :style="{width,height}"
    @mouseenter="showMask=true"
    @mouseleave="showMask=false"
  >
    <div class="img">
      <img :src="imgSrc" :style="{width,height}">
    </div>

    <transition name="fade">
      <div class="mask" v-show="showMask" :style="{width,height}">
        <div class="play" v-if="showplay">
          <i class="fas fa-play icon"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AlbumCover",
  // props: ["width", "height", "showplay", "imgSrc"],
  props: {
    width: {},
    height: {},
    showplay: {
      default: true
    },
    imgSrc: {}
  },
  data: () => ({
    showMask: false
  }),
  created() {}
};
</script>

<style lang="scss">
.cover {
  position: relative;
  .mask {
    cursor: pointer;
    position: absolute;
    top: 0;
    background-color: rgba($color: #000, $alpha: 0.2);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // justify-content: flex-end;
    // align-items: flex-end;
    .play {
      cursor: pointer;
      width: 29px;
      height: 29px;
      box-sizing: border-box;
      border: 2px solid #fff;
      border-radius: 29px;
      //   background-color: #2db969;
      position: absolute;
      bottom: 10px;
      right: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        color: #fff;
        cursor: pointer;
        font-size: 10px;
        transform: translateX(2px);
      }
    }
    .play:hover {
      //   background: #1e9c51;
      border-color: #2db969;
      .icon {
        color: #2db969;
      }
    }
  }
}
</style>
