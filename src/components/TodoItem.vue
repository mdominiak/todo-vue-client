<template>
  <li>
    <input type="checkbox" v-model="todo.completed" />
    <span class="pl-2" :class="{'line-through': todo.completed}">{{ todo.name }}</span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  }
}
</script>