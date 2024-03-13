<template>
  <div class="pages">
    <img
      class="home__link"
      src="https://www.cgr-international.com/wp-content/uploads/2022/03/home_bleu.png"
      alt="breadcrumbs home"
      @click="router.push({ name: `home` })"
    />
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
  .home__link {
    cursor: pointer;
    filter: contrast(61%) sepia(100%) hue-rotate(15deg) brightness(1.9)
      saturate(689%);
    @include fluid("width", 20);
    @include fluid("height", 20);
    transition: all 0.2s;
  }
  .home__link:hover {
    @include fluid("width", 22);
    @include fluid("height", 22);
  }
}
@media (min-width: 350px) and (max-width: 1100px) {
  .pages {
    font-size: 10px;
    gap: 5px;
    span::before {
      margin-right: 3px;
    }
    .home__link {
      height: 10px;
      width: 10px;
    }
  }
}
@media (min-width: 200px) and (max-width: 349px) {
  .pages {
  font-size: 7px;
  gap: 5px;
  span::before {
    margin-right: 3px;
  }
  .home__link{
    height: 10px;
    width: 10px;
  }
}
}
</style>
