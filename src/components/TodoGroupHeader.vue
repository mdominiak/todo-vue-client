<template>
  <div class="bg-purple-600 text-white text-center py-2 -mx-3">{{title}} {{count}}</div>
</template>

<script>
export default {
  name: 'TodoGroupHeader',
  props: {
    title: String,
    count: Number
  }
}
</script>