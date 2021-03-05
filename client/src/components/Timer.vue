<template>
    <section>
        <h1 id="timer"></h1>
        <button @click="startTimer">Start</button>
  </section>
</template>

<script>
    export default {
        name: 'timer',
        data(){
            return{
            }
        },
        methods: {
            startTimer(){
                let countdownTimer = 4
                let countdownTimerFunction = setInterval(function(){
                    document.getElementById('timer').textContent='00:'+countdownTimer;
                    countdownTimer--;
                    if (countdownTimer < 0) {
                        clearInterval(countdownTimerFunction);
                        document.getElementById('timer').textContent = 'Time up'
                    }
                }, 1000);
            }
        }
    }
</script>

<style lang="css" scoped>

</style>


