<template>
  <div class="slide-list">
    <h1 class="slider-title">Этапы сотрудничества</h1>
    <div class="foo" ref="sliderWight"></div>
    <div class="slider">
      <div class="carousel" ref="sliderContainer" :style="sliderCount">
        <div class="svg-container" v-for="t in slideUrl" :key="t">
          <img class="slide" :src="`${t}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sliderContainer = ref(null);
const sliderWight = ref(null);
const sliderCount = ref(0);

let sizeScrolSlider = { top: 1000 };
let rect = { top: 1000 };

const slideUrl = [
  "./src/assets/01.svg",
  "./src/assets/02.svg",
  "./src/assets/03.svg",
  "./src/assets/04.svg",
  "./src/assets/05.svg",
  "./src/assets/06.svg",
  "./src/assets/07.svg",
  "./src/assets/08.svg",
];

let isMobile = false;

function checkMobile() {
  if (window.innerWidth <= 800) {
    // Примерный порог для мобильных устройств
    isMobile = true;
  }
}

const sliderScroll = () => {
  let y = window.scrollY - Math.round(rect.top);

  if (y < 0) y = 0;
  if (y > sizeScrolSlider) y = sizeScrolSlider;

  return (sliderCount.value = {
    "--multiplier": y,
  });
};

const activeScroll = () => {
  if (window.scrollY >= rect.top) {
    sliderScroll();
  }
};

const handleResize = () => {
  sizeScrolSlider = sliderWight.value.getBoundingClientRect().height; // Обновляем значение ширины окна при изменении размеров окна
};

onMounted(() => {
  checkMobile();
  console.log(isMobile)
  if (isMobile === false) {
    window.addEventListener("scroll", activeScroll);
    window.addEventListener("resize", handleResize);
  }
  // Добавляем обработчик события resize

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
@media (min-width: 700px) and (max-width: 1151px) {
  .slide-list {
    height: 2500px;
  }
}
.slider-title{
  position: absolute;
  color: #000;
  text-align: center
}
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
@media (min-width: 200px) and (max-width: 800px) {
  .slider {
    box-shadow: none;
  }
  .slide{
    padding-bottom: 20px;
    border-bottom: #000 1px solid;
  }
  .carousel {
    gap: 30px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
.slide {
  @include fluid("height", 400);
}
.foo {
  position: absolute;
  @include fluid("height", 2202);
}
</style>
