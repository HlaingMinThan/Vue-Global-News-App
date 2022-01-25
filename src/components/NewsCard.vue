<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title class="d-flex justify-space-between"
      ><div>Cafe Badilico</div>
      <Dialog />
    </v-card-title>
    <v-card-text>
      <div>
        <div class="text-subtitle-1 grey--text mb-2">20.6.2001</div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
    <div class="pa-4">
      <router-link :to="`/detail/${Math.random()}`">
        <v-btn color="primary" dark>Read More</v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  components: { Dialog },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
</style>