<template>
<div>
Iam Child Component
<h4> name:{{name}}</h4>
</div>
</template>
<script>
export default{
    name:'refChilD',
data(){
    return{
    }
},
props:{
    name: String,
},
methods:{
    child(){
        console.log("Iam Child Component")
    }
}
}
</script>
