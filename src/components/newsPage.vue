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
    <div class="content">
      <div class="wrap-news" v-for="t in store.state.news" :key="t">
        <span class="data">{{ formattedDate(t.date) }}</span>
        <div class="news">
          <h2 class="news-title">
            <div class="y-square"></div>
            {{ t.title }}
          </h2>
          <p class="news-txt">{{ t.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
import { useStore } from "vuex";

const store = useStore();

let currentDate = new Date();

let previousMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth();

let formattedDate = (x) => {
  let days;
  if (x > 9) {
    days = x;
  } else {
    days = "0" + x;
  }

  let date =
    days +
    "." +
    ("0" + previousMonth).slice(-2) +
    "." +
    currentDate.getFullYear();

  return date;
};
console.log(formattedDate(4));
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
  @include fluid("height", 500);
}
.content {
  display: flex;
  padding: 50px;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.data {
  position: absolute;
  right: 100px;
}
.wrap-news {
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 80%;
  box-shadow: 0px 0px 10px 2px rgba(73, 73, 73, 0.3);
  background: #2b2b2b;
}
.news {
  width: 1000px;
  .news-txt {
    margin-top: 10px;
  }
}
.news-title{
  display: flex;
  gap: 10px;
  align-items: center
}
.y-square {
  @include fluid("width", 20);
  @include fluid("height", 20);
  background: #ffd400;
}
</style>
