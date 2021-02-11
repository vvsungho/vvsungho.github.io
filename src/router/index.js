import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

// 기본 라우팅을 설정합니다.
export const constantRouterMap = [
    {
        path: '/',
        component: layout,
        meta: { title: '메인' },
        children: [
            {
                path: '/main',
                component: () => import('@/views/main'),
                name: '메인',
                meta: { title: '메인' }
            }
        ],
        hidden: true
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
                component: () => import('@/views/main'),
                name: '메인',
                meta: { title: '메인' }
            }
        ],
        hidden: true
    },
]

