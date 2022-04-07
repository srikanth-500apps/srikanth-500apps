<template>
<div>
    <b-table :items="empDet" :fields="fields"></b-table>
<b-dropdown id="dropdown-1" text="Click here to check" class="m-md-2">
<b-dropdown-item @click="first()">open</b-dropdown-item>
<b-dropdown-item @click="sec()">pending</b-dropdown-item>
<b-dropdown-item @click="thi()">closed</b-dropdown-item>
</b-dropdown>
</div>
</template>
<script>
export default {
name:'dropDown',
data(){
return{
empDet:[
{email: "Eliseo@gardner.biz",id: 1,name: "id labore ex et quamlaborum",status:"open"},
{email: "Jayne_Kuhic@sydney.com",id: 2,name: "quovero reiciendis velit similiqueearum",status:"pending"},
{email: "Nikita@garfield.biz",id: 3,name:"odioadipisci rerum autanimi",status:"closed"},
{email: "Lew@alysha.tv",id: 4,name: "alias odio sit",status:"pending"}
],
fields:['id','email','name','status']
}
},
methods:{
first(){
let emp = this.empDet.map((arrItem)=>{
if(arrItem.status=="open")
return arrItem
})
console.log(emp)
},
sec(){
let emp = this.empDet.map((arrItem)=>{
if(arrItem.status=="pending")
return arrItem
})
console.log(emp)
},
thi(){
let emp = this.empDet.map((arrItem)=>{
if(arrItem.status=="closed")
return arrItem
})
console.log(emp)
}
}
}
</script>



