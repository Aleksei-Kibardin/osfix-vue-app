<template>
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
    <div class="midle"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const areaValue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',]

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

.services-wrap {
    margin: 100px;
  height: 100%;
  width: 80vw;
  display: grid;
  gap: 10px;
  grid-template-areas:
    "a a a z . . ."
    ". . . z b b b"
    "c c c z . . ."
    ". . . z d d d"
    "e e e z . . ."
    ". . . z f f f"
    "g g g z . . ."
    ". . . z h h h"
    "i i i z . . ."
    ". . . z j j j"
    "k k k z . . ."
    ". . . z l l l"
    "m m m z . . ."
    ". . . z n n n"
    "o o o z . . ."
    ". . . z p p p";
}
.service {
width: 800px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  color: white;
}
.right {
  flex-direction: row-reverse;
  text-align: end;
}
.midle {
grid-area: z;
}
.service-img {
  width: 500px;
  height: 500px;
}
.service-txt{
    align-self: center;
    h1{
        font-size: 40px;
    }
}
</style>
