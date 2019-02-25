<template>
  <div class="newalbum_component">
    <scroll :pageSize="5">
      <scroll-head slot="head">
        <div class="title">专辑首发</div>
      </scroll-head>
      <scroll-item slot="item" v-for="(item,index) of scrollData" :key="index" class="box">
        <album-cover :width="'141px'" :height="'141px'" :img-src="item.imgSrc"></album-cover>
        <div class="album">{{item.album}}</div>
        <div class="author">
          <router-link to="./" v-for="(author_name,index) of item.author" :key="index" class="author_name">
            {{author_name}}
            <span v-if="index!=item.author.length-1" style="color:#000 !important">/</span>
          </router-link>
        </div>
      </scroll-item>
    </scroll>
  </div>
</template>

<script>
export default {
  props: ["scrollData"]
};
</script>

<style lang="scss" scoped>
.newalbum_component {
  padding: 0 20px;
//   background-color: red;

  .box {
    position: relative;
    $img_width: 141px;

    .album {
        font-size: 13px;
        margin-top: 1em;
    }
    .author{
        font-size: 10px;
        margin-top: 0.5em;
    }
    
    .album:hover,.author_name:hover{
        color: #2db969;
        cursor: pointer;
    }
    

    &:not(:first-child) {
      margin-left: 16px;
    }
  }
}
</style>
