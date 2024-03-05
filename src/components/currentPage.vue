<template>
  <div class="pages">
    <span v-for="t in pagesList" :key="t">
      {{ t }}
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pagesList = ref(JSON.parse(localStorage.getItem("pages")));
</script>

<style lang="scss" scoped>
.pages {
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 20px;
  gap: 10px;
  span::after {
    content: "";
    margin-left: 5px;
    height: 10px;
    border: white 1px solid;
  }
}
</style>
