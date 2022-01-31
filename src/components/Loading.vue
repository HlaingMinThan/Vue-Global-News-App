<template>
  <v-overlay :value="show">
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
