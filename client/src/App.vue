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
        players: [],
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
              this.createplayersArray(word, index)

              if (word.length >= 8) {
                this.getDefinition(word, index)
              }
              this.calculateScore(word, index)
            }
          })
          .catch((err) => {
            this.createplayersArray("", index)
          })

          //done
      },

      createplayersArray(word, index){
        this.players.push({name: index, writtenWord: word, score: 0})
        //done
      },

      compareWordsLength(){
        let highestPlayer = {}
        console.log('word row', this.players);
        for (let wordRow of this.players){
          console.log('length', wordRow);
          console.log('longest word', longestWord[0].length);
          if (wordRow.writtenWord.length > longestWord[0].length){
            console.log(`${key} is longer`);
            longestWord = wordRow
          }
        }
        this.calculateScore(highestPlayer)
      },

      getDefinition(word, index){
        //done
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
          .then((res) => res.json())
          .then((data) => {
            this.players.filter((player) => {
              if (index === player.name){
                player.definition = data[0].meanings[0].definitions[0].definition
              }
            })
          })
      },

      calculateScore(word, index){
        this.players.filter((player) => {
          if (player.name === index){
            if (word.length === 9){
              player.score = 18
            } else {
              player.score = word.length
            }
          }
        })
      },

      checkEnterWordIsAllowed(word){
        //done
        const splitWord = [...word]
        let wordCount = 0
        let board = this.letters.map((letter) => letter.toLowerCase())
        splitWord.forEach((letter) => {
          if (board.includes(letter)){
            board[board.indexOf(letter)] = ""
            wordCount++
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
          this.checkWord(word.word, word.name)
        })
      })

      eventBus.$on('timer-finished', () => this.timerEnded = true)

      eventBus.$on('reset-everything', () => {
        this.letters = ['f', 'i', 'r', 'e', 'b', 'o', 'a', 'r', 'd']
        this.timerEnded = false
        this.players = []
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
