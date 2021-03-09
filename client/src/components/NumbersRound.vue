<template>
    <section>
        <timer />
        <choose-numbers />
        <numbers-board />

    </section>
</template>

<script>
import Timer from '@/components/Reusable/Timer.vue'
import ChooseNumbers from '@/components/Numbers/ChooseNumbers.vue'
import NumbersBoard from '@/components/Numbers/NumbersBoard.vue'

    export default {
        
        components:{
            'timer': Timer,
            'choose-numbers': ChooseNumbers,
            'numbers-board': NumbersBoard
        }
    }
</script>

<style lang="css" scoped>

</style>