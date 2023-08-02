<template>
    <v-overlay>
    <div class="main">
        <v-btn text class="ml-2" to="/">Movies</v-btn>
        <v-btn text class="ml-2" to="/genres">Genres</v-btn>
        <v-btn text class="ml-2" to="/watchlist">WatchList</v-btn>
    </div>
    </v-overlay>
</template>

<script>
export default {
    name: 'HamburgerMenu'

}
</script>

<style scoped>

.main{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
}

.v-btn{
    margin: 50% 1% auto auto;

}

</style>