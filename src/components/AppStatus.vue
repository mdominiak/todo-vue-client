<template>
  <div class="fixed bg-yellow-500 text-yellow-100 py-1 px-3 text-sm -ml-3 rounded-br-lg">{{status}}</div>
</template>

<script>
export default {
  name: 'AppStatus',
  props: {
    status: String
  }
}
</script>