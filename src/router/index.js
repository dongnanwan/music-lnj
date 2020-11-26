import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Home = (resolve) => {
	import('../views/Home.vue').then((module) => {
		resolve(module)
	})
}

const Recommend = (resolve)=>{
	import('../views/Recommend.vue').then((module)=>{
		resolve(module)
	})
}

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect:'/recommend'
	},
	{
		path:'/recommend',
		component:Recommend
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
