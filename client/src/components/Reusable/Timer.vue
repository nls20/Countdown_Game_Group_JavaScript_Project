<template>
    <section >
        <google-chart id="pie-chart" type="PieChart" :options="{legend: 'none', responsive: true, backgroundColor: '#ADD8E6', pieSliceText: 'none', slices:{0: {color: 'white'}, 1: {color: '#3d94f6'}, 2:{color: 'blue'}}}" :data="times" />

  </section>
</template>

<script>
import {eventBus} from '@/main.js'
import {GChart} from 'vue-google-charts'
    export default {
        name: 'timer',
        props: ['times', 'stopTimer'],
       
        mounted() {
             let changeTimer = setInterval(() => {
                let newTime = [...this.times]
                newTime[1][1] += 0.1
                console.log('timer', this.stopTimer);

                if (this.stopTimer){
                    clearInterval(changeTimer)
                    eventBus.$emit('timer-stopped', newTime)
                } else if (newTime[1][1] > 30){
                    clearInterval(changeTimer)
                    eventBus.$emit('timer-finished')
                } else {
                    eventBus.$emit('change-timer', newTime)
                    newTime[2][1] -=0.1
                }
            }, 100);
        },
        components:{
            'google-chart': GChart
        }
    }
</script>

<style lang="css" scoped>

/* h2 {
  font-size: 30px;
  text-align: center;
  border-width: 2px;
  border: solid darkblue 2px;
  width: 200px;
  background-color: white;
} */

section {
    display: grid;
    justify-content: center;
}

#pie-chart {
    width: 400px;
    height: 400px;
    padding: 0;
    margin: 0;
}

</style>


