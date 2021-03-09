<template>
  <div>
        <section id="background">
            <h1>CONUNDRUM</h1>
            <timer />
            <letters-board :letters="splitWord(word)"/>
            <conundrum-submit />
            <correct-answer v-if="correctPlayer.length > 0" :playerName="correctPlayer"/>
        </section>
    </div>
</template>

<script>

import LetterBoard from '@/components/Reusable/LetterBoard.vue'
import ConundrumSubmit from '@/components/Conundrum/ConundrumSubmit.vue'
import Timer from '@/components/Reusable/Timer.vue'
import CorrectAnswer from '@/components/Conundrum/CorrectAnswer.vue'

import {eventBus} from '@/main.js'

export default {
    data(){
        return {
            word: 'fireboard',
            correctPlayer: ""
        }
    },

    methods:{
        splitWord: function(word){
            return [...word.toUpperCase()]
        }
    },

    mounted(){
        eventBus.$on('conundrum-answered', (conundrum) => {
            if (conundrum.word === this.word){
                this.correctPlayer = conundrum.name
            }
        })
    },
    computed:{
        

    },

    components:{
        'letters-board': LetterBoard,
        'conundrum-submit': ConundrumSubmit,
        'timer': Timer,
        'correct-answer': CorrectAnswer
    }
}
</script>

<style>

</style>