import Vue from 'vue'
import VueX from 'vuex'
import App from './App.vue'

Vue.use(VueX)
Vue.config.productionTip = false

const store = new VueX.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({state}) {
      setTimeout(() => {
        state.count++ 
      }, 3000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
