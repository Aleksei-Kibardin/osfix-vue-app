<template>
  <div>
    <div class="head">
      <div class="current-page">
        <current-page></current-page>
      </div>
      <img
        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cgr-international.com/wp-content/uploads/2021/08/CGR_media_center.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";

let currentDate = new Date();

let previousMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth();

let formattedDate =
  ("0" + currentDate.getDate()).slice(-2) +
  "." +
  ("0" + previousMonth).slice(-2) +
  "." +
  currentDate.getFullYear();

console.log(formattedDate);
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.current-page {
  position: absolute;
  z-index: 2;
  @include fluid("top", 350);
  @include fluid("left", 140);
}
.head {
  width: 100%;
  @include fluid("height", 1000);
}
</style>
