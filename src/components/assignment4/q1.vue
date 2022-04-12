//<template>
    <div>
        <h1>Quetion1</h1>
        <label for="name">name</label>
        <input type="text" id="demo" >
        <button @click="f1()">search</button>
    </div>
</template>
<script>
export default {
    name:"QueS1",
    data(){
    return{
         array_names : ["agile","crm","mantra","technologies","500apps","infinity"]
        }
   },
   methods:{
       f1(){
var i = document.getElementById("demo").value
if(this.array_names.includes( i)){
console.log("success");
}
else{
console.log("fail");
}
}
},
}
</script>
