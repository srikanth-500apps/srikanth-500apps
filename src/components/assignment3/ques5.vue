<template>
    <div>
        <h1>Question5</h1>
        <button @click="fun1()">click here</button>
    </div>
</template>
<script>
export default{
    name:"QuestioN5",
    data(){
        return{

        }
    },
    methods:{
    fun1() {
        try{
            this.test = this.val * 45;
            console.log("test",this.val);
            
            }
        catch(ReferenceError){
            console.log(ReferenceError);
        }}
}
}
</script>
