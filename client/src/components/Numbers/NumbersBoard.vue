<template>
    <section >  
        <h3>{{targetNumber}}</h3>      
        <div id="number-grid">
            <p id="first-number">{{numbers[0]}}</p>
            <p id="second-number">{{numbers[1]}}</p>
            <p id="third-number">{{numbers[2]}}</p>
            <p id="fourth-number">{{numbers[3]}}</p>
            <p id="fifth-number">{{numbers[4]}}</p>
            <p id="sixth-number">{{numbers[5]}}</p>
        </div>

  </section>
</template>

<script>
    export default {
        name: 'number-board',
        props: ['numbers', 'targetNumber'],
        data(){
            return {

            }
        }
    }
</script>

<style lang="css" scoped>

section{
    display: flex;
    justify-content: center;
}
h
#number-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#number-grid> p{
    display: grid;
    margin: 4px;
    background-color: blue;
    color: white;
    padding:8px;
    width: 50px;
    height: 50px;
    font-size: xx-large;
    justify-content: center;
    align-items: center;
}

#number-grid {
    background-color: white;
    border: solid darkblue 2px;
    border-width: 4px;
    width: 668px;
}

</style>