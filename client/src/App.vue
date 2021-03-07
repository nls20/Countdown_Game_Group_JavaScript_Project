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
        letters: ['f', 'i', 'r', 'e', 'b', 'o', 'a', 'r', 'd'],
        timerEnded: false,
        submittedWords: [],
        numberOfPlayers: 2,
        definition: ""
      }
    },

    methods:{
      checkWord(word, index){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
          .then((res) => res.json())
          .then((data) => {
            if (word === data[0].word){
              this.createSubmittedWordsArray(word, index)
              this.checkEnterWordIsAllowed()
              console.log('length', word.length);
              if (word.length >= 8) {
                console.log('in if');
                this.getDefinition(word)
              }
              // console.log('check', word);
            }
          })
          .catch((err) => {
            this.createSubmittedWordsArray("", index)
            // console.log('error', word);
          })
      },
      createSubmittedWordsArray(word, index){
        this.submittedWords.push({name: index, writtenWord: word})
        // console.log(this.submittedWords);
      },
      compareWordsLength(){
        let highestPlayer = {}
        console.log('word row', this.submittedWords);
        for (let wordRow of this.submittedWords){
          console.log('length', wordRow);
          console.log('longest word', longestWord[0].length);
          if (wordRow.writtenWord.length > longestWord[0].length){
            console.log(`${key} is longer`);
            longestWord = wordRow
          }
        }
        this.calculateScore(highestPlayer)

      },
      getDefinition(word){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
          .then((res) => res.json())
          .then((data) => this.definition = data[0].meanings[0].definitions[0].definition)
      },
      calculateScore(player){
        if (player.word.length === 9){
          player.score = 18
        } else {
          player.score = player.word.length
        }
      },
      checkEnterWordIsAllowed(){
        if (this.submittedWords.length === this.numberOfPlayers){
            for (let wordRow of this.submittedWords){
              // console.log('words', this.submittedWords);
              // console.log('written', wordRow.writtenWord);
              const splitWord = [...wordRow.writtenWord]
              let board = this.letters.map((letter) => letter.toLowerCase())
              // console.log('board', board);
              splitWord.forEach((letter, index) => {
                if (board.includes(letter)){
                  const boardIndex = board.indexOf(letter)
                  board[boardIndex] = ""
                } else {
                  this.wordRow.writtenWord =""
                }
              })
          }
          this.compareWordsLength()
        }
      }
    },
    mounted(){
      eventBus.$on('add-letter', letter => this.letters.push(letter.toUpperCase()))

      eventBus.$on('player-words', (words) => {
        Object.values(words).forEach((word, index) => {
          console.log('word', word);
          this.checkWord(word, `Player ${index+1}`)
        })
      })

      eventBus.$on('timer-finished', () => this.timerEnded = true)

      eventBus.$on('reset-everything', () => {
        this.letters = ['c','h','e','e','s','e']
        this.timerEnded = false
        this.submittedWords = []
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
