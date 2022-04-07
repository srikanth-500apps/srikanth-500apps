<template>
<div>
    <h1>Question 8</h1>
    <p @click="myfunc()"> Click to display the text</P>
    <textarea id="ta" placeholder="Type here to edit the text"> </textarea>
</div>
</template>
<script>
export default{
name:"QuestioN8",
data(){
return{
a:"",
}
},
methods:{
myfunc(){
this.a = ''+document.getElementById("ta").value
document.write(this.a)
}
}
}
</script>