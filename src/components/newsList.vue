<template>
  <h1 class="news-contnet--title">Новости</h1>
  <div class="wrap">
    <div class="cont" v-for="t in store.state.news" :key="t">
      <div class="card transition">
        <h2 class="news-title transition">{{ t.smallTitle }}</h2>
        <p class="news-txt">{{ t.smallDesc }}..</p>
        <div class="cta-container transition">
          <a href="#/news" class="cta" @click="setItemPages()">ПОДРОБНЕЕ...</a>
        </div>
        <div class="card_circle transition"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const setItemPages = () => {
  localStorage.setItem('pages', JSON.stringify(['О заводе', 'Новости']))
}
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
@import url("https://fonts.googleapis.com/css?family=Raleway:400,200");

.transition {
  transition: 0.3s cubic-bezier(0.3, 0, 0, 1.3);
}

.news-contnet--title {
  position: relative;
  top: 20px;
  text-align: center;
}
.wrap {
  position: relative;
  margin: auto;
  @include fluid("margin-top", 100);
  @include fluid("gap", 40);
  @include fluid("padding-bottom", 50);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cont {
  position: relative;
  @include fluid("width", 300);
  @include fluid("height", 350);
}
.card {
  @include fluid("width", 300);
  @include fluid("height", 350);
  background-color: #525252;
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
  background: #fff;
  color: #6699cc;
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
  background-color: #ffffff;
  background-size: cover;
  border-radius: 50%;
  @include fluid("height", 400);
  @include fluid("width", 450);
  @include fluid("margin-top", -270);
  @include fluid("margin-left", -75);
  position: absolute;
}
.news-title {
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-weight: 200px;
  @include fluid("font-size", 22);
  @include fluid("margin-top", 130);
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
}
.news-txt {
  color: #fff;
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
@media (min-width: 200px) and (max-width: 800px) {
  .wrap {
    height: 1200px;
    column-gap: 300px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }
  .card {
    width: 200px;
    height: 250px;
  }
  .cont {
    width: 200px;
    height: 250px;
  }
  .card:hover {
    width: 200px;
    height: 280px;
    margin-bottom: 20px;
  }
  .card:hover .card_circle {
    margin-top: -250px;
  }
  .card:hover .news-title {
    margin-top: 38px;
    padding: 5px;
  }
  .card_circle {
    width: 300px;
    height: 350px;
    margin-top: -300px;
    margin-left: -50px;
  }
  .news-title {
    font-size: 16px;
    margin-top: 50px;
  }
  .news-txt {
    font-size: 12px;
    margin-top: 100px;
  }
  .cta-container {
    display: none;
    margin-top: 320px;
  }
  .cta {
    display: block;
    margin-top: -90px;
    width: 140px;
    border-radius: 10px;
    font-size: 14px;
    letter-spacing: 0.5px;
    height: 25px;
  }
  .card:hover.cta-container {
    display: flex;
    justify-content: center;
  }
}
</style>
