import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Hello from './components/HelloWorld.vue'
import HelloWorld from './components/HelloWorld.vue'
import QUE1 from './components/que1.vue'
import QUE2 from './components/que2.vue'
import QUE3 from './components/que3.vue'
import QUE4 from './components/que4.vue'
import que4b from './components/que4(2).vue'
import que6 from './components/que6.vue'
import que7 from './components/que7.vue'
import que8 from './components/que8.vue'
import que9 from './components/que9.vue'
import es6 from './components/es6.vue'
import filter from './components/filter.vue'
import websitedata from './components/websitedata.vue'
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

    {    
    path : '/que4',    
    name : "QUE4",    
    component: QUE4   
    },
    {    
        path : '/que4b',    
        name : "QUE4b",    
        component: que4b  
        },
        {    
          path : '/que6',    
          name : "que6",
          component: que6
          },
    
    { path: '/', component: Foo },
    { path: '/foo', component: Foo },
    { path: '/hello', component: Hello },
    { path: '/es6', component:es6  },
    { path: '/que7', component:que7  },
    { path: '/que8', component:que8  },
    { path: '/que9', component:que9  },
    { path: '/filter', component:filter },
    { path: '/websitedata', component:websitedata },
  ];

  const router = new VueRouter({
    routes 
  })
  
  export default router