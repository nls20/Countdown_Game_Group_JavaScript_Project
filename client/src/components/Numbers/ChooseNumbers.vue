<template>
    <div>
        <h3>Choose number of large numbers</h3>
        <div>
            <button @click="setLargeNumber(0)">0</button>
            <button @click="setLargeNumber(1)">1</button>
            <button @click="setLargeNumber(2)">2</button>
            <button @click="setLargeNumber(3)">3</button>
            <button @click="setLargeNumber(4)">4</button>
        </div>
    </div>
</template>

<script>
import {eventBus} from '@/main.js'

    export default {
        data(){
            return {
            }
        },
        methods:{
            setLargeNumber(largeNumber){
                eventBus.$emit('large-numbers', largeNumber)
            }
        }
    }
</script>

<style lang="css" scoped>

</style>