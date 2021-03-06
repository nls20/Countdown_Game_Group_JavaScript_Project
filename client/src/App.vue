<template>
  <section>
    <h1>Countdown Time!</h1>
    <timer v-if="letters.length === 9" :start="true" />
    <letters-board :letters="letters"/>
    <letter-input v-if="letters.length < 9" />
    <submit-answers />
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
        letters: [],
        timerEnded: false,
        submittedWords: {}
      }
    },

    methods:{
      checkWord(word, index){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
          .then((res) => res.json())
          .then((data) => {
            if (word === data[0].word){
              console.log('it is a word');
              this.createSubmittedWordsArray(word, index)
            }
          })
          .catch((err) => {
            console.log(`${word} is not a word`);
            this.createSubmittedWordsArray("", index)
          })
      },
      createSubmittedWordsArray(word, index){
        this.submittedWords.index = word
      }
    },
    mounted(){
      eventBus.$on('add-letter', letter => this.letters.push(letter.toUpperCase()))

      eventBus.$on('player-words', (words) => {
        for (let [word, index] of Object.values(words)){
          this.checkWord(word, index)
        }
      })

      eventBus.$on('timer-finished', () => this.timerEnded = true)

      eventBus.$on('reset-everything', () => {
        this.letters = []
        this.timerEnded = false
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
