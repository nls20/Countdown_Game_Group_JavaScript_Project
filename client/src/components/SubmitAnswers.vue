<template>
    <section>
      <form @submit.prevent="submitWords">
        <label for="player_one_input">Player 1 word: </label>
        <input type="text" name="player_one_input" v-model="playerOneWord" >

        <label for="player_two_input">Player 2 word: </label>
        <input type="text" name="player_two_input" v-model="playerTwoWord" >

        <input type="submit" value="Submit words">
      </form>

      <button v-if="submitClicked" @click="resetEverything">Reset</button>
    
  </section>
</template>

<script>
import {eventBus} from '@/main.js'

    export default {
      data(){
        return{
          playerOneWord: "",
          playerTwoWord: "",
          submitClicked: false
        }
      },
      methods:{
        submitWords(){
          const words = {
            playerOneWord: this.playerOneWord,
            playerTwoWord: this.playerTwoWord
          }
          eventBus.$emit('player-words', words)
          this.submitClicked = true
        },
        resetEverything(){
          this.playerOneWord = ""
          this.playerTwoWord = ""
          eventBus.$emit('reset-everything')
        }
      }
        
    }
</script>

<style lang="css" scoped>

</style>