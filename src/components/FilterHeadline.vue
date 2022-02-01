<template>
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
</template>

<script>
import vSelect from "vue-select";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { vSelect },
  data() {
    return {
      search: "",
      filterBy: "",
    };
  },
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
  computed: mapGetters(["sources"]),
  methods: mapActions([
    "getSources",
    "filterBySource",
    "searchHeadlines",
    "getHeadlines",
  ]),
  mounted() {
    this.getSources();
  },
};
</script>

<style>
</style>
