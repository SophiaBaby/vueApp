import Vue from 'vue'
import Router from 'vue-router'

import Footer from './../components/Footer'
import Header from './../components/Header'
import Header2 from '../components/Header2.vue'
import HomePage from '../Pages/HomePage'
import News from '../Pages/News'
import About from '../Pages/About'
import Culture from '../Pages/Culture'
import Profession from '../Pages/Profession'
import Internet from '../Pages/group/internet.vue'
import Pay from '../Pages/group/pay.vue'
import Found from '../Pages/group/found.vue'
import Town from '../Pages/group/town.vue'
import Beijing from '../Pages/group/beijing.vue'
import Henan from '../Pages/group/henan.vue'
import Human from '../Pages/culture/human.vue'
import Thought from '../Pages/culture/thought.vue'
import newsDetail from '../Pages/about/newsDetail.vue'
import Login from '../Pages/log/log.vue'
import Register from '../Pages/log/register.vue'

Vue.use(Router)

var routes = [
  {path: '/', name: 'Hello', component: HomePage},
  {path: '/news',
    component: News,
    children: [
      {path: '/', name: 'Internet', component: Internet},
      {path: 'found', name: 'found', component: Found},
      {path: 'pay',
        component: Pay,
        children: [
          {path: '/', name: 'beijing', component: Beijing},
          {path: 'henan', name: 'henan', component: Henan}
        ]
      },
      {path: 'town', name: 'town', component: Town}]
  },
  {path: '/about',
    name: 'about',
    component: About,
    children: []
  },
  {path: '/culture',
    component: Culture,
    children: [
      {path: '/', name: 'thought', component: Thought},
      {path: 'human', name: 'human', component: Human}
    ]
  },
  {path: '/profession', name: 'profession', component: Profession},
  {path: '/newsDetail:id', name: 'newsDetail', component: newsDetail},
  {path: '/login', name: 'login', component: Login},
  {path: '/register', name: 'register', component: Register}
]

export default new Router({
  mode: 'history',
  routes: routes
})

Vue.component('Fu_header', Header)
Vue.component('Header', Header2)
Vue.component('Footer', Footer)
