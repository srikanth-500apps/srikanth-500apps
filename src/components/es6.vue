<template>
    <div>
        <h1>ES6 topics </h1>
        <h3>{{name}}</h3>
        <button @click="fun()">change_name</button>
    </div>
</template>
<script>

export default {
    name:"SriKanth",  
    data(){
        return{
            name:"mantra",
        }
    },

methods:{
    fun(){
        this.name="Technologies"; 
        return this.name ;   
    }
}}

</script>
