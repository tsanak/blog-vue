import Vue from 'vue'
import Router from 'vue-router'

import BlogHome from '@/components/BlogHome'
import BlogFeed from '@/components/BlogFeed'
import BlogPost from '@/components/BlogPost'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogHome
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/read/:post',
      name: 'single-post',
      props: true,
      component: BlogPost
    },
    {
      path: '/category/:category',
      name: 'post-category',
      props: true,
      component: BlogFeed
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
       }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { savedPosition }
  }
})