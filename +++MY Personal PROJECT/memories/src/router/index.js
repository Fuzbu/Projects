import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/Settings.vue")
  },
  {
    path: "/editor",
    name: "create_article",
    component: () => import("@/views/ArticleCreate.vue")
  },
  {
    path: "/editor/:article-slug",
    name: "edit_article",
    component: () => import("@/views/ArticleEdit.vue")
  },
  {
    path: "/article/:article-slug",
    name: "article",
    component: () => import("@/views/Article.vue")
  },
  {
    path: "/:username",
    name: "profile",
    component: () => import("@/views/Profile.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
