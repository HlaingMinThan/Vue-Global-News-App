<template>
  <v-breadcrumbs :items="visitedRoutes">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        to="/"
        v-if="item.text === 'home' || currentPath === '/'"
      >
        home
      </v-breadcrumbs-item>
      <v-breadcrumbs-item :to="item.path" v-else>
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    currentPath() {
      return window.location.pathname;
    },
    ...mapGetters({
      visitedRoutes: "getVisitedRoutes",
    }),
  },
};
</script>
