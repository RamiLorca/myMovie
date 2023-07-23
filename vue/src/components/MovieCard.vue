<template>

  <v-card>
    <div class="movie-info">
        <div class="img-box">
            <img class="movie-poster" :src="movie.img_url" />
        </div>
        <div class="title-and-summary">
            <h1 id="movie-title" class="mt-5 grey--text text--darken-3">{{ movie.movie_title }}</h1>
            <p class="mt-5 grey--text text--darken-3 subheader">{{ movie.movie_overview }}</p>
            <v-btn variant="tonal" @click="removeFromList">Remove From Watchlist</v-btn>
        </div>
    </div>
  </v-card>

</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object
    },
    methods: {
        removeFromList(){
            //add code for deleting movie from database + refreshing watch list
        }
    }
}
</script>

<style>

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