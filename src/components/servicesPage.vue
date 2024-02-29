<template>
  <div class="content">
    <h1 class="title">Наши услуги</h1>
    <div class="services-wrap">
      <div
        class="service"
        v-for="(t, i) in Services"
        :key="t"
        :class="positionClass(i)"
        :style="{ 'grid-area': areaValue[i] }"
      >
        <img class="service-img" :src="`${t.url}`" :alt="`${t.title}`" />
        <div class="service-txt">
          <h1>{{ t.title }}</h1>
          <p>{{ t.description }}</p>
        </div>
      </div>
      <!-- <div class="midle"></div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const areaValue = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
];

const Services = ref(store.state.tabs);

const positionClass = (i) => {
  let res = null;
  if (i % 2 === 0) {
    res = "left";
  } else {
    res = "right";
  }
  return res;
};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title{
    color: white;
    margin-top: 40px;
}
.services-wrap {
  @include fluid("padding", 20);
  margin-top: 200px;
  display: grid;
  gap: 80px;
  grid-template-areas:
    "a a a a . . ."
    ". . . b b b b"
    "c c c c . . ."
    ". . . d d d d"
    "e e e e . . ."
    ". . . f f f f"
    "g g g g . . ."
    ". . . h h h h"
    "i i i i . . ."
    ". . . j j j j"
    "k k k k . . ."
    ". . . l l l l"
    "m m m m . . ."
    ". . . n n n n"
    "o o o o . . ."
    ". . . p p p p";
}
.service {
  @include fluid("width", 980);
  display: flex;
  justify-content: center;
  gap: 30px;
  color: white;
}
.right {
  flex-direction: row-reverse;
  justify-content: end;
  text-align: end;
  .service-img {
    border-radius: 0 0 0 500px;
  }
}
.left .service-img{
    border-radius: 0 0 500px 0;
}
.midle {
  grid-area: z;
}
.service-img {
  @include fluid("width", 500);
  @include fluid("height", 500);
}
.service-txt {
  align-self: center;

  h1 {
    @include fluid("font-size", 40);
  }
  p {
    @include fluid("font-size", 18);
  }
}
</style>
