<template>
  <div>
    <h1 class="mt-10 mb-0 ml-10 mr-10 grey--text" style="margin-left: 10px;">Your saved movies</h1>
    <saved-movies/>
  </div>
</template>

<script>
import SavedMovies from '../components/SavedMovies.vue'
export default {
    name: 'WatchList',
    components: { 
        SavedMovies 
    },
}
</script>

<style scoped>

h1{
  text-align: center;
}

</style>