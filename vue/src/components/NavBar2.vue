<template>
  <nav>
    <v-app-bar app color=#fe0d02 dark height="100">
        <img src=myMoviesLogo.png id="mainLogo">
        <v-btn text class="ml-2" to="/">Movies</v-btn>
        <v-btn text class="ml-2" to="/genres">Genres</v-btn>
        <v-btn text class="ml-2" to="/watchlist">WatchList</v-btn>
        <v-btn text class="ml-2">FAQ</v-btn>
        <v-spacer></v-spacer>
    </v-app-bar>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    #mainLogo {
        width: 200px;
        margin: 1%;
    }
</style>