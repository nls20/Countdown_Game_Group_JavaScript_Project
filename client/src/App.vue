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
        letters: ['c', 'e', 'h', 'e', 's', 'e'],
        timerEnded: false,
        submittedWords: {},
        numberOfPlayers: 2,
      }
    },

    methods:{
      checkWord(word, index){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
          .then((res) => res.json())
          .then((data) => {
            if (word === data[0].word){
              this.createSubmittedWordsObject(word, index)
              this.checkEnterWordIsAllowed()
            }
          })
          .catch((err) => {
            this.createSubmittedWordsObject("", index)
            this.checkEnterWordIsAllowed()
          })
      },
      createSubmittedWordsObject(word, index){
        this.submittedWords[index] = word
      },
      checkEnterWordIsAllowed(){
        if (Object.keys(this.submittedWords).length === this.numberOfPlayers){
            for (let [key, word] of Object.entries(this.submittedWords)){
              const splitWord = [...word]
              let board = this.letters.map((letter) => letter.toLowerCase())
              splitWord.forEach((letter, index) => {
                if (board.includes(letter)){
                  const boardIndex = board.indexOf(letter)
                  board[boardIndex] = ""
                } else {
                  this.submittedWords[key] = ""
                }
              })
          }
        }
      }
    },
    mounted(){
      eventBus.$on('add-letter', letter => this.letters.push(letter.toUpperCase()))

      eventBus.$on('player-words', (words) => {
        Object.values(words).forEach((word, index) => {
          this.checkWord(word, `Player ${index+1}`)
        })
      })

      eventBus.$on('timer-finished', () => this.timerEnded = true)

      eventBus.$on('reset-everything', () => {
        this.letters = []
        this.timerEnded = false
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
