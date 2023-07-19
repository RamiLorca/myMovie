<template>
  <div id="example">
    
    <h2 class="mx-3 grey--text">
        Check Out These Movies!
    </h2>

    <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :key=this.movies[length]
        :listData=this.movies
        :height="500"
    >
        <slide :index="i" :key="i" v-for="(movie, i) in this.movies">
            <figure>
                <img :src="movie.img_url">
                <figcaption>
                    <v-btn :to="`/movie/${movie.id}`" text color="white">{{ movie.movie_title }}</v-btn>
                </figcaption>
            </figure>
        </slide>
    </carousel-3d>

  </div>
</template>

<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';
import MovieService from '../services/MovieService.js';

export default {
    data() {
        return {
            movies: [],
            current: 0,
            show: false,
        };
    },
    components: {
        Carousel3d,
        Slide,
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
        });
    },
};
</script>

<style scoped>
    .carousel-3d-container figure {
        margin: 0;
    }
    
    .carousel-3d-container figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        bottom: 0;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
    }
    
    .next span,
    .prev span {
        color: red;
    }

</style>