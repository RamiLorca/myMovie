<template>
  <div class="main">
    <h1 class="mt-10 mb-0 ml-10 mr-10 grey--text">Which genres do you want to see?</h1>
    <div class="selector-box">
      <preferences-selectors :genre-preferences.sync="genrePreferences" @checkboxToggled="onCheckBoxToggled"/>
    </div>
  </div>
</template>

<script>
import UserService from '../services/UserService.js'
import PreferencesSelectors from '../components/PreferencesSelectors.vue'
export default {
    name: 'Genres',
    components: {
        PreferencesSelectors
    },
    data() {
        return {
            genrePreferences: {},
        }
    },
    async created() {
        try {
            const response = await UserService.getUserPreferences(1);
            this.genrePreferences = response.data;
        } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Error fetching genre preferences:', error);
        }
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
                            // eslint-disable-next-line no-console
                            console.log(response.data);
                    })
                    .catch((error) => {
                        // eslint-disable-next-line no-console
                        console.error('Error updating genre preferences:', error)
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
                            // eslint-disable-next-line no-console
                            console.log(response.data);
                    })
                    .catch((error) => {
                            // eslint-disable-next-line no-console
                            console.error('Error updating genre preferences:', error);
                    });
            }
        },
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

.main{
    margin: 0 auto;
    padding: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 1000px;
}

.selector-box{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5% auto 0 auto;   
}

</style>