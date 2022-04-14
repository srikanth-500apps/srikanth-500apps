<template>
<div>
    <h1>Question1</h1>
    <button @click="myfunc()">Adding</button>
</div>
</template>
<script>
export default{
    name:"QuestioN1",
    data(){
        return{
            list:[1,2,3,7,8,6,9,10],
        }
    },
    methods: {
        myfunc(){
            this.list.splice(5,0,4,5)
              console.log(this.list)
        }
    },
}
</script>