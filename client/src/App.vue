<template>
  <section>
    <h1>Countdown Time!</h1>
    <button @click="checkWord">test</button>
    <timer/>
    <letters-board/>
    <letter-input/>
    <submit-answers/>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue'
import LetterBoard from '@/components/LetterBoard.vue'
import LetterInput from '@/components/LetterInput.vue'
import SubmitAnswers from '@/components/SubmitAnswers.vue'
  export default {

    methods:{
      checkWord(word){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/letter`)
          .then((res) => res.json())
          .then((data) => {
            if ('letter' === data[0].word){
              console.log('it is a word');
            } else {
              console.log('not a word');
            }
          })
      }
    },
    
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
