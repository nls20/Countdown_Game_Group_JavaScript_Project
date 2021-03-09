<template>
    <div>
        <h3>Choose number of large numbers</h3>
        <div id="choose-numbers">
            <button class="large-button" @click="setLargeNumber(0)">0</button>
            <button class="large-button" @click="setLargeNumber(1)">1</button>
            <button class="large-button" @click="setLargeNumber(2)">2</button>
            <button class="large-button" @click="setLargeNumber(3)">3</button>
            <button class="large-button" @click="setLargeNumber(4)">4</button>
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

#choose-numbers{
    display: flex;
    flex-wrap: wrap;
}

.large-button {
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
    margin: 5px 10px;
    width: 70px;
    height: 40px
}

</style>