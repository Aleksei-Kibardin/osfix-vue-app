<template>
  <div class="head">
    <h1 class="title">Металлообработка</h1>
    <div class="current-page">
      <current-page></current-page>
    </div>
    <img
      src="https://www.cgr-international.com/wp-content/uploads/2022/03/CGR_techno_01.jpg"
      alt=""
    />
  </div>
  <div class="content">
    <div class="filter"></div>
    <services-list></services-list>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
import servicesList from "./servicesList.vue";


</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.current-page {
  position: absolute;
  z-index: 2;
  @include fluid("top", 350);
  @include fluid("left", 40);
}
.head {
  position: relative;
  img{
    width: 100vw;
  }
}

.content {
  @include fluid("padding", 20);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  position: absolute;
  @include fluid("top", 50);
  @include fluid("font-size", 40);
  @include fluid("left", 40);
  color: #ffd400;
}
</style>
