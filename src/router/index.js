import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import Home from '../Modules/Home/routes/Home.routes'

const routes = [].concat(
	Home
)

const router = createRouter({

	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router