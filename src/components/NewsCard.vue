<template>
  <v-card class="mx-auto my-12" max-width="374" min-height="670">
    <v-toolbar>
      <Dialog />
      <v-spacer></v-spacer>
      <router-link :to="`/detail/${Math.random()}`" class="detail-link">
        <v-btn color="grey" icon small>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <v-img height="250" :src="newHeadline.urlToImage"></v-img>
    <v-card-title class="d-flex justify-space-between"
      ><div>{{ newHeadline.title }}</div>
      <div class="text-subtitle-1 grey--text mb-2">posts from 20.6.2001</div>
    </v-card-title>
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
};
</script>

<style>
.detail-link {
  text-decoration: none;
  color: white;
}
</style>
