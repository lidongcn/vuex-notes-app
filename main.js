import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
  store, // 注入所有的store
  el: 'body',
  components: { App }
});
