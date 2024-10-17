<template>
  <div class="app1">
    <app msg="查看设备详情"/>
  </div>
</template>

<script>
// @ is an alias to /src
import app from '@/components/app.vue'

export default {
  name: 'DataView',
  components: {
    app
  }
}
</script>
