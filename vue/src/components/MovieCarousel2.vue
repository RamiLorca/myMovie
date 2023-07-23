<template>

  <div class="custom-carousel-container">

        <v-carousel v-if="!isLoading" ref="customCarousel" hide-delimiters show-arrows class="custom-carousel" height="auto" @change="navigationHandler">
            <v-carousel-item
                class="custom-carousel-item"
                v-for="(movie,i) in this.movies"
                :key="i"
                cover
            >
                <div class="movie-info">
                    <div class="img-box">
                        <img class="movie-poster" :src="movie.img_url" />
                    </div>
                    <div class="title-and-summary">
                        <h1 id="movie-title" class="mt-5 grey--text text--darken-3">{{ movie.movie_title }}</h1>
                        <p class="mt-5 grey--text text--darken-3 subheader">{{ movie.movie_overview }}</p>
                        <v-btn variant="tonal" @click="wantToWatch">Add to Watchlist</v-btn>
                    </div>
                </div>

            </v-carousel-item>
        </v-carousel>

        <pulse-loader v-if="isLoading" :loading="loading" :color="color" :margin="margin"></pulse-loader>

    </div> 

</template>

<script>
import MovieService from '../services/MovieService.js';
import PulseLoader from '../components/PulseLoader.vue';

export default {
    components: {
        PulseLoader,
    },
    data() {
        return {
            movies: [],
            isLoading: true,
            current: 0,
            show: false,
        };
    },
    computed: {
        currentMovie() {
            return this.movies[this.$store.state.currentMovieIndex] || null;
        },
    },
    mounted() {
        MovieService.getMoviesByPreferences().then((response) => {
            if(response.data.length > 0){
                this.movies = response.data;
            }
            this.isLoading = false;
        });
    },
    methods: {
        wantToWatch(){
            this.movies[this.current].want_to_watch = true;
            MovieService.addMovie(this.movies[this.current])
            .then((response) => {
                if(response.status == 200) {
                    console.log("Movie Added to WatchList")
                }
            });
        },
        navigationHandler(newIndex) {
            console.log("click arrow")
            this.current = newIndex;
            console.log(this.current)
        },
    }
};
</script>

<style scoped>

.custom-carousel-container {
    display: flex;
    flex-direction: column;
    height: 100% !important;
    justify-content: center;
    align-items: center; 
}

.custom-carousel {
    height: 100% !important;
}

.custom-carousel-item {
    height: 100% !important;
}

.movie-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: auto;
    gap: 10px;
}

.movie-info div {
    height: 80%;
    width: auto;
    margin: auto;
    max-width: 450px;
}

.movie-info div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2% !important;
    box-shadow: 0px 0px 10px .1px #9e9e9e; 
}

.title-and-summary {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

</style>