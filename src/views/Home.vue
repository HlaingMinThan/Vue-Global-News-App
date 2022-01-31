<template>
  <v-container fluid>
    <Loading :show="isLoading" />
    <div class="d-flex justify-space-between">
      <h1 class="grey--text">Headlines</h1>
      <v-btn depressed color="primary"> Filter </v-btn>
    </div>
    <bread-crumbs />
    <v-row>
      <v-col cols="4" class="mx-auto">
        <v-text-field label="search articles" v-model="search"></v-text-field>
      </v-col>
    </v-row>
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
      <h4 class="grey--text">No results found. :(</h4>
    </v-row>
  </v-container>
</template>

<script>
import Loading from "../components/Loading.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    Loading,
    NewsCard,
    BreadCrumbs,
  },
  data() {
    return {
      newHeadlines: [],
      search: "",
      isLoading: false,
    };
  },
  watch: {
    search() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.search.length) {
          this.searchHeadlines();
        } else {
          this.getTopUsHeadlines();
        }
      }, 500);
    },
  },
  methods: {
    async getTopUsHeadlines() {
      this.isLoading = true;
      const res = await this.axios.get(
        "/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e"
      );

      this.newHeadlines = res.data.articles;
      this.isLoading = false;
    },
    async searchHeadlines() {
      this.isLoading = true;
      const res = await this.axios.get(
        `/top-headlines?q=${this.search}&apiKey=099148be22804e849a0c6fe022b7cf5e`
      );

      this.newHeadlines = res.data.articles;
      this.isLoading = false;
    },
  },
  mounted() {
    this.getTopUsHeadlines();
  },
};
</script>

<style>
</style>
