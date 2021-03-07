<template>
  <div id="app" class="max-w-screen-sm px-3 pb-3 mx-auto">
    <TodoGroupHeader :title="'Pending'" :count="pendingTodos.length" />
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
import TodoList from './components/TodoList'
import TodoGroupHeader from './components/TodoGroupHeader'
import TodoAdd from './components/TodoAdd'
import TodoService from './services/TodoService'

export default {
  name: 'App',
  data: function() {
    return {
      todos: []
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
      TodoService.createTodo(todoName).then(todo => {
        this.todos.push(todo)
        this.loadTodos()
      })
    },
    updateTodo: function(todo) {
      TodoService.updateTodo(todo).then(newTodo => {
        this.todos = this.todos.map(todo => todo.id !== newTodo.id ? todo : newTodo)
        this.loadTodos()
      })
    },
    loadTodos: function() {
      TodoService.fetchTodos().then(todos => this.todos = todos)
    },
    clearCompletedTodos: function() {
      TodoService.deleteCompletedTodos().then(() => this.loadTodos())
    }
  },
  mounted: function() {
    this.loadTodos()
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
