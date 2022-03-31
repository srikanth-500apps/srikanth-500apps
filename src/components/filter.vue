<template>
    <div>
        <h1>ES6 topics </h1>
        <h3>{{students}}</h3>
        <button @click="fun()">click</button>
        <button @click="f1()">for Each</button>
        <button @click="f2()">map</button>
        <button @click="f3()">includes</button>
    </div>
</template>
<script>

export default {
    name:"FilTer",  
    data(){
        return{
         students  :[
            { name: 'Srikanth', grade: 96 },
            { name: 'Naveen', grade: 84 },
            { name: 'Chaitrika', grade: 80 },
            { name: 'Navya', grade: 95 },
            { name: 'Sukanya', grade: 90 },
],
         array :[4,7,2,9,6,3]        
        }
    },


methods:{
    fun(){
      var studentGrades = this.students.filter(student => {return  student.grade > 90});
    console.log(studentGrades);   
    },
    f1(){
         this.array.forEach((arrayItems,index) => {
            console.log(arrayItems,index)
        })    
   
    },
    f2(){
         this.array.map((arrayItems,index) => {
             if (index==2)return 0
            console.log(arrayItems,index)
        })    
   
    },
    f3(){
         this.array.includes(() => {
             2
             
            console.log()
        })    
   
    }

}
}

</script>