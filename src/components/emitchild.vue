<template>
<div>
<p @click="sample">smaple click</p>
      


</div>
</template>
<script>


export default{
   name:"emitEvent",
   components:{
   },
   data(){
       return{
      fields:['id','name','dept'] ,
          items:[
              {id:'01',name:'Navya',dept:'Developer'},
              {id:'02',name:'Rani',dept:'HR'},
              {id:'03',name:'Lakshmi',dept:'Developer'},
              {id:'04',name:'anasuya',dept:'Sales'},
               ],
          fname:"Navya",
          lname:"Doddi"
       }
   },
   methods:{
       sample(){
           this.$emit("check")
       }
   }
}
</script>