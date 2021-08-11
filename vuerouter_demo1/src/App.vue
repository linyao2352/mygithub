<template>
  <div id="app">
    <h2>router demo</h2>
    <p><router-link to="/user/foo">Go to Foo</router-link></p>
    <P><router-link to="/user/bar">Go to Bar</router-link></P>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // computed: {
  //   username() {
  //     return this.$route.params.username
  //   }
  // },
  // methods: {
  //   goBack() {
  //     window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
  //   }
  // }
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
