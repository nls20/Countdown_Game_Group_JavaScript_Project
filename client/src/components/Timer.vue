<template>
    <section >
        <h2  id="timer"></h2>
  </section>
</template>

<script>
import {eventBus} from '@/main.js'
    export default {
        name: 'timer',
        props: ['start'],
        data(){
            return{
            }
        },
        methods: {
            
            
        },
        mounted() {
            if (this.start){
                let countdownTimer = 3
                let countdownTimerFunction = setInterval(function(){
                    if (countdownTimer <10){
                        document.getElementById('timer').textContent='00:0'+countdownTimer;
                    } else {
                        document.getElementById('timer').textContent='00:'+countdownTimer;
                    }
                    countdownTimer--;
                    if (countdownTimer < 0) {
                        clearInterval(countdownTimerFunction);
                        document.getElementById('timer').textContent = 'Time up'
                        eventBus.$emit('timer-finished')
                    }
                }, 1000);
            }
        }
    }
</script>

<style lang="css" scoped>

h2 {
  font-size: 30px;
  text-align: center;
  border: solid;
  border-width: 2px;
  border-color: black;
  width: 200px;
  background-color: white;
}

section {
    display: grid;
    justify-content: center;
}

</style>


