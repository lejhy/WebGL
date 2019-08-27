<template>
  <div class="home">
    <WebGL/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import WebGL from '@/components/WebGL.vue'

  export default {
    name: 'home',
    components: {
      WebGL
    }
  }
</script>
