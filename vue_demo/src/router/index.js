import Vue from 'vue'
import Router from 'vue-router'

import Footer from './../components/Footer'
import Header from './../components/Header'
import HomePage from '../Pages/HomePage'
import News from '../Pages/News'
import About from '../Pages/About'
import Culture from '../Pages/Culture'
import Profession from '../Pages/Profession'

Vue.use(Router)

var routes = [
  {path: '/', name: 'Hello', component: HomePage},
  {path: '/homePage', name: 'Hello', component: HomePage},
  {path: '/news', name: 'news', component: News},
  {path: '/about', name: 'about', component: About},
  {path: '/culture', name: 'culture', component: Culture},
  {path: '/profession', name: 'profession', component: Profession}
]

export default new Router({
  mode: 'history',
  routes: routes
})

Vue.component('Fu_header', Header)
Vue.component('Fu_footer', Footer)
