<template>
  <div class="current-page">
    <current-page></current-page>
  </div>
  <div class="download">
    <a href="ведомость.pdf" download>
      <img
        src="https://s1.iconbird.com/ico/2013/12/520/w256h2561387130025Downloads01.png"
        alt=""
      />
      скачать "Реализация закупок"
    </a>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
</script>

<style scoped lang="scss">
@import "../fluid.sass";

a{
  display: flex;
  align-items: center;
}
img{
  @include fluid("height", 50);
}
.download{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  @include fluid("width", 1825);
  @include fluid("height", 661);
}
.current-page{
  @include fluid("margin-top", 20);
  @include fluid("margin-left", 40);
}
</style>
