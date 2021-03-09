<template>
    <section >
        
        <div id="letter-grid">
            <p id="first-letter">{{letters[0]}}</p>
            <p id="second-letter">{{letters[1]}}</p>
            <p id="third-letter">{{letters[2]}}</p>
            <p id="fourth-letter">{{letters[3]}}</p>
            <p id="fifth-letter">{{letters[4]}}</p>
            <p id="sixth-letter">{{letters[5]}}</p>
            <p id="seventh-letter">{{letters[6]}}</p>
            <p id="eighth-letter">{{letters[7]}}</p>
            <p id="ninth-letter">{{letters[8]}}</p>
        </div>

  </section>
</template>

<script>
    export default {
        name: 'letter-board',
        props: ['letters'],
        data(){
            return {
                selected: true
            }
        }
    }
</script>

<style lang="css" scoped>

section{
    display: flex;
    justify-content: center;
}

#letter-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#letter-grid> p{
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

#letter-grid {
    background-color: white;
    border: solid darkblue 2px;
    border-width: 4px;
    width: 668px;
}


</style>