<template>
  <div id="app" class="max-w-screen-sm px-2 py-1 mx-auto">
    <TodoList :todos="todos"/>
    <button v-on:click="completeTodo">Complete</button>
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
          completed: true
        },
        {
          id: 2,
          name: 'bread',
          completed: true
        }
      ]
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
</style>
