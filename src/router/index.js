import Vue from 'vue'
import Router from 'vue-router'
import DisplayHome from '@/components/Home/DisplayHome.vue'
import ShowBlog from '@/components/Blog/ShowBlog.vue'
import SimpleBlog from '@/components/Blog/SimpleBlog.vue'
import About from '@/components/Contact/About.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'DisplayHome',
        component: DisplayHome,
        meta: {
            title: "Home"
        },
    }, {
        path: '/blog',
        name: 'ShowBlog',
        component: ShowBlog,
        meta: {
            title: "Blog"
        },
    }, {
        path: '/blog/detail/:id',
        name: '',
        component: SimpleBlog
    }, {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: "About"
        },
    }]
})

export default router

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next()
})