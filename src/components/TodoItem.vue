<template>
  <li class="py-2">
    <input type="checkbox" v-model="todo.completed" class="w-8 h-8" />
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