<template>
  <div id="app" class="max-w-screen-sm px-2 py-1 mx-auto">
    <TodoList :todos="todos"/>
    <button v-on:click="completeTodo">Add</button>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  data: function() {
    return {
      todos: [
        {
          id: 1,
          name: 'milk',
          completed: false
        },
        {
          id: 2,
          name: 'bread',
          completed: true
        }
      ]
    }
  },
  methods: {
    completeTodo: function() {
      this.todos[0].completed = true
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
</style>
