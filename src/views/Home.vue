<template>
  <v-container fluid>
    <div class="d-flex justify-space-between">
      <h1 class="grey--text">Headlines</h1>
      <v-btn depressed color="primary"> Filter </v-btn>
    </div>
    <bread-crumbs />
    <v-row>
      <v-col v-for="n in 4" :key="n" md="3">
        <NewsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: { NewsCard, BreadCrumbs },
};
</script>

<style>
</style>