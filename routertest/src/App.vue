<template>
  <div id="app">
    <header>
      <router-link to="/home">Home</router-link><br>
      <router-link to="/about">About</router-link><br>
         <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
      <router-link to="/user/123">User123</router-link><br>

      <router-link to="/user/456">User456</router-link>
    </header>
     <router-view></router-view>   
  </div>
</template>

<script>
// import Home from './components/home.vue'
// import About from './components/about.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // About
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
