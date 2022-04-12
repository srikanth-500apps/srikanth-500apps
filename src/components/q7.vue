<template>
    <div>
        <h1>Question7</h1>
        <button @click="fun()">click here</button>
        <button @click="myfunc()">arrow key</button>
    </div>
</template>
<script>
export default {
    name:"QuestioN7",
    data(){
        return{
                        
        }
    },
    methods:{
        fun(){
            document.write("this is 2")
            alert("this is 2")
        }

    }
   
}
</script>
