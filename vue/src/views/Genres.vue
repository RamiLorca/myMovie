<template>
  <div>
    <div class="selector-box">
      <preferences-selectors :genre-preferences.sync="genrePreferences"/>
      <div class="buttons">
        <!-- <v-btn variant="tonal" id="Save" type="button" @click="savePreferences">Save</v-btn> -->
        <!-- <button id="Save" type="button" @click="savePreferences">Save</button> -->
        <!-- <button id="Reset" type="button">Reset</button> -->
        <!-- <v-btn variant="tonal" id="Reset" type="button" @click="resetPreferences">Reset</v-btn> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/UserService.js'
import PreferencesSelectors from '../components/PreferencesSelectors.vue'
export default {
    name: 'genres',
    components: {
        PreferencesSelectors
    },
    data() {
        return {
            genrePreferences: {},
        }
    },
    created() {
        UserService.getUserPreferences(1)
        .then(
            (response) => {
                this.genrePreferences = response.data;
        })
    },
    methods: {
        onCheckBoxToggled(){
            this.savePreferences();
        },
        savePreferences() {
            const allGenresDeselected =
                !this.genrePreferences.wants_action &&
                !this.genrePreferences.wants_adventure &&
                !this.genrePreferences.wants_comedy &&
                !this.genrePreferences.wants_drama &&
                !this.genrePreferences.wants_horror &&
                !this.genrePreferences.wants_romance &&
                !this.genrePreferences.wants_scifi &&
                !this.genrePreferences.wants_thriller &&
                !this.genrePreferences.wants_family;
            
            if (allGenresDeselected) {
                const requestBody = {
                    user_id: 1,
                    wants_action: true,
                    wants_adventure: true,
                    wants_comedy: true,
                    wants_drama: true,
                    wants_horror: true,
                    wants_romance: true,
                    wants_scifi: true,
                    wants_thriller: true,
                    wants_family: true,
                };
                UserService.updatePreferences(requestBody)
                    .then((response) => {
                        console.log(response.data);
                    });
            } else {
                const requestBody = {
                    user_id: 1,
                    wants_action: this.genrePreferences.wants_action || false,
                    wants_adventure: this.genrePreferences.wants_adventure || false,
                    wants_comedy: this.genrePreferences.wants_comedy || false,
                    wants_drama: this.genrePreferences.wants_drama || false,
                    wants_horror: this.genrePreferences.wants_horror || false,
                    wants_romance: this.genrePreferences.wants_romance || false,
                    wants_scifi: this.genrePreferences.wants_scifi || false,
                    wants_thriller: this.genrePreferences.wants_thriller || false,
                    wants_family: this.genrePreferences.wants_family || false
                };
                UserService.updatePreferences(requestBody)
                    .then((response) => {
                        console.log(response.data);
                    });
                }
            },
        // resetPreferences() {
        //     this.genrePreferences = {
        //         wants_action: false,
        //         wants_adventure: false,
        //         wants_comedy: false,
        //         wants_drama: false,
        //         wants_horror: false,
        //         wants_romance: false,
        //         wants_scifi: false,
        //         wants_thriller: false,
        //         wants_family: false
        //     };
        //     this.savePreferences();
        // }
    },
    watch: {
        genrePreferences: {
            handler() {
                this.savePreferences();
            },
      deep: true,
    },
  },
};

</script>

<style scoped>

.selector-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: 1% auto 2% auto;
}

</style>