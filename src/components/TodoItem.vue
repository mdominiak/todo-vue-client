<template>
  <li class="py-2 flex items-center">
    <input type="checkbox" v-model="todoCompleted" class="w-8 h-8" />
    <div class="pl-3 text-lg leading-none" :class="{'line-through': todo.completed}">{{ todo.name }}</div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  computed: {
    todoCompleted: {
      get: function() {
        return this.todo.completed
      },
      set: function(newValue) {
        this.$emit('todoUpdate', { id: this.todo.id, completed: newValue })
      }
    }
  }
}
</script>