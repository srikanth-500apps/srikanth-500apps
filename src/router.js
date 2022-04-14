import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Hello from './components/HelloWorld.vue'
import HelloWorld from './components/HelloWorld.vue'
import QUE1 from './components/que1.vue'
import QUE2 from './components/que2.vue'
import QUE3 from './components/que3.vue'
//import QUE4 from './components/que4.vue'
import que6 from './components/que6.vue'
import que7 from './components/que7.vue'
import que8 from './components/que8.vue'
import que9 from './components/que9.vue'
import es6 from './components/es6.vue'
import filter from './components/filter.vue'
import websitedata from './components/websitedata.vue'
import parenttable from './components/parenttable.vue'
import emitparent from '../src/components/emitparent.vue'

import ques1 from '../src/components/ques1.vue'
import ques2 from '../src/components/ques2.vue'
import ques3 from '../src/components/ques3.vue'
import ques4 from '../src/components/ques4.vue'
import ques5 from '../src/components/ques5.vue'
import ques6 from '../src/components/ques6(b).vue'
import ques7 from '../src/components/ques7.vue'
import ques8 from '../src/components/ques8.vue'
import ques10 from '../src/components/ques10.vue'
import drop from '../src/components/drop.vue'
import promises from '../src/components/assignment4/promisesconcept.vue'

import q1 from './components/assignment4/q1.vue'
import q3 from '../src/components/assignment4/q3.vue'
import q4 from '../src/components/assignment4/q4.vue'
import q5 from '../src/components/assignment4/q5.vue'
import q7 from '../src/components/assignment4/q7.vue'
import q8 from './components/assignment4/q8.vue'
import q9 from '../src/components/assignment4/q9.vue'
import q10 from '../src/components/assignment4/q10.vue'

import a1 from '../src/components/assignment5/a1.vue'
import a2 from '../src/components/assignment5/a2.vue'
import a3 from '../src/components/assignment5/a3.vue' 
import a4 from '../src/components/assignment5/a4.vue'
import a5 from '../src/components/assignment5/a5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : '/HelloWorld',
    name : "HelloWorld",
    component: HelloWorld    
    },
    
    {    
    path : '/que1',    
    name : "QUE1",    
    component: QUE1    
    },
    
    {    
    path : '/que2',    
    name : "QUE2",    
    component: QUE2    
    },

    {    
    path : '/que3',    
    name : "QUE3",    
    component: QUE3   
    },

      
    //path :import QUE4 from './components/que4.vue'
    //{    
        // path : '/que4b',    
        // name : "QUE4b",    
        // component: que4b 
        // },
        {    
          path : '/que6',    
          name : "que6",
          component: que6
          },
    
    { path: '/', component: Foo },
    { path: '/foo', component: Foo },
    { path: '/hello', component: Hello },
    { path: '/es6', component:es6  },
    { path: '/emitparent', component: emitparent },
   // { path: '/que4b', component:que4b },
    { path: '/que7', component:que7  },
    { path: '/que8', component:que8  },
    { path: '/que9', component:que9  },
    { path: '/filter', component:filter },
    { path: '/websitedata', component:websitedata },
    { path: '/parenttable', component:parenttable },
    { path: '/ques1', component:ques1 },
    { path: '/ques2', component:ques2 },
    { path: '/ques3', component:ques3 },
    { path: '/ques4', component:ques4 },
    { path: '/ques5', component:ques5 },
    { path: '/ques6', component:ques6 },
    { path: '/ques7', component:ques7 },
    { path: '/ques8', component:ques8 },
    { path: '/ques10', component:ques10 },
    { path: '/drop', component:drop},

    { path: '/q1', component:q1},
    { path: '/q3', component:q3},
    { path: '/q4', component:q4},
    { path: '/q5', component:q5},
    { path: '/q7', component:q7},
    { path: '/q8', component:q8},
    { path: '/q9', component:q9},
    { path: '/q10', component:q10},
    { path: '/promises', component:promises},

    { path: '/a1', component:a1},
    { path: '/a2', component:a2},
    { path: '/a3', component:a3},
    { path: '/a4', component:a4},
    { path: '/a5', component:a5},
    
    
  ];

  const router = new VueRouter({
    routes 
  })
  
  export default router