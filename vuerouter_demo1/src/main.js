import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


Vue.config.productionTip = false

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
// const router = new VueRouter({
//   routes // (缩写) 相当于 routes: routes
// })

const User = {
  template: '<div>User {{ $route.params.id }}</div>',
  watch: {
    $route(to, from) {
      console.log('路由变化了')
      console.log(to)
      console.log(from)
    }
  }
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User},
    // { path: '*', component: Foo}
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
