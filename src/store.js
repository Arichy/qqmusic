import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class Song {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
class Album {
  constructor(id, name) {
    this.id = id;
    this.name = name
  }
}
class Author {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {
      name: '海格力斯',
      // avatar: require('./static_data/img/avatar/avatar.jpg'),
      // avatar:`${process.env.BASE_URL}/static_data/img/avatar/avatar.jpg`,
      avatar:require('../public/static_data/img/avatar/avatar.jpg'),
      greenDiamond: true,
      musicPackage: true
    },

    // 侧栏html结构
    asideHTML: [
      {
        divClass: 'music_center',
        inner: {
          ul_title: '音乐馆',
          ul:
          {
            leftClass: 'aside-icon', rightClass: 'aside-title',
            li: [
              { iClass: 'fas fa-music', title: '精选', to: '/feature' },
              { iClass: 'fas fa-signal', title: '排行', to: '/rank' },
              { iClass: 'fas fa-th-large', title: '歌单', to: '/music_list' },
              { iClass: 'fas fa-broadcast-tower', title: '电台', to: '/radio' },
              { iClass: 'fab fa-youtube', title: 'MV', to: '/mv' }
            ]
          }
        }
      },
      {
        divClass: 'my_music',
        inner: {
          ul_title: '我的音乐',
          ul: {
            leftClass: 'aside-icon', rightClass: 'aside-title',
            li: [
              { iClass: 'far fa-heart', title: '我喜欢', to: '/favor' },
              { iClass: 'fas fa-desktop', title: '本地歌曲', to: '/local_music' },
              { iClass: 'fas fa-download', title: '下载歌曲', to: '/download_music' },
              { iClass: 'far fa-clock', title: '播放历史', to: '/history' },
              { iClass: 'fas fa-shopping-cart', title: '我购买的', to: '/purchase' }
            ]
          }
        }
      },
      {
        divClass: 'created_mucic_list',
        inner: {
          ul_title: '创建的歌单',
          ul: {
            leftClass: 'aside-dot', rightClass: 'aside-title',
            li: [
              { dot: true, title: '翻牌子' },
              { dot: true, title: '五月天' },
              { dot: true, title: '下载歌曲' }
            ]
          }
        }
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
