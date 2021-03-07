<template>
  <section>
    <h1>COUNTDOWN</h1>
    <timer v-if="letters.length === 9" :start="true" />
    <letters-board :letters="letters"/>
    <letter-input v-if="letters.length < 9" />
    <!-- <letters-board :letters="letters"/>
    <letter-input/> -->
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
        definition: "",
        currentWord: ""
      }
    },

    methods:{
      checkWord(word, index){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
          .then((res) => res.json())
          .then((data) => {
            if (word === data[0].word){
              this.checkEnterWordIsAllowed(word)
              word = this.currentWord
              this.currentWord = ""

              console.log('output word', word);
              this.createSubmittedWordsArray(word, index)

              if (word.length >= 8) {
                this.getDefinition(word)
              }
            }
          })
          .catch((err) => {
            this.createSubmittedWordsArray("", index)
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
      checkEnterWordIsAllowed(word){
        // console.log('in enter word', word);
          const splitWord = [...word]
          // console.log('after split', word);
          let wordCount = 0
          let board = this.letters.map((letter) => letter.toLowerCase())
          splitWord.forEach((letter) => {
            if (board.includes(letter)){
              board[board.indexOf(letter)] = ""
              wordCount++
              // console.log('word', word);
              // console.log('count', wordCount);
              // console.log('wordlength', word.length);
              if (wordCount === word.length){
                console.log('output', word);
                this.currentWord = word
              }
            } else {
              return "notihgn"
            }
          })
      }
    },
    mounted(){
      eventBus.$on('add-letter', letter => this.letters.push(letter.toUpperCase()))

      eventBus.$on('player-words', (words) => {
        words.forEach((word) => {
          // console.log('word', word);
          this.checkWord(word.word, word.name)
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

* {
  font-family: sans-serif;
}
section{
  background-color: rgb(224, 240, 255);
  margin: -10px;
  padding: 10px;
}

h1 {
  font-size: 40px;
  text-align: center;
}

</style>
