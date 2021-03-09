<template>
  <div>
      <button>Stop Timer</button>
      <form @submit.prevent="submitWords">
            <label for="playerOne">Player One: </label>
            <input type="text" name="playerOne" v-model="playerOneWord">

            <label for="playerTwo">Player Two: </label>
            <input type="text" name="playerTwo" v-model="playerTwoWord" >

            <input  type="submit" value="Submit Answer">
      </form>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {

    data(){
        return {
            playerOneWord: "",
            playerTwoWord: ""
        }
    },

    methods: {
        submitWords(){
            let conundrumWord={}
            if (this.playerOneWord.length === 9){
                conundrumWord = {name: "Player One", word: this.playerOneWord}
            } else if (this.playerTwoWord.length === 9){
                conundrumWord = {name: "Player Two", word: this.playerTwoWord}
            }
            eventBus.$emit('conundrum-answered', conundrumWord)
        }
    }

}
</script>

<style>

</style>