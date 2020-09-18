import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'MD Engineering - Главная'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'MD Engineering - О компании'
    },
    component: () => import( '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: 'MD Engineering - Проекты'
    },
    component: () => import( '../views/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'Project',
    meta: {
      title: 'MD Engineering'
    },
    component: Project,
    props: true
  },
  {
    path: '/contacts/',
    name: 'Contacts',
    meta: {
      title: 'MD Engineering - Контакты'
    },
    component: () => import( '../views/Contacts.vue')
  },



]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router
