<template>

    <div class="mx-3">
        <h2 class="mt-2 grey--text">Saved Movies</h2>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" v-for="movie in wantToWatchMovies" :key="movie.movie_id"  >
                    <v-card :elevation="hover ? 16:2" :class="{'on-hover' : hover}">
                        <router-link :to="`/movie/${movie.movie_id}`">
                            <v-img :src="movie.img_url" alt="" class=""></v-img>
                        </router-link>
                        <v-card-title class="subtitle-2">{{movie.movie_title}}</v-card-title>
                        <v-card-text>
                        <v-row align="center" class="mx-0">
                            <!-- <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="14">
                            </v-rating> -->
                            <!-- <div class="grey--text ml-4">
                                {{movie.vote_average * 10}} % | {{movie.release_date}}
                            </div> -->
                        </v-row>
                        <!-- <div class="my-4 subtitle-2">
                            <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                                {{genreTypeName(genre, index)}}
                            </span>
                        </div> -->
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>  
    </div>

</template>

<script>
import MovieService from '../services/MovieService.js';
export default {
data: function (){
  return {
    wantToWatchMovies: [],
  };
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
}

}

</script>

<style>

</style>