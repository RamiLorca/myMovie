<template>

  <v-card>
    <div class="movie-info">
        <div class="img-box">
            <img class="movie-poster" :src="movie.img_url" />
        </div>
        <div class="title-and-summary">
            <h1 id="movie-title" class="mt-0 grey--text text--darken-3">{{ movie.movie_title }}</h1>
            <p class="grey--text mx-0">{{movie.release_date ? movie.release_date.slice(0, 4) : ''}}</p>
            <div class="rating">
                <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="20"></v-rating>
                <div class="grey--text ml-0">{{movie.vote_average * 10}} %</div>
            </div> 
            <p class="mt-5 grey--text text--darken-3 subheader">{{ movie.movie_overview }}</p>
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
                    this.$emit('movieRemoved');
                }
            });
        }
    }
}
</script>

<style scoped>

.v-card {
    box-shadow: none !important;
}

.movie-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 80%;
    width: 80%;
    margin: auto;
    padding: 2%;
    gap: 10%;
}

.movie-info div {
    width: auto;
    margin: auto;
    max-width: 450px;
}

.img-box {
    width: 100% !important;
}

.movie-poster {
    width: auto;
    max-height: 400px !important;
    margin: 5% auto;
    object-fit: cover;
    border-radius: 2% !important;
    box-shadow: 0px 0px 10px .1px #9e9e9e; 
}

.title-and-summary {
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    gap: 3%;
    max-height: 400px !important;
    margin: 5% auto;
}

.subheader {
  max-height: 300px;
  overflow-y: auto; 
}

.removal-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
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

.rating {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px; 
    margin-left: 0 !important;
    margin: 0 !important;
}

@media (max-width: 800px) {

    .movie-info {
        display: flex;
        flex-direction: column;
        height: max-content;
        width: 100%;
        margin: 0;
        padding: 0;
        gap: 0;
    }

    .title-and-summary {
        padding: 4%;
    }
    
    .img-box {
        width: 90% !important;
    }

    .movie-poster {
        width: 100%;
        height: 100%;
        justify-content: center;
        object-fit: cover;
        object-position: top;
        border-radius: 0%;
        margin: 0;
        padding: 0;
    }

    .rating {
        justify-content: center;
    }

    .rating div {
        margin-left: 0 !important;
    }

    .removal-buttons {
        margin: auto;
        padding: 0;
    }

    .yes-or-no {
        gap: 2px !important;
        margin: auto 20% !important;
    }

    .subheader {
        max-height: fit-content;
        overflow-y: visible; 
    }

}


</style>