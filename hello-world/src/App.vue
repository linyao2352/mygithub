<template>
  <div id="app">
    <input v-model="message">
    <input :value="message" @input="handleChange">
    <todo-list>
      <todo-item @delete="handleDelete" v-for="(item, index) in list" :key="index" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{value}">
          <span>前置图标{{value}}</span>
        </template>
        <!-- <template v-slot:suf-icon>
          <span>后置图标</span>
        </template> -->
        
        <!-- <span slot="pre-icon">前置图标</span>
        <span slot="suf-icon">后置图标</span> -->
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      message: 'hello world',
      list: [
        {
        title: '课程1',
        del: false
      },
      {
        title: '课程1',
        del: true
      }
      ]
    }
  },
  methods: {
    handleDelete(val) {
      console.log('hanleDelete', val)
    },
    handleChange(e) {
      this.message = e.target.value
    }
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
