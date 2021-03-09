<template >
  <section >
    <letter-round v-if="roundNumber === 1" />
    <conundrum v-if="roundNumber === 2" />
  </section>
</template>

<script>
import LetterRound from '@/components/LettersRound.vue'
import ConundrumRound from '@/components/ConundrumRound.vue'

  export default {
    data(){
      return {
        roundNumber: 2
      }
    },
    components:{
      'letter-round': LetterRound,
      'conundrum': ConundrumRound
    }
  }

</script>

<style lang="css" scoped>

* {
  font-family: sans-serif;
}

</style>