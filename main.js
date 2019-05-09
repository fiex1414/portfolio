import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-133359319-3'
})

Vue.use(vueSmoothScroll)



Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
    },
 
  render: h => h(App)
}).$mount('#app')
