import Vue      from 'vue'
import App      from '@/App'
import router   from '@/router'
import Vuex     from 'vuex'
import UI       from 'element-ui'
import Axios    from 'axios'
import store    from '@/store'

Vue.use(UI)
Vue.prototype.$http = Axios;

new Vue({
  el:           '#app',
  router,
  store,
  template:     '<App/>',
  components:   { App }
})
