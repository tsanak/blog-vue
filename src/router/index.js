import Vue from 'vue'
import Router from 'vue-router'

import BlogHome from '@/components/BlogHome'
import BlogFeed from '@/components/BlogFeed'
import BlogPost from '@/components/BlogPost'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

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
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
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
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { savedPosition }
  }
})