<template>
    <div>
        <h1>Question1</h1>
        <button @click="myfun()">click here</button>
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
    myfun() {
        try{
          this.count = this.count * 5;
          console.log("printing count",this.count);            
            }
        catch(ReferenceError){
            console.log(ReferenceError);
        }}
}
}
</script>
