<template>
  
  <div class="selectors">
        
    <label class="checkbox-container" for="action">
      <input type="checkbox" name="action" id="action" v-model="isActionChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isActionChecked, 'checked-image2': !isActionChecked }">
        <div class="checkbox-image">
          <img v-if="isActionChecked" src="/action-white.svg" alt="action" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/action-black.svg" alt="action2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="action">Action</label>
    </label>

    <label class="checkbox-container" for="adventure">
      <input type="checkbox" name="adventure" id="adventure" v-model="isAdventureChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isAdventureChecked, 'checked-image2': !isAdventureChecked }">
        <div class="checkbox-image">
          <img v-if="isAdventureChecked" src="/adventure-white.svg" alt="adventure" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/adventure-grey.svg" alt="adventure2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="action">Adventure</label>
    </label>

    <label class="checkbox-container" for="comedy">
      <input type="checkbox" name="comedy" id="comedy" v-model="isComedyChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isComedyChecked, 'checked-image2': !isComedyChecked }">
        <div class="checkbox-image">
          <img v-if="isComedyChecked" src="/comedy-white.svg" alt="comedy" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/comedy-grey.svg" alt="comedy2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="comedy">Comedy</label>
    </label>

    <label class="checkbox-container" for="drama">
      <input type="checkbox" name="drama" id="drama" v-model="isDramaChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isDramaChecked, 'checked-image2': !isDramaChecked }">
        <div class="checkbox-image">
          <img v-if="isDramaChecked" src="/drama-white.svg" alt="drama" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/drama-grey.svg" alt="drama2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="drama">Drama</label>
    </label>

    <label class="checkbox-container" for="family">
      <input type="checkbox" name="family" id="family" v-model="isFamilyChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isFamilyChecked, 'checked-image2': !isFamilyChecked }">
        <div class="checkbox-image">
          <img v-if="isFamilyChecked" src="/family-white.svg" alt="family" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/family-grey.svg" alt="family2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="family">Family</label>
    </label>

    <label class="checkbox-container" for="horror">
      <input type="checkbox" name="horror" id="horror" v-model="isHorrorChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isHorrorChecked, 'checked-image2': !isHorrorChecked }">
        <div class="checkbox-image">
          <img v-if="isHorrorChecked" src="/horror-white.svg" alt="horror" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/horror-grey.svg" alt="horror2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="horror">Horror</label>
    </label>

    <label class="checkbox-container" for="romance">
      <input type="checkbox" name="romance" id="romance" v-model="isRomanceChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isRomanceChecked, 'checked-image2': !isRomanceChecked }">
        <div class="checkbox-image">
          <img v-if="isRomanceChecked" src="/romance-white.svg" alt="romance" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/romance-grey.svg" alt="romance2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="romance">Romance</label>
    </label>

    <label class="checkbox-container" for="sci-fi">
      <input type="checkbox" ame="sci-fi" id="sci-fi" v-model="isScifiChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isScifiChecked, 'checked-image2': !isScifiChecked }">
        <div class="checkbox-image">
          <img v-if="isScifiChecked" src="/scifi-white.svg" alt="sci-fi" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/scifi-grey.svg" alt="sci-fi2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="sci-fi">Sci-Fi</label>
    </label>

    <label class="checkbox-container" for="thriller">
      <input type="checkbox" name="thriller" id="thriller" v-model="isThrillerChecked" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isThrillerChecked, 'checked-image2': !isThrillerChecked }">
        <div class="checkbox-image">
          <img v-if="isThrillerChecked" src="/thriller-white.svg" alt="thriller" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else src="/thriller-grey.svg" alt="thriller2" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" for="thriller">Thriller</label>
    </label>

  </div>

</template>

<script>
export default {
    name: "preferences-selectors",
    props: {
      genrePreferences: Object,
    },
    computed: {
      isActionChecked: {
        get() {
          return this.genrePreferences.wants_action;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_action: value
          });
        }
      },
      isAdventureChecked: {
        get() {
          return this.genrePreferences.wants_adventure;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_adventure: value
          });
        }
      },
      isComedyChecked: {
        get() {
          return this.genrePreferences.wants_comedy;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_comedy: value
          });
        }
      },
      isDramaChecked: {
        get() {
          return this.genrePreferences.wants_drama;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_drama: value
          });
        }
      },
      isFamilyChecked: {
        get() {
          return this.genrePreferences.wants_family;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_family: value
          });
        }
      },
      isHorrorChecked: {
        get() {
          return this.genrePreferences.wants_horror;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_horror: value
          });
        }
      },
      isRomanceChecked: {
        get() {
          return this.genrePreferences.wants_romance;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_romance: value
          });
        }
      },
      isScifiChecked: {
        get() {
          return this.genrePreferences.wants_scifi;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_scifi: value
          });
        }
      },
      isThrillerChecked: {
        get() {
          return this.genrePreferences.wants_thriller;
        },
        set(value) {
          this.$emit("update:genrePreferences", {
            ...this.genrePreferences,
            wants_thriller: value
          });
        }
      }
    }
};

</script>

<style scoped>

.selectors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; 
  align-items: center; 
  width: 50%;
  font-size: 1.2rem;
  gap: 10px; 
  margin: 3% auto;
  color: #7d7d7d;
}
.selectors .custom-text {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 450;
}
.checkbox-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.checkbox-square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 6em;
  border-radius: 20%;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0px 0px 10px .1px #9e9e9e; 
}

.checkbox-square.checked-image2 {
  background-color: #ffffff;
  border: solid 1px #d4d4d4; 
}

.checkbox-square.checked-image1 {
  background-color: #fe0d02;
  border: solid 4px #fe0d02;
}

.checkbox-image {
  background-size: cover;
  width: 70%;
  height: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>