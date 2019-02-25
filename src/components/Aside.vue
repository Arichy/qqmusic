<template>
  <div class="aside">
    <div class="header">
      <div class="avatar_wrapper">
        <img :src="avatar" width="48px" class="avatar" alt>
      </div>
      <div class="name">{{name}}</div>
    </div>
    <hr>

    <div class="aside-main" ref="asideMain">
      <div v-for="(part,index) of asideHTML" :key="index" :class="part.divClass">
        <div class="ul_title">{{part.inner.ul_title}}</div>
        <ul>
          <li
            v-for="(item,index2) of part.inner.ul.li"
            :key="index2"
            @click="handler(item.to,[index,index2])"
          >
            <div :class="part.inner.ul.leftClass">
              <i :class="item.iClass">{{item.dot?'·':''}}</i>
            </div>
            <div :class="part.inner.ul.rightClass">{{item.title}}</div>
          </li>
        </ul>
      </div>

      <!--
      <div class="music_center">
        <div class="ul_title">音乐馆</div>
        <ul>
          <li>
            <div class="aside-icon">
              <i class="fas fa-music"></i>
            </div>
            <div class="aside-title">精选</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="fas fa-signal"></i>
            </div>
            <div class="aside-title">排行</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="fas fa-th-large"></i>
            </div>
            <div class="aside-title">歌单</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="fas fa-broadcast-tower"></i>
            </div>
            <div class="aside-title">电台</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="fab fa-youtube"></i>
            </div>
            <div class="aside-title">MV</div>
          </li>
        </ul>
      </div>

      <div class="my_music">
        <div class="ul_title">我的音乐</div>
        <ul>
          <li>
            <div class="aside-icon">
              <i class="far fa-heart"></i>
            </div>
            <div class="aside-title">我喜欢</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="aside-title">本地音乐</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="fas fa-download"></i>
            </div>
            <div class="aside-title">下载歌曲</div>
          </li>
          <li>
            <div class="aside-icon">
              <i class="far fa-clock"></i>
            </div>
            <div class="aside-title">播放历史</div>
          </li>

          <li>
            <div class="aside-icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="aside-title">我购买的</div>
          </li>
        </ul>
      </div>

      <div class="created_mucic_list">
        <div class="ul_title">创建的歌单</div>
        <ul>
          <li>
            <div class="aside-dot">·</div>
            <div class="aside-title">翻牌子</div>
          </li>
          <li>
            <div class="aside-dot">·</div>
            <div class="aside-title">五月天</div>
          </li>
          <li>
            <div class="aside-dot">·</div>
            <div class="aside-title">下载歌曲</div>
          </li>
        </ul>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// 判断两个元组是否相同
function tupleEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
}

// 根据二元组找到对应的li
function getLiByTuple(asideMain, [index, index2]) {
  let level1 = asideMain.children[index];
  let level2 = level1.querySelectorAll('li')[index2];

  let target = level2;

  return target;
}

export default {
  data: () => ({
    activeIndex: [0, 0],
  }),
  computed: {
    ...mapState({
      name: state => state.userInfo.name,
      avatar: state => state.userInfo.avatar,
      asideHTML: state => state.asideHTML
    }),
  
  },

  methods: {
    handler(to, index) {
      if (!tupleEqual(index, this.activeIndex)) {
        // active切换
        getLiByTuple(this.$refs.asideMain,this.activeIndex).classList.remove('active');
        getLiByTuple(this.$refs.asideMain,index).classList.add('active')
        this.activeIndex = index;

        // 页面跳转
        this.$router.push(to);
      }
    }
  },

  mounted() {
    let initActiveLi = getLiByTuple(this.$refs.asideMain, this.activeIndex);
    initActiveLi.classList.add('active');
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #2db969;

.aside {
  // font-weight: bold;
  // font-weight: 400;

  display: flex;
  flex-direction: column;

  $asideHeight: 614px;
  $headerHeight: 153px;
  .header {
    height: $headerHeight;

    .avatar_wrapper {
      text-align: center;
      margin-top: 48px;
      .avatar {
        border-radius: 50px;
      }
    }

    .name {
      text-align: center;
      font-size: 13px;
      margin-top: 5px;
    }
  }

  hr {
    width: 85%;
    margin: auto;

    border: none;
    border-top: 1px solid #d3d3d3;
  }

  .aside-main {
    padding: 20px 10px;
    height: $asideHeight - $headerHeight;
    box-sizing: border-box;
    overflow: auto;
    .active {
      background-color: $mainColor;
      color: #fff;
    }

    .ul_title {
      font-size: 10px;
      color: #807e7e;
      padding-left: 10px;
    }

    ul {
      margin-top: 3px;

      li {
        height: 27px;
        font-size: 13px;
        line-height: 27px;

        margin-bottom: 1px;
        display: flex;
        .aside-icon {
          width: 17px;
          margin-right: 3px;
          padding-left: 10px;
        }
        .aside-dot {
          width: 17px;
          margin-right: 3px;
          padding-left: 10px;
          text-align: center;
          font-size: 20px;
          color: #a0a0a0;
        }
      }

      li:not(.active):hover {
        background-color: #d4d4d4;
      }
    }

    > div:not(:first-child) {
      // background: red;
      margin-top: 25px;
    }
  }
}
</style>
