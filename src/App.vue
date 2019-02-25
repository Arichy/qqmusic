<template>
  <div id="app">
    <div class="aside-top">
      <aside-top></aside-top>
    </div>
    <div class="main">
      <main-header></main-header>
      <router-view></router-view>
    </div>
    <div class="aside-play-control"></div>
    <div class="play-progress"></div>
  </div>
</template>

<script>
import aside from "./components/Aside.vue";
import mainHeader from './components/Main_header';

export default {
  components: { "aside-top": aside,"main-header":mainHeader }
};
</script>


<style lang="scss">
// $appWidth: 980px;
// $appHeight: 674px;
// $appWidth:1010px;
$appWidth:1010px + 15px; // 15px为侧边滚动栏的宽度
$appHeight:695px;
#app {
  width: $appWidth;
  height: $appHeight;

  border: 1px solid #ccc;
  border-radius: 5px;

  position: absolute;
  top: 20px;
  // bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  // box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  $asideWidth: 200px;
  $playControlHeight: 60px;

$mainColor: #2db969;
  $asideBgc: rgba(219, 219, 220, 0.7);
  $playControlBgc: rgba(230, 229, 230, 0.9);

  .aside-top {
    width: $asideWidth;
    height: $appHeight - $playControlHeight;
    background-color: $asideBgc;
  }

  .main {
    width: $appWidth - $asideWidth;
    height: $appHeight - $playControlHeight;
    overflow: hidden auto;
  }

  .aside-play-control {
    width: $asideWidth;
    height: $playControlHeight;
    background-color: $playControlBgc;
  }

  .play-progress {
    width: $appWidth - $asideWidth;
    height: $playControlHeight;
  }
}
</style>
