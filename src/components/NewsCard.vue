<template>
  <v-card class="mx-auto my-12" max-width="374" min-height="670">
    <v-toolbar>
      <Dialog />
      <v-spacer></v-spacer>
      <v-btn
        color="grey"
        icon
        small
        @click="goDetail(newHeadline.id, newHeadline.title)"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-toolbar>
    <v-img height="250" :src="newHeadline.urlToImage"></v-img>
    <v-card-title class="d-flex justify-space-between"
      ><div>{{ newHeadline.title }}</div>
      <div class="text-subtitle-1 grey--text mb-2">posts from 20.6.2001</div>
    </v-card-title>
    <v-card-subtitle class="d-flex justify-space-between"
      ><div>source - {{ newHeadline.source.name }}</div>
    </v-card-subtitle>
    <v-card-text>
      <div>
        {{ newHeadline.content }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  props: {
    newHeadline: Object,
  },
  components: { Dialog },
  methods: {
    goDetail(id, title) {
      this.$router.push({ name: "Detail", params: { id, title } });
    },
  },
};
</script>

<style>
.detail-link {
  text-decoration: none;
  color: white;
}
</style>
