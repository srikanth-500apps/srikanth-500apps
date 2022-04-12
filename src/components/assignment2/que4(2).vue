<template>
<div class="hello">
<h1>Hello world</h1>
<que4 message="message" name="name" ref="num" number="number"></que4>
<button @click="buttonClick()">submit</button>
</div>
</template>
<script>
import que4 from '/home/agile/Desktop/new project/project1/src/components/que4.vue'
export default {
  name: 'HelloWorld',
components:{  
  que4,
  },
  data(){
    return{
      message:"hi",
      name:"Naveen",
      number:123,
    }
  },
methods:{
   buttonClick(){
     this.$refs.num.func();   
       
     }
   }
}
</script>

