<template>
  <hr>
  <div class="wrap">
    <div class="cont" v-for="t in store.state.news" :key="t">
      <div class="card transition">
        <h2 class="news-title transition">{{t.smallTitle}}</h2>
        <p class="news-txt">
          {{t.smallDesc}}..
        </p>
        <div class="cta-container transition">
          <a href="#" class="cta">ПОДРОБНЕЕ...</a>
        </div>
        <div class="card_circle transition"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
@import url("https://fonts.googleapis.com/css?family=Raleway:400,200");

.transition {
  transition: 0.3s cubic-bezier(0.3, 0, 0, 1.3);
}
.wrap {
  position: relative;
  margin: auto;
  @include fluid("margin-top", 100);
  @include fluid("max-width", 1000);
  @include fluid("height", 1000);
  @include fluid("column-gap", 340);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cont {
  position: relative;
}
.card {
  @include fluid("width", 300);
  @include fluid("height", 350);
  background-color: #fff;
  bottom: 0;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}
.card:hover {
  @include fluid("width", 300);
  @include fluid("height", 470);
}
.card:hover .cta-container {
  display: flex;
  justify-content: center;
}
.card:hover .card_circle {
  background-size: cover;
  border-radius: 0;
  @include fluid("margin-top", -130);
}
.card:hover .news-title {
  background: #3487f7;
  color: #fff;
  @include fluid("margin-top", 100);
  @include fluid("padding", 5);
}
.card:hover .news-title small {
  color: #fff;
}
.card:hover .news-txt {
  @include fluid("margin-top", 300);
}
.card_circle {
  background: url("https://picsum.photos/400/200") no-repeat center bottom;
  background-color: #3487f7;
  background-size: cover;
  border-radius: 50%;
  @include fluid("height", 400);
  @include fluid("width", 450);
  @include fluid("margin-top", -270);
  @include fluid("margin-left", -75);
  position: absolute;
}
.news-title {
  color: #3487f7;
  font-family: "Raleway", sans-serif;
  @include fluid("font-weight", 200);
  @include fluid("font-size", 22);
  @include fluid("margin-top", 130);
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
}
.news-txt {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Raleway", sans-serif;
  @include fluid("font-size", 14);
  @include fluid("margin-top", 200);
  font-weight: normal;
  position: absolute;
  text-align: center;
  z-index: 2;
}
.cta-container {
  display: none;
  @include fluid("margin-top", 320);
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
}
.cta {
  display: block;
  -moz-border-radius: 2px;
  -moz-transition: 0.2s ease-out;
  -ms-transition: 0.2s ease-out;
  -o-transition: 0.2s ease-out;
  -webkit-border-radius: 2px;
  -webkit-transition: 0.2s ease-out;
  position: relative;
  @include fluid("top", 100);
  @include fluid("width", 140);
  @include fluid("border-radius", 10);
  @include fluid("font-size", 17);
  @include fluid("letter-spacing", 0.5);
  border: 2px solid #3487f7;
  color: #3487f7;
  transition: 0.5s ease-out;
}
.cta:hover {
  background-color: #3487f7;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
  -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
