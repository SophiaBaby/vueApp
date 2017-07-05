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

Vue.use(Router)

var routes = [
  {path: '/', name: 'Hello', component: HomePage},
  {path: '/news',
    name: 'news',
    component: News,
    children: [
      {path: '/', name: 'Internet', component: Internet},
      {path: 'found', name: 'found', component: Found},
      {path: 'pay',
        name: 'pay',
        component: Pay,
        children: [
          {path: '/', name: 'beijing', component: Beijing},
          {path: 'beijing', name: 'beijing', component: Beijing},
          {path: 'henan', name: 'henan', component: Henan}
        ]
      },
      {path: 'town', name: 'town', component: Town}]
  },
  {path: '/about', name: 'about', component: About},
  {path: '/culture',
    name: 'culture',
    component: Culture,
    children: [
      {path: '/', name: 'thought', component: Thought},
      {path: 'human', name: 'human', component: Human}

    ]
  },
  {path: '/profession', name: 'profession', component: Profession}
]

export default new Router({
  mode: 'history',
  routes: routes
})

Vue.component('Fu_header', Header)
Vue.component('Header', Header2)
Vue.component('Footer', Footer)
