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
        <hr />
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
  let month;
  let days;
  if (x > 9) {
    days = x;
  } else {
    days = "0" + x;
  }

  console.log(currentDate.getMonth());

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
  @include fluid("top", 430);
  @include fluid("left", 140);
}
.head {
  @include fluid("height", 500);
  img {
    image-rendering: pixelated;
    width: 100vw;
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
  position: absolute;
  @include fluid("right", 100);
}
.wrap-news {
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  @include fluid("padding", 10);
  width: 80%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.158);
  background: #fff;
}
.news {
  @include fluid("width", 1000);
  @include fluid("height", 250);
  .news-txt {
    @include fluid("font-size", 16);
    @include fluid("margin-top", 10);
  }
  .news-title {
    @include fluid("font-size", 25);
  }
}
.news-title {
  display: flex;
  @include fluid("gap", 10);
  align-items: center;
}
.y-square {
  @include fullFluid("width", 20);
  @include fullFluid("height", 20);
  background: #4e70af;
}
@media (min-width: 200px) and (max-width: 802px) {
  .current-page {
    left: 10px;
    top: 150px;
  }
  .content {
    margin-bottom: 60px;
    margin-top: 60px;
    gap: 20px;
  }
  .data {
    right: 10px;
  }
  .wrap-news {
    padding: 10px;
    width: 90%;
  }
  .news {
    .news-txt {
      font-size: 13px;
      margin-top: 10px;
    }
  }
  .news-title {
    font-size: 20px;
  }

  .y-square {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }
}
@media (max-width: 700px) {
  .current-page {
    top: 50px;
  }
}
@media (max-width: 1100px) {
  .head {
    img {
      margin-top: 40px;
    }
  }
}
@media (min-width: 200px) and (max-width: 610px) {
  .news-title {
    font-size: 20px;
    margin-top: 10px;
  }
  .data {
    position: relative;
  }
}
</style>
