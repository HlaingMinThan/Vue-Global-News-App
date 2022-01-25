<template>
  <v-breadcrumbs :items="visitedRoutes">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.path">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    visitedRoutes: "getVisitedRoutes",
  }),
};
</script>

<style>
</style>