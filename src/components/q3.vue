<template>
    <div>
        <h1>Question3</h1>
        <button @click="f1()">click here</button>
    </div>
</template>
<script>

export default {
    name:"QuestioN3",
    data(){
        return{
            
        }
    },
    methods:{
        f1(){
        var d;
        d = new Date('2022-04-05 6:05:55');
        alert(d.getMinutes() + ':' + d.getSeconds());
        d.setSeconds(d.getSeconds() + 10);
        alert(d.getMinutes() + ':0' + d.getSeconds());
        }

    }
}
</script>
