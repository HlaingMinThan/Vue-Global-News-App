<template>
  <v-container fluid>
    <Loading :show="isLoading" />
    <div class="d-flex justify-space-between align-center flex-wrap">
      <h1 class="grey--text flex-3">Headlines</h1>
    </div>
    <FilterHeadline />
    <BreadCrumbs />
    <v-row v-if="newHeadlines.length">
      <v-col
        v-for="(newHeadline, index) in newHeadlines"
        :key="index"
        md="6"
        lg="3"
        xl="2"
      >
        <NewsCard :newHeadline="newHeadline" />
      </v-col>
    </v-row>
    <v-row v-else class="d-flex justify-center">
      <h4 class="grey--text">{{ errorMsg }}</h4>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import "vue-select/dist/vue-select.css";
import Loading from "../components/Loading.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import FilterHeadline from "../components/FilterHeadline.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    Loading,
    NewsCard,
    BreadCrumbs,
    FilterHeadline,
  },
  computed: mapGetters(["newHeadlines", "sources", "isLoading", "errorMsg"]),

  methods: {
    ...mapActions([
      "getHeadlines",
      "getSources",
      "searchHeadlines",
      "filterBySource",
    ]),
  },
  mounted() {
    this.getHeadlines();
  },
};
</script>

<style>
.sources-wrapper {
  width: 600;
}
.flex-3 {
  flex: 3;
}
.flex-1 {
  flex: 1;
}
</style>
