<template>
<div>
<button @click="getfullname()">Click</button>
</div>
</template>
<script>
export default{
name:'computeD',
data(){
return{
firstname:'',
lastname:''
}
},
methods:{
getfullname(){
let fullname = this.firstname+"_"+this.lastname
document.write("full_name : "+fullname);
}
}
}
</script>




