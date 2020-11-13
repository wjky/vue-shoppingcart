import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
import home from '@/components/Home.vue';
import list from '@/components/List.vue';
import cart from '@/components/Cart.vue';

const router = new VueRouter({
    mode:'history',
    routes:[
        {path:'/home',component:home},
        {path:'/',redirect:'/home'},
        {path:'/list',component:list},
        {path:'/cart',component:cart},
    ]
})

export default router