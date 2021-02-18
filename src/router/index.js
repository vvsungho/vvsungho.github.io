import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

// 기본 라우팅을 설정합니다.
export const constantRouterMap = [
    {
        path: '/',
        component: () => import('@/views/home'),
        name: 'home',
        meta: { title: '메인' }
    },
    {
        path: '/about',
        component: () => import('@/views/about'),
        name: 'about',
        meta: { title: 'about' }
    },
    {
        path: '/posts',
        component: () => import('@/views/post/posts'),
        name: 'posts',
        meta: { title: '게시글' }
    },
    {
        path: '/post/register',
        component: () => import('@/views/post/register'),
        name: 'postRegster',
        meta: { title: '게시글' }
    },
    {
        path: '/post/:key',
        component: () => import('@/views/post/detail'),
        name: 'postDetail',
        meta: { title: '게시' }
    }
]

export default new Router({
    mode: 'history',
    routes: constantRouterMap
})

export const asyncRouterMap = [
    {
        path: '/',
        component: layout,
        meta: { title: '메인' },
        children: [
            {
                path: '/',
                component: () => import('@/views/home'),
                name: '메인',
                meta: { title: '메인' }
            }
        ],
        hidden: true
    },
]

