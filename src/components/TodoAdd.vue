<template>
  <form v-on:submit.prevent="submitTodo" class="mt-1 mb-3">
    <input v-model="todoName" type="text" class="w-full" placeholder="Add Todo" />
  </form>
</template>

<script>
export default {
  name: 'TodoAdd',
  data: function() {
    return {
      todoName: ''
    }
  },
  methods: {
    submitTodo: function() {
      const todoName = this.todoName.trim()
      if (todoName.length == 0) {
        return
      }

      this.$emit('todoSubmit', todoName)
      this.todoName = ''
    }
  }
}
</script>