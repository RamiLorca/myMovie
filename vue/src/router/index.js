import Vue from 'vue'
import Router from 'vue-router'
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
    },
    {
      path: '/genres',
      name: 'Genres',
      component: Genres,
    },
    {
      path: '/watchlist',
      name: 'WatchList',
      component: WatchList,
    },
    {
      path: '/watchlist/:movieId',
      name: 'MovieDetails',
      component: MovieCard,
    },
  ]
})

export default router;
