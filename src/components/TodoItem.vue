<template>
  <li>
    <input type="checkbox" />
    {{ todo.name }}
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