/* eslint-disable require-await */
import {createRouter, createWebHashHistory} from 'vue-router';
const routes = [
	{
		path: '/',
		component: () => import('../components/HelloWorld.vue'),
	},
	{
		path: '/test',
		component: () => import('@/components/test.vue'),
	},
];

export default createRouter({
	history: createWebHashHistory(),
	routes,
});
