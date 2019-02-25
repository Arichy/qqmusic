import Vue from 'vue'
import Operation from './Operation.vue'

Operation.install = function() {
    Vue.component(Operation.name,Operation);
}

export default Operation
