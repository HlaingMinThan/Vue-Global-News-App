<template>
  <v-app-bar color="deep-purple accent-4" dense dark max-height="60">
    <router-link to="/" class="home-page-link">
      <v-toolbar-title>News App</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <!-- <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters({ visitedRoutes: "getVisitedRoutes" }) },
};
</script>

<style scoped>
.home-page-link {
  text-decoration: none;
  color: white;
}
</style>
