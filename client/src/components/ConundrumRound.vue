<template>
  <div>
        <section id="background">
            <div id="scores">
                <h2>Player 1: {{players[0].score}}</h2>
                <h2>CONUNDRUM ROUND</h2>
                <h2>Player 2: {{players[1].score}}</h2>
            </div>
            <timer :times="currentTime"/>
            <letters-board :letters="jumbledWord"/>
            <conundrum-submit />
            <correct-answer v-if="correctPlayer.length > 0" :playerName="correctPlayer" :fullGame="fullGame"/>
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
    props: ['fullGame', 'players'],
    data(){
        return {
            word: '',
            jumbledWord: "",
            correctPlayer: "",
            currentTime: [['name', 'time'], ['currentTime', 0], ['timeUnused', 60]]
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

        eventBus.$on('reset-everything', () => {
                this.getConundrumWord()
                this.currentTime = [['name', 'time'], ['currentTime', 0], ['timeUnused', 60]]

            })

        eventBus.$on('change-timer', (timer) => this.currentTime=timer)

        this.getConundrumWord()

        eventBus.$on('next-round', () => {
            this.currentTime = [['name', 'time'], ['currentTime', 0], ['timeUnused', 60]]
            this.timerEnded = false
            this.enteredWords = []
            for (let player of this.players){
                player.word = ""
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

button {
    box-shadow:inset 0px 1px 0px 0px #97c4fe;
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	border-radius:6px;
	border:1px solid #337fed;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:large;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
    margin: 20px 40px;
    width: 180px;
    height: 100px
}

h2 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;

}

#scores{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>