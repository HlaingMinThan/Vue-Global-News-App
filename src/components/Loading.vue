<template>
  <v-overlay :z-index="zIndex" :value="overlay" v-show="show">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style>
</style>
