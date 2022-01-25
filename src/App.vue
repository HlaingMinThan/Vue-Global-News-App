<template>
  <v-app>
    <Navbar />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
</style>