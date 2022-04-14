<template>
<div>
<b-table :items="items" :fields="fields"/>
<emitChild @check="fun"></emitChild>
</div>
</template>
<script>
import emitChild from '../components/emitchild.vue'
export default{
    name:"EmiT",
components:{
    emitChild,
},
    data(){
        return{
          fields:['id','name','dept'] ,
          items:[
              {id:'01',name:'Srikanth',dept:'Developer'},
              {id:'02',name:'Naveen',dept:'HR'},
              {id:'03',name:'Lakshmi',dept:'Developer'},
              {id:'04',name:'Navya',dept:'Sales'},
               ],
          fname:"Srikanth",
          lname:"Munikoti"
        }
    },
    methods:{
        fun(){
            console.log("sample check emit");
        }
    }
}
</script>