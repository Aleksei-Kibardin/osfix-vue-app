<template>
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
        <div class="data">{{ formattedDate(t.date) }}</div>
        <div class="news">
          <h2 class="news-title">
            <div class="y-square"></div>
            {{ t.title }}
          </h2>
          <hr>
          <p class="news-txt">{{ t.description }}</p>
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
  let month
  let days;
  if (x > 9) {
    days = x;
  } else {
    days = "0" + x;
  }

  console.log(currentDate.getMonth())

  let date =
    days +
    "." +
    ("0" + previousMonth).slice(-2) +
    "." +
    currentDate.getFullYear();

  return date;
};
console.log(formattedDate(13));
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
  @include fluid("height", 500);
  img{
    width: 94vw;
  }
}
.content {
  display: flex;
  @include fluid("right", 50);
  @include fluid("gap", 30);
  @include fluid("padding", 10);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.data {
  border-bottom: #ffffff 1px solid;
  position: absolute;
  @include fluid("right", 100);
}
.wrap-news {
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  @include fluid("padding", 10);
  width: 80%;
  box-shadow: 0px 0px 10px 2px rgb(0, 0, 0);
  background: #2b2b2b;
}
.news {
  @include fluid("width", 1000);
  @include fluid("height", 250);
  .news-txt {
    @include fluid("font-size", 16);
    @include fluid("margin-top", 10);
  }
  .news-title{
    @include fluid("font-size", 25);
  }
}
.news-title{
  display: flex;
  @include fluid("gap", 10);
  align-items: center
}
.y-square {
  @include fluid("width", 20);
  @include fluid("height", 20);
  background: #ffd400;
}
</style>
