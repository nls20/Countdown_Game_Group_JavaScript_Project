<template>
    <div>
        <button @click="numberOne" >{{numbers[0]}}</button>
        <button @click="numberTwo" >{{numbers[1]}}</button>
        <button @click="numberThree" >{{numbers[2]}}</button>
        <button @click="numberFour" >{{numbers[3]}}</button>
        <button @click="numberFive" >{{numbers[4]}}</button>
        <button @click="numberSix" >{{numbers[5]}}</button>
        <button @click="add" >+</button>
        <button @click="minus" >-</button>
        <button @click="times" >X</button>
        <button @click="divide" >/</button>
        <button @click="equals" >Submit Answer</button>

    </div>
</template>

<script>
    export default {
        props: ['numbers'],

        data(){
            return {
                calculation: "",
                operator: "",
                firstNumber: 0,
                mathOperators: {
                '+': function(x,y){return x+y}
                }
            }
        },
        
        methods:{

            divide(){
                this.calculation += ' / '
                this.operator = true
            },
            add(){
                this.calculation += ' + '
                this.operator = '+'
            },
            minus(){
                this.calculation += ' - '
                this.operator = true
            },
            times(){
                this.calculation += ' * '
                this.operator = true

            },
            numberOne(){
                this.calculation += this.numbers[0]
                if (this.operator.length > 0){
                    this.equals(this.numbers[0])
                } else {
                    this.firstNumber = this.numbers[0]
                }
                this.operator = false
            },
            numberTwo(){
                this.calculation += this.numbers[1]
                if (this.operator.length > 0){
                    this.equals(this.numbers[1])
                } else {
                    this.firstNumber = this.numbers[0]
                }
                this.operator = false
            },
            numberThree(){
                this.calculation += this.numbers[2]
                if (this.operator.length > 0){
                    this.equals(this.numbers[2])
                } else {
                    this.firstNumber = this.numbers[0]
                }
                this.operator = false

            },
            numberFour(){
                this.calculation+=this.numbers[3]
                if (this.operator.length > 0){
                    this.equals(this.numbers[3])
                } else {
                    this.firstNumber = this.numbers[0]
                }
                this.operator = false

            },
            numberFive(){
                this.calculation+=this.numbers[4]
                if (this.operator.length > 0){
                    this.equals(this.numbers[4])
                } else {
                    this.firstNumber = this.numbers[0]
                }
                this.operator = false

            },
            numberSix(){
                this.calculation+=this.numbers[5]
                if (this.operator.length > 0){
                    this.equals(this.numbers[5])
                } else {
                    this.firstNumber = this.numbers[0]
                }
                this.operator = false

            },
            equals(){
                let test = eval(this.calculation)
                this.calculation = test.toString()
                console.log(test); 
            }
        }
        
    }
</script>

<style lang="css" scoped>

</style>