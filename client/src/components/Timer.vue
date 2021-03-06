<template>
    <section >
        <h1  id="timer"></h1>
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
                    document.getElementById('timer').textContent='00:'+countdownTimer;
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

</style>


