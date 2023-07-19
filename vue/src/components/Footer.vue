<template>

  <v-footer
    dark
    padless
  >
    <v-card
        color="#fe0d02"
        flat
        title
        class="centered-content" 
        width="100%"
    >
        <v-card-text class="icons">
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                icon
            >
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="centered-content">
            <strong>Ramiro Lorca {{ new Date().getFullYear() }}</strong>
        </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram'
        ]
    })
}
</script>

<style scoped>

.centered-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fe0d02;
    color: white;
}

.icons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1% auto;
}

</style>