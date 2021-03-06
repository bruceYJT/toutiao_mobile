import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search/')
      },
      {
        path: '/article/:articleId',
        name: 'article',
        component: () => import('@/views/article/'),
        props: true
      },
      {
        path: '/user/profile',
        name: 'user-profile',
        component: () => import('@/views/user-profile')
      },
      { // 用户关注/粉丝
        path: '/user/:userId/follow',
        component: () => import('@/views/user-follow'),
        props: true,
        meta: { requiresAuth: true }
      },
      { // 我的作品、收藏、历史
        name: 'my-article',
        path: '/my-article/:type?',
        component: () => import('@/views/my-article'),
        props: true,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
