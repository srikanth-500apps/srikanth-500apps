<template>
    <div>
        <h1>Question6</h1>
        <ques6 :name="name" :id="id" :grades="grades" :gender="gender" ref="demo"></ques6>
        <button @click="myfunc()">click</button>      
    </div>
</template>
<script>
import ques6 from '../components/ques6.vue'
export default {
    name:"QuestioNb",
    component:{
        name:ques6,
    },
    data(){
        return{
            name:"Rama rao",
            id:"1",
            grades:"65",
            gender:"Male"
        }
    },
    methods:{
        myfunc(){
            this.$refs.demo.first();                        
        }
    }

}
</script>
