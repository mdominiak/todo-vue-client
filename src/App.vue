<template>
  <div id="app" class="max-w-screen-sm px-3 pb-3 mx-auto">
    <AppStatus v-if="statusText" :status="statusText"/>
    <TodoGroupHeader :title="'ToDo'" :count="pendingTodos.length" />
    <TodoList :todos="pendingTodos" @todoUpdate="updateTodo" />

    <TodoAdd @todoSubmit="addTodo" />

    <template v-if="completedTodos.length > 0">
      <TodoGroupHeader :title="'Completed'" :count="completedTodos.length" />
      <TodoList :todos="completedTodos" @todoUpdate="updateTodo" />
      <div class="flex justify-center">
        <button type="button" @click="clearCompletedTodos" class="border rounded-lg mt-1 px-3 py-1 border-gray-400 text-gray-500 text-lg">Clear Completed</button>
      </div>
    </template>
  </div>
</template>

<script>
import AppStatus from './components/AppStatus'
import TodoList from './components/TodoList'
import TodoGroupHeader from './components/TodoGroupHeader'
import TodoAdd from './components/TodoAdd'
import TodoService from './services/TodoService'

export default {
  name: 'App',
  data: function() {
    return {
      todos: [],
      loading: true,
      saving: false
    }
  },
  computed: {
    pendingTodos: function() {
      return this.todos.filter(todo => !todo.completed)
    },
    completedTodos: function() {
      return this.todos.filter(todo => todo.completed)
    },
    statusText: function() {
      return this.loading ? 'Loading...' : (this.saving ? 'Saving...' : '')
    }
  },
  methods: {
    addTodo: function (todoName) {
      this.saving = true
      TodoService.createTodo(todoName).then(todo => {
        this.todos.push(todo)
        this.saving = false
        this.loadTodos()
      })
    },
    updateTodo: function(todo) {
      this.saving = true
      TodoService.updateTodo(todo).then(newTodo => {
        this.todos = this.todos.map(todo => todo.id !== newTodo.id ? todo : newTodo)
        this.saving = false
        this.loadTodos()
      })
    },
    loadTodos: function() {
      return TodoService.fetchTodos().then(todos => this.todos = todos)
    },
    clearCompletedTodos: function() {
      this.saving = true
      TodoService.deleteCompletedTodos().then(() => {
        this.loadTodos().then(() => this.saving = false)
      })
    }
  },
  mounted: function() {
    this.loadTodos().then(() => this.loading = false)
  },
  components: {
    TodoList,
    TodoGroupHeader,
    TodoAdd,
    AppStatus
  }
}
</script>

<style>
</style>
