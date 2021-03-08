<template>
    <section>
      <form @submit.prevent="submitWords">
        <div id="player-input-form">
          <div class="player-input">
            <label for="player_one_input">Player 1 word: </label>
            <input type="text" name="player_one_input" v-model="playerOneWord" required >
            <p v-if="submitClicked && definitionOneClicked">
              {{ playerOneMeaning }}
            </p>
            <button v-if="submitClicked && !definitionOneClicked" @click="getWordDefinition('Player One')">Definition</button>
          </div>

          <div class="player-input">
            <label for="player_two_input">Player 2 word: </label>
            <input type="text" name="player_two_input" v-model="playerTwoWord" required >
            <p v-if="submitClicked && definitionTwoClicked">
              {{ playerTwoMeaning }}
            </p>
            <button v-if="submitClicked && !definitionTwoClicked" @click="getWordDefinition('Player Two')">Definition</button>
          </div>
        </div>
        <div id="submit-button" >
          <input v-if="!submitClicked" type="submit" value="Submit words">
          <button v-if="submitClicked" @click="resetEverything">Reset</button>
        </div>
      </form>
  </section>
</template>

<script>
import {eventBus} from '@/main.js'

    export default {
      props: ['players'],
      data(){
        return{
          playerOneMeaning: "",
          playerTwoMeaning: "",
          playerOneWord: "",
          playerTwoWord: "",
          submitClicked: false,
          definitionOneClicked: false,
          definitionTwoClicked: false
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
        getWordDefinition(playerName){
          for (let player of this.players){
            if (playerName == player.name && player.word.length > 0){
              fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${player.word}`)
              .then((res) => res.json())
              .then((data) => {
                if (playerName === 'Player One'){
                  this.playerOneMeaning = data[0].meanings[0].definitions[0].definition
                  this.definitionOneClicked = true
                } else if (playerName === 'Player Two') {
                  this.playerTwoMeaning = data[0].meanings[0].definitions[0].definition
                  this.definitionTwoClicked = true
                } else if (player.name === playerName && !player.word) {
                  if (player.name === 'Player One'){
                    this.playerOneMeaning = "Not a word"
                    this.definitionOneClicked = true
                  }
                  else if (player.name === 'Player Two') {
                    this.playerTwoMeaning = "Not a word"
                    this.definitionTwoClicked = true
                  }
                } 
              })
            }       
          }
        },
        resetEverything(){
          this.submitClicked = false
          this.playerOneWord = ""
          this.playerTwoWord = ""
          this.playerOneMeaning = ""
          this.playerTwoMeaning = ""
          this.definitionOneClicked = false
          this.definitionTwoClicked = false
          eventBus.$emit('reset-everything')
        }
      },
      // computed:{
      //   getWordDefinition: function (){ 
      //     let playerName = 'Player One'
      //     for (let player of this.players){
      //       console.log('name', player.name);
      //       if (playerName == player.name && player.word.length > 0){
      //         console.log('in if');
      //         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${player.word}`)
      //         .then((res) => res.json())
      //         .then((data) => {
      //           console.log('data', data);
      //           this.playerOneMeaning = data[0].meanings[0].definitions[0].definition
      //         })
      //       }
      //     }
      //   }        
      // }
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