import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from "@/views/Home1";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home1 },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
