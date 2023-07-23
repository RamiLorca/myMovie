<template>

  <v-card>
    <div class="movie-info">
        <div class="img-box">
            <img class="movie-poster" :src="movie.img_url" />
        </div>
        <div class="title-and-summary">
            <h1 id="movie-title" class="mt-5 grey--text text--darken-3">{{ movie.movie_title }}</h1>
            <p class="mt-5 grey--text text--darken-3 subheader">{{ movie.movie_overview }}</p>
            <!-- <v-btn variant="tonal" @click="removeFromList">Remove From Watchlist</v-btn> -->
            <div class="removal-buttons">
                <div v-if="!showConfirmation">
                    <v-btn variant="tonal" @click="showConfirmation = true">Remove From Watchlist</v-btn>
                </div>
                <div v-else class="are-you-sure-prompt">
                    <p>Are you sure?</p>
                    <div class="yes-or-no">
                        <v-btn class="red lighten-1 white--text" @click="removeFromList">Remove</v-btn>
                        <v-btn text small class="blue--text" @click="showConfirmation = false">Cancel</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </v-card>

</template>

<script>
import MovieService from '../services/MovieService'
export default {
    name: 'MovieCard',
    props: {
        movie: Object
    },
    data() {
        return {
            showConfirmation: false
        };
    },
    methods: {
        removeFromList(){
            MovieService.deleteMovie(this.movie.movie_id)
            .then((response) => {
                if(response.status == 200) {
                    console.log("Movie Deleted from WatchList");
                    this.$emit('movieRemoved');
                }
            });
        }
    }
}
</script>

<style scoped>

.movie-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 80%;
    margin: auto;
    padding: 2%;
    gap: 10%;
}

.movie-info div {
    height: 80%;
    width: auto;
    margin: auto;
    max-width: 450px;
}

.movie-info div img {
    width: auto;
    max-height: 400px !important;
    margin: 5%;
    object-fit: cover;
    border-radius: 2% !important;
    box-shadow: 0px 0px 10px .1px #9e9e9e; 
}

.title-and-summary {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.removal-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.are-you-sure-prompt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.yes-or-no {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
}


</style>