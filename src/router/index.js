import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import( '../views/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'Project',
    component: Project,
    props: true
  },
  {
    path: '/partners/',
    name: 'Partners',
    component: () => import( '../views/Partners.vue')
  },
  {
    path: '/contacts/',
    name: 'Contacts',
    component: () => import( '../views/Contacts.vue')
  },



]

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router
