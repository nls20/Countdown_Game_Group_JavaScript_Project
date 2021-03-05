<template>
  <section>
    <h1>Countdown Time!</h1>
    <timer/>
    <letters-board/>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue'
import LetterBoard from '@/components/LetterBoard.vue'
import LetterInput from '@/components/LetterInput.vue'
import SubmitAnswers from '@/components/SubmitAnswers.vue'
  export default {
    
    components:{
      'timer': Timer,
      'letters-board': LetterBoard,
      'letter-input': LetterInput,
      'submit-answers': SubmitAnswers
    }
  }
</script>

<style lang="css" scoped>

</style>