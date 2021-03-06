import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home/Index.vue';
import View from '../views/Home/View.vue';
import Snippet from '../views/Snippet.vue';
import Auth from '../views/Auth.vue';
import PageNotFound from '../views/404.vue';
import Explore from '../views/Explore.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'view/:fileId',
        name: 'view',
        component: View,
      },
    ],
  },
  {
    path: '/snippet/:fileId',
    name: 'snippet',
    component: Snippet,
    meta: {
      hideSidebar: true,
    },
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    meta: {
      hideSidebar: true,
    },
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PageNotFound,
    meta: {
      hideSidebar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  store.commit('updateState', { key: 'historyState', value: history.state });
});

export default router;
