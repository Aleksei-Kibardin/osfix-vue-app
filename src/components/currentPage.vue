<template>
  <div class="pages">
    <img src="https://www.cgr-international.com/wp-content/uploads/2022/03/home_bleu.png"  alt="breadcrumbs home" @click=" router.push({ name: `home`});">
    <span v-for="t in pagesList" :key="t">
      {{ t }}
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const pagesList = ref(JSON.parse(localStorage.getItem("pages")));
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.pages {
  display: flex;
  flex-direction: row;
  color: #ffd400;
  align-items: center;
  @include fluid("font-size", 20);
  @include fluid("gap", 10);
  span::before {
    content: "";
    @include fluid("margin-right", 5);
    @include fluid("height", 10);
    border: #ffd400 1px solid;
  }
  img{
    filter: contrast(7%) sepia(100%) hue-rotate(14deg) brightness(0.9) saturate(689%);
    @include fluid("width", 20);
    @include fluid("height", 20);
  }
}
</style>
