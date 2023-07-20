import axios from 'axios';

export default { 
    
    addMovie(movie) {
        return axios.post('/movies/add', movie);
    },
    getMoviesByPreferences() {
        return axios.get('/movies/preferences');
    },
    getMoviesById(id){
        return axios.get(`/movies/${id}`)
    },
    getWatchedMovies(){
        return axios.get(`/movies/watched`)
    },
    getWantToWatchMovies(){
        return axios.get(`/movies/want-to-watch`)
    },
     getRatings(){
         return axios.get(`/movies/movie-rating`)
    }

}




