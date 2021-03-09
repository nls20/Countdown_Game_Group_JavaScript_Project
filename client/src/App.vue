<template >
  <section >
    <letter-round />
  </section>
</template>

<script>
import LetterRound from '@/components/LettersRound.vue'

  export default {
    components:{
      'letter-round': LetterRound
    }
  }

</script>

<style lang="css" scoped>

* {
  font-family: sans-serif;
}

</style>