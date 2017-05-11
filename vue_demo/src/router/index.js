import Vue from 'vue'
import Router from 'vue-router'
import Footer from './../components/Footer'
import Header from './../components/Header'
import HomePage from './../components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HomePage
    },
    {
      path: '/',
      name: 'Hi',
      component: Footer
    }
  ]
})

Vue.component('Fu_header', Header)
Vue.component('Fu_footer', Footer)
// Vue.component({
//   'Fu_header': Header,
//   'Fu_footer': Footer
// })
