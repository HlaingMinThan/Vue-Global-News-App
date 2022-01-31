<template>
  <v-container fluid>
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
    <v-row>
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
  </v-container>
</template>

<script>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: { NewsCard, BreadCrumbs },
  data() {
    return {
      newHeadlines: [],
      search: "",
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
      const res = await this.axios.get(
        "/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e"
      );

      this.newHeadlines = res.data.articles;
      console.log(this.newHeadlines);
    },
    async searchHeadlines() {
      const res = await this.axios.get(
        `/top-headlines?q=${this.search}&apiKey=099148be22804e849a0c6fe022b7cf5e`
      );

      this.newHeadlines = res.data.articles;
      console.log(this.newHeadlines);
    },
  },
  mounted() {
    this.getTopUsHeadlines();
  },
};
</script>

<style>
</style>
