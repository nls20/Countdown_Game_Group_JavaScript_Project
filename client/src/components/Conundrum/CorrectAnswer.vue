<template>
    <section>
        <h3>This is the correct answer {{playerName}}</h3>
        <button v-if="!fullGame" @click="resetEverything">Reset Conundrum</button>
    </section>
</template>

<script>
import {eventBus} from '@/main.js'
    export default {
        props: ['playerName'],
        
        methods:{
            resetEverything(){
                eventBus.$emit('reset-everything')
                
            },
        }
        
    }
</script>

<style lang="css" scoped>

</style>