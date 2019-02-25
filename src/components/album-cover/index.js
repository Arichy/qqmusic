import Vue from 'vue'
import Album_cover from './Album_cover.vue'

Album_cover.install = function () {
    Vue.component(Album_cover.name, Album_cover);
};

export default Album_cover
