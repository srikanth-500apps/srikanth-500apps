<template>
    <div>
        <h1>Question2</h1>
        <b-form-input type="Number" id="mul" placeholder="Enter a Fnumber"></b-form-input>
        <b-form-input type="Number" id="div" placeholder="Enter a Snumber "></b-form-input>
        <b-button @click="f1()">Multiply</b-button><br><br>
        <b-button @click="f2()">Divide</b-button>
        <p id="demo"></p>
    </div>
</template>
<script>
export default {
    name:"QuestioN2",
    data(){
        return{
            multi:[],
            divi:[]
        }
    },
    methods:{
        f1(){
            document.getElementById("demo").innerHTML= document.getElementById("mul").value * document.getElementById("div").value
            return this.multi
        },
        f2(){
            document.getElementById("demo").innerHTML=document.getElementById("mul").value / document.getElementById("div").value
            return this.divi
        }
    }
}
</script>
