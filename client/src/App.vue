<template>
  <section>
    <h1>Countdown Time!</h1>
    <timer/>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue'
  export default {
    
    components:{
      'timer': Timer
    }
  }
</script>

<style lang="css" scoped>

</style>