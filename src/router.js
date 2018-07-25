import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Results from '@/components/Results.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/results', component: Results}
  ]
})
