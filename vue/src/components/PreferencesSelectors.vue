<template>

  <div class="selectors">        
    <label v-for="genre in genres" :key="genre.name" class="checkbox-container" :for="genre.name">
      <input type="checkbox" :name="genre.name" :id="genre.name" :checked="isChecked(genre.name)" @change="onCheckboxChange(genre.name)" style="display: none;"/>
      <div class="checkbox-square" :class="{ 'checked-image1': isChecked(genre.name), 'checked-image2': !isChecked(genre.name) }">
        <div class="checkbox-image">
          <img v-if="isChecked(genre.name)" :src="genre.imageChecked" :alt="genre.name" style="object-fit: contain; width: 100%; height: 100%;"/>
          <img v-else :src="genre.imageUnchecked" :alt="genre.name + '2'" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
      </div>
      <label class="movie-label custom-text" :for="genre.name">{{ genre.label }}</label>
    </label>
  </div>
  
</template>

<script>
export default {
    name: "preferences-selectors",
    props: {
      genrePreferences: Object,
    },
    data() {
      return {
        genres: [
          {
            name: "wants_action",
            label: "Action",
            imageChecked: require('@/assets/action-white.svg'),
            imageUnchecked: require('@/assets/action-black.svg'),
          },
          {
            name: "wants_adventure",
            label: "Adventure",
            imageChecked: require('@/assets/adventure-white.svg'),
            imageUnchecked: require('@/assets/adventure-grey.svg'),
          },
          {
            name: "wants_comedy",
            label: "Comedy",
            imageChecked: require("@/assets/comedy-white.svg"),
            imageUnchecked: require("@/assets/comedy-grey.svg"),
          },
          {
            name: "wants_drama",
            label: "Drama",
            imageChecked: require("@/assets/drama-white.svg"),
            imageUnchecked: require("@/assets/drama-grey.svg"),
          },
          {
            name: "wants_family",
            label: "Family",
            imageChecked: require("@/assets/family-white.svg"),
            imageUnchecked: require("@/assets/family-grey.svg"),
          },
          {
            name: "wants_horror",
            label: "Horror",
            imageChecked: require("@/assets/horror-white.svg"),
            imageUnchecked: require("@/assets/horror-grey.svg"),
          },
          {
            name: "wants_romance",
            label: "Romance",
            imageChecked: require("@/assets/romance-white.svg"),
            imageUnchecked: require("@/assets/romance-grey.svg"),
          },
          {
            name: "wants_scifi",
            label: "Sci-Fi",
            imageChecked: require("@/assets/scifi-white.svg"),
            imageUnchecked: require("@/assets/scifi-grey.svg"),
          },
          {
            name: "wants_thriller",
            label: "Thriller",
            imageChecked: require("@/assets/thriller-white.svg"),
            imageUnchecked: require("@/assets/thriller-grey.svg"),
          },
        ],
      };
    },
    methods: {
      isChecked(genreName) {
      return this.genrePreferences && this.genrePreferences[genreName];
    },
    onCheckboxChange(genreName) {
      this.$emit("update:genrePreferences", {
        ...this.genrePreferences,
        [genreName]: !this.isChecked(genreName),
      });
      this.$emit("checkboxToggled");
    },
  },
};

</script>

<style scoped>

.selectors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; 
  align-items: center; 
  max-width: 100%;
  font-size: 1.2rem;
  gap: 10px; 
  margin: 0 auto;
  color: #7d7d7d;
  align-self: center;
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
  cursor: pointer;
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