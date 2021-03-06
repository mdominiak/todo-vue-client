<template>
  <ul class="divide-y">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" v-on="$listeners" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  props: {
    todos: Array
  },
  components: {
    TodoItem
  }
}
</script>