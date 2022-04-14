<template>
    <div>
        <h1>Refs method</h1>
        <h2> name:{{name}}</h2>
        <h2> id:{{id}}</h2>
        <h2> grades:{{grades}}</h2>
        <h2> gender:{{gender}}</h2>
    </div>
</template>
<script>

export default {
    name:"Question6N",
    components:{

    },
    props:{
        name:String,
        id:Number,
        grades:Number,
        gender:String,
    },
    methods:{
        first(){
            alert("Hi Srikanth")
        }
    }
}
</script>
