<template>
  <v-app>
    <nav-bar-2 />
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

  data: () => ({
    //
  }),
};
</script>
