<template>
    <section>
      <form @submit.prevent="submitWords">
        <div id="player-input-form">
          <div class="player-input">
            <label for="player_one_input">Player 1 word: </label>
            <input type="text" name="player_one_input" v-model="playerOneWord" >
          </div>

          <div class="player-input">
            <label for="player_two_input">Player 2 word: </label>
            <input type="text" name="player_two_input" v-model="playerTwoWord" >
          </div>
        </div>
        <div id="submit-button" >
          <input type="submit" value="Submit words">
          <button v-if="submitClicked" @click="resetEverything">Reset</button>
        </div>
      </form>
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
          const words = [
            {
              name: "Player One", 
              word: this.playerOneWord
            },
            {
              name: "Player Two",
              word: this.playerTwoWord
            }
          ]
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

.player-input{
  display: grid;
  justify-content: center;
}

.player-input>label{
  text-align: center;
  margin-bottom: 5px;
}

.player-input>input{
  font-size: x-large
}

#player-input-form{
  display: grid;
  grid-template-columns: 1fr 1fr;
}


#submit-button{
  display:grid;
  justify-content: center;
  
}

#submit-button>input{
  box-shadow:inset 0px 1px 0px 0px #97c4fe;
  background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color:#3d94f6;
  border-radius:6px;
  border:1px solid #337fed;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:large;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #1570cd;
  margin: 20px 40px;
  width: 180px;
  height: 100px
}

#submit-button>button{
  box-shadow:inset 0px 1px 0px 0px #97c4fe;
  background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color:#3d94f6;
  border-radius:6px;
  border:1px solid #337fed;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:large;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #1570cd;
  margin: 20px 40px;
  width: 180px;
  height: 100px
}

</style>