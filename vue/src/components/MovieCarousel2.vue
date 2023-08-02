<template>

  <div class="custom-carousel-container">

        <v-carousel v-if="!isLoading" ref="customCarousel" hide-delimiters show-arrows class="custom-carousel" height="100%" @change="carouselIndexChanged">
            <v-carousel-item
                class="custom-carousel-item"
                v-for="movie in movies"
                :key="movie.id"
                cover
            >
                <div class="movie-info">

                    <div class="img-box">
                        <img class="movie-poster" :src="movie.img_url" />
                    </div>

                    <div class="contents-and-button">

                        <div class="title-and-summary">
                            <h1 id="movie-title" class="mt-5 grey--text text--darken-3">{{ movie.movie_title }}</h1>
                            <p class="grey--text ml-0">{{movie.release_date ? movie.release_date.slice(0, 4) : ''}}</p>

                            
                            <div class="rating">
                                <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="20"></v-rating>
                                <div class="grey--text ml-4">{{movie.vote_average * 10}} %</div>
                            </div>

                            <p class="mt-5 grey--text text--darken-3 subheader">{{ movie.movie_overview }}</p> 
                            
                            <v-btn
                            v-if="!movie.want_to_watch"
                                id="add-button"
                                tonal
                                @click="wantToWatch(movie)"
                                :loading="buttonLoading"
                            >
                            Add to Watchlist
                            </v-btn>

                            <v-btn
                                v-else
                                id="added-button"
                                text
                            >
                                Added
                                <v-icon dark right>check</v-icon>
                            </v-btn>    
                        </div>
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>

        <pulse-loader id="pulse-loader" v-if="isLoading" :loading="isLoading" :color="color" :margin="margin"></pulse-loader>
        

    </div> 

</template>

<script>
import MovieService from '../services/MovieService.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

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
            buttonLoading: false,
            color: "#fe0d02",
            margin: "10px"
        };
    },
    computed: {
        currentMovie() {
            return this.movies[this.$store.state.currentMovieIndex] || null;
        },
    },
    async mounted() {
        //prior non-async mounted functions:

        // MovieService.getMoviesByPreferences().then((response) => {
        //     if(response.data.length > 0){
        //         this.movies = response.data;
        //     }
        //     this.isLoading = false;
        // });

        // MovieService.getMoviesByPreferences()
        // .then((response) => {
        // if (response.data.length > 0) {
        //     this.movies = response.data;
        // }
        // this.isLoading = false;
        // })
        // .catch((error) => {
        // console.error("Error fetching movies:", error);
        // this.isLoading = false;
        // });

    let retryCount = 0;
    const maxRetries = 3; 

    while (retryCount < maxRetries) {
        try {
        const response = await MovieService.getMoviesByPreferences();
        if (response.data.length > 0) {
            this.movies = response.data;
            break; 
        }
        } catch (error) {
        console.error("Error fetching movies:", error);
        retryCount++;
        if (retryCount < maxRetries) {
            console.log(`Retrying (${retryCount}/${maxRetries})...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); 
        } else {
            console.error("Max retries reached. Cannot fetch movies.");
            break;
        }
        } finally {
        this.isLoading = false;
        }
      }
    },
    methods: {
        async wantToWatch(movie){
            this.buttonLoading = true;
            try {
                movie.want_to_watch = true;
                const response = await MovieService.addMovie(movie);
                if (response.status === 200) {
                this.buttonLoading = false;
                }
            } catch (error) {
                console.error(error);
                this.buttonLoading = false;
            }
        },
        carouselIndexChanged(index) {
            this.$store.commit('SET_CURRENT_MOVIE_INDEX', index);
        },
    }
};
</script>

<style scoped>

.custom-carousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    height: 100vh; 
}

/* min-height: 690px !important; */

.custom-carousel {
    height: 80%;
    margin: 0 auto 200px auto;
    padding: 0 auto;
}

/* .custom-carousel-item {
    height: 100vh;
    margin: 0 auto;
} */

.movie-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 80%;
    margin: 0 auto;
    padding: 0;
    gap: 10px;
}

.img-box {
    height: 80%;
    width: auto;
    margin: auto 10px auto auto;
    max-width: 450px;
}

.movie-poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2% !important;
    box-shadow: 0px 0px 10px 4px #9e9e9e; 
}

.title-and-summary {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 0 !important;
    height: 100%;
    max-height: 100% !important;
}

.subheader {
  max-height: 300px;
  overflow-y: auto; 
}

.contents-and-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto auto auto 10px;
    height: 80% !important;
    max-height: 80% !important;
    width: 40%;
}

.rating {
    display: flex;
    flex-direction: row;
    justify-self: left;
    margin-left: 0 !important;
}

.v-btn {
    margin: 1% auto auto auto;
}

#added-button {
    color: black !important;
    pointer-events: none;
}

#pulse-loader{
    transform: translateY(-13rem);
}

@media (max-width: 800px) {

    .custom-carousel-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5% auto;
        padding: 0;
        min-height: 1000px;
    }

    .custom-carousel {
        height: 80%;
        margin: 0 auto;
        padding: 0 auto;
    }

    .movie-info {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100% !important;
        height: 100%;  
    }

    .img-box {
        width: 75%;
        max-height: 50%;
        margin: 0 auto;
        padding: 0 auto;
    }

    .movie-poster {
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        object-fit: cover;
        object-position: top;
        border-radius: 0%;
    }

    .contents-and-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 5%;
        height: auto;
        width: 75%;
    }

    #pulse-loader{
        transform: translateY(-17rem);
    }

}

</style>