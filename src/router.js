import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/feature'
    },
    {
      path: '/feature',
      component: () => import("./views/music_center/Feature.vue")
    },
    {
      path: '/rank',
      component: () => import("./views/music_center/Rank.vue")
    },
    {
      path: '/music_list',
      component: () => import("./views/music_center/Music_list.vue")
    },
    {
      path: '/radio',
      component: () => import("./views/music_center/Radio.vue")
    },
    {
      path: '/mv',
      component: () => import("./views/music_center/MV.vue")
    },

    {
      path: '/favor',
      component: () => import("./views/my_music/Favor.vue")
    },
    {
      path: '/local_music',
      component: () => import("./views/my_music/Local_music.vue")
    },
    {
      path: '/download_music',
      component: () => import("./views/my_music/Download_music.vue")
    },
    {
      path: '/history',
      component: () => import("./views/my_music/History.vue")
    },
    {
      path: '/purchase',
      component: () => import("./views/my_music/Purchase.vue")
    }
  ]
})
