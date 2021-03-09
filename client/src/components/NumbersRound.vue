<template>
    <section>
        <timer />
        <choose-numbers />
        <numbers-board :targetNumber="targetNumber" :numbers="playingNumbers"/>
        <submit-answers />
    </section>
</template>

<script>
import Timer from '@/components/Reusable/Timer.vue'
import ChooseNumbers from '@/components/Numbers/ChooseNumbers.vue'
import NumbersBoard from '@/components/Numbers/NumbersBoard.vue'
import SubmitAnswers from '@/components/Numbers/SubmitAnswers.vue'

import {eventBus} from '@/main.js'
    export default {
        data(){
            return {
                largeNumbers: [25, 50, 75, 100],
                smallNumbers: [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 10, 3, 4, 5, 6, 7, 8, 10],
                playingNumbers: [],
                targetNumber: 0
                
            }
        },
        methods:{
            resetEverything(){
                this.playerNumbers = []
                this.targetNumber = 0
            }
        },

        mounted(){
            eventBus.$on('large-numbers', (number) => {
                let tempLargeNumbers = [...this.largeNumbers]
                let tempSmallNumbers = [...this.smallNumbers]
                for (let i=0; i<number; i++){
                    let random = Math.floor(Math.random() * Math.floor(tempLargeNumbers.length))
                    this.playingNumbers.push(tempLargeNumbers[random])
                    tempLargeNumbers.splice(random, 1)
                }
                for (let i=this.playingNumbers.length ; i<6; i++ ){
                    let random = Math.floor(Math.random() * Math.floor(tempSmallNumbers.length))
                    this.playingNumbers.push(tempSmallNumbers[random])
                    tempSmallNumbers.splice(random, 1)
                }
                this.targetNumber = Math.floor(Math.random() * Math.floor(898))+101
            })
        },
        
        components:{
            'timer': Timer,
            'choose-numbers': ChooseNumbers,
            'numbers-board': NumbersBoard,
            'submit-answers': SubmitAnswers
        }
    }
</script>

<style lang="css" scoped>

</style>