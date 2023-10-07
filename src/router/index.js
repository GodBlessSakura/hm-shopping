import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import Prodetail from '@/views/prodetail/index.vue'
import Pay from '@/views/pay/index.vue'
import Myorder from '@/views/myorder/index.vue'
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {
      path: '/',
      component: Layout,
      children: [
        {path: '/home', component: Home},
        {path: '/cart', component: Cart},
        {path: '/category', component: Category},
        {path: '/user', component: User}
      ],
      redirect: '/home'
    },
    {path: '/search', component: Search},
    {path: '/searchList', component: SearchList},
    {path: '/prodetail/:id', component: Prodetail},
    // 动态路由传参，需要知道具体是哪个商品
    {path: '/pay', component: Pay},
    {path: '/myorder', component: Myorder}
  ]
})

export default router
