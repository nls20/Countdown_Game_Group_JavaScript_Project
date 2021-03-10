<template>
    <section >
        <!-- <h2 v-if="countdownTimer<10" id="timer">00:0{{countdownTimer}}</h2>
        <h2 v-if="countdownTimer>=10" id="timer">00:{{countdownTimer}}</h2>
        <h2 v-if="countdownTimer === 'Time Up'" id="timer">Time Up</h2> -->

        <google-chart id="pie-chart" type="PieChart" :options="{legend: 'none', responsive: true, backgroundColor: '#ADD8E6', pieSliceText: 'none', slices:{0: {color: 'white'}, 1: {color: '#D3D3D3'}, 2:{color: 'blue'}}}" :data="times" />

  </section>
</template>

<script>
import {eventBus} from '@/main.js'
import {GChart} from 'vue-google-charts'
    export default {
        name: 'timer',
        props: ['times'],
       
        mounted() {
             let changeTimer = setInterval(() => {
                let newTime = [...this.times]
                newTime[1][1]++
                
                if (newTime[1][1] === 31){
                    clearInterval(changeTimer)
                    eventBus.$emit('timer-finished')
                } else {
                    eventBus.$emit('change-timer', newTime)
                    newTime[2][1]--
                }
            }, 1000);
        },
        components:{
            'google-chart': GChart
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


