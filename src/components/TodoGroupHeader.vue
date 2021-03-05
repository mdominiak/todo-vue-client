<template>
  <div>{{title}} {{count}}</div>
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