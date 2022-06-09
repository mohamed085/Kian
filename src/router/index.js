import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from "@/views/Home1";
import Home2 from "@/views/Home2";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home1 },
    { path: '/home', component: Home2 },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
