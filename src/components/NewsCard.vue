<template>
  <v-card class="mx-auto my-12" max-width="374" min-height="650">
    <v-img height="250" :src="newHeadline.urlToImage"></v-img>
    <v-card-title class="d-flex justify-space-between"
      ><div>{{ newHeadline.title }}</div>
      <Dialog />
    </v-card-title>
    <v-card-text>
      <div>
        <div class="text-subtitle-1 grey--text mb-2">20.6.2001</div>
        {{ newHeadline.content }}
      </div>
    </v-card-text>
    <v-card-actions class="pa-4">
      <router-link :to="`/detail/${Math.random()}`">
        <v-btn color="primary" dark>Read More</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  props: {
    newHeadline: Object,
  },
  components: { Dialog },
};
</script>

<style>
</style>
