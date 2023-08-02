<template>
  <nav>
    <v-app-bar app color=#fe0d02 dark height="100">

        <img src="~@/assets/myMoviesLogo.png" id="mainLogo">

        <div class="horizontal-btn">
          <v-btn text class="ml-2" to="/">Movies</v-btn>
          <v-btn text class="ml-2" to="/genres">Genres</v-btn>
          <v-btn text class="ml-2" to="/watchlist">WatchList</v-btn>
        </div>

        <v-spacer></v-spacer>

        <div class="hamburger-icon">
          <input v-model="hamburgerStatus" type="checkbox" id="checkbox" @click="toggleMenu">
          <label for="checkbox" class="toggle">
            <div class="bar bar--top"></div>
            <div class="bar bar--middle" ></div>
            <div class="bar bar--bottom" ></div>
          </label>
        </div>

    </v-app-bar>

    <v-overlay v-if="showOverlay">
      <v-card>
        <v-btn text to="/" @click="toggleMenu">Movies</v-btn>
        <v-btn text to="/genres" @click="toggleMenu">Genres</v-btn>
        <v-btn text to="/watchlist" @click="toggleMenu">WatchList</v-btn>
      </v-card>
    </v-overlay>


  </nav>
</template>

<script>

export default {
  data() {
    return {
      showOverlay: false,
      hamburgerStatus: false
    };
  },
  methods: {
    toggleMenu() {
      if(!this.hamburgerStatus){
        this.hamburgerStatus = true;
        this.showOverlay = true;
      }else{
        this.hamburgerStatus = false;
        this.showOverlay = false;
      } 
   }
  }

}
</script>

<style scoped>

#mainLogo {
    width: 200px;
    margin: 1%;
}

 /* Below is for the hamburger menu */
 #checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  cursor: pointer;
  display: block;
  padding: 15px;
  margin-right: 20px;
}

.bar {
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: calc(4px / 2);
  background: white;
  color: inherit;
  opacity: 1;
  transition: none 0.35s cubic-bezier(.5,-0.35,.35,1.5) 0s;
}

/***** Spin Animation *****/

.bar--top {
  bottom: calc(50% + 11px + 4px/ 2);
  transition-property: bottom,transform;
  transition-delay: calc(0s + 0.35s),0s;
}

.bar--middle {
  top: calc(50% - 4px/ 2);
  transition-property: opacity;
  transition-delay: calc(0s + 0.35s);
}

.bar--bottom {
  top: calc(50% + 11px + 4px/ 2);
  transition-property: top,transform;
  transition-delay: calc(0s + 0.35s),0s;
}

#checkbox:checked + .toggle .bar--top {
  bottom: calc(50% - 4px/ 2);
  transform: rotate(135deg);
  transition-delay: 0s,calc(0s + 0.35s);
}

#checkbox:checked + .toggle .bar--middle {
  opacity: 0;
  transition-duration: 0s;
  transition-delay: calc(0s + 0.35s);
}

#checkbox:checked + .toggle .bar--bottom {
  top: calc(50% - 4px/ 2);
  transform: rotate(225deg);
  transition-delay: 0s,calc(0s + 0.35s);
}

  .v-app-bar{
  z-index: 100;
  }

  .v-overlay{
    background-color: rgba(33, 33, 33, 0.638);
  }

  .v-overlay .v-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 5rem;
    background: transparent;
    box-shadow: none;
  }

@media (min-width: 721px){
  .hamburger-icon{
    display: none;
  }
}

@media (max-width: 720px) {

  .horizontal-btn{
    display: none;
  }

  .hamburger-icon{
    display: visible;
  }

}


</style>