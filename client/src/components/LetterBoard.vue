<template>
    <section >
        <div id="letter-grid">
            <p id="first-letter">A</p>
            <p id="second-letter"></p>
            <p id="third-letter"></p>
            <p id="fourth-letter"></p>
            <p id="fifth-letter"></p>
            <p id="sixth-letter"></p>
            <p id="seventh-letter"></p>
            <p id="eighth-letter"></p>
            <p id="ninth-letter"></p>
        </div>

  </section>
</template>

<script>
    export default {
        data(){
            return {
                selected: true
            }
        }
    }
</script>

<style lang="css" scoped>

#letter-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#letter-grid> p{
    margin: 6px;
    background-color: blue;
    color: white;
    padding:8px;
    border-radius: 4px;
}



</style>