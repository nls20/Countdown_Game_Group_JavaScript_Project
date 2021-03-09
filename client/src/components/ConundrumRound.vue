<template>
  <div>
        <section id="background">
            <h1>CONUNDRUM</h1>
            <timer />
            <letters-board :letters="jumbledWord"/>
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
import CountdownService from '@/services/CountdownService'

import {eventBus} from '@/main.js'

export default {
    data(){
        return {
            word: '',
            jumbledWord: "",
            correctPlayer: ""
        }
    },

    methods:{
        getConundrumWord(){
            CountdownService.getConundrumWords()
            .then(words => {
                let conundrum = words[Math.floor(Math.random()*words.length)].name.toUpperCase()
                this.word = conundrum
                this.jumbledWord = [...conundrum].sort()

            })
        }
    },

    mounted(){
        eventBus.$on('conundrum-answered', (conundrum) => {
            console.log('con', conundrum);
            console.log('word', this.word);
            if (conundrum.word.toUpperCase() == this.word){
                console.log('word', conundrum.word.toUpperCase());
                this.correctPlayer = conundrum.name
            }
        })

        this.getConundrumWord()
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