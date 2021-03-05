<template>
  <div id="app" class="max-w-screen-sm px-2 py-1 mx-auto">
    <TodoGroupHeader :title="'Pending'" :count="pendingTodos.length" />
    <TodoList :todos="pendingTodos" />
    <button v-on:click="completeTodo">Add</button>
    <TodoGroupHeader :title="'Completed'" :count="completedTodos.length" />
    <TodoList :todos="completedTodos" />
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoGroupHeader from './components/TodoGroupHeader'

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
          completed: false
        },
        {
          id: 3,
          name: 'beer',
          completed: true
        },
        {
          id: 4,
          name: 'wine',
          completed: true
        }
      ]
    }
  },
  computed: {
    pendingTodos: function() {
      return this.todos.filter(todo => !todo.completed)
    },
    completedTodos: function() {
      return this.todos.filter(todo => todo.completed)
    }
  },
  methods: {
    completeTodo: function() {
      this.todos[0].completed = true
    }
  },
  components: {
    TodoList,
    TodoGroupHeader
  }
}
</script>

<style>
</style>
