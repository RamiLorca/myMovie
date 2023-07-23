import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import Home2 from '../views/Home2.vue'
import Genres from '../views/Genres.vue'
import WatchList from '../views/WatchList.vue'
import MovieCard from '../components/MovieCard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/',
    name: 'Home2',
    component: Home2,
    meta: {
      requiresAuth: false
      }
    },
    {
      path: '/genres',
      name: 'Genres',
      component: Genres,
      meta: {
        requiresAuth: false
        }
    },
    {
      path: '/watchlist',
      name: 'WatchList',
      component: WatchList,
      meta: {
        requiresAuth: false
        }
    },
    {
      path: '/watchlist/:movieId',
      name: 'MovieDetails',
      component: MovieCard,
      meta: {
        requiresAuth: false
        }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    next();
  }
});

export default router;
