<template>
    <div>
        <b-form>
            <b-form-group
                label="name">
                <b-form-input
                v-model="name"
                placeholder=" Enter Full Name"></b-form-input>
                <b-button @submit="onsubmit()" id="fullname" type="submit" variant="primary">Submit</b-button>
            </b-form-group>
        </b-form>            
    </div>
</template>
<script>

export default {
    name:"WelCome",
    data(){
        return{
            fullname:"Srikanth",
        }
    } ,

methods:{
    onsubmit(){
        this.$emit("save",{id:4});
    }
}}
</script>
