<template>
  <div id="app" class="max-w-screen-sm px-3 mx-auto">
    <TodoGroupHeader :title="'Pending'" :count="pendingTodos.length" />
    <TodoList :todos="pendingTodos" />

    <TodoAdd v-on:todoSubmit="addTodo" />

    <TodoGroupHeader :title="'Completed'" :count="completedTodos.length" />
    <TodoList :todos="completedTodos" />
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoGroupHeader from './components/TodoGroupHeader'
import TodoAdd from './components/TodoAdd'
import TodoService from './services/todo_service'

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
    addTodo: function (todoName) {
      TodoService.createTodo(todoName).then(todo => this.todos.push(todo))
    }
  },
  mounted: function() {
    TodoService.fetchTodos().then(todos => this.todos = todos)
  },
  components: {
    TodoList,
    TodoGroupHeader,
    TodoAdd
  }
}
</script>

<style>
</style>
