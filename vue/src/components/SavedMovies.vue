<template>

    <div class="main">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" v-for="movie in wantToWatchMovies" :key="movie.movie_id">
                    <v-hover v-slot="{hover}" open-delay="100">
                        <v-card :elevation="hover ? 16:2" :class="{'on-hover' : hover}" @click="showMovieDetails(movie)">
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

        <transition name="fade">
            <v-dialog v-model="showOverlay" persistent max-width="800">
                <v-card class="movie-card-overlay">
                    <MovieCard v-if="selectedMovie" :movie="selectedMovie" @close="closeOverlay" @movieRemoved="onMovieRemoved"/>
                    <v-card-actions>
                        <v-btn icon @click="showOverlay = false">
                            <v-icon class="close-overlay-icon">mdi-close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </transition>

    </div>

</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import MovieService from '../services/MovieService.js';

export default {
    data() {
        return {
            wantToWatchMovies: {},
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
            .catch(error => {
                // eslint-disable-next-line no-console
                console.error("Error fetching wantToWatchMovies:", error);
            });
        },
        showMovieDetails(movie) {
            this.selectedMovie = movie;
            this.showOverlay = true;
        },
        closeOverlay() {
            this.selectedMovie = null;
            this.showOverlay = false;
        },
        onMovieRemoved() {
            this.showOverlay = false;
            this.fetchWantToWatchMovies();
        },
    }
}

</script>

<style scoped>

.main{
    margin: 5% auto 5% auto;
}

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
  max-width: 900px;
  max-height: 90%;
  overflow-y: auto;
}

.v-card__actions {
  position: absolute;
  top: 0;
  right: 0;
}

.custom-dialog.v-dialog{
    margin: 10px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.close-overlay-icon {

    background-color: white;
    border-radius: 100%;
}

@media (max-width: 800px) {
    .movie-card-overlay {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
    }
}

</style>