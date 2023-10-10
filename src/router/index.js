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
import store from '@/store'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/category', component: Category },
        { path: '/user', component: User }
      ],
      redirect: '/home'
    },
    { path: '/search', component: Search },
    { path: '/searchList', component: SearchList },
    { path: '/prodetail/:id', component: Prodetail },
    // 动态路由传参，需要知道具体是哪个商品
    { path: '/pay', component: Pay },
    { path: '/myorder', component: Myorder }
  ]
})
// 全局前置导航守卫
// to: 到哪去
// from：从哪来
// next: 是否放行
// next（）直接放行
// next(路径) 拦截到next里面的路径

// 定义数组，存取需要权限访问的页面
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (!authUrls.includes(to.path)) {
    next()
  }
  // 权限页面，需要判断token
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
