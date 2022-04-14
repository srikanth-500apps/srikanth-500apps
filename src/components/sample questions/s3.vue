<template>
    <div>
        <h1>HI</h1>
        <button type="submit" @click="fun">Fun</button>
    </div>
</template>

<script>
export default{
    name:"QuE3",
    data(){
        return{
            a:[1,1,2,2,2,3,4,3,2],
        }
    },
    methods:{
        fun(){
       this.a = [...new Set(this.a)]
       document.write(this.a)
    }
    }
}


</script>
