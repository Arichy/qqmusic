<template>
  <div class="newsong_component">
    <div class="title">新歌速递</div>

    <scroll :pageSize="9" :grid="true" :height="190">
      <scroll-head slot="head">
        <div>播放全部</div>
      </scroll-head>

      <scroll-item slot="item" v-for="(item,index) of newsongDataArr" :key="index" class="box">
        <div class="cover">
          <img :src="item.imgSrc" width="45px" height="45px" alt>
        </div>
        <div class="info">
          <div class="song_name">{{item.song}}</div>
          <div class="author_name">{{item.author}}</div>
        </div>
        <div class="control">
            <operation></operation>
        </div>
      </scroll-item>
    </scroll>
  </div>
</template>

<script>
export default {
  props: ["scrollData"],
  data: () => ({
    newsongDataArr: []
  }),
  created() {
    this.scrollData.then(data => {
      this.newsongDataArr = [...data, ...data];

      console.log(this.newsongDataArr);
    });
  }
};
</script>

<style lang="scss" scoped>
.newsong_component {
  //   padding: 0 20px;
  // background-color: red;
  .box {
    $boxHeight: 46px;
    width: 235px;
    height: $boxHeight;
    // background-color: rgba($color: #000000, $alpha: 0.5);
    border: 1px solid black;
    margin-top: 15px;
    margin-left: 15px;

    display: flex;

    .info {
      background-color: red;
      .song_name {
        font-size: 13px;
        height: 50%;
        line-height: 2em;
        background-color: green;
      }
      .author_name {
        font-size: 10px;
        height: 50%;
        line-height: 2em;
      }
    }
  }
}
</style>

<style lang="scss">
.newsong_component {
  .scroll_list {
    //   background-color: green;
    // border:1px solid black;
    width: auto;
    // padding: 15px;
    background-color: #f2f2f2 !important;
  }
}
</style>

