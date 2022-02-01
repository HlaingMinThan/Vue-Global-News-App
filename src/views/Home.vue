<template>
  <v-container fluid>
    <Loading :show="isLoading" />
    <div class="d-flex justify-space-between align-center flex-wrap">
      <h1 class="grey--text flex-3">Headlines</h1>
    </div>
    <v-row align="center">
      <v-col cols="3">
        <v-select
          :options="sources"
          label="name"
          placeholder="Filter By Source"
          :reduce="(source) => source.id"
          v-model="filterBy"
          @input="filterBySource(filterBy)"
        >
          <template #option="{ name, category }">
            <p style="margin: 0; padding: 0">{{ name }}</p>
            <em>{{ category }}</em>
            <hr class="mb-0 mt-0" />
          </template>
        </v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-text-field label="search articles" v-model="search"></v-text-field>
      </v-col>
    </v-row>

    <bread-crumbs />
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Loading from "../components/Loading.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    Loading,
    NewsCard,
    BreadCrumbs,
    vSelect,
  },
  data() {
    return {
      search: "",
      filterBy: "",
    };
  },
  computed: mapGetters(["newHeadlines", "sources", "isLoading", "errorMsg"]),
  watch: {
    search() {
      this.filterBy = "";
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        if (this.search.length) {
          await this.searchHeadlines(this.search);
        }
        if (!this.search.length && !this.filterBy) {
          this.getHeadlines();
        }
      }, 500);
    },
  },

  methods: {
    ...mapActions([
      "getHeadlines",
      "getSources",
      "searchHeadlines",
      "filterBySource",
    ]),

    async get() {
      await this.getHeadlines();
      await this.getSources();
    },
  },
  mounted() {
    this.get();
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
