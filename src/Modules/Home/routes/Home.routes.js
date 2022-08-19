const Home = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.view.vue'),
		meta: {
			ruTitle: 'Главная',
			layout: 'Layout'
		}
	},
]
export default Home