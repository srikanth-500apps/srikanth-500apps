<template>
<div>
    <h2 class="p-3 text-center">Disaplay a list of items</h2>

    <b-card v-for="item in items" :key="item.name">
    <td>university_name:{{ item.university_name }}</td><br>
    <td>domains :{{ item.domains }}</td><br>
    <a><td>website_url :{{ item.website_url }}</td></a><br>
    <td>state_province :{{ item.state_province }}</td><br>
    </b-card>
    <input type="text" placeholder="enter your Input">
    <button @click='fun()'>Submit</button>   
     </div>
</template>
<script>
export default{
    name:'QuestioN5',
    data(){
        return{
            fields:['university_name','domains','website_url','state_province'],
            items:[
                {university_name:'Marywood University',domains:'marywood.edu',website_url:'http://www.marywood.edu',state_province:'null'},
                {university_name:'Lindenwood University',domains:'lindenwood.edu',website_url:'http://www.lindenwood.edu/',state_province:'null'},
                {university_name:'University of Petroleum and Energy Studies',domains:'upes.ac.in',website_url:'http://www.lindenwood.edu/',state_province:'Dehradun'},
                {university_name:'Lovely Professional University',domains:'lpu.in',website_url:'https://sullivan.edu/',state_province:'Punjab'}
            ]
        }
    },
    methods:{
        fun(){
let response= new Promise((resolve, reject) => {                 
fetch('http://universities.hipolabs.com/search?country='+this.countryname).then((response) => {                                
 resolve(response.data);          
    }).catch((error) => {                        
            reject(error);
            }); 
            });
   response.then((data) => {console.log("response", data) }).catch((err) => {console.log(err)})  
}
    }
}
</script>