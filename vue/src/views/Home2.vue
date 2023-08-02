<template>
  <div>
    <h1 class="mt-10 mb-0 grey--text" style="justify-self: center;">Check out these titles!</h1>
    <MovieCarousel2 />
  </div>
</template>

<script>

import MovieCarousel2 from '../components/MovieCarousel2.vue';
export default {
    name: 'Home2',
    components: { 
        MovieCarousel2, 
    }
}

</script>

<style scoped>

h1 {
  text-align: center;
}

</style>
