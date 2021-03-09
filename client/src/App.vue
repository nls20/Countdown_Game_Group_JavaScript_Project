<template >
  <section >
    <letter-round v-if="roundNumber === 1" />
    <conundrum v-if="roundNumber === 2" />
    <number-round v-if="roundNumber === 3" />
  </section>
</template>

<script>
import LetterRound from '@/components/LettersRound.vue'
import ConundrumRound from '@/components/ConundrumRound.vue'
import NumbersRound from '@/components/NumbersRound.vue'
  export default {
    data(){
      return {
        roundNumber: 3
      }
    },
    components:{
      'letter-round': LetterRound,
      'conundrum': ConundrumRound,
      'number-round': NumbersRound
    }
  }

</script>

<style lang="css" scoped>

* {
  font-family: sans-serif;
}

</style>