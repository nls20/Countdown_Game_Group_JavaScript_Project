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
    export default {
        data(){
            return {
                playerOneNumber: 0,
                playerTwoNumber: 0
            }
        },
        methods:{
            submitNumbers(){

            }
        }
        
    }
</script>

<style lang="css" scoped>

</style>