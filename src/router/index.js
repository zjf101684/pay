import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/login', name: 'login', component: Login},
    {path: '/home', name: 'home', component: Home}
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // 登录页面，直接放行
  if (to.path === '/login') return next()
  // 如果现在未登录（没有token），则拦截到登录
  if (!sessionStorage.getItem('token')) return next('/login')
  // 其他情况
  next()
})

export default router
