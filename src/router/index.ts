import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import DefaultLayout from "@/layouts/DefaultLayout.vue";

import BinPage from "@/pages/BinPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'Main',
        path: '/',
        component: BinPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
