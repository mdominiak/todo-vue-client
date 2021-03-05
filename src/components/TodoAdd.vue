<template>
  <form v-on:submit.prevent="submitTodo">
    <input v-model="todoName" type="text" class="w-full" />
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

      console.log('submitting: ' + todoName)
      this.$emit('todoSubmit', todoName)
      this.todoName = ''
    }
  }
}
</script>