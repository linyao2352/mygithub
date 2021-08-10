<template>
  <div id="app">
    {{$store.getters.doubleCount}}
    <br>
    {{count}}<br>
    <button @click="$store.commit('increment')">count++</button><br>
    <button @click="$store.dispatch('increment')">count++</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
</style>
