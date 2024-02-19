<template>
   <div class="slide-list">
        <div class="foo" ref="sliderWight"></div>
        <div class="slider">
          <div class="carousel" ref="sliderContainer" :style="sliderCount">
            <div v-for="t in slideUrl" :key="t">
              <img class="slide" :src="`${t}`" alt="" />
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted} from "vue";

const sliderContainer = ref(null);
const sliderWight = ref(null);
const sliderCount = ref(0)

let sizeScrolSlider = { top: 1000 };
let rect = { top: 1000 };

const slideUrl = [
  "https://static.tildacdn.com/tild6663-3837-4063-a432-376264313735/01.svg",
  "https://static.tildacdn.com/tild6164-6231-4230-a466-343633643665/02.svg",
  "https://static.tildacdn.com/tild3738-6266-4437-b835-646462356366/03.svg",
  "https://static.tildacdn.com/tild6137-3538-4461-a662-636136333464/04.svg",
  "https://static.tildacdn.com/tild6436-6466-4862-b033-393861323432/05.svg",
  "https://static.tildacdn.com/tild3266-3138-4437-b064-306539643436/06.svg",
  "https://static.tildacdn.com/tild3164-3231-4764-b164-616465383034/07.svg",
  "https://static.tildacdn.com/tild6161-3363-4264-b037-643961656561/08.svg",
];


const sliderScroll = () => {
  let y = window.scrollY - Math.round(rect.top);

  if (y < 0)  y = 0
  if (y > sizeScrolSlider)  y = sizeScrolSlider;

  return sliderCount.value = {
    "--multiplier": y,
  };
};

const activeScroll = () => {
    if (window.scrollY >= rect.top) {
    sliderScroll();
  }
}

const handleResize = () => {
  sizeScrolSlider = sliderWight.value.getBoundingClientRect().height; // Обновляем значение ширины окна при изменении размеров окна
};

onMounted(() => {
  window.addEventListener("scroll", activeScroll);
  window.addEventListener("resize", handleResize); // Добавляем обработчик события resize

  rect = sliderContainer.value.getBoundingClientRect();
  sizeScrolSlider = sliderWight.value.getBoundingClientRect().height;
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize); // Удаляем обработчик события resize
});

</script>

<style lang="scss" scoped>
@import "../fluid.sass";

:root {
  --multiplier: 0;
}

.slide-list {
  display: flex;
  justify-content: center;
  @include fluid("padding-top", 50);
  @include fluid("padding-bottom", 50);
  width: 100vw;
  @include fluid("height", 4000);
  background: #f7f7f7;
}
@media (min-width: 700px) and (max-width: 1151px){
  .slide-list {
  height: 2500px
} }
.slider {
  @include fluid("margin-top", 250);
  @include fluid("top", 250);
  position: -webkit-sticky;
  position: sticky;
  @include fluid("width", 1280);
  @include fluid("height", 440);
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
}
.carousel {
  display: flex;
  @include fluid("gap", 40);
  @include fluid("padding-left", 40);
  @include fluid("padding-top", 20);
  @include fluid("padding-bottom", 20);
  flex-wrap: nowrap;
  @include fluid("width", 3800);
  transform: translate(calc(-1px * var(--multiplier)));
}
.slide {
  @include fluid("height", 400);
}
.foo {
  position: absolute;
  @include fluid("height", 2202);
}
</style>