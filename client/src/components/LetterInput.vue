<template>
    <section>
        <button @click="addConsonant">Consonant</button>
        <button @click="addVowel">Vowel</button>
  </section>
</template>

<script>
import {eventBus} from '@/main.js'

    export default {
        name: 'letter-input',
        data(){
            return {
                letterToAdd: "",
                consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
                vowels: ['a', 'e', 'i', 'o', 'u']
            }
        },
        methods:{
            addConsonant(){
                this.letterToAdd = this.consonants[Math.floor(Math.random() * this.consonants.length)]
                this.sendEventBus()
            },
            addVowel(){
                this.letterToAdd = this.vowels[Math.floor(Math.random() * this.vowels.length)]
                this.sendEventBus()
            },
            sendEventBus(){
                eventBus.$emit('add-consonant', this.letterToAdd)
            }
        }
    }
</script>

<style lang="css" scoped>

</style>


const randomElement = consonant[Math.floor(Math.random() * consonant.length)];