<template>

    <div class="mx-3">

        <h2 class="mt-2 grey--text">Saved Movies</h2>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" v-for="movie in wantToWatchMovies" :key="movie.movie_id">
                    <v-hover v-slot="{hover}" open-delay="100">
                        <v-card :elevation="hover ? 16:2" :class="{'on-hover' : hover}" @click="showMovieDetails(movie)">
                            <!-- <router-link :to="`/movie/${movie.movie_id}`">
                                <v-img :src="movie.img_url" alt="" class="movie-image"></v-img>
                            </router-link> -->
                            <v-img :src="movie.img_url" alt="" class="movie-image"></v-img>
                            <div style="min-width: 0">              
                                <v-card-title class="subtitle-2">
                                    <div class="ellipsis-title">{{movie.movie_title}}</div>
                                </v-card-title>        
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container> 

        <v-dialog v-model="showOverlay" persistent max-width="800">
            <v-card class="movie-card-overlay">
                <MovieCard v-if="selectedMovie" :movie="selectedMovie" @close="closeOverlay"/>
                <v-card-actions>
                    <v-btn @click="closeOverlay">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>

</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import MovieService from '../services/MovieService.js';

export default {
    data() {
        return {
            wantToWatchMovies: [],
            showOverlay: false,
            selectedMovie: null,
        };
    },
    components: {
        MovieCard,
    },
    mounted(){
        this.fetchWantToWatchMovies();
    },
    methods: {
        fetchWantToWatchMovies() {
            MovieService.getWantToWatchMovies()
            .then(response => {
                if(response.status == 200){
                this.wantToWatchMovies = response.data;
                }
            })
        },
        showMovieDetails(movie) {
            this.selectedMovie = movie;
            this.showOverlay = true;
        },
        closeOverlay() {
            this.selectedMovie = null;
            this.showOverlay = false;
        },
    }
}

</script>

<style scoped>

.v-card {
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 2%;
}

.movie-image {
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
}

.ellipsis-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-card-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
}

.v-dialog__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>