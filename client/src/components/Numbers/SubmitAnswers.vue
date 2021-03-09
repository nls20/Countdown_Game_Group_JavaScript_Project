<template>
    <section>
        <form @submit.prevent="submitNumbers">
            <label for="playerOne">Player One: </label>
            <input type="number" name="playerOne" v-model="playerOneNumber">

            <label for="playerTwo">Player Two: </label>
            <input type="number" name="playerTwo" v-model="playerTwoNumber" >

            <input  type="submit" value="Submit Answer">
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

</style>