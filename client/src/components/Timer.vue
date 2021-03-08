<template>
    <section >
        <h2 v-if="countdownTimer<10" id="timer">00:0{{countdownTimer}}</h2>
        <h2 v-if="countdownTimer>=10" id="timer">00:{{countdownTimer}}</h2>
        <h2 v-if="countdownTimer === 'Time Up'" id="timer">Time Up</h2>
  </section>
</template>

<script>
import {eventBus} from '@/main.js'
    export default {
        name: 'timer',
        data(){
            return{
                countdownTimer: 3
            }
        },
        computed: {
            
            
            
        },
        mounted() {
            let changeTimer = setInterval(() => {
                    this.countdownTimer--
                    console.log('timer', this.countdownTimer);
                    if (this.countdownTimer<= 0){
                        clearInterval(changeTimer)
                        this.countdownTimer = 'Time Up'
                        eventBus.$emit('timer-finished')
                    }
                }, 1000)
                
                console.log('timer', this.countdownTimer);
            // let countdownTimerFunction = setInterval(function(){
            //     if (countdownTimer <10){
            //         document.getElementById('timer').textContent='00:0'+countdownTimer;
            //     } else {
            //         document.getElementById('timer').textContent='00:'+countdownTimer;
            //     }
            //     countdownTimer--;
            //     if (countdownTimer < 0) {
            //         clearInterval(countdownTimerFunction);
            //         document.getElementById('timer').textContent = 'Time up'
            //         eventBus.$emit('timer-finished')
            //     }
            // }, 1000);
        }
    }
</script>

<style lang="css" scoped>

h2 {
  font-size: 30px;
  text-align: center;
  border-width: 2px;
  border: solid darkblue 2px;
  width: 200px;
  background-color: white;
}

section {
    display: grid;
    justify-content: center;
}

</style>


