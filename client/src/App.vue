<template>
  <section>
    <h1>COUNTDOWN</h1>
    <timer v-if="letters.length === 9" />
    <letters-board :letters="letters"/>
    <letter-input v-if="letters.length < 9" />
    <!-- <letters-board :letters="letters"/>
    <letter-input/> -->
    <submit-answers :players="players"/>
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
        // letters:[],
        timerEnded: false,
        players: [],
        enteredWords: [],
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
              //improve this, is there a way to make the output of a function equal to a variable?
              word = this.currentWord
              this.currentWord = ""
              this.createplayersArray(word, index)

              if (word.length >= 8) {
                // this.getDefinition(word, index)
              }
              this.enteredWords.push(word)
              this.compareWordsLength()
            }
          })
          .catch((err) => {
            this.createplayersArray("", index)
            this.enteredWords.push("")
            this.compareWordsLength()
          })
      },

      createplayersArray(word, name){
        if (this.players.length === this.numberOfPlayers){
          this.players.filter((player) => {
            if (player.name === name){
              player.word = word
            }
          })
        } else {
          this.players.push({name: name, word: word, score: 0})
        }
      },

      compareWordsLength(){
        if (this.numberOfPlayers === this.enteredWords.length){
          let highestPlayers = [{word: ""}]
          for (let player of this.players){
            let word = player.word
            if (word.length > highestPlayers[0].word.length){
              highestPlayers[0] = player
            } else if (word.length === highestPlayers[0].word.length){
              highestPlayers.push(player)
            }
          }
          this.calculateScore(highestPlayers)
        }
      },

      
      calculateScore(passedPlayer){
        if (passedPlayer.length >1){
          for (let player of passedPlayer){
            this.addScores(player)
          }
        } else {
          this.players.filter((player) => {
            if (player.name === passedPlayer[0].name){
              this.addScores(passedPlayer[0])
            }
          })
        }
      },

      addScores(passedPlayer){
        if (passedPlayer.word.length === 9){
            passedPlayer.score += 18
          } else {
            passedPlayer.score += passedPlayer.word.length
          }
      },

      checkEnterWordIsAllowed(word){
        const splitWord = [...word]
        let wordCount = 0
        let board = this.letters.map((letter) => letter.toLowerCase())
        splitWord.forEach((letter) => {
          if (board.includes(letter)){
            board[board.indexOf(letter)] = ""
            wordCount++
            if (wordCount === word.length){
              this.currentWord = word
            }
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
        this.enteredWords = []
        for (let player of this.players){
          player.word = ""
        }
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