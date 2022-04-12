<template>
<div>
<h2>Question-6</h2>
<h2>child componnet to parent Component using refs</h2>
<child :name="name" ref = "test"/>
<button @click="parent()">click here</button>
</div>
</template>
<script>
import child from '../components/q6(child)'
export default{
    name:'refParent',
components:{
    child,
},
data(){
    return{
   name:"Mantra Technologies",
    }
},
methods:{
    parent(){
      this.$refs.test.child();
      console.log("It's Working in parent using refs");
    }
}
}
</script>
