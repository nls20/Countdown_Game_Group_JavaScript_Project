<template >
  <section >
    <button v-if="gameNumber === 0" @click="gameSelect('Letters')">Letters</button>
    <button v-if="gameNumber === 0" @click="gameSelect('Numbers')">Numbers</button>
    <button v-if="gameNumber === 0" @click="gameSelect('Conundrum')">Conundrum</button>
    <button v-if="gameNumber === 0" @click="gameSelect('Full Game')">Full Game</button>
    <letter-round v-if="gameNumber === 'Letters'" />
    <conundrum v-if="gameNumber === 'Conundrum'" />
    <number-round v-if="gameNumber === 'Numbers'" />
  </section>
</template>

<script>
import LetterRound from '@/components/LettersRound.vue'
import ConundrumRound from '@/components/ConundrumRound.vue'
import NumbersRound from '@/components/NumbersRound.vue'
  export default {
    data(){
      return {
        gameNumber: 0
      }
    },
    components:{
      'letter-round': LetterRound,
      'conundrum': ConundrumRound,
      'number-round': NumbersRound
    },
    methods:{
      gameSelect(gameNumber){
        this.gameNumber = gameNumber
        if (gameNumber === 'Full Game'){
          this.gameNumber = 'Letters'
        }
      }
    }
  }

</script>

<style lang="css" scoped>

* {
  font-family: sans-serif;
}

</style>