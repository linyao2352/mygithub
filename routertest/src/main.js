import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/home.vue'
import About from './components/about.vue'
import User from './components/user.vue'
import phone from './components/phone.vue'
import tablet from './components/tablet.vue'
import computer from './components/computer.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: Home,
    // 子路由
    children: [
      {
        path: 'phone',
        component: phone
      },
      {
        path: "tablet",
        component: tablet
      },
      {
          path: "computer",
          component: computer
      },
      // 当进入到home时，下面的组件显示
      {
          path: "",
          component: phone
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  /*新增user路径，配置了动态的id*/
  {
    path: "/user/:id",
    component: User
  },
  {
    path: '/',
    redirect: '/home'
  }
]

let router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
