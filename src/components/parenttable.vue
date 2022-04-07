<template>
    <div>
        <b-table  :items="items" :fields="fields"></b-table>
        <childform @save="save"></childform>
    </div>
</template>
<script>
import childform from './childform.vue'
export default {
    name:"TablE",
    components:{
        childform,
    },
    data(){
        return {
            Fields:["id","name"],
            items:[
                {id:1, name:"Srikanth"},
                {id:2, name: "Naveen"},
                {id:3, name:"Chaitrika"},
                {id:4, name:"Navya"}
            ]
        }
    },

methods:{
    save(nill){
        this.items=nill.items;
    }
}}
</script>
