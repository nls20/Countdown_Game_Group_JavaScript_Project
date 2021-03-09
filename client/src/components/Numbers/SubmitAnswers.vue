<template>
    <section>
        <form id="player-input-form" @submit.prevent="submitNumbers">
            <div class="player-input">
                <label for="playerOne">Player One: </label>
                <input type="number" name="playerOne" v-model="playerOneNumber">
            </div>
            
            <div class="player-input">
                <label for="playerTwo">Player Two: </label>
                <input type="number" name="playerTwo" v-model="playerTwoNumber" >
            </div>

            <input id="submit-button" type="submit" value="Submit Answer">
      </form>
    </section>
</template>

<script>
import {eventBus} from '@/main.js'
    export default {
        data(){
            return {
                playerOneNumber: 0,
                playerTwoNumber: 0
            }
        },
        methods:{
            submitNumbers(){
                let numbers = [
                    {name: 'Player One', score: this.playerOneNumber},
                    {name: 'Player Two', score: this.playerTwoNumber}
                ]
                eventBus.$emit('numbers-answers', numbers)
            }
        }
        
    }
</script>

<style lang="css" scoped>

.player-input{
  display: grid;
  justify-content: center;
  margin: 0px 30px;
}

.player-input>label{
  text-align: center;
  margin-bottom: 5px;
}

.player-input>input{
  font-size: x-large
}

#player-input-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#submit-button{
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