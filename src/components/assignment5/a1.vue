<template>
    <div>
        <h1>Question1</h1>
        <b-table :items="Users" :fields="fields"></b-table>
        <button @click="f1()">clickhere</button>
        <ol>
        <li v-bind="Users in Users | reverse" track-by="id"></li></ol>
    </div>
</template>
<script>
export default {
    name:"QuestioN1",
    data(){
        return{
            Users :[{name:"500apps", id:1},
                    {name:"Technologies",id:2},
                    {name:"Agile",id:3},
                    {name:"Mantra",id:4},
                    {name:"Clockly",id:5},
                    {name:"CRM",id:6},
                    {name:"500apps",id:7}],
            fields:["id","name"]
        }
    },
    methods:{
        f1(){
            this.Users.reverse()
            return this.Users
        }
    }
}

</script>
