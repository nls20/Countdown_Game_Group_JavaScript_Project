<template>
  <div>
        <section id="background">
            <h1>CONUNDRUM</h1>
            <letters-board :letters="conundrumWord"/>
        </section>
    </div>
</template>

<script>

import LetterBoard from '@/components/Reusable/LetterBoard.vue'
import ConundrumSubmit from '@/components/Conundrum/ConundrumSubmit.vue'

export default {
    data(){
        return {
            conundrumWord: ['f', 'i', 'r', 'e', 'b', 'o', 'a', 'r', 'd']
        }
    },

    methods:{

    },

    mounted:{

    },

    components:{
        'letters-board': LetterBoard,
        'conundrum-submit': ConundrumSubmit,
    }
}
</script>

<style>

</style>