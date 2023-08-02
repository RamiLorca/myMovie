<template>
  <v-app id="app">
    
    <nav-bar-2/>

    <v-main>
      <router-view/>
    </v-main>
   
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar2 from './components/NavBar2.vue';

export default {
  components: { 
    NavBar2,
    Footer },
  name: 'App',
  mounted() {
    document.title = "myMovies";
    window.addEventListener('beforeunload', this.handleRefresh);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.handleRefresh);
  },
  methods: {
    handleRefresh() {
      this.$router.push('/');
    }
  },
  data: () => ({
    //
  }),
  };
</script>

<style>

.v-main{
  min-height: 700px !important;
}

html {
  background-color: #fe0d02;
  overscroll-behavior: contain;
}

</style>