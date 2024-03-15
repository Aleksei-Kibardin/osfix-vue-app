<template>
  <div></div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
</script>

<style lang="scss" scoped>

</style>