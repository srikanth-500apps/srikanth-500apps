<template>
<div><h1>Question 5</h1>
<label fName>fname</label>
<input type="text" id="fn"><br><br>
<label lName>lName</label>
<input type="text" id="ln"><br><br>
<button @click="f1()">submit</button>
<p id="demo"></p>
</div>
</template>
<script>
export default{
    name:"QuestioN5",
    data(){
        return{
            
        }
    },
    methods: {
        
        f1(){
            document.getElementById("demo").innerHTML= document.getElementById("fn").value+ " " + document.getElementById("ln").value
        },
       
    },
}
</script>