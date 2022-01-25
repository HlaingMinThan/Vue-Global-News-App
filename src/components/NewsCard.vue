<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>Cafe Badilico</v-card-title>
    <v-card-text>
      <div>
        <div class="text-subtitle-1 grey--text mb-2">20.6.2001</div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
        <router-link :to="`/detail/1`">read more</router-link>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
</style>