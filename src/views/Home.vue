<template>
  <v-container class="grey lighten-5" fluid>
    <div class="d-flex justify-space-between">
      <h1 class="grey--text">Headlines</h1>
      <v-btn depressed color="primary"> Filter </v-btn>
    </div>
    <v-row>
      <v-col v-for="n in 4" :key="n" md="3">
        <NewsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";

export default {
  components: { NewsCard },
};
</script>

<style>
</style>