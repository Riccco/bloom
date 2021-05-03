import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import * as VueRouter  from 'vue-router'

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes:[
        {path:'/',component: Home},
        {path:'/doc',component : Doc, children:[
            {path:'switch',component:SwitchDemo}
        ]}
    ]
})

router.afterEach(()=> {
    
})