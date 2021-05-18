import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import * as VueRouter  from 'vue-router'

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes:[
        {path:'/',component: Home},
        {path:'/doc',component : Doc, children:[
            {path:'',component:SwitchDemo},
            {path:'switch',component:SwitchDemo},
            {path:'Button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo}
        ]},
    ]
})

router.afterEach(()=> {
    
})