import Vue from 'vue';
import Scroll from './main.vue';
import Scroll_head from './head.vue';
import Scroll_item from './item.vue';

Scroll.install = function (Vue) {
    Vue.component(Scroll.name, Scroll);
    Vue.component(Scroll_head.name,Scroll_head);
    Vue.component(Scroll_item.name,Scroll_item);
};

export default Scroll;
