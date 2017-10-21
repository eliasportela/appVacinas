import CcLogin from '../templates/login.vue'
import CcHome from '../templates/home.vue'
import CcSobre from '../templates/sobre.vue'
import CcVacinas from '../templates/vacinas.vue'
import CcCampanhas from '../templates/campanhas.vue'
import CcLocais from '../templates/locais.vue'
import CcAvisos from '../templates/avisos.vue'
import CcCalendario from '../templates/calendario.vue'

export default [
	{
		path: '/home',
		component: CcHome
	},
	{
		path: '/',
		component: CcLogin
	},
	{
		path: '/sobre',
		component: CcSobre
	},
	{
		path: '/vacinas',
		component: CcVacinas
	},
	{
		path: '/campanhas',
		component: CcCampanhas
	},
	{
		path: '/locais',
		component: CcLocais
	},
	{
		path: '/avisos',
		component: CcAvisos
	},
	{
		path: '/calendario',
		component: CcCalendario
	},
	{ path: '*', redirect: '/' },

]