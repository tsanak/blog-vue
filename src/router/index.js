import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogFeed from '@/components/BlogFeed'
import BlogPost from '@/components/BlogPost'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogHome
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