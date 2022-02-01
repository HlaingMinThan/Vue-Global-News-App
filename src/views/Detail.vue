<template>
  <v-container fluid>
    <h1 class="grey--text">Detail page For {{ $route.params.title }}</h1>
    <div><bread-crumbs /></div>
    <v-row>
      <v-col v-for="n in 4" :key="n" md="3"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BreadCrumbs from "../components/BreadCrumbs.vue";

export default {
  components: { BreadCrumbs },
  props: ["id"],
};
</script>

<style>
</style>
