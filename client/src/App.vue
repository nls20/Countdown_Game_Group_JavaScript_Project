<template>
  <section>
    <h1>Countdown Time!</h1>
    <timer v-if="letters.length === 9" :start="true" />
    <letters-board :letters="letters"/>
    <letter-input v-if="letters.length < 9" />
    <submit-answers/>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue'
import LetterBoard from '@/components/LetterBoard.vue'
import LetterInput from '@/components/LetterInput.vue'
import SubmitAnswers from '@/components/SubmitAnswers.vue'

import {eventBus} from '@/main.js'
  export default {

    data(){
      return {
        letters: []
      }
    },

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
    mounted(){
      eventBus.$on('add-letter', letter => this.letters.push(letter.toUpperCase()))

      eventBus.$on('reset-everything', () => {
        this.letters = []
        //  reset timer
      })
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
