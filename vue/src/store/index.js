import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MovieService from '../services/MovieService'

Vue.use(Vuex)

const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    movies: [],
    watchListMovies: [],
    currentMovieIndex: Math.floor(Math.random() * 20)
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_WATCHLIST_MOVIES(state, movies) {
      state.watchListMovies = movies;
    },
    SET_CURRENT_MOVIE_INDEX(state, index) {
      state.currentMovieIndex = index;
    }
  },
  actions: {
    getMoviesByGenre({ commit }, movieGenre) {
      return axios.get(`/genre/${movieGenre}`)
      .then(response => {
        commit('SET_MOVIES', response.data);
      });
    },
    getWatchListMovies({ commit }) {
      return MovieService.getWantToWatchMovies()
      .then((response) => {
        if(response.status === 200) {
          commit('SET_WATCHLIST_MOVIES', response.data);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      })
    }
  }
});
